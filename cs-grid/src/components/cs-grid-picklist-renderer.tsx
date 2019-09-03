import React from 'react';

import {
	CSGridCellRenderer,
	CSGridCellRendererProps,
	CSGridCellRendererState
} from '../models/cs-grid-base-interfaces';
import CSGridCellError from './cs-grid-cell-error';

export default class CSGridPicklistRenderer
	extends React.Component<
		CSGridCellRendererProps<Array<string> | string>,
		CSGridCellRendererState<Array<string> | string>
	>
	implements CSGridCellRenderer {
	constructor(props: CSGridCellRendererProps<Array<string> | string>) {
		super(props);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	refresh = (params: CSGridCellRendererProps<Array<string> | string>): boolean => {
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
			<div className='select-wrapper'>
				<span>{this.format(this.state.value.cellValue)}</span>
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</div>
		);
	}

	private format = (value: Array<string> | string) => {
		if (Array.isArray(value)) {
			if (value.length > 0) {
				return value.reduce((result: string, item: string) => {
					return `${result}, ${item}`;
				});
			} else {
				return '';
			}
		}

		return value;
	};
}
