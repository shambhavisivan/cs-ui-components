import React, { ReactChildren, ReactElement, MutableRefObject, ReactComponentElement } from 'react';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from '../CSFieldErrorMsg';
import CSIcon from '../CSIcon';
import CSLabel from '../CSLabel';
import CSOption from './CSOption';
import CSButton from '../CSButton';
import { CSTooltipPosition } from '../CSTooltip';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import KeyCode from '../../util/KeyCode';

export type CSCustomSelectBorderType = 'square' | 'round';
export type CSCustomSelectExportValueType = 'itemKey' | 'value';

export interface CSOptionItem {
	value: string;
	itemKey: string;
}

export interface CSCustomSelectProps {
	[key: string]: any;
	borderType?: CSCustomSelectBorderType;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	exportValue?: CSCustomSelectExportValueType;
	helpText?: string;
	hidden?: boolean;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	multiselect?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
	onSelectChange?: (value?: any) => any;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: string | Array<string>;
}

export interface CSCustomSelectState {
	activeListItem: number;
	searchTerm: string;
	selectedItem: CSOptionItem;
	selectedOptions: Array<CSOptionItem>;
	toggle: boolean;
}

class CSCustomSelect extends React.Component<CSCustomSelectProps, CSCustomSelectState> {
	private dropdownNode: React.RefObject<HTMLUListElement>;
	private input: HTMLInputElement;
	private filteredList: Array<any>;

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	constructor(props: CSCustomSelectProps) {
		super(props);

		this.state = {
			toggle: false,
			searchTerm: '',
			selectedOptions: [],
			selectedItem: {
				itemKey: '',
				value: ''
			},
			activeListItem: null
		};

		this.dropdownNode = React.createRef();
	}

