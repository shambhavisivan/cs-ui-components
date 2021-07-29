import React from 'react';
import classNames from 'classnames';
import CSTooltip, { CSTooltipPosition } from './CSTooltip';

export interface CSLabelProps {
	[key: string]: any;
	className?: string;
	helpText?: string;
	htmlFor?: string;
	id?: string;
	label: string;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
}

const CSLabel = ({
	className,
	helpText,
	htmlFor,
	id,
	label,
	required,
	title,
	tooltipPosition,
	...rest
}: CSLabelProps) => {
	const labelClasses = classNames(
		'cs-label-wrapper',
		{
			[`${className}`]: className,
		},
	);
	return (

		<label
			htmlFor={htmlFor}
			className={labelClasses}
			id={id}
			{...rest}
		>
			{required
				&& (
					<span
						className="cs-label-required"
						aria-hidden="true"
					>
						*
					</span>
				)}
			<span className="cs-label" title={title}>
				{label}
			</span>
			{helpText
				&& (
					<div className="cs-tooltip-group">
						<CSTooltip
							content={helpText}
							position={tooltipPosition}
						/>
					</div>
				)}
		</label>
	);
};

export default CSLabel;
