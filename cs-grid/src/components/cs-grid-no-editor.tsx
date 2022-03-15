import React, { ReactNode } from 'react';
import { CSGridCellEditor } from '../interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps } from '../interfaces/cs-grid-cell-props';

/**
 * Ensures the editor is never opened when clicking a cell using this editor.
 */
export class CSGridNoEditor
	extends React.Component<CSGridCellEditorProps<any>>
	implements CSGridCellEditor {
	constructor(props: CSGridCellEditorProps<any>) {
		super(props);
	}

	/**
	 * Returns the current value - required by ag-grid.
	 */
	getValue() {
		return this.props.value;
	}

	/**
	 * Always reject an edit.
	 */
	isCancelBeforeStart = (): boolean => {
		return true;
	};

	/**
	 * Displays nothing.
	 */
	render = (): ReactNode => {
		return null;
	};
}
