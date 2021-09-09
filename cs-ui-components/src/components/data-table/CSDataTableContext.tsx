import React, { createContext, useContext } from 'react';
import {
	CSDataTableColumnInterface,
	CSDataTableRowWithMetaInterface,
	CSDataTableSelectionType,
} from './CSDataTable';

export interface CSDataTableProviderProps {
	children: React.ReactElement;
	columns: Array<CSDataTableColumnInterface>;
	indeterminateKeys?: Set<React.ReactText>;
	onSelectChange?: (event: React.ChangeEvent<HTMLInputElement>, row: CSDataTableRowWithMetaInterface) => void;
	readOnlyKeys?: Set<React.ReactText>;
	selectedKeys?: Set<React.ReactText>;
	dataTableCollapsible?: boolean;
	dataTableDefaultCollapsed?: boolean;
	dataTableSelectable?: boolean;
	dataTableSelectionType?: CSDataTableSelectionType;
}

export const CSDataTableContext = createContext<Omit<CSDataTableProviderProps, 'children'>>({
	columns: [],
});

export const CSDataTableProvider = ({ children, ...rest }: CSDataTableProviderProps) => (
	<CSDataTableContext.Provider value={rest}>
		{children}
	</CSDataTableContext.Provider>
);

export const useCSDataTable = () => useContext(CSDataTableContext);
