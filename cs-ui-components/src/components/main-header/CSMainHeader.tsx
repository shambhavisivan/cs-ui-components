import React from 'react';
import classNames from 'classnames';

export interface CSMainHeaderProps {
	color?: string;
	maxWidth?: string;
	sticky?: boolean;
	className?: string;
}

class CSMainHeader extends React.Component<CSMainHeaderProps> {

	public static defaultProps = {
		color: 'neutral',
		maxWidth: '100%',
		sticky: true
	};

	render() {

		const mainHeaderGroupClasses = classNames(
			'cs-main-header',
			{
				'cs-main-header-sticky': this.props.sticky === true,
				'cs-main-header-neutral': this.props.color === 'neutral',
				'cs-main-header-brand': this.props.color === 'brand',
				'cs-main-header-info': this.props.color === 'info',
				'cs-main-header-error': this.props.color === 'error',
				[`${this.props.className}`]: this.props.className
			}
		);

		return (
			<div className={mainHeaderGroupClasses}>
				<div style={{maxWidth: this.props.maxWidth}} className="cs-main-header-inner">
					{this.props.children}
				</div>
			</div>

		);
	}
}

export default CSMainHeader;
