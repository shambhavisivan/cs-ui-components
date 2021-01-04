import React, { RefObject } from 'react';
import CSCheckbox from '../CSCheckbox';
import CSLabel from '../CSLabel';
import CSIcon from '../CSIcon';
import CSInputSearch from '../CSInputSearch';
import CSTransferItem from './CSTransferItem';
import CSTransferContext from './CSTransferContext';
import { CSTransferVariant, CSTransferItemsType } from './CSTransfer';

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
}

class CSTransferList extends React.Component<CSTransferListProps, CSTransferListState> {

	static contextType = CSTransferContext;
	private arrowLeftKey = 'ArrowLeft';
	private arrowRightKey = 'ArrowRight';

	constructor(props: CSTransferListProps) {
		super(props);

		this.state = {
			term: ''
		};
	}

	searchingFor = (term: any) => {
		return (item: any) => {
			return item.name.toLowerCase().includes(term.toLowerCase());
		};
	}

	handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const { listType } = this.props;
		const { actionButtonsNode } = this.context;
		switch (true) {
			case event.key === this.arrowRightKey && listType === 'source':
				(actionButtonsNode.firstChild as HTMLElement).focus();
				break;
			case event.key === this.arrowLeftKey && listType === 'target':
				(actionButtonsNode.lastChild as HTMLElement).focus();
				break;
			default:
				return;
		}
	}

	render() {
		const { label, variant, selectAll, searchable, listData, selectList, listType, helpText } = this.props;
		const { term } = this.state;
		const { selectItem, selectAllItems } = this.context;
		return (
			<div className="cs-transfer-list-wrapper">
				<CSLabel
					label={label}
					helpText={helpText}
				/>
				<div className="cs-transfer-list-group">
					{((selectAll && variant === 'check-list') ||
						searchable) &&
						<div className="cs-transfer-list-header">
							{(selectAll && variant === 'check-list') &&
								<CSCheckbox
									label="select all"
									labelHidden
									variant="brand"
									onChange={() => selectAllItems(listData, selectList, listType)}
									checked={listData.length === selectList.length && !!selectList.length}
									disabled={!listData.length}
									onKeyDown={this.handleKeyDown}
								/>
							}
							{searchable &&
								<CSInputSearch
									label="search list"
									labelHidden
									onChange={e => this.setState({ term: e.target.value })}
								/>
							}
						</div>
					}
					<ul className="cs-transfer-list" ref={this.props.listRef}>
						{!!listData.length ?
							listData.filter(this.searchingFor(term)).map(item => {
								return (
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
								);
							}) :
							<li className="cs-transfer-list-no-data">
								<CSIcon
									name="error"
									color="var(--cs-transfer-list-no-data-c)"
									size="1.5rem"
								/>
								<span className="cs-transfer-list-no-data-text">No data</span>
							</li>
						}
					</ul>
				</div>
			</div>
		);
	}
}

export default CSTransferList;
