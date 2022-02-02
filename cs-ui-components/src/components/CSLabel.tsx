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
	const labelOuterWrapperClasses = classNames(
		'cs-label-outer-wrapper',
		{
			[`${className}`]: className,
		},
	);
	return (
		<div className={labelOuterWrapperClasses}>
			<label
				htmlFor={htmlFor}
				className="cs-label-wrapper"
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
			</label>
			{helpText
				&& (
					<div className="cs-tooltip-group">
						<CSTooltip
							content={helpText}
							position={tooltipPosition}
						/>
					</div>
				)}
		</div>
	);
};

export default CSLabel;
