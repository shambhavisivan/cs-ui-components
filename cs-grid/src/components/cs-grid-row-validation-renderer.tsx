import React from 'react';

import { CSGridCellRendererProps } from '../interfaces/cs-grid-base-interfaces';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSGridTooltip } from './cs-grid-tooltip';

export enum ValidationStatus {
	Info = 'Info',
	Warning = 'Warning',
	Error = 'Error',
	None = 'None'
}

export class CSGridRowValidationRenderer extends CSGridBaseRenderer<ValidationStatus> {
	constructor(props: CSGridCellRendererProps<ValidationStatus>) {
		super(props);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	render() {
		const status = this.props.value.cellValue;
		let className: string;
		switch (status) {
			case ValidationStatus.Info:
				className = 'icon-info';
				break;
			case ValidationStatus.Warning:
				className = 'icon-warning';
				break;
			case ValidationStatus.Error:
				className = 'icon-error';
				break;
		}

		return (
			<span
				className={
					(this.state.isLastColumn ? ' is-last-column' : '') +
					(this.isReadOnly() ? ' read-only-cell' : '')
				}
			>
				{status !== ValidationStatus.None && (
					<CSGridTooltip helpText={this.props.value.errorMessage}>
						<span className={className} aria-hidden='true' />
					</CSGridTooltip>
				)}
			</span>
		);
	}
}
