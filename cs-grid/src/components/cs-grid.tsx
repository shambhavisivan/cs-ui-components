import {
	CellValueChangedEvent,
	GetQuickFilterTextParams,
	GridApi,
	GridReadyEvent
} from 'ag-grid-community';
// tslint:disable-next-line: no-submodule-imports
import { CellEditingStoppedEvent } from 'ag-grid-community/dist/lib/events';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import React from 'react';
import ReactDOM from 'react-dom';

import { CellData } from '../models/cs-grid-base-interfaces';
import CSGridBooleanEditor from './cs-grid-boolean-editor';
import CSGridBooleanRenderer from './cs-grid-boolean-renderer';
import CSGridCurrencyEditor from './cs-grid-currency-editor';
import CSGridCurrencyRenderer from './cs-grid-currency-renderer';
import CSGridDateEditor from './cs-grid-date-editor';
import CSGridDateRenderer from './cs-grid-date-renderer';
import CSGridDecimalEditor from './cs-grid-decimal-editor';
import CSGridDecimalRenderer from './cs-grid-decimal-renderer';
import CSGridHeader from './cs-grid-header';
import CSGridIntegerEditor from './cs-grid-integer-editor';
import CSGridIntegerRenderer from './cs-grid-integer-renderer';
import CSGridLookupEditor from './cs-grid-lookup-editor';
import CSGridLookupRenderer from './cs-grid-lookup-renderer';
import CSGridMultiSelectLookupEditor from './cs-grid-multi-select-lookup-editor';
import CSGridMultiSelectPicklistEditor from './cs-grid-multi-select-picklist-editor';
import CSGridPaginator, { CSGridPagination, CSGridPaginationLocation } from './cs-grid-pagination';
import CSGridPicklistEditor from './cs-grid-picklist-editor';
import CSGridPicklistRenderer from './cs-grid-picklist-renderer';
import QuickFilter, { CSGridQuickFilter, CSGridQuickFilterLocation } from './cs-grid-quick-filter';
import CSGridRowSelectionRenderer from './cs-grid-row-selection-renderer';
import CSGridRowValidationRenderer from './cs-grid-row-validation-renderer';
import CSGridTextEditor from './cs-grid-text-editor';
import CSGridTextRenderer from './cs-grid-text-renderer';

export interface CSGridProps extends AgGridReactProps {
	pageSizes?: Array<number>;
	csGridPagination: CSGridPagination;
	csGridQuickFilter: CSGridQuickFilter;
	editorComponents?: Record<string, any>;
	rendererComponents?: Record<string, any>;
	multiSelect: boolean;
	uniqueIdentifierColumnName: string;
	onSelectionChange?(selectedRows: Array<any>): void;
	onCellValueChange?(
		rowNodeId: string,
		ColumnField: string,
		oldValue: any,
		newValue: any
	): Promise<void>;
}

class CSGridState {
	filterText: string = null;
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

	firstRowOnPage: number;
	lastRowOnPage: number;
	totalRows: number;
	currentPage: number;
	totalPages: number;
	onLastPage: boolean;
	currentPageSize: number;
}

export default class CSGrid extends React.Component<CSGridProps, CSGridState> {
	state: CSGridState = new CSGridState();
	private gridApi: GridApi;
	private defaultPageSizes: Array<number> = [10, 20, 50, 100];

	constructor(props: CSGridProps) {
		super(props);

		const editorComponents = this.props.editorComponents || {};
		const rendererComponents = this.props.rendererComponents || {};

		this.state.frameworkComponents = {
			...this.state.frameworkComponents,
			...editorComponents,
			...rendererComponents
		};
	}

	getSelectedRows = (): Array<any> => {
		return this.gridApi.getSelectedRows();
	};

