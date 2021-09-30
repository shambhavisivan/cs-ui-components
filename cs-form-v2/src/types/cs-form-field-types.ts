export type CSFormFieldType = 'CHECKBOX' |
	'DATE' |
	'DATETIME' |
	'LOOKUP' |
	'NUMBER' |
	'RADIO' |
	'SELECT' |
	'TEXT' |
	'TEXTAREA' |
	'TOGGLE';

/** CHECKBOX FIELD */
export interface CSFormCheckboxFieldInterface {
	checked?: boolean;
	fieldType: 'CHECKBOX';
	indeterminite?: boolean;
}

export type CSFormCheckboxFieldProps = CSFormCheckboxFieldInterface & CSFormFieldCommonProps & CSFormFieldEvents;

/** DATE FIELD */
export interface CSFormDateFieldInterface {
	dateFormat?: string;
	fieldType: 'DATE';
	locale?: any;
	selected?: Date | null | undefined;
}

export type CSFormDateFieldProps = CSFormDateFieldInterface & CSFormFieldCommonProps & CSFormFieldEvents;

/** DATETIME FIELD */
export interface CSFormDateTimeFieldInterface extends Omit<CSFormDateFieldInterface, 'fieldType'> {
	fieldType: 'DATETIME';
	timeCaption?: string;
	timeFormat?: string;
	timeIntervals?: number;
}

export type CSFormDateTimeFieldProps = CSFormDateTimeFieldInterface & CSFormFieldCommonProps & CSFormFieldEvents;

/** LOOKUP FIELD */
export type CSFormLookupFieldMode = 'client' | 'server';

export interface CSFormLookupFieldTableColumn {
	key: string;
	label: string;
}

export interface CSFormLookupFieldFetchResult {
	records: Array<Record<string, any>>;
	moreRecords: boolean;
}

export interface CSFormLookupFieldCommonProps {
	fieldType: 'LOOKUP';
	fieldToBeDisplayed: string;
	lookupColumns: Array<CSFormLookupFieldTableColumn>;
	mode: CSFormLookupFieldMode;
	multiselect?: boolean;
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

export type CSFormLookupFieldInterface = CSFormLookupFieldCommonProps & (CSFormLookupFieldClientProps | CSFormLookupFieldServerProps)

export type CSFormLookupFieldProps = CSFormLookupFieldInterface & CSFormFieldCommonProps & CSFormFieldEvents;

/** NUMBER FIELD */
export interface CSFormNumberFieldInterface {
	fieldType: 'NUMBER';
	locale?: any;
	max?: any;
	min?: any;
	useLocale?: boolean;
}

export type CSFormNumberFieldProps = CSFormNumberFieldInterface & CSFormFieldCommonProps & CSFormFieldEvents;

/** RADIO FIELD */
export interface CSFormRadioOption extends Pick<CSFormFieldCommonProps,
	'name' |
	'readOnly' |
	'disabled' |
	'title'> {
	checked?: boolean;
	label?: string;
	radioOptionName?: string;
}

export interface CSFormRadioFieldInterface extends Pick<CSFormFieldCommonProps,
	'error' |
	'errorMessage' |
	'label' |
	'disabled' |
	'readOnly' |
	'required' |
	'styleClass' |
	'value'
> {
	fieldType: 'RADIO';
	radioOptions: Array<CSFormRadioOption>;
}

export type CSFormRadioFieldProps = CSFormRadioFieldInterface & CSFormFieldEvents;

/** SELECT FIELD */
export interface CSFormSelectOption {
	value: any;
	label: string;
}

export interface CSFormSelectFieldInterface {
	fieldType: 'SELECT';
	selectOptions: Array<CSFormSelectOption>;
}

export type CSFormSelectFieldProps = CSFormSelectFieldInterface & CSFormFieldCommonProps & CSFormFieldEvents;

/** TEXT FIELD */
export interface CSFormTextFieldInterface {
	fieldType: 'TEXT';
	maxLength?: number;
}

export type CSFormTextFieldProps = CSFormTextFieldInterface & CSFormFieldCommonProps & CSFormFieldEvents;

/** TEXTAREA FIELD */
export interface CSFormTextareaFieldInterface {
	fieldType: 'TEXTAREA';
	maxHeight?: string;
	rows?: number;
}

export type CSFormTextareaFieldProps = CSFormTextareaFieldInterface & CSFormFieldCommonProps & CSFormFieldEvents;

/** TOGGLE FIELD */
export interface CSFormToggleFieldInterface {
	checked?: boolean;
	fieldType: 'TOGGLE';
}

export type CSFormToggleFieldProps = CSFormToggleFieldInterface & CSFormFieldCommonProps & CSFormFieldEvents;

/** FORM FIELD PROPS */
export interface CSFormFieldCommonProps {
	actions?: Array<any>;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: Array<string> | string;
	hidden?: boolean;
	icons?: Array<any>
	label: string;
	name: string;
	readOnly?: boolean;
	required?: boolean;
	styleClass?: string;
	title?: string;
	value?: any;
}

export interface CSFormFieldEvents {
	onBlur?: (fieldName: string, newValue: any) => any;
	onChange?: (fieldName: string, newValue: any) => any;
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
		CSFormRadioFieldProps |
		CSFormSelectFieldProps |
		CSFormLookupFieldProps |
		CSFormTextFieldProps |
		CSFormTextareaFieldProps |
		CSFormToggleFieldProps
	);

export type CSFormFieldData = CSFormFieldLayoutProps &
	CSFormFieldCommonProps &
	(CSFormCheckboxFieldInterface
		| Omit<CSFormDateFieldInterface, 'locale'>
		| Omit<CSFormDateTimeFieldInterface, 'locale'>
		| Omit<CSFormNumberFieldInterface, 'locale'>
		| CSFormRadioFieldInterface
		| CSFormSelectFieldInterface
		| CSFormLookupFieldInterface
		| CSFormTextFieldInterface
		| CSFormTextareaFieldInterface
		| CSFormToggleFieldInterface
	);
