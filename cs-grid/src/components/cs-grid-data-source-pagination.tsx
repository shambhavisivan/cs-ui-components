import React from 'react';

import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { CSGridPaginator } from './cs-grid-pagination';

interface CSGridDataSourcePaginationProps {
	currentPage: number;
	pageSizes: Array<number>;
	currentPageSize: number;

	onPageSizeChanged: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	onBtNext: () => void;
	onBtPrevious: () => void;
	isLastPage: () => boolean;
}

export function CSGridDataSourcePagination(props: CSGridDataSourcePaginationProps) {
	return (
		<CSGridPaginator
			pages={[props.currentPage]}
			isLastPage={props.isLastPage}
			currentPage={props.currentPage}
			pageSizes={props.pageSizes}
			currentPageSize={props.currentPageSize}
			onPageSizeChanged={props.onPageSizeChanged}
			onBtNext={props.onBtNext}
			onBtPrevious={props.onBtPrevious}
		/>
	);
}
