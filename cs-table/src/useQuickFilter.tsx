import { CSTableRow } from './CSTable';
import { useState } from 'react';

/**
 * Return value of useQuickFilter.
 */
export interface QuickFilterOutput {
	/**
	 * List of rows matching the filter term.
	 */
	filteredRows: Array<CSTableRow>;
	/**
	 * Current quickfilter term
	 */
	term: string;
	/**
	 * Callback for when the quickfilter term has changed
	 *
	 * @param term The new quickfilter term
	 */
	setTerm(term: string): any;
}

const DEFAULT_FILTER: (row: CSTableRow, term: string) => boolean = (row, term) => Object.values(row.data.values).some(value => value && value.toString().toLowerCase().includes(term.toLowerCase()));

/**
 *
 * @param rows List of all the rows that need to be filtered.
 * @param filter Filter function, should return true for rows that match the filter criteria. Defaults to a case-insensitive search in all the record values.
 */
export function useQuickFilter(rows: Array<CSTableRow>, filter: (row: CSTableRow, term: string, index: number, rows: Array<CSTableRow>) => boolean = DEFAULT_FILTER): QuickFilterOutput {
	const [term, setTerm] = useState('');
	return {
		filteredRows: rows.filter((row, i) => filter(row, term, i, rows)),
		term,
		setTerm
	};
}
