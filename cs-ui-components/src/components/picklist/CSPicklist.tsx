import React, { CSSProperties, useEffect, useRef, useState, useImperativeHandle, useCallback } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import KeyCode from '../../util/KeyCode';
import CSAutoposition from '../../helpers/autoposition/CSAutoposition';
import { CSAutopositions } from '../../helpers/autoposition/cs-autoposition-types';
import CSLabel from '../CSLabel';
import CSIcon from '../CSIcon';
import CSPicklistOption from './CSPicklistOption';
import CSPicklistDropdownAction from './CSPicklistDropdownAction';
import CSButton, { CSButtonProps } from '../CSButton';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from '../CSFieldErrorMsg';
import CSTooltip, { CSTooltipPosition } from '../CSTooltip';
import CSCustomData, { CSCustomDataAction, CSCustomDataIcon } from '../CSCustomData';

export type CSPicklistDropdownAlignType = 'left' | 'right';
export type CSPicklistDropdownPositionType = 'top' | 'bottom';
export type CSPicklistSearchByType = 'label' | 'all';

export interface CSPicklistOptionInterface {
	key: React.ReactText;
	label: React.ReactText;
}

export interface CSPicklistProps {
	actions?: Array<CSCustomDataAction>;
	options: Array<CSPicklistOptionInterface>;
	align?: CSPicklistDropdownAlignType;
	borderRadius?: string;
	className?: string;
	clearable?: boolean;
	disabled?: boolean;
	dropdownActions?: Array<CSButtonProps>;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	errorTooltip?: boolean;
	gridCustomPopup?: boolean;
	helpText?: string;
	hidden?: boolean;
	icons?: Array<CSCustomDataIcon>;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	multiselect?: boolean;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onClear?: () => void;
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
	onDeselect?: (option: CSPicklistOptionInterface) => void;
	onDropdownClose?: () => void;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onSelect?: (option: CSPicklistOptionInterface) => void;
	placeholder?: string;
	position?: CSPicklistDropdownPositionType;
	readOnly?: boolean;
	required?: boolean;
	searchBy?: CSPicklistSearchByType;
	selectedKeys?: React.ReactText | Array<React.ReactText>;
	showCompactMultiselect?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	[key: string]: any;
}

