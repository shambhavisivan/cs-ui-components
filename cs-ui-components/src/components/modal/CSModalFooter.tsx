import React from 'react';
import classNames from 'classnames';

export type CSModalFooterAlign = 'right' | 'left' | 'center';

export interface CSModalFooterProps {
	[key: string]: any;
	align?: CSModalFooterAlign;
	className?: string;
	id?: string;
}

class CSModalFooter extends React.Component<CSModalFooterProps> {
	public static defaultProps = {
		align: 'right'
	};

	render() {
		const { align, children, className, id, ...rest } = this.props;

		const modalFooterClasses = classNames(
			'cs-modal-footer', {
			[`cs-modal-footer-${align}`]: align,
			[`${className}`]: className
		});

		return (
			<footer
				className={modalFooterClasses}
				id={id}
				{...rest}
			>
				{children}
			</footer>
		);
	}
}

export default CSModalFooter;
