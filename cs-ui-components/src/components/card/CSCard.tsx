import React from 'react';
import classNames from 'classnames';

export interface CSCardProps {
	className?: string;
	id?: string;
}

class CSCard extends React.Component<CSCardProps> {

	render() {
		const cardClasses = classNames(
			'cs-card',
			{
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<div
				className={cardClasses}
				id={this.props.id}
			>
				{this.props.children}
			</div>
		);
	}
}

export default CSCard;
