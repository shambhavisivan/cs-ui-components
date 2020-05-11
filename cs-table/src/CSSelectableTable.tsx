import React, { useCallback } from 'react';
import { CSTableProps, CSTable, CSTableColumn, CSTableRow } from './CSTable';

/**
 * Properties for tables with selectable rows
 */
export interface CSSelectableTableProps extends CSTableProps {
	/**
	 * Set of row ids (CSTableRow.id) that are currently selected
	 */
	selectedRows: Set<string>;
	/**
	 * Callback invoked when a selection changes.
	 *
	 * @param selectedRows Ids of all the rows currently selected
	 */
	selectionChanged(selectedRows: Set<string>): any;
	/**
	 * Map containing data for advanced slection
	 */
	advancedSelection?: {
		labels: Array<string>,
		onChange: (selector:string) => void
	}
}

export const CSSelectableTable: React.FC<CSSelectableTableProps> = props => {
	const rows = typeof props.rows === 'function' ? props.rows() : props.rows;
	const normalRows = rows.filter(r => !r.fullWidth);
	const normalRowsIdSet = new Set(normalRows.map((row:CSTableRow) => row.id));

	normalRows.forEach(row => {
		row.data.values.__selected = props.selectedRows.has(row.id);
		row.data.optionalData = row.data.optionalData || {};
		row.data.optionalData.setValue = (value: boolean) => {
			const newValue = new Set<string>(props.selectedRows);
			value ? newValue.add(row.id) : newValue.delete(row.id);
			props.selectionChanged(newValue);
		};
	});

	const selectAll = (value: boolean) => {
		props.selectionChanged(value ? new Set([...props.selectedRows, ...normalRowsIdSet]) : new Set([...props.selectedRows].filter((id:string) => !normalRowsIdSet.has(id))));
	};

	const allSelected = useCallback(() => normalRows.every(row => props.selectedRows.has(row.id)) && normalRows.length > 0, [normalRows, props.selectedRows]);

	const cols: Array<CSTableColumn> = [{
		name: '__selected',
		label:
			<label className="cs-checkbox-wrapper">
				<input className="cs-checkbox cs-table-select-all" type="checkbox" checked={allSelected()} onChange={e => selectAll(e.target.checked)} />
				<span className="cs-checkbox-faux" />

				{props.advancedSelection && props.advancedSelection.labels && props.advancedSelection.onChange && (<select onChange={(e:React.ChangeEvent<HTMLSelectElement>) => props.advancedSelection.onChange(e.target.value)}>
					{props.advancedSelection.labels.map(selectionKey => {
						return (<option key={selectionKey} value={selectionKey}>{selectionKey}</option>)
					})}
				</select>)}

			</label>
		,
		render: (value, data) =>
			<label className="cs-checkbox-wrapper">
				<input className="cs-checkbox cs-table-select" type="checkbox" checked={value} onChange={e => data.optionalData.setValue(e.target.checked)} />
				<span className="cs-checkbox-faux" />
			</label>
	}, ...props.cols];

	return <CSTable {...props} rows={rows} cols={cols} />;
};
