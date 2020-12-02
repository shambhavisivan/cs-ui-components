import {
	CSTooltipIconSize,
	CSTooltipPosition,
	CSTooltipVariant
} from '@cloudsense/cs-ui-components';
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
	cellType?: string;
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
 * displayColumn - The column to display in the renderer.
 * guidColumn - A unique ID for the row, this value will not be shown in the grid.
 * minSearchTermLength - The minimum number of characters needed before the lookup will trigger, 0 by default.
 * rowDeselection - If true selecting a currently selected row will deselect the value, true by default.
 * getLookupValues - Returns the latest lookup values depending on the search term input.
 */
export interface LookupProps {
	displayColumn: string;
	guidColumn: string;
	minSearchTermLength?: number;
	rowDeselection?: boolean;
	getLookupValues(searchTerm: string, guid: string): Promise<CSGridLookupSearchResult>;
}

export interface ActionProps<T> {
	noOfInlineIcons?: number;
	getActions?(guid: string): Array<CSGridAction<T>>;
}

export interface CSGridAction<T> {
	name: string;
	icon?: Icon;
	action: (guid: string, currentValue: T) => void;
	disabled?: boolean;
}

export interface RowValidationProps extends IconProps {}

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

export interface IconProps {
	getIcons?(guid: string): Record<string, Icon>;
}

export type Icon = JSX.Element | StandardIcon;

export interface StandardIcon {
	iconName: string;
	color?: string;
}

export function isStandardIcon(object: any): object is StandardIcon {
	return 'iconName' in object;
}

/**
 * getOpenToDate - Opens to this date if no date is currently selected.
 * textInputFormat - optional (moment-style) date format for typing in date directly
 */
export interface DateProps {
	getOpenToDate?: (guid: string) => string;
	textInputFormat?: string;
}

/**
 * timeInterval - The time interval used when selecting the time.
 */
export interface DateTimeProps extends DateProps {
	timeInterval?: number;
}

export interface BaseProps<T> {
	readonly?: boolean | IsColumnFunc;
	userInfo: UserInfo;
	getTooltip?(
		rowNodeId: string
	): {
		content: string | Array<string> | JSX.Element;
		delay: number;
		variant?: CSTooltipVariant;
		position?: CSTooltipPosition;
		height?: string;
		width?: string;
		padding?: string;
	};
	onChange?(rowNodeId: string, oldValue: T, newValue: T): Promise<CellData<T>>;
}
