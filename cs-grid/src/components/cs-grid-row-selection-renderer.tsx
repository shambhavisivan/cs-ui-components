import React, { ReactNode } from 'react';

import { CSGridCellRenderer, CSGridCellRendererProps } from '../models/cs-grid-base-interfaces';

export interface CSGridRowSelectionRendererProps extends CSGridCellRendererProps<boolean> {}

export default class CSGridRowSelectionRenderer
	extends React.Component<CSGridRowSelectionRendererProps>
	implements CSGridCellRenderer {
	constructor(props: CSGridRowSelectionRendererProps) {
		super(props);
	}

	refresh = (): boolean => {
		return false;
	};

	render = (): ReactNode => {
		return null;
	};
}
