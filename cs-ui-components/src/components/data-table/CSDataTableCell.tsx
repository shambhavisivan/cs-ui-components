import React, { useMemo } from 'react';
import classNames from 'classnames';
import {
	CSDataTableColumnInterface,
	CSDataTableRowInterface,
	CSDataTableRowMetaInterface,
} from './CSDataTable';

export interface CSDataTableCellProps {
	column: CSDataTableColumnInterface;
	columnIndex: number;
	expandButton: () => (null | React.ReactElement);
	row: CSDataTableRowInterface;
	rowMeta: CSDataTableRowMetaInterface;
}

const CSDataTableCell = ({
	column,
	columnIndex,
	expandButton,
	row,
	rowMeta,
}: CSDataTableCellProps) => {
	const {
		key,
		align,
		cellClassName,
		columnClassName,
		grow,
		render,
		width,
		wrap,
	} = column;

	// Determine whether to use a fixed className
	// or a computed value and return the className
	const getCellClassName = useMemo(() => {
		if (typeof cellClassName !== 'function') return cellClassName;
		return cellClassName({ ...row, meta: rowMeta });
	}, [cellClassName]);

	const tableColumnClasses = classNames(
		'cs-data-table-cell',
		{
			'cs-data-table-column-wrap': wrap,
			[`cs-data-table-align-${align}`]: align,
			[columnClassName]: columnClassName,
			[getCellClassName]: cellClassName,
		},
	);

	const tableColumnStyles: React.CSSProperties = {
		'--cs-data-table-column-flex': width ? 0 : grow,
		'--cs-data-table-column-width': width,
	};

	return (
		<div
			key={columnIndex}
			className={tableColumnClasses}
			style={tableColumnStyles}
		>
			{!columnIndex && expandButton()}
			<div className="cs-data-table-truncate">
				{render ? render({ ...row, meta: rowMeta }) : row.data?.[key]}
			</div>
		</div>
	);
};

export default CSDataTableCell;
