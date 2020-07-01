import React from 'react';
import classNames from 'classnames';

export interface CSCardBodyProps {
	id?: string;
}

class CSCardBody extends React.Component<CSCardBodyProps> {

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
			<div
				className={cardBodyClasses}
				id={this.props.id}
			>
				{this.props.children}
			</div>
		);
	}
}

export default CSCardBody;
