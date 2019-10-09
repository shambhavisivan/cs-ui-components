import React from 'react';

import { CSGridCellRendererProps } from '../interfaces/cs-grid-base-interfaces';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSGridCellError } from './cs-grid-cell-error';

export class CSGridPicklistRenderer extends CSGridBaseRenderer<Array<string> | string> {
	constructor(props: CSGridCellRendererProps<Array<string> | string>) {
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
