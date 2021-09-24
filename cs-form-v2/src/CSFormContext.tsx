import React, { createContext, useContext, PropsWithChildren } from 'react';
import { CSFormProps } from './types/cs-form-types';
import getFieldData from './utils/cs-form-field-util';
import validateField from './utils/cs-form-validator-util';

export type CSFormContextInterface = Pick<CSFormProps, 'mode' | 'columnNumber' | 'locale' | 'errorLabels'> & {
	handleOnChange: (sectionKey: string, fieldName: string, newValue: string) => void,
	handleOnBlur: (sectionKey: string, fieldName: string, newValue: string) => void,
}
export const CSFormContext = createContext<CSFormContextInterface>({
	columnNumber: null,
	errorLabels: {},
	locale: {},
	mode: null,
	handleOnBlur: () => { },
	handleOnChange: () => { },
});

export const CSFormProvider = ({ children, columnNumber, errorLabels, locale, mode, data, onBlur, onChange }: PropsWithChildren<CSFormProps>) => {
	const handleFieldChange = (sectionKey: string, fieldName: string, newValue: any) => {
		const fieldToValidate: any = getFieldData(data, sectionKey, fieldName);
		const errorMessage = validateField(fieldToValidate, newValue, errorLabels);
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

	const handleOnChange = (sectionKey: string, fieldName: string, newValue: any) => {
		const newData = handleFieldChange(sectionKey, fieldName, newValue);
		onChange?.(newData);
	};

	const handleOnBlur = (sectionKey: string, fieldName: string, newValue: any) => {
		const newData = handleFieldChange(sectionKey, fieldName, newValue);
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
