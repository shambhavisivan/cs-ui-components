import {
	AgGridEvent,
	CellClassParams,
	CellEditingStoppedEvent,
	CellValueChangedEvent,
	ColDef as AgGridColDef,
	ColumnResizedEvent,
	GetQuickFilterTextParams,
	GridApi,
	GridReadyEvent,
	IDatasource,
	IGetRowsParams
} from 'ag-grid-community';

import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgGridReact } from 'ag-grid-react';
import * as KeyCode from 'keycode-js';

import React from 'react';
import ReactDOM from 'react-dom';
import {
	CellClickedEvent,
	CellData,
	CSGridApi,
	CSGridControl,
	Row,
	RowData,
	RowStyleParams,
	SuppressKeyboardEventParams
} from '../interfaces/cs-grid-base-interfaces';
import { ColDef } from '../interfaces/cs-grid-col-def';
import {
	ColumnFilterCondition,
	Condition,
	CSGridSortDirection,
	DataSourceAPI,
	FilterModel,
	OrderBy
} from '../interfaces/cs-grid-data-source-api';
import { UserInfo } from '../interfaces/user-info';
import { formatDate } from '../utils/cs-grid-date-helper';
import { CSGridDefaultComparator } from '../utils/cs-grid-default-comparator';
import { CSGridNumberComparator } from '../utils/cs-grid-number-comparator';
import { SearchUtils } from '../utils/search-utils';
import { CSGridBooleanRenderer } from './cs-grid-boolean-renderer';
import { CSGridClientSidePagination } from './cs-grid-client-side-pagination';
import { CSGridCurrencyEditor } from './cs-grid-currency-editor';
import { CSGridCurrencyRenderer } from './cs-grid-currency-renderer';
import { CSGridDataSourcePagination } from './cs-grid-data-source-pagination';
import { CSGridDateEditor } from './cs-grid-date-editor';
import { CSGridDateRenderer } from './cs-grid-date-renderer';
import { CSGridDateTimeEditor } from './cs-grid-date-time-editor';
import { CSGridDecimalEditor } from './cs-grid-decimal-editor';
import { CSGridDecimalRenderer } from './cs-grid-decimal-renderer';
import { CSGridHeader } from './cs-grid-header';
import { CSGridIconRenderer } from './cs-grid-icon-renderer';
import { CSGridIntegerEditor } from './cs-grid-integer-editor';
import { CSGridIntegerRenderer } from './cs-grid-integer-renderer';
import { CSGridLookupEditor } from './cs-grid-lookup-editor';
import { CSGridLookupRenderer } from './cs-grid-lookup-renderer';
import { CSGridMultiSelectLookupEditor } from './cs-grid-multi-select-lookup-editor';
import { CSGridMultiSelectPicklistEditor } from './cs-grid-multi-select-picklist-editor';
import { CSGridNoEditor } from './cs-grid-no-editor';
import { CSGridPicklistEditor } from './cs-grid-picklist-editor';
import { CSGridPicklistRenderer } from './cs-grid-picklist-renderer';
import { CSGridQuickFilter, CSGridQuickFilterControl } from './cs-grid-quick-filter';
import { CSGridRowSelectionEditor } from './cs-grid-row-selection-editor';
import { CSGridRowSelectionRenderer } from './cs-grid-row-selection-renderer';
import { CSGridRowValidationRenderer } from './cs-grid-row-validation-renderer';
import { CSGridTextEditor } from './cs-grid-text-editor';
import { CSGridTextRenderer } from './cs-grid-text-renderer';

import { isEqual } from 'lodash';
import { CustomPaginationAPI } from '../interfaces/cs-grid-custom-pagination-api';

const LEGACY_ROW_DATA_MODEL_DEPRECATION_WARN =
	"CSGrid: Using legacy type 'Row' is deprecated for row data. look into 'RowData' for more details.";

export interface CSGridProps {
	pageSizes?: Array<number>;
	csGridPagination: CSGridControl;
	csGridQuickFilter: CSGridQuickFilterControl;
	quickFilterHiddenColumns?: boolean;
	dataSourceAPI?: DataSourceAPI;
	editorComponents?: Record<string, any>;
	rowHeight?: number;
	rendererComponents?: Record<string, any>;
	multiSelect: boolean;
	uniqueIdentifierColumnName: string;
	rowData?: Array<Row> | Array<RowData>;
	rowHighlighting?: Record<string, string>;
	columnState?: string;
	columnDefs?: Array<ColDef>;
	/**
	 * When deltaRowDataMode is on, the grid will compare the new row data with the current row data and create a transaction object for you.
	 * The grid then executes the change as an update transaction, keeping all of the grids selections, filters etc.
	 * Use this if you want to manage the data outside of the grid (eg in a Redux store)
	 * and then let the grid work out what changes are needed to keep the grid's version of the data up to date.
	 */
	deltaRowDataMode?: boolean;
	suppressRowTransform?: boolean;
	/**
	 * Set to true/false to enable/disable Single Click Editing for cells, default: true
	 */
	singleClickEdit?: boolean;
	/**
	 * If true, then dots in field names (e.g. address.firstLine) are not treated as deep references.
	 * Allows you to use dots in your field name if you prefer.
	 * default: true
	 */
	suppressFieldDotNotation?: boolean;
	customPaginationAPI?: CustomPaginationAPI;

