import {
	CellClickedEvent,
	ColDef,
	ColGroupDef,
	GridApi,
	GridReadyEvent,
	ICellEditorParams,
	ICellRendererParams
} from 'ag-grid-community';
// This type is needed to correctly call the editable function.
// tslint:disable-next-line: no-submodule-imports
import { IsColumnFuncParams } from 'ag-grid-community/dist/lib/entities/colDef';

import { ICellEditorReactComp, ICellRendererReactComp } from 'ag-grid-react';
import { UserInfo } from './user-info';

export interface CSGridCellEditorProps<T> extends ICellEditorParams, CSGridCellProps<T> {
	value: CellData<T>;
}

export interface CSGridCellRendererProps<T> extends ICellRendererParams, CSGridCellProps<T> {
	value: CellData<T>;
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

/**
 * Ag-grid interfaces have been extended so they are not exposed in the cs-grid package.
 */
export interface CSGridCellEditor extends ICellEditorReactComp {}
export interface CSGridCellRenderer extends ICellRendererReactComp {}
export interface IsColumnFuncParams extends IsColumnFuncParams {}
export interface ColDef extends ColDef {}
export interface ColGroupDef extends ColGroupDef {}
export interface GridReadyEvent extends GridReadyEvent {}
export interface CellClickedEvent extends CellClickedEvent {}
export interface GridApi extends GridApi {}
