import {
	CSButtonProps as CSFormModalButton,
	CSModalProps,
	CSModalHeaderProps,
	CSModalBodyProps,
	CSModalFooterProps,
	CSCustomDataIcon,
	CSCustomDataAction,
	CSDataTableRowInterface,
	CSRadioOptionInterface as CSFormRadioOption,
} from '@cloudsense/cs-ui-components';
import React from 'react';
import { CSFormData } from './cs-form-types';

type ExcludeCommonHelper<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never;

/** FORM FIELD PROPS */
export interface CSFormFieldCommonProps {
	actions?: Array<CSCustomDataAction>;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: Array<string> | string;
	helpText?: string;
	icons?: Array<CSCustomDataIcon>;
	label: string;
	name: string;
	onBlur?: (newValue?: any) => any;
	onChange?: (newValue?: any) => any;
	onClick?: () => void;
	onFocus?: (newValue?: any) => any;
	onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
	readOnly?: boolean;
	required?: boolean;
	styleClass?: string;
	title?: string;
}

export interface CSFormFieldLayoutProps {
	type: CSFormFieldType;
	hidden?: boolean;
	grow?: number;
	showInNewLine?: boolean;
}

export type CSFormFieldType = 'BUFFER' |
	'CHECKBOX' |
	'CUSTOM' |
	'CUSTOM-MODAL' |
	'PICKLIST' |
	'DATE' |
	'DATETIME' |
	'LOOKUP' |
	'NUMBER' |
	'RADIO' |
	'TEXT' |
	'TEXTAREA' |
	'TOGGLE';

/** BUFFER FIELD */
export interface CSFormBufferFieldProps extends CSFormFieldLayoutProps {
	type: 'BUFFER'
}

/** CHECKBOX FIELD */
export interface CSFormCheckboxFieldProps extends CSFormFieldCommonProps {
	type: 'CHECKBOX';
	indeterminate?: boolean;
	value?: boolean;
}

/** CUSTOM FIELD */
export interface CSFormCustomFieldProps extends Pick<CSFormFieldCommonProps, 'onBlur' | 'onChange'> {
	type: 'CUSTOM',
	onFocus?: (value?: any) => any;
	render: React.ReactElement;
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
	type: 'CUSTOM-MODAL';
	modalButton: CSFormModalButton;
	modal: CSFormCustomModalProps;
}

/** PICKLIST FIELD */
export interface CSFormPicklistOption {
	key: React.ReactText;
	label: React.ReactText;
}

export interface CSFormPicklistFieldProps extends Omit<CSFormFieldCommonProps, 'actions' | 'icons'> {
	type: 'PICKLIST';
	multiselect?: boolean;
	onClear?: () => void;
	onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	options: Array<CSFormPicklistOption>;
	value?: React.ReactText | Array<React.ReactText>;
}

/** DATE FIELD */
export interface CSFormDateFieldProps extends CSFormFieldCommonProps {
	dateFormat?: string;
	type: 'DATE';
	locale?: any;
	value?: Date;
}

/** DATETIME FIELD */
export interface CSFormDateTimeFieldProps extends Omit<CSFormDateFieldProps, 'type'> {
	type: 'DATETIME';
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
	type: 'LOOKUP';
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
	type: 'NUMBER';
	fractionDigits?: number;
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
	type: 'RADIO';
	disabledKeys?: Array<React.ReactText>;
	options: Array<CSFormRadioOption>;
	value?: React.ReactText;
}

/** TEXT FIELD */
export interface CSFormTextFieldProps extends CSFormFieldCommonProps {
	type: 'TEXT';
	maxLength?: number;
	value?: string;
}

/** TEXTAREA FIELD */
export interface CSFormTextareaFieldProps extends CSFormFieldCommonProps {
	type: 'TEXTAREA';
	maxHeight?: string;
	rows?: number;
	value?: string;
}

/** TOGGLE FIELD */
export interface CSFormToggleFieldProps extends CSFormFieldCommonProps {
	type: 'TOGGLE';
	value?: boolean;
}

/** Only standard form fields types */
export type CSFormStandardFields = CSFormCheckboxFieldProps
	| CSFormPicklistFieldProps
	| CSFormDateFieldProps
	| CSFormDateTimeFieldProps
	| CSFormNumberFieldProps
	| CSFormRadioFieldProps
	| CSFormLookupFieldProps
	| CSFormTextFieldProps
	| CSFormTextareaFieldProps
	| CSFormToggleFieldProps;

type CSFormFields = CSFormStandardFields | CSFormBufferFieldProps | CSFormCustomFieldProps | CSFormCustomModalFieldProps;

/** CSFormField props type */
export type CSFormFieldProps = CSFormFieldLayoutProps & CSFormFields;

/** Props per field defined in data prop. onClick, onChange, onBlur, onKeyDown and locale are excluded since they are defined on top of the whole CSForm */
export type CSFormFieldData = CSFormFieldLayoutProps & (ExcludeCommonHelper<CSFormStandardFields, 'onClick' | 'onChange' | 'onBlur' | 'onKeyDown' | 'locale'> | CSFormCustomFieldProps | CSFormCustomModalFieldProps | CSFormBufferFieldProps)

/** Props used for form definition only, values for each field are excluded. */
export type CSFormFieldDefinition = CSFormFieldLayoutProps & (ExcludeCommonHelper<CSFormStandardFields, 'onClick' | 'onChange' | 'onBlur' | 'onKeyDown' | 'locale' | 'value'> | CSFormCustomFieldProps | CSFormCustomModalFieldProps| CSFormBufferFieldProps);
