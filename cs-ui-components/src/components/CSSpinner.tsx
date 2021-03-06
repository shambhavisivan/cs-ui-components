import React from 'react';
import classNames from 'classnames';

export type CSSpinnerColor = 'neutral' | 'brand' | 'inverse';
export type CSSpinnerSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
export type CSSpinnerOverlay = 'light' | 'dark' | 'transparent';

export interface CSSpinnerProps {
	[key: string]: any;
	className?: string;
	color?: CSSpinnerColor;
	id?: string;
	inline?: boolean;
	label?: string;
	overlay?: CSSpinnerOverlay;
	size?: CSSpinnerSize;
}

const CSSpinner = ({
	className,
	color = 'brand',
	id,
	inline,
	label,
	overlay = 'light',
	size = 'large',
	...rest
}: CSSpinnerProps) => {
	const spinnerClasses = classNames(
		'cs-spinner-wrapper',
		{
			'cs-spinner-inline': inline,
			[`cs-spinner-overlay-${overlay}`]: overlay,
			[`${className}`]: className,
		},
	);
	return (
		<div
			className={spinnerClasses}
			id={id}
			role="progressbar"
			aria-live="polite"
			aria-busy
			{...rest}
		>
			<div className="cs-spinner-wrapper-label">
				<div className={`cs-spinner cs-spinner-${size} cs-spinner-${color}`}>
					<div className="cs-spinner-dot-a" />
					<div className="cs-spinner-dot-b" />
				</div>
				{(label && !inline)
						&& (
							<div className="cs-spinner-label">
								<span>{label}</span>
							</div>
						)}
			</div>
		</div>
	);
};

export default CSSpinner;
