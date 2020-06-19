import { ColDef as AgGridColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import React from 'react';

import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorState
} from '../interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps, LookupProps } from '../interfaces/cs-grid-cell-props';
import { LookupSearchColDef } from '../interfaces/cs-grid-col-def';
import { CSGridHeader } from './cs-grid-header';

/**
 * columnDefs - An array of column definitions:
 * {
 *     header: {
 *         label: 'Name'
 *     },
 *     name: 'text1'
 * }
 * rowData - Maps the field names above to row values.
 */
export interface CSGridLookupSearchResult {
	columnDefs: Array<LookupSearchColDef>;
	rowData: Array<Record<string, string>>;
}

/**
 * selected - A list of display column values for the selected rows.
 * searchTerm - The current user inputted search term.
 * columnDefs - The column definitions returned from the getLookupValues call.
 * rowData - The rows returned from the getLookupValues call.
 * showGrid - A flag to know when the grid should be shown.
 */
interface CSGridLookupEditorState
	extends CSGridCellEditorState<Array<Record<string, string>> | Record<string, string>> {
	selected: Array<Record<string, string>>;
	searchTerm: string;
	columnDefs: Array<LookupSearchColDef>;
	rowData: Array<Record<string, string>>;
	showGrid: boolean;
	guidColumn: string;
}

/**
 * A cell editor that displays lookup results in the form of an ag-grid table with selectable rows.
 */
