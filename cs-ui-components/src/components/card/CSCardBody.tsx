import React from 'react';

export interface CSCardBodyProps {
	[key: string]: any;
	id?: string;
}

class CSCardBody extends React.Component<CSCardBodyProps> {

	render() {
		const { children, id, ...rest } = this.props;
		return (
			<div
				className="cs-card-body"
				id={id}
				{...rest}
			>
				{children}
			</div>
		);
	}
}

export default CSCardBody;
