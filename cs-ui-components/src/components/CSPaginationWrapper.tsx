import React from 'react';
import classNames from 'classnames';
import CSPagination from './CSPagination';

export interface CSPaginationWrapperProps {
	className?: string;
	id?: string;
	children?: any;
}

const CSPaginationWrapper = ({
	children,
	className,
	...rest
}: CSPaginationWrapperProps) => {
	const paginationClasses = classNames(
		'cs-pagination-wrapper',
		{
			[`${className}`]: className,
		},
	);

	return (
		<div className={paginationClasses} {...rest}>
			<CSPagination />
			{children}
		</div>
	);
};

export default CSPaginationWrapper;
