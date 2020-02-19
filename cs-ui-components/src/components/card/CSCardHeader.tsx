import React from 'react';
import classNames from 'classnames';

export interface CSCardHeaderProps {
	title: string;
}

class CSCardHeader extends React.Component<CSCardHeaderProps> {

	static getDoc() {

		const json = {
			name: 'Card Header',
			properties: [
				{
					propertyName: 'title',
					description: 'Card header title',
					options: ['n/a']
				}
			]
		};
		return json;
	}

	render() {
		const cardHeaderClasses = classNames(
			'cs-card-header'
		);
		return (
			<header className={cardHeaderClasses}>
				{this.props.title}
			</header>
		);
	}
}

export default CSCardHeader;