	customSort?: (columnId: string, sortDirection: CSGridSortDirection) => Promise<void>;
	/**
	 * If true, make the currently visible columns fit the screen. If you don't want a
	 * particular column to be included in the auto resize, then set the column definition
	 * suppressSizeToFit=true. This is helpful if, for example, you want the first column to
	 * remain fixed width, but all other columns to fill the width of the table.
	 */
	sizeColumnsToFit?: boolean;
	onColumnStateChange?(columnState: string): void;
	onSelectionChange?(selectedRows: Array<Row> | Array<RowData>): void;
	onCellValueChange?(
		rowNodeId: string,
		columnField: string,
		oldValue: any,
		newValue: any
	): Promise<void>;
	onCellEditingStopped?(rowNodeId: string, columnField: string): void;
	onGridReady?(params: GridReadyEvent, csGridApi: CSGridApi): void;
	onCellClicked?(event: CellClickedEvent): void;
	onRowDoubleClicked?(event: CellClickedEvent): void;
	getRowClass?(rowGuid: string): string | Array<string>;
	onColumnResized?(columnField: string, newWidth: number): void;
}

class CSGridState {
	frameworkComponents = {
		booleanRenderer: CSGridBooleanRenderer,
		currencyEditor: CSGridCurrencyEditor,
		currencyRenderer: CSGridCurrencyRenderer,
		dateEditor: CSGridDateEditor,
		dateRenderer: CSGridDateRenderer,
		dateTimeEditor: CSGridDateTimeEditor,
		dateTimeRenderer: CSGridDateRenderer,
		decimalEditor: CSGridDecimalEditor,
		decimalRenderer: CSGridDecimalRenderer,
		iconRenderer: CSGridIconRenderer,
		integerEditor: CSGridIntegerEditor,
		integerRenderer: CSGridIntegerRenderer,
		lookupEditor: CSGridLookupEditor,
		lookupRenderer: CSGridLookupRenderer,
		multiSelectLookupEditor: CSGridMultiSelectLookupEditor,
		multiSelectLookupRenderer: CSGridLookupRenderer,
		multiSelectPicklistEditor: CSGridMultiSelectPicklistEditor,
		multiSelectPicklistRenderer: CSGridPicklistRenderer,
		noEditor: CSGridNoEditor,
		picklistEditor: CSGridPicklistEditor,
		picklistRenderer: CSGridPicklistRenderer,
		rowSelectionEditor: CSGridRowSelectionEditor,
		rowSelectionRenderer: CSGridRowSelectionRenderer,
		rowValidationRenderer: CSGridRowValidationRenderer,
		textEditor: CSGridTextEditor,
		textRenderer: CSGridTextRenderer
	};

	filterText: string = null;
	nonIncrementalFilterText: string = null;
	qualifiedSearchError: string = '';
	qualifiedSearchFilter: FilterModel = {
		columnFilters: new Map(),
		unqualifiedSearchTerms: []
	};

	currentPage: number = 0;
	totalPages: number;
	currentPageSize: number;
	rowData: Array<Row>;
	isUsingLegacyRowDataModel: boolean;
}

export class CSGrid extends React.Component<CSGridProps, CSGridState> {
	state: CSGridState = new CSGridState();
	private gridApi: GridApi;
	private defaultPageSizes: Array<number> = [10, 20, 50, 100];
	private rowSelectionColumns: Array<string> = [];
	private lookupColumns: Array<string> = [];
	private dateColumns: Map<string, UserInfo> = new Map();
	private dateTimeColumns: Map<string, UserInfo> = new Map();

	constructor(props: CSGridProps) {
		super(props);

		const editorComponents = props.editorComponents || {};
		const rendererComponents = props.rendererComponents || {};

		this.state.frameworkComponents = {
			...this.state.frameworkComponents,
			...editorComponents,
			...rendererComponents
		};
		this.handleLegacyRowData();
	}

	componentDidUpdate(prevProps: Readonly<CSGridProps>, prevState: Readonly<CSGridState>) {
		if (prevProps.rowData !== this.props.rowData) {
			if (this.state.isUsingLegacyRowDataModel) {
				this.setState({ rowData: this.props.rowData });
			} else {
				const rows: Array<Row> = this.convertRowDataToLegacyRow(
					this.props.rowData as Array<RowData>
				);
				this.setState({ rowData: rows });
			}
		}
		if (this.props.sizeColumnsToFit) {
			if (this.gridApi) {
				this.gridApi.sizeColumnsToFit();
			}
		}
	}

	convertRowDataToLegacyRow = (records: Array<RowData>): Array<Row> => {
		return records.map((record, rowNumber) => {
			const newRecord: Row = {};
			for (const fieldKey in record) {
				if (fieldKey === 'row_cell_notifications') {
					continue;
				}
				const notifications =
					record.row_cell_notifications && record.row_cell_notifications[fieldKey];
				newRecord[fieldKey] = { cellValue: record[fieldKey] };
				if (notifications && notifications.type === 'error') {
					newRecord[fieldKey].errorMessage = notifications.message;
				}
			}

			return newRecord;
		});
	};

	convertLegacyRowToRowData = (
		rows: Array<Row>
	): Array<Omit<RowData, 'row_cell_notifications'>> => {
		return rows.map(row => {
			const record: RowData = {};
			for (const fieldKey of Object.keys(row)) {
				record[fieldKey] = row[fieldKey].cellValue;
				if (row.row_cell_notifications) {
					record.row_cell_notifications = row.row_cell_notifications.cellValue;
				}
			}

			return record;
		});
	};

	getSelectedRows = (): Array<Row> | Array<RowData> => {
		if (this.state.isUsingLegacyRowDataModel) {
			return this.gridApi.getSelectedRows();
		}

		return this.convertLegacyRowToRowData(this.gridApi.getSelectedRows());
	};

	getRowStyle = (params: RowStyleParams) => {
		const colour = this.props.rowHighlighting[params.node.id];
		if (colour) {
			return { background: colour };
		} else {
			/* Once set the styling never gets removed so this is
			   needed to undo the row highlighting. */
			return { background: '#ffffff' };
		}
	};

	getRowClass = (params: any) => {
		return this.props.getRowClass(params.node.id);
	};

