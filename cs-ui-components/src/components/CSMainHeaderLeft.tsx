import React from 'react';

export interface CSMainHeaderLeftProps {
	title: string;
	subtitle?: string;
}

class CSMainHeaderLeft extends React.Component<CSMainHeaderLeftProps> {

	static getDoc() {
		const json = {
			name: 'MainHeaderLeft',
			properties: [
				{
					propertyName: 'title',
					description: 'Main header title',
					options: ['n/a']
				},
				{
					propertyName: 'subtitle',
					description: 'Secondary text content',
					options: ['n/a']
				}
			]
		};

		return json;
	}
	render() {
		return (
			<div className="cs-main-header-left">
				<div className="cs-main-header-heading">
					<h4 className="cs-main-header-subtitle">
						{this.props.subtitle}
					</h4>
					<h1 className="cs-main-header-title">
						{this.props.title}
					</h1>
				</div>
				{this.props.children}
			</div>
		);
	}
}

export default CSMainHeaderLeft;
