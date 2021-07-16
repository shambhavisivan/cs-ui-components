import React from 'react';
import classNames from 'classnames';

export interface CSPathProps {
	[key: string]: any;
	className?: string;
	id?: string;
}

class CSPath extends React.Component<CSPathProps> {
	render() {
		const {
			children, className, id, ...rest
		} = this.props;

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
	}
}

export default CSPath;
