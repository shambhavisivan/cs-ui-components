import React from 'react';

import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorProps
} from '../models/cs-grid-base-interfaces';
import CSGridCellError from './cs-grid-cell-error';

interface CSGridTextEditorState {
	value: CellData<string>;
}

export default class CSGridTextEditor
	extends React.Component<CSGridCellEditorProps<string>, CSGridTextEditorState>
	implements CSGridCellEditor {
	inputRef: React.RefObject<HTMLInputElement>;

	constructor(props: CSGridCellEditorProps<string>) {
		super(props);

		this.inputRef = React.createRef();
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

	afterGuiAttached() {
		const eInput = this.inputRef.current;
		eInput.focus();
		eInput.select();
	}

	render() {
		return (
			<>
				<input
					type='text'
					ref={this.inputRef}
					value={this.state.value.cellValue}
					onChange={this.onChange}
					placeholder=''
					style={{ width: '90%' }}
				/>
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</>
		);
	}

	private onChange = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
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
}
