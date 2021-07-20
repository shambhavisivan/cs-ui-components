import React, { CSSProperties } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from '../CSFieldErrorMsg';
import CSIcon from '../CSIcon';
import CSLabel from '../CSLabel';
import CSOption from './CSOption';
import CSButton from '../CSButton';
import { CSTooltipPosition } from '../CSTooltip';
import KeyCode from '../../util/KeyCode';
import CSAutoposition from '../../helpers/autoposition/CSAutoposition';
import { CSAutopositions } from '../../helpers/autoposition/cs-autoposition-types';

export type CSCustomSelectExportValueType = 'itemKey' | 'value';
export type CSCustomSelectDropdownAlign = 'left' | 'right';
export type CSCustomSelectDropdownPosition = 'top' | 'bottom';

export interface CSOptionItem {
	value: string;
	itemKey: string;
}

export interface CSCustomSelectProps {
	[key: string]: any;
	align?: CSCustomSelectDropdownAlign;
	borderRadius?: string;
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
	onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => any;
	onSelectChange?: (value?: any) => any;
	position?: CSCustomSelectDropdownPosition;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: string | Array<string>;
}

export interface CSCustomSelectState {
	activeListItem: number;
	customSelectInputWidth?: number;
	dropdownOpen: boolean;
	searchTerm: string;
	selectedItem: CSOptionItem;
	selectedOptions: Array<CSOptionItem>;
}

class CSCustomSelect extends React.Component<CSCustomSelectProps, CSCustomSelectState> {
	public static defaultProps = {
		align: 'left',
		position: 'bottom',
	};

	private customSelectInputWrapperRef: React.RefObject<HTMLDivElement>;

	private input: HTMLInputElement;

	private filteredList: Array<any>;

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	constructor(props: CSCustomSelectProps) {
		super(props);

		this.state = {
			activeListItem: null,
			dropdownOpen: false,
			searchTerm: '',
			selectedOptions: [],
			selectedItem: {
				itemKey: '',
				value: '',
			},
		};

		this.customSelectInputWrapperRef = React.createRef();
	}

	componentDidMount() {
		console.warn('CSCustomSelect is under construction and should not be used.');
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
				(child: React.ReactElement) => child.props.itemKey === value,
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
		const { onSearch } = this.props;
		this.setState({
			searchTerm: e.target.value,
		});
		this.openCustomSelectDropdown();
		if (onSearch) {
			onSearch(e);
		}
	}

	handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		e.stopPropagation();
		if (
			!this.state.searchTerm
			|| !this.state.selectedItem
			|| !this.state.selectedOptions
		) {
			this.closeCustomSelectDropdown();
		}
	}

	handleOutsideClick = (event: any) => {
		if (this.customSelectInputWrapperRef.current
			&& !this.customSelectInputWrapperRef.current.contains(event.target)
			&& !document.getElementById('cs-autoposition').contains(event.target)) {
			this.closeCustomSelectDropdown();
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
		const { searchTerm, dropdownOpen } = this.state;
		let { activeListItem } = this.state;
		const { multiselect } = this.props;

		const firstListElement = 0;
		const lastListElement = this.filteredList.length - 1;

		switch (true) {
		case event.key === KeyCode.Backspace && !searchTerm && multiselect:
			this.deleteLastItem();
			break;
		case event.key === KeyCode.Escape && dropdownOpen:
			this.closeCustomSelectDropdown();
			break;
		case event.key === KeyCode.ArrowDown && dropdownOpen:
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
		case event.key === KeyCode.ArrowUp && dropdownOpen:
			event.preventDefault();
			switch (true) {
			case activeListItem === null:
				this.setState({ activeListItem: lastListElement });
				break;
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
			case dropdownOpen && activeListItem !== null && !!this.filteredList.length:
				this.onSelect(this.getOptionData(this.filteredList[activeListItem]));
				break;
			default:
				this.toggleCustomSelectDropdown();
				break;
			}
			break;
		default:
			return false;
		}
	}

	// Sets selectedItem or selectedOptions if multiselect is set to true.
	onSelect = (optionItem?: CSOptionItem) => {
		const { selectedOptions } = this.state;
		const { multiselect } = this.props;

		if (multiselect) {
			if (selectedOptions.find((option) => optionItem.itemKey === option.itemKey)) {
				const _selectedOptions = selectedOptions.filter((option) => option.itemKey !== optionItem.itemKey);
				this.setState(
					{ selectedOptions: _selectedOptions },
					this.handleSelectChange,
				);
			} else {
				this.setState(
					{ selectedOptions: [...selectedOptions, optionItem] },
					this.handleSelectChange,
				);
			}
			this.setState({ searchTerm: '' });
		} else {
			this.setState(
				{
					selectedItem: optionItem,
					searchTerm: '',
					activeListItem: null,
				},
				this.handleSelectChange,
			);
			this.toggleCustomSelectDropdown();
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
			stateToExport = multiselect
				? selectedOptions
				: selectedItem.itemKey === ''
					? null
					: selectedItem;
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
				activeListItem: null,
			},
			this.handleSelectChange,
		);
	}

	deleteLastItem = () => {
		const _selectedOptions = [...this.state.selectedOptions];
		_selectedOptions.pop();

		this.setState(
			{
				selectedOptions: _selectedOptions,
				activeListItem: null,
			},
			this.handleSelectChange,
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
				value: '',
			},
		}, this.handleSelectChange);
	}

	// Filters children based on searchBy prop
	filterChildrenBy = (child: React.ReactElement) => {
		const { searchTerm } = this.state;

		const includesSearchTerm = (value: string) => value.toLowerCase().includes(searchTerm.toLowerCase());

		if (child.props.searchBy) {
			return includesSearchTerm(child.props[child.props.searchBy]);
		}
		return includesSearchTerm(child.props.itemKey) || includesSearchTerm(child.props.value);
	}

	toggleCustomSelectDropdown = () => {
		if (!this.state.dropdownOpen) {
			this.openCustomSelectDropdown();
		} else {
			this.closeCustomSelectDropdown();
		}
	}

	// Accepts child as CSOption and returns only object of itemKey and value
	getOptionData = (option: CSOption) => ({
		itemKey: option.props.itemKey,
		value: option.props.value,
	})

	// Returns data defined at exportValue prop from selectedOptions state
	getItemsByExportValue = (stateToExport: Array<CSOptionItem> | CSOptionItem) => {
		if (!stateToExport) {
			return null;
		}
		if (Array.isArray(stateToExport)) {
			return stateToExport.map((option: CSOptionItem) => option[this.props.exportValue]);
		}
		return stateToExport[this.props.exportValue];
	}

	// Highlights current hovered or focused item by setting activeListItem state
	highlightListItem = (index: number) => {
		this.setState({ activeListItem: index });
	}

	// Opens dropdown
	openCustomSelectDropdown = () => {
		if (!this.customSelectInputWrapperRef.current) {
			return;
		}
		const elementRect = this.customSelectInputWrapperRef.current.getBoundingClientRect();

		this.setState({
			dropdownOpen: true,
			activeListItem: 0,
			customSelectInputWidth: elementRect.width,
		});

		document.addEventListener('click', this.handleOutsideClick, true);
	}

	// Closes dropdown and sets state values to the initial values
	closeCustomSelectDropdown = () => {
		this.setState({
			dropdownOpen: false,
			activeListItem: null,
			searchTerm: '',
		});
		document.removeEventListener('click', this.handleOutsideClick, true);
	}

	flipPosition = (position: string) => {
		switch (position) {
		case 'left':
			return 'right';
		case 'right':
			return 'left';
		default:
			break;
		}
	}

	render() {
		const {
			activeListItem,
			customSelectInputWidth,
			searchTerm,
			selectedItem,
			selectedOptions,
			dropdownOpen,
		} = this.state;
		const {
			align,
			borderRadius,
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
			onSearch,
			onSelectChange,
			position,
			required,
			title,
			tooltipPosition,
			value,
			...rest
		} = this.props;

		const customSelectWrapperClasses = classNames(
			'cs-custom-select-wrapper',
			{
				'cs-element-hidden': hidden,
				[`${className}`]: className,
			},
		);
		const customSelectInputWrapperClasses = classNames(
			'cs-custom-select-input-wrapper',
			{
				'cs-custom-select-input-wrapper-disabled': disabled,
				'cs-custom-select-input-wrapper-error': error,
				'cs-custom-select-input-wrapper-multiselect': !!selectedOptions.length,
			},
		);
		const customSelectInputClasses = classNames(
			'cs-custom-select-input',
			{
				'cs-custom-ms-input': multiselect,
			},
		);
		const selectedListItemClasses = classNames(
			'cs-selected-input-option',
			{
				'cs-custom-select-dropdown-open': dropdownOpen,
			},
		);
		const style: CSSProperties = {
			'--cs-custom-select-border-radius': borderRadius,
		};
		const customSelectDropdownStyle: CSSProperties = {
			'--cs-custom-select-input-width': customSelectInputWidth ? `${customSelectInputWidth}px` : '',
		};
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
				this.filteredList = React.Children.toArray(children).filter((child: React.ReactElement) => child.type === CSOption && this.filterChildrenBy(child));

				if (this.filteredList.length) {
					return this.filteredList.map((child: React.ReactElement, index) => React.cloneElement(child, {
						type: 'list-item',
						active: index === activeListItem,
						onMouseDown: (event: React.MouseEvent<HTMLLIElement>) => {
							event.preventDefault();
							this.onSelect(this.getOptionData(child as unknown as CSOption));
						},
						onMouseOver: () => this.highlightListItem(index),
						onMouseOut: () => this.setState({ activeListItem: null }),
						isMultiSelectItem: multiselect,
						selected: selectedOptions.find((option) => this.getOptionData(child as unknown as CSOption).itemKey === option.itemKey)
							|| this.getOptionData(child as unknown as CSOption).itemKey === selectedItem.itemKey,
					}));
				}
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
		};

		const initialPosition = `${position}-${this.flipPosition(align)}` as CSAutopositions;

		return (
			<div className={customSelectWrapperClasses}>
				{(label && !labelHidden)
					&& (
						<CSLabel
							htmlFor={this.uniqueAutoId}
							label={label}
							helpText={helpText}
							tooltipPosition={tooltipPosition}
							required={required}
							title={labelTitle ? label : null}
						/>
					)}
				<div
					className={customSelectInputWrapperClasses}
					style={style}
					onBlur={() => {
						if (this.state.searchTerm) {
							this.closeCustomSelectDropdown();
						}
					}}
					ref={this.customSelectInputWrapperRef}
				>
					{(this.props.multiselect
						&& this.state.selectedOptions.length > 0)
						&& (
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
						)}
					<span className={customSelectInputClasses}>
						<input
							value={searchTerm}
							type="text"
							onChange={this.search}
							id={this.uniqueAutoId}
							required={required}
							disabled={disabled}
							aria-invalid={error}
							aria-expanded={dropdownOpen}
							aria-required={required}
							title={title}
							autoComplete="off"
							onKeyDown={this.handleOnKeyDown}
							onMouseDown={() => this.openCustomSelectDropdown()}
							onBlur={this.handleOnBlur}
							onFocus={this.openCustomSelectDropdown}
							ref={(node) => this.input = node}
							role="listbox"
							aria-multiselectable="true"
							{...rest}
						/>
					</span>
					{(selectedItem.itemKey !== '' && !searchTerm)
						&& (
							<span className={selectedListItemClasses}>
								{selectedItem.value}
							</span>
						)}
					{(searchTerm || selectedOptions.length > 0 || selectedItem.itemKey !== '')
						&& (
							<CSButton
								btnType="transparent"
								btnStyle="brand"
								className="cs-custom-select-clear"
								iconColor="var(--cs-input-clear)"
								iconName="close"
								label="clear"
								labelHidden
								onClick={this.handleClear}
								size="small"
							/>
						)}
					<CSIcon
						name="chevrondown"
						rotate={dropdownOpen ? 180 : null}
						className="cs-custom-select-icon"
						color="var(--cs-custom-select-dropdown-icon-c)"
					/>
				</div>
				{
					(error && errorMessage)
					&& <CSFieldErrorMsg message={errorMessage} />
				}
				{
					(dropdownOpen && !disabled)
					&& (
						<CSAutoposition
							referencePoint={this.customSelectInputWrapperRef.current}
							positionSchema={['top-left', 'top-right', 'bottom-right', 'bottom-left']}
							initialPosition={initialPosition}
							zIndex="var(--z-index-custom-select-dropdown)"
						>
							<div
								style={customSelectDropdownStyle}
								className="cs-custom-select-dropdown-wrapper"
							>
								<ul
									className="cs-custom-select-dropdown"
									id="cs-custom-select-dropdown"
								>
									{renderDropdownOptionsAsChildren()}
								</ul>
							</div>
						</CSAutoposition>
					)
				}
			</div>
		);
	}
}

export default CSCustomSelect;
