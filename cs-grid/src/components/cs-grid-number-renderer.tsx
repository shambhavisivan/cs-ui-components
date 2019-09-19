import React from 'react';

import {
	CSGridCellRendererProps,
	CSGridCellRendererState
} from '../interfaces/cs-grid-base-interfaces';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSGridCellError } from './cs-grid-cell-error';

interface CSGridNumberRendererState extends CSGridCellRendererState<number> {
	numberFormat: Intl.NumberFormat;
}
export abstract class CSGridNumberRenderer<
	P extends CSGridCellRendererProps<number>
> extends CSGridBaseRenderer<number, P, CSGridNumberRendererState> {
	constructor(props: P) {
		super(props);

		this.state = {
			isLastColumn: this.isLastColumn(),
			numberFormat: undefined,
			value: this.props.value
		};
	}

	async componentDidMount() {
		const numberFormat = await this.getNumberFormat();
		this.setState(
			{
				numberFormat
			},
			() => {
				this.refresh(this.props);
			}
		);
	}

	render() {
		const value = this.format(this.state.value.cellValue);

		return (
			<span
				className={
					(this.state.isLastColumn ? ' is-last-column' : '') +
					(this.isReadOnly() ? ' read-only-cell' : '')
				}
			>
				<span title={value}>{value}</span>
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</span>
		);
	}

	abstract async getNumberFormat(): Promise<any>;

	private format = (value: number | string): string => {
		if (value === undefined || value === null) {
			return '';
		}

		if (!this.state.numberFormat) {
			return `${value}`;
		}

		let result: any = this.state.numberFormat.format(value as any);

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

		result = this.state.numberFormat.format(result);

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
