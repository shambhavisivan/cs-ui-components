import { CSInputSearch } from '@cloudsense/cs-ui-components';
import React, { Fragment } from 'react';

import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorState
} from '../interfaces/cs-grid-base-interfaces';
import {
	CSGridCellEditorProps,
	PicklistOption,
	PicklistProps
} from '../interfaces/cs-grid-cell-props';

type PicklistCellValueType = string | PicklistOption | Array<string | PicklistOption>;
interface PickListRow {
	isSelected: boolean;
	label: string;
	horizontalDivider?: boolean;
	icon?: JSX.Element;
}
type PickListRows = Map<string, PickListRow>;

interface CSGridPicklistEditorState extends CSGridCellEditorState<PicklistCellValueType> {
	options: PickListRows;
	rows: Array<string | PicklistOption>;
	searchTerm: string;
	noneSelected: boolean;
}

export class CSGridPicklistEditor
	extends React.Component<
		CSGridCellEditorProps<PicklistCellValueType> & PicklistProps,
		CSGridPicklistEditorState
	>
	implements CSGridCellEditor {
	multiSelect: boolean = false;
	private clearAllName = '--None--';
	private divRef: React.RefObject<HTMLDivElement>;
	private clearButtonClass = 'cs-input-search-clear';

	constructor(props: CSGridCellEditorProps<PicklistCellValueType> & PicklistProps) {
		super(props);

		this.divRef = React.createRef();

		const rows = this.props.getOptions(this.props.node.id);
		const options = this.getOptions(this.props.value.cellValue, rows);
		this.state = {
			noneSelected: this.getNoOfSelected(options) === 0,
			options,
			rows,
			searchTerm: '',
			value: this.props.value
		};
	}

	componentDidMount() {
		document.addEventListener('click', this.handleOutsideClick);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleOutsideClick);
	}

	afterGuiAttached() {
		const outerColumnWidth = this.props.column.getActualWidth();
		const popupWrapper: HTMLElement = document.querySelectorAll<HTMLElement>(
			'.cs-grid_app-wrapper .cs-grid_main .ag-popup-editor'
		)[0];

		if (popupWrapper) {
			const currentWidth = popupWrapper.getBoundingClientRect().width;
			const newWidth = Math.max(currentWidth, outerColumnWidth);

			popupWrapper.style.width = `${newWidth}px`;
			popupWrapper.style.maxWidth = `${newWidth}px`;
		}
	}

	isPopup = () => {
		return true;
	};

	/**
	 * Returns the current value - required by ag-grid.
	 */
	getValue() {
		return this.state.value;
	}

	render() {
		const dropDownValues: Array<React.DetailedHTMLProps<
			React.LiHTMLAttributes<HTMLLIElement>,
			HTMLLIElement
		>> = [];

		this.state.options.forEach((option: PickListRow, id: string): void => {
			const selectOption = () => this.optionSelected(id);
			dropDownValues.push(
				<Fragment key={`fragment_${id}`}>
					{option.horizontalDivider && <div className='divider-horizontal' />}
					<li
						className={'picklist-list-item' + (option.isSelected ? ' selected' : '')}
						onClick={selectOption}
						title={option.label}
					>
						{option.icon}
						{option.label}
					</li>
				</Fragment>
			);
		});

		const filter: boolean =
			this.props.filterAboveSize !== undefined &&
			this.props.filterAboveSize < this.state.rows.length;

		return (
			<div className='cs-grid_popup-wrapper' ref={this.divRef}>
				{dropDownValues.length > 0 || !this.props.getEmptyPicklistContent ? (
					<>
						{filter && (
							<div className='cs-grid_search-wrapper cs-grid_picklist-search-wrapper'>
								<div className='cs-grid_search'>
									<CSInputSearch
										label='Search'
										labelHidden={true}
										value={this.state.searchTerm}
										onChange={this.onFilterText}
										placeholder={'Search...'}
										title={
											this.state.searchTerm
												? `Search value ${this.state.searchTerm}`
												: 'Search...'
										}
									/>
								</div>
							</div>
						)}
						<ul className='picklist-list'>
							<li
								className={
									'picklist-list-item' +
									(this.state.noneSelected ? ' selected' : '')
								}
								key='0'
								onClick={this.clearSelected}
							>
								{this.clearAllName}
							</li>
							{dropDownValues}
						</ul>
					</>
				) : (
					this.props.getEmptyPicklistContent(this.props.node.id)
				)}
			</div>
		);
	}

	private clearSelected = async () => {
		const options: PickListRows = new Map(this.state.options);
		for (const option of this.state.rows) {
			this.setRow(options, option, false);
		}
		await this.onChange(options);
	};

	private optionSelected = async (id: string): Promise<void> => {
		const options = new Map(this.state.options);
		const toggleSelection =
			this.multiSelect || this.props.toggleSelection === undefined
				? true
				: this.props.toggleSelection;
		const selected = toggleSelection ? !options.get(id).isSelected : true;

		if (!this.multiSelect) {
			for (const option of this.state.rows) {
				this.setRow(options, option, false);
			}
		}
		this.setRow(options, { id, label: options.get(id).label }, selected);

		await this.onChange(options);
	};

	private onChange = async (options: PickListRows): Promise<void> => {
		const cellValue = this.getSelected(options);
		let value: CellData<PicklistCellValueType> = {
			cellValue,
			errorMessage: this.state.value.errorMessage
		};

		if (this.props.onChange) {
			value = await this.props.onChange(
				this.props.node.id,
				this.getValue().cellValue,
				cellValue
			);
		}

		this.setState(
			{
				noneSelected: this.getNoOfSelected(options) === 0,
				options: this.getOptions(value.cellValue, this.state.rows),
				value
			},
			() => {
				if (!this.multiSelect) {
					this.props.stopEditing();
				}
			}
		);
	};

	private onFilterText = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.filterText(event.target.value);
	};

	private filterText = (searchTerm: string) => {
		const options: PickListRows = new Map();

		const fullList = this.getOptions(this.props.value.cellValue, this.state.rows);

		for (const [id, pickListRow] of fullList.entries()) {
			if (pickListRow.label.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
				options.set(id, fullList.get(id));
			}
		}

		this.setState({ options, searchTerm });
	};

	private getSelected = (options: PickListRows): PicklistCellValueType => {
		const values: Array<string | PicklistOption> = [];

		const stringCells = typeof this.state.rows[0] === 'string';

		for (const [id, pickListRow] of options.entries()) {
			if (pickListRow.isSelected) {
				values.push(stringCells ? id : { id, label: pickListRow.label });
			}
		}

		if (!this.multiSelect) {
			return values[0] || '';
		}

		return values;
	};

	private getOptions = (
		selected: PicklistCellValueType,
		pickListRows: Array<string | PicklistOption>
	) => {
		const options: PickListRows = new Map();

		for (const option of pickListRows) {
			const id = typeof option === 'string' ? option : option.id;
			const label = typeof option === 'string' ? option : option.label;
			const horizontalDivider = typeof option !== 'string' && option.horizontalDivider;
			const icon = typeof option === 'string' ? undefined : option.icon;

			let isSelected = false;
			if (selected) {
				let _selected = Array.isArray(selected) ? selected : [selected];
				_selected = _selected.map(selectedOption =>
					typeof selectedOption === 'string' ? selectedOption : selectedOption.id
				);

				isSelected = _selected.includes(id);
			}

			options.set(id, { isSelected, label, horizontalDivider, icon });
		}

		return options;
	};

	private getNoOfSelected = (options: PickListRows): number => {
		let total: number = 0;
		for (const selected of options.values()) {
			if (selected.isSelected) {
				total++;
			}
		}

		return total;
	};

	private setRow = (
		options: PickListRows,
		option: string | PicklistOption,
		isSelected: boolean
	) => {
		const id = typeof option === 'string' ? option : option.id;
		const label = typeof option === 'string' ? option : option.label;
		const horizontalDivider = typeof option !== 'string' && option.horizontalDivider;
		const icon = typeof option === 'string' ? undefined : option.icon;

		options.set(id, { isSelected, label, horizontalDivider, icon });
	};

	private handleOutsideClick = (event: MouseEvent) => {
		const node = event.target as HTMLElement;
		if (
			this.divRef.current &&
			!this.divRef.current.contains(node) &&
			// The clear button no longer exists by the time the code gets here so we cannot use a ref.
			!node.classList.contains(this.clearButtonClass)
		) {
			this.props.stopEditing();
		}
	};
}