	render() {
		const columnDefs = this.convertColumnDefs(this.props.columnDefs);
		const pageSizes = this.props.pageSizes || this.defaultPageSizes;
		const isDataSourceRowModel = !!this.props.dataSourceAPI;

		const paginationLocation = this.props.csGridPagination.location;
		const paginationElement = this.getPagination();
		const paginationPortals = this.getReactPortals(
			this.props.csGridPagination,
			paginationElement
		);

		const quickFilterLocation = this.props.csGridQuickFilter.location;
		const quickFilter = this.getQuickFilter();
		const quickFilterPortals = this.getReactPortals(this.props.csGridQuickFilter, quickFilter);
		const singleClickEdit = 'singleClickEdit' in this.props ? this.props.singleClickEdit : true;

		return (
			<>
				{(paginationLocation === 'Header' || paginationLocation === 'Both') &&
					paginationElement}
				{(quickFilterLocation === 'Header' || quickFilterLocation === 'Both') &&
					quickFilter}
				<div className='cs-grid_app-wrapper'>
					<div className='ag-theme-balham cs-grid_main'>
						<AgGridReact
							onSelectionChanged={this.onSelectionChanged}
							quickFilterText={
								!isDataSourceRowModel ? this.state.filterText : undefined
							}
							cacheBlockSize={isDataSourceRowModel ? pageSizes[0] : undefined}
							maxBlocksInCache={isDataSourceRowModel ? 1 : undefined}
							maxConcurrentDatasourceRequests={isDataSourceRowModel ? 1 : undefined}
							rowModelType={isDataSourceRowModel ? 'infinite' : undefined}
							columnDefs={columnDefs}
							rowData={this.state.rowData}
							pagination={paginationLocation !== 'None'}
							paginationPageSize={pageSizes[0]}
							suppressPaginationPanel={true}
							suppressRowTransform={this.props.suppressRowTransform}
							onPaginationChanged={
								paginationLocation !== 'None' ? this.onPaginationChanged : undefined
							}
							singleClickEdit={singleClickEdit}
							defaultColDef={{
								comparator: CSGridDefaultComparator,
								editable: true,
								filter: true,
								filterParams: {
									textFormatter: this.formatTextForFiltering
								},
								getQuickFilterText: (params: GetQuickFilterTextParams) => {
									if (
										(!this.props.quickFilterHiddenColumns &&
											!params.column.isVisible()) ||
										!params.value
									) {
										return '';
									}

									const cellValue = params.value.cellValue;
									let result = cellValue;

									const columnId = params.column.getColDef().field;

									if (this.dateColumns.has(columnId)) {
										const value = formatDate(
											cellValue,
											this.dateColumns.get(columnId).userLocale,
											'Date'
										);

										result += ' ' + value;
									}

									if (this.dateTimeColumns.has(columnId)) {
										const value = formatDate(
											cellValue,
											this.dateTimeColumns.get(columnId).userLocale,
											'DateTime'
										);

										result += ' ' + value;
									}

									if (cellValue && typeof cellValue === 'object') {
										const cellValues = Object.values(cellValue);

										if (cellValues) {
											result = cellValues.toString();
										}
									}

									return result;
								},
								headerComponentFramework: CSGridHeader,
								headerComponentParams: { customSort: this.props.customSort },
								lockPinned: true,
								resizable: true,
								sortable: true
							}}
							frameworkComponents={this.state.frameworkComponents}
							stopEditingWhenGridLosesFocus={true}
							suppressDragLeaveHidesColumns={true}
							rowSelection={this.props.multiSelect ? 'multiple' : 'single'}
							suppressRowClickSelection={true}
							enableBrowserTooltips={true}
							rowHeight={this.props.rowHeight ? this.props.rowHeight : 42}
							onCellValueChanged={this.onCellValueChanged}
							getRowNodeId={this.getRowNodeId}
							onColumnMoved={this.onColumnMoved}
							onGridReady={this.onGridReady}
							onColumnVisible={this.onColumnStateChange}
							onDragStopped={this.onColumnStateChange}
							onCellClicked={this.props.onCellClicked}
							onRowDoubleClicked={this.props.onRowDoubleClicked}
							deltaRowDataMode={this.props.deltaRowDataMode}
							onCellEditingStopped={this.onCellEditingStopped}
							onColumnResized={this.onColumnResized}
							getRowStyle={this.props.rowHighlighting ? this.getRowStyle : undefined}
							getRowClass={this.props.getRowClass ? this.getRowClass : undefined}
							suppressFieldDotNotation={
								this.props.suppressFieldDotNotation === undefined ||
								this.props.suppressFieldDotNotation
							}
						/>
					</div>
				</div>
				{(quickFilterLocation === 'Footer' || quickFilterLocation === 'Both') &&
					quickFilter}
				{(paginationLocation === 'Footer' || paginationLocation === 'Both') &&
					paginationElement}
				{paginationPortals}
				{quickFilterPortals}
			</>
		);
	}

	/* Grid Events we're listening to */
	onGridReady = (params: GridReadyEvent) => {
		this.gridApi = params.api;
		const csGridApi: CSGridApi = {
			updateDataSource: this.updateDataSource.bind(this)
		};
		this.onPaginationChanged();

		if (this.props.columnState) {
			params.columnApi.setColumnState(JSON.parse(this.props.columnState));
		}

		const dataSourceAPI = this.props.dataSourceAPI;
		if (dataSourceAPI) {
			this.updateDataSource();
		}
		if (this.props.sizeColumnsToFit) {
			params.api.sizeColumnsToFit();
		}
		if (this.props.onGridReady) {
			this.props.onGridReady(params, csGridApi);
		}
	};

