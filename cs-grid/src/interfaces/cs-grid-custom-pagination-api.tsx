import { Row, RowData } from './cs-grid-base-interfaces';

/**
 * Defines all functions required to use custom pagination.
 */
export interface CustomPaginationAPI {
	/**
	 * The current page number, starting from 1.
	 */
	currentPage: number;

	/**
	 * Is the current page the last page.
	 */
	isLastPage: () => boolean;

	/**
	 * Update the row data for the next page.
	 */
	onBtNext: () => Promise<void>;

	/**
	 * Update the row data for the previous page.
	 */
	onBtPrevious: () => Promise<void>;

	/**
	 * Update the row data for the first page with the new page size.
	 * @param {number} pageSize - The page size.
	 */
	onPageSizeChange: (pageSize: number) => Promise<void>;
}
