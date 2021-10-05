import React, { createContext, useContext, PropsWithChildren } from 'react';
import { CSFormFieldData } from './types/cs-form-field-types';
import { CSFormProps } from './types/cs-form-types';
import { validateField } from './utils/cs-form-validator-util';

export type CSFormContextInterface = Pick<CSFormProps, 'mode' | 'columnNumber' | 'locale' | 'errorLabels'> & {
	handleOnChange: (sectionKey: string, field: CSFormFieldData, newValue: string) => void,
	handleOnBlur: (sectionKey: string, field: CSFormFieldData, newValue: string) => void,
}
export const CSFormContext = createContext<CSFormContextInterface>({
	columnNumber: null,
	errorLabels: {},
	locale: {},
	mode: null,
	handleOnBlur: () => { },
	handleOnChange: () => { },
});

export const CSFormProvider = ({ children, columnNumber, errorLabels, locale, mode, onBlur, onChange }: PropsWithChildren<CSFormProps>) => {
	const handleFieldChange = (sectionKey: string, field: CSFormFieldData, newValue: any) => {
		const errorMessage = validateField(field, newValue, errorLabels);
		const fieldName = field.name;
		if (errorMessage) {
			return {
				sectionKey,
				fieldName,
				value: newValue,
				errorMessage,
			};
		}

		return {
			sectionKey,
			fieldName,
			value: newValue,
		};
	};

	const handleOnChange = (sectionKey: string, field: CSFormFieldData, newValue: any) => {
		const newData = handleFieldChange(sectionKey, field, newValue);
		onChange?.(newData);
	};

	const handleOnBlur = (sectionKey: string, field: CSFormFieldData, newValue: any) => {
		const newData = handleFieldChange(sectionKey, field, newValue);
		onBlur?.(newData);
	};

	return (
		<CSFormContext.Provider
			value={{
				columnNumber,
				locale,
				mode,
				handleOnBlur,
				handleOnChange,
				errorLabels,
			}}
		>
			{children}
		</CSFormContext.Provider>

	);
};

export const useCSForm = () => useContext(CSFormContext);
