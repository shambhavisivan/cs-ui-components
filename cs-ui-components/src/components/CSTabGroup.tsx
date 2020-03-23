import React from 'react';
import classNames from 'classnames';

export interface CSTabGroupProps {

	className?: string;
}

class CSTabGroup extends React.Component<CSTabGroupProps> {

	render() {

		const tabGroupClasses = classNames(

			'cs-tab-group',
			{
				[`${this.props.className}`]: this.props.className
			}
		);

		const children = this.props.children;

		return (
			<div className={tabGroupClasses}>
				{children}
			</div>
		);
	}
}

export default CSTabGroup;
