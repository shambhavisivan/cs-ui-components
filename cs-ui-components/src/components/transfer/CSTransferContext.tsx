import React, { createContext, useContext, PropsWithChildren } from 'react';
import { CSTransferListType } from './CSTransferList';
import { CSTransferItemInterface } from './CSTransfer';

export interface CSTransferContextInterface {
	onSelectChange: (event: any, key: React.ReactText, keysList: Array<React.ReactText>, listType: CSTransferListType) => void;
	onTransfer: (key: React.ReactText | Array<React.ReactText>) => void;
	oneWay?: boolean;
	selectAllItems?: (itemsList: Array<CSTransferItemInterface>, selectList: Array<React.ReactText>, listType: CSTransferListType) => void;
}

export const CSTransferContext = createContext<CSTransferContextInterface>({
	onSelectChange: () => { },
	onTransfer: () => { },
	oneWay: false,
	selectAllItems: () => { },
});

export const CSTransferContextProvider = ({
	children,
	...rest
}: PropsWithChildren<CSTransferContextInterface>) => (
	<CSTransferContext.Provider value={rest}>
		{children}
	</CSTransferContext.Provider>
);

export const useCSTransfer = () => useContext(CSTransferContext);
