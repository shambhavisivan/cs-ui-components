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
			<li role="none">
				<button
					className={sidebarListClasses}
					onClick={this.onClickHandler}
					id={this.props.id}
					role="menuitemradio"
					aria-selected={this.props.active === this.props.text}
				>
					{this.props.text}
				</button>
			</li>
		);
	}
}

export default CSSidebarListItem;
