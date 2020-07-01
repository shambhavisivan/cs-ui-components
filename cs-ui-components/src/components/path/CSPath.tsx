import React from 'react';
import classNames from 'classnames';

export interface CSPathProps {
	className?: string;
	id?: string;
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
			<div className={pathClasses} id={this.props.id}>
				{this.props.children}
			</div>
		);
	}
}

export default CSPath;
