import React, { useState, useCallback, useRef, useEffect } from 'react';
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
	 * Map containing data for advanced slection
	 */
	advancedSelection?: {
		labels: Array<string>;
		onChange: (selector: string) => void;
		onAdvancedDropdownExpand?: () => void;
		onAdvancedDropdownCollapse?: () => void;
	};
	// onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
	/**
	 * Callback invoked when a selection changes.
	 *
	 * @param selectedRows Ids of all the rows currently selected
	 */
	selectionChanged(selectedRows: Set<string>): any;
}

export const CSSelectableTable: React.FC<CSSelectableTableProps> = props => {
	const rows = typeof props.rows === 'function' ? props.rows() : props.rows;
	const normalRows = rows.filter(r => !r.fullWidth);
	const normalRowsIdSet = new Set(normalRows.map((row: CSTableRow) => row.id));

	const dropdownRef = useRef(null);

	normalRows.forEach(row => {
		row.data.values.__selected = props.selectedRows.has(row.id);
		row.data.optionalData = row.data.optionalData || {};
		row.data.optionalData.setValue = (value: boolean) => {
			const newValue = new Set<string>(props.selectedRows);
			value ? newValue.add(row.id) : newValue.delete(row.id);
			props.selectionChanged(newValue);
		};
	});

	const [dropdownState, setDropdownState] = useState(false);

	const toggleDropdownState = () => {
		try {
			if (dropdownState && props.advancedSelection.hasOwnProperty('onAdvancedDropdownCollapse')) {
				props.advancedSelection.onAdvancedDropdownCollapse();
			}
			if (!dropdownState && props.advancedSelection.hasOwnProperty('onAdvancedDropdownExpand')) {
				props.advancedSelection.onAdvancedDropdownExpand();
			}
		} catch (err) {
			console.warn(err.message);
		}

		setDropdownState(!dropdownState);
	};

	const selectAll = (value: boolean) => {
		props.selectionChanged(value ? new Set([...props.selectedRows, ...normalRowsIdSet]) : new Set([...props.selectedRows].filter((id: string) => !normalRowsIdSet.has(id))));
	};

	const clickListener = useCallback(
		e => {
			if (!(dropdownRef.current! as any).contains(e.target)) {
				setDropdownState(false);
				if (props.advancedSelection && props.advancedSelection.hasOwnProperty('onAdvancedDropdownCollapse')) {
					props.advancedSelection.onAdvancedDropdownCollapse();
				}
			}
		},
		[dropdownRef.current]
	);

	useEffect(() => {
		// Attach the listeners on component mount.
		document.addEventListener('click', clickListener);
		// Detach the listeners on component unmount.
		return () => {
			document.removeEventListener('click', clickListener);
		};
	}, []);

	const allSelected = useCallback(() => normalRows.every(row => props.selectedRows.has(row.id)) && normalRows.length > 0, [normalRows, props.selectedRows]);

	const cols: Array<CSTableColumn> = [{
		name: '__selected',
		label:
			<label className="cs-checkbox-dropdown-wrapper" ref={dropdownRef}>
				<input className="cs-checkbox cs-table-select-all" type="checkbox" checked={allSelected()} onChange={e => selectAll(e.target.checked)} />
				<span className="cs-checkbox-faux" />

				{props.advancedSelection ? (<><button className="cs-checkbox-dropdown-button icon-down"
						title="select"
						onClick={toggleDropdownState}
					/>
					{dropdownState ? (
						<div className="cs-checkbox-dropdown">
							{props.advancedSelection.labels.map(selectionKey => {
								return (
									<button className="cs-checkbox-dropdown-option"
										key={selectionKey}
										value={selectionKey}
										onClick={e => { e.preventDefault(); setDropdownState(false); props.advancedSelection.onChange(selectionKey); }}>
										{selectionKey}
									</button>);
							})}
						</div>
					) : null}
				</>) : null}
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
