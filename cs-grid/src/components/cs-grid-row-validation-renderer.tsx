import React from 'react';

import { CSIcon, CSTooltip } from '@cloudsense/cs-ui-components';
// tslint:disable-next-line: no-submodule-imports
import { CSTooltipVariant } from '@cloudsense/cs-ui-components/dist/src/components/CSTooltip';
import {
	CSGridCellRendererProps,
	Icon,
	isStandardIcon,
	RowValidationProps
} from '../interfaces/cs-grid-cell-props';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';

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
		let iconsToShow;
		if (typeof cellValue === 'object') {
			status = cellValue.status;
			iconsToShow = cellValue.icons;
		} else {
			status = cellValue;
		}

		let className: CSTooltipVariant;
		switch (status) {
			case 'Info':
				className = 'info';
				break;
			case 'Error':
				className = 'error';
				break;
		}

		const icons: Array<Icon> = [];
		if (this.props.getIcons && iconsToShow) {
			const iconMapping = this.props.getIcons(this.props.node.id);

			for (const iconName of iconsToShow) {
				const icon = iconMapping[iconName];
				if (icon) {
					if (isStandardIcon(icon)) {
						icons.push(
							<CSIcon
								name={icon.iconName}
								color={icon.color}
								origin={icon.iconOrigin}
							/>
						);
					} else {
						icons.push(icon);
					}
				}
			}
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
						variant={className}
						position={this.state.isLastColumn ? 'top-left' : 'top-right'}
					/>
				)}
				{icons.map((icon, index) => (
					<React.Fragment key={index}>{icon}</React.Fragment>
				))}
			</span>
		);
	}
}
