import React from 'react';
import classNames from 'classnames';

export interface CSTabGroupProps {
	className?: string;
}
export interface CSTabGroupState {
	activeTabIndex: number;
}

class CSTabGroup extends React.Component<CSTabGroupProps, CSTabGroupState> {

	constructor(props: any) {
		super(props);

		this.state = {
			activeTabIndex: undefined
		};

		this.handleTabClick = this.handleTabClick.bind(this);
	}

	handleTabClick(tabIndex: number) {
		this.setState({
			activeTabIndex: tabIndex === this.state.activeTabIndex ?
				this.state.activeTabIndex :
				tabIndex
		});
	}

	renderChildrenWithTabsAsProps() {
		return React.Children.map(this.props.children, (child, index) => {
			return React.cloneElement(child as React.ReactElement<any>, {
				onClick: this.handleTabClick,
				tabIndex: index,
				active: index === this.state.activeTabIndex
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
				{this.renderChildrenWithTabsAsProps()}
			</div>
		);
	}
}

export default CSTabGroup;
