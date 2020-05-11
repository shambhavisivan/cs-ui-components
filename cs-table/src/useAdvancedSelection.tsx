import { useState, useCallback } from 'react';
import { CSTableRow } from './CSTable';

export interface AdvancedSelector {
	[key: string]: (row: CSTableRow, index: number) => void;
}

export interface AdvancedSelectOutput {
	selected: Set<string>;
	setSelected(selectedRows: Set<string>): any;
	advancedSelectionChanged(selector: string): any;
}

export function useAdvancedSelection(
	rows: Array<CSTableRow>,
	advancedSelector: AdvancedSelector
): AdvancedSelectOutput {
	const [selected, setSelected] = useState(new Set<string>());

	const advancedSelectionChanged = useCallback(
		(selector) => {
			let selectData = rows.filter(advancedSelector[selector]);
			setSelected(new Set<string>(selectData.map((row) => row.id)));
		},
		[rows, advancedSelector]
	);

	return {
		selected,
		setSelected,
		advancedSelectionChanged,
	};
}
