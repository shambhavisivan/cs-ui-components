import React from 'react';

import {
	CSGridCellRenderer,
	CSGridCellRendererProps,
	CSGridCellRendererState
} from '../models/cs-grid-base-interfaces';
import CSGridCellError from './cs-grid-cell-error';

export default class CSGridNumberRenderer<P extends CSGridCellRendererProps<number>>
	extends React.Component<P, CSGridCellRendererState<number>>
	implements CSGridCellRenderer {
	numberFormat: Intl.NumberFormat;

	constructor(props: P) {
		super(props);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	refresh = (params: P): boolean => {
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

	componentDidMount() {
		this.refresh(this.props);
	}

	render() {
		return (
			<div style={{ textAlign: 'right' }}>
				{this.format(this.state.value.cellValue)}{' '}
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</div>
		);
	}

	private format = (value: number | string): string => {
		if (value === undefined || value === null) {
			return '';
		}

		let result: string = this.numberFormat.format(Number(value));

		if (result.indexOf('NaN') > -1 || value === '') {
			result = value.toString();
		}

		return result;
	};
}
