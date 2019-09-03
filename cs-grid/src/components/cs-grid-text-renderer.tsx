import React from 'react';

import {
	CSGridCellRenderer,
	CSGridCellRendererProps,
	CSGridCellRendererState
} from '../models/cs-grid-base-interfaces';
import CSGridCellError from './cs-grid-cell-error';

export default class CSGridTextRenderer
	extends React.Component<CSGridCellRendererProps<string>, CSGridCellRendererState<string>>
	implements CSGridCellRenderer {
	constructor(props: CSGridCellRendererProps<string>) {
		super(props);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	refresh = (params: CSGridCellRendererProps<string>): boolean => {
		const isLastColumn = this.isLastColumn();
		if (
			params.value.cellValue !== this.state.value.cellValue ||
			params.value.errorMessage !== this.state.value.errorMessage ||
			isLastColumn !== this.state.isLastColumn
		) {
			this.setState({
				isLastColumn,
				value: params.value
			});
		}

		return true;
	};

	isLastColumn = (): boolean => {
		const currentColumns = this.props.columnApi.getAllGridColumns();

		return (
			currentColumns[currentColumns.length - 1].getColId() === this.props.column.getColId()
		);
	};

	render() {
		return (
			<span>
				<span>{this.state.value.cellValue}</span>
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</span>
		);
	}
}
