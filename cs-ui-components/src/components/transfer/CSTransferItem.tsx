import React from 'react';
import CSCheckbox from '../CSCheckbox';
import CSButton from '../CSButton';
import classNames from 'classnames';
import { CSTransferVariant } from './CSTransfer';
import CSTransferContext from './CSTransferContext';
import { CSTransferListType } from './CSTransferList';
import KeyCode from '../../util/KeyCode';

export interface CSTransferItemProps {
	disabled?: boolean;
	itemKey: string;
	itemVariant: CSTransferVariant;
	listType?: CSTransferListType;
	name?: string;
	onSelect?: (event: any) => any;
	selected?: boolean;
}

class CSTransferItem extends React.Component<CSTransferItemProps> {

	static contextType = CSTransferContext;
	private listItemNode: HTMLLIElement;
	private listNodes: any;
	private actionButtons: HTMLUListElement;

	componentDidMount() {
		this.actionButtons = this.context.actionButtonsNode;
		this.listNodes = this.listItemNode.parentElement.childNodes;
	}

	handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		const { listType, itemVariant } = this.props;
		const { oneWay } = this.context;
		const isOneWay = listType === 'target' && oneWay;
		const lastElementIndex = this.listNodes.length - 1;
		const element = itemVariant === 'simple-list' || (isOneWay)
			? 'button' :
			'input[type=checkbox]';
		switch (true) {
			case event.key === KeyCode.ArrowDown:
				event.preventDefault();
				switch (true) {
					case document.activeElement === this.listNodes[lastElementIndex].querySelector(element):
						(this.listNodes[0].querySelector(element) as HTMLElement).focus();
						break;
					default:
						(this.listItemNode.nextElementSibling.querySelector(element) as HTMLElement).focus();
						break;
				}
				break;
			case event.key === KeyCode.ArrowUp:
				event.preventDefault();
				switch (true) {
					case document.activeElement === this.listNodes[0].querySelector(element):
						(this.listNodes[lastElementIndex].querySelector(element) as HTMLElement).focus();
						break;
					default:
						(this.listItemNode.previousElementSibling.querySelector(element) as HTMLElement).focus();
						break;
				}
				break;
			case event.key === KeyCode.ArrowRight && listType === 'source':
				(this.actionButtons.firstChild as HTMLElement).focus();
				break;
			case event.key === KeyCode.ArrowLeft && listType === 'target':
				(this.actionButtons.lastChild as HTMLElement).focus();
				break;
			default:
				return;
		}
	}

	render() {
		const { name, itemKey, itemVariant, onSelect, selected, disabled, listType } = this.props;
		const { oneWay, moveToSource } = this.context;
		const isOneWay = listType === 'target' && oneWay;

		const transferLIClasses = classNames(
			'cs-transfer-li',
			{
				'cs-transfer-li-selected': selected,
				'cs-transfer-li-simple': itemVariant === 'simple-list',
				'cs-transfer-li-disabled': disabled,
				'cs-transfer-li-one-way': this.context.oneWay && listType === 'target',
				'cs-transfer-li-check-list': itemVariant === 'check-list'
			}
		);

		// Transfer list title
		const transferListTitle = <span className="cs-transfer-li-title">{name ? name : itemKey}</span>;

		// Renders if list variant is set to simple-list
		const simpleList = itemVariant === 'simple-list' && !isOneWay ?
			<button
				className={transferLIClasses}
				onClick={onSelect}
				onKeyDown={this.handleKeyDown}
				disabled={disabled}
				role="option"
				aria-selected={selected}
			>
				{transferListTitle}
			</button> :
			null;

		// Renders if list variant is set to check-list
		const checkList = itemVariant === 'check-list' ?
			<label className="cs-transfer-li-label">
				<CSCheckbox
					label="select item"
					labelHidden
					variant="brand"
					onChange={onSelect}
					disabled={disabled}
					checked={selected}
					onKeyDown={this.handleKeyDown}
				/>
				{transferListTitle}
			</label> :
			null;

		// Renders if oneWay prop is set to true
		const oneWayList = itemVariant === 'simple-list' && isOneWay && listType === 'target' ?
			<>
				{transferListTitle}
				<CSButton
					btnStyle="brand"
					btnType="transparent"
					iconDisplay="icon-only"
					iconName="delete"
					label="remove item"
					size="xsmall"
					onClick={() => moveToSource(itemKey)}
					onKeyDown={this.handleKeyDown}
				/>
			</> :
			null;

		return (
			<li
				role="option"
				ref={node => this.listItemNode = node}
				className={itemVariant === 'check-list' || isOneWay ? transferLIClasses : undefined}
			>
				{simpleList}
				{checkList}
				{oneWayList}
			</li>
		);
	}
}

export default CSTransferItem;
