import React from 'react';
import classNames from 'classnames';

class CSCardBody extends React.Component {

	static getDoc() {

		const json = {
			name: 'Card Body'
		};

		return json;
	}

	render() {
		const cardBodyClasses = classNames(
			'cs-card-body'
		);
		return (
			<div className={cardBodyClasses}>
				{this.props.children}
			</div>
		);
	}
}

export default CSCardBody;
