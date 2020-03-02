import React from 'react';

class CSModalBody extends React.Component {
	render() {
		return <div className="modal-body">
				{this.props.children}
			</div>;
	}
}

export default CSModalBody;
