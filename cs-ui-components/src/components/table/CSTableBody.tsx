import React from 'react';

export interface CSTableBodyProps {
	className?: string;
	id?: string;
}

class CSTableBody extends React.Component<CSTableBodyProps> {
	render() {
		return (
			<div className="cs-table-body" id={this.props.id}>
				{this.props.children}
			</div>
		);
	}
}

export default CSTableBody;
