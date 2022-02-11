import React, { CSSProperties, useEffect, useRef, useState, useImperativeHandle, useCallback } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import KeyCode from '../../util/KeyCode';
import CSAutoposition from '../../helpers/autoposition/CSAutoposition';
import { CSAutopositions } from '../../helpers/autoposition/cs-autoposition-types';
import CSLabel from '../CSLabel';
import CSIcon from '../CSIcon';
import CSCustomSelectOption from './CSCustomSelectOption';
import CSCustomSelectDropdownAction from './CSCustomSelectDropdownAction';
import CSButton, { CSButtonProps } from '../CSButton';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from '../CSFieldErrorMsg';
import { CSTooltipPosition } from '../CSTooltip';
import { CSCustomDataIconProps, CSCustomDataActionProps } from '../custom-data/CSCustomData';
import CSCustomDataIcons from '../custom-data/CSCustomDataIcons';
import CSCustomDataActions from '../custom-data/CSCustomDataActions';

export type CSCustomSelectDropdownAlignType = 'left' | 'right';
export type CSCustomSelectDropdownPositionType = 'top' | 'bottom';
export type CSCustomSelectSearchByType = 'label' | 'all';

export interface CSCustomSelectOptionInterface {
	key: React.ReactText;
	label: React.ReactText;
}

export interface CSCustomSelectProps {
	actions?: Array<CSCustomDataActionProps>;
	options: Array<CSCustomSelectOptionInterface>;
	align?: CSCustomSelectDropdownAlignType;
	borderRadius?: string;
	className?: string;
	disabled?: boolean;
	dropdownActions?: Array<CSButtonProps>;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	errorTooltip?: boolean;
	gridCustomPopup?: boolean;
	helpText?: string;
	hidden?: boolean;
	icons?: Array<CSCustomDataIconProps>;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	multiselect?: boolean;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onClear?: () => void;
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
	onDeselect?: (option: CSCustomSelectOptionInterface) => void;
	onDropdownClose?: () => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onSelect?: (option: CSCustomSelectOptionInterface) => void;
	placeholder?: string;
	position?: CSCustomSelectDropdownPositionType;
	readOnly?: boolean;
	required?: boolean;
	searchBy?: CSCustomSelectSearchByType;
	selectedKeys?: React.ReactText | Array<React.ReactText>;
	showCompactMultiselect?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	[key: string]: any;
}

