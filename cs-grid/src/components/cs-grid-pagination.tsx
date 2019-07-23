import React from 'react';

import 'ag-grid-community/dist/styles/ag-theme-balham.css';

export enum CSGridPaginationLocation {
	Header = 'Header',
	Footer = 'Footer',
	Both = 'Both',
	Detached = 'Detached',
	// Will turn off pagination on ag-grid.
	None = 'None'
}

export interface CSGridPagination {
	location: CSGridPaginationLocation;
	detachedCSSClass?: string;
}

interface CSGridPaginationProps {
	firstRowOnPage: number;
	lastRowOnPage: number;
	totalRows: number;
	currentPage: number;
	totalPages: number;
	onLastPage: boolean;
	pageSizes: Array<number>;
	currentPageSize: number;

	onPageSizeChanged: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	onBtFirst: () => void;
	onBtLast: () => void;
	onBtNext: () => void;
	onBtPrevious: () => void;
}

const CSGridPaginator: React.FC<CSGridPaginationProps> = props => {
	const pageSizeOptions: Array<
		React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>
	> = [];
	for (const pageSize of props.pageSizes) {
		pageSizeOptions.push(
			<option key={pageSize} value={pageSize}>
				{pageSize}
			</option>
		);
	}

	return (
		<div className='ag-paging-panel ag-theme-balham'>
			<span className='ag-paging-row-summary-panel'>
				<span>{props.firstRowOnPage}</span>
				{' to '}
				<span>{props.lastRowOnPage}</span>
				{' of '}
				<span className='value'>{props.totalRows}</span>
			</span>
			<span className='ag-paging-page-summary-panel'>
				<div className='ag-icon ag-icon-first' onClick={props.onBtFirst}>
					<button>First</button>
				</div>
				<div className='ag-icon ag-icon-previous' onClick={props.onBtPrevious}>
					<button>Previous</button>
				</div>
				{' Page '}
				<span>{props.currentPage}</span>
				{' of '}
				<span>{props.totalPages}</span>
				<div className='ag-icon ag-icon-next' onClick={props.onBtNext}>
					<button>Next</button>
				</div>
				<div className='ag-icon ag-icon-last ' onClick={props.onBtLast}>
					<button
						className={
							'ag-paging-button cs-btn' + (props.onLastPage ? ' btn-disabled' : '')
						}
						disabled={props.onLastPage}
					>
						Last
					</button>
				</div>
			</span>
			<div className='page-selection-header'>
				Page Size:
				<select
					value={props.currentPageSize ? props.currentPageSize.toString() : ''}
					onChange={props.onPageSizeChanged}
					id='page-size'
				>
					{pageSizeOptions}
				</select>
			</div>
		</div>
	);
};

export default CSGridPaginator;
