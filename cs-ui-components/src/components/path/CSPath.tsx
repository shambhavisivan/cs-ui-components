import React from 'react';
import classNames from 'classnames';

export interface CSPathProps {
	className?: string;
}

class CSPath extends React.Component<CSPathProps> {

	render() {
		const pathClasses = classNames(
			'cs-path',
			{
				[`${this.props.className}`]: this.props.className
			}
		);

		return (
			<div className={pathClasses}>
				{this.props.children}
			</div>
		);
	}
}

export default CSPath;
