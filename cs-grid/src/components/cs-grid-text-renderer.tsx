import React from 'react';

import { CSGridCellRendererProps } from '../models/cs-grid-base-interfaces';
import CSGridBaseRenderer from './cs-grid-base-renderer';
import CSGridCellError from './cs-grid-cell-error';

export default class CSGridTextRenderer extends CSGridBaseRenderer<string> {
	constructor(props: CSGridCellRendererProps<string>) {
		super(props);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	render() {
		return (
			<span>
				<span>{this.state.value.cellValue}</span>
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</span>
		);
	}
}
