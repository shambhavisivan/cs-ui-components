import React from 'react';

/**
 * Table pagination box properties.
 */
export interface CSTablePaginationControlsProps {
	/**
	 * The last page that should be displayed (indexed from 0)
	 */
	lastPage: number;
	/**
	 * The current page (indexed from 0)
	 */
	currentPage: number;
	/**
	 * Callback for when the current page number changes.
	 *
	 * @param newPage The newly selected page (indexed from 0)
	 */
	changePage(newPage: number): void;
}

const generateRange = (start: number, end: number): Array<number> => {
	const ret: Array<number> = [];
	for (let i = start; i < end; i++) {
		ret.push(i);
	}
	return ret;
};

/**
 * Pagination control box component to be used in conjunction with `usePagination` hook.
 *
 * @param param0
 */
export const CSTablePaginationControls: React.FC<CSTablePaginationControlsProps> = ({ currentPage, lastPage, changePage }) => {
	let range = generateRange(Math.max(0, currentPage - 4), Math.min(lastPage + 1, currentPage + 5));
	const firstPage = 0;
	while (range.length > 5) {
		const currentPos = range.findIndex(p => p === currentPage);
		if (currentPos >= range.length / 2) {
			range = range.slice(1);
		} else {
			range.pop();
		}
	}

	return <div className="cs-pagination-wrapper">
		<div className="cs-pagination">
			<a className={'cs-table-page-start' + (currentPage === firstPage ? ' disabled' : '')} onClick={() => changePage(0)}>
				<span className="cs-btn-icon icon-left" />
				<span className="cs-btn-icon icon-left" />
			</a>
			<a className={'cs-table-page-dec' + (currentPage === firstPage ? ' disabled' : '')} onClick={() => changePage(Math.max(currentPage - 1, 0))}>
				<span className="cs-btn-icon icon-left" />
			</a>
			{range.map(page => <a key={page} className={'cs-table-page-num' + (page === currentPage ? ' active' : '')} onClick={() => changePage(page)}>{page + 1}</a>)}
			<a className={'cs-table-page-inc' + (currentPage === lastPage ? ' disabled' : '')} onClick={() => changePage(Math.min(currentPage + 1, lastPage))}>
				<span className="cs-btn-icon icon-right" />
			</a>
			<a className={'cs-table-page-end' + (currentPage === lastPage ? ' disabled' : '')} onClick={() => changePage(lastPage)}>
				<span className="cs-btn-icon icon-right" />
				<span className="cs-btn-icon icon-right" />
			</a>

		</div>
	</div>
		;
};
