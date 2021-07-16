import React from 'react';
import classNames from 'classnames';

export type CSTabGroupVariant = 'large' | 'normal';

export interface CSTabGroupProps {
	[key: string]: any;
	className?: string;
	id?: string;
	listName?: string;
	variant?: CSTabGroupVariant;
}

class CSTabGroup extends React.Component<CSTabGroupProps> {

	public static defaultProps = {
		variant: 'normal'
	};

	render() {
		const {
			children,
			className,
			id,
			listName,
			variant,
			...rest
		} = this.props;

		const renderChildrenWithTabsAsProps =  React.Children.map(children, (child, index) => {
			if (child) {
				return React.cloneElement(child as React.ReactElement<any>, {
					parentVariant: variant
				});
			}
		});

		const tabGroupClasses = classNames(
			'cs-tab-group',
			{
				[`${className}`]: className
			}
		);
		return (
			<div
				className={tabGroupClasses}
				id={id}
				{...rest}
			>
				<nav
					aria-label={listName || 'breadcrumbs'}
				>
					<ol>
						{renderChildrenWithTabsAsProps}
					</ol>
				</nav>
			</div>
		);
	}
}

export default CSTabGroup;
