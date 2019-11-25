import React from 'react';

import { CSGridCellRendererProps, LookupProps } from '../interfaces/cs-grid-cell-props';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSGridCellError } from './cs-grid-cell-error';

/**
 * A cell renderer for displaying the currently selected lookup values.
 */
export class CSGridLookupRenderer extends CSGridBaseRenderer<
	Array<Record<string, string>> | Record<string, string>,
	CSGridCellRendererProps<Array<Record<string, string>> | Record<string, string>> & LookupProps
> {
	constructor(
		props: CSGridCellRendererProps<Array<Record<string, string>> | Record<string, string>> &
			LookupProps
	) {
		super(props);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	render() {
		if (!this.state.value) {
			return null;
		}

		const value = this.format(this.state.value.cellValue);

		return (
			<span
				className={`select-wrapper ${this.state.isLastColumn ? 'is-last-column' : ''} ${
					this.isReadOnly() ? 'read-only-cell' : ''
				}`}
			>
				<span title={value}>{value}</span>
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</span>
		);
	}

	/**
	 * Formats the currently selected values.
	 */
	private format = (value: Array<Record<string, string>> | Record<string, string>) => {
		if (!value) {
			return '';
		}
		if (Array.isArray(value)) {
			if (value.length > 0) {
				let displayValue = '';
				for (const row of value) {
					displayValue += `${row[this.props.displayColumn]}, `;
				}

				return displayValue.substring(0, displayValue.length - 2);
			} else {
				return '';
			}
		}

		return value[this.props.displayColumn];
	};
}
