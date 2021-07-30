import React, { CSSProperties } from 'react';
import classNames from 'classnames';

import CSTableAlphaHeader from './CSTableAlphaHeader';
import CSTableAlphaBody from './CSTableAlphaBody';

export type CSTableAlphaDensity = 'compact' | 'comfortable' | 'spacious';
export type CSTableAlphaCell = React.ReactElement | React.ReactText;
export type CSTableAlphaCellClassName = string | ((row: CSTableAlphaRow) => string);
export type CSTableAlphaColumnAlign = 'left' | 'center' | 'right';

export interface CSTableAlphaColumn {
	key: string;
	align?: CSTableAlphaColumnAlign;
	cellClassName?: CSTableAlphaCellClassName;
	className?: string;
	columnClassName?: string;
	grow?: number;
	id?: string;
	render?: (row: CSTableAlphaRow) => CSTableAlphaCell;
	title?: CSTableAlphaCell;
	width?: string;
	wrap?: boolean;
	[key: string]: any;
}

export interface CSTableAlphaRowData {
	[key: string]: any;
}

export interface CSTableAlphaRow {
	key: React.ReactText;
	data?: CSTableAlphaRowData;
	className?: string;
	children?: Array<CSTableAlphaRow>;
	id?: string;
	height?: string;
	[key: string]: any;
}

export interface CSTableAlphaProps {
	columns: Array<CSTableAlphaColumn>;
	rows: Array<CSTableAlphaRow>;
	borderless?: boolean;
	className?: string;
	columnDividers?: boolean;
	density?: CSTableAlphaDensity;
	disableHover?: boolean;
	headless?: boolean;
	id?: string;
	maxHeight?: string;
	rowHeight?: string;
	stickyHeader?: boolean;
	striped?: boolean;
	[key: string]: any;
}

const CSTableAlpha: React.FC<CSTableAlphaProps> = ({
	columns,
	rows,
	borderless,
	className,
	columnDividers,
	density = 'compact',
	disableHover,
	headless,
	id,
	maxHeight,
	rowHeight,
	stickyHeader,
	striped,
	...rest
}: CSTableAlphaProps) => {
	const tableClasses = classNames(
		'cs-table-alpha',
		{
			'cs-table-alpha-borderless': borderless,
			'cs-table-alpha-column-dividers': columnDividers,
			[`cs-table-alpha-density-${density}`]: density !== 'compact',
			'cs-table-alpha-disable-hover': disableHover,
			'cs-table-alpha-sticky-header': stickyHeader,
			'cs-table-alpha-headless': headless,
			'cs-table-alpha-striped': striped,
			[className]: className,
		},
	);

	const tableStyles: CSSProperties = {
		'--cs-table-alpha-max-height': maxHeight,
		'--cs-table-alpha-row-height': rowHeight,
	};

	return (
		<table
			className={tableClasses}
			id={id}
			style={tableStyles}
			{...rest}
		>
			{!headless && <CSTableAlphaHeader columns={columns} />}
			<CSTableAlphaBody columns={columns} rows={rows} />
		</table>
	);
};

export default CSTableAlpha;
