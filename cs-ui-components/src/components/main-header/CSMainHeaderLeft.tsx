import React from 'react';
import classNames from 'classnames';

export interface CSMainHeaderLeftProps {
	id?: string;
	title: string;
	subtitle?: string;
	reverseOrder?: boolean;
}

class CSMainHeaderLeft extends React.Component<CSMainHeaderLeftProps> {

	render() {

		const csMainHeaderHeadingClasses = classNames(
			'cs-main-header-heading',
			{
				'cs-main-header-heading-reversed': this.props.reverseOrder
			}
		);

		return (
			<div className="cs-main-header-left" id={this.props.id}>
				<div className={csMainHeaderHeadingClasses}>
					{this.props.subtitle ? (
						<h4 className="cs-main-header-subtitle">
							{this.props.subtitle}
						</h4>
					) : null}
					{this.props.title ? (
						<h1 className="cs-main-header-title">
							{this.props.title}
						</h1>
					) : null}
				</div>
				{this.props.children}
			</div>
		);
	}
}

export default CSMainHeaderLeft;
