import React from 'react';
import classNames from 'classnames';

export interface CSMainHeaderIconProps {
	[key: string]: any;
	className?: string;
	id?: string;
}

class CSMainHeaderIcon extends React.Component<CSMainHeaderIconProps> {
	render() {
		const {
			className,
			children,
			id,
			...rest
		} = this.props;

		const mainHeaderIconClasses = classNames(
			'cs-main-header-icon',
			{
				[`${className}`]: className
			}
		);

		return <div className={mainHeaderIconClasses} id={id} {...rest}>
				{children}
			</div>;
	}
}

export default CSMainHeaderIcon;
