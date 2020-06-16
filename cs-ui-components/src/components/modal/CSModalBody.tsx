import React, { CSSProperties } from 'react';

export interface CSModalBodyProps {
	padding?: string;
}

class CSModalBody extends React.Component<CSModalBodyProps> {

	render() {

		const style: CSSProperties = {
			'--body-padding': this.props.padding
		};

		return (
			<div className="cs-modal-body" style={style}>
				{this.props.children}
			</div>
		);
	}
}

export default CSModalBody;
