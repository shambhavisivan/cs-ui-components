import React from 'react';
import classNames from 'classnames';

export interface CSTabGroupProps {
	className?: string;
	variant?: string;
}

class CSTabGroup extends React.Component<CSTabGroupProps> {

	renderChildrenWithTabsAsProps() {
		return React.Children.map(this.props.children, (child, index) => {
			return React.cloneElement(child as React.ReactElement<any>, {
				parentVariant: this.props.variant
			});
		});
	}

	render() {
		const tabGroupClasses = classNames(
			'cs-tab-group', [`cs-tab-group-${this.props.variant}`],
			{
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<div className={tabGroupClasses}>
				{this.renderChildrenWithTabsAsProps()}
			</div>
		);
	}
}

export default CSTabGroup;
