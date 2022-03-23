import {
	CSButtonProps as CSFormModalButton,
	CSModalProps,
	CSModalHeaderProps,
	CSModalBodyProps,
	CSModalFooterProps,
	CSDataTableRowInterface,
	CSRadioOptionInterface as CSFormRadioOption,
} from '@cloudsense/cs-ui-components';
import React from 'react';
import { CSFormData } from './cs-form-types';

type ExcludeCommonHelper<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never;

/** FORM FIELD PROPS */
export interface CSFormFieldCommonProps {
	actions?: Array<any>;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: Array<string> | string;
	helpText?: string;
	icons?: Array<any>
	label: string;
	name: string;
	onBlur?: (newValue?: any) => any;
	onChange?: (newValue?: any) => any;
	onClick?: () => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
	readOnly?: boolean;
	required?: boolean;
	styleClass?: string;
	title?: string;
}

export interface CSFormFieldLayoutProps {
	fieldType: CSFormFieldType;
	hidden?: boolean;
	grow?: number;
	showInNewLine?: boolean;
}

export type CSFormFieldType = 'CHECKBOX' |
	'CUSTOM' |
	'CUSTOM-MODAL' |
	'CUSTOM-SELECT' |
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
export interface CSFormCheckboxFieldProps extends CSFormFieldCommonProps {
	fieldType: 'CHECKBOX';
	indeterminate?: boolean;
	value?: boolean;
}

/** CUSTOM FIELD */
export interface CSFormCustomFieldProps extends Pick<CSFormFieldCommonProps, 'onBlur' | 'onChange'> {
	fieldType: 'CUSTOM',
	onFocus?: (value?: any) => any;
	render: React.ReactElement;
	[key: string]: any;
}

/** CUSTOM MODAL FIELD */
export type CSFormCustomModalContentFactory = (data: CSFormData, closeModal: () => any) => Promise<React.ReactElement>;

export interface CSFormModalHeaderAttributes extends CSModalHeaderProps {
	headerContent?: React.ReactElement;
	headerFactory?: (data: CSFormData) => Promise<React.ReactElement>;
}

export interface CSFormModalBodyAttributes extends CSModalBodyProps {
	bodyContent?: React.ReactElement;
	bodyFactory?: CSFormCustomModalContentFactory;
}

export interface CSFormModalFooterAttributes extends CSModalFooterProps {
	footerContent?: React.ReactElement;
	footerFactory?: CSFormCustomModalContentFactory;
}

export interface CSFormCustomModalProps extends Omit<CSModalProps, 'loading' | 'mounted' | 'setMounted' | 'visible'> {
	header: CSFormModalHeaderAttributes;
	body: CSFormModalBodyAttributes ;
	footer?: CSFormModalFooterAttributes;
}

export interface CSFormCustomModalFieldProps {
	fieldType: 'CUSTOM-MODAL';
	modalButton: CSFormModalButton;
	modal: CSFormCustomModalProps;
}

/** CUSTOM SELECT FIELD */
export interface CSFormCustomSelectOption {
	key: React.ReactText;
	label: React.ReactText;
}

export interface CSFormCustomSelectFieldProps extends Omit<CSFormFieldCommonProps, 'actions' | 'icons'> {
	fieldType: 'CUSTOM-SELECT';
	multiselect?: boolean;
	onClear?: () => void;
	onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	options: Array<CSFormCustomSelectOption>;
	value?: React.ReactText | Array<React.ReactText>;
}

/** DATE FIELD */
export interface CSFormDateFieldProps extends CSFormFieldCommonProps {
	dateFormat?: string;
	fieldType: 'DATE';
	locale?: any;
	value?: Date;
}

/** DATETIME FIELD */
export interface CSFormDateTimeFieldProps extends Omit<CSFormDateFieldProps, 'fieldType'> {
	fieldType: 'DATETIME';
	timeCaption?: string;
	timeFormat?: string;
	timeIntervals?: number;
}

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
	value?: CSDataTableRowInterface | Array<CSDataTableRowInterface> | null;
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

export type CSFormLookupFieldProps = CSFormLookupFieldCommonProps & CSFormFieldCommonProps & (CSFormLookupFieldClientProps | CSFormLookupFieldServerProps);

/** NUMBER FIELD */
export interface CSFormNumberFieldProps extends CSFormFieldCommonProps {
	fieldType: 'NUMBER';
	locale?: any;
	max?: any;
	min?: any;
	useLocale?: boolean;
	value?: any;
}

/** RADIO FIELD */
// CSRadio doesn't support actions, icons and title so these props are omitted from CSFormFieldCommonProps type. Title can be set to radio option.
export interface CSFormRadioFieldProps extends Omit<CSFormFieldCommonProps,
	'actions' |
	'icons' |
	'title'
> {
	fieldType: 'RADIO';
	disabledKeys?: Array<React.ReactText>;
	options: Array<CSFormRadioOption>;
	value?: React.ReactText;
}

/** SELECT FIELD */
export interface CSFormSelectOption {
	key: React.ReactText;
	value: string;
}

export interface CSFormSelectFieldProps extends CSFormFieldCommonProps {
	fieldType: 'SELECT';
	selectOptions: Array<CSFormSelectOption>;
	value?: any;
}

/** TEXT FIELD */
export interface CSFormTextFieldProps extends CSFormFieldCommonProps {
	fieldType: 'TEXT';
	maxLength?: number;
	value?: string;
}

/** TEXTAREA FIELD */
export interface CSFormTextareaFieldProps extends CSFormFieldCommonProps {
	fieldType: 'TEXTAREA';
	maxHeight?: string;
	rows?: number;
	value?: string;
}

/** TOGGLE FIELD */
export interface CSFormToggleFieldProps extends CSFormFieldCommonProps {
	fieldType: 'TOGGLE';
	value?: boolean;
}

/** Only standard form fields types */
export type CSFormStandardFields = CSFormCheckboxFieldProps
	| CSFormCustomSelectFieldProps
	| CSFormDateFieldProps
	| CSFormDateTimeFieldProps
	| CSFormNumberFieldProps
	| CSFormRadioFieldProps
	| CSFormSelectFieldProps
	| CSFormLookupFieldProps
	| CSFormTextFieldProps
	| CSFormTextareaFieldProps
	| CSFormToggleFieldProps;

type CSFormFields = CSFormStandardFields | CSFormCustomFieldProps | CSFormCustomModalFieldProps;

/** CSFormField props type */
export type CSFormFieldProps = CSFormFieldLayoutProps & CSFormFields;

/** Props per field defined in data prop. onClick, onChange, onBlur, onKeyDown and locale are excluded since they are defined on top of the whole CSForm */
export type CSFormFieldData = CSFormFieldLayoutProps & (ExcludeCommonHelper<CSFormStandardFields, 'onClick' | 'onChange' | 'onBlur' | 'onKeyDown' | 'locale'> | CSFormCustomFieldProps | CSFormCustomModalFieldProps)

/** Props used for form definition only, values for each field are excluded. */
export type CSFormFieldDefinition = CSFormFieldLayoutProps & (ExcludeCommonHelper<CSFormStandardFields, 'onClick' | 'onChange' | 'onBlur' | 'onKeyDown' | 'locale' | 'value'> | CSFormCustomFieldProps | CSFormCustomModalFieldProps);
