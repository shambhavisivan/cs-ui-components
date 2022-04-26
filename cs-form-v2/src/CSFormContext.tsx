import React, { createContext, useContext, PropsWithChildren } from 'react';
import { CSFormBufferFieldProps, CSFormCustomFieldProps, CSFormCustomModalFieldProps, CSFormFieldData } from './types/cs-form-field-types';
import { CSFormProps } from './types/cs-form-types';
import { validateField } from './utils/cs-form-validator-util';

export type CSFormContextInterface = Pick<CSFormProps, 'data' | 'mode' | 'columnNumber' | 'locale' | 'errorLabels'> & {
	handleFieldBlur: (sectionKey: React.ReactText, field: CSFormFieldData, newValue: string) => void,
	handleFieldChange: (sectionKey: React.ReactText, field: CSFormFieldData, newValue: string) => void,
	handleFieldClick: (field: CSFormFieldData) => void;
	handleFieldFocus: (sectionKey: React.ReactText, field: CSFormFieldData, newValue: string) => void,
	handleFieldKeyDown: (field: CSFormFieldData, event: React.KeyboardEvent<HTMLElement>) => void;
}
export const CSFormContext = createContext<CSFormContextInterface>({
	columnNumber: null,
	data: null,
	errorLabels: {},
	locale: {},
	mode: null,
	handleFieldBlur: () => { },
	handleFieldChange: () => { },
	handleFieldClick: () => { },
	handleFieldFocus: () => { },
	handleFieldKeyDown: () => { },
});

export const CSFormProvider = ({
	children,
	columnNumber,
	data,
	errorLabels,
	locale,
	mode,
	onFieldBlur,
	onFieldChange,
	onFieldClick,
	onFieldFocus,
	onFieldKeyDown,
}: PropsWithChildren<CSFormProps>) => {
	/*
		Field events are handled only on standard form fields.
		Custom, custom modal and buffer field aren't standard form fields, so CSFormCustomFieldProps, CSFormCustomModalFieldProps
		and CSFormBufferFieldProps interfaces need to be excluded from CSFormFieldData since they don't contain name property.
	*/
	const handleFieldEvent = (sectionKey: React.ReactText,
		field: Exclude<CSFormFieldData,
			CSFormCustomModalFieldProps |
			CSFormCustomFieldProps |
			CSFormBufferFieldProps>,
		newValue: any) => {
		const errorMessage = validateField(field, newValue, errorLabels);
		const { name } = field;
		if (errorMessage) {
			return {
				sectionKey,
				name,
				value: newValue,
				errorMessage,
			};
		}

		return {
			sectionKey,
			name,
			value: newValue,
		};
	};

	const handleFieldChange = (sectionKey: React.ReactText,
		field: Exclude<CSFormFieldData,
			CSFormCustomModalFieldProps |
			CSFormCustomFieldProps |
			CSFormBufferFieldProps>,
		newValue: any) => {
		const newData = handleFieldEvent(sectionKey, field, newValue);
		onFieldChange?.(newData);
	};

	const handleFieldBlur = (
		sectionKey: React.ReactText,
		field: Exclude<CSFormFieldData,
			CSFormCustomModalFieldProps |
			CSFormCustomFieldProps |
			CSFormBufferFieldProps>,
		newValue: any,
	) => {
		const newData = handleFieldEvent(sectionKey, field, newValue);
		onFieldBlur?.(newData);
	};

	const handleFieldFocus = (
		sectionKey: React.ReactText,
		field: Exclude<CSFormFieldData,
			CSFormCustomModalFieldProps |
			CSFormCustomFieldProps |
			CSFormBufferFieldProps>,
		newValue: any,
	) => {
		const newData = handleFieldEvent(sectionKey, field, newValue);
		onFieldFocus?.(newData);
	};

	const handleFieldClick = (field: CSFormFieldData) => {
		onFieldClick?.(field);
	};

	const handleFieldKeyDown = (field: CSFormFieldData, event: React.KeyboardEvent<HTMLElement>) => {
		onFieldKeyDown?.(field, event);
	};

	return (
		<CSFormContext.Provider
			value={{
				columnNumber,
				data,
				locale,
				mode,
				handleFieldBlur,
				handleFieldChange,
				handleFieldClick,
				handleFieldFocus,
				handleFieldKeyDown,
				errorLabels,
			}}
		>
			{children}
		</CSFormContext.Provider>

	);
};

export const useCSForm = () => useContext(CSFormContext);
