import { CellClassParams } from 'ag-grid-community';
import {
	RowValidationValues,
	ValidationStatus
} from '../components/cs-grid-row-validation-renderer';
import { CellData, IsColumnFunc, SuppressKeyboardEventParams } from './cs-grid-base-interfaces';
import {
	ActionProps,
	BaseProps,
	DateProps,
	DateTimeProps,
	DecimalProps,
	IconProps,
	IntegerProps,
	LookupProps,
	PicklistProps,
	RowValidationProps
} from './cs-grid-cell-props';
import { CSGridSortDirection } from './cs-grid-data-source-api';

export type ColDef =
	| DecimalColDef
	| IntegerColDef
	| LookupColDef
	| PicklistColDef
	| CurrencyColDef
	| BooleanColDef
	| DateColDef
	| DateTimeColDef
	| TextColDef
	| IconColDef
	| RowValidationColDef
	| RowSelectionColDef
	| CustomColDef;

interface DecimalColDef extends BaseColDef<number>, DecimalProps {
	cellType: 'Decimal';
}

interface IntegerColDef extends BaseColDef<string | number>, IntegerProps {
	cellType: 'Integer';
}

type LookupColDef = BaseColDef<Array<Record<string, string>> | Record<string, string>> &
	LookupProps &
	ActionProps<Array<Record<string, string>> | Record<string, string>> & {
		cellType: 'Lookup' | 'MultiSelectLookup';
	};

interface PicklistColDef extends BaseColDef<string | Array<string>>, PicklistProps {
	cellType: 'Picklist' | 'MultiSelectPicklist';
}

interface CurrencyColDef extends BaseColDef<string | number> {
	cellType: 'Currency';
}

interface BooleanColDef extends BaseColDef<boolean> {
	cellType: 'Boolean';
}

interface DateColDef extends BaseColDef<string>, DateProps {
	cellType: 'Date';
}

interface DateTimeColDef extends BaseColDef<string>, DateTimeProps {
	cellType: 'DateTime';
}

interface TextColDef extends BaseColDef<string> {
	cellType: 'Text';
}

interface IconColDef extends BaseColDef<string>, IconProps, ActionProps<boolean> {
	cellType: 'Icon';
}

interface RowValidationColDef
	extends BaseColDef<ValidationStatus | RowValidationValues>,
		RowValidationProps {
	cellType: 'RowValidation';
}

interface RowSelectionColDef extends BaseColDef<boolean>, ActionProps<boolean> {
	cellType: 'RowSelection';
}

interface CustomColDef extends BaseColDef<any> {
	cellType: 'Custom';

	/** A function for rendering a cell. */
	cellRenderer: string;

	/** Cell editor */
	cellEditor: string;

	cellRendererParams?: any;

	cellEditorParams?: any;
}

export interface LookupSearchColDef {
	/** The name of the row to get the cells data from */
	name: string;

	header: {
		/** The name to render in the column header */
		label: string;
	};

	/** Set to true for this column to be hidden. */
	visible?: boolean;

	/** Set to false to disable column level filter, default is true */
	hasFilter?: boolean;
}

interface BaseColDef<T> extends BaseProps<T> {
	/** Initial width, in pixels, of the cell */
	width?: number;

	/** Min width, in pixels, of the cell */
	minWidth?: number;

	/** Max width, in pixels, of the cell */
	maxWidth?: number;

	/** Set to true if this column should be resizable */
	resizable?: boolean;

	/** Set to true if sorting allowed for this column. */
	sortable?: boolean;

	/** If true, a 'select all' checkbox will be put into the header */
	headerCheckboxSelection?: boolean;

	/** Set to true to block the user showing / hiding the column, the column can only be shown / hidden via definitions or API */
	lockVisible?: boolean;

	/** Defines the column header. */
	header?: {
		/** An optional class added to the span surrounding the header title. */
		class?: string;

		/** The name to render in the column header */
		label?: string;
	};

	/** Rules for applying css classes */
	cellClassRules?: {
		[cssClassName: string]: (params: CellClassParams) => boolean | string;
	};

	/** If true, the header checkbox selection will work on filtered items */
	selectFilteredOnly?: boolean;

	/** Does this column have filtering options. */
	hasFilter?: boolean;

	/** The name of the row to get the cells data from */
	name?: string;

	/** Set to true if this col is editable, otherwise false. Can also be a function to have different rows editable. */
	editable?: boolean | IsColumnFunc;

	/** Set to true to render a selection checkbox in the column. */
	checkboxSelection?: boolean;

	/** Set to true for this column to be hidden. */
	visible?: boolean;

	/** Comparator function for custom sorting. */
	comparator?: (valueA: CellData<T>, valueB: CellData<T>) => number;

	/** Pins the column to the left or right and the column is always visible. */
	pinned?: 'left' | 'right';

	/** Allows user to suppress certain keyboard events */
	suppressKeyboardEvent?: (params: SuppressKeyboardEventParams) => boolean;

	/** Class to use for the cell. Can be string, array of strings, or function. */
	cellClass?:
		| string
		| Array<string>
		| ((value: CellData<T>, rowGuid: string) => string | Array<string>);

	/** Set to true if you want to flash cells on successful cell value change */
	flashOnCellValueChange?: boolean;

	/** If sorting by default, set it here. */
	sort?: CSGridSortDirection;
	/** If you don't want a particular column to be included in the auto resize */
	suppressSizeToFit?: boolean;
	/** If quick filter text needs to be overridden */
	getQuickFilterText?: (value: any) => string;
}
