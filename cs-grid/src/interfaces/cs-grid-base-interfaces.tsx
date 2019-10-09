import {
	CellClickedEvent,
	ColDef,
	ColGroupDef,
	GridApi,
	GridReadyEvent,
	ICellEditorParams,
	ICellRendererParams
} from 'ag-grid-community';
import { IsColumnFunc, IsColumnFuncParams } from 'ag-grid-community/dist/lib/entities/colDef';

import { ICellEditorReactComp, ICellRendererReactComp } from 'ag-grid-react';
import { UserInfo } from './user-info';

export interface CSGridCellEditorProps<T> extends ICellEditorParams, CSGridCellProps<T> {
	value: CellData<T>;
}

export interface CSGridCellRendererProps<T> extends ICellRendererParams, CSGridCellProps<T> {
	value: CellData<T>;
	readonly?: boolean | IsColumnFunc;
}

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

export interface CSGridCellProps<T> {
	userInfo: UserInfo;
	onChange?(rowNodeId: string, oldValue: T, newValue: T): Promise<CellData<T>>;
}

export interface CellData<T> {
	cellValue: T;
	errorMessage?: string;
}

export type Row = Record<string, CellData<any>>;

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

// Ag-grid interfaces have been extended so they are not exposed in the cs-grid package.
export interface CSGridCellEditor extends ICellEditorReactComp {}
export interface CSGridCellRenderer extends ICellRendererReactComp {}
export interface IsColumnFuncParams extends IsColumnFuncParams {}
export interface IsColumnFunc extends IsColumnFunc {}
export interface ColDef extends ColDef {}
export interface ColGroupDef extends ColGroupDef {}
export interface GridReadyEvent extends GridReadyEvent {}
export interface CellClickedEvent extends CellClickedEvent {}
export interface GridApi extends GridApi {}
