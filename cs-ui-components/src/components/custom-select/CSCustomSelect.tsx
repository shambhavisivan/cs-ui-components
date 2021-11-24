import React, { CSSProperties, useEffect, useRef, useState, useImperativeHandle } from 'react';
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

export type CSCustomSelectDropdownAlignType = 'left' | 'right';
export type CSCustomSelectDropdownPositionType = 'top' | 'bottom';
export type CSCustomSelectSearchByType = 'label' | 'all';

export interface CSCustomSelectOptionInterface {
	key: React.ReactText;
	label: React.ReactText;
}

export interface CSCustomSelectProps {
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
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	multiselect?: boolean;
	onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onSelect?: (option: CSCustomSelectOptionInterface) => void;
	onDeselect?: (option: CSCustomSelectOptionInterface) => void;
	onClear?: () => void;
	position?: CSCustomSelectDropdownPositionType;
	placeholder?: string;
	required?: boolean;
	searchBy?: CSCustomSelectSearchByType;
	selectedKeys?: React.ReactText | Array<React.ReactText>;
	showCompactMultiselect?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	[key: string]: any;
}

const CSCustomSelect = ({
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
	id,
	label,
	labelHidden,
	labelTitle,
	multiselect,
	onClear,
	onDeselect,
	onSearch,
	onSelect,
	position = 'bottom',
	placeholder,
	required,
	searchBy = 'label',
	selectedKeys = [],
	showCompactMultiselect,
	title,
	tooltipPosition,
	...rest
}: CSCustomSelectProps) => {
	const { current: uniqueId } = useRef(uuidv4());
	const customSelectInputWrapperRef = useRef(null);
	const customSelectInputRef = useRef(null);
	const customSelectDropdownRef = useRef(null);
	const customSelectWrapperRef = useRef(null);

	const [searchTerm, setSearchTerm] = useState('');
	const [dropdownVisible, setDropdownVisible] = useState(false);

	const selectedKeysArray = Array.isArray(selectedKeys) ? selectedKeys : [selectedKeys];

	useImperativeHandle(forwardRef, () => customSelectInputRef.current);

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			const clickOutsideInput = customSelectWrapperRef.current && !customSelectWrapperRef.current.contains(event.target);
			const clickOutsideDropdown = customSelectDropdownRef.current && !customSelectDropdownRef.current.contains(event.target);
			if (clickOutsideInput && clickOutsideDropdown) setDropdownVisible(false);
		};

		document.addEventListener('click', handleOutsideClick);

		return () => document.removeEventListener('click', handleOutsideClick);
	}, [customSelectWrapperRef, customSelectDropdownRef]);

	const customSelectWrapperClasses = classNames(
		'cs-custom-select-wrapper',
		{
			'cs-element-hidden': hidden,
			[className]: className,
		},
	);

	const customSelectInputWrapperClasses = classNames(
		'cs-custom-select-input-wrapper',
		{
			'cs-custom-select-input-wrapper-disabled': disabled,
			'cs-custom-select-input-wrapper-error': error,
			'cs-custom-select-input-wrapper-multiselect': selectedKeysArray.length && multiselect && !showCompactMultiselect,
			'cs-custom-select-dropdown-visible': dropdownVisible,
		},
	);

	const customSelectInputClasses = classNames(
		'cs-custom-select-input',
		{
			'cs-custom-select-input-multiselect': multiselect && !showCompactMultiselect,
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

	const customSelectDropdownStyle: CSSProperties = {
		'--cs-custom-select-input-width': customSelectInputWrapperRef.current && `${customSelectInputWrapperRef.current.getBoundingClientRect().width}px`,
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

	const renderBlinkingCursor = () => {
		if (!dropdownVisible) return null;

		return <span className="cs-blinking-cursor" />;
	};

	const renderMultiselectOptions = () => {
		if (!multiselect || showCompactMultiselect || !selectedKeysArray.length) return null;

		return (
			<ul className="cs-custom-select-items">
				{selectedKeysArray.map((selectedKey: React.ReactText) => {
					const selectedOption = options.find((option: CSCustomSelectOptionInterface) => option.key === selectedKey);

					if (!selectedOption) return null;

					return (
						<li key={selectedOption.key} className="cs-custom-select-option cs-custom-select-item-multiselect">
							<span className="cs-custom-select-option-value">
								{selectedOption.label}
							</span>
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
						</li>
					);
				})}
			</ul>
		);
	};

	const renderCustomSelectInput = () => {
		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			setSearchTerm(event.target.value);
			onSearch?.(event);
		};

		return (
			<span className={customSelectInputClasses}>
				<input
					ref={customSelectInputRef}
					value={searchTerm}
					type="text"
					onChange={handleChange}
					id={uniqueId}
					required={required}
					disabled={disabled}
					role="listbox"
					aria-invalid={error}
					aria-expanded={dropdownVisible}
					aria-multiselectable={multiselect}
					aria-required={required}
					title={title}
					autoComplete="off"
					placeholder={!selectedKeysArray.length ? placeholder : ''}
					onClick={() => setDropdownVisible(true)}
					onFocus={() => setDropdownVisible(true)}
					onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
						if (event.key === KeyCode.Tab && (event.shiftKey || (!searchTerm && !selectedKeysArray.length))) {
							setDropdownVisible(false);
						} else if (event.key === KeyCode.ArrowDown) {
							event.preventDefault();
							setDropdownVisible(true);
							customSelectDropdownRef.current?.firstElementChild?.focus();
						} else if (event.key === KeyCode.ArrowUp) {
							event.preventDefault();
							setDropdownVisible(true);
							customSelectDropdownRef.current?.lastElementChild?.focus();
						} else if (event.key === KeyCode.Backspace && !searchTerm && multiselect && selectedKeysArray.length) {
							const lastSelectedOption = options.find((option: CSCustomSelectOptionInterface) => option.key === selectedKeysArray[selectedKeysArray.length - 1]);
							if (lastSelectedOption) onDeselect?.(lastSelectedOption);
						} else if (event.key === KeyCode.Escape && dropdownVisible) {
							setDropdownVisible(false);
						} else if (event.key === KeyCode.Enter) {
							setDropdownVisible((prevDropdownVisible) => !prevDropdownVisible);
						} else {
							setDropdownVisible(true);
						}
					}}
					{...rest}
				/>
			</span>
		);
	};

	const renderSelectedOptions = () => {
		if (multiselect && !showCompactMultiselect) return null;

		return selectedKeysArray.map((selectedKey: React.ReactText, selectedKeyIndex) => {
			const selectedOption = options.find((option: CSCustomSelectOptionInterface) => option.key === selectedKey);

			if (!selectedOption || searchTerm) return null;

			return (
				<span key={selectedOption.key} className={selectedListItemClasses}>
					{selectedKeyIndex ? ', ' : null}
					{selectedOption.label}
				</span>
			);
		});
	};

	const renderClearButton = () => {
		if (!searchTerm && !selectedKeysArray.length) return null;

		const handleClear = (event: React.KeyboardEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement>) => {
			event.stopPropagation();
			onClear?.();
			setSearchTerm('');
			customSelectInputRef.current?.focus();
		};

		const handleClearClick = (event: React.MouseEvent<HTMLButtonElement>) => {
			handleClear(event);
		};

		const handleClearKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
			if (event.key === KeyCode.Tab && (!event.shiftKey || (!searchTerm && !selectedKeysArray.length))) {
				setDropdownVisible(false);
			} else if (event.key === KeyCode.Enter) {
				handleClear(event);
			}
		};

		return (
			<CSButton
				btnType="transparent"
				btnStyle="brand"
				className="cs-custom-select-clear"
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

	const renderDropdownChevron = () => (
		<CSIcon
			name="down"
			rotate={dropdownVisible ? 180 : 360}
			className="cs-custom-select-icon"
		/>
	);

	const renderErrorMessage = () => {
		if (error && errorMessage) return <CSFieldErrorMsg message={errorMessage} tooltipMessage={errorTooltip} />;
		return null;
	};

	const renderOptions = () => {
		if (!dropdownVisible || disabled || !options.length) return null;

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
			>
				<div style={customSelectDropdownStyle} className={customSelectDropdownClasses}>
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
								setDropdownVisible={setDropdownVisible}
								onSelectChange={onSelect}
							/>
						))}
						{dropdownActions?.map((button: CSButtonProps, buttonIndex: number) => (
							<CSCustomSelectDropdownAction
								// eslint-disable-next-line react/no-array-index-key
								key={buttonIndex}
								action={button}
								focusInput={() => customSelectInputRef.current?.focus()}
								setDropdownVisible={setDropdownVisible}
							/>
						))}
					</ul>
				</div>
			</CSAutoposition>
		);
	};

	return (
		<div
			id={id}
			ref={customSelectWrapperRef}
			className={customSelectWrapperClasses}
		>
			{renderLabel()}
			<div
				ref={customSelectInputWrapperRef}
				className={customSelectInputWrapperClasses}
				style={style}
			>
				{renderMultiselectOptions()}
				{renderBlinkingCursor()}
				{renderCustomSelectInput()}
				<span className="cs-custom-select-value-wrapper">
					{renderSelectedOptions()}
				</span>
				{renderClearButton()}
				{renderDropdownChevron()}
			</div>
			{renderErrorMessage()}
			{renderOptions()}
		</div>
	);
};

const CSCustomSelectWithRef = React.forwardRef<HTMLInputElement, CSCustomSelectProps>((props: CSCustomSelectProps, ref) => <CSCustomSelect {...props} forwardRef={ref} />);

CSCustomSelectWithRef.displayName = 'CSCustomSelect';

export default CSCustomSelectWithRef;
