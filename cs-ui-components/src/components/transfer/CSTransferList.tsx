import React, { RefObject } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CSCheckbox from '../CSCheckbox';
import CSLabel from '../CSLabel';
import CSIcon from '../CSIcon';
import CSInputSearch from '../CSInputSearch';
import CSTransferItem from './CSTransferItem';
import CSTransferContext from './CSTransferContext';
import { CSTransferVariant, CSTransferItemsType } from './CSTransfer';
import KeyCode from '../../util/KeyCode';

export type CSTransferListType = 'source' | 'target';

export interface CSTransferListProps {
	helpText?: string;
	label?: string;
	listData?: Array<CSTransferItemsType>;
	listType?: CSTransferListType;
	listRef?: RefObject<HTMLUListElement>;
	searchable?: boolean;
	selectAll?: boolean;
	selectList: Array<string>;
	variant?: CSTransferVariant;
}

export interface CSTransferListState {
	term: string;
	validItemsKeys: Array<string>;
}

class CSTransferList extends React.Component<CSTransferListProps, CSTransferListState> {
	static contextType = CSTransferContext;

	static getDerivedStateFromProps(nextProps: CSTransferListProps) {
		const { listData } = nextProps;
		const _validItemsKeys: Array<string> = [];

		listData.forEach((item) => {
			if (!item.disabled) {
				_validItemsKeys.push(item.key);
			}
		});
		return {
			validItemsKeys: _validItemsKeys,
		};
	}

	private uniqueAutoId = uuidv4();

	constructor(props: CSTransferListProps) {
		super(props);

		this.state = {
			term: '',
			validItemsKeys: [],
		};
	}

	searchingFor = (term: any) => (item: any) => item.name.toLowerCase().includes(term.toLowerCase())

	handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const { listType } = this.props;
		const { actionButtonsNode } = this.context;
		switch (true) {
		case event.key === KeyCode.ArrowRight && listType === 'source':
			(actionButtonsNode.firstChild as HTMLElement).focus();
			break;
		case event.key === KeyCode.ArrowLeft && listType === 'target':
			(actionButtonsNode.lastChild as HTMLElement).focus();
			break;
		default:
		}
	}

	render() {
		const {
			helpText,
			label,
			listData,
			listType,
			searchable,
			selectAll,
			selectList,
			variant,
		} = this.props;
		const { term, validItemsKeys } = this.state;
		const { selectItem, selectAllItems } = this.context;
		return (
			<div className="cs-transfer-list-wrapper">
				<CSLabel
					label={label}
					helpText={helpText}
					id={this.uniqueAutoId}
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
										onChange={() => selectAllItems(listData, selectList, listType)}
										checked={validItemsKeys.length === selectList.length && !!selectList.length}
										disabled={!listData.length}
										onKeyDown={this.handleKeyDown}
									/>
								)}
								{searchable
								&& (
									<CSInputSearch
										label="search list"
										labelHidden
										onChange={(e) => this.setState({ term: e.target.value })}
										disabled={!listData.length}
									/>
								)}
							</div>
						)}
					<ul
						className="cs-transfer-list"
						ref={this.props.listRef}
						role="listbox"
						aria-describedby={this.uniqueAutoId}
					>
						{listData.length
							? listData.filter(this.searchingFor(term)).map((item) => (
								<CSTransferItem
									key={item.key}
									itemKey={item.key}
									name={item.name}
									disabled={item.disabled}
									onSelect={(e: any) => selectItem(e, item.key, selectList, listType)}
									itemVariant={variant}
									selected={selectList.includes(item.key)}
									listType={listType}
								/>
							))
							: (
								<li className="cs-transfer-list-no-data">
									<CSIcon
										name="error"
										color="var(--cs-transfer-list-no-data-c)"
										size="1.5rem"
									/>
									<span className="cs-transfer-list-no-data-text">No data</span>
								</li>
							)}
					</ul>
				</div>
			</div>
		);
	}
}

export default CSTransferList;
