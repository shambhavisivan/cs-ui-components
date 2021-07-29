import React, { CSSProperties } from 'react';
import classNames from 'classnames';

export interface CSCardBodyProps {
	[key: string]: any;
	className?: string;
	id?: string;
	maxHeight?: string;
	padding?: string;
}

const CSCardBody = ({
	className,
	children,
	id,
	maxHeight,
	padding,
	...rest
}: CSCardBodyProps) => {
	const cardBodyClasses = classNames(
		'cs-card-body',
		{
			[`${className}`]: className,
		},
	);
	const cardBodyStyles: CSSProperties = {
		'--cs-card-body-padding': padding,
		'--cs-card-body-max-height': maxHeight,
	};
	return (
		<div
			className={cardBodyClasses}
			id={id}
			style={cardBodyStyles}
			{...rest}
		>
			{children}
		</div>
	);
};

export default CSCardBody;
