import React, { ReactElement } from 'react';

/**
 * Properties for CSTable component.
 */
export interface CSTableProps {
	/**
	 * Row data of table.
	 */
	rows: (() => Array<CSTableRow>) | Array<CSTableRow>;
	/**
	 * Column specifications of table
	 */
	cols: Array<CSTableColumn>;
	/**
	 * CSS class attached to table (defaults to cs-table if missing)
	 */
	classNames?: Array<string>;
	/**
	 * Full width row renderer, only required if row data contains at least one row marked as full width
	 *
	 * @param row Row data to render
	 */
	renderFullWidth?(row: CSTableData): ReactElement;
}

/**
 * Table row representation
 */
export interface CSTableRow {
	/**
	 * Id of row. Has to be unique (it is used for the `key` prop for React components)
	 */
	id: string;
	/**
	 * Row data
	 */
	data: CSTableData;
	/**
	 * CSS class attached to row
	 */
	classNames?: Array<string>;
	/**
	 * Does this row consist of cells or just one block, spanning the table width.
	 */
	fullWidth?: boolean;
}

/**
 * Table row data
 */
export interface CSTableData {
	/**
	 * POJO containing the data to be displayed.
	 */
	values: Record<string, any>;
	/**
	 * Any optional property can go in here, things that aren't part of the
	 * data object but are required for rendering. (E.g.: locale-aware formatting functions)
	 */
	optionalData?: any;
}

/**
 * Table column definition
 */
export interface CSTableColumn {
	/**
	 * Column name. Has to match properties in CSTableData.values
	 */
	name: string;
	/**
	 * Table column label. Can be ReactElement if something other than text needs to be displayed. (E.g.: select box, or sorting controls)
	 */
	label: string | ReactElement;
	/**
	 * Cell renderer. If absent, it defaults to outputting the value as a string (or JSON string, if value is an object)
	 * @param value The cell value to be displayed
	 * @param data Data for the entire row (useful for accessing CSTableData.optionalData)
	 * @param name Column name
	 */
	render?(value: any, data: CSTableData, name: string): ReactElement;
}

const DEFAULT_VALUE_CONVERTER = (value: any) => {
	if (value === null || value === undefined || typeof value === 'function') {
		return '';
	}
	if (typeof value === 'object') {
		return JSON.stringify(value);
	}
	return value;
};

const CSTABLE_DEFAULT_RENDERER = (value: any) => <span title={value}>{DEFAULT_VALUE_CONVERTER(value)}</span>;

/**
 * Lightweight table component.
 *
 * @param props
 */
export const CSTable: React.FC<CSTableProps> = props => {

	const rows: () => Array<CSTableRow> = () => {
		return typeof props.rows === 'function' ? props.rows() : props.rows;
	};

	const renderHeaderCell = (col: CSTableColumn) => {
		return <th className="cs-table-header" key={col.name}>
			<div className="cs-table-header-text" title={typeof col.label === 'string' ? col.label : ''}>
				{col.label}
			</div>
		</th>;
	};

	const renderCell = (col: CSTableColumn, row: CSTableRow) => {
		const renderer = col.render || CSTABLE_DEFAULT_RENDERER;
		return <td className="cs-table-cell" key={col.name}>
			{renderer(row.data.values[col.name], row.data, col.name)}
		</td>;
	};

	const renderFullWidth = (row: CSTableRow) => {
		return <td colSpan={props.cols.length}>
			{props.renderFullWidth && props.renderFullWidth(row.data)}
		</td>;
	};

	const renderRow = (row: CSTableRow) => {
		return <tr className={'cs-table-row ' + (row.classNames ? row.classNames.join(' ') : '')} key={row.id}>
			{row.fullWidth ? renderFullWidth(row) : props.cols.map(col => renderCell(col, row))}
		</tr>;
	};

	if (!props.renderFullWidth && rows().some(row => row.fullWidth)) {
		throw new Error('You must specify a full width renderer if you have full width rows.');
	}

	return <table className={props.classNames ? props.classNames.join(' ') : 'cs-table'}>
		<thead>
			<tr key="__header">
				{props.cols.map(renderHeaderCell)}
			</tr>
		</thead>
		<tbody className="cs-table-body">
			{rows().map(renderRow)}
		</tbody>
	</table>;
};
