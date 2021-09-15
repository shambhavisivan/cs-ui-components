import React, { CSSProperties } from 'react';
import classNames from 'classnames';

export type CSCardFooterAlign = 'right' | 'left' | 'center';

export interface CSCardFooterProps {
	[key: string]: any;
	align?: CSCardFooterAlign;
	className?: string;
	bgColor?: string;
	id?: string;
	padding?: string;
}

// eslint-disable-next-line react/prefer-stateless-function
class CSCardFooter extends React.Component<CSCardFooterProps> {
	public static defaultProps = {
		align: 'left',
	};

	render() {
		const { align, className, bgColor, children, id, padding, ...rest } = this.props;

		const cardFooterClasses = classNames(
			'cs-card-footer',
			{
				[`cs-card-footer-${align}`]: align,
				[`${className}`]: className,
			},
		);

		const cardFooterStyles: CSSProperties = {
			'--cs-card-footer-padding': padding,
			'--cs-card-footer-bg-color': bgColor,
		};

		return (
			<footer
				className={cardFooterClasses}
				id={id}
				style={cardFooterStyles}
				{...rest}
			>
				{children}
			</footer>
		);
	}
}

export default CSCardFooter;
