import React, { CSSProperties } from 'react';
import classNames from 'classnames';

export interface CSCardProps {
	borderRadius?: string;
	className?: string;
	id?: string;
	[key: string]: any;
}

const CSCard = ({
	borderRadius,
	children,
	className,
	id,
	...rest
}: CSCardProps) => {
	const cardClasses = classNames(
		'cs-card',
		{
			[`${className}`]: className,
		},
	);

	const cardBorderStyles: CSSProperties = {
		'--cs-card-border-radius': borderRadius,
	};

	return (
		<div
			className={cardClasses}
			id={id}
			style={cardBorderStyles}
			role="region"
			{...rest}
		>
			{children}
		</div>
	);
};

export default CSCard;
