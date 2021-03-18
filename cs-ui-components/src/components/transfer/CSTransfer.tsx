import React from 'react';
import CSButton from '../CSButton';
import CSTransferList, { CSTransferListType } from './CSTransferList';
import CSTransferContext from './CSTransferContext';
import classNames from 'classnames';
import KeyCode from '../../util/KeyCode';

export interface CSTransferItemsType {
	disabled?: boolean;
	key: string;
	name?: string;
}

export type CSTransferVariant = 'simple-list' | 'check-list';

export interface CSTransferProps {
	[key: string]: any;
	className?: string;
	dataSource: Array<CSTransferItemsType>;
	id?: string;
	onChange?: (value?: any) => any;
	oneWay?: boolean;
	searchable?: boolean;
	selectAll?: boolean;
	sourceHelpText?: string;
	sourceLabel: string;
	targetHelpText?: string;
	targetKeys?: Array<string>;
	targetLabel: string;
	variant?: CSTransferVariant;
}

export interface CSTransferState {
	sourceData: Array<CSTransferItemsType>;
	sourceSelected: Array<string>;
	targetData: Array<CSTransferItemsType>;
	targetSelected: Array<string>;
}

class CSTransfer extends React.Component<CSTransferProps, CSTransferState> {

	public static defaultProps = {
		variant: 'simple-list'
	};

	private actionButtonsNode: HTMLDivElement;
	private sourceListRef: React.RefObject<HTMLUListElement>;
	private targetListRef: React.RefObject<HTMLUListElement>;
	private element: string;

	constructor(props: CSTransferProps) {
		super(props);

		this.state = {
			sourceData: [],
			sourceSelected: [],
			targetData: [],
			targetSelected: []
		};

		this.sourceListRef = React.createRef();
		this.targetListRef = React.createRef();
	}

	componentDidMount() {
		this.initTransferComponent();
		this.element = this.props.variant === 'simple-list' ? 'button' : 'input[type=checkbox]';
	}

	initTransferComponent = () => {
		const { dataSource, targetKeys } = this.props;
		const _sourceData: any = [];
		const _targetData: any = [];

		if (targetKeys && targetKeys.length > 0) {
			dataSource.forEach(data => {
				if (!targetKeys.includes(data.key)) {
					_sourceData.push(data);
				} else {
					_targetData.push(data);
				}
			});
			this.setState({
				sourceData: _sourceData,
				targetData: _targetData
			});
		} else {
			this.setState({
				sourceData: dataSource
			});
		}
	}

	selectItem = (event: any, itemKey: string, array: Array<string>, listType: CSTransferListType) => {
		const { variant } = this.props;
		const newState: any = {};
		const stateArrayName = `${listType}Selected`;

		if (array.includes(itemKey)) {
			if (!(event.ctrlKey || event.metaKey) && variant === 'simple-list') {
				newState[stateArrayName] = [itemKey];
			} else {
				const _newArray: Array<string> = array.filter(key => key !== itemKey);
				newState[stateArrayName] = _newArray;
			}
		} else if (variant === 'check-list' || ((event.ctrlKey || event.metaKey) && variant === 'simple-list')) {
			newState[stateArrayName] = [...array, itemKey];
		} else if (this.props.variant === 'simple-list') {
			newState[stateArrayName] = [itemKey];
		}
		this.setState(newState);
	}

	moveItemsTo = (direction: CSTransferListType) => {
		const { sourceData, targetData, sourceSelected, targetSelected } = this.state;
		const [fromArray, toArray] = direction === 'target' ? [sourceData, targetData] : [targetData, sourceData];
		const selectedKeys = direction === 'target' ? sourceSelected : targetSelected;
		const opposite = direction === 'target' ? 'source' : 'target';
		const newState: any = {};
		const _sourceData: any = [];
		const _targetData: any = [];

		fromArray.forEach(item => {
			if (selectedKeys.includes(item.key)) {
				_targetData.push(item);
			} else {
				_sourceData.push(item);
			}
		});

		newState[`${direction}Data`] = [...toArray, ..._targetData];
		newState[`${opposite}Data`] = _sourceData;
		newState[`${opposite}Selected`] = [];

		this.setState(
			newState,
			() => this.handleSelection(direction)
		);
	}

	moveToSource = (itemKey: string) => {
		const { sourceData, targetData } = this.state;
		const item = targetData.find(listItem => listItem.key === itemKey);

		const _sourceData = [...sourceData, item];
		targetData.splice(targetData.indexOf(item), 1);

		this.setState(
			{
				sourceData: _sourceData,
				targetData
			},
			() => this.handleSelection('source')
		);
	}

