import React, { createContext, useState, useContext } from 'react';
import { CSTreeItemInterface } from './CSTree';

export interface CSTreeProviderProps {
	children: React.ReactElement;
	onItemClick?: (item: CSTreeItemInterface) => void;
	onSelectChange?: (item: CSTreeItemInterface) => void;
	treeCollapsible?: boolean;
	treeDefaultCollapsed?: boolean;
	treeDisplayActionsOnHover?: boolean;
	treeSelectable?: boolean;
}

export interface CSTreeContextInterface {
	activeItem: React.ReactText;
	setActiveItem: (key: React.ReactText) => void;
	toggleActiveItem: (key: React.ReactText) => void;
	checkedItems: { [key: string]: true },
	checkedItemsArray: Array<string>,
	addCheckedItem: (key: React.ReactText) => void;
	removeCheckedItem: (key: React.ReactText) => void;
	toggleCheckedItem: (key: React.ReactText) => void;
	indeterminateItems: { [key: string]: true },
	indeterminateItemsArray: Array<string>,
	addIndeterminateItem: (key: React.ReactText) => void;
	removeIndeterminateItem: (key: React.ReactText) => void;
	toggleIndeterminateItem: (key: React.ReactText) => void;
	readOnlyItems: { [key: string]: true },
	readOnlyItemsArray: Array<string>,
	addReadOnlyItem: (key: React.ReactText) => void;
	removeReadOnlyItem: (key: React.ReactText) => void;
	toggleReadOnlyItem: (key: React.ReactText) => void;
	onSelectChange?: (item: CSTreeItemInterface) => void;
	onItemClick?: (item: CSTreeItemInterface) => void;
	treeCollapsible?: boolean;
	treeDefaultCollapsed?: boolean;
	treeDisplayActionsOnHover?: boolean;
	treeSelectable?: boolean;
}

export const CSTreeContext = createContext<CSTreeContextInterface>({
	activeItem: null,
	setActiveItem: () => {},
	toggleActiveItem: () => {},
	checkedItems: {},
	checkedItemsArray: [],
	addCheckedItem: () => {},
	removeCheckedItem: () => {},
	toggleCheckedItem: () => {},
	indeterminateItems: {},
	indeterminateItemsArray: [],
	addIndeterminateItem: () => {},
	removeIndeterminateItem: () => {},
	toggleIndeterminateItem: () => {},
	readOnlyItems: {},
	readOnlyItemsArray: [],
	addReadOnlyItem: () => {},
	removeReadOnlyItem: () => {},
	toggleReadOnlyItem: () => {},
});

export const CSTreeProvider = ({ children, ...rest }: CSTreeProviderProps) => {
	const [activeItem, setActiveItem] = useState<React.ReactText>(null);
	const [checkedItems, setCheckedItems] = useState<{ [key: string]: true }>({});
	const [indeterminateItems, setIndeterminateItems] = useState<{ [key: string]: true }>({});
	const [readOnlyItems, setReadOnlyItems] = useState<{ [key: string]: true }>({});

	const toggleActiveItem = (key: React.ReactText) => setActiveItem((prevKey) => {
		if (prevKey === key) return null;
		return key;
	});

	const addCheckedItem = (key: React.ReactText) => setCheckedItems((prevCheckedItems) => ({
		...prevCheckedItems,
		[key]: true,
	}));

	const removeCheckedItem = (key: React.ReactText) => setCheckedItems((prevCheckedItems) => ({
		...prevCheckedItems,
		[key]: undefined,
	}));

	const toggleCheckedItem = (key: React.ReactText) => setCheckedItems((prevCheckedItems) => ({
		...prevCheckedItems,
		[key]: prevCheckedItems[key] === undefined || (prevCheckedItems[key] === true && undefined),
	}));

	const checkedItemsArray = Object.keys(checkedItems).filter((key: string) => checkedItems[key] === true);

	const addIndeterminateItem = (key: React.ReactText) => setIndeterminateItems((prevIndeterminateItems) => ({
		...prevIndeterminateItems,
		[key]: true,
	}));

	const removeIndeterminateItem = (key: React.ReactText) => setIndeterminateItems((prevIndeterminateItems) => ({
		...prevIndeterminateItems,
		[key]: undefined,
	}));

	const toggleIndeterminateItem = (key: React.ReactText) => setIndeterminateItems((prevIndeterminateItems) => ({
		...prevIndeterminateItems,
		[key]: prevIndeterminateItems[key] === undefined ? true : undefined,
	}));

	const indeterminateItemsArray = Object.keys(indeterminateItems).filter((key: string) => indeterminateItems[key] === true);

	const addReadOnlyItem = (key: React.ReactText) => setReadOnlyItems((prevReadOnlyItems) => ({
		...prevReadOnlyItems,
		[key]: true,
	}));

	const removeReadOnlyItem = (key: React.ReactText) => setReadOnlyItems((prevReadOnlyItems) => ({
		...prevReadOnlyItems,
		[key]: undefined,
	}));

	const toggleReadOnlyItem = (key: React.ReactText) => setReadOnlyItems((prevReadOnlyItems) => ({
		...prevReadOnlyItems,
		[key]: prevReadOnlyItems[key] === undefined ? true : undefined,
	}));

	const readOnlyItemsArray = Object.keys(readOnlyItems).filter((key: string) => readOnlyItems[key] === true);

	return (
		<CSTreeContext.Provider
			value={{
				activeItem,
				setActiveItem,
				toggleActiveItem,
				checkedItems,
				checkedItemsArray,
				addCheckedItem,
				removeCheckedItem,
				toggleCheckedItem,
				indeterminateItems,
				indeterminateItemsArray,
				addIndeterminateItem,
				removeIndeterminateItem,
				toggleIndeterminateItem,
				readOnlyItems,
				readOnlyItemsArray,
				addReadOnlyItem,
				removeReadOnlyItem,
				toggleReadOnlyItem,
				...rest,
			}}
		>
			{children}
		</CSTreeContext.Provider>
	);
};

export const useCSTree = () => useContext(CSTreeContext);
