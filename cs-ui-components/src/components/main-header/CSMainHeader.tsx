import React, { CSSProperties } from 'react';
import classNames from 'classnames';

export type CSMainHeaderColor = 'neutral' | 'brand' | 'success' | 'error' | 'info';

export interface CSMainHeaderProps {
	[key: string]: any;
	className?: string;
	color?: CSMainHeaderColor;
	id?: string;
	maxWidth?: string;
	sticky?: boolean;
}

class CSMainHeader extends React.Component<CSMainHeaderProps> {
	public static defaultProps = {
		color: 'neutral',
		maxWidth: '100%',
		sticky: true,
	};

	render() {
		const {
			children,
			className,
			color,
			id,
			maxWidth,
			sticky,
			...rest
		} = this.props;

		const mainHeaderGroupClasses = classNames(
			'cs-main-header',
			{
				'cs-main-header-sticky': sticky === true,
				[`cs-main-header-${color}`]: color,
				[`${className}`]: className,
			},
		);

		const style: CSSProperties = {
			maxWidth,
		};

		return (
			<header
				className={mainHeaderGroupClasses}
				id={id}
				{...rest}
			>
				<div style={style} className="cs-main-header-inner">
					{children}
				</div>
			</header>
		);
	}
}

export default CSMainHeader;
