import React, { CSSProperties } from 'react';

export interface CSTableCellProps {
	title?: string;
	grow?: number;
	maxWidth?: string;
}

class CSTableCell extends React.Component<CSTableCellProps> {
	render() {

		const style: CSSProperties = {
			flexGrow: this.props.grow,
			maxWidth: this.props.maxWidth
		};

		return (
			<div className="cs-table-cell" style={style}>
				<span className="cs-table-cell-text" title={this.props.title}>{this.props.title}</span>
				{this.props.children}
			</div>
		);
	}
}

export default CSTableCell;
