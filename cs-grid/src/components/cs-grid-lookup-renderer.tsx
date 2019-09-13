import React from 'react';

import { CSGridCellRendererProps } from '../interfaces/cs-grid-base-interfaces';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSGridCellError } from './cs-grid-cell-error';

/**
 * displayColumn - The column to display in the renderer.
 */
export interface CSGridLookupRendererProps
	extends CSGridCellRendererProps<Array<Record<string, string>> | Record<string, string>> {
	displayColumn: string;
}

/**
 * A cell renderer for displaying the currently selected lookup values.
 */
export class CSGridLookupRenderer extends CSGridBaseRenderer<
	Array<Record<string, string>> | Record<string, string>,
	CSGridLookupRendererProps
> {
	constructor(props: CSGridLookupRendererProps) {
		super(props);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	render() {
		return (
			<span
				className={`select-wrapper ${this.state.isLastColumn ? 'is-last-column' : ''} ${
					this.isReadOnly() ? 'read-only-cell' : ''
				}`}
			>
				<span>{this.format(this.state.value.cellValue)}</span>
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
