import React, { useMemo, CSSProperties } from 'react';
import classNames from 'classnames';

import CSDataTableHeader from './CSDataTableHeader';
import CSDataTableGroup from './CSDataTableGroup';
import { CSDataTableProvider } from './CSDataTableContext';
import { CSCheckboxProps } from '../CSCheckbox';

export type CSDataTableDensity = 'compact' | 'comfortable' | 'spacious';
export type CSDataTableElement = React.ReactElement | React.ReactText | null;
export type CSDataTableCellClassName = string | ((row: CSDataTableRowWithMetaInterface) => string);
export type CSDataTableColumnAlign = 'left' | 'center' | 'right';
export type CSDataTableRender = (row: CSDataTableRowWithMetaInterface) => CSDataTableElement;
export type CSDataTableSelectionType = 'row' | 'checkbox';

export interface CSDataTableRowMetaInterface {
	level: number;
	expanded: boolean;
	selected: boolean;
	indeterminate: boolean;
	readOnly: boolean;
	subsectionVisible: boolean;
	setSubsectionVisible: (subsectionVisible: boolean) => void;
	toggleSubsectionVisible: () => void;
	setExpanded: (expanded: boolean) => void;
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
	headerTitle?: boolean;
	title?: boolean;
	width?: string;
	wrap?: boolean;
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
	selectable?: boolean;
}

export interface CSDataTableRowWithMetaInterface extends CSDataTableRowInterface {
	meta: CSDataTableRowMetaInterface;
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
	headerCheckbox?: CSCheckboxProps,
	headless?: boolean;
	id?: string;
	indeterminateKeys?: React.ReactText | Array<React.ReactText>;
	maxHeight?: string;
	multiselect?: boolean;
	onCollapseClick?: (event: React.MouseEvent<HTMLButtonElement>, row: CSDataTableRowWithMetaInterface) => void;
	onSelectChange?: (event: React.ChangeEvent<HTMLInputElement>, row: CSDataTableRowWithMetaInterface) => void;
	readOnlyKeys?: React.ReactText | Array<React.ReactText>;
	rowHeight?: string;
	selectable?: boolean;
	selectedKeys?: React.ReactText | Array<React.ReactText>;
	selectionType?: CSDataTableSelectionType;
	stickyHeader?: boolean;
	striped?: boolean;
	subsectionRender?: (row: CSDataTableRowWithMetaInterface) => CSDataTableElement;
	[key: string]: any;
}

const CSDataTable = ({
	columns,
	rows,
	borderless,
	className,
	collapsible = true,
	columnDividers,
	defaultCollapsed = true,
	density = 'compact',
	disableHover,
	headerCheckbox,
	headless,
	id,
	indeterminateKeys,
	maxHeight,
	multiselect = false,
	onCollapseClick,
	onSelectChange,
	readOnlyKeys,
	rowHeight,
	selectable,
	selectedKeys,
	selectionType = 'checkbox',
	stickyHeader = true,
	striped,
	subsectionRender,
	...rest
}: CSDataTableProps) => {
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
			'cs-data-table-row-selection': selectable && selectionType === 'row',
			'cs-data-table-checkbox-selection': selectable && selectionType === 'checkbox',
			[className]: className,
		},
	);

	const tableStyles: CSSProperties = {
		'--cs-data-table-max-height': maxHeight,
		'--cs-data-table-row-height': rowHeight,
	};

	// Determine whether the first level should have
	// extra indentation to make space for the toggle button
	const extraIndent = useMemo(() => (
		collapsible && (subsectionRender || rows.some((row: CSDataTableRowInterface) => (
			row.children?.length && row.collapsible !== false
		)))), [collapsible, rows, subsectionRender]);

	return (
		<CSDataTableProvider
			columns={columns}
			onCollapseClick={onCollapseClick}
			onSelectChange={onSelectChange}
			subsectionRender={subsectionRender}
			indeterminateKeys={new Set(Array.isArray(indeterminateKeys) ? indeterminateKeys : [indeterminateKeys])}
			readOnlyKeys={new Set(Array.isArray(readOnlyKeys) ? readOnlyKeys : [readOnlyKeys])}
			selectedKeys={new Set(Array.isArray(selectedKeys) ? selectedKeys : [selectedKeys])}
			dataTableCollapsible={collapsible}
			dataTableDefaultCollapsed={defaultCollapsed}
			dataTableSelectable={selectable}
			dataTableSelectionType={selectionType}
		>
			<div className="cs-data-table-wrapper" style={tableStyles}>
				<div
					role="grid"
					aria-multiselectable={selectable ? multiselect : undefined}
					className={tableClasses}
					id={id}
					{...rest}
				>
					{!headless && <CSDataTableHeader headerCheckbox={headerCheckbox} />}
					<div className="cs-data-table-body">
						<CSDataTableGroup rows={rows} extraIndent={extraIndent ? 2 : 0} />
					</div>
				</div>
			</div>
		</CSDataTableProvider>
	);
};

export default CSDataTable;
