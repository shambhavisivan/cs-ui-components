import React from 'react';

import { CSTooltip } from '@cloudsense/cs-ui-components';
import { CSGridCellRendererProps, LookupProps } from '../interfaces/cs-grid-cell-props';
import {
	formatRows,
	replaceAll,
	replacementString
} from '../utils/cs-grid-lookup-formatting-helper';
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
		const contents = <span title={value}>{value}</span>;
		let tooltip;
		if (this.props.getTooltip) {
			tooltip = this.props.getTooltip(this.props.node.id);
		}

		return (
			<span className={`select-wrapper ${this.isReadOnly() ? 'read-only-cell' : ''}`}>
				{tooltip ? (
					<CSTooltip content={tooltip.content} delayTooltip={tooltip.delay}>
						{contents}
					</CSTooltip>
				) : (
					contents
				)}
				<CSGridCellError
					errorMessage={this.state.value.errorMessage}
					position={this.state.isLastColumn ? 'top-left' : 'top-right'}
				/>
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
				const rows = formatRows(value, replacementString, '.');

				let displayValue = '';
				for (const row of rows) {
					displayValue += `${row[this.props.displayColumn]}, `;
				}

				return displayValue.substring(0, displayValue.length - 2);
			} else {
				return '';
			}
		}

		const formattedRow = replaceAll(value, replacementString, '.');

		return formattedRow[this.props.displayColumn];
	};
}
