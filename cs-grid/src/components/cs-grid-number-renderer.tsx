import React from 'react';

import { CSGridCellRendererProps } from '../models/cs-grid-base-interfaces';
import CSGridBaseRenderer from './cs-grid-base-renderer';
import CSGridCellError from './cs-grid-cell-error';

export default class CSGridNumberRenderer<
	P extends CSGridCellRendererProps<number>
> extends CSGridBaseRenderer<number, P> {
	numberFormat: Intl.NumberFormat;

	constructor(props: P) {
		super(props);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	componentDidMount() {
		this.refresh(this.props);
	}

	render() {
		return (
			<span style={{ textAlign: 'right' }}>
				<span>{this.format(this.state.value.cellValue)}</span>
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</span>
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
