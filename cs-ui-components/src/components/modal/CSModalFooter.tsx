import React from 'react';
import classNames from 'classnames';

export type CSModalFooterAlign = 'right' | 'left' | 'center';

export interface CSModalFooterProps {
	[key: string]: any;
	align?: CSModalFooterAlign;
	className?: string;
	id?: string;
}

const CSModalFooter = ({
	align = 'right',
	children,
	className,
	id,
	...rest
}: CSModalFooterProps) => {
	const modalFooterClasses = classNames(
		'cs-modal-footer',
		{
			[`cs-modal-footer-${align}`]: align,
			[`${className}`]: className,
		},
	);
	return (
		<footer
			className={modalFooterClasses}
			id={id}
			{...rest}
		>
			{children}
		</footer>
	);
};

export default CSModalFooter;
