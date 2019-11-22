import React from 'react';

interface CSColorPreviewProps {
	name: string;
	color: string;
}

const CSColorPreview = (props: CSColorPreviewProps) => (
	<div className="cs-color" tabIndex={0}>
		<div className="cs-color-header" style={{ backgroundColor: props.color }}/>
		<div className="cs-color-body">
			<h4 className="cs-color-name">{props.name}</h4>
			<span>{props.color}</span>
		</div>
	</div>
);

export default CSColorPreview;
