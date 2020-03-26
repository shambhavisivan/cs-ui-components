import React from 'react';

export interface CSModalBodyProps {
	padding?: string;
}

class CSModalBody extends React.Component<CSModalBodyProps> {

	render() {
		return (
			<div className="modal-body" style={{'--body-padding': this.props.padding}}>
				{this.props.children}
			</div>
		);
	}
}

export default CSModalBody;
