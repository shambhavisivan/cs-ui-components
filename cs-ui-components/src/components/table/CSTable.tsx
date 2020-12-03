import React from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

export interface CSTableProps {
	[key: string]: any;
	className?: string;
	id?: string;
	tableDescription?: string;
}

class CSTable extends React.Component<CSTableProps> {

	private uniqueAutoId = this.props.tableDescription ? uuidv4() : null;

	render() {
		const {
			children,
			className,
			id,
			tableDescription,
			...rest
		} = this.props;

		const tableClasses = classNames(
			'cs-table', {
			[`${className}`]: className
		}
		);

		return (
			<div
				className={tableClasses}
				role="table"
				id={id}
				aria-labelledby={this.uniqueAutoId}
				{...rest}
			>
				{tableDescription &&
					<span className="cs-table-description" id={this.uniqueAutoId}>{tableDescription}</span>
				}
				{children}
			</div>
		);
	}
}

export default CSTable;