	updateDataSource() {
		const { dataSourceAPI } = this.props;
		if (!dataSourceAPI) {
			throw new Error(
				'CSGrid::UpdateDataSource: Cannot call updateDataSource when dataSourceAPI is null'
			);
		}
		const dataSource: IDatasource = {
			getRows: async (getRowsParams: IGetRowsParams) => {
				const pageSize = getRowsParams.endRow - getRowsParams.startRow;

				let rows;
				if (getRowsParams.startRow === 0) {
					const orderByList: Array<OrderBy> = [];
					for (const sortElement of getRowsParams.sortModel) {
						orderByList.push({
							columnId: sortElement.colId,
							sortDirection:
								sortElement.sort.toLowerCase() === 'asc' ? 'SORT_ASC' : 'SORT_DESC'
						});
					}

					const columnFilters = new Map(this.state.qualifiedSearchFilter.columnFilters);

					const makeCondition = (agColumnCondition: any): Condition => {
						if (agColumnCondition) {
							return {
								filterText: agColumnCondition.filter,
								type: agColumnCondition.type
							};
						}
					};

					for (const columnId in getRowsParams.filterModel) {
						if (!getRowsParams.filterModel.hasOwnProperty(columnId)) {
							continue;
						}

						const agColumnCondition = getRowsParams.filterModel[columnId];
						const columnCondition: ColumnFilterCondition = {
							condition1: makeCondition(
								agColumnCondition.condition1 || agColumnCondition
							),
							condition2: makeCondition(agColumnCondition.condition2),
							operator: agColumnCondition.operator
						};

						const columnConditions = columnFilters.get(columnId) || [];
						columnConditions.push(columnCondition);

						columnFilters.set(columnId, columnConditions);
					}

					const unqualifiedSearchTerms = this.props.csGridQuickFilter.nonIncremental
						? [...this.state.qualifiedSearchFilter.unqualifiedSearchTerms]
						: [this.state.filterText];

					const filterModel: FilterModel = {
						columnFilters,
						unqualifiedSearchTerms
					};
					rows = await dataSourceAPI.onContextChange(pageSize, orderByList, filterModel);
				} else {
					const firstRowOnCurrentPage = this.state.currentPage * pageSize;
					rows =
						firstRowOnCurrentPage < getRowsParams.startRow
							? await dataSourceAPI.onBtNext()
							: await dataSourceAPI.onBtPrevious();
				}

				let lastRow = -1;
				const lastRowOnPage = getRowsParams.startRow + rows.length - 1;
				if (lastRowOnPage !== getRowsParams.endRow - 1) {
					lastRow = lastRowOnPage;

					if (lastRow <= 0) {
						lastRow = 0;
					}
				}

				this.setState({
					currentPage: this.gridApi.paginationGetCurrentPage()
				});
				if (this.isUsingLegacyRowDataModel(rows)) {
					this.setState({ isUsingLegacyRowDataModel: true });
					console.warn(LEGACY_ROW_DATA_MODEL_DEPRECATION_WARN);
					getRowsParams.successCallback(rows, lastRow);
				} else {
					this.setState({ isUsingLegacyRowDataModel: false });
					getRowsParams.successCallback(
						this.convertRowDataToLegacyRow(rows as Array<RowData>),
						lastRow
					);
				}
			}
		};
		this.gridApi.setDatasource(dataSource);
	}

	private handleLegacyRowData() {
		const { rowData } = this.props;
		/**
		 * we check if the record's value has a cellValue property. if yes, that means it is using
		 * old rowDataModel, so we go ahead and set it in state. if not, then we transform it to
		 * old datamodel. This is a workaround until the renderers start using new model
		 */
		if (rowData !== null && rowData !== undefined) {
			if (this.isUsingLegacyRowDataModel(rowData)) {
				this.state.rowData = [...rowData];
				this.state.isUsingLegacyRowDataModel = true;
				console.warn(LEGACY_ROW_DATA_MODEL_DEPRECATION_WARN);
			} else {
				this.state.rowData = this.convertRowDataToLegacyRow(rowData as Array<RowData>);
				this.state.isUsingLegacyRowDataModel = false;
			}
		}
	}

	private onFilterText = (filterText: string) => {
		if (this.props.csGridQuickFilter.nonIncremental) {
			this.setState({ nonIncrementalFilterText: filterText });
		} else {
			this.setState({ filterText }, () => {
				this.triggerDataSourceQuickFilter();
			});
		}
	};

