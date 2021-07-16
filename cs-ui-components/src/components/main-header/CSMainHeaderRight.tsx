import React from 'react';
import classNames from 'classnames';

export interface CSMainHeaderRightProps {
	[key: string]: any;
	className?: string;
	id?: string;
}
class CSMainHeaderRight extends React.Component<CSMainHeaderRightProps> {
	render() {
		const {
			className,
			children,
			id,
			...rest
		} = this.props;

		const mainHeaderRightClasses = classNames(
			'cs-main-header-right',
			{
				[`${className}`]: className,
			},
		);

		return (
			<div className={mainHeaderRightClasses} id={id} {...rest}>
				{children}
			</div>
		);
	}
}

export default CSMainHeaderRight;
