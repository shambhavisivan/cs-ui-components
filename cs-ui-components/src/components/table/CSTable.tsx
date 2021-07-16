import React from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

export interface CSTableProps {
	[key: string]: any;
	className?: string;
	id?: string;
	selectableRows?: boolean;
	tableDescription?: string;
}

export const CSTableContext = React.createContext<CSTableProps>({});

class CSTable extends React.Component<CSTableProps> {
	private uniqueAutoId = this.props.tableDescription ? uuidv4() : null;

	render() {
		const {
			children,
			className,
			id,
			tableDescription,
			selectableRows,
			...rest
		} = this.props;

		const tableClasses = classNames(
			'cs-table',
			{
				[`${className}`]: className,
			},
		);

		return (
			<CSTableContext.Provider value={{
				selectableRows,
			}}
			>
				<div
					className={tableClasses}
					role="table"
					id={id}
					aria-labelledby={this.uniqueAutoId}
					{...rest}
				>
					{tableDescription
						&& <span className="cs-table-description" id={this.uniqueAutoId}>{tableDescription}</span>}
					{children}
				</div>
			</CSTableContext.Provider>
		);
	}
}

export default CSTable;