	selectAll = (dataList: Array<CSTransferItemsType>, selectList: Array<string>, listType: CSTransferListType) => {
		const _dataKeys: Array<string> = [];
		dataList.forEach(item => {
			if (!item.disabled) {
				_dataKeys.push(item.key);
			}
		});
		const newState: any = {};
		const stateArrayName = `${listType}Selected`;

		newState[stateArrayName] = _dataKeys.length === selectList.length ? [] : _dataKeys;
		this.setState(newState);
	}

	handleOnChange = () => {
		if (this.props.onChange) {
			const targetKeys: Array<string> = [];
			this.state.targetData.forEach(item => {
				targetKeys.push(item.key);
			});
			this.props.onChange(targetKeys);
		}
	}

	handleSelection = (direction: CSTransferListType) => {
		let listItems: any = [];
		switch (direction) {
			case 'target':
				listItems = this.targetListRef.current.querySelectorAll(this.element);
				(listItems[listItems.length - 1] as HTMLElement).focus();
				break;
			default:
				listItems = this.sourceListRef.current.querySelectorAll(this.element);
				(listItems[listItems.length - 1] as HTMLElement).focus();
				break;
		}
		this.handleOnChange();
	}

	handleActionsKeyDown = (event: React.KeyboardEvent<any>) => {
		switch (event.key) {
			case KeyCode.ArrowRight:
				(this.targetListRef.current.querySelector(this.element) as HTMLElement).focus();
				break;
			case KeyCode.ArrowLeft:
				(this.sourceListRef.current.querySelector(this.element) as HTMLElement).focus();
				break;
			case KeyCode.ArrowDown:
				event.preventDefault();
				switch (true) {
					case document.activeElement === this.actionButtonsNode.lastChild:
						(this.actionButtonsNode.firstChild as HTMLElement).focus();
						break;
					default:
						(this.actionButtonsNode.lastChild as HTMLElement).focus();
						break;
				}
				break;
			case KeyCode.ArrowUp:
				event.preventDefault();
				switch (true) {
					case document.activeElement === this.actionButtonsNode.firstChild:
						(this.actionButtonsNode.lastChild as HTMLElement).focus();
						break;
					default:
						(this.actionButtonsNode.firstChild as HTMLElement).focus();
						break;
				}
				break;
			default:
				return;
		}
	}

	render() {
		const { sourceData, targetData, sourceSelected, targetSelected } = this.state;
		const {
			className,
			dataSource,
			id,
			onChange,
			oneWay,
			searchable,
			selectAll,
			sourceHelpText,
			sourceLabel,
			targetHelpText,
			targetKeys,
			targetLabel,
			variant,
			...rest
		} = this.props;
		const context = {
			selectItem: this.selectItem,
			moveToSource: this.moveToSource,
			selectAllItems: this.selectAll,
			oneWay,
			actionButtonsNode: this.actionButtonsNode
		};
		const transferWrapperClasses = classNames(
			'cs-transfer-wrapper',
			{
				[`${className}`]: className
			}
		);
		return (
			<CSTransferContext.Provider value={context}>
				<div className={transferWrapperClasses} id={id} {...rest}>
					<CSTransferList
						listRef={this.sourceListRef}
						listType="source"
						label={sourceLabel}
						variant={variant}
						listData={sourceData}
						selectList={sourceSelected}
						selectAll={selectAll}
						searchable={searchable}
						helpText={sourceHelpText}
					/>
					<div className="cs-transfer-actions" ref={node => this.actionButtonsNode = node}>
						<CSButton
							label={`Move selection to ${targetLabel}`}
							iconName="chevronright"
							labelHidden
							disabled={!sourceSelected.length}
							onClick={() => this.moveItemsTo('target')}
							onKeyDown={(event: React.KeyboardEvent<any>) => this.handleActionsKeyDown(event)}
						/>
						{!oneWay &&
							<CSButton
								label={`Move selection to ${sourceLabel}`}
								iconName="chevronleft"
								labelHidden
								disabled={!targetSelected.length}
								onClick={() => this.moveItemsTo('source')}
								onKeyDown={(event: React.KeyboardEvent<any>) => this.handleActionsKeyDown(event)}
							/>
						}
					</div>
					<CSTransferList
						listRef={this.targetListRef}
						listType="target"
						label={targetLabel}
						variant={variant}
						listData={targetData}
						selectList={targetSelected}
						selectAll={selectAll}
						searchable={searchable}
						helpText={targetHelpText}
					/>
				</div>
			</CSTransferContext.Provider>
		);
	}
}

export default CSTransfer;
