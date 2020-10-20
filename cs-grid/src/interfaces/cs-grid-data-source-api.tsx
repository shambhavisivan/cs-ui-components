import { Row, RowData } from './cs-grid-base-interfaces';

/**
 * Defines all functions required to use the data source pagination and the data source quick filtering, eg from a server.
 */
export interface DataSourceAPI {
	/**
	 * Is the current page the last page.
	 */
	isLastPage: () => boolean;

	/**
	 * Return row data for the next page.
	 */
	onBtNext: () => Promise<Array<Row>> | Promise<Array<RowData>>;

	/**
	 * Return row data for the previous page.
	 */
	onBtPrevious: () => Promise<Array<Row>> | Promise<Array<RowData>>;

	/**
	 * Return row data for the first page.
	 * @param {number} pageSize - The page size.
	 * @param {Array<OrderBy>} sortModel - Defines the ordering.
	 * @param {FilterModel} filterModel - Defines the filtering.
	 */
	onContextChange: (
		pageSize: number,
		sortModel: Array<OrderBy>,
		filterModel: FilterModel
	) => Promise<Array<Row>> | Promise<Array<RowData>>;
}

export type CSGridSortDirection = 'SORT_ASC' | 'SORT_DESC';

export interface OrderBy {
	columnId: string;
	sortDirection: CSGridSortDirection;
}

export interface FilterModel {
	columnFilters: Map<string, Array<ColumnFilterCondition>>;
	unqualifiedSearchTerms: Array<string>;
}

export type CSGridOperator = 'AND' | 'OR';

export interface ColumnFilterCondition {
	condition1: Condition;
	condition2?: Condition;
	operator?: CSGridOperator;
}

export type CSGridConditionType =
	| 'contains'
	| 'notContain'
	| 'equals'
	| 'notEqual'
	| 'startsWith'
	| 'endsWith';

export interface Condition {
	filterText: string;
	type: CSGridConditionType;
}
