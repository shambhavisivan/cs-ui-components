import { ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import React from 'react';

import {
	CellData,
	ColDef,
	CSGridCellEditor,
	CSGridCellEditorProps,
	CSGridCellEditorState
} from '../interfaces/cs-grid-base-interfaces';
import { CSGridHeader } from './cs-grid-header';

/**
 * columnDefs - An array of column definitions each needs to contain a field name and a column header:
 * {
 *      field: 'text1',
 *      headerName: 'Name'
 * }
 * rowData - Maps the field names above to row values.
 */
export interface CSGridLookupSearchResult {
	columnDefs: Array<ColDef>;
	rowData: Array<Record<string, string>>;
}

/**
 * minSearchTermLength - The minimum number of characters needed before the lookup will trigger.
 * displayColumn - The column to display in the renderer.
 * guidColumn - A unique ID for the row, this value will not be shown in the grid.
 * getLookupValues - Returns the latest lookup values depending on the search term input.
 */
export interface CSGridLookupEditorProps
	extends CSGridCellEditorProps<Array<Record<string, string>> | Record<string, string>> {
	minSearchTermLength: number;
	displayColumn: string;
	guidColumn: string;
	getLookupValues(searchTerm: string, guid: string): Promise<CSGridLookupSearchResult>;
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
	columnDefs: Array<ColDef>;
	rowData: Array<Record<string, string>>;
	showGrid: boolean;
}

/**
 * A cell editor that displays lookup results in the form of an ag-grid table with selectable rows.
 */
export class CSGridLookupEditor
	extends React.Component<CSGridLookupEditorProps, CSGridLookupEditorState>
	implements CSGridCellEditor {
	gridApi: GridApi;
	columnApi: ColumnApi;
	multiSelect: boolean = false;

	constructor(props: CSGridLookupEditorProps) {
		super(props);

		const selected = Array.isArray(this.props.value.cellValue)
			? this.props.value.cellValue
			: [this.props.value.cellValue];
		this.state = {
			columnDefs: [],
			rowData: undefined,
			searchTerm: '',
			selected,
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
							columnDefs={this.state.columnDefs}
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

	/**
	 * Retrieves the lookup values and updates the state accordingly.
	 */
	private getLookupValues = async () => {
		const results: CSGridLookupSearchResult = await this.props.getLookupValues(
			this.state.searchTerm,
			this.props.node.id
		);

		this.setState(
			{
				columnDefs: results.columnDefs,
				rowData: results.rowData,
				showGrid: true
			},
			() => {
				this.gridApi.forEachNode(node => {
					const rowGuid = node.data[this.props.guidColumn];

					for (const row of this.state.selected) {
						if (row && row[this.props.guidColumn] === rowGuid) {
							node.setSelected(true, false, true);
						}
					}
				});

				this.columnApi.autoSizeAllColumns();

				let gridWidth = this.columnApi
					.getColumnState()
					.reduce(
						(totalWidth, column) =>
							column.hide ? totalWidth : totalWidth + column.width,
						0
					);
				gridWidth += 4;

				// Calculate width to fit contents.
				const popupWrapper: HTMLElement = document.querySelectorAll<HTMLElement>(
					'.cs-grid_app-wrapper .cs-grid_main .ag-popup-editor'
				)[0];
				popupWrapper.style.width = `${gridWidth}px`;

				const popupWrapperInfo = popupWrapper.getBoundingClientRect();
				const outerGrid = document
					.querySelectorAll('.cs-grid_app-wrapper')[0]
					.getBoundingClientRect();

				// Calculate position to fit within the outer grid.
				const diff = popupWrapperInfo.left + gridWidth - outerGrid.width + 3;
				if (diff > 0) {
					popupWrapper.style.left = `${popupWrapperInfo.left - diff}px`;
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
		selected = this.multiSelect ? [...selectedRows] : selectedRows[0];

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
}
