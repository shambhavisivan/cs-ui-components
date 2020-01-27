import {
	AgGridEvent,
	CellValueChangedEvent,
	ColDef as AgGridColDef,
	GetQuickFilterTextParams,
	GridApi,
	GridReadyEvent,
	IDatasource,
	IGetRowsParams
} from 'ag-grid-community';

import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgGridReact } from 'ag-grid-react';
import React from 'react';
import ReactDOM from 'react-dom';

import {
	CellClickedEvent,
	CellData,
	CSGridControl,
	Row
} from '../interfaces/cs-grid-base-interfaces';
import { ColDef } from '../interfaces/cs-grid-col-def';
import {
	ColumnFilterCondition,
	Condition,
	DataSourceAPI,
	FilterModel,
	OrderBy
} from '../interfaces/cs-grid-data-source-api';
import { CSGridDefaultComparator } from '../utils/cs-grid-default-comparator';
import { SearchUtils } from '../utils/search-utils';
import { CSGridBooleanEditor } from './cs-grid-boolean-editor';
import { CSGridBooleanRenderer } from './cs-grid-boolean-renderer';
import { CSGridClientSidePagination } from './cs-grid-client-side-pagination';
import { CSGridCurrencyEditor } from './cs-grid-currency-editor';
import { CSGridCurrencyRenderer } from './cs-grid-currency-renderer';
import { CSGridDataSourcePagination } from './cs-grid-data-source-pagination';
import { CSGridDateEditor } from './cs-grid-date-editor';
import { CSGridDateRenderer } from './cs-grid-date-renderer';
import { CSGridDecimalEditor } from './cs-grid-decimal-editor';
import { CSGridDecimalRenderer } from './cs-grid-decimal-renderer';
import { CSGridHeader } from './cs-grid-header';
import { CSGridIntegerEditor } from './cs-grid-integer-editor';
import { CSGridIntegerRenderer } from './cs-grid-integer-renderer';
import { CSGridLookupEditor } from './cs-grid-lookup-editor';
import { CSGridLookupRenderer } from './cs-grid-lookup-renderer';
import { CSGridMultiSelectLookupEditor } from './cs-grid-multi-select-lookup-editor';
import { CSGridMultiSelectPicklistEditor } from './cs-grid-multi-select-picklist-editor';
import { CSGridPicklistEditor } from './cs-grid-picklist-editor';
import { CSGridPicklistRenderer } from './cs-grid-picklist-renderer';
import { CSGridQuickFilter, CSGridQuickFilterControl } from './cs-grid-quick-filter';
import { CSGridRowSelectionRenderer } from './cs-grid-row-selection-renderer';
import { CSGridRowValidationRenderer } from './cs-grid-row-validation-renderer';
import { CSGridTextEditor } from './cs-grid-text-editor';
import { CSGridTextRenderer } from './cs-grid-text-renderer';

export interface CSGridProps {
	pageSizes?: Array<number>;
	csGridPagination: CSGridControl;
	csGridQuickFilter: CSGridQuickFilterControl;
	dataSourceAPI?: DataSourceAPI;
	editorComponents?: Record<string, any>;
	rendererComponents?: Record<string, any>;
	multiSelect: boolean;
	uniqueIdentifierColumnName: string;
	rowData?: Array<Row>;
	columnState?: string;
	columnDefs?: Array<ColDef>;
	/**
	 * When deltaRowDataMode is on, the grid will compare the new row data with the current row data and create a transaction object for you.
	 * The grid then executes the change as an update transaction, keeping all of the grids selections, filters etc.
	 * Use this if you want to manage the data outside of the grid (eg in a Redux store)
	 * and then let the grid work out what changes are needed to keep the grid's version of the data up to date.
	 */
	deltaRowDataMode?: boolean;
	onColumnStateChange?(columnState: string): void;
	onSelectionChange?(selectedRows: Array<Row>): void;
	onCellValueChange?(
		rowNodeId: string,
		ColumnField: string,
		oldValue: any,
		newValue: any
	): Promise<void>;
	onGridReady?(params: GridReadyEvent): void;
	onCellClicked?(event: CellClickedEvent): void;
}

