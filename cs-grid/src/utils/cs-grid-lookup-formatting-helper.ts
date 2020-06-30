export const replacementString = '____';

export function formatRows(rows: Array<Record<string, string>>, original: string, replace: string) {
	const formattedRows: Array<Record<string, string>> = [];
	for (const row of rows) {
		const formattedRow = replaceAll(row, original, replace);
		formattedRows.push(formattedRow);
	}

	return formattedRows;
}

export function replaceAll(record: Record<string, string>, original: string, replace: string) {
	if (!record) {
		return record;
	}
	const findRegex = RegExp(original, 'g');

	const formattedRecord: Record<string, string> = {};
	for (const key of Object.keys(record)) {
		const newKey = key.replace(findRegex, replace);
		formattedRecord[newKey] = record[key];
	}

	return formattedRecord;
}
