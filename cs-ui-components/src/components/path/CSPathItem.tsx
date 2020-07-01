import React from 'react';

export interface CSPathItemProps {
	id?: string;
	title: string;
}

class CSPathItem extends React.Component<CSPathItemProps> {
	render() {
		return (
			<div className="cs-path-item" title={this.props.title} id={this.props.id}>
				{this.props.title}
			</div>
		);
	}
}

export default CSPathItem;
