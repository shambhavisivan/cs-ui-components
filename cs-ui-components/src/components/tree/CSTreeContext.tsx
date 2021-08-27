import React, { createContext, useContext } from 'react';
import { CSTreeItemWithMetaInterface } from './CSTree';

export interface CSTreeProviderProps {
	children: React.ReactElement;
	activeKey?: React.ReactText;
	indeterminateKeys?: Set<React.ReactText>;
	onItemClick?: (event: React.MouseEvent<HTMLLIElement>, item: CSTreeItemWithMetaInterface) => void;
	onSelectChange?: (event: React.ChangeEvent<HTMLInputElement>, item: CSTreeItemWithMetaInterface) => void;
	readOnlyKeys?: Set<React.ReactText>;
	selectedKeys?: Set<React.ReactText>;
	treeCollapsible?: boolean;
	treeDefaultCollapsed?: boolean;
	treeDisplayActionsOnHover?: boolean;
	treeSelectable?: boolean;
}

export const CSTreeContext = createContext<Omit<CSTreeProviderProps, 'children'>>({});

export const CSTreeProvider = ({ children, ...rest }: CSTreeProviderProps) => (
	<CSTreeContext.Provider value={rest}>
		{children}
	</CSTreeContext.Provider>
);

export const useCSTree = () => useContext(CSTreeContext);
