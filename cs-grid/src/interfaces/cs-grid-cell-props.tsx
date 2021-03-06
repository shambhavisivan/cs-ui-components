import {
	CSButtonSize,
	CSButtonStyle,
	CSButtonType,
	CSDataTableRowInterface,
	CSIconOrigin,
	CSTooltipPosition,
	CSTooltipVariant
} from '@cloudsense/cs-ui-components';
import { CSButtonProps } from '@cloudsense/cs-ui-components/dist/cs-ui-components/src/components/CSButton';
import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { CellData, IsColumnFunc } from './cs-grid-base-interfaces';
import { LookupSearchColDef } from './cs-grid-col-def';
import { UserInfo } from './user-info';

export interface CSGridCellEditorProps<T> extends CSGridCellProps<T> {
	value: CellData<T>;
	stopEditing: (suppressNavigateAfterEdit?: boolean) => void;
}

export interface CSGridCellRendererProps<T> extends CSGridCellProps<T> {
	flashOnCellValueChange?: boolean;
	value: CellData<T>;
	getValue: () => any;
	setValue: (value: any) => void;
	getActions?(guid: string): Array<CSGridAction<T>>;
	getIcons?(guid: string): Array<Icon>;
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
export interface BaseLookupProps {
	displayColumn: string;
	guidColumn: string;
	minSearchTermLength?: number;
	rowDeselection?: boolean;
}

export type LookupProps = LegacyLookupProps | PaginatedLookupProps;

export interface LegacyLookupProps extends BaseLookupProps {
	type?: never;
	getLookupValues: (searchTerm: string, guid: string) => Promise<CSGridLookupSearchResult>;
}
export interface PaginatedLookupProps extends BaseLookupProps {
	type: 'paginated';
	getLookupValues: (
		searchTerm: string,
		guid: string,
		pageSize: number,
		pageNo: number
	) => Promise<CSGridPaginatedLookupSearchResult>;
}

export interface ActionProps<T> {
	noOfInlineIcons?: number;
	getActions?(guid: string): Array<CSGridAction<T>>;
}

export interface CSGridAction<T> extends Tooltip {
	name: string;
	icon?: Icon;
	action: (guid: string, currentValue: T) => void;
	disabled?: boolean;
	btnType?: CSButtonType;
	btnStyle?: CSButtonStyle;
	labelHidden?: boolean;
	size?: CSButtonSize;
	color?: string;
}

export interface RowValidationProps extends IconProps {}

export interface PicklistProps {
	filterAboveSize?: number;
	toggleSelection?: boolean;
	getDropdownActions?: () => Array<CSButtonProps>;
	getEmptyPicklistContent?(guid: string): JSX.Element;
	getOptions(guid: string): Array<PicklistOption>;
}

export interface PicklistOption {
	key: string;
	label: string;
}

export interface IconProps {
	getIcons?(guid: string): Array<Icon>;
}

export type Icon = JSX.Element | StandardIcon;

export interface StandardIcon extends Tooltip {
	iconName: string;
	iconOrigin?: CSIconOrigin;
	iconSize?: string;
	color?: string;
}

export const isStandardIcon = (icon: any): icon is StandardIcon => {
	if (icon === undefined) {
		return false;
	}

	if (icon.iconName === undefined) {
		console.warn(
			`Using non-standard icons inside the 'getIcons' method is now deprecated. From now on, icons must be defined as objects with an 'iconName' property.`
		);
	}

	return icon.iconName !== undefined;
};

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

export interface Tooltip {
	getTooltip?(rowNodeId: string): {
		content: string | Array<string> | JSX.Element;
		delay?: number;
		variant?: CSTooltipVariant;
		position?: CSTooltipPosition;
		height?: string;
		maxHeight?: string;
		width?: string;
		maxWidth?: string;
		padding?: string;
		stickyOnClick?: boolean;
	};
}

/**
 * columnDefs - An array of column definitions:
 * {
 *     header: {
 *         label: 'Name'
 *     },
 *     name: 'text1'
 * }
 * rowData - Maps the field names above to row values.
 */
export interface CSGridLookupSearchResult {
	columnDefs: Array<LookupSearchColDef>;
	rowData: Array<CSDataTableRowInterface>;
}

export interface CSGridPaginatedLookupSearchResult {
	columnDefs: Array<{ key: string; label: string }>;
	records: Array<CSDataTableRowInterface>;
	moreRecords: boolean;
}

export interface BaseProps<T> extends Tooltip {
	readonly?: boolean | IsColumnFunc;
	userInfo: UserInfo;
	onChange?(rowNodeId: string, oldValue: T, newValue: T): Promise<CellData<T>>;
}
