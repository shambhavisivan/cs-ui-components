import React from 'react';
import classNames from 'classnames';

export interface CSSkipLinkProps {
	[key: string]: any;
	className?: string;
	color?: string;
	href: string;
	id?: string;
	jumpDestination: string;
}

class CSSkipLink extends React.Component<CSSkipLinkProps> {
	render() {
		const {
			className,
			color,
			href,
			id,
			jumpDestination,
			...rest
		} = this.props;

		const skipLinkClasses = classNames(
			'cs-skip-link',
			{
				[`${className}`]: className
			}
		);

		return (
			<a
				className={skipLinkClasses}
				href={href}
				id={id}
				style={{'--cs-skip-link-custom-c': color}}
				target="_self"
				{...rest}
			>
				{`Jump to ${jumpDestination}`}
			</a>
		);
	}
}

export default CSSkipLink;
