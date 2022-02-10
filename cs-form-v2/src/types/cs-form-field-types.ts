/* eslint-disable import/no-unresolved */
import { CSButtonProps as CSFormModalButton } from '@cloudsense/cs-ui-components/dist/cs-ui-components/src/components/CSButton';
import { CSModalHeaderProps } from '@cloudsense/cs-ui-components/dist/cs-ui-components/src/components/modal/CSModalHeader';
import { CSModalBodyProps } from '@cloudsense/cs-ui-components/dist/cs-ui-components/src/components/modal/CSModalBody';
import { CSModalFooterProps } from '@cloudsense/cs-ui-components/dist/cs-ui-components/src/components/modal/CSModalFooter';
import React from 'react';
import { CSModalProps } from '@cloudsense/cs-ui-components/dist/cs-ui-components/src/components/modal/CSModal';
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
	readOnly?: boolean;
	required?: boolean;
	styleClass?: string;
	title?: string;
	value?: any;
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
}

/** DATE FIELD */
export interface CSFormDateFieldProps extends CSFormFieldCommonProps {
	dateFormat?: string;
	fieldType: 'DATE';
	locale?: any;
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
}

/** RADIO FIELD */
export interface CSFormRadioOption extends Pick<CSFormFieldCommonProps,
	'readOnly' |
	'disabled' |
	'title'> {
	label: string;
	radioOptionValue: string;
}

export interface CSFormRadioFieldProps extends Pick<CSFormFieldCommonProps,
	'error' |
	'errorMessage' |
	'disabled' |
	'helpText' |
	'label' |
	'name' |
	'onBlur' |
	'onChange' |
	'readOnly' |
	'required' |
	'styleClass' |
	'value'
> {
	fieldType: 'RADIO';
	radioOptions: Array<CSFormRadioOption>;
}

/** SELECT FIELD */
export interface CSFormSelectOption {
	key: React.ReactText;
	value: string;
}

export interface CSFormSelectFieldProps extends CSFormFieldCommonProps {
	fieldType: 'SELECT';
	selectOptions: Array<CSFormSelectOption>;
}

/** TEXT FIELD */
export interface CSFormTextFieldProps extends CSFormFieldCommonProps {
	fieldType: 'TEXT';
	maxLength?: number;
}

/** TEXTAREA FIELD */
export interface CSFormTextareaFieldProps extends CSFormFieldCommonProps {
	fieldType: 'TEXTAREA';
	maxHeight?: string;
	rows?: number;
}

/** TOGGLE FIELD */
export interface CSFormToggleFieldProps extends CSFormFieldCommonProps {
	fieldType: 'TOGGLE';
}

type CSFormStandardFields = CSFormCheckboxFieldProps
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

/** Props per field defined in data prop. onChange, onBlur and locale are excluded since they are defined on top of the whole CSForm */
export type CSFormFieldData = CSFormFieldLayoutProps & (ExcludeCommonHelper<CSFormStandardFields, 'onChange' | 'onBlur' | 'locale'> | CSFormCustomFieldProps | CSFormCustomModalFieldProps)

/** Props used for form definition only, values for each field are excluded. */
export type CSFormFieldDefinition = CSFormFieldLayoutProps & (ExcludeCommonHelper<CSFormStandardFields, 'onChange' | 'onBlur' | 'locale' | 'value'> | CSFormCustomFieldProps | CSFormCustomModalFieldProps);
