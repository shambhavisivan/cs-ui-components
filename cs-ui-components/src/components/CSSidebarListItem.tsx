import React from 'react';
import classNames from 'classnames';

export interface CSSidebarListItemProps {
	active?: string;
	className?: string;
	id?: string;
	onClick?: (value?: any) => any;
	text?: string;
	toggleActive?: (e: any) => void;
}

class CSSidebarListItem extends React.Component<CSSidebarListItemProps> {
	onClickHandler = () => {
		this.props.toggleActive(this.props.text);
		if (this.props.onClick) {
			this.props.onClick();
		}
	}
	render() {
		const sidebarListClasses = classNames(
			'cs-sidebar-list-item',
			{
				[`${this.props.className}`]: this.props.className,
				active: this.props.active === this.props.text
			}
		);
		return (
			<li
				className={sidebarListClasses}
				onClick={this.onClickHandler}
				id={this.props.id}
				tabIndex={0}
			>
				{this.props.text}
			</li>
		);
	}
}

export default CSSidebarListItem;
