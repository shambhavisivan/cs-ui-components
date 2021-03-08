import React, { CSSProperties } from 'react';
import classNames from 'classnames';

export interface CSModalBodyProps {
	[key: string]: any;
	className?: string;
	id?: string;
	padding?: string;
}

class CSModalBody extends React.Component<CSModalBodyProps> {

	render() {
		const { children, className, id, padding, ...rest } = this.props;

		const style: CSSProperties = {
			'--body-padding': padding
		};

		const modalBodyClasses = classNames(
			'cs-modal-body', {
			[`${className}`]: className
		});

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
	}
}

export default CSModalBody;
