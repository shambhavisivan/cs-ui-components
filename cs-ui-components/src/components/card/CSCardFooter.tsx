import classNames from 'classnames';
import React from 'react';

export interface CSCardFooterProps {
	[key: string]: any;
	className?: string;
	id?: string;
}

class CSCardFooter extends React.Component<CSCardFooterProps> {

	render() {
		const { className, children, id, ...rest } = this.props;
		const cardFooterClasses = classNames(
			'cs-card-footer', {
				[`${className}`]: className
			}
		);
		return (
			<footer
				className={cardFooterClasses}
				id={id}
				{...rest}
			>
				{children}
			</footer>
		);
	}
}

export default CSCardFooter;
