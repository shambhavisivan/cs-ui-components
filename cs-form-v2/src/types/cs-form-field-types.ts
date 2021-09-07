export type CSFormFieldType = 'CHECKBOX' |
	'DATE' |
	'DATETIME' |
	'LOOKUP' |
	'NUMBER' |
	'SELECT' |
	'TEXT';

/** CHECKBOX FIELD PROPS */
export interface CSFormCheckboxFieldProps extends CSFormFieldCommonProps {
	checked?: boolean;
	fieldType: 'CHECKBOX';
	indeterminite?: boolean;
}

/** DATE FIELD PROPS */
export interface CSFormDateFieldProps extends CSFormFieldCommonProps {
	dateFormat?: string;
	fieldType: 'DATE';
	selected?: Date | null | undefined;
}

/** DATETIME FIELD PROPS */
export interface CSFormDateTimeFieldProps extends Omit<CSFormDateFieldProps, 'fieldType'>, CSFormFieldCommonProps {
	fieldType: 'DATETIME';
	timeCaption?: string;
	timeFormat?: string;
	timeIntervals?: number;
}

/** NUMBER FIELD PROPS */
export interface CSFormNumberFieldProps extends CSFormFieldCommonProps {
	fieldType: 'NUMBER';
	max?: any;
	maxLength?: number;
	min?: any;
}

/** SELECT FIELD PROPS */
export interface CSFormSelectOption {
	value: any;
	label: string;
}

export interface CSFormSelectFieldProps extends CSFormFieldCommonProps {
	fieldType: 'SELECT';
	selectOptions: Array<CSFormSelectOption>;
}

/** TEXT FIELD PROPS */
export interface CSFormTextFieldProps extends CSFormFieldCommonProps {
	fieldType: 'TEXT';
}

/** LOOKUP FIELD PROPS */
export type CSFormLookupFieldMode = 'client' | 'server';

export interface CSFormLookupFieldTableColumn {
	key: string;
	label: string;
}

export interface CSFormLookupFieldFetchResult {
	records: Array<Record<string, any>>;
	moreRecords: boolean;
}

export interface CSFormLookupFieldCommonProps extends CSFormFieldCommonProps {
	fieldType: 'LOOKUP';
	fieldToBeDisplayed: string;
	lookupColumns: Array<CSFormLookupFieldTableColumn>;
	mode: CSFormLookupFieldMode;
	multiselect?: boolean;
	onSelectChange?: (value?: any) => any;
}

export interface CSFormLookupFieldServerProps {
	fetchLookupOptions: (searchTerm: string, pageSize: number, pageNo: number) => Promise<CSFormLookupFieldFetchResult>;
	infiniteScroll?: boolean;
	minTermLength?: number;
	mode: 'server';
	pageSize: number;
}

export interface CSFormLookupFieldClientProps {
	loading?: boolean;
	lookupOptions: Array<Record<string, any>>;
	mode: 'client';
	searchBy?: Array<string>;
}

export type CSFormLookupFieldProps = CSFormLookupFieldCommonProps & (CSFormLookupFieldClientProps | CSFormLookupFieldServerProps);

/** FORM FIELD PROPS */
export interface CSFormFieldCommonProps {
	actions?: Array<any>;
	disabled?: boolean;
	errorMessages?: Array<string> | string;
	hidden?: boolean;
	icons?: Array<any>
	label: string;
	name?: string;
	readOnly?: boolean;
	required?: boolean;
	styleClass?: string;
	title?: string;
	value?: any;
}

export interface CSFormFieldLayoutProps {
	fieldType: CSFormFieldType;
	grow?: number;
	showInNewLine?: boolean;
}

export type CSFormFieldProps = CSFormFieldLayoutProps &
	(CSFormCheckboxFieldProps |
		CSFormDateFieldProps |
		CSFormDateTimeFieldProps |
		CSFormNumberFieldProps |
		CSFormSelectFieldProps |
		CSFormLookupFieldProps |
		CSFormTextFieldProps
	);
