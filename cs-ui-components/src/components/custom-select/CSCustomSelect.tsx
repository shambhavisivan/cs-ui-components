import React from 'react';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from '../CSFieldErrorMsg';
import CSIcon from '../CSIcon';
import CSLabel from '../CSLabel';
import classNames from 'classnames';
import { CSTooltipPosition } from '../CSTooltip';
import CSOption from './CSOption';
import { v4 as uuidv4 } from 'uuid';

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
	toggle: boolean;
	term: string;
	selectedOptions: Array<string>;
	activeListItem: number;
}

class CSCustomSelect extends React.Component<CSCustomSelectProps, CSCustomSelectState> {
	private dropdownNode: HTMLUListElement;

	private backspaceKey = 'Backspace';
	private escapeKey = 'Escape';
	private keyDownKey = 'ArrowDown';
	private keyUpKey = 'ArrowUp';
	private enterKey = 'Enter';

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	constructor(props: CSCustomSelectProps) {
		super(props);

		this.state = {
			toggle: false,
			term: '',
			selectedOptions: [],
			activeListItem: null
		};
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleOutsideClick);
	}

	handleOutsideClick = (e: any) => {
		if (this.dropdownNode && this.dropdownNode.contains(e.target)) {
			return;
		}
		this.toggle();
	}

	toggle = () => {
		const currentState = this.state.toggle;
		if (!this.state.toggle) {
			document.addEventListener('mousedown', this.handleOutsideClick, false);
		} else {
			document.removeEventListener('mousedown', this.handleOutsideClick, false);
		}
		this.setState({ toggle: !currentState });
	}

	search = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { onChange } = this.props;
		this.setState({ term: e.target.value, toggle: true });
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
			this.setState({ term: '' });
		} else {
			if (onChange) {
				onChange(e);
			}
			this.setState({
				term: _value,
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
		const { term, toggle } = this.state;
		let { activeListItem } = this.state;

		const firstListElement = 0;
		const lastListElement = this.props.optionsList.length - 1;

		if (event.key === this.backspaceKey && !term) {
			this.deleteLastItem();
		} else if (event.key === this.escapeKey && toggle) {
			this.setState({ toggle: !toggle });
		} else if (event.key === this.keyDownKey) {
			event.preventDefault();
			if (activeListItem === null) {
				this.setState({ activeListItem: 0 });
			} else if (activeListItem === lastListElement) {
				this.setState({ activeListItem: 0 });
			} else {
				const _activeListItem = ++activeListItem;
				this.setState({ activeListItem: _activeListItem });
			}
		} else if (event.key === this.keyUpKey) {
			event.preventDefault();
			if (activeListItem === firstListElement) {
				this.setState({ activeListItem: lastListElement });
			} else {
				const _activeListItem = --activeListItem;
				this.setState({ activeListItem: _activeListItem });
			}
		} else if (event.key === this.enterKey) {
			event.preventDefault();
			if (toggle && activeListItem !== null) {
				this.onSelect(event, activeListItem);
			} else {
				this.toggle();
			}
		}
	}

	handleOnFocus = () => {
		this.setState(
			{
				toggle: true,
				activeListItem: 0
			});
	}

	highlightListItem = (index: number) => {
		this.setState({ activeListItem: index });
	}

	searchingFor = (term: any) => {
		return (option: any) => {
			return option.toLowerCase().includes(term.toLowerCase());
		};
	}

	render() {
		const { term, activeListItem, toggle } = this.state;

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
				'cs-custom-select-input-wrapper-disabled': disabled,
				'cs-custom-select-input-wrapper-error': error,
				[`cs-custom-select-input-wrapper-${borderType}`]: borderType
			}
		);

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
				<div className="cs-custom-select-group">
					<CSIcon name="search" className="cs-custom-select-search-icon" />
					<div
						className={customSelectInputWrapperClasses}
					>
						{(multiselect &&
							this.state.selectedOptions.length > 0) &&
							<ul className="cs-custom-select-items">
								{this.state.selectedOptions.map((selectedOption, i) => (
									<CSOption
										type="selected-item"
										value={selectedOption}
										key={'selected-item' + i}
										onItemDelete={event => {
											event.preventDefault();
											this.onDelete(i);
										}}
									/>
								))}
							</ul>
						}
						<input
							className="cs-custom-select-input"
							value={term}
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
							onFocus={this.handleOnFocus}
							onBlur={() => this.setState({ toggle: false })}
							{...rest}
						/>
					</div>
				</div>
				{(toggle && !disabled) &&
					<ul
						className="cs-custom-select-dropdown"
						ref={node => this.dropdownNode = node}
					>
						{optionsList.filter(this.searchingFor(term)).map((option, i) => (
							<CSOption
								value={option}
								type="list-item"
								onMouseDown={(event: any) => {
									event.preventDefault();
									this.onSelect(event);
								}}
								key={'list-item' + i}
								selected={this.state.selectedOptions.includes(option)}
								isMultiSelectItem={multiselect}
								active={i === activeListItem}
								onMouseOver={() => this.highlightListItem(i)}
								onMouseOut={() => this.setState({ activeListItem: null })}
							/>
						))}
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
