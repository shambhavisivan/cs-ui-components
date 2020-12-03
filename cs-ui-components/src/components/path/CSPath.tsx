import React from 'react';
import classNames from 'classnames';

export interface CSPathProps {
	[key: string]: any;
	className?: string;
	id?: string;
}

class CSPath extends React.Component<CSPathProps> {

	render() {
		const { children, className, id, ...rest } = this.props;

		const pathClasses = classNames(
			'cs-path',
			{
				[`${className}`]: className
			}
		);

		return (
			<div className={pathClasses} id={id} {...rest}>
				{children}
			</div>
		);
	}
}

export default CSPath;
