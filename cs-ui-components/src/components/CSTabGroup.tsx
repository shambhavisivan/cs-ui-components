import React from 'react';
import classNames from 'classnames';

export type CSTabGroupVariant = 'large' | 'normal';

export interface CSTabGroupProps {
	className?: string;
	id?: string;
	listName?: string;
	variant?: CSTabGroupVariant;
}

class CSTabGroup extends React.Component<CSTabGroupProps> {

	public static defaultProps = {
		variant: 'normal'
	};

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
			<div
				className={tabGroupClasses}
				id={this.props.id}
			>
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
