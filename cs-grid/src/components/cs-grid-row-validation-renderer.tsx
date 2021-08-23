import React from 'react';

import { CSTooltip, CSTooltipVariant } from '@cloudsense/cs-ui-components';
import { CSGridCellRendererProps, RowValidationProps } from '../interfaces/cs-grid-cell-props';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSCustomDataHelper } from './cs-grid-custom-data-helper';

export type ValidationStatus = 'Info' | 'Error' | 'None';

export interface RowValidationValues {
	status: ValidationStatus;
	icons: Array<string>;
}

export class CSGridRowValidationRenderer extends CSGridBaseRenderer<
	ValidationStatus | RowValidationValues,
	CSGridCellRendererProps<ValidationStatus | RowValidationValues> & RowValidationProps
> {
	constructor(props: CSGridCellRendererProps<ValidationStatus | RowValidationValues>) {
		super(props);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	render() {
		if (!this.state.value) {
			return null;
		}

		const cellValue = this.state.value.cellValue;

		let status;
		if (typeof cellValue === 'object') {
			status = cellValue.status;
		} else {
			status = cellValue;
		}

		let variant: CSTooltipVariant;
		switch (status) {
			case 'Info':
				variant = 'info';
				break;
			case 'Error':
				variant = 'error';
				break;
		}

		return (
			<span
				className={
					this.isReadOnly() ? 'cs-grid_icon-cell read-only-cell' : 'cs-grid_icon-cell'
				}
			>
				{status !== 'None' && (
					<CSTooltip
						content={this.state.value.errorMessage}
						variant={variant}
						position={this.state.isLastColumn ? 'top-left' : 'top-right'}
					/>
				)}
				<CSCustomDataHelper
					getIcons={this.props.getIcons}
					nodeId={this.props.node.id}
					api={this.props.api}
				/>
			</span>
		);
	}
}
