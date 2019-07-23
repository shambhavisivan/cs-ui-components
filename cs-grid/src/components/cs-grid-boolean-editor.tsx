import React, { ReactNode } from 'react';
import '../../node_modules/react-datepicker/dist/react-datepicker.css';
import { CSGridCellEditor, CSGridCellEditorProps } from '../models/cs-grid-base-interfaces';

export interface CSGridBooleanEditorProps extends CSGridCellEditorProps<boolean> {}

export default class CSGridBooleanEditor extends React.Component<CSGridBooleanEditorProps>
	implements CSGridCellEditor {
	constructor(props: CSGridBooleanEditorProps) {
		super(props);
	}

	getValue() {
		return this.props.value;
	}

	isCancelBeforeStart = (): boolean => {
		return true;
	};

	render = (): ReactNode => {
		return null;
	};
}
