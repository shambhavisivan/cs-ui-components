import React, { CSSProperties } from 'react';
import classNames from 'classnames';

export interface CSModalBodyProps {
	[key: string]: any;
	className?: string;
	id?: string;
	minHeight?: string;
	padding?: string;
}

const CSModalBody = ({
	children,
	className,
	id,
	minHeight,
	padding,
	...rest
}: CSModalBodyProps) => {
	const style: CSSProperties = {
		'--cs-modal-body-min-height': minHeight,
		'--cs-modal-body-padding': padding,
	};
	const modalBodyClasses = classNames(
		'cs-modal-body',
		{
			[`${className}`]: className,
		},
	);
	return (
		<div
			className={modalBodyClasses}
			style={style}
			id={id}
			{...rest}
		>
			{children}
		</div>
	);
};

export default CSModalBody;