	private searchQuickFilter = () => {
		// Empty filter.
		let qualifiedSearchFilter: FilterModel = {
			columnFilters: new Map(),
			unqualifiedSearchTerms: []
		};
		let qualifiedSearchError = '';

		if (this.state.nonIncrementalFilterText !== '') {
			// remove trailing semicolons, colons and backslashes.
			const cleansedString = SearchUtils.trimDelimiters(this.state.nonIncrementalFilterText);

			// parse semicolons that were escaped.
			const afterSemiColonRemoved = SearchUtils.removeEscapesAndSplitForSearchFilter(
				cleansedString,
				';'
			);

			const qualifiedSearchQueries: Record<string, string> = {};
			const unqualifiedSearchQueries = [];

			for (let singleQuery of afterSemiColonRemoved) {
				/**
				 * 'singleQuery' in each iteration is now either a
				 * Qualified or unqualified search.
				 */
				singleQuery = singleQuery.trim();

				// parse colons that were escaped.
				const afterQualifierSplit = SearchUtils.removeEscapesAndSplitForSearchFilter(
					singleQuery,
					':'
				);

				/**
				 *  If there are more than 2 elements in 'afterQualifierSplit',
				 *  that means the user did not escape the colon and our
				 *  escape tests above failed. So we throw an error.
				 *
				 *  NOTE: we don't have to do this for ';' because there
				 *  is no way to tell if the user actually meant it as a
				 *  part of search string itself, or he just slipped in
				 *  an unqualified search between qualified search.
				 *  So we assume it as unqualified search at all times.
				 *  the user can still search for a string with semicolon in it
				 *  if they escape it. Although, the colon scenario can't be done
				 *  this way because it breaks our tokenizing logic.
				 */
				if (afterQualifierSplit.length > 2) {
					const errAt = afterQualifierSplit.reduce((prev, curr) => {
						return `${prev}:${curr}`;
					});

					qualifiedSearchError += `Invalid Query at "${errAt}". Please check your query. `;
				}

				if (afterQualifierSplit.length > 1 && afterQualifierSplit[1].trim() !== '') {
					const columnName = SearchUtils.handleBackslashes(afterQualifierSplit[0].trim());
					qualifiedSearchQueries[columnName] = afterQualifierSplit[1].trim();
				} else if (afterQualifierSplit[0].trim() !== '') {
					const unqualifiedSearchQuery = SearchUtils.handleBackslashes(
						afterQualifierSplit[0].trim()
					);
					unqualifiedSearchQueries.push(unqualifiedSearchQuery);
				}
			}

			qualifiedSearchError += SearchUtils.validateQualifiedSearch(
				this.props.columnDefs,
				qualifiedSearchQueries
			);

			if (!qualifiedSearchError) {
				const columnFilters = SearchUtils.convertQueriesToColumnFilters(
					this.props.columnDefs,
					qualifiedSearchQueries
				);

				qualifiedSearchFilter = {
					columnFilters,
					unqualifiedSearchTerms: unqualifiedSearchQueries
				};
			}
		}

		this.setState(
			{
				qualifiedSearchError,
				qualifiedSearchFilter
			},
			() => {
				if (!qualifiedSearchError) {
					this.triggerDataSourceQuickFilter();
				}
			}
		);
	};

	private triggerDataSourceQuickFilter = () => {
		if (this.props.dataSourceAPI) {
			if (this.gridApi.paginationGetCurrentPage() !== 0) {
				this.gridApi.paginationGoToPage(0);
			} else {
				(this.gridApi as any).infinitePageRowModel.resetCache();
			}
		}
	};

	private isUsingLegacyRowDataModel(rows: any) {
		return (
			rows &&
			rows.length !== 0 &&
			rows[0][this.props.uniqueIdentifierColumnName].hasOwnProperty('cellValue')
		);
	}

	private onColumnMoved = () => {
		const params = {
			force: true
		};
		this.gridApi.refreshCells(params);
	};

	private getCsGridColDef(fieldKey: string): ColDef {
		return this.props.columnDefs.find(colDef => colDef.name === fieldKey);
	}

	private onCellValueChanged = (event: CellValueChangedEvent) => {
		if (this.props.onCellValueChange) {
			let oldValue = event.oldValue;
			let newValue = event.newValue;

			if (!this.state.isUsingLegacyRowDataModel) {
				oldValue = this.convertLegacyRowToRowData([
					{ [event.colDef.field]: event.oldValue }
				])[0];
				newValue = this.convertLegacyRowToRowData([
					{ [event.colDef.field]: event.newValue }
				])[0];
			}
			this.props.onCellValueChange(
				this.getRowNodeId(event.data),
				event.colDef.field,
				oldValue,
				newValue
			);
		}

		if (
			this.getCsGridColDef(event.colDef.field).flashOnCellValueChange &&
			!isEqual(event.oldValue.cellValue, event.newValue.cellValue) &&
			!event.data[event.colDef.field].errorMessage
		) {
			this.gridApi.flashCells({
				columns: [event.colDef.field],
				fadeDelay: 1000,
				flashDelay: 500,
				rowNodes: [this.gridApi.getRowNode(this.getRowNodeId(event.data))]
			});
		}
	};

	private onCellEditingStopped = (event: CellEditingStoppedEvent) => {
		if (this.props.onCellEditingStopped) {
			this.props.onCellEditingStopped(this.getRowNodeId(event.data), event.colDef.field);
		}
	};

	private onSelectionChanged = (): void => {
		if (this.props.onSelectionChange) {
			this.props.onSelectionChange(this.getSelectedRows());
		}
		this.gridApi.refreshCells({ force: true });
	};

	private onColumnResized = (event: ColumnResizedEvent) => {
		if (event.finished && event.column) {
			const columnId = event.column.getColDef().field;
			if (this.gridApi) {
				if (
					this.rowSelectionColumns.includes(columnId) ||
					this.lookupColumns.includes(columnId)
				) {
					this.gridApi.refreshCells({ force: true, columns: [columnId] });
				}
			}
			if (this.props.onColumnResized) {
				this.props.onColumnResized(columnId, event.column.getActualWidth());
			}
		}
	};

	private onPageSizeChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const pageSize = Number(event.target.value);

