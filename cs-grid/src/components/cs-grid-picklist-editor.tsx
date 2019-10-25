import React from 'react';

import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorProps,
	CSGridCellEditorState
} from '../interfaces/cs-grid-base-interfaces';

export interface CSGridPicklistEditorProps extends CSGridCellEditorProps<string | Array<string>> {
	filterAboveSize?: number;
	getOptions(guid: string): Array<string>;
}

interface CSGridPicklistEditorState extends CSGridCellEditorState<string | Array<string>> {
	options: Map<string, boolean>;
	searchTerm: string;
	noneSelected: boolean;
}

export class CSGridPicklistEditor
	extends React.Component<CSGridPicklistEditorProps, CSGridPicklistEditorState>
	implements CSGridCellEditor {
	multiSelect: boolean = false;
	private clearAllName = '--None--';

	constructor(props: CSGridPicklistEditorProps) {
		super(props);

		const options: Map<string, boolean> = this.getSelectedOptions(this.props.value.cellValue);
		this.state = {
			noneSelected: this.getNoOfSelected(options) === 0,
			options,
			searchTerm: '',
			value: this.props.value
		};
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
		const dropDownValues: Array<
			React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
		> = [];

		this.state.options.forEach((selected: boolean, key: string): void => {
			const selectOption = () => this.optionSelected(key);
			dropDownValues.push(
				<li
					className={'picklist-list-item' + (selected ? ' selected' : '')}
					key={key}
					onClick={selectOption}
				>
					{key}
				</li>
			);
		});

		const filter: boolean =
			this.props.filterAboveSize !== undefined &&
			this.props.filterAboveSize < this.props.getOptions(this.props.node.id).length;

		return (
			<div className='cs-grid_popup-wrapper'>
				{filter && (
					<div className='cs-grid_search-wrapper cs-grid_picklist-search-wrapper'>
						<div className='cs-grid_search'>
							<span className='cs-grid_search-icon' />
							<input
								className='cs-grid_search-input'
								type='text'
								value={this.state.searchTerm}
								onChange={this.onFilterText}
								placeholder={'Search...'}
								title={
									this.state.searchTerm
										? `Search value ${this.state.searchTerm}`
										: 'Search...'
								}
							/>
							{this.state.searchTerm && (
								<button
									className='cs-grid_clear-button'
									onClick={this.clearFilter}
									title='Clear filter'
								/>
							)}
						</div>
					</div>
				)}
				<ul className='picklist-list'>
					<li
						className={
							'picklist-list-item' + (this.state.noneSelected ? ' selected' : '')
						}
						key='0'
						onClick={this.clearSelected}
					>
						{this.clearAllName}
					</li>
					{dropDownValues}
				</ul>
			</div>
		);
	}

	private clearSelected = async () => {
		const options = new Map(this.state.options);
		for (const option of this.props.getOptions(this.props.node.id)) {
			options.set(option, false);
		}
		await this.onChange(options);
	};

	private optionSelected = async (key: string): Promise<void> => {
		const options = new Map(this.state.options);
		const selected = !options.get(key);

		if (!this.multiSelect) {
			for (const option of this.props.getOptions(this.props.node.id)) {
				options.set(option, false);
			}
		}
		options.set(key, selected);

		await this.onChange(options);
	};

	private onChange = async (options: Map<string, boolean>): Promise<void> => {
		const cellValue = this.getSelected(options);
		let value: CellData<string | Array<string>> = {
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
				options: this.getSelectedOptions(value.cellValue),
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

	private clearFilter = () => {
		this.filterText('');
	};

	private filterText = (searchTerm: string) => {
		const options: Map<string, boolean> = new Map();

		for (const option of this.props.getOptions(this.props.node.id)) {
			if (option.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
				options.set(option, this.state.options.get(option));
			}
		}

		this.setState({ options, searchTerm });
	};

	private getSelected = (options: Map<string, boolean>): Array<string> | string => {
		const values: Array<string> = [];
		for (const [key, value] of options.entries()) {
			if (value) {
				values.push(key);
			}
		}

		if (!this.multiSelect) {
			return values[0] || '';
		}

		return values;
	};

	private getSelectedOptions(selected: Array<string> | string) {
		const options: Map<string, boolean> = new Map();

		for (const option of this.props.getOptions(this.props.node.id)) {
			options.set(option, selected && selected.indexOf(option) >= 0);
		}

		return options;
	}

	private getNoOfSelected = (options: Map<string, boolean>): number => {
		let total: number = 0;
		for (const selected of options.values()) {
			if (selected) {
				total++;
			}
		}

		return total;
	};
}
