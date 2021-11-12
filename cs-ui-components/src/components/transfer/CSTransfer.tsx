import React, { useState, useMemo, useRef } from 'react';
import classNames from 'classnames';
import CSButton from '../CSButton';
import CSTransferList, { CSTransferListType } from './CSTransferList';
import { CSTransferContextProvider } from './CSTransferContext';
import KeyCode from '../../util/KeyCode';

export interface CSTransferItemInterface {
	key: React.ReactText;
	label: string;
}

export interface CSTransferHelpText {
	source?: string;
	target?: string;
}

export type CSTransferVariant = 'simple-list' | 'check-list';

export interface CSTransferProps {
	[key: string]: any;
	className?: string;
	helpText?: CSTransferHelpText;
	id?: string;
	items: Array<CSTransferItemInterface>;
	onTransfer?: (key: Array<React.ReactText> | React.ReactText) => void;
	oneWay?: boolean;
	searchable?: boolean;
	selectAll?: boolean;
	sourceLabel: string;
	targetKeys?: Array<React.ReactText>;
	targetLabel: string;
	variant?: CSTransferVariant;
}

const CSTransfer = ({
	className,
	helpText,
	id,
	items,
	onTransfer,
	oneWay,
	searchable,
	selectAll,
	sourceLabel,
	targetKeys,
	targetLabel,
	variant = 'simple-list',
	...rest
}: CSTransferProps) => {
	const [selected, setSelected] = useState({ source: [], target: [] });
	const sourceListRef = useRef(null);
	const targetListRef = useRef(null);
	const transferButtonsRef = useRef(null);

	const listItemElement = variant === 'simple-list' ? 'button' : 'input[type=checkbox]';

	const transferItems = useMemo(() => ({
		source: items.filter((item) => !targetKeys?.includes(item.key)),
		target: items.filter((item) => targetKeys?.includes(item.key)),
	}), [targetKeys]);

	const onSelectChange = (event: any,
		key: React.ReactText,
		keysList: Array<React.ReactText>,
		listType: CSTransferListType) => {
		let newKeysList: Array<React.ReactText> = [...keysList];

		if (newKeysList.includes(key)) {
			if (!(event.ctrlKey || event.metaKey) && variant === 'simple-list') {
				newKeysList = [key];
			} else {
				newKeysList = newKeysList.filter((itemKey) => itemKey !== key);
			}
		} else if (variant === 'check-list'
			|| ((event.ctrlKey || event.metaKey) && variant === 'simple-list')) {
			newKeysList.push(key);
		} else if (variant === 'simple-list') {
			newKeysList = [key];
		}
		setSelected((prevState) => ({ ...prevState, [listType]: newKeysList }));
	};

	const selectAllItems = (itemsList: Array<CSTransferItemInterface>, selectList: Array<React.ReactText>, listType: CSTransferListType) => {
		const itemKeys = itemsList.map(({ key }) => key);
		const selectedKeysList = itemKeys.length === selectList.length ? [] : itemKeys;
		setSelected((prevState) => ({ ...prevState, [listType]: selectedKeysList }));
	};

	const handleOnTransfer = (listType: CSTransferListType) => {
		const selectedListKeys = selected[listType];
		onTransfer?.(selectedListKeys.length > 1 ? selectedListKeys : selectedListKeys[0]);
		setSelected((prevState) => ({ ...prevState, [listType]: [] }));
	};

	const handleActionsKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		switch (event.key) {
		case KeyCode.ArrowRight:
			if (!transferItems.target.length) {
				break;
			}
			(targetListRef.current?.querySelector(listItemElement) as HTMLElement)?.focus();
			break;
		case KeyCode.ArrowLeft:
			if (!transferItems.source.length) {
				break;
			}
			(sourceListRef.current?.querySelector(listItemElement) as HTMLElement)?.focus();
			break;
		case KeyCode.ArrowDown:
			event.preventDefault();
			switch (true) {
			case document.activeElement === transferButtonsRef.current?.lastChild:
				transferButtonsRef.current?.firstChild?.focus();
				break;
			default:
				transferButtonsRef.current?.lastChild?.focus();
				break;
			}
			break;
		case KeyCode.ArrowUp:
			event.preventDefault();
			switch (true) {
			case document.activeElement === transferButtonsRef.current?.firstChild:
				transferButtonsRef.current?.lastElementChild?.focus();
				break;
			default:
				transferButtonsRef.current?.firstChild?.focus();
				break;
			}
			break;
		default:
		}
	};

	const transferWrapperClasses = classNames(
		'cs-transfer-wrapper',
		{
			[`${className}`]: className,
		},
	);

	return (
		<CSTransferContextProvider
			onTransfer={onTransfer}
			oneWay={oneWay}
			onSelectChange={onSelectChange}
			selectAllItems={selectAllItems}
		>
			<div className={transferWrapperClasses} id={id} {...rest}>
				<CSTransferList
					listRef={sourceListRef}
					listType="source"
					label={sourceLabel}
					variant={variant}
					listItems={transferItems.source}
					selectList={selected.source}
					selectAll={selectAll}
					searchable={searchable}
					helpText={helpText?.source}
					transferButtonsRef={transferButtonsRef}
				/>
				<div
					className="cs-transfer-actions"
					ref={transferButtonsRef}
				>
					<CSButton
						label={`Move selection to ${targetLabel}`}
						iconName="chevronright"
						labelHidden
						disabled={!selected.source.length}
						onClick={() => handleOnTransfer('source')}
						onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) => handleActionsKeyDown(event)}
					/>
					{!oneWay
						&& (
							<CSButton
								label={`Move selection to ${sourceLabel}`}
								iconName="chevronleft"
								labelHidden
								disabled={!selected.target.length}
								onClick={() => handleOnTransfer('target')}
								onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) => handleActionsKeyDown(event)}
							/>
						)}
				</div>
				<CSTransferList
					listRef={targetListRef}
					listType="target"
					label={targetLabel}
					variant={variant}
					listItems={transferItems.target}
					selectList={selected.target}
					selectAll={selectAll}
					searchable={searchable}
					helpText={helpText?.target}
					transferButtonsRef={transferButtonsRef}
				/>
			</div>

		</CSTransferContextProvider>
	);
};

export default CSTransfer;
