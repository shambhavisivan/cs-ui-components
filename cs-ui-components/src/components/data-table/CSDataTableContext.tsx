import React, { createContext, useContext } from 'react';
import {
	CSDataTableColumnInterface,
	CSDataTableElement,
	CSDataTableRowWithMetaInterface,
	CSDataTableSelectionType,
} from './CSDataTable';

export interface CSDataTableProviderProps {
	children: React.ReactElement;
	columns: Array<CSDataTableColumnInterface>;
	indeterminateKeys?: Set<React.ReactText>;
	onCollapseClick?: (event: React.MouseEvent<HTMLButtonElement>, row: CSDataTableRowWithMetaInterface) => void;
	onSelectChange?: (event: React.ChangeEvent<HTMLInputElement>, row: CSDataTableRowWithMetaInterface) => void;
	subsectionRender?: (row: CSDataTableRowWithMetaInterface) => CSDataTableElement;
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
