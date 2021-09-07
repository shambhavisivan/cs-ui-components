import React, { createContext, useContext, PropsWithChildren } from 'react';
import { CSFormProps } from './types/cs-form-types';

export type CSFormContextProps = Pick<CSFormProps, 'mode' | 'columnNumber'>;

export const CSFormContext = createContext<CSFormContextProps>({
	mode: null,
	columnNumber: null,
});

export const CSFormProvider = ({ children, columnNumber, mode }: PropsWithChildren<CSFormContextProps>) => (
	<CSFormContext.Provider value={{ columnNumber, mode }}>
		{children}
	</CSFormContext.Provider>
);

export const useCSForm = () => useContext(CSFormContext);
