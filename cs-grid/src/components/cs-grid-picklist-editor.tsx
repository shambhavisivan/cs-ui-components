import React from 'react';

import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorProps
} from '../models/cs-grid-base-interfaces';
import CSGridCellError from './cs-grid-cell-error';

export interface CSGridPicklistEditorProps extends CSGridCellEditorProps<string | Array<string>> {
	options: Array<string>;
	filterAboveSize?: number;
}

interface CSGridPicklistEditorState {
	options: Map<string, boolean>;
	searchTerm: string;
	errorMessage: string;
}

export default class CSGridPicklistEditor
	extends React.Component<CSGridPicklistEditorProps, CSGridPicklistEditorState>
	implements CSGridCellEditor {
	multiSelect: boolean = false;
	private noneSelected = '--None--';

	constructor(props: CSGridPicklistEditorProps) {
		super(props);

		const options: Map<string, boolean> = this.getOptions(this.props.value.cellValue);
		this.state = { options, searchTerm: '', errorMessage: this.props.value.errorMessage };
	}

	isPopup = () => {
		return true;
	};

	getValue() {
		return {
			cellValue: this.getSelected(this.state.options),
			errorMessage: this.state.errorMessage
		};
	}

	isCancelBeforeStart = () => {
		return false;
	};

	isCancelAfterEnd = () => {
		return false;
	};

	render() {
		const value = this.getValue().cellValue;

		let currentlySelected: string;
		if (value.length > 0) {
			if (!this.multiSelect) {
				currentlySelected = value as string;
			} else {
				currentlySelected = (value as Array<string>).reduce(
					(result: string, item: string) => {
						return `${result}, ${item}`;
					}
				);
			}
		} else {
			currentlySelected = this.noneSelected;
		}

		const dropDownValues: Array<
			React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
		> = [];

		this.state.options.forEach(
			(selected: boolean, key: string, map: Map<string, boolean>): void => {
				const selectOption = () => this.onChange(key);
				dropDownValues.push(
					<li
						className={'picklist-list-item' + (selected ? ' selected' : '')}
						key={key}
						onClick={selectOption}
					>
						{key}
					</li>
				);
			}
		);

		const filter: boolean =
			this.props.filterAboveSize !== undefined &&
			this.props.filterAboveSize < this.props.options.length;

		return (
			<div className='cs-grid_popup-wrapper'>
				{filter ? (
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
				) : (
					// <div className='picklist-header'>
					// 	<div className='picklist-header-title'>{currentlySelected}</div>
					// </div>
					<></>
				)}
				<ul className='picklist-list'>{dropDownValues}</ul>
			</div>
		);
	}

	private onChange = async (key: string): Promise<void> => {
		const options = new Map(this.state.options);
		const selected = !options.get(key);

		if (!this.multiSelect) {
			for (const option of this.props.options) {
				options.set(option, false);
			}
		}
		options.set(key, selected);

		const cellValue = this.getSelected(options);
		let value: CellData<string | Array<string>> = {
			cellValue,
			errorMessage: this.state.errorMessage
		};

		if (this.props.onChange) {
			value = await this.props.onChange(
				this.props.node.id,
				this.getValue().cellValue,
				cellValue
			);
		}

		this.setState(
			{ options: this.getOptions(value.cellValue), errorMessage: value.errorMessage },
			() => {
				if (!this.multiSelect) {
					this.props.stopEditing();
				}
			}
		);
	};

	private onFilterText = (event: React.ChangeEvent<HTMLInputElement>) => {
		const searchTerm = event.target.value;
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
}
