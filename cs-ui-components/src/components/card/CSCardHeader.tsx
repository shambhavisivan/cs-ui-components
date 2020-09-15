import React from 'react';
import classNames from 'classnames';

export interface CSCardHeaderProps {
	id?: string;
	title: string;
}

class CSCardHeader extends React.Component<CSCardHeaderProps> {

	render() {
		const cardHeaderClasses = classNames(
			'cs-card-header'
		);
		return (
			<header
				className={cardHeaderClasses}
				id={this.props.id}
			>
				<h2>{this.props.title}</h2>
			</header>
		);
	}
}

export default CSCardHeader;