		if (this.props.customPaginationAPI) {
			this.props.customPaginationAPI.onPageSizeChange(pageSize);
			this.setState({
				currentPageSize: pageSize
			});
		} else {
			if (this.props.dataSourceAPI) {
				// Force new cache block size by resetting internal cache
				(this.gridApi as any).gridOptionsWrapper.setProperty('cacheBlockSize', pageSize);
				(this.gridApi as any).infinitePageRowModel.resetCache();
			}

			this.gridApi.paginationSetPageSize(pageSize);
			this.gridApi.paginationGoToPage(0);

			this.setState({
				currentPage: 0,
				currentPageSize: this.gridApi.paginationGetPageSize()
			});
		}
	};

	private onPaginationChanged = () => {
		if (this.gridApi && !this.props.dataSourceAPI) {
			this.setState({
				currentPage: this.gridApi.paginationGetCurrentPage(),
				totalPages: this.gridApi.paginationGetTotalPages()
			});
		}
	};

	private onBtNext = () => {
		this.gridApi.paginationGoToNextPage();
	};

	private onBtPrevious = () => {
		this.gridApi.paginationGoToPreviousPage();
	};

	private goToPage = (page: number) => {
		this.gridApi.paginationGoToPage(page);
	};

	private getRowNodeId = (data: any) => {
		return data[this.props.uniqueIdentifierColumnName].cellValue;
	};

	private getPagination = () => {
		let paginationElement: JSX.Element;

		if (this.props.csGridPagination.location !== 'None') {
			const pageSizes = this.props.pageSizes || this.defaultPageSizes;

			if (this.props.customPaginationAPI) {
				paginationElement = (
					<CSGridDataSourcePagination
						currentPage={this.props.customPaginationAPI.currentPage - 1}
						pageSizes={pageSizes}
						onPageSizeChanged={this.onPageSizeChanged}
						currentPageSize={this.state.currentPageSize}
						isLastPage={this.props.customPaginationAPI.isLastPage}
						onBtNext={this.props.customPaginationAPI.onBtNext}
						onBtPrevious={this.props.customPaginationAPI.onBtPrevious}
					/>
				);
			} else if (this.props.dataSourceAPI) {
				paginationElement = (
					<CSGridDataSourcePagination
						currentPage={this.state.currentPage}
						pageSizes={pageSizes}
						onPageSizeChanged={this.onPageSizeChanged}
						currentPageSize={this.state.currentPageSize}
						isLastPage={this.props.dataSourceAPI.isLastPage}
						onBtNext={this.onBtNext}
						onBtPrevious={this.onBtPrevious}
					/>
				);
			} else {
				paginationElement = (
					<CSGridClientSidePagination
						currentPage={this.state.currentPage}
						pageSizes={pageSizes}
						onPageSizeChanged={this.onPageSizeChanged}
						currentPageSize={this.state.currentPageSize}
						onBtNext={this.onBtNext}
						onBtPrevious={this.onBtPrevious}
						totalPages={this.state.totalPages}
						goToPage={this.goToPage}
					/>
				);
			}
		}

		return paginationElement;
	};

	private getQuickFilter = () => {
		let quickFilter: JSX.Element;

		if (this.props.csGridQuickFilter.location !== 'None') {
			quickFilter = (
				<CSGridQuickFilter
					onFilterText={this.onFilterText}
					filterText={
						this.props.csGridQuickFilter.nonIncremental
							? this.state.nonIncrementalFilterText
							: this.state.filterText
					}
					search={
						this.props.csGridQuickFilter.nonIncremental
							? this.searchQuickFilter
							: undefined
					}
					errorMessage={this.state.qualifiedSearchError}
				/>
			);
		}

		return quickFilter;
	};

	private getReactPortals = (csGridControl: CSGridControl, controller: JSX.Element) => {
		const controlPortals: Array<React.ReactPortal> = [];

		if (csGridControl.location !== 'None' && csGridControl.detachedCSSClass) {
			const elements: HTMLCollectionOf<Element> = document.getElementsByClassName(
				csGridControl.detachedCSSClass
			);

			for (const element of elements) {
				controlPortals.push(ReactDOM.createPortal(controller, element));
			}
		}

		return controlPortals;
	};

	private formatTextForFiltering = (value: string | CellData<any>) => {
		if (typeof value === 'string' || value instanceof String) {
			return value.toLowerCase();
		}

		const cellValue = value.cellValue;
		if (cellValue === undefined || cellValue == null) {
			return '';
		}

		return cellValue.toString().toLowerCase();
	};

	/**
	 * Returns localised dates as strings for column filtering.
	 * @param value - either the search term as a string or a cell's data.
	 * @param userInfo - the user info for localisation.
	 * @param type - Date or DateTime.
	 */
	private formatDateForFiltering = (
		value: string | CellData<string>,
		userInfo: UserInfo,
		type: 'Date' | 'DateTime'
	) => {
		if (typeof value === 'string' || value instanceof String) {
			return value;
		}

		const result = value.cellValue;

		if (!result) {
			return '';
		}

		return formatDate(result, userInfo.userLocale, type);
	};

	private onColumnStateChange = (event: AgGridEvent): void => {
		if (this.props.onColumnStateChange) {
			const columnState = JSON.stringify(event.columnApi.getColumnState());
			this.props.onColumnStateChange(columnState);
		}
	};

	private addIfDefined = (target: any, key: string, value: any) => {
		if (value !== undefined) {
			target[key] = value;
		}
	};

	private convertColumnDefs = (columnDefs: Array<ColDef>): Array<AgGridColDef> => {
		const agGridColDefs: Array<AgGridColDef> = [];

		const rowSelectionColumns: Array<string> = [];
		const lookupColumns: Array<string> = [];
		const dateColumns: Map<string, UserInfo> = new Map();
		const dateTimeColumns: Map<string, UserInfo> = new Map();

		for (const columnDef of columnDefs) {
			let agGridColDef: AgGridColDef = {};

			this.addIfDefined(agGridColDef, 'checkboxSelection', columnDef.checkboxSelection);
			this.addIfDefined(agGridColDef, 'comparator', columnDef.comparator);
			this.addIfDefined(agGridColDef, 'editable', columnDef.editable);
			this.addIfDefined(agGridColDef, 'field', columnDef.name);
			this.addIfDefined(agGridColDef, 'colId', columnDef.name);
			this.addIfDefined(agGridColDef, 'filter', columnDef.hasFilter);
			this.addIfDefined(agGridColDef, 'suppressSizeToFit', columnDef.suppressSizeToFit);
			this.addIfDefined(agGridColDef, 'cellClassRules', columnDef.cellClassRules);

			if (columnDef.getQuickFilterText) {
				agGridColDef.getQuickFilterText = ({ value }) => {
					return columnDef.getQuickFilterText(value);
				};
			}

			if (this.props.multiSelect) {
				this.addIfDefined(
					agGridColDef,
					'headerCheckboxSelection',
					columnDef.headerCheckboxSelection
				);
				this.addIfDefined(
					agGridColDef,
					'headerCheckboxSelectionFilteredOnly',
					columnDef.selectFilteredOnly
				);
			} else {
				agGridColDef.headerCheckboxSelection = false;
			}

			this.addIfDefined(agGridColDef, 'lockVisible', columnDef.lockVisible);
			this.addIfDefined(agGridColDef, 'maxWidth', columnDef.maxWidth);
			this.addIfDefined(agGridColDef, 'minWidth', columnDef.minWidth);
			this.addIfDefined(agGridColDef, 'resizable', columnDef.resizable);
			this.addIfDefined(agGridColDef, 'sortable', columnDef.sortable);
			if (columnDef.header) {
				this.addIfDefined(agGridColDef, 'headerClass', columnDef.header.class);
			}

			if (columnDef.sort !== undefined) {
				agGridColDef.sort =
					columnDef.sort === 'SORT_ASC'
						? 'asc'
						: columnDef.sort === 'SORT_DESC'
						? 'desc'
						: '';
			}

			this.addIfDefined(agGridColDef, 'width', columnDef.width);
			this.addIfDefined(agGridColDef, 'pinned', columnDef.pinned);
			this.addIfDefined(
				agGridColDef,
				'suppressKeyboardEvent',
				columnDef.suppressKeyboardEvent
			);

			if (columnDef.cellClass) {
				const customClass = 'cs-grid_custom-class';
				const cellClass = columnDef.cellClass;

				if (typeof cellClass === 'function') {
					agGridColDef.cellClass = (cellClassParams: CellClassParams) => {
						const result = cellClass(cellClassParams.value, cellClassParams.node.id);

						if (!result) {
							return '';
						} else if (typeof result === 'string') {
							return [result, customClass];
						} else {
							return [...result, customClass];
						}
					};
				} else if (typeof cellClass === 'string') {
					agGridColDef.cellClass = [cellClass, customClass];
				} else {
					agGridColDef.cellClass = [...cellClass, customClass];
				}
			}

			if (columnDef.visible !== undefined) {
				agGridColDef.hide = !columnDef.visible;
			}

			if (columnDef.header !== undefined) {
				this.addIfDefined(agGridColDef, 'headerName', columnDef.header.label);

				agGridColDef.headerComponentParams = { customSort: this.props.customSort };
			}

			const cellParams: any = {};
			this.addIfDefined(cellParams, 'onChange', columnDef.onChange);
			this.addIfDefined(cellParams, 'readonly', columnDef.readonly);
			this.addIfDefined(cellParams, 'userInfo', columnDef.userInfo);
			this.addIfDefined(cellParams, 'getTooltip', columnDef.getTooltip);
			this.addIfDefined(cellParams, 'cellType', columnDef.cellType);

			if (
				columnDef.cellType === 'RowSelection' ||
				columnDef.cellType === 'Lookup' ||
				columnDef.cellType === 'MultiSelectLookup'
			) {
				if (columnDef.getActions !== undefined) {
					const settings: AgGridColDef = {};
					settings.suppressKeyboardEvent = (params: SuppressKeyboardEventParams) => {
						return (
							params.event.which === KeyCode.KEY_ENTER ||
							params.event.which === KeyCode.KEY_RETURN ||
							(params.editing &&
								(params.event.which === KeyCode.KEY_TAB ||
									params.event.which === KeyCode.KEY_UP ||
									params.event.which === KeyCode.KEY_DOWN)) ||
							(params.column.getColDef().field === columnDef.name &&
								(params.event.which === KeyCode.KEY_TAB ||
									params.event.which === KeyCode.KEY_LEFT ||
									params.event.which === KeyCode.KEY_RIGHT))
						);
					};

					agGridColDef = { ...settings, ...agGridColDef };
				}

				// Lookup button are all inline.
				if (columnDef.cellType === 'Lookup' || columnDef.cellType === 'MultiSelectLookup') {
					cellParams.noOfInlineIcons = 100;
				}

				this.addIfDefined(cellParams, 'getActions', columnDef.getActions);
			}

			if (columnDef.cellType === 'Picklist' || columnDef.cellType === 'MultiSelectPicklist') {
				agGridColDef.cellEditor = 'picklistEditor';
				agGridColDef.cellRenderer = 'picklistRenderer';

				this.addIfDefined(cellParams, 'filterAboveSize', columnDef.filterAboveSize);
				this.addIfDefined(
					cellParams,
					'getEmptyPicklistContent',
					columnDef.getEmptyPicklistContent
				);
				this.addIfDefined(cellParams, 'getOptions', columnDef.getOptions);
			}

			if (columnDef.cellType === 'Picklist') {
				this.addIfDefined(cellParams, 'toggleSelection', columnDef.toggleSelection);
			}

			if (columnDef.cellType === 'Lookup' || columnDef.cellType === 'MultiSelectLookup') {
				agGridColDef.cellEditor = 'lookupEditor';
				agGridColDef.cellRenderer = 'lookupRenderer';

				this.addIfDefined(cellParams, 'minSearchTermLength', columnDef.minSearchTermLength);
				this.addIfDefined(cellParams, 'displayColumn', columnDef.displayColumn);
				this.addIfDefined(cellParams, 'guidColumn', columnDef.guidColumn);
				this.addIfDefined(cellParams, 'getLookupValues', columnDef.getLookupValues);

				lookupColumns.push(columnDef.name);
			}

			if (columnDef.cellType === 'Lookup') {
				this.addIfDefined(cellParams, 'rowDeselection', columnDef.rowDeselection);
			}

			if (columnDef.cellType === 'Integer') {
				agGridColDef.cellEditor = 'integerEditor';
				agGridColDef.cellRenderer = 'integerRenderer';

				this.addIfDefined(cellParams, 'stepperArrows', columnDef.stepperArrows);
			}

			if (columnDef.cellType === 'Decimal') {
				agGridColDef.cellEditor = 'decimalEditor';
				agGridColDef.cellRenderer = 'decimalRenderer';

				this.addIfDefined(cellParams, 'noOfDecimalDigits', columnDef.noOfDecimalDigits);
			}

			if (columnDef.cellType === 'Currency') {
				agGridColDef.cellEditor = 'currencyEditor';
				agGridColDef.cellRenderer = 'currencyRenderer';
			}

			if (['Integer', 'Decimal', 'Currency'].includes(columnDef.cellType)) {
				const defaultSettings = {
					comparator: (a: CellData<string | number>, b: CellData<string | number>) =>
						CSGridNumberComparator(a, b, cellParams.userInfo)
				};

				agGridColDef = { ...defaultSettings, ...agGridColDef };
			}

			if (columnDef.cellType === 'Boolean') {
				agGridColDef.cellEditor = 'noEditor';
				agGridColDef.cellRenderer = 'booleanRenderer';
			}

			if (columnDef.cellType === 'Date') {
				agGridColDef.cellEditor = 'dateEditor';
				agGridColDef.cellRenderer = 'dateRenderer';

				dateColumns.set(columnDef.name, columnDef.userInfo);
				this.addIfDefined(cellParams, 'getOpenToDate', columnDef.getOpenToDate);
				this.addIfDefined(cellParams, 'textInputFormat', columnDef.textInputFormat);

				const defaultSettings = {
					filterParams: {
						textFormatter: (value: string | CellData<string>) =>
							this.formatDateForFiltering(value, cellParams.userInfo, 'Date')
					}
				};

				agGridColDef = { ...defaultSettings, ...agGridColDef };
			}

			if (columnDef.cellType === 'DateTime') {
				agGridColDef.cellEditor = 'dateTimeEditor';
				agGridColDef.cellRenderer = 'dateTimeRenderer';

				dateTimeColumns.set(columnDef.name, columnDef.userInfo);
				this.addIfDefined(cellParams, 'getOpenToDate', columnDef.getOpenToDate);
				this.addIfDefined(cellParams, 'timeInterval', columnDef.timeInterval);

				const defaultSettings = {
					filterParams: {
						textFormatter: (value: string | CellData<string>) =>
							this.formatDateForFiltering(value, cellParams.userInfo, 'DateTime')
					}
				};

				agGridColDef = { ...defaultSettings, ...agGridColDef };
			}

			if (columnDef.cellType === 'Text') {
				agGridColDef.cellEditor = 'textEditor';
				agGridColDef.cellRenderer = 'textRenderer';
			}

			if (columnDef.cellType === 'MultiSelectLookup') {
				agGridColDef.cellEditor = 'multiSelectLookupEditor';
				agGridColDef.cellRenderer = 'multiSelectLookupRenderer';
			}

			if (columnDef.cellType === 'MultiSelectPicklist') {
				agGridColDef.cellEditor = 'multiSelectPicklistEditor';
				agGridColDef.cellRenderer = 'multiSelectPicklistRenderer';
			}

			if (columnDef.cellType === 'Icon') {
				agGridColDef.cellRenderer = 'iconRenderer';
				agGridColDef.cellEditor = 'noEditor';

				this.addIfDefined(cellParams, 'getIcons', columnDef.getIcons);
			}

			if (columnDef.cellType === 'RowValidation') {
				agGridColDef.cellRenderer = 'rowValidationRenderer';

				this.addIfDefined(cellParams, 'getIcons', columnDef.getIcons);

				const defaultSettings = {
					editable: false,
					filter: false,
					sortable: false,
					suppressMenu: true,
					width: 150
				};

				agGridColDef = { ...defaultSettings, ...agGridColDef };
			}

			if (columnDef.cellType === 'RowSelection') {
				agGridColDef.cellEditor = 'rowSelectionEditor';
				agGridColDef.cellRenderer = 'rowSelectionRenderer';

				const defaultSettings: AgGridColDef = {
					checkboxSelection: true,
					editable: false,
					filter: false,
					headerCheckboxSelection: true,
					headerCheckboxSelectionFilteredOnly: true,
					headerName: '',
					lockPosition: true,
					lockVisible: true,
					maxWidth: 40,
					minWidth: 40,
					resizable: false,
					sortable: false,
					width: columnDef.getActions !== undefined ? 40 : 80
				};

				agGridColDef = { ...defaultSettings, ...agGridColDef };

				rowSelectionColumns.push(columnDef.name);

				this.addIfDefined(cellParams, 'noOfInlineIcons', columnDef.noOfInlineIcons);
			}

			if (columnDef.cellType === 'Custom') {
				agGridColDef.cellEditorParams = { ...cellParams, ...columnDef.cellEditorParams };
				agGridColDef.cellRendererParams = {
					...cellParams,
					...columnDef.cellRendererParams
				};
				agGridColDef.cellEditor = columnDef.cellEditor;
				agGridColDef.cellRenderer = columnDef.cellRenderer;

				if (columnDef.cellEditor === 'booleanEditor') {
					console.warn(
						'The cell editor "booleanEditor" has been replaced with "noEditor"'
					);
					agGridColDef.cellEditor = 'noEditor';
				}
			} else {
				agGridColDef.cellEditorParams = cellParams;
				agGridColDef.cellRendererParams = cellParams;
			}

			agGridColDefs.push(agGridColDef);
		}

		this.rowSelectionColumns = rowSelectionColumns;
		this.lookupColumns = lookupColumns;
		this.dateColumns = dateColumns;
		this.dateTimeColumns = dateTimeColumns;

		return agGridColDefs;
	};
}
