import React from 'react';

export interface CSTableRowProps {
	id?: string;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

class CSTableRow extends React.Component<CSTableRowProps> {

	handleClick: React.MouseEventHandler<HTMLDivElement> = e => {
		const { onClick } = this.props;
		if (onClick) {
		  onClick(e);
		}
	}

	render() {
		return (
			<div
				className="cs-table-row"
				role="row"
				onClick={this.handleClick}
				id={this.props.id}
			>
				{this.props.children}
			</div>
		);
	}
}

export default CSTableRow;
