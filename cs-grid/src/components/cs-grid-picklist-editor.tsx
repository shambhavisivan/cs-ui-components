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
			<div style={{ width: this.props.column.getActualWidth() }}>
				{filter ? (
					<>
						<input
							type='text'
							value={this.state.searchTerm}
							onChange={this.onFilterText}
							placeholder={'Search...'}
						/>
					</>
				) : (
					<div className='picklist-header'>
						<div className='picklist-header-title'>{currentlySelected}</div>
					</div>
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
