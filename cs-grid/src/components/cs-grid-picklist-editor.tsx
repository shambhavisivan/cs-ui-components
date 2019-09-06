import React from 'react';

import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorProps,
	CSGridCellEditorState
} from '../interfaces/cs-grid-base-interfaces';

export interface CSGridPicklistEditorProps extends CSGridCellEditorProps<string | Array<string>> {
	options: Array<string>;
	filterAboveSize?: number;
	clearAllName?: string;
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
	private defaultClearAllName = '--None--';

	constructor(props: CSGridPicklistEditorProps) {
		super(props);

		const options: Map<string, boolean> = this.getOptions(this.props.value.cellValue);
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

	isCancelBeforeStart = () => {
		return false;
	};

	isCancelAfterEnd = () => {
		return false;
	};

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
			this.props.filterAboveSize < this.props.options.length;

		return (
			<div className='cs-grid_popup-wrapper'>
				{filter && (
					<div className='cs-grid_search-wrapper cs-grid_picklist-search-wrapper'>
						<div className='cs-grid_search'>
							<svg
								className='cs-grid_search-icon'
								xmlns='http://www.w3.org/2000/svg'
								width='14'
								height='14'
							>
								<path
									d='M13.02 11.84L9.38 8.22c.75-1.03 1.12-2.35.92-3.75C9.97 2.11 8.06.25 5.67.03 2.44-.3-.3 2.44.03 5.69c.22 2.35 2.09 4.3 4.43 4.63 1.4.2 2.7-.2 3.75-.92l3.64 3.64c.15.15.42.15.57 0l.58-.57c.18-.19.18-.46.02-.63zM1.65 5.16c0-1.93 1.58-3.53 3.53-3.53s3.53 1.58 3.53 3.53S7.14 8.7 5.19 8.7 1.65 7.14 1.65 5.16z'
									fill='#b0adab'
								/>
							</svg>
							<input
								className='cs-grid_search-input'
								type='text'
								value={this.state.searchTerm}
								onChange={this.onFilterText}
								placeholder={'Search...'}
							/>
							{this.state.searchTerm && (
								<button className='cs-grid_clear-button' onClick={this.clearFilter}>
									<svg
										className='cs-grid_clear-icon'
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										viewBox='0 0 52 52'
									>
										<path d='m31 25.4l13-13.1c0.6-0.6 0.6-1.5 0-2.1l-2-2.1c-0.6-0.6-1.5-0.6-2.1 0l-13.1 13.1c-0.4 0.4-1 0.4-1.4 0l-13.1-13.2c-0.6-0.6-1.5-0.6-2.1 0l-2.1 2.1c-0.6 0.6-0.6 1.5 0 2.1l13.1 13.1c0.4 0.4 0.4 1 0 1.4l-13.2 13.2c-0.6 0.6-0.6 1.5 0 2.1l2.1 2.1c0.6 0.6 1.5 0.6 2.1 0l13.1-13.1c0.4-0.4 1-0.4 1.4 0l13.1 13.1c0.6 0.6 1.5 0.6 2.1 0l2.1-2.1c0.6-0.6 0.6-1.5 0-2.1l-13-13.1c-0.4-0.4-0.4-1 0-1.4z' />
									</svg>
								</button>
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
						{this.props.clearAllName || this.defaultClearAllName}
					</li>
					{dropDownValues}
				</ul>
			</div>
		);
	}

	private clearSelected = async () => {
		const options = new Map(this.state.options);
		for (const option of this.props.options) {
			options.set(option, false);
		}
		await this.onChange(options);
	};

	private optionSelected = async (key: string): Promise<void> => {
		const options = new Map(this.state.options);
		const selected = !options.get(key);

		if (!this.multiSelect) {
			for (const option of this.props.options) {
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
				options: this.getOptions(value.cellValue),
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

		for (const option of this.props.options) {
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

	private getOptions(selected: Array<string> | string) {
		const options: Map<string, boolean> = new Map();

		for (const option of this.props.options) {
			options.set(option, selected.indexOf(option) >= 0);
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
