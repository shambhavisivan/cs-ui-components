import React from 'react';

import 'ag-grid-community/dist/styles/ag-theme-balham.css';

interface CSGridPaginationProps {
	pages: Array<number>;
	isLastPage: () => boolean;

	currentPage: number;
	pageSizes: Array<number>;
	currentPageSize: number;

	onPageSizeChanged: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	onBtNext: () => void;
	onBtPrevious: () => void;
	goToPage?: (page: number) => void;
}

export function CSGridPaginator(props: CSGridPaginationProps) {
	const pageSizeOptions: Array<React.DetailedHTMLProps<
		React.OptionHTMLAttributes<HTMLOptionElement>,
		HTMLOptionElement
	>> = [];
	for (const pageSize of props.pageSizes) {
		pageSizeOptions.push(
			<option key={pageSize} value={pageSize} title={`${pageSize} rows per page`}>
				{pageSize}
			</option>
		);
	}

	const PageButton = (page: number) => {
		const onPageClick = () => (props.goToPage ? props.goToPage(page) : undefined);

		return (
			<div
				className={props.currentPage === page ? 'active' : ''}
				onClick={onPageClick}
				key={page}
				title={`Go to page ${page + 1}`}
			>
				{page + 1}
			</div>
		);
	};

	const isLastPage: boolean = props.isLastPage();

	return (
		<div className='cs-grid_pagination-wrapper'>
			<div className='cs-grid_pagination'>
				<div
					onClick={props.onBtPrevious}
					className={props.currentPage === 0 ? 'disabled' : ''}
					title={'Previous Page' + (props.currentPage === 0 ? ' Disabled' : '')}
				>
					<span className='cs-grid_pagination-icon-left' />
				</div>
				{props.pages.map(PageButton)}
				<div
					onClick={props.onBtNext}
					className={isLastPage ? 'disabled' : ''}
					title={'Next Page' + (isLastPage ? ' Disabled' : '')}
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
