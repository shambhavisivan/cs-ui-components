import React from 'react';

class CSTableBody extends React.Component {
	render() {
		return (
			<div className="cs-table-body">
				{this.props.children}
			</div>
		);
	}
}

export default CSTableBody;
