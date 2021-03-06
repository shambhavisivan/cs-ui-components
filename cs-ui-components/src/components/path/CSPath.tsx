import React from 'react';
import classNames from 'classnames';

export interface CSPathProps {
	[key: string]: any;
	className?: string;
	id?: string;
}

const CSPath = ({
	children,
	className,
	id,
	...rest
}:CSPathProps) => {
	const pathClasses = classNames(
		'cs-path',
		{
			[`${className}`]: className,
		},
	);
	return (
		<nav className={pathClasses} id={id} {...rest}>
			<ol className="cs-path-wrapper">
				{children}
			</ol>
		</nav>
	);
};

export default CSPath;
