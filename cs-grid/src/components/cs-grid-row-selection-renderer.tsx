import React, { ReactNode } from 'react';

import { CSGridCellRenderer } from '../interfaces/cs-grid-base-interfaces';
import { CSGridCellRendererProps } from '../interfaces/cs-grid-cell-props';

export class CSGridRowSelectionRenderer extends React.Component<CSGridCellRendererProps<boolean>>
	implements CSGridCellRenderer {
	constructor(props: CSGridCellRendererProps<boolean>) {
		super(props);
	}

	refresh = (): boolean => {
		return true;
	};

	render = (): ReactNode => {
		return null;
	};
}
