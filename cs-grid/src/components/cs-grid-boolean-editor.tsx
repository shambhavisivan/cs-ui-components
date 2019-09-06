import React, { ReactNode } from 'react';
import { CSGridCellEditor, CSGridCellEditorProps } from '../interfaces/cs-grid-base-interfaces';

/**
 * Required to ensure an editor is never opened when clicking a boolean type cell
 * because a boolean cell is managed in the renderer.
 */
export class CSGridBooleanEditor extends React.Component<CSGridCellEditorProps<boolean>>
	implements CSGridCellEditor {
	constructor(props: CSGridCellEditorProps<boolean>) {
		super(props);
	}

	/**
	 * Returns the current value - required by ag-grid.
	 */
	getValue() {
		return this.props.value;
	}

	/**
	 * Always reject an edit because a boolean cell is managed in the renderer.
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
