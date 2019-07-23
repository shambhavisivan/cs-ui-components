import { ICellEditorParams, ICellRendererParams } from 'ag-grid-community';

import { ICellEditorReactComp, ICellRendererReactComp } from 'ag-grid-react';
import { UserInfo } from './user-info';

export interface CSGridCellEditorProps<T> extends ICellEditorParams, CSGridCellProps<T> {
	value: CellData<T>;
}

export interface CSGridCellRendererProps<T> extends ICellRendererParams, CSGridCellProps<T> {
	value: CellData<T>;
}

export interface CSGridCellProps<T> {
	userInfo: UserInfo;
	onChange?(rowNodeId: string, oldValue: T, newValue: T): Promise<CellData<T>>;
}

export interface CSGridCellEditor extends ICellEditorReactComp {}

export interface CSGridCellRenderer extends ICellRendererReactComp {}

export interface CellData<T> {
	cellValue: T;
	errorMessage?: string;
}
