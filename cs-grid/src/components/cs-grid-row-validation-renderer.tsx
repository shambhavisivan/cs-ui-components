import React from 'react';

import { CSIcon } from '@cloudsense/cs-ui-components';
import {
	CSGridCellRendererProps,
	Icon,
	isStandardIcon,
	RowValidationProps
} from '../interfaces/cs-grid-cell-props';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSGridTooltip } from './cs-grid-tooltip';

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

		let className: string;
		switch (status) {
			case 'Info':
				className = 'icon-info';
				break;
			case 'Error':
				className = 'icon-error';
				break;
		}

		const icons: Array<Icon> = [];
		if (this.props.getIcons && iconsToShow) {
			const iconMapping = this.props.getIcons(this.props.node.id);

			for (const iconName of iconsToShow) {
				const icon = iconMapping[iconName];
				if (icon) {
					if (isStandardIcon(icon)) {
						icons.push(<CSIcon name={icon.iconName} color={icon.color} />);
					} else {
						icons.push(icon);
					}
				}
			}
		}

		return (
			<span
				className={
					(this.state.isLastColumn ? 'is-last-column' : '') +
					(this.isReadOnly() ? ' read-only-cell' : '')
				}
			>
				{status !== 'None' && (
					<CSGridTooltip
						additionalClassnames={className + '-wrapper'}
						helpText={this.state.value.errorMessage}
					>
						<span className={className} aria-hidden='true' />
					</CSGridTooltip>
				)}
				{icons.map((icon, index) => (
					<span key={index}>{icon}</span>
				))}
			</span>
		);
	}
}
