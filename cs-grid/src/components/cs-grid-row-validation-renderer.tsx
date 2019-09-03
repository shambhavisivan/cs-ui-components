import React from 'react';

// TODO: Work around until cs-ui-components npm package exists.
import CSTooltip from '../../../src/components/CSTooltip';
import { CSGridCellRendererProps } from '../models/cs-grid-base-interfaces';
import CSGridBaseRenderer from './cs-grid-base-renderer';

export enum ValidationStatus {
	Info = 'Info',
	Warning = 'Warning',
	Error = 'Error',
	None = 'None'
}

export default class CSGridRowValidationRenderer extends CSGridBaseRenderer<ValidationStatus> {
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
			<span>
				{status !== ValidationStatus.None && (
					<CSTooltip helpText={this.props.value.errorMessage}>
						<span className={className} aria-hidden='true' />
					</CSTooltip>
				)}
			</span>
		);
	}
}
