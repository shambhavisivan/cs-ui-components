import React from 'react';

import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorProps
} from '../models/cs-grid-base-interfaces';
import CSGridCellError from './cs-grid-cell-error';

export interface CSGridTextEditorProps extends CSGridCellEditorProps<string> {}

interface CSGridTextEditorState {
	value: CellData<string>;
}

export default class CSGridTextEditor
	extends React.Component<CSGridTextEditorProps, CSGridTextEditorState>
	implements CSGridCellEditor {
	private KEY_BACKSPACE = 8;
	private KEY_DELETE = 46;

	constructor(props: CSGridTextEditorProps) {
		super(props);

		this.state = { value: this.props.value };
	}

	getValue() {
		return this.state.value;
	}

	isCancelBeforeStart = () => {
		return false;
	};

	isCancelAfterEnd = () => {
		return false;
	};

	isPopup = () => {
		return false;
	};

	onKeyDown = (event: KeyboardEvent) => {
		if (this.isLeftOrRight(event) || this.deleteOrBackspace(event)) {
			event.stopPropagation();

			return;
		}
	};

	isLeftOrRight = (event: KeyboardEvent) => {
		return [37, 39].indexOf(event.keyCode) > -1;
	};

	deleteOrBackspace = (event: KeyboardEvent) => {
		return [this.KEY_DELETE, this.KEY_BACKSPACE].indexOf(event.keyCode) > -1;
	};

	onChange = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
		const newValue = event.target.value;

		let value: CellData<string> = {
			cellValue: newValue,
			errorMessage: this.state.value.errorMessage
		};

		if (this.props.onChange) {
			value = await this.props.onChange(
				this.props.node.id,
				this.getValue().cellValue,
				newValue
			);
		}

		this.setState({ value });
	};

	render() {
		return (
			<>
				<input
					type='text'
					value={this.state.value.cellValue}
					onChange={this.onChange}
					placeholder=''
					style={{ width: '90%' }}
				/>
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</>
		);
	}
}
