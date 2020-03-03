import React from 'react';

export interface CSPathItemProps {
	title: string;
}

class CSPathItem extends React.Component<CSPathItemProps> {
	render() {
		return (
			<div className="cs-path-item" title={this.props.title}>
				{this.props.title}
			</div>
		);
	}
}

export default CSPathItem;
