import React from 'react';

import { CSGridCellRendererProps } from '../interfaces/cs-grid-base-interfaces';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSGridCellError } from './cs-grid-cell-error';

export class CSGridNumberRenderer<
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
			<span
				className={
					(this.state.isLastColumn ? ' is-last-column' : '') +
					(this.isReadOnly() ? ' read-only-cell' : '')
				}
			>
				<span>{this.format(this.state.value.cellValue)}</span>
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</span>
		);
	}

	private format = (value: number | string): string => {
		if (value === undefined || value === null) {
			return '';
		}

		let result: any = this.numberFormat.format(value as any);

		if (typeof value === 'string') {
			let replaced: string;
			const decimalSeparator = this.getSeparator(this.props.userInfo.userLocale, 'decimal');
			if (decimalSeparator === ',') {
				// remove periods;
				replaced = value.replace(/[\s.]+/g, '');
				// replace remaining comma with a period;
				replaced = replaced.replace(/\,/, '.');
			} else {
				replaced = value.replace(/[\s,]+/g, '');
			}

			result = parseFloat(replaced);
		} else {
			result = value;
		}

		result = this.numberFormat.format(result);

		if (result.indexOf('NaN') > -1 || value === '') {
			result = value.toString();
		}

		return result;
	};

	private getSeparator = (locale: string, separatorType: string): string => {
		const numberWithGroupAndDecimalSeparator = 1000.1;

		return (Intl.NumberFormat(locale) as any)
			.formatToParts(numberWithGroupAndDecimalSeparator)
			.find((part: any) => part.type === separatorType).value;
	};
}
