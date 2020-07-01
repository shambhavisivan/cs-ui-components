import React from 'react';

export interface CSTableHeaderProps {
	id?: string;
}

class CSTableHeader extends React.Component<CSTableHeaderProps> {
	render() {
		return (
			<div className="cs-table-header" role="rowgroup" id={this.props.id}>
				{this.props.children}
			</div>
		);
	}
}

export default CSTableHeader;
