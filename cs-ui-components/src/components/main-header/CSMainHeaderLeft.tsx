import React from 'react';

export interface CSMainHeaderLeftProps {
	title: string;
	subtitle?: string;
}

class CSMainHeaderLeft extends React.Component<CSMainHeaderLeftProps> {

	render() {
		return (
			<div className="cs-main-header-left">
				<div className="cs-main-header-heading">
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
