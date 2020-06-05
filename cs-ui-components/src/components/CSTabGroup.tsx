import React from 'react';
import classNames from 'classnames';

export interface CSTabGroupProps {
	className?: string;
	variant?: string;
	listName?: string;
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
			'cs-tab-group',
			{
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<div className={tabGroupClasses}>
				<nav
					aria-label={this.props.listName ? this.props.listName : 'breadcrumbs'}
				>
					<ol>
						{this.renderChildrenWithTabsAsProps()}
					</ol>
				</nav>
			</div>
		);
	}
}

export default CSTabGroup;
