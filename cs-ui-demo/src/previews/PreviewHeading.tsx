import React from 'react';

export interface PreviewHeadingProps {
	name: string;
	usage: string;
}

class PreviewHeading extends React.Component<PreviewHeadingProps> {
	render() {
		return (
			<div className="preview-heading">
				<h1>{this.props.name}</h1>
				{this.props.usage ? <h2>{this.props.usage}</h2> : null}
			</div>
		);
	}
}

export default PreviewHeading;
