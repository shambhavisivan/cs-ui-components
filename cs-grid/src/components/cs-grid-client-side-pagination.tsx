import React from 'react';

import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { CSGridPaginator } from './cs-grid-pagination';

interface CSGridClientSidePaginationProps {
	currentPage: number;
	totalPages: number;
	pageSizes: Array<number>;
	currentPageSize: number;

	onPageSizeChanged: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	onBtNext: () => void;
	onBtPrevious: () => void;
	goToPage: (page: number) => void;
}

export function CSGridClientSidePagination(props: CSGridClientSidePaginationProps) {
	let pages: Array<number> = [];
	if (props.totalPages === 0) {
		pages = [0];
	} else if (props.totalPages < 5) {
		pages = [0, 1, 2, 3].slice(0, props.totalPages);
	} else if (props.totalPages >= 5) {
		pages = [...Array(props.totalPages).keys()];

		let start = props.currentPage > 2 ? props.currentPage - 2 : 0;
		if (start > props.totalPages - 5) {
			start = props.totalPages - 5;
		}

		let end =
			props.currentPage < props.totalPages - 2 ? props.currentPage + 3 : props.totalPages;
		if (end < 5) {
			end = 5;
		}

		pages = pages.slice(start, end);
	}

	const isLastPage = () => props.currentPage + 1 === props.totalPages || props.totalPages === 0;

	return (
		<CSGridPaginator
			pages={pages}
			isLastPage={isLastPage}
			currentPage={props.currentPage}
			pageSizes={props.pageSizes}
			currentPageSize={props.currentPageSize}
			onPageSizeChanged={props.onPageSizeChanged}
			onBtNext={props.onBtNext}
			onBtPrevious={props.onBtPrevious}
			goToPage={props.goToPage}
		/>
	);
}
