import React from 'react';
import classNames from 'classnames';

export interface CSMainHeaderLeftProps {
	[key: string]: any;
	className?: string;
	id?: string;
	reverseOrder?: boolean;
	subtitle?: string;
	title: string;
}

const CSMainHeaderLeft = ({
	className,
	children,
	id,
	reverseOrder,
	subtitle,
	title,
	...rest
}: CSMainHeaderLeftProps) => {
	const mainHeaderLeftClasses = classNames(
		'cs-main-header-left',
		{
			[`${className}`]: className,
		},
	);
	const mainHeaderHeadingClasses = classNames(
		'cs-main-header-heading',
		{
			'cs-main-header-heading-reversed': reverseOrder,
		},
	);
	return (
		<div className={mainHeaderLeftClasses} id={id} {...rest}>
			<div className={mainHeaderHeadingClasses}>
				{subtitle ? (
					<h4 className="cs-main-header-subtitle">
						{subtitle}
					</h4>
				) : null}
				{title ? (
					<h1 className="cs-main-header-title">
						{title}
					</h1>
				) : null}
			</div>
			{children}
		</div>
	);
};

export default CSMainHeaderLeft;
