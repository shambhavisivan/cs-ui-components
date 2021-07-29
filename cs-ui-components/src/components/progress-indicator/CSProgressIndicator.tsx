import React from 'react';
import classNames from 'classnames';

export interface CSProgressIndicatorProps {
	[key: string]: any;
	className?: string;
	id?: string;
}

const CSProgressIndicator = ({
	children,
	className,
	id,
	...rest
}: CSProgressIndicatorProps) => {
	const progressIndicatorClasses = classNames(
		'cs-progress-indicator',
		{
			[`${className}`]: className,
		},
	);
	return (
		<ol
			className={progressIndicatorClasses}
			id={id}
			{...rest}
		>
			{children}
		</ol>
	);
};

export default CSProgressIndicator;
