import * as KeyCode from 'keycode-js';
import React, { ReactNode } from 'react';

import { CSGridCellRenderer } from '../interfaces/cs-grid-base-interfaces';
import { CSGridCellRendererProps, RowSelectionProps } from '../interfaces/cs-grid-cell-props';

export class CSGridRowSelectionRenderer
	extends React.Component<CSGridCellRendererProps<boolean> & RowSelectionProps>
	implements CSGridCellRenderer {
	constructor(props: CSGridCellRendererProps<boolean> & RowSelectionProps) {
		super(props);
	}

	componentDidMount() {
		document.addEventListener('keydown', this.onEnterKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onEnterKeyPress);
	}

	refresh = (): boolean => {
		return true;
	};

	render = (): ReactNode => {
		if (!this.props.getActions) {
			return null;
		}

		return (
			<span className='row-menu-wrapper' title='Row Actions'>
				<button className='icon-menu' onClick={this.startEditing} />
			</span>
		);
	};

	startEditing = async (): Promise<void> => {
		this.props.colDef.editable = true;

		const startEditingParams = {
			colKey: this.props.column.getId(),
			rowIndex: this.props.rowIndex
		};
		this.props.api.startEditingCell(startEditingParams);
	};

	private onEnterKeyPress = (event: KeyboardEvent) => {
		if (
			(event.keyCode === KeyCode.KEY_ENTER || event.keyCode === KeyCode.KEY_RETURN) &&
			event.target === this.props.eGridCell
		) {
			event.preventDefault();
			this.startEditing();
		}
	};
}