class CSGridState {
	frameworkComponents = {
		booleanEditor: CSGridBooleanEditor,
		booleanRenderer: CSGridBooleanRenderer,
		currencyEditor: CSGridCurrencyEditor,
		currencyRenderer: CSGridCurrencyRenderer,
		dateEditor: CSGridDateEditor,
		dateRenderer: CSGridDateRenderer,
		decimalEditor: CSGridDecimalEditor,
		decimalRenderer: CSGridDecimalRenderer,
		integerEditor: CSGridIntegerEditor,
		integerRenderer: CSGridIntegerRenderer,
		lookupEditor: CSGridLookupEditor,
		lookupRenderer: CSGridLookupRenderer,
		multiSelectLookupEditor: CSGridMultiSelectLookupEditor,
		multiSelectLookupRenderer: CSGridLookupRenderer,
		multiSelectPicklistEditor: CSGridMultiSelectPicklistEditor,
		multiSelectPicklistRenderer: CSGridPicklistRenderer,
		picklistEditor: CSGridPicklistEditor,
		picklistRenderer: CSGridPicklistRenderer,
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
}

export class CSGrid extends React.Component<CSGridProps, CSGridState> {
	state: CSGridState = new CSGridState();
	private gridApi: GridApi;
	private defaultPageSizes: Array<number> = [10, 20, 50, 100];

	constructor(props: CSGridProps) {
		super(props);

		const editorComponents = props.editorComponents || {};
		const rendererComponents = props.rendererComponents || {};

		this.state.frameworkComponents = {
			...this.state.frameworkComponents,
			...editorComponents,
			...rendererComponents
		};
	}

	getSelectedRows = (): Array<Row> => {
		return this.gridApi.getSelectedRows();
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
							rowData={this.props.rowData}
							pagination={paginationLocation !== 'None'}
							paginationPageSize={pageSizes[0]}
							suppressPaginationPanel={true}
							onPaginationChanged={
								paginationLocation !== 'None' ? this.onPaginationChanged : undefined
							}
							singleClickEdit={true}
							defaultColDef={{
								comparator: CSGridDefaultComparator,
								editable: true,
								filter: true,
								filterParams: {
									textFormatter: this.formatTextForFiltering
								},
								getQuickFilterText: (params: GetQuickFilterTextParams) => {
									return params.value.cellValue;
								},
								headerComponentFramework: CSGridHeader,
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
							rowHeight={42}
							onCellValueChanged={this.onCellValueChanged}
							getRowNodeId={this.getRowNodeId}
							onColumnMoved={this.onColumnMoved}
							onGridReady={this.onGridReady}
							onColumnVisible={this.onColumnStateChange}
							onDragStopped={this.onColumnStateChange}
							onCellClicked={this.props.onCellClicked}
							deltaRowDataMode={this.props.deltaRowDataMode}
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
				 *  if there are more than 2 elements in 'afterQualifierSplit',
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

	/* Grid Events we're listening to */
	private onGridReady = (params: GridReadyEvent) => {
		this.gridApi = params.api;
		this.onPaginationChanged();

		if (this.props.columnState) {
			params.columnApi.setColumnState(JSON.parse(this.props.columnState));
		}

		const dataSourceAPI = this.props.dataSourceAPI;
		if (dataSourceAPI) {
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
									sortElement.sort.toLowerCase() === 'asc'
										? 'SORT_ASC'
										: 'SORT_DESC'
							});
						}

						const columnFilters = new Map(
							this.state.qualifiedSearchFilter.columnFilters
						);

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
						rows = await dataSourceAPI.onContextChange(
							pageSize,
							orderByList,
							filterModel
						);
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
					getRowsParams.successCallback(rows, lastRow);
				}
			};
			params.api.setDatasource(dataSource);
		}

