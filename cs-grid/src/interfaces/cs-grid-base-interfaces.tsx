import {
	CellClickedEvent,
	Column,
	ColumnApi,
	GridApi,
	GridReadyEvent,
	RowNode
} from 'ag-grid-community';
import { IsColumnFunc } from 'ag-grid-community/dist/lib/entities/colDef';

import { ICellEditorReactComp, ICellRendererReactComp } from 'ag-grid-react';
import { UserInfo } from './user-info';

export interface CSGridCellRendererState<T> {
	value: CellData<T>;
	isLastColumn: boolean;
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

export type Row = Record<string, CellData<any>>;

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
}

export interface SuppressKeyboardEventParams extends IsColumnFuncParams {
	event: KeyboardEvent;
	editing: boolean;
}

export type IsColumnFunc = (params: IsColumnFuncParams) => boolean;

// Ag-grid interfaces have been extended so they are not exposed in the cs-grid package.
export interface CSGridCellEditor extends ICellEditorReactComp {}
export interface CSGridCellRenderer extends ICellRendererReactComp {}
export interface GridReadyEvent extends GridReadyEvent {}
export interface CellClickedEvent extends CellClickedEvent {}
export interface GridApi extends GridApi {}
