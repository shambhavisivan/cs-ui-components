import React from 'react';
import classNames from 'classnames';

export interface CSCardProps {
	[key: string]: any;
	className?: string;
	id?: string;
}

class CSCard extends React.Component<CSCardProps> {
	render() {
		const {
			children, className, id, ...rest
		} = this.props;
		const cardClasses = classNames(
			'cs-card',
			{
				[`${className}`]: className,
			},
		);
		return (
			<div
				className={cardClasses}
				id={id}
				role="region"
				{...rest}
			>
				{children}
			</div>
		);
	}
}

export default CSCard;
