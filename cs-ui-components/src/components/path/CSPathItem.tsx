import React from 'react';

export interface CSPathItemProps {
	[key: string]: any;
	id?: string;
	title: string;
}

class CSPathItem extends React.Component<CSPathItemProps> {
	render() {
		const { id, title, ...rest } = this.props;
		return (
			<div className="cs-path-item" title={title} id={id} {...rest}>
				{title}
			</div>
		);
	}
}

export default CSPathItem;
