import React from 'react';
import CSTooltip, { CSTooltipPosition } from './CSTooltip';
import classNames from 'classnames';

export interface CSLabelProps {
	className?: string;
	for?: string;
	helpText?: string;
	id?: string;
	label: string;
	required?: boolean;
	title?: string;
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
				<label
					htmlFor={this.props.for}
					className={labelClasses}
					id={this.props.id}
				>
					{this.props.required &&
						<span
							className="cs-label-required"
							aria-hidden="true"
						>*</span>
					}
					<span className="cs-label" title={this.props.title}>
						{this.props.label}
					</span>
					{this.props.helpText &&
						<div className="cs-tooltip-group">
							<CSTooltip
								content={this.props.helpText}
								position={this.props.tooltipPosition}
							/>
						</div>
					}
				</label>
			</>
		);
	}
}

export default CSLabel;