		if (this.props.onGridReady) {
			this.props.onGridReady(params);
		}
	};

	private onColumnMoved = () => {
		const params = {
			force: true
		};
		this.gridApi.refreshCells(params);
	};

	private onCellValueChanged = (event: CellValueChangedEvent) => {
		if (this.props.onCellValueChange) {
			this.props.onCellValueChange(
				this.getRowNodeId(event.data),
				event.colDef.field,
				event.oldValue,
				event.newValue
			);
		}
	};

	private onSelectionChanged = (): void => {
		if (this.props.onSelectionChange) {
			this.props.onSelectionChange(this.getSelectedRows());
		}
	};

	private onPageSizeChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const pageSize = Number(event.target.value);

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

			paginationElement = this.props.dataSourceAPI ? (
				<CSGridDataSourcePagination
					currentPage={this.state.currentPage}
					pageSizes={pageSizes}
					onPageSizeChanged={this.onPageSizeChanged}
					currentPageSize={this.state.currentPageSize}
					isLastPage={this.props.dataSourceAPI.isLastPage}
					onBtNext={this.onBtNext}
					onBtPrevious={this.onBtPrevious}
				/>
			) : (
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

		for (const columnDef of columnDefs) {
			let agGridColDef: AgGridColDef = {};

			this.addIfDefined(agGridColDef, 'checkboxSelection', columnDef.checkboxSelection);
			this.addIfDefined(agGridColDef, 'comparator', columnDef.comparator);
			this.addIfDefined(agGridColDef, 'editable', columnDef.editable);
			this.addIfDefined(agGridColDef, 'field', columnDef.name);
			this.addIfDefined(agGridColDef, 'filter', columnDef.hasFilter);
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
			this.addIfDefined(agGridColDef, 'lockVisible', columnDef.lockVisible);
			this.addIfDefined(agGridColDef, 'maxWidth', columnDef.maxWidth);
			this.addIfDefined(agGridColDef, 'minWidth', columnDef.minWidth);
			this.addIfDefined(agGridColDef, 'resizable', columnDef.resizable);
			this.addIfDefined(agGridColDef, 'sortable', columnDef.sortable);
			this.addIfDefined(agGridColDef, 'width', columnDef.width);

			if (columnDef.visible !== undefined) {
				agGridColDef.hide = !columnDef.visible;
			}

			if (columnDef.header !== undefined) {
				this.addIfDefined(agGridColDef, 'headerName', columnDef.header.label);

				agGridColDef.headerComponentParams = {};
				this.addIfDefined(
					agGridColDef.headerComponentParams,
					'header',
					columnDef.header.class
				);
			}

			const cellParams: any = {};
			this.addIfDefined(cellParams, 'onChange', columnDef.onChange);
			this.addIfDefined(cellParams, 'readonly', columnDef.readonly);
			this.addIfDefined(cellParams, 'userInfo', columnDef.userInfo);

			if (columnDef.cellType === 'Picklist' || columnDef.cellType === 'MultiSelectPicklist') {
				agGridColDef.cellEditor = 'picklistEditor';
				agGridColDef.cellRenderer = 'picklistRenderer';

				this.addIfDefined(cellParams, 'filterAboveSize', columnDef.filterAboveSize);
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

			if (columnDef.cellType === 'Boolean') {
				agGridColDef.cellEditor = 'booleanEditor';
				agGridColDef.cellRenderer = 'booleanRenderer';
			}

			if (columnDef.cellType === 'Date') {
				agGridColDef.cellEditor = 'dateEditor';
				agGridColDef.cellRenderer = 'dateRenderer';
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

			if (columnDef.cellType === 'RowValidation') {
				agGridColDef.cellRenderer = 'rowValidationRenderer';

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
				agGridColDef.cellRenderer = 'rowSelectionRenderer';

				const defaultSettings = {
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
					width: 40
				};

				agGridColDef = { ...defaultSettings, ...agGridColDef };
			}

			if (columnDef.cellType === 'Custom') {
				agGridColDef.cellEditorParams = { ...cellParams, ...columnDef.cellEditorParams };
				agGridColDef.cellRendererParams = {
					...cellParams,
					...columnDef.cellRendererParams
				};
				agGridColDef.cellEditor = columnDef.cellEditor;
				agGridColDef.cellRenderer = columnDef.cellRenderer;
			} else {
				agGridColDef.cellEditorParams = cellParams;
				agGridColDef.cellRendererParams = cellParams;
			}

			agGridColDefs.push(agGridColDef);
		}

		return agGridColDefs;
	};
}
