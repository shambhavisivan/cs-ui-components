import React, { CSSProperties } from 'react';

export interface CSTableCellProps {
	grow?: number;
	id?: string;
	maxWidth?: string;
	title?: string;
}

class CSTableCell extends React.Component<CSTableCellProps> {
	render() {

		const style: CSSProperties = {
			flexGrow: this.props.grow,
			maxWidth: this.props.maxWidth
		};

		return (
			<div className="cs-table-cell" style={style} id={this.props.id}>
				{this.props.title &&
					<span
						className="cs-table-cell-text"
						title={this.props.title}
					>
						{this.props.title}
					</span>
				}
				{this.props.children}
			</div>
		);
	}
}

export default CSTableCell;