export class CSGridLookupEditor
	extends React.Component<
		CSGridCellEditorProps<Array<Record<string, string>> | Record<string, string>> & LookupProps,
		CSGridLookupEditorState
	>
	implements CSGridCellEditor {
	gridApi: GridApi;
	columnApi: ColumnApi;
	multiSelect: boolean = false;
	replacementString = '____';

	constructor(
		props: CSGridCellEditorProps<Array<Record<string, string>> | Record<string, string>> &
			LookupProps
	) {
		super(props);

		const selected = Array.isArray(this.props.value.cellValue)
			? this.props.value.cellValue
			: [this.props.value.cellValue];

		const guidColumn = this.props.guidColumn.replace(
			new RegExp(/\./, 'g'),
			this.replacementString
		);

		this.state = {
			columnDefs: [],
			guidColumn,
			rowData: undefined,
			searchTerm: '',
			selected: this.formatRows(selected, '\\.', this.replacementString),
			showGrid: !this.props.minSearchTermLength,
			value: this.props.value
		};
	}

	async componentDidMount(): Promise<void> {
		if (!this.props.minSearchTermLength) {
			this.getLookupValues();
		}
	}

	isPopup = () => {
		return true;
	};

	/**
	 * Returns the current value - required by ag-grid.
	 */
	getValue() {
		return this.state.value;
	}

	/* Grid Events we're listening to */
	onGridReady = (params: GridReadyEvent) => {
		this.gridApi = params.api;
		this.columnApi = params.columnApi;
		this.gridApi.sizeColumnsToFit();
	};

	render() {
		const columnDefs = this.convertColumnDefs(this.state.columnDefs);

		const placeholder =
			'Search...' +
			(this.props.minSearchTermLength ? ` (min ${this.props.minSearchTermLength} char)` : '');

		return (
			<div className='ag-theme-balham'>
				<div className='cs-grid_search-wrapper'>
					<div className='cs-grid_search'>
						<span className='cs-grid_search-icon' />
						<input
							className='cs-grid_search-input'
							type='text'
							value={this.state.searchTerm}
							onChange={this.updateSearch}
							placeholder={placeholder}
							title={
								this.state.searchTerm
									? `Search value ${this.state.searchTerm}`
									: placeholder
							}
						/>
						{this.state.searchTerm && (
							<button
								className='cs-grid_clear-button'
								onClick={this.clearFilter}
								title='Clear filter'
							/>
						)}
					</div>
				</div>
				{this.state.showGrid && (
					<div className='cs-grid_lookup-grid'>
						<AgGridReact
							overlayLoadingTemplate={'Searching...'}
							rowSelection={this.multiSelect ? 'multiple' : 'single'}
							rowMultiSelectWithClick={true}
							// listening for events
							onGridReady={this.onGridReady}
							onSelectionChanged={this.onSelectionChanged}
							suppressColumnVirtualisation={true}
							columnDefs={columnDefs}
							rowData={this.state.rowData}
							// setting default column properties
							defaultColDef={{
								editable: false,
								filter: true,
								headerComponentFramework: CSGridHeader,
								resizable: true,
								sortable: true
							}}
						/>
					</div>
				)}
			</div>
		);
	}

	private convertColumnDefs = (columnDefs: Array<LookupSearchColDef>): Array<AgGridColDef> => {
		const agGridColDefs: Array<AgGridColDef> = [];

		for (const columnDef of columnDefs) {
			const agGridColDef: AgGridColDef = {};

			if (columnDef.name !== undefined) {
				agGridColDef.field = columnDef.name;
			}

			if (columnDef.header !== undefined && columnDef.header.label) {
				agGridColDef.headerName = columnDef.header.label;
			}

			if (columnDef.visible !== undefined) {
				agGridColDef.hide = !columnDef.visible;
			}

			agGridColDefs.push(agGridColDef);
		}

		return agGridColDefs;
	};

	/**
	 * Retrieves the lookup values and updates the state accordingly.
	 */
	private getLookupValues = async () => {
		const results: CSGridLookupSearchResult = await this.props.getLookupValues(
			this.state.searchTerm,
			this.props.node.id
		);

		const formattedRows = this.formatRows(results.rowData, '\\.', this.replacementString);

		const formattedColumnDefs: Array<LookupSearchColDef> = [];
		for (const columnDef of results.columnDefs) {
			const formattedColumnDef: LookupSearchColDef = { ...columnDef };
			const newName = columnDef.name.replace(new RegExp('\\.', 'g'), this.replacementString);
			formattedColumnDef.name = newName;
			formattedColumnDefs.push(formattedColumnDef);
		}

		this.setState(
			{
				columnDefs: formattedColumnDefs,
				rowData: formattedRows,
				showGrid: true
			},
			() => {
				this.gridApi.forEachNode(node => {
					const rowGuid = node.data[this.state.guidColumn];

					for (const row of this.state.selected) {
						if (row && row[this.state.guidColumn] === rowGuid) {
							node.setSelected(true, false, true);
						}
					}
				});

				this.columnApi.autoSizeAllColumns();

				const outerGrid = document
					.querySelectorAll('.cs-grid_app-wrapper')[0]
					.getBoundingClientRect();

				let gridWidth = this.columnApi
					.getColumnState()
					.reduce(
						(totalWidth, column) =>
							column.hide ? totalWidth : totalWidth + column.width,
						0
					);
				gridWidth += 4;
				gridWidth = Math.min(outerGrid.width, gridWidth);

				// Calculate width to fit contents.
				const popupWrapper: HTMLElement = document.querySelectorAll<HTMLElement>(
					'.cs-grid_app-wrapper .cs-grid_main .ag-popup-editor'
				)[0];
				popupWrapper.style.width = `${gridWidth}px`;
				popupWrapper.style.maxWidth = `${gridWidth}px`;

				const popupWrapperInfo = popupWrapper.getBoundingClientRect();

				// Calculate position to fit within the outer grid.
				const diff = popupWrapperInfo.left + gridWidth - outerGrid.width + 3;
				if (diff > 0) {
					popupWrapper.style.left = `${Math.max(popupWrapperInfo.left - diff, 0)}px`;
				}

				const visibleGridHeight = outerGrid.height - (popupWrapperInfo.top - outerGrid.top);
				if (visibleGridHeight - popupWrapperInfo.height + 3 < 0) {
					popupWrapper.style.top = `${outerGrid.height - popupWrapperInfo.height - 3}px`;
				}
			}
		);
	};

	/**
	 * Called when the user selects a row in the grid.
	 */
	private onSelectionChanged = async (): Promise<void> => {
		let selected: Array<Record<string, string>> | Record<string, string>;
		const selectedRows: Array<Record<string, string>> = this.gridApi.getSelectedRows();

		if (this.multiSelect) {
			selected = this.formatRows(selectedRows, this.replacementString, '.');
		} else {
			if (selectedRows[0]) {
				selected = this.replaceAll(selectedRows[0], this.replacementString, '.');
			}
		}

		let value: CellData<Array<Record<string, string>> | Record<string, string>> = {
			cellValue: selected,
			errorMessage: this.state.value.errorMessage
		};

		if (this.props.onChange) {
			value = await this.props.onChange(
				this.props.node.id,
				this.getValue().cellValue,
				selected
			);
		}

		if (Array.isArray(value.cellValue)) {
			value.cellValue = this.formatRows(value.cellValue, '\\.', this.replacementString);
		} else {
			if (value.cellValue) {
				value.cellValue = this.replaceAll(value.cellValue, '\\.', this.replacementString);
			}
		}

		this.setState({ value }, () => {
			if (!this.multiSelect) {
				this.props.stopEditing();
			}
		});
	};

	/**
	 * Called when the search term changes.
	 */
	private updateSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.search(event.target.value);
	};

	/**
	 * Clears the current search term.
	 */
	private clearFilter = () => {
		this.search('');
	};

	/**
	 * Updates the grid given a search term.
	 */
	private search = (searchTerm: string) => {
		const showGrid =
			!this.props.minSearchTermLength || searchTerm.length >= this.props.minSearchTermLength;

		this.setState(
			{
				searchTerm,
				showGrid
			},
			() => {
				if (this.state.showGrid) {
					this.getLookupValues();
				}
			}
		);
	};

	private formatRows = (
		rows: Array<Record<string, string>>,
		original: string,
		replace: string
	) => {
		const formattedRows: Array<Record<string, string>> = [];
		for (const row of rows) {
			const formattedRow = this.replaceAll(row, original, replace);
			formattedRows.push(formattedRow);
		}

		return formattedRows;
	};

	private replaceAll = (record: Record<string, string>, original: string, replace: string) => {
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
	};
}
