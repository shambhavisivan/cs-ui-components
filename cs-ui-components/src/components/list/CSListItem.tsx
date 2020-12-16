import React from 'react';
import classNames from 'classnames';

export interface CSListItemProps {
	[key: string]: any;
	active?: string;
	className?: string;
	id?: string;
	onClick?: (value?: any) => any;
	text?: string;
	toggleActive?: (e: any) => void;
}

class CSListItem extends React.Component<CSListItemProps> {
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
			onClick,
			text,
			toggleActive,
			...rest
		} = this.props;

		const listItemClasses = classNames(
			'cs-list-item',
			{
				[`${className}`]: className,
				active: active === text
			}
		);

		return (
			<li className="cs-list-item-wrapper" role="none" {...rest}>
				<button
					className={listItemClasses}
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

export default CSListItem;
