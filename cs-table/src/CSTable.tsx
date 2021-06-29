import React, { ReactElement, useState, useEffect } from 'react';
import classNames from 'classnames';
import { SortStateValues } from './constants/sortstate-values';

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
	 * Property that specifies if sorting capability is to be added to CSTable.
	 */
	isTableSortable?: boolean;
	/**
	 * Full width row renderer, only required if row data contains at least one row marked as full width
	 *
	 * @param row Row data to render
	 */
	renderFullWidth?(row: CSTableData): ReactElement;
	/**
	 * sort function takes sortstate (for order of sorting) and sortfield(sort criteria)
	 *
	 * @param sortState order of sorting
	 * @param sortField field based on which sorting happens
	 */
	sortFunction?(sortState: SortStateValues, sortField: string): void;
	/**
	 * Group row renderer, only required if row data contains at least one row marked as group
	 *
	 * @param row Row data to render
	 */
	renderGroupingRow?(row: CSTableData): ReactElement;
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
	/**
	 * Does this row support grouping or not.
	 */
	rowGrouping?: boolean;
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

const CSTABLE_DEFAULT_RENDERER = (value: any) => (
	<span title={value}>{DEFAULT_VALUE_CONVERTER(value)}</span>
);

/**
 * Lightweight table component.
 *
 * @param props
 */

export const CSTable: React.FC<CSTableProps> = props => {
	const [sortState, setSortState] = useState<SortStateValues>('default');
	const [sortField, setSortField] = useState('');
	const rows: () => Array<CSTableRow> = () => {
		return typeof props.rows === 'function' ? props.rows() : props.rows;
	};
	let csTableClasses = '';
	useEffect(() => {
		if (props.sortFunction) {
			props.sortFunction(sortState, sortField);
		}
	}, [sortState, sortField]);

	const handleSortStateChange = (sortBy: string) => {
		if (sortField !== sortBy) {
			setSortState('ascending');
			setSortField(sortBy);
		} else {
			switch (sortState) {
				case 'default': {
					setSortState('ascending');
					break;
				}
				case 'ascending': {
					setSortState('descending');
					break;
				}
				case 'descending': {
					setSortState('default');
					setSortField('');
					break;
				}
			}
		}
	};

	const renderHeaderCell = (col: CSTableColumn) => {
		let theaderClasses = 'cs-table-header';
		let sortArrowStyle = 'icon sortArrow';
		let columnHeaderText = 'cs-table-header-text';
		if (col.name === sortField && props.isTableSortable) {
			theaderClasses = classNames('cs-table-header', {
				'sortAscending': sortState === 'ascending',
				'sortDescending': sortState === 'descending',
				'': sortState === 'default'
			});
			sortArrowStyle = classNames('icon sortArrow', {
				'icon-arrowdown': sortState === 'ascending',
				'icon-arrowup': sortState === 'descending',
				'': sortState === 'default'
			});
		} else {
			theaderClasses = classNames('cs-table-header', {
				'checkbox-column': col.name === '__selected'
			});
			sortArrowStyle = 'icon sortArrow';
		}

		const sortArrow =
			col.name.toString().length !== 0 && !col.name.startsWith('__') ? (
				<div className={sortArrowStyle} />
			) : (
				''
			);
		columnHeaderText = classNames('cs-table-header-text', {
			'column-sortable':
				props.isTableSortable &&
				col.name.toString().length !== 0 &&
				!col.name.startsWith('__')
		});
		return (
			<th
				className={theaderClasses}
				onClick={() => {
					if (props.isTableSortable && !col.name.startsWith('__')) {
						handleSortStateChange(col.name);
					}
				}}
				key={col.name}
			>
				<div
					className={columnHeaderText}
					title={typeof col.label === 'string' ? col.label : ''}
				>
					{col.label}
					{props.isTableSortable ? sortArrow : ''}
				</div>
			</th>
		);
	};

	const renderGroupExpansionCell = (col: CSTableColumn, row: CSTableRow) => {
		if (col.name.length === 0 || col.name === '__selected') {
			const renderer = col.render || CSTABLE_DEFAULT_RENDERER;
			return (
				<td className="cs-table-cell" key={col.name}>
					{renderer(row.data.values[col.name], row.data, col.name)}
				</td>
			);
		}
		return '';
	};

	const renderCell = (col: CSTableColumn, row: CSTableRow) => {
		const renderer = col.render || CSTABLE_DEFAULT_RENDERER;
		return (
			<td className="cs-table-cell" key={col.name}>
				{renderer(row.data.values[col.name], row.data, col.name)}
			</td>
		);
	};

	const renderFullWidth = (row: CSTableRow) => {
		return (
			<td colSpan={props.cols.length}>
				{props.renderFullWidth && props.renderFullWidth(row.data)}
			</td>
		);
	};

	const renderRow = (row: CSTableRow) => {
		if (row.rowGrouping) {
			return (
				<tr
					className={
						'cs-table-row ' + (row.classNames ? row.classNames.join(' ') : '')
					}
					key={row.id}
				>
					{props.cols.map(col => renderGroupExpansionCell(col, row))}
					<td colSpan={props.cols.length - 1} className="cs-table-cell">
						{props.renderGroupingRow
							? props.renderGroupingRow(row.data)
							: row.id}
					</td>
				</tr>
			);
		} else {
			return (
				<tr
					className={
						'cs-table-row ' + (row.classNames ? row.classNames.join(' ') : '')
					}
					key={row.id}
				>
					{row.fullWidth
						? renderFullWidth(row)
						: props.cols.map(col => renderCell(col, row))}
				</tr>
			);
		}
	};

	if (!props.renderFullWidth && rows().some(row => row.fullWidth)) {
		throw new Error(
			'You must specify a full width renderer if you have full width rows.'
		);
	}

	csTableClasses = props.classNames ? props.classNames.join(' ') : 'cs-table';
	csTableClasses = props.isTableSortable
		? csTableClasses + ' table-sortable'
		: csTableClasses;

	return (
		<table className={csTableClasses}>
			<thead>
				<tr key="__header">{props.cols.map(renderHeaderCell)}</tr>
			</thead>
			<tbody className="cs-table-body">{rows().map(renderRow)}</tbody>
		</table>
	);
};
