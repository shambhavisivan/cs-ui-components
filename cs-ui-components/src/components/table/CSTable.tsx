import React from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

export interface CSTableProps {
	className?: string;
	id?: string;
	tableDescription?: string;
}

class CSTable extends React.Component<CSTableProps> {

	render() {

		const tableClasses = classNames(
			'cs-table',
			{
				[`${this.props.className}`]: this.props.className
			}
		);

		const uniqueAutoId = uuidv4();

		return (
			<div
				className={tableClasses}
				role="table"
				id={this.props.id}
				aria-labelledby={this.props.tableDescription ? uniqueAutoId : null}
			>
				{this.props.tableDescription &&
					<span className="cs-table-description" id={uniqueAutoId}>{this.props.tableDescription}</span>
				}
				{this.props.children}
			</div>
		);
	}
}

export default CSTable;
