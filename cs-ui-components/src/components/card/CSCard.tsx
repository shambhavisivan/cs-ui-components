import React, { CSSProperties } from 'react';
import classNames from 'classnames';

export interface CSCardProps {
	[key: string]: any;
	borderRadius?: string;
	className?: string;
	id?: string;
}

// eslint-disable-next-line react/prefer-stateless-function
class CSCard extends React.Component<CSCardProps> {
	render() {
		const { children, borderRadius, className, id, ...rest } = this.props;

		const cardClasses = classNames(
			'cs-card',
			{
				[`${className}`]: className,
			},
		);

		const cardBorderStyles: CSSProperties = {
			'--cs-card-border-radius': borderRadius,
		};
		return (
			<div
				className={cardClasses}
				id={id}
				style={cardBorderStyles}
				role="region"
				{...rest}
			>
				{children}
			</div>
		);
	}
}

export default CSCard;
