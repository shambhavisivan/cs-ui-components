import React, { ReactNode } from 'react';
import '../../node_modules/react-datepicker/dist/react-datepicker.css';
import { CSGridCellEditor, CSGridCellEditorProps } from '../models/cs-grid-base-interfaces';

export default class CSGridBooleanEditor extends React.Component<CSGridCellEditorProps<boolean>>
	implements CSGridCellEditor {
	constructor(props: CSGridCellEditorProps<boolean>) {
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
