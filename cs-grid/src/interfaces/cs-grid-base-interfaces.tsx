import {
	CellClickedEvent as _CellClickedEvent,
	Column,
	GridApi as _GridApi,
	GridReadyEvent as _GridReadyEvent,
	RowNode
} from 'ag-grid-community';

import { ICellEditorReactComp, ICellRendererReactComp } from 'ag-grid-react';

export interface CSGridCellRendererState<T> {
	value: CellData<T>;
	isLastColumn: boolean;
	editing?: boolean;
}

/**
 * Ag-grid requires all editors have a state that holds the latest value so
 * the getValue() function can be called to update the grid.
 */
export interface CSGridCellEditorState<T> {
	value: CellData<T>;
}

export interface CellData<T> {
	cellValue: T;
	errorMessage?: string;
}

/**
 * @deprecated Legacy type 'Row' is deprecated and only exists for backward compatibility.
 * Please use 'RowData' instead..
 */
export type Row = Record<string, CellData<any>>;
export interface CellNotification {
	type: 'error' | 'success' | 'info' | 'warning';
	message: string;
}
export interface RowData {
	[key: string]: any;
	row_cell_notifications?: Record<string, CellNotification>;
}

export type CustomCellType = 'Custom';

/**
 * Defines the location of an object relative to the grid.
 */
export type CSGridLocation = 'Header' | 'Footer' | 'Both' | 'Detached' | 'None';

export interface CSGridControl {
	/**
	 * Defines the location of controller relative to the grid.
	 */
	location: CSGridLocation;
	/**
	 * All html elements with the specified class will be replaced with the controller while still being controlled by cs-grid.
	 * This property is only necessary if the location property has be set to 'Detached'.
	 */
	detachedCSSClass?: string;
}

export interface IsColumnFuncParams {
	node: RowNode;
	column: Column;
}

export interface RowStyleParams {
	node: RowNode;
}

export interface SuppressKeyboardEventParams extends IsColumnFuncParams {
	event: KeyboardEvent;
	editing: boolean;
}

export type IsColumnFunc = (params: IsColumnFuncParams) => boolean;

// Ag-grid interfaces have been extended so they are not exposed in the cs-grid package.
export interface CSGridCellEditor extends ICellEditorReactComp {}
export interface CSGridCellRenderer extends ICellRendererReactComp {}
export interface GridReadyEvent extends _GridReadyEvent {
	api: GridApi;
}
export interface CellClickedEvent extends _CellClickedEvent {}

export interface GridApi extends _GridApi {
	scrollGridToColumn: (columnName: string, position: 'LEFT' | 'RIGHT') => void;
}

export interface CSGridApi {
	updateDataSource: () => void;
}
