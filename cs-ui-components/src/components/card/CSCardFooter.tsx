import React from 'react';
import classNames from 'classnames';

class CSCardFooter extends React.Component {

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
			<footer className={cardFooterClasses}>
				{this.props.children}
			</footer>
		);
	}
}

export default CSCardFooter;
