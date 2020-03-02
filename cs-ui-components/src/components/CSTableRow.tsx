import React from 'react';

class CSTableRow extends React.Component<{}> {
	render() {
		return (
			<div className="cs-table-row" role="row">
				{this.props.children}
			</div>
		);
	}
}

export default CSTableRow;
