import { ColDef, Column, ColumnApi, RowNode } from 'ag-grid-community';
import { CSGridLookupSearchResult } from '../components/cs-grid-lookup-editor';
import { CellData, GridApi, IsColumnFunc } from './cs-grid-base-interfaces';
import { UserInfo } from './user-info';

export interface CSGridCellEditorProps<T> extends CSGridCellProps<T> {
	value: CellData<T>;
	stopEditing: (suppressNavigateAfterEdit?: boolean) => void;
}

export interface CSGridCellRendererProps<T> extends CSGridCellProps<T> {
	value: CellData<T>;
	getValue: () => any;
	setValue: (value: any) => void;
}

export interface CSGridCellProps<T> extends BaseProps<T> {
	column: Column;
	node: RowNode;
	rowIndex: number;
	eGridCell: HTMLElement;
	api: GridApi;
	columnApi: ColumnApi;
	colDef: ColDef;
	data: any;
	context: any;
}

/**
 * noOfDecimalDigits - used to format the value shown in the cell to the given number of decimal places.
 */
export interface DecimalProps {
	noOfDecimalDigits?: number;
}

/**
 * stepperArrows? - an optional property to add stepper arrows to the right of the integer, false if not provided.
 */
export interface IntegerProps {
	stepperArrows?: boolean;
}

/**
 * minSearchTermLength - The minimum number of characters needed before the lookup will trigger, 0 by default.
 * displayColumn - The column to display in the renderer.
 * guidColumn - A unique ID for the row, this value will not be shown in the grid.
 * getLookupValues - Returns the latest lookup values depending on the search term input.
 */
export interface LookupProps {
	minSearchTermLength?: number;
	displayColumn: string;
	guidColumn: string;
	getLookupValues(searchTerm: string, guid: string): Promise<CSGridLookupSearchResult>;
}

export interface RowSelectionProps {
	getActions?(guid: string): Array<RowSelectionAction>;
}

export interface RowSelectionAction {
	name: string;
	icon?: JSX.Element;
	action: () => void;
}

export interface PicklistProps {
	filterAboveSize?: number;
	toggleSelection?: boolean;
	getEmptyPicklistContent?(guid: string): JSX.Element;
	getOptions(guid: string): Array<string | PicklistOption>;
}

export interface PicklistOption {
	id: string;
	label: string;
	horizontalDivider?: boolean;
	icon?: JSX.Element;
}

export interface BaseProps<T> {
	readonly?: boolean | IsColumnFunc;
	userInfo: UserInfo;
	onChange?(rowNodeId: string, oldValue: T, newValue: T): Promise<CellData<T>>;
}
