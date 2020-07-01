import React from 'react';
import classNames from 'classnames';

export interface CSCardFooterProps {
	id?: string;
}

class CSCardFooter extends React.Component<CSCardFooterProps> {

	static getDoc() {

		const json = {
			name: 'Card Footer'
		};

		return json;
	}

	render() {
		const cardFooterClasses = classNames(
			'cs-card-footer'
		);
		return (
			<footer
				className={cardFooterClasses}
				id={this.props.id}
			>
				{this.props.children}
			</footer>
		);
	}
}

export default CSCardFooter;
