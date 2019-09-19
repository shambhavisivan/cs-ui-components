import React from 'react';

import 'ag-grid-community/dist/styles/ag-theme-balham.css';

export type CSGridPaginationLocation = 'Header' | 'Footer' | 'Both' | 'Detached' | 'None';

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
	goToPage: (page: number) => void;
}

export function CSGridPaginator(props: CSGridPaginationProps) {
	const pageSizeOptions: Array<
		React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>
	> = [];
	for (const pageSize of props.pageSizes) {
		pageSizeOptions.push(
			<option key={pageSize} value={pageSize} title={`${pageSize} rows per page`}>
				{pageSize}
			</option>
		);
	}

	let pages: Array<number> = [];
	if (props.totalPages === 0) {
		pages = [0];
	} else if (props.totalPages < 5) {
		pages = [0, 1, 2, 3].slice(0, props.totalPages);
	} else if (props.totalPages >= 5) {
		pages = [...Array(props.totalPages).keys()];

		let start = props.currentPage > 3 ? props.currentPage - 3 : 0;
		if (start > props.totalPages - 5) {
			start = props.totalPages - 5;
		}

		let end =
			props.currentPage < props.totalPages - 1 ? props.currentPage + 2 : props.totalPages;
		if (end < 5) {
			end = 5;
		}

		pages = pages.slice(start, end);
	}

	const PageButton = (page: number) => {
		const onPageClick = () => props.goToPage(page);

		return (
			<div
				className={props.currentPage === page + 1 ? 'active' : ''}
				onClick={onPageClick}
				key={page}
				title={`Go to page ${page + 1}`}
			>
				{page + 1}
			</div>
		);
	};

	return (
		<div className='cs-grid_pagination-wrapper'>
			<div className='cs-grid_pagination'>
				<div
					onClick={props.onBtPrevious}
					className={props.currentPage === 1 ? 'disabled' : ''}
					title={'Previous Page' + (props.currentPage === 1 ? ' Disabled' : '')}
				>
					<span className='cs-grid_pagination-icon-left' />
				</div>
				{pages.map(PageButton)}
				<div
					onClick={props.onBtNext}
					className={
						props.currentPage === props.totalPages || props.totalPages === 0
							? 'disabled'
							: ''
					}
					title={
						'Next Page' +
						(props.currentPage === props.totalPages || props.totalPages === 0
							? ' Disabled'
							: '')
					}
				>
					<span className='cs-grid_pagination-icon-right' />
				</div>
			</div>
			<div className='cs-grid_pagination-select-wrapper'>
				<select
					className='cs-grid_pagination-select'
					value={props.currentPageSize ? props.currentPageSize.toString() : ''}
					onChange={props.onPageSizeChanged}
					id='page-size'
					title='Page Size Options'
				>
					{pageSizeOptions}
				</select>
				<span className='cs-grid_pagination-select-icon' />
			</div>
		</div>
	);
}
