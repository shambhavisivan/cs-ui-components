import React from 'react';

import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorState
} from '../interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps } from '../interfaces/cs-grid-cell-props';
import { CSGridCellError } from './cs-grid-cell-error';

export class CSGridTextEditor
	extends React.Component<CSGridCellEditorProps<string>, CSGridCellEditorState<string>>
	implements CSGridCellEditor {
	inputRef: React.RefObject<HTMLInputElement>;

	constructor(props: CSGridCellEditorProps<string>) {
		super(props);

		this.inputRef = React.createRef();
		this.state = { value: this.props.value };
	}

	/**
	 * Returns the current value - required by ag-grid.
	 */
	getValue() {
		return this.state.value;
	}

	/**
	 * Focus on the cell when its opened.
	 */
	afterGuiAttached() {
		const eInput = this.inputRef.current;
		if (eInput) {
			eInput.focus();
			eInput.select();
		}
	}

	render() {
		const value = this.state.value.cellValue || '';

		return (
			<>
				<input
					type='text'
					ref={this.inputRef}
					value={value}
					onChange={this.onChange}
					placeholder=''
					className='cs-grid_text-inner'
					title={value}
				/>
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</>
		);
	}

	private onChange = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
		const newValue = event.target.value || '';

		let value: CellData<string> = {
			cellValue: newValue,
			errorMessage: this.state.value.errorMessage
		};

		this.setState({ value });

		if (this.props.onChange) {
			value = await this.props.onChange(
				this.props.node.id,
				this.getValue().cellValue,
				newValue
			);
		}

		this.setState({ value });
	};
}
