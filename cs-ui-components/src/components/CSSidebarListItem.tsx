import React from 'react';
import classNames from 'classnames';

export interface CSSidebarListItemProps {
	[key: string]: any;
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
		const {
			active,
			className,
			id,
			text,
			toggleActive,
			...rest
		} = this.props;

		const sidebarListClasses = classNames(
			'cs-sidebar-list-item',
			{
				[`${className}`]: className,
				active: active === text
			}
		);
		return (
			<li role="none">
				<button
					className={sidebarListClasses}
					onClick={this.onClickHandler}
					id={id}
					role="menuitemradio"
					aria-selected={active === text}
				>
					{text}
				</button>
			</li>
		);
	}
}

export default CSSidebarListItem;
