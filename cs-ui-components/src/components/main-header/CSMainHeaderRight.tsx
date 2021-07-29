import React from 'react';
import classNames from 'classnames';

export interface CSMainHeaderRightProps {
	[key: string]: any;
	className?: string;
	id?: string;
}
const CSMainHeaderRight = ({
	className,
	children,
	id,
	...rest
}: CSMainHeaderRightProps) => {
	const mainHeaderRightClasses = classNames(
		'cs-main-header-right',
		{
			[`${className}`]: className,
		},
	);
	return (
		<div
			className={mainHeaderRightClasses}
			id={id}
			{...rest}
		>
			{children}
		</div>
	);
};

export default CSMainHeaderRight;
