import React, { ReactNode } from 'react';

import { CSGridCellRenderer, CSGridCellRendererProps } from '../models/cs-grid-base-interfaces';

export default class CSGridRowSelectionRenderer
	extends React.Component<CSGridCellRendererProps<boolean>>
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