const CSPicklist = ({
	actions,
	options,
	align = 'left',
	borderRadius,
	className,
	clearable,
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
	onFocus,
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
}: CSPicklistProps) => {
	const { current: uniqueId } = useRef(id || uuidv4());
	const picklistInputWrapperRef = useRef(null);
	const picklistInputRef = useRef(null);
	const picklistDropdownRef = useRef(null);

	const [searchTerm, setSearchTerm] = useState('');
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [focused, setFocused] = useState<boolean>(false);

	const selectedKeysArray = Array.isArray(selectedKeys) ? selectedKeys : [selectedKeys];

	const closeDropdown = useCallback(() => {
		setDropdownVisible(false);
		onDropdownClose?.();
		setSearchTerm('');
	}, [setDropdownVisible, onDropdownClose]);

	useImperativeHandle(forwardRef, () => picklistInputRef.current);

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			const clickOutsideInput = picklistInputWrapperRef.current && !picklistInputWrapperRef.current.contains(event.target);
			const clickOutsideDropdown = picklistDropdownRef.current && !picklistDropdownRef.current.contains(event.target);
			if (clickOutsideInput && clickOutsideDropdown) closeDropdown();
		};

		document.addEventListener('click', handleOutsideClick);

		return () => document.removeEventListener('click', handleOutsideClick);
	}, [picklistInputWrapperRef, picklistDropdownRef, closeDropdown]);

	const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		onBlur?.(event);
		setFocused(false);
	};

	const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
		if (readOnly) return;
		setDropdownVisible(true);
		onClick?.(event);
		picklistInputRef.current?.focus();
	};

	const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
		if (focused) event.preventDefault();
	};

	const picklistWrapperClasses = classNames(
		'cs-picklist-wrapper',
		{
			'cs-picklist-multiselect': multiselect && !showCompactMultiselect,
			'cs-picklist-dropdown-visible': dropdownVisible,
			'cs-element-hidden': hidden,
			[className]: className,
		},
	);

	const inputWrapperClasses = classNames(
		'cs-picklist-input-wrapper',
		'cs-input-wrapper',
		{
			'cs-input-wrapper-error': error,
			'cs-input-wrapper-disabled': disabled,
			'cs-input-wrapper-focused': focused,
			'cs-input-wrapper-read-only': readOnly,
		},
	);

	const picklistInputClasses = classNames(
		'cs-picklist-input',
		'cs-invisible-input',
	);

	const picklistDropdownClasses = classNames(
		'cs-picklist-dropdown-wrapper',
		{
			'ag-custom-component-popup': gridCustomPopup,
		},
	);

	const style: CSSProperties = {
		'--cs-input-border-radius': borderRadius,
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
			const selectedOption = options.find((option: CSPicklistOptionInterface) => option.key === selectedKey);

			if (!selectedOption) return null;

			return (
				<div key={selectedOption.key} className="cs-picklist-multiselect-item">
					<span className="cs-picklist-multiselect-item-value">
						{selectedOption.label}
					</span>
					{!readOnly && (
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
									picklistInputRef.current?.focus();
								}
							}}
						/>
					)}
				</div>
			);
		});
	};

	const renderSelectedOptions = () => {
		if ((multiselect && !showCompactMultiselect) || searchTerm) return null;

		return (
			<span className="cs-picklist-value-wrapper">
				{selectedKeysArray.map((selectedKey: React.ReactText, selectedKeyIndex) => {
					const selectedOption = options.find((option: CSPicklistOptionInterface) => option.key === selectedKey);

					if (!selectedOption || (searchTerm && !showCompactMultiselect)) return null;

					return (
						<span key={selectedOption.key} className="cs-picklist-value">
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
		if (context && picklistInputRef.current) {
			context.font = getComputedStyle(picklistInputRef.current).font;
			width = context.measureText(searchTerm).width;
		}

		return <div className="cs-blinking-cursor" style={{ left: width }} />;
	};

	const renderPicklistInput = () => {
		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			setSearchTerm(event.target.value);
			onSearch?.(event);
		};

		const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
			if (!readOnly) {
				setDropdownVisible(true);
				setFocused(true);
			}
			onFocus?.(event);
		};

		const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
			if (readOnly) return;
			if (event.key === KeyCode.Tab && (event.shiftKey || (!searchTerm && !selectedKeysArray.length))) {
				closeDropdown();
			} else if (event.key === KeyCode.ArrowDown) {
				event.preventDefault();
				setDropdownVisible(true);
				picklistDropdownRef.current?.firstElementChild?.focus();
			} else if (event.key === KeyCode.ArrowUp) {
				event.preventDefault();
				setDropdownVisible(true);
				const lastAction = picklistDropdownRef.current?.parentElement?.lastElementChild?.lastElementChild;
				if (lastAction) lastAction.focus();
				else picklistDropdownRef.current?.lastElementChild?.focus();
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
			<div className="cs-picklist-items">
				{renderSelectedOptions()}
				{renderMultiselectOptions()}
				{renderBlinkingCursor()}
				<input
					className={picklistInputClasses}
					ref={picklistInputRef}
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
					onFocus={handleFocus}
					onBlur={handleBlur}
					onKeyDown={handleKeyDown}
					{...rest}
				/>
			</div>
		);
	};

	const renderClearButton = () => {
		if ((!searchTerm && (!selectedKeysArray.length || !clearable)) || readOnly || disabled) return null;

		const handleClear = (event: React.KeyboardEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement>) => {
			event.stopPropagation();
			if (searchTerm) setSearchTerm('');
			else onClear?.();
			picklistInputRef.current?.focus();
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
				className="cs-picklist-clear-btn"
				iconName="close"
				iconColor="var(--cs-input-clear)"
				size="xsmall"
				label="clear"
				labelHidden
				onKeyDown={handleClearKeyDown}
				onClick={handleClearClick}
			/>
		);
	};

	const renderDropdownIcon = () => {
		if (readOnly) return null;

		return (
			<CSIcon
				className="cs-input-type-indicator-icon"
				name="down"
				rotate={dropdownVisible ? 180 : null}
			/>
		);
	};

	const renderOptions = () => {
		if (!dropdownVisible || disabled || readOnly || !options.length) return null;

		const initialPosition = `${position}-${align === 'left' ? 'right' : 'left'}` as CSAutopositions;

		const filteredOptions = searchTerm === '' ? options : options.filter((option: CSPicklistOptionInterface) => {
			if (searchBy === 'label') return option.label.toString().toLowerCase().includes(searchTerm.toString().toLowerCase());
			return option.label.toString().toLowerCase().includes(searchTerm.toString().toLowerCase()) || option.key.toString().toLowerCase().includes(searchTerm.toString().toLowerCase());
		});

		return (
			<CSAutoposition
				referencePoint={picklistInputWrapperRef.current}
				positionSchema={['top-left', 'top-right', 'bottom-right', 'bottom-left']}
				initialPosition={initialPosition}
				zIndex="var(--z-index-picklist-dropdown)"
				trackRefPointWidth
			>
				<div className={picklistDropdownClasses}>
					<ul ref={picklistDropdownRef} className="cs-picklist-dropdown">
						{!filteredOptions.length && (
							<li className="cs-picklist-no-data">
								<CSIcon name="error" color="var(--cs-picklist-no-data-c)" />
								<span className="cs-picklist-no-data-text">No data found</span>
							</li>
						)}
						{filteredOptions.map((option: CSPicklistOptionInterface) => (
							<CSPicklistOption
								key={option.key}
								option={option}
								selected={selectedKeysArray.indexOf(option.key) !== -1}
								multiselect={multiselect}
								focusInput={() => picklistInputRef.current?.focus()}
								closeDropdown={closeDropdown}
								onSelectChange={onSelect}
							/>
						))}
					</ul>
					{!dropdownActions ? '' : (
						<div className="cs-picklist-dropdown-action-wrapper">
							{dropdownActions?.map((button: CSButtonProps, buttonIndex: number) => (
								<CSPicklistDropdownAction
									// eslint-disable-next-line react/no-array-index-key
									key={buttonIndex}
									action={button}
									focusInput={() => picklistInputRef.current?.focus()}
									closeDropdown={closeDropdown}
								/>
							))}
						</div>
					)}
				</div>
			</CSAutoposition>
		);
	};

	const renderErrorMessage = () => {
		if (!error || !errorMessage || errorTooltip) return null;

		return <CSFieldErrorMsg message={errorMessage} />;
	};

	const renderErrorTooltip = () => {
		if (!error || !errorTooltip) return null;

		return <CSTooltip variant="error" content={errorMessage} />;
	};

	return (
		<div className={picklistWrapperClasses} id={id}>
			{renderLabel()}
			{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
			<div
				className={inputWrapperClasses}
				onClick={handleClick}
				onMouseDown={handleMouseDown}
				ref={picklistInputWrapperRef}
				style={style}
			>
				{renderPicklistInput()}
				{renderClearButton()}
				<CSCustomData actions={actions} icons={icons} />
				{renderErrorTooltip()}
				{renderDropdownIcon()}
			</div>
			{renderErrorMessage()}
			{renderOptions()}
		</div>
	);
};

const CSPicklistWithRef = React.forwardRef<HTMLInputElement, CSPicklistProps>((props: CSPicklistProps, ref) => <CSPicklist {...props} forwardRef={ref} />);

CSPicklistWithRef.displayName = 'CSPicklist';

export default CSPicklistWithRef;
