import { CSDataTableRowInterface } from '@cloudsense/cs-ui-components';

export const replacementString = '____';

export function formatRows(
	rows: Array<CSDataTableRowInterface>,
	original: string,
	replace: string
) {
	const formattedRows: Array<CSDataTableRowInterface> = [];
	for (const row of rows) {
		const formattedRow = replaceAll(row, original, replace);
		formattedRows.push(formattedRow);
	}

	return formattedRows;
}

export function replaceAll(record: CSDataTableRowInterface, original: string, replace: string) {
	if (!record) {
		return record;
	}
	const findRegex = RegExp(original, 'g');

	const formattedRecord: Record<string, string> = {};
	for (const key of Object.keys(record.data)) {
		const newKey = key.replace(findRegex, replace);
		formattedRecord[newKey] = record.data[key];
	}

	return { ...record, data: formattedRecord };
}

/**
 * Formats the provided lookup values.
 */
export function formatLookupValue(
	value: Array<CSDataTableRowInterface> | CSDataTableRowInterface,
	displayColumn: string
) {
	if (!value) {
		return '';
	}

	if (Array.isArray(value)) {
		if (value.length > 0) {
			const rows = formatRows(value, replacementString, '.');

			let displayValue = '';
			for (const row of rows) {
				displayValue += `${row.data[displayColumn]}, `;
			}

			return displayValue.substring(0, displayValue.length - 2);
		} else {
			return '';
		}
	}

	const formattedRow = replaceAll(value, replacementString, '.');

	return formattedRow.data[displayColumn];
}
