import React from 'react';

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
	header: string;
}

export interface CSFormLookupFieldFetchResult {
	records: Array<CSFormLookupFieldOptions>;
	moreRecords: boolean;
}

export interface CSFormLookupFieldCommonProps {
	fieldType: 'LOOKUP';
	fieldToBeDisplayed: string;
	columns: Array<CSFormLookupFieldTableColumn>;
	mode: CSFormLookupFieldMode;
	multiselect?: boolean;
}

export interface CSFormLookupFieldServerProps {
	fetchOptions: (searchTerm: string, pageSize: number, pageNo: number) => Promise<CSFormLookupFieldFetchResult>;
	infiniteScroll?: boolean;
	minTermLength?: number;
	mode: 'server';
	pageSize: number;
}
export interface CSFormLookupFieldOptionsData {
	[key: string]: any;
}
export interface CSFormLookupFieldOptions {
	key: React.ReactText;
	data: CSFormLookupFieldOptionsData;
}

export interface CSFormLookupFieldClientProps {
	loading?: boolean;
	options: Array<CSFormLookupFieldOptions>;
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
	'readOnly' |
	'disabled' |
	'title'> {
	label?: string;
	radioOptionName?: string;
	radioOptionValue?: string;
}

export interface CSFormRadioFieldInterface extends Pick<CSFormFieldCommonProps,
	'error' |
	'errorMessage' |
	'disabled' |
	'helpText' |
	'label' |
	'name' |
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
	fieldType: 'TOGGLE';
}

export type CSFormToggleFieldProps = CSFormToggleFieldInterface & CSFormFieldCommonProps & CSFormFieldEvents;

/** FORM FIELD PROPS */
export interface CSFormFieldCommonProps {
	actions?: Array<any>;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: Array<string> | string;
	helpText?: string;
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
	onBlur?: (newValue: any) => any;
	onChange?: (newValue: any) => any;
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
