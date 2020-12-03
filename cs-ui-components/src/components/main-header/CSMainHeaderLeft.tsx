import React from 'react';
import classNames from 'classnames';

export interface CSMainHeaderLeftProps {
	[key: string]: any;
	id?: string;
	reverseOrder?: boolean;
	subtitle?: string;
	title: string;
}

class CSMainHeaderLeft extends React.Component<CSMainHeaderLeftProps> {

	render() {
		const {
			children,
			id,
			reverseOrder,
			subtitle,
			title,
			...rest
		} = this.props;

		const csMainHeaderHeadingClasses = classNames(
			'cs-main-header-heading',
			{
				'cs-main-header-heading-reversed': reverseOrder
			}
		);

		return (
			<div className="cs-main-header-left" id={id} {...rest}>
				<div className={csMainHeaderHeadingClasses}>
					{subtitle ? (
						<h4 className="cs-main-header-subtitle">
							{subtitle}
						</h4>
					) : null}
					{title ? (
						<h1 className="cs-main-header-title">
							{title}
						</h1>
					) : null}
				</div>
				{children}
			</div>
		);
	}
}

export default CSMainHeaderLeft;
