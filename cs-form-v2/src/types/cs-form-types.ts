import React from 'react';
import { CSFormFieldData } from './cs-form-field-types';
import { CSFormSectionProps } from './cs-form-section-types';

export type CSFormMode = 'read-only';
export type CSFormData = Array<CSFormSectionProps>;

export interface CSFormChangedFieldData {
	sectionKey: string;
	name: string;
	value: any;
	errorMessage?: Array<string> | string;
}

export interface CSFormErrorLabels {
	requiredFieldErrLabel?: string;
	maxNumberFieldErrLabel?: string;
	minNumberFieldErrLabel?: string;
}

export type CSFormNumberFiledLocaleStyle = 'decimal' | 'currency' | 'percent' | 'unit';

export interface CSFormNumberFiledLocale {
	numLocale: string;
	options?: {
		currency?: string;
		style?: CSFormNumberFiledLocaleStyle;
		maximumFractionDigits?: number;
		minimumFractionDigits?: number;
	}
}

export interface CSFormLocale {
	dateLocale?: string;
	numberLocale?: CSFormNumberFiledLocale;
}

export interface CSFormProps {
	columnNumber?: number;
	data: CSFormData;
	errorLabels?: CSFormErrorLabels;
	formErrorMessage?: Array<string> | string;
	locale?: CSFormLocale;
	mode?: CSFormMode;
	onFieldBlur?: (newData: CSFormChangedFieldData) => void;
	onFieldChange?: (newData: CSFormChangedFieldData) => void;
	onFieldClick?: (fieldData: CSFormFieldData) => void;
	onFieldKeyDown?: (fieldData: CSFormFieldData, event: React.KeyboardEvent<HTMLElement>) => void;
}