	render() {
		const pageSizes = this.props.pageSizes || this.defaultPageSizes;
		const paginationLocation = this.props.csGridPagination.location;
		const csGridPaginations: Array<React.ReactPortal> = [];
		let paginator: JSX.Element;
		if (paginationLocation !== CSGridPaginationLocation.None) {
			paginator = (
				<CSGridPaginator
					firstRowOnPage={this.state.firstRowOnPage}
					lastRowOnPage={this.state.lastRowOnPage}
					totalRows={this.state.totalRows}
					currentPage={this.state.currentPage}
					totalPages={this.state.totalPages}
					onLastPage={this.state.onLastPage}
					pageSizes={pageSizes}
					onPageSizeChanged={this.onPageSizeChanged}
					currentPageSize={this.state.currentPageSize}
					onBtFirst={this.onBtFirst}
					onBtLast={this.onBtLast}
					onBtNext={this.onBtNext}
					onBtPrevious={this.onBtPrevious}
					goToPage={this.goToPage}
				/>
			);

			if (this.props.csGridPagination.detachedCSSClass) {
				const elements: HTMLCollectionOf<Element> = document.getElementsByClassName(
					this.props.csGridPagination.detachedCSSClass
				);

				for (const element of elements) {
					csGridPaginations.push(ReactDOM.createPortal(paginator, element));
				}
			}
		}

		const quickFilterLocation = this.props.csGridQuickFilter.location;
		const csGridQuickFilters: Array<React.ReactPortal> = [];
		let quickFilter: JSX.Element;
		if (quickFilterLocation !== CSGridQuickFilterLocation.None) {
			quickFilter = (
				<QuickFilter
					onFilterText={this.onFilterText}
					filterText={this.state.filterText}
					clearFilter={this.clearFilter}
				/>
			);

			if (this.props.csGridQuickFilter.detachedCSSClass) {
				const elements: HTMLCollectionOf<Element> = document.getElementsByClassName(
					this.props.csGridQuickFilter.detachedCSSClass
				);

				for (const element of elements) {
					csGridQuickFilters.push(ReactDOM.createPortal(quickFilter, element));
				}
			}
		}

		return (
			<>
				{(paginationLocation === CSGridPaginationLocation.Header ||
					paginationLocation === CSGridPaginationLocation.Both) &&
					paginator}
				{(quickFilterLocation === CSGridQuickFilterLocation.Header ||
					quickFilterLocation === CSGridQuickFilterLocation.Both) &&
					quickFilter}
				<div className='app-wrapper'>
					<div className='ag-theme-balham main'>
						<AgGridReact
							// listening for events
							onGridReady={this.onGridReady}
							onSelectionChanged={this.onSelectionChanged}
							quickFilterText={this.state.filterText}
							columnDefs={this.props.columnDefs}
							rowData={this.props.rowData}
							pagination={paginationLocation !== CSGridPaginationLocation.None}
							suppressPaginationPanel={true}
							paginationPageSize={pageSizes[0]}
							onPaginationChanged={this.onPaginationChanged}
							singleClickEdit={true}
							// setting default column properties
							defaultColDef={{
								comparator: this.comparator,
								editable: true,
								filter: true,
								filterParams: {
									textFormatter: (value: any) => {
										if (typeof value === 'string' || value instanceof String) {
											return value.toLowerCase();
										}

										const cellValue = value.cellValue;
										if (cellValue === undefined && cellValue == null) {
											return '';
										}

										return cellValue.toString().toLowerCase();
									}
								},
								// This is needed to avoid toString=[object,object] result with objects.
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
							onCellEditingStopped={this.onCellEditingStopped}
							// A pass through to allow cs-grid users to use all ag-grid props.
							{...this.props}
							onCellValueChanged={this.onCellValueChanged}
							getRowNodeId={this.getRowNodeId}
							onColumnMoved={this.onColumnMoved}
						/>
					</div>
				</div>
				{(quickFilterLocation === CSGridQuickFilterLocation.Footer ||
					quickFilterLocation === CSGridQuickFilterLocation.Both) &&
					quickFilter}
				{(paginationLocation === CSGridPaginationLocation.Footer ||
					paginationLocation === CSGridPaginationLocation.Both) &&
					paginator}
				{csGridPaginations}
				{csGridQuickFilters}
			</>
		);
	}

	private onFilterText = (event: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ filterText: event.target.value });
	};

	private clearFilter = (): void => {
		this.setState({ filterText: '' });
	};

	/* Grid Events we're listening to */
	private onGridReady = (params: GridReadyEvent) => {
		this.gridApi = params.api;
		this.gridApi.sizeColumnsToFit();
		this.onPaginationChanged();
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
		const value = event.target.value;
		this.gridApi.paginationSetPageSize(Number(value));
		this.gridApi.paginationGoToPage(0);

		this.setState({
			currentPage: 0,
			currentPageSize: this.gridApi.paginationGetPageSize()
		});
	};

	private onPaginationChanged = () => {
		if (this.gridApi) {
			const totalRows = this.gridApi.paginationGetRowCount();
			let lastRowOnPage =
				(this.gridApi.paginationGetCurrentPage() + 1) *
				this.gridApi.paginationGetPageSize();
			if (lastRowOnPage > totalRows) {
				lastRowOnPage = totalRows;
			}
			const currentPage = this.gridApi.paginationGetCurrentPage() + 1;
			const totalPages = this.gridApi.paginationGetTotalPages();
			this.setState({
				currentPage,
				firstRowOnPage:
					this.gridApi.paginationGetCurrentPage() * this.gridApi.paginationGetPageSize() +
					1,
				lastRowOnPage,
				onLastPage: currentPage === totalPages,
				totalPages,
				totalRows
			});
		}
	};

	private onBtFirst = () => {
		this.gridApi.paginationGoToFirstPage();
	};

	private onBtLast = () => {
		this.gridApi.paginationGoToLastPage();
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

	private onCellEditingStopped = (event: CellEditingStoppedEvent) => {
		this.gridApi.setFocusedCell(event.rowIndex, event.colDef.field);
	};

	private comparator = (a: CellData<any>, b: CellData<any>) => {
		let aValue = a.cellValue;
		let bValue = b.cellValue;

		if (aValue === undefined || aValue == null) {
			if (bValue === undefined || bValue == null) {
				return 0;
			}

			return -1;
		}
		if (bValue === undefined || bValue == null) {
			return 1;
		}

		if (typeof aValue === 'string') {
			aValue = aValue.toUpperCase();
			bValue = bValue.toUpperCase();
		}

		return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
	};
}
