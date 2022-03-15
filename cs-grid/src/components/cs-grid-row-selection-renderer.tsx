import React, { ReactNode } from 'react';

import { CSGridCellRenderer } from '../interfaces/cs-grid-base-interfaces';
import { CSGridCellRendererProps } from '../interfaces/cs-grid-cell-props';
import {
	CSGridBaseActionsRenderer,
	CSGridBaseActionsRendererProps
} from './cs-grid-base-actions-renderer';

export class CSGridRowSelectionRenderer
	extends CSGridBaseActionsRenderer<boolean, CSGridBaseActionsRendererProps<boolean>>
	implements CSGridCellRenderer {
	buttonRefs: Array<HTMLButtonElement> = [];
	dropdownRef: HTMLButtonElement;
	focusedIndex = 0;

	constructor(props: CSGridCellRendererProps<boolean>) {
		super(props);

		this.state = {
			actions: this.props.getActions ? this.props.getActions(this.props.node.id) : [],
			isLastColumn: this.isLastColumn(),
			noOfInlineIcons: this.props.noOfInlineIcons || 0,
			useDropdown: true,
			value: this.props.value
		};
	}

	render = (): ReactNode => {
		return <this.Actions />;
	};
}
