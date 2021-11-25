import React from 'react';
import classNames from 'classnames';
import CSCheckbox from '../CSCheckbox';
import CSButton from '../CSButton';
import { CSTransferVariant } from './CSTransfer';
import { CSTransferListType } from './CSTransferList';
import { useCSTransfer } from './CSTransferContext';

export interface CSTransferItemProps {
	disabled?: boolean;
	itemKey: React.ReactText;
	itemVariant: CSTransferVariant;
	listType?: CSTransferListType;
	label: string;
	onSelect?: (event: any) => any;
	selected?: boolean;
}

const CSTransferItem = ({
	disabled,
	itemKey,
	itemVariant,
	listType,
	label,
	onSelect,
	selected,
}: CSTransferItemProps) => {
	const {
		oneWay,
		onTransfer,
	} = useCSTransfer();

	const transferLIClasses = classNames(
		'cs-transfer-li',
		{
			'cs-transfer-li-selected': selected,
			'cs-transfer-li-simple': itemVariant === 'simple-list',
			'cs-transfer-li-disabled': disabled,
			'cs-transfer-li-one-way': oneWay && listType === 'target',
			'cs-transfer-li-check-list': itemVariant === 'check-list',
		},
	);

	const isOneWay = listType === 'target' && oneWay;

	// Transfer list title
	const transferListLabel = <span className="cs-transfer-li-title">{label}</span>;

	// Renders if list variant is set to simple-list
	const simpleList = itemVariant === 'simple-list' && !isOneWay
		? (
			<button
				type="button"
				className={transferLIClasses}
				onClick={onSelect}
				disabled={disabled}
				role="option"
				aria-selected={selected}
			>
				{transferListLabel}
			</button>
		)
		: null;

	// Renders if list variant is set to check-list
	const checkList = itemVariant === 'check-list'
		? (
			<label className="cs-transfer-li-label">
				<CSCheckbox
					label="select item"
					labelHidden
					variant="brand"
					onChange={onSelect}
					disabled={disabled}
					checked={selected}
				/>
				{transferListLabel}
			</label>
		)
		: null;

	// Renders if oneWay prop is set to true
	const oneWayList = itemVariant === 'simple-list' && isOneWay && listType === 'target'
		? (
			<>
				{transferListLabel}
				<CSButton
					btnStyle="brand"
					btnType="transparent"
					labelHidden
					iconName="delete"
					label="remove item"
					size="xsmall"
					onClick={() => onTransfer?.(itemKey)}
				/>
			</>
		)
		: null;
	return (
		<li className={itemVariant === 'check-list' || isOneWay ? transferLIClasses : undefined}>
			{simpleList}
			{checkList}
			{oneWayList}
		</li>
	);
};

export default CSTransferItem;
