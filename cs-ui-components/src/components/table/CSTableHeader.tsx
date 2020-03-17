import React from 'react';

class CSTableHeader extends React.Component {
	render() {
		return (
			<div className="cs-table-header" role="rowgroup">
				{this.props.children}
			</div>
		);
	}
}

export default CSTableHeader;
