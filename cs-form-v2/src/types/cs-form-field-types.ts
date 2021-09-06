export type CSFormFieldType = 'BOOLEAN' |
	'DATE' |
	'DATETIME' |
	'LOOKUP' |
	'NUMBER' |
	'PICKLIST' |
	'TEXT';

/** NUMBER FIELD PROPS */
export interface CSFormBooleanFieldProps {
	checked?: boolean;
	fieldType: 'BOOLEAN';
	indeterminite?: boolean;
}

/** DATE FIELD PROPS */
export interface CSFormDateFieldProps {
	dateFormat?: string;
	fieldType: 'DATE';
	selected?: Date | null | undefined;
}

/** DATETIME FIELD PROPS */
export interface CSFormDateTimeFieldProps extends Omit<CSFormDateFieldProps, 'fieldType'> {
	fieldType: 'DATETIME';
	timeCaption?: string;
	timeFormat?: string;
	timeIntervals?: number;
}

/** NUMBER FIELD PROPS */
export interface CSFormNumberFieldProps {
	fieldType: 'NUMBER';
	max?: any;
	maxLength?: number;
	min?: any;
}

/** PICKLIST FIELD PROPS */
export interface CSFormPicklistOption {
	value: any;
	label: string;
}

export interface CSFormPicklistFieldProps {
	picklistOptions: Array<CSFormPicklistOption>;
}

/** LOOKUP FIELD PROPS */
export type CSFormLookupFieldMode = 'CLIENT' | 'SERVER';

export interface CSFormLookupFieldTableColumn {
	key: string;
	label: string;
}

export interface CSFormLookupFieldFetchResult {
	records: Array<Record<string, any>>;
	moreRecords: boolean;
}

export interface CSFormLookupFieldCommonProps {
	fieldToBeDisplayed: string;
	lookupColumns: Array<CSFormLookupFieldTableColumn>;
	multiselect?: boolean;
	onSelectChange?: (value?: any) => any;
}

export interface CSFormLookupFieldServerProps {
	fetchLookupOptions: (searchTerm: string, pageSize: number, pageNo: number) => Promise<CSFormLookupFieldFetchResult>;
	infiniteScroll?: boolean;
	minTermLength?: number;
	mode: 'SERVER';
	pageSize: number;
}

export interface CSFormLookupFieldClientProps {
	loading?: boolean;
	lookupOptions: Array<Record<string, any>>;
	mode: 'CLIENT';
	searchBy?: Array<string>;
}

export type CSFormLookupFieldProps = CSFormLookupFieldCommonProps & (CSFormLookupFieldClientProps | CSFormLookupFieldServerProps);

/** FORM FIELD PROPS */
export interface CSFormFieldCommonProps {
	actions?: Array<any>;
	disabled?: boolean;
	errorMessages?: Array<string> | string;
	fieldType: CSFormFieldType;
	grow?: number;
	hidden?: boolean;
	icons?: Array<any>
	label: string;
	name?: string;
	readOnly?: boolean;
	required?: boolean;
	showInNewLine?: boolean;
	styleClass?: string;
	title?: string;
	value?: any;
}

export type CSFormFieldProps = CSFormFieldCommonProps &
	(CSFormBooleanFieldProps |
		CSFormDateFieldProps |
		CSFormDateTimeFieldProps |
		CSFormNumberFieldProps |
		CSFormPicklistFieldProps |
		CSFormLookupFieldProps
	);
