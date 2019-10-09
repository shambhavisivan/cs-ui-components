import React from 'react';

import { CSGridCellRendererProps } from '../interfaces/cs-grid-base-interfaces';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSGridTooltip } from './cs-grid-tooltip';

export type ValidationStatus = 'Info' | 'Error' | 'None';

export class CSGridRowValidationRenderer extends CSGridBaseRenderer<ValidationStatus> {
	constructor(props: CSGridCellRendererProps<ValidationStatus>) {
		super(props);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	render() {
		if (!this.props.value) {
			return null;
		}

		const status = this.props.value.cellValue;
		let className: string;
		switch (status) {
			case 'Info':
				className = 'icon-info';
				break;
			case 'Error':
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
				{status !== 'None' && (
					<CSGridTooltip
						additionalClassnames={className + '-wrapper'}
						helpText={this.props.value.errorMessage}
					>
						<span className={className} aria-hidden='true' />
					</CSGridTooltip>
				)}
			</span>
		);
	}
}
