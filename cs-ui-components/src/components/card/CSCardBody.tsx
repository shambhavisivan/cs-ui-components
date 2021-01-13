import React, { CSSProperties } from 'react';

export interface CSCardBodyProps {
	[key: string]: any;
	id?: string;
	maxHeight?: string;
	padding?: string;
}

class CSCardBody extends React.Component<CSCardBodyProps> {

	render() {
		const { children, id, maxHeight, padding, ...rest } = this.props;

		const cardBodyStyles: CSSProperties = {
			'--cs-card-body-padding': padding,
			'--cs-card-body-max-height': maxHeight
		};
		return (
			<div
				className="cs-card-body"
				id={id}
				style={cardBodyStyles}
				{...rest}
			>
				{children}
			</div>
		);
	}
}

export default CSCardBody;