	componentDidMount() {
		document.addEventListener('click', this.handleOutsideClick);
		if (this.props.value) {
			this.setDefaultOptions();
		}
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleOutsideClick);
	}

	// Sets default options if value prop is set based on type of value
	setDefaultOptions = () => {
		const { children, multiselect, value } = this.props;
		if (typeof value === 'string') {
			let option: any;
			option = React.Children.toArray(children).find(
				(child: React.ReactElement) =>
					child.props.itemKey === value
			);

			this.setState({ selectedItem: this.getOptionData(option) });
		} else if (Array.isArray(value) && multiselect) {
			const options: Array<CSOptionItem> = [];
			React.Children.forEach(children, (child: React.ReactElement) => {
				const optionData = this.getOptionData(child as unknown as CSOption);
				if (value.includes(optionData.itemKey)) {
					options.push(optionData);
				}
			});

			this.setState({ selectedOptions: options });
		}
	}

	/*
		Sets searchTerm state to value typed in input field.
		By populating input field dropdown is opened and the first item that matches
		searchTerm value is highlighted.
	*/
	search = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { onChange } = this.props;
		this.setState({
			searchTerm: e.target.value,
			toggle: true,
			activeListItem: 0
		});
		if (onChange) {
			onChange(e);
		}
	}

	handleOnFocus = () => {
		this.setState(
			{
				toggle: true,
				activeListItem: 0
			});
	}

	handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		e.stopPropagation();
		this.setState({
			toggle: false
		});
	}

	handleOutsideClick = (e: any) => {
		if (this.input && !this.input.contains(e.target)) {
			this.setState({ searchTerm: '' });
		}
	}

	/*
		Enables keyboard navigation, selection and deletion of the dropdown items.
		activeListItem is increased or decreased each time arrow keys are pressed.
		On enter keypress item is selected by firing onSelect method.
		On backspace keypress last item in selectedOptions state gets deleted.
		Escape keypress closes dropdown.
	*/
	handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const { searchTerm, toggle } = this.state;
		let { activeListItem } = this.state;
		const { multiselect } = this.props;

		const firstListElement = 0;
		const lastListElement = this.filteredList.length - 1;

		switch (true) {
			case event.key === KeyCode.Backspace && !searchTerm && multiselect:
				this.deleteLastItem();
				break;
			case event.key === KeyCode.Escape && toggle:
				this.setState({ toggle: !toggle });
				break;
			case event.key === KeyCode.ArrowDown:
				event.preventDefault();
				switch (true) {
					case activeListItem === null:
						this.setState({ activeListItem: 0 });
						break;
					case (activeListItem === lastListElement):
						this.setState({ activeListItem: 0 });
						break;
					default:
						const _activeListItem = ++activeListItem;
						this.setState({ activeListItem: _activeListItem });
						break;
				}
				break;
			case event.key === KeyCode.ArrowUp:
				event.preventDefault();
				switch (true) {
					case activeListItem === firstListElement:
						this.setState({ activeListItem: lastListElement });
						break;
					default:
						const _activeListItem = --activeListItem;
						this.setState({ activeListItem: _activeListItem });
						break;
				}
				break;
			case event.key === KeyCode.Enter:
				event.preventDefault();
				switch (true) {
					case toggle && activeListItem !== null && !!this.filteredList.length:
						this.onSelect(this.getOptionData(this.filteredList[activeListItem]));
						break;
					default:
						this.toggle();
						break;
				}
				break;
			default:
				return;
		}
	}

	// Sets selectedItem or selectedOptions if multiselect is set to true.
	onSelect = (optionItem?: CSOptionItem) => {
		const { selectedOptions } = this.state;
		const { multiselect } = this.props;

		if (multiselect) {
			if (selectedOptions.find(option => optionItem.itemKey === option.itemKey)) {
				const _selectedOptions = selectedOptions.filter(option => option.itemKey !== optionItem.itemKey);
				this.setState(
					{ selectedOptions: _selectedOptions },
					this.handleSelectChange
				);
			} else {
				this.setState(
					{ selectedOptions: [...selectedOptions, optionItem] },
					this.handleSelectChange
				);
			}
			this.setState({ searchTerm: '' });
		} else {
			this.setState(
				{
					selectedItem: optionItem,
					searchTerm: '',
					activeListItem: null
				},
				this.handleSelectChange
			);
			this.toggle();
		}
	}

	// Fires on each selection change and returns option items based on defined exportValue prop
	handleSelectChange = () => {
		const { exportValue, onSelectChange, multiselect } = this.props;
		const { selectedItem, selectedOptions } = this.state;

		let stateToExport: Array<CSOptionItem> | CSOptionItem;

		if (onSelectChange) {
			// Set correct state to export according to mutliselect prop status
			// If selectedItem object contains empty strings, return null
			stateToExport = multiselect ?
				selectedOptions :
				selectedItem.itemKey === '' ?
					null :
					selectedItem;
			if (exportValue) {
				onSelectChange(this.getItemsByExportValue(stateToExport));
			} else {
				onSelectChange(stateToExport);
			}
		}
	}

	// Deletes item from the multiselect list based on its index
	onDelete = (index: number) => {
		const _selectedOptions = [...this.state.selectedOptions];
		_selectedOptions.splice(index, 1);

		this.setState(
			{
				selectedOptions: _selectedOptions,
				activeListItem: null
			},
			this.handleSelectChange
		);
	}

	deleteLastItem = () => {
		const _selectedOptions = [...this.state.selectedOptions];
		_selectedOptions.pop();

		this.setState(
			{
				selectedOptions: _selectedOptions,
				activeListItem: null
			},
			this.handleSelectChange
		);
	}

	// Deletes the item from the mulitselect list
	handleItemDelete = (e: any, index: number) => {
		if (e.type === 'mousedown') {
			e.preventDefault();
			this.onDelete(index);
		} else if (e.type === 'keydown' && e.key === KeyCode.Enter) {
			this.onDelete(index);
			this.input.focus();
		}
	}

	handleClear = () => {
		this.clearSearch();
		this.input.focus();
	}

	clearSearch = () => {
		this.setState({
			selectedOptions: [],
			searchTerm: '',
			selectedItem: {
				itemKey: '',
				value: ''
			}
		}, this.handleSelectChange);
	}

	// Filters children based on filterBy prop
	filterChildrenBy = (child: React.ReactElement) => {
		const { searchTerm } = this.state;

		const includesSearchTerm = (value: string) => {
			return value.toLowerCase().includes(searchTerm.toLowerCase());
		};

		if (child.props.filterBy) {
			return includesSearchTerm(child.props[child.props.filterBy]);
		} else {
			return includesSearchTerm(child.props.itemKey) || includesSearchTerm(child.props.value);
		}
	}

	toggle = () => {
		this.setState({ toggle: !this.state.toggle });
	}

	// Accepts child as CSOption and returns only object of itemKey and value
	getOptionData = (option: CSOption) => {
		return {
			itemKey: option.props.itemKey,
			value: option.props.value
		};
	}

	// Returns data defined at exportValue prop from selectedOptions state
	getItemsByExportValue = (stateToExport: Array<CSOptionItem> | CSOptionItem) => {
		if (Array.isArray(stateToExport)) {
			return stateToExport.map((option: CSOptionItem) => option[this.props.exportValue]);
		} else {
			return stateToExport[this.props.exportValue];
		}
	}

	// Highlights current hovered or focused item by setting activeListItem state
	highlightListItem = (index: number) => {
		this.setState({ activeListItem: index });
	}

	render() {
		const {
			activeListItem,
			searchTerm,
			selectedItem,
			selectedOptions,
			toggle
		} = this.state;
		const {
			borderType,
			children,
			className,
			disabled,
			error,
			errorMessage,
			exportValue,
			helpText,
			hidden,
			id,
			label,
			labelHidden,
			labelTitle,
			multiselect,
			onChange,
			onSelectChange,
			required,
			title,
			tooltipPosition,
			value,
			...rest
		} = this.props;

		const customSelectWrapperClasses = classNames(
			'cs-custom-select-wrapper', {
			[`${className}`]: className,
			'cs-element-hidden': hidden
		});

		const customSelectInputWrapperClasses = classNames(
			'cs-custom-select-input-wrapper', {
			'cs-custom-select-input-wrapper-disabled': disabled,
			'cs-custom-select-input-wrapper-error': error,
			[`cs-custom-select-input-wrapper-${borderType}`]: borderType,
			'cs-custom-select-input-wrapper-multiselect': !!selectedOptions.length
		});

		const customSelectInputClasses = classNames(
			'cs-custom-select-input', {
			'cs-custom-ms-input': multiselect
		});

		const selectedListItemClasses = classNames(
			'cs-selected-input-option', {
			'cs-custom-select-dropdown-open': toggle
		});

		/*
			Filters this.props.children based on searchTerm state, clones each of CSOption passed as children
			and forwards handler methods for selecting and highlighting each of the items, as well as
			props which define CSOption active, selected and multiselect states which change styles and behavior of
			the component.

			If neither of the child components matches the searchTerm value appropriate list item will be returned indicating
			that no data is found.
		*/
		const renderDropdownOptionsAsChildren = () => {
			if (children) {
				this.filteredList = React.Children.toArray(children).filter((child: React.ReactElement) =>
					child.type === CSOption && this.filterChildrenBy(child)
				);

				if (!!this.filteredList.length) {
					return this.filteredList.map((child: React.ReactElement, index) => {
						return React.cloneElement(child, {
							type: 'list-item',
							active: index === activeListItem,
							onMouseDown: (event: React.MouseEvent<HTMLLIElement>) => {
								event.preventDefault();
								this.onSelect(this.getOptionData(child as unknown as CSOption));
							},
							onMouseOver: () => this.highlightListItem(index),
							onMouseOut: () => this.setState({ activeListItem: null }),
							isMultiSelectItem: multiselect,
							selected: selectedOptions.find(option => this.getOptionData(child as unknown as CSOption).itemKey === option.itemKey)
								|| this.getOptionData(child as unknown as CSOption).itemKey === selectedItem.itemKey
						});
					});
				} else {
					return (
						<li className="cs-custom-select-no-data">
							<CSIcon
								name="error"
								color="var(--cs-custom-select-no-data-c)"
							/>
							<span className="cs-custom-select-no-data-text">No data found</span>
						</li>
					);
				}
			}
		};

		return (
			<div className={customSelectWrapperClasses} >
				{(label && !labelHidden) &&
					<CSLabel
						htmlFor={this.uniqueAutoId}
						label={label}
						helpText={helpText}
						tooltipPosition={tooltipPosition}
						required={required}
						title={labelTitle ? label : null}
					/>
				}
				<div
					className={customSelectInputWrapperClasses}
					onBlur={() => this.setState({ searchTerm: '' })}
				>
					{(this.props.multiselect &&
						this.state.selectedOptions.length > 0) &&
						<ul className="cs-custom-select-items">
							{this.state.selectedOptions.map((selectedOption, i) => (
								<CSOption
									type="selected-item"
									value={selectedOption.value}
									itemKey={selectedOption.itemKey}
									key={selectedOption.itemKey}
									onItemDelete={(event: any) => {
										this.handleItemDelete(event, i);
									}}
								/>
							))}
						</ul>
					}
					<span className={customSelectInputClasses}>
						<input
							value={searchTerm}
							type="text"
							onChange={this.search}
							id={this.uniqueAutoId}
							required={required}
							disabled={disabled}
							aria-invalid={error}
							aria-expanded={this.state.toggle}
							aria-required={required}
							title={title}
							autoComplete="off"
							onKeyDown={this.handleOnKeyDown}
							onMouseDown={() => this.setState({ toggle: true })}
							onBlur={e => this.handleOnBlur(e)}
							onFocus={this.handleOnFocus}
							ref={node => this.input = node}
							{...rest}
						/>
					</span>
					{(selectedItem.itemKey !== '' && !searchTerm) &&
						<span className={selectedListItemClasses}>
							{selectedItem.value}
						</span>
					}
					{(searchTerm || selectedOptions.length > 0 || selectedItem.itemKey !== '') &&
						<CSButton
							btnType="transparent"
							btnStyle="brand"
							className="cs-custom-select-clear"
							iconColor="var(--cs-input-clear)"
							iconName="close"
							iconDisplay="icon-only"
							label="clear"
							onClick={this.handleClear}
							size="small"
						/>
					}
					<CSIcon
						name="chevrondown"
						rotate={toggle ? '180' : null}
						className="cs-custom-select-icon"
					/>
				</div>
				{
					(toggle && !disabled) &&
					<ul
						className="cs-custom-select-dropdown"
						ref={this.dropdownNode}
					>
						{renderDropdownOptionsAsChildren()}
					</ul>
				}
				{
					(error && errorMessage) &&
					<CSFieldErrorMsg message={errorMessage} />
				}
			</div >
		);
	}
}

export default CSCustomSelect;
