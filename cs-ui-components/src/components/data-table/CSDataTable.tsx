import React, { useEffect, CSSProperties } from 'react';
import classNames from 'classnames';

import CSDataTableHeader from './CSDataTableHeader';
import CSDataTableGroup from './CSDataTableGroup';

export type CSDataTableDensity = 'compact' | 'comfortable' | 'spacious';
export type CSDataTableElement = React.ReactElement | React.ReactText;
export type CSDataTableCellClassName = string | ((row: CSDataTableRowInterface) => string);
export type CSDataTableColumnAlign = 'left' | 'center' | 'right';
export type CSDataTableRender = (row: CSDataTableRowInterface) => CSDataTableElement;

export interface CSDataTableRowMetaInterface {
	level: number;
	expanded: boolean;
	setExpanded: () => void;
	toggleExpanded: () => void;
}

export interface CSDataTableColumnInterface {
	key: string;
	align?: CSDataTableColumnAlign;
	cellClassName?: CSDataTableCellClassName;
	className?: string;
	columnClassName?: string;
	grow?: number;
	render?: CSDataTableRender;
	header?: CSDataTableElement;
	width?: string;
	wrap?: boolean;
	[key: string]: any;
}

export interface CSDataTableDataInterface {
	[key: string]: any;
}

export interface CSDataTableRowInterface {
	key: React.ReactText;
	data?: CSDataTableDataInterface;
	children?: Array<CSDataTableRowInterface>;
	className?: string;
	collapsible?: boolean;
	defaultCollapsed?: boolean;
	height?: string;
	id?: string;
	render?: CSDataTableRender;
	[key: string]: any;
}

export interface CSDataTableProps {
	columns: Array<CSDataTableColumnInterface>;
	rows: Array<CSDataTableRowInterface>;
	borderless?: boolean;
	className?: string;
	collapsible?: boolean;
	columnDividers?: boolean;
	defaultCollapsed?: boolean;
	density?: CSDataTableDensity;
	disableHover?: boolean;
	headless?: boolean;
	id?: string;
	maxHeight?: string;
	rowHeight?: string;
	stickyHeader?: boolean;
	striped?: boolean;
	[key: string]: any;
}

const CSDataTable = ({
	columns,
	rows,
	borderless,
	className,
	collapsible = true,
	columnDividers,
	defaultCollapsed = false,
	density = 'compact',
	disableHover,
	headless,
	id,
	maxHeight,
	rowHeight,
	stickyHeader,
	striped,
	...rest
}: CSDataTableProps) => {
	useEffect(() => {
		// eslint-disable-next-line no-console
		console.warn('CSDataTable is under construction and should not be used.');
	}, []);

	const tableClasses = classNames(
		'cs-data-table',
		{
			'cs-data-table-borderless': borderless,
			'cs-data-table-column-dividers': columnDividers,
			[`cs-data-table-density-${density}`]: density !== 'compact',
			'cs-data-table-disable-hover': disableHover,
			'cs-data-table-sticky-header': stickyHeader,
			'cs-data-table-headless': headless,
			'cs-data-table-striped': striped,
			[className]: className,
		},
	);

	const tableStyles: CSSProperties = {
		'--cs-data-table-max-height': maxHeight,
		'--cs-data-table-row-height': rowHeight,
	};

	// Determine whether the first level should have
	// extra indentation to make space for the toggle button
	const extraIndent = collapsible && rows.some((row: CSDataTableRowInterface) => (
		row.children?.length && row.collapsible !== false
	));

	return (
		<div
			className={tableClasses}
			id={id}
			style={tableStyles}
			{...rest}
		>
			{!headless && <CSDataTableHeader columns={columns} />}
			<div className="cs-data-table-body">
				<CSDataTableGroup
					columns={columns}
					rows={rows}
					extraIndent={extraIndent ? 2 : 0}
					tableCollapsible={collapsible}
					tableDefaultCollapsed={defaultCollapsed}
				/>
			</div>
		</div>
	);
};

export default CSDataTable;
