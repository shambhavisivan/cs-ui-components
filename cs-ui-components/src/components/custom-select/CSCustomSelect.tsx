import React from 'react';
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

export interface CSCustomSelectProps {
	[key: string]: any;
	borderType?: CSCustomSelectBorderType;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	helpText?: string;
	hidden?: boolean;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	multiselect?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
	onSelectChange?: (value?: any) => any;
	optionsList?: Array<any>;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
}

export interface CSCustomSelectState {
	activeListItem: number;
	searchTerm: string;
	selectedItem: string;
	selectedOptions: Array<string>;
	toggle: boolean;
}

class CSCustomSelect extends React.Component<CSCustomSelectProps, CSCustomSelectState> {
	private dropdownNode: HTMLUListElement;
	private input: HTMLInputElement;
	private filteredList: Array<string>;

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	constructor(props: CSCustomSelectProps) {
		super(props);

		this.state = {
			toggle: false,
			searchTerm: '',
			selectedOptions: [],
			selectedItem: '',
			activeListItem: null
		};
	}

	componentDidMount() {
		document.addEventListener('click', this.handleOutsideClick);
		this.filteredList = this.props.optionsList;
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleOutsideClick);
	}

	toggle = () => {
		this.setState({ toggle: !this.state.toggle });
	}

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

	onSelect = (e: any, value?: any) => {
		const { selectedOptions } = this.state;
		const { multiselect, onChange } = this.props;
		const listItems = this.dropdownNode.childNodes;
		const _value = (value || value === 0) ?
			listItems[value].textContent :
			e.currentTarget.textContent;
		if (multiselect) {
			if (selectedOptions.includes(_value)) {
				const _selectedOptions = selectedOptions.filter(option => option !== _value);
				this.setState(
					{ selectedOptions: _selectedOptions },
					this.handleSelectChange
				);
			} else {
				this.setState(
					{ selectedOptions: [...selectedOptions, _value] },
					this.handleSelectChange
				);
			}
			this.setState({ searchTerm: '' });
		} else {
			if (onChange) {
				onChange(e);
			}
			this.setState({
				selectedItem: _value,
				searchTerm: '',
				activeListItem: null
			});
			this.toggle();
		}
	}

	handleSelectChange = () => {
		const { onSelectChange, multiselect } = this.props;
		if (onSelectChange && multiselect) {
			onSelectChange(this.state.selectedOptions);
		}
	}

	onDelete = (index: number) => {
		const _selectedOptions = this.state.selectedOptions;
		_selectedOptions.splice(index, 1);
		this.setState(
			{
				selectedOptions: _selectedOptions,
				activeListItem: null
			},
			this.handleSelectChange
		);
	}

	handleDeleteOnKeyDown = (index: number) => {
		this.onDelete(index);
		this.input.focus();
	}

	deleteLastItem = () => {
		const _selectedOptions = this.state.selectedOptions;
		_selectedOptions.pop();
		this.setState(
			{
				selectedOptions: _selectedOptions,
				activeListItem: null
			},
			this.handleSelectChange
		);
	}

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
						this.onSelect(event, activeListItem);
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

	handleOnFocus = () => {
		this.setState(
			{
				toggle: true,
				activeListItem: 0
			});
	}

	handleClearOnKeyDown = () => {
		this.clearSearch();
		this.input.focus();
	}

	handleItemDelete = (e: any, index: number) => {
		if (e.type === 'mousedown') {
			e.preventDefault();
			this.onDelete(index);
		} else if (e.type === 'keydown' && e.key === KeyCode.Enter) {
			this.onDelete(index);
			this.input.focus();
		}
	}

	highlightListItem = (index: number) => {
		this.setState({ activeListItem: index });
	}

	searchingFor = (term: any) => {
		return (option: any) => {
			return option.toLowerCase().includes(term.toLowerCase());
		};
	}

	clearSearch = () => {
		this.setState({
			selectedOptions: [],
			searchTerm: '',
			selectedItem: ''
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

	render() {
		const { activeListItem, searchTerm, selectedOptions, selectedItem, toggle } = this.state;
		const {
			borderType,
			className,
			disabled,
			error,
			errorMessage,
			helpText,
			hidden,
			id,
			label,
			labelHidden,
			labelTitle,
			multiselect,
			onChange,
			onSelectChange,
			optionsList,
			required,
			title,
			tooltipPosition,
			...rest
		} = this.props;

		const customSelectWrapperClasses = classNames(
			'cs-custom-select-wrapper',
			{
				[`${className}`]: className,
				'cs-element-hidden': hidden
			}
		);

		const customSelectInputWrapperClasses = classNames(
			'cs-custom-select-input-wrapper',
			{
				'cs-custom-select-input-wrapper-disabled': this.props.disabled,
				'cs-custom-select-input-wrapper-error': this.props.error,
				[`cs-custom-select-input-wrapper-${this.props.borderType}`]: this.props.borderType,
				'cs-custom-select-input-wrapper-multiselect': !!this.state.selectedOptions.length
			}
		);

		const customSelectInputClasses = classNames(
			'cs-custom-select-input',
			{
				'cs-custom-mutiselect-input': this.props.multiselect
			}
		);

		const selectedListItemClasses = classNames(
			'cs-selected-input-item',
			{
				'cs-custom-select-dropdown-open': this.state.toggle
			}
		);

		const renderDropdownOptions = () => {
			this.filteredList = optionsList.filter(this.searchingFor(searchTerm));
			if (this.filteredList.length > 0) {
				return this.filteredList.map((option, i) => (
					<CSOption
						value={option}
						type="list-item"
						onMouseDown={(event: any) => {
							event.preventDefault();
							this.onSelect(event);
						}}
						key={'list-item' + i}
						selected={selectedOptions.includes(option) || option === selectedItem}
						isMultiSelectItem={multiselect}
						active={i === activeListItem}
						onMouseOver={() => this.highlightListItem(i)}
						onMouseOut={() => this.setState({ activeListItem: null })}
					/>));
			} else {
				return <li className="cs-custom-select-no-data">
					<CSIcon
						name="error"
						color="var(--cs-custom-select-no-data-c)"
					/>
					<span className="cs-custom-select-no-data-text">No data found</span>
				</li>;
			}
		};

		return (
			<div className={customSelectWrapperClasses}>
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
									value={selectedOption}
									key={'selected-item' + i}
									onItemDelete={event => {
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
					{(selectedItem && !searchTerm) &&
						<span className={selectedListItemClasses}>
							{selectedItem}
						</span>
					}
					{(searchTerm || selectedOptions.length > 0 || selectedItem) &&
						<CSButton
							btnType="transparent"
							btnStyle="brand"
							className="cs-custom-select-clear"
							iconColor="var(--cs-input-clear)"
							iconName="close"
							iconDisplay="icon-only"
							label="clear"
							onClick={this.handleClearOnKeyDown}
							size="small"
						/>
					}
					<CSIcon
						name="chevrondown"
						rotate={toggle ? '180' : null}
						className="cs-custom-select-icon"
					/>
				</div>
				{(toggle && !disabled) &&
					<ul
						className="cs-custom-select-dropdown"
						ref={node => this.dropdownNode = node}
					>
						{renderDropdownOptions()}
					</ul>
				}
				{(error && errorMessage) &&
					<CSFieldErrorMsg message={errorMessage} />
				}
			</div>
		);
	}
}

export default CSCustomSelect;
