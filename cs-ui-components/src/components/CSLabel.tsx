import React from 'react';
import CSTooltip, { CSTooltipPosition } from './CSTooltip';
import classNames from 'classnames';

export interface CSLabelProps {
	className?: string;
	for?: string;
	helpText?: string;
	label: string;
	required?: boolean;
	tooltipPosition?: CSTooltipPosition;
}

class CSLabel extends React.Component<CSLabelProps> {
	render() {

		const labelClasses = classNames(
			'cs-label-wrapper',
			{
				[`${this.props.className}`]: this.props.className
			}

		);

		return (
			<>
				<label htmlFor={this.props.for} className={labelClasses}>
					<span className={this.props.required ? 'cs-label-required-true' : 'cs-label-required-false'}
						aria-hidden="true">*</span>
					<span className="cs-label">
						{this.props.label}
					</span>
					<div className="cs-tooltip-group">
						{this.props.helpText ?
						<CSTooltip
							content={this.props.helpText}
							position={this.props.tooltipPosition}
						/> : null}
					</div>
				</label>
			</>
		);
	}
}

export default CSLabel;
