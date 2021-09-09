import React from 'react';
import classNames from 'classnames';
import { CSDataTableColumnInterface } from './CSDataTable';
import { useCSDataTable } from './CSDataTableContext';
import CSCheckbox, { CSCheckboxProps } from '../CSCheckbox';

export interface CSDataTableHeaderInterface {
	headerCheckbox?: CSCheckboxProps;
}

const CSDataTableHeader = ({ headerCheckbox }: CSDataTableHeaderInterface) => {
	const { columns, dataTableSelectable, dataTableSelectionType } = useCSDataTable();

	const renderCheckbox = () => {
		if (!dataTableSelectable || dataTableSelectionType !== 'checkbox') return null;

		return (
			<div className="cs-data-table-cell cs-data-table-cell-checkbox">
				{headerCheckbox && <CSCheckbox {...headerCheckbox} />}
			</div>
		);
	};

	const renderCell = (column: CSDataTableColumnInterface, columnIndex: number) => {
		const {
			align,
			className,
			columnClassName,
			grow,
			header,
			width,
			wrap,
		} = column;

		const tableColumnClasses = classNames(
			'cs-data-table-cell',
			{
				'cs-data-table-column-wrap': wrap,
				[`cs-data-table-align-${align}`]: align,
				[columnClassName]: columnClassName,
				[className]: className,
			},
		);

		const tableColumnStyles: React.CSSProperties = {
			'--cs-data-table-column-flex': width ? 0 : grow,
			'--cs-data-table-column-width': width,
		};

		return (
			<div
				role="columnheader"
				aria-colindex={columnIndex}
				className={tableColumnClasses}
				style={tableColumnStyles}
			>
				<div className="cs-data-table-truncate">
					{header}
				</div>
			</div>
		);
	};

	return (
		<div className="cs-data-table-header">
			<div className="cs-data-table-row" role="row">
				{renderCheckbox()}
				{columns.map((column: CSDataTableColumnInterface, columnIndex: number) => (
					// eslint-disable-next-line react/no-array-index-key
					<React.Fragment key={columnIndex}>
						{renderCell(column, columnIndex)}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default CSDataTableHeader;
