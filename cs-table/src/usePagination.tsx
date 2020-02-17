import { useState } from 'react';
import { CSTableRow } from './CSTable';

/**
 * Return value of usePagination hook.
 */
export interface PaginationOutput {
	/**
	 * List of rows on the current page. To be fed into CSTable.rows
	 */
	pageContents: Array<CSTableRow>;
	/**
	 * Current page counter, to be fed into CSTablePaginationControls.currentPage
	 */
	currentPage: number;
	/**
	 * The last page of the table, to be fed into CSTablePaginationControls.lastPage
	 */
	lastPage: number;
	/**
	 * Callback when ccurrent row changes, to be fed into CSTablePaginationControls.setCurrentPage
	 * @param page The new current page.
	 */
	setCurrentPage(page: number): void;
}

/**
 * Simplified pagination logic backed by an array of rows.
 * @param pageSize Number of rows on pages
 * @param rows Complete list of all possible rows.
 */
export function useArrayPagination(pageSize: number, rows: Array<CSTableRow>): PaginationOutput {
	return usePagination(pageSize, () => rows.length, (num, size) => rows.slice(num * size, (num + 1) * size));
}

/**
 * More generic pagination logic, backed by callback functions
 * @param pageSize Number of rows on pages
 * @param rowCount Function that calculates the total number of rows
 * @param pageCalculator Function that calculates the rows on a given page
 */
export function usePagination(pageSize: number, rowCount: () => number, pageCalculator: (pNum: number, pSize: number) => Array<CSTableRow>): PaginationOutput {
	const [currentPage, setCurrentPage] = useState(0);
	const lastPage = Math.max(0, Math.floor((rowCount() - 1) / pageSize));
	const page = currentPage < 0 ? 0 : (currentPage > lastPage ? lastPage : currentPage);
	return {
		pageContents: pageCalculator(page, pageSize),
		lastPage,
		currentPage: page,
		setCurrentPage
	};
}
