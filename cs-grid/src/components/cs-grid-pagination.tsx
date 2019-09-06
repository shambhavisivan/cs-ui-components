import React from 'react';

import 'ag-grid-community/dist/styles/ag-theme-balham.css';

export enum CSGridPaginationLocation {
	Header = 'Header',
	Footer = 'Footer',
	Both = 'Both',
	Detached = 'Detached',
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
	goToPage: (page: number) => void;
}

export function CSGridPaginator(props: CSGridPaginationProps) {
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
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='14'
						height='14'
						viewBox='0 0 52 52'
					>
						<path
							fill='#0070d2'
							d='m38 8.3v35.4c0 1-1.3 1.7-2.2 0.9l-21.2-17.3c-0.8-0.6-0.8-1.9 0-2.5l21.2-17.5c0.9-0.7 2.2-0.1 2.2 1z'
						/>
					</svg>
				</div>
				{pages.map(PageButton)}
				<div
					onClick={props.onBtNext}
					className={
						props.currentPage === props.totalPages || props.totalPages === 0
							? 'disabled'
							: ''
					}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='14'
						height='14'
						viewBox='0 0 52 52'
					>
						<path
							fill='#0070d2'
							d='m14 43.7v-35.4c0-1 1.3-1.7 2.2-0.9l21.2 17.3c0.8 0.6 0.8 1.9 0 2.5l-21.2 17.5c-0.9 0.7-2.2 0.1-2.2-1z'
						/>
					</svg>
				</div>
			</div>
			<div className='cs-grid_pagination-select-wrapper'>
				<select
					className='cs-grid_pagination-select'
					value={props.currentPageSize ? props.currentPageSize.toString() : ''}
					onChange={props.onPageSizeChanged}
					id='page-size'
				>
					{pageSizeOptions}
				</select>
				<svg
					className='cs-grid_pagination-select-icon'
					xmlns='http://www.w3.org/2000/svg'
					width='9.55'
					height='6.04'
				>
					<path
						d='M.33 0h8.91c.25 0 .43.33.23.55L5.11 5.89c-.15.2-.48.2-.63 0L.08.55C-.1.33.05 0 .33 0z'
						fill='#706e6b'
					/>
				</svg>
			</div>
		</div>
	);
}
