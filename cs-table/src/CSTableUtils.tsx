import { CSTableColumn } from './CSTable';

/**
 * Helper function for localising column labels
 *
 * @param cols Columns whose labels to replace
 * @param labels Map of original labels to localised values.
 * @param failOnMissingLabel Function will throw error on missing label if set to true, skip missing label if not.
 */
export function applyLabelValuesToColumnDescriptors(cols: Array<CSTableColumn>, labels: Record<string, string>, failOnMissingLabel: boolean = false): Array<CSTableColumn> {
	return cols.map(col => {
		const ret = { ...col };
		if (typeof ret.label === 'string') {
			ret.label = labels[ret.label] ?? (failOnMissingLabel ? (() => { throw new Error(`Couldn't find localised value for label ${ret.label}`); })() : ret.label);
		}
		return ret;
	});
}
