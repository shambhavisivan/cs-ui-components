import React, {
	RefObject,
	useImperativeHandle,
	useRef,
	useState,
	useEffect,
	ForwardedRef,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import CSCheckbox from '../CSCheckbox';
import CSLabel from '../CSLabel';
import CSIcon from '../CSIcon';
import CSInputSearch from '../CSInputSearch';
import CSTransferItem from './CSTransferItem';
import { useCSTransfer } from './CSTransferContext';
import { CSTransferVariant, CSTransferItemInterface } from './CSTransfer';
import KeyCode from '../../util/KeyCode';

export type CSTransferListType = 'source' | 'target';

export interface CSTransferListProps {
	helpText?: string;
	label: string;
	listItems: Array<CSTransferItemInterface>;
	listRef?: ForwardedRef<HTMLUListElement>;
	listType: CSTransferListType;
	searchable?: boolean;
	selectAll?: boolean;
	selectedKeys?: Array<React.ReactText>;
	transferButtonsRef?: RefObject<any>;
	variant: CSTransferVariant;
}

const CSTransferList = ({
	helpText,
	label,
	listItems,
	listRef,
	listType,
	searchable,
	selectAll,
	selectedKeys,
	transferButtonsRef,
	variant,
}: CSTransferListProps) => {
	const {
		onSelectChange,
		selectAllItems,
		oneWay,
	} = useCSTransfer();
	const [searchTerm, setSearchTerm] = useState('');
	const transferListRef = useRef<HTMLUListElement>(null);
	const { current: uniqueAutoId } = useRef(uuidv4());
	const listDataLength = useRef(listItems.length);

	useImperativeHandle(listRef, () => transferListRef.current);

	const listItemElement = variant === ('simple-list' || (oneWay && listType === 'target')) ? 'button' : 'input[type=checkbox]';

	useEffect(() => {
		if (listItems.length > listDataLength.current) {
			(transferListRef.current?.querySelector(listItemElement) as HTMLElement)?.focus();
		}
		listDataLength.current = listItems.length;
	}, [listItemElement, listItems]);

	const searchingFor = (term: any) => (item: any) => item.label.toLowerCase().includes(term.toLowerCase());

	const handleTransferButtonsNavigation = (event: React.KeyboardEvent<any>) => {
		if (event.key === KeyCode.ArrowRight && listType === 'source') {
			transferButtonsRef.current?.firstChild?.focus();
		} else if (event.key === KeyCode.ArrowLeft && listType === 'target') {
			transferButtonsRef.current?.lastChild?.focus();
		}
	};

	const handleListKeyDown = (event: React.KeyboardEvent<any>) => {
		const items = Array.from(transferListRef.current?.querySelectorAll(listItemElement) as NodeListOf<HTMLElement>);
		const firstListItem = items[0];
		const lastListItem = items[items.length - 1];
		let index = items.indexOf(document.activeElement as HTMLElement);
		switch (true) {
		case event.key === KeyCode.ArrowDown:
			event.preventDefault();
			switch (true) {
			case document.activeElement === lastListItem:
				firstListItem.focus();
				break;
			default:
				index += 1;
				items[index].focus();
				break;
			}
			break;
		case event.key === KeyCode.ArrowUp:
			event.preventDefault();
			switch (true) {
			case document.activeElement === firstListItem:
				lastListItem.focus();
				break;
			default:
				index -= 1;
				items[index].focus();
				break;
			}
			break;
		default:
		}
		handleTransferButtonsNavigation(event);
	};

	const getNoItemsContent = (message: string) => (
		<li className="cs-transfer-list-no-items">
			<CSIcon
				name="error"
				color="var(--cs-transfer-list-no-items-c)"
				size="1.5rem"
			/>
			<span className="cs-transfer-list-no-items-msg">{`No ${message}`}</span>
		</li>
	);

	const getListContent = () => {
		if (!listItems.length) return getNoItemsContent('items');

		const filteredList = listItems?.filter(searchingFor(searchTerm)).map((item) => (
			<CSTransferItem
				key={item.key}
				itemKey={item.key}
				label={item.label}
					// disabled={items.disabled}
				onSelect={(e: any) => onSelectChange(e, item.key, selectedKeys, listType)}
				itemVariant={variant}
				selected={selectedKeys?.includes(item.key)}
				listType={listType}
			/>
		));

		return filteredList.length ? filteredList : getNoItemsContent('results');
	};

	return (
		<div className="cs-transfer-list-wrapper">
			<CSLabel
				label={label}
				helpText={helpText}
				id={uniqueAutoId}
			/>
			<div className="cs-transfer-list-group">
				{((selectAll && variant === 'check-list')
					|| searchable)
					&& (
						<div className="cs-transfer-list-header">
							{(selectAll && variant === 'check-list')
								&& (
									<CSCheckbox
										label="select all"
										labelHidden
										variant="brand"
										onChange={() => selectAllItems(listItems, selectedKeys, listType)}
										checked={listItems.length === selectedKeys?.length && !!selectedKeys?.length}
										disabled={!listItems.length}
										onKeyDown={handleTransferButtonsNavigation}
									/>
								)}
							{searchable
								&& (
									<CSInputSearch
										label="search list"
										labelHidden
										onChange={(e) => setSearchTerm(e.target.value)}
										disabled={!listItems.length}
									/>
								)}
						</div>
					)}
				<ul
					className="cs-transfer-list"
					ref={transferListRef}
					role="listbox"
					aria-describedby={uniqueAutoId}
					onKeyDown={handleListKeyDown}
				>
					{getListContent()}
				</ul>
			</div>
		</div>
	);
};

const CSTransferWithRef = React.forwardRef<HTMLUListElement, CSTransferListProps>((props: CSTransferListProps, ref) => <CSTransferList {...props} listRef={ref} />);

CSTransferWithRef.displayName = 'CSTransferList';

export default CSTransferList;