const CSCustomSelect = ({
	actions,
	options,
	align = 'left',
	borderRadius,
	className,
	disabled,
	dropdownActions,
	error,
	errorMessage,
	errorTooltip = false,
	forwardRef,
	gridCustomPopup,
	helpText,
	hidden,
	icons,
	id,
	label,
	labelHidden,
	labelTitle,
	multiselect,
	onBlur,
	onClear,
	onClick,
	onDeselect,
	onDropdownClose,
	onKeyDown,
	onSearch,
	onSelect,
	position = 'bottom',
	placeholder,
	readOnly,
	required,
	searchBy = 'label',
	selectedKeys = [],
	showCompactMultiselect,
	title,
	tooltipPosition,
	...rest
}: CSCustomSelectProps) => {
	const { current: uniqueId } = useRef(id || uuidv4());
	const customSelectInputWrapperRef = useRef(null);
	const customSelectInputRef = useRef(null);
	const customSelectDropdownRef = useRef(null);
	const customSelectOptionsWrapperRef = useRef(null);

	const [searchTerm, setSearchTerm] = useState('');
	const [dropdownVisible, setDropdownVisible] = useState(false);

	const selectedKeysArray = Array.isArray(selectedKeys) ? selectedKeys : [selectedKeys];

	const closeDropdown = useCallback(() => {
		setDropdownVisible(false);
		onDropdownClose?.();
		setSearchTerm('');
	}, [setDropdownVisible, onDropdownClose]);

	const removeLastOption = () => {
		if (!searchTerm && multiselect && selectedKeysArray.length) {
			const lastSelectedOption = options.find((option: CSCustomSelectOptionInterface) => option.key === selectedKeysArray[selectedKeysArray.length - 1]);
			if (lastSelectedOption) onDeselect?.(lastSelectedOption);
		}
	};

	useImperativeHandle(forwardRef, () => customSelectInputRef.current);

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			const clickOutsideInput = customSelectInputWrapperRef.current && !customSelectInputWrapperRef.current.contains(event.target);
			const clickOutsideDropdown = customSelectDropdownRef.current && !customSelectDropdownRef.current.contains(event.target);
			if (clickOutsideInput && clickOutsideDropdown) closeDropdown();
		};

		document.addEventListener('click', handleOutsideClick);

		return () => document.removeEventListener('click', handleOutsideClick);
	}, [customSelectInputWrapperRef, customSelectDropdownRef, closeDropdown]);

	const getOptionsSpacing = () => {
		if (actions) return '52px';
		if (icons) return '34px';
		if (errorTooltip) return '0px';

		return customSelectOptionsWrapperRef.current && `${customSelectOptionsWrapperRef.current.getBoundingClientRect().width}px`;
	};

	const customSelectWrapperClasses = classNames(
		'cs-custom-select-wrapper',
		{
			'cs-element-hidden': hidden,
			'cs-custom-select-wrapper-read-only': readOnly,
			[className]: className,
			'cs-custom-select-wrapper-options': actions || icons,
		},
	);

	const customSelectInputWrapperClasses = classNames(
		'cs-custom-select-input-wrapper',
		{
			'cs-custom-select-input-wrapper-disabled': disabled,
			'cs-custom-select-input-wrapper-read-only': readOnly,
			'cs-custom-select-input-wrapper-error': error,
			'cs-custom-select-input-wrapper-multiselect': multiselect,
			'cs-custom-select-dropdown-visible': dropdownVisible,
		},
	);

	const customSelectInputClasses = classNames(
		'cs-custom-select-input',
		{
			'cs-custom-select-input-error-tooltip': errorTooltip,
		},
	);

	const customSelectDropdownClasses = classNames(
		'cs-custom-select-dropdown-wrapper',
		{
			'ag-custom-component-popup': gridCustomPopup,
		},
	);

	const selectedListItemClasses = classNames(
		'cs-custom-select-value',
		{
			'cs-custom-select-dropdown-visible': dropdownVisible,
		},
	);

	const style: CSSProperties = {
		'--cs-custom-select-border-radius': borderRadius,
	};

	const customSelectClearClasses = classNames(
		'cs-custom-select-clear',
		{
			'cs-custom-select-clear-options': actions || icons,
		},
	);

	const customSelectDropdownWrapperStyle: CSSProperties = {
		'--cs-custom-select-options-spacing': actions && icons ? '86px' : getOptionsSpacing(),
	};

	const renderLabel = () => {
		if (!label || labelHidden) return null;

		return (
			<CSLabel
				htmlFor={uniqueId}
				label={label}
				helpText={helpText}
				tooltipPosition={tooltipPosition}
				required={required}
				title={labelTitle ? label : null}
			/>
		);
	};

	const renderMultiselectOptions = () => {
		if (readOnly || disabled || !multiselect || showCompactMultiselect || !selectedKeysArray.length) return null;

		return selectedKeysArray.map((selectedKey: React.ReactText) => {
			const selectedOption = options.find((option: CSCustomSelectOptionInterface) => option.key === selectedKey);

			if (!selectedOption) return null;

			return (
				<li key={selectedOption.key} className="cs-custom-select-option cs-custom-select-item-multiselect">
					<span className="cs-custom-select-option-value">
						{selectedOption.label}
					</span>
					{!readOnly
						? (
							<CSButton
								size="xsmall"
								btnType="transparent"
								iconColor="var(--cs-option-ms-item-selected-delete)"
								iconName="close"
								iconSize="0.75rem"
								ariaLabel={`Deselect ${selectedOption.label}`}
								label="Deselect item"
								labelHidden
								onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
									event.preventDefault();
									onDeselect?.(selectedOption);
								}}
								onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) => {
									if (event.key === KeyCode.Enter) {
										event.preventDefault();
										onDeselect?.(selectedOption);
										customSelectInputRef.current?.focus();
									}
								}}
							/>
						) : null}
				</li>
			);
		});
	};

	const renderSelectedOptions = () => {
		if (((multiselect && !readOnly) && !showCompactMultiselect) || disabled) return null;

		return (
			<span className="cs-custom-select-value-wrapper">
				{selectedKeysArray.map((selectedKey: React.ReactText, selectedKeyIndex) => {
					const selectedOption = options.find((option: CSCustomSelectOptionInterface) => option.key === selectedKey);

					if (!selectedOption || (searchTerm && !showCompactMultiselect)) return null;

					return (
						<span key={selectedOption.key} className={selectedListItemClasses}>
							{selectedKeyIndex ? ', ' : null}
							{selectedOption.label}
						</span>
					);
				})}
			</span>
		);
	};

	const renderBlinkingCursor = () => {
		if (!dropdownVisible || readOnly) return null;

		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		let width = 0;
		if (context && customSelectInputRef.current) {
			context.font = getComputedStyle(customSelectInputRef.current).font;
			width = context.measureText(searchTerm).width;
		}

		return <div className="cs-blinking-cursor" style={{ left: width }} />;
	};

	const renderCustomSelectInput = () => {
		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			setSearchTerm(event.target.value);
			onSearch?.(event);
		};

		const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
			if (readOnly) return;
			setDropdownVisible(true);
			onClick?.(event);
		};

		const handleFocus = () => (!readOnly ? setDropdownVisible(true) : null);

		const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
			if (readOnly) return;
			if (event.key === KeyCode.Tab && (event.shiftKey || (!searchTerm && !selectedKeysArray.length))) {
				closeDropdown();
			} else if (event.key === KeyCode.ArrowDown) {
				event.preventDefault();
				setDropdownVisible(true);
				customSelectDropdownRef.current?.firstElementChild?.focus();
			} else if (event.key === KeyCode.ArrowUp) {
				event.preventDefault();
				setDropdownVisible(true);
				const lastAction = customSelectDropdownRef.current?.parentElement?.lastElementChild?.lastElementChild;
				if (lastAction) lastAction.focus();
				else customSelectDropdownRef.current?.lastElementChild?.focus();
			} else if (event.key === KeyCode.Backspace) {
				removeLastOption();
			} else if (event.key === KeyCode.Escape && dropdownVisible) {
				closeDropdown();
			} else if (event.key === KeyCode.Enter) {
				setDropdownVisible((prevDropdownVisible) => {
					if (prevDropdownVisible) onDropdownClose?.();
					return !prevDropdownVisible;
				});
			} else {
				setDropdownVisible(true);
			}
			onKeyDown?.(event);
		};

		return (
			<ul className="cs-custom-select-items">
				{renderSelectedOptions()}
				{renderMultiselectOptions()}
				<div className={customSelectInputClasses}>
					{renderBlinkingCursor()}
					<input
						ref={customSelectInputRef}
						value={searchTerm}
						type="text"
						onChange={handleChange}
						id={uniqueId}
						required={required}
						disabled={disabled}
						readOnly={readOnly}
						role="listbox"
						aria-invalid={error}
						aria-expanded={dropdownVisible}
						aria-multiselectable={multiselect}
						aria-readonly={readOnly}
						aria-required={required}
						title={title}
						autoComplete="off"
						placeholder={!selectedKeysArray.length ? placeholder : ''}
						onClick={handleClick}
						onFocus={handleFocus}
						onBlur={onBlur}
						onKeyDown={handleKeyDown}
						{...rest}
					/>
				</div>
			</ul>
		);
	};

	const inputOptions = (actions || icons) && (
		<div className="cs-custom-select-options">
			{icons?.length && <CSCustomDataIcons icons={icons} />}
			{actions?.length && <CSCustomDataActions actions={actions} />}
		</div>
	);

	const tooltipMessage = (error && errorTooltip) && (
		<div className="cs-custom-select-error-message">
			<CSFieldErrorMsg message={errorMessage} tooltipMessage={errorTooltip} />
		</div>
	);

	const renderClearButton = () => {
		if ((!searchTerm && !selectedKeysArray.length) || readOnly || disabled) return null;

		const handleClear = (event: React.KeyboardEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement>) => {
			event.stopPropagation();
			if (searchTerm) setSearchTerm('');
			else onClear?.();
			customSelectInputRef.current?.focus();
		};

		const handleClearClick = (event: React.MouseEvent<HTMLButtonElement>) => {
			handleClear(event);
		};

		const handleClearKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
			if (event.key === KeyCode.Tab && (!event.shiftKey || (!searchTerm && !selectedKeysArray.length))) {
				closeDropdown();
			} else if (event.key === KeyCode.Enter) {
				handleClear(event);
			}
		};

		return (
			<CSButton
				btnType="transparent"
				btnStyle="brand"
				className={customSelectClearClasses}
				iconColor="var(--cs-input-clear)"
				iconName="close"
				label="clear"
				labelHidden
				onKeyDown={handleClearKeyDown}
				onClick={handleClearClick}
				size="xsmall"
			/>
		);
	};

	const renderDropdownChevron = () => {
		if (disabled || readOnly) return null;

		return (
			<CSIcon
				name="down"
				rotate={dropdownVisible ? 180 : null}
				className="cs-custom-select-icon"
			/>
		);
	};

	const renderOptions = () => {
		if (!dropdownVisible || disabled || readOnly || !options.length) return null;

		const initialPosition = `${position}-${align === 'left' ? 'right' : 'left'}` as CSAutopositions;

		const filteredOptions = searchTerm === '' ? options : options.filter((option: CSCustomSelectOptionInterface) => {
			if (searchBy === 'label') return option.label.toString().toLowerCase().includes(searchTerm.toString().toLowerCase());
			return option.label.toString().toLowerCase().includes(searchTerm.toString().toLowerCase()) || option.key.toString().toLowerCase().includes(searchTerm.toString().toLowerCase());
		});

		return (
			<CSAutoposition
				referencePoint={customSelectInputWrapperRef.current}
				positionSchema={['top-left', 'top-right', 'bottom-right', 'bottom-left']}
				initialPosition={initialPosition}
				zIndex="var(--z-index-custom-select-dropdown)"
				trackRefPointWidth
			>
				<div className={customSelectDropdownClasses}>
					<ul ref={customSelectDropdownRef} className="cs-custom-select-dropdown">
						{!filteredOptions.length && (
							<li className="cs-custom-select-no-data">
								<CSIcon name="error" color="var(--cs-custom-select-no-data-c)" />
								<span className="cs-custom-select-no-data-text">No data found</span>
							</li>
						)}
						{filteredOptions.map((option: CSCustomSelectOptionInterface) => (
							<CSCustomSelectOption
								key={option.key}
								option={option}
								selected={selectedKeysArray.indexOf(option.key) !== -1}
								multiselect={multiselect}
								focusInput={() => customSelectInputRef.current?.focus()}
								closeDropdown={closeDropdown}
								removeLastOption={removeLastOption}
								onSelectChange={onSelect}
							/>
						))}
					</ul>
					{!dropdownActions ? '' : (
						<div className="cs-custom-select-dropdown-action-wrapper">
							{dropdownActions?.map((button: CSButtonProps, buttonIndex: number) => (
								<CSCustomSelectDropdownAction
									// eslint-disable-next-line react/no-array-index-key
									key={buttonIndex}
									action={button}
									focusInput={() => customSelectInputRef.current?.focus()}
									closeDropdown={closeDropdown}
									removeLastOption={removeLastOption}
								/>
							))}
						</div>
					)}
				</div>
			</CSAutoposition>
		);
	};

	return (
		<div
			id={id}
			className={customSelectWrapperClasses}
			style={customSelectDropdownWrapperStyle}
		>
			{renderLabel()}
			{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
			<div
				ref={customSelectInputWrapperRef}
				className={customSelectInputWrapperClasses}
				style={style}
				onClick={() => customSelectInputRef.current.focus()}
			>
				{renderCustomSelectInput()}
				{renderClearButton()}
				{renderDropdownChevron()}
				{(actions || icons || errorTooltip) && (
					<div className="cs-custom-select-wrapper-inner-content" ref={customSelectOptionsWrapperRef}>
						{inputOptions}
						{tooltipMessage}
					</div>
				)}
			</div>
			{!errorTooltip
				&& error
				&& errorMessage
				&& <CSFieldErrorMsg message={errorMessage} />}
			{renderOptions()}
		</div>
	);
};

const CSCustomSelectWithRef = React.forwardRef<HTMLInputElement, CSCustomSelectProps>((props: CSCustomSelectProps, ref) => <CSCustomSelect {...props} forwardRef={ref} />);

CSCustomSelectWithRef.displayName = 'CSCustomSelect';

export default CSCustomSelectWithRef;
