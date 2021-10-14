import React, { createContext, useContext, PropsWithChildren } from 'react';
import { CSFormFieldData } from './types/cs-form-field-types';
import { CSFormProps } from './types/cs-form-types';
import { validateField } from './utils/cs-form-validator-util';

export type CSFormContextInterface = Pick<CSFormProps, 'mode' | 'columnNumber' | 'locale' | 'errorLabels'> & {
	handleFieldChange: (sectionKey: string, field: CSFormFieldData, newValue: string) => void,
	handleFieldBlur: (sectionKey: string, field: CSFormFieldData, newValue: string) => void,
}
export const CSFormContext = createContext<CSFormContextInterface>({
	columnNumber: null,
	errorLabels: {},
	locale: {},
	mode: null,
	handleFieldBlur: () => { },
	handleFieldChange: () => { },
});

export const CSFormProvider = ({ children, columnNumber, errorLabels, locale, mode, onFieldBlur, onFieldChange }: PropsWithChildren<CSFormProps>) => {
	const handleFieldEvent = (sectionKey: string, field: CSFormFieldData, newValue: any) => {
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

	const handleFieldChange = (sectionKey: string, field: CSFormFieldData, newValue: any) => {
		const newData = handleFieldEvent(sectionKey, field, newValue);
		onFieldChange?.(newData);
	};

	const handleFieldBlur = (sectionKey: string, field: CSFormFieldData, newValue: any) => {
		const newData = handleFieldEvent(sectionKey, field, newValue);
		onFieldBlur?.(newData);
	};

	return (
		<CSFormContext.Provider
			value={{
				columnNumber,
				locale,
				mode,
				handleFieldBlur,
				handleFieldChange,
				errorLabels,
			}}
		>
			{children}
		</CSFormContext.Provider>

	);
};

export const useCSForm = () => useContext(CSFormContext);
