import React, { CSSProperties } from 'react';
import classNames from 'classnames';

export type CSCardFooterAlign = 'right' | 'left' | 'center';

export interface CSCardFooterProps {
	align?: CSCardFooterAlign;
	className?: string;
	bgColor?: string;
	id?: string;
	padding?: string;
	[key: string]: any;
}

const CSCardFooter = ({
	align = 'left',
	className,
	bgColor,
	children,
	id,
	padding,
	...rest
}: CSCardFooterProps) => {
	const cardFooterClasses = classNames(
		'cs-card-footer',
		{
			[`cs-card-footer-${align}`]: align,
			[`${className}`]: className,
		},
	);

	const cardFooterStyles: CSSProperties = {
		'--cs-card-footer-padding': padding,
		'--cs-card-footer-bg-color': bgColor,
	};

	return (
		<footer
			className={cardFooterClasses}
			id={id}
			style={cardFooterStyles}
			{...rest}
		>
			{children}
		</footer>
	);
};

export default CSCardFooter;
