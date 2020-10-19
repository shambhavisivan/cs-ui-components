import React, { CSSProperties } from 'react';

export interface CSTableCellProps {
	grow?: number;
	id?: string;
	maxWidth?: string;
	text?: string;
	role?: string;
}

class CSTableCell extends React.Component<CSTableCellProps> {
	render() {

		const style: CSSProperties = {
			flexGrow: this.props.grow,
			maxWidth: this.props.maxWidth
		};

		return (
			<div
				className="cs-table-cell"
				style={style}
				id={this.props.id}
				role={this.props.role ? this.props.role : 'cell'}
			>
				{this.props.text &&
					<span
						className="cs-table-cell-text"
						title={this.props.text}
					>
						{this.props.text}
					</span>
				}
				{this.props.children}
			</div>
		);
	}
}

export default CSTableCell;
