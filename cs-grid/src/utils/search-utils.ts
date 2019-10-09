import { ColDef } from '../interfaces/cs-grid-base-interfaces';
import {
	ColumnFilterCondition,
	Condition,
	CSGridOperator
} from '../interfaces/cs-grid-data-source-api';

/**
 * Removes trailing semicolons, colons and backslashes.
 * @param searchString - the string to trim.
 */
const trimDelimiters = (searchString: string) => {
	const trimAtEnd = searchString.replace(/[:;\\]*\s*$/, '');
	const cleansedString = trimAtEnd.replace(/^[:;\\]*\s*/, '');

	return cleansedString;
};

const removeEscapesAndSplitForSearchFilter = (str: string, charToEscape: string) => {
	const afterCharRemoved = str.split(charToEscape);
	const cleansedAfterCharRemoved = [];
	cleansedAfterCharRemoved.push(afterCharRemoved[0]);
	for (let i = 1; i < afterCharRemoved.length; i += 1) {
		const previousSubStringsLastChar = afterCharRemoved[i - 1].slice(-1);
		if (previousSubStringsLastChar === '\\') {
			cleansedAfterCharRemoved[
				cleansedAfterCharRemoved.length - 1
			] = `${cleansedAfterCharRemoved[cleansedAfterCharRemoved.length - 1].slice(
				0,
				-1
			)}${charToEscape}${afterCharRemoved[i]}`;
		} else {
			cleansedAfterCharRemoved.push(afterCharRemoved[i]);
		}
	}

	return cleansedAfterCharRemoved;
};

/**
 * Remove all backslashes except escaped backslashes.
 * @param str - the string to edit.
 */
const handleBackslashes = (str: string) => {
	const afterSplit = str.split('\\');
	const cleansedString = afterSplit.reduce((prev, curr) => {
		const appendable = curr !== '' ? curr : '\\';

		return `${prev}${appendable}`;
	});

	return cleansedString;
};

/**
 * Verifies the existence of the column definitions used in the qualified search.
 * @param {Array<ColDef>} columnDefinitions - The column definitions for the grid.
 * @param {Record<string, string>} qualifiedSearchQueries - Maps column ids queries.
 */
const validateQualifiedSearch = (
	columnDefinitions: Array<ColDef>,
	qualifiedSearchQueries: Record<string, string>
) => {
	let qualifiedSearchError = '';
	const invalidQsKeys = [];

	for (const columnName in qualifiedSearchQueries) {
		if (!qualifiedSearchQueries.hasOwnProperty(columnName)) {
			continue;
		}

		const validColumnName = columnDefinitions.some(
			column => column.headerName.toLowerCase() === columnName.toLowerCase() && !column.hide
		);

		if (!validColumnName) {
			invalidQsKeys.push(columnName);
		}
	}

	if (invalidQsKeys.length === 1) {
		qualifiedSearchError = `The column ${invalidQsKeys} does not exist or is not visible.`;
	} else if (invalidQsKeys.length > 0) {
		const lastColumn = invalidQsKeys.pop();
		qualifiedSearchError = `The columns ${invalidQsKeys.join(
			', '
		)} and ${lastColumn} do not exist or are not visible.`;
	}

	return qualifiedSearchError;
};

/**
 * Converts the qualified search queries into an array of ColumnFilterConditions.
 * @param {Array<ColDef>} columnDefinitions - The column definitions for the grid.
 * @param {Record<string, string>} qualifiedSearchQueries - Maps column ids queries.
 */
const convertQueriesToColumnFilters = (
	columnDefinitions: Array<ColDef>,
	qualifiedSearchQueries: Record<string, string>
): Map<string, Array<ColumnFilterCondition>> => {
	const columnFilters: Map<string, Array<ColumnFilterCondition>> = new Map();

	for (const columnName in qualifiedSearchQueries) {
		if (!qualifiedSearchQueries.hasOwnProperty(columnName)) {
			continue;
		}

		const condition1: Condition = {
			filterText: SearchUtils.handleBackslashes(qualifiedSearchQueries[columnName]).trim(),
			type: 'contains'
		};
		let condition2: Condition;
		let operator: CSGridOperator;

		let conditions = removeEscapesAndSplitForSearchFilter(
			qualifiedSearchQueries[columnName],
			'&'
		);

		// removing empty array values equates to allow && as well as &.
		conditions = conditions.filter(el => el);

		if (conditions.length === 1) {
			conditions = removeEscapesAndSplitForSearchFilter(
				qualifiedSearchQueries[columnName],
				'|'
			);
			conditions = conditions.filter(el => el);

			if (conditions.length === 2) {
				operator = 'OR';
			}
		} else {
			operator = 'AND';
		}

		if (conditions.length === 2) {
			condition1.filterText = SearchUtils.handleBackslashes(conditions[0]).trim();
			condition2 = {
				filterText: SearchUtils.handleBackslashes(conditions[1]).trim(),
				type: 'contains'
			};
		}

		const columnFilterCondition: ColumnFilterCondition = {
			condition1,
			condition2,
			operator
		};

		const columnDefinition = columnDefinitions.find(
			column => column.headerName.toLowerCase() === columnName.toLowerCase() && !column.hide
		);

		const columnFilterConditions = columnFilters.get(columnDefinition.field) || [];
		columnFilterConditions.push(columnFilterCondition);

		columnFilters.set(columnDefinition.field, columnFilterConditions);
	}

	return columnFilters;
};

export const SearchUtils = {
	convertQueriesToColumnFilters,
	handleBackslashes,
	removeEscapesAndSplitForSearchFilter,
	trimDelimiters,
	validateQualifiedSearch
};
