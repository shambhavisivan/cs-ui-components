import React, { CSSProperties, useState, useRef, useEffect, useCallback, useImperativeHandle, useMemo } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { debounce } from 'lodash';

import CSLabel from './CSLabel';
import CSButton from './CSButton';
import CSIcon from './CSIcon';
import CSCustomData, { CSCustomDataAction, CSCustomDataIcon } from './CSCustomData';
import CSDataTable, { CSDataTableColumnInterface, CSDataTableRowInterface } from './data-table/CSDataTable';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSAutoposition from '../helpers/autoposition/CSAutoposition';
import { CSAutopositions } from '../helpers/autoposition/cs-autoposition-types';
import CSTooltip, { CSTooltipPosition } from './CSTooltip';
import KeyCode from '../util/KeyCode';

export type CSLookupDropdownAlign = 'left' | 'right';
export type CSLookupDropdownPosition = 'top' | 'bottom';

export interface CSLookupCommonProps {
	columns: Array<CSDataTableColumnInterface>;
	actions?: Array<CSCustomDataAction>;
	align?: CSLookupDropdownAlign;
	autoFocus?: boolean;
	borderRadius?: string;
	className?: string;
	disabled?: boolean;
	dropdownHeight?: string;
	dropdownWidth?: string;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	errorTooltip?: boolean;
	fieldToBeDisplayed: string;
	gridCustomPopup?: boolean;
	helpText?: string;
	hidden?: boolean;
	icons?: Array<CSCustomDataIcon>;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	multiselect?: boolean;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>, value?: CSDataTableRowInterface | Array<CSDataTableRowInterface>) => void;
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
	onDropdownClose?: () => void;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onSelectChange?: (value?: CSDataTableRowInterface | Array<CSDataTableRowInterface>) => any;
	placeholder?: string;
	position?: CSLookupDropdownPosition;
	readOnly?: boolean;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: CSDataTableRowInterface | Array<CSDataTableRowInterface> | null;
	[key: string]: any;
}

export interface CSLookupFetchResult {
	records: Array<CSDataTableRowInterface>;
	moreRecords: boolean;
}

export interface CSLookupServerProps {
	fetchOptions: (searchTerm: string, pageSize: number, pageNo: number) => Promise<CSLookupFetchResult>;
	infiniteScroll?: boolean;
	minTermLength?: number;
	mode: 'server';
	pageSize: number;
}

export interface CSLookupClientProps {
	loading?: boolean;
	options: Array<CSDataTableRowInterface>;
	mode: 'client';
	searchBy?: Array<string>;
}

export type CSLookupProps = CSLookupCommonProps & (CSLookupClientProps | CSLookupServerProps);

export type CSLookupFetchingMode = 'after-search' | 'after-scroll' | 'after-dropdown-open' | undefined;

const CSLookup = ({
	actions,
	align = 'left',
	autoFocus,
	borderRadius,
	className,
	disabled,
	error,
	errorMessage,
	errorTooltip,
	forwardRef,
	options,
	fetchOptions,
	fieldToBeDisplayed,
	gridCustomPopup,
	helpText,
	hidden,
	icons,
	id,
	infiniteScroll,
	label,
	labelHidden,
	labelTitle,
	dropdownHeight,
	dropdownWidth,
	loading,
	columns,
	minTermLength = 0,
	mode = 'client',
	multiselect,
	onBlur,
	onClick,
	onFocus,
	onDropdownClose,
	onKeyDown,
	onSearch,
	onSelectChange,
	pageSize,
	placeholder,
	position = 'bottom',
	readOnly,
	required,
	searchBy,
	title,
	tooltipPosition,
	value,
	...rest
}: CSLookupProps) => {
	const { current: uniqueId } = useRef<string>(id || uuidv4());

	const lookupDropdownRef = useRef<HTMLDivElement>(null);
	const lookupCloseButtonRef = useRef<HTMLButtonElement>(null);
	const lookupInputRef = useRef<HTMLInputElement>(null);
	const lookupInputWrapperRef = useRef<HTMLDivElement>(null);

	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [dropdownOptions, setDropdownOptions] = useState<Array<CSDataTableRowInterface>>([]);
	const [fetchingMode, setFetchingMode] = useState<CSLookupFetchingMode>(undefined);
	const [moreRecords, setMoreRecords] = useState(true);
	const [pageNo, setPageNo] = useState(0);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedOptions, setSelectedOptions] = useState<Array<CSDataTableRowInterface>>([]);
	const [focused, setFocused] = useState<boolean>(false);

	const mounted = useRef(false);

	useImperativeHandle(forwardRef, () => lookupInputRef.current);

	useEffect(() => {
		mounted.current = true;
		if (mode === 'client') {
			setDropdownOptions(options);
		}
		return () => { mounted.current = false; };
	}, [mode, options]);

	useEffect(() => {
		setDropdownOptions(options);
	}, [options]);

	useEffect(() => {
		let selectedOptionsTemp = value || [];
		if (Array.isArray(selectedOptionsTemp)) {
			if (!multiselect && selectedOptionsTemp.length > 1) selectedOptionsTemp = [selectedOptionsTemp[0]];
		} else selectedOptionsTemp = [selectedOptionsTemp];

		setSelectedOptions(selectedOptionsTemp);
	}, [value, multiselect]);

	const fetchData = useCallback(async (searchValue: string) => {
		try {
			const fetchResults = await fetchOptions(searchValue, pageSize, pageNo);
			if (mounted.current) {
				setDropdownOptions((prevState) => (fetchingMode === 'after-scroll'
					? [...prevState, ...fetchResults.records]
					: fetchResults.records));
				setFetchingMode(undefined);
				setMoreRecords(fetchResults.moreRecords);
			}
		} catch (err) {
			console.error(`Lookup options couldn't be fetched: ${err}`);
		} finally {
			if (minTermLength !== 0 && searchValue.length < minTermLength) {
				setDropdownOptions([]);
			}
		}
	}, [fetchOptions, fetchingMode, minTermLength, mounted, pageNo, pageSize]);

	useEffect(() => {
		if (fetchingMode !== undefined && fetchingMode !== 'after-search') {
			fetchData(searchTerm);
		}
	}, [fetchingMode, fetchData, searchTerm]);

	const closeDropdown = useCallback(() => {
		setDropdownVisible(false);
		setPageNo(0);
		setMoreRecords(true);
		setDropdownOptions(mode === 'client' ? options : []);
		setSearchTerm('');

		onDropdownClose?.();
	}, [setDropdownVisible, onDropdownClose, mode, options]);

	useEffect(() => {
		const handleOutsideClick = (event: any) => {
			const clickOutsideInput = lookupInputWrapperRef.current && !lookupInputWrapperRef.current.contains(event.target);
			const clickOutsideDropdown = lookupDropdownRef.current && !lookupDropdownRef.current.contains(event.target);
			if (clickOutsideInput && clickOutsideDropdown) closeDropdown();
		};

		document.addEventListener('click', handleOutsideClick);

		return () => document.removeEventListener('click', handleOutsideClick, true);
	}, [lookupInputWrapperRef, lookupDropdownRef, closeDropdown]);

	const executeClientSearch = (searchValue: string) => {
		if (!searchValue) {
			setDropdownOptions(options);
		} else {
			setDropdownOptions(options.filter((option: CSDataTableRowInterface) => {
				// Search by selected keys
				if (searchBy?.length) return searchBy.some((searchKey: string) => option?.data?.[searchKey]?.toString().toLowerCase().includes(searchValue.toString().toLowerCase()));
				// Or search by all keys
				return columns.some((column: CSDataTableColumnInterface) => option?.data?.[column.key]?.toString().toLowerCase().includes(searchValue.toString().toLowerCase()));
			}));
		}
	};

	const executeServerSearch = useCallback((searchValue: string) => {
		if (minTermLength !== 0 && searchValue.length < minTermLength) return;
		fetchData(searchValue);
	}, [fetchData, minTermLength]);

	const executeServerSearchDebounced = useMemo(() => debounce((searchValue: string) => executeServerSearch(searchValue), 500), [executeServerSearch]);

	const executeSearch = (searchValue: string) => {
		if (mode === 'client') {
			executeClientSearch(searchValue);
		} else executeServerSearchDebounced(searchValue);
	};

	const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		if (!readOnly) {
			setFocused(false);
			onBlur?.(event, multiselect ? selectedOptions : selectedOptions?.[0]);
		}
	};

	const openDropdown = () => {
		if (readOnly || !lookupInputRef.current) return;
		setDropdownVisible(true);

		if (mode === 'server' && minTermLength === 0) {
			setFetchingMode('after-dropdown-open');
		}
	};

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		onSearch?.(event);

		if (!dropdownVisible) openDropdown();

		const fieldValue = event.target.value || '';

		setSearchTerm(fieldValue);
		setFetchingMode(mode === 'server' ? 'after-search' : undefined);
		setDropdownOptions([]);
		setPageNo(0);

		executeSearch(fieldValue);
	};

	const selectAction = async (selectedOption: CSDataTableRowInterface) => {
		const prevIndex = selectedOptions.findIndex((prevSelectedOption) => prevSelectedOption.key === selectedOption.key);
		const newSelectedOptions = [...selectedOptions];

		if (prevIndex !== -1 && multiselect) newSelectedOptions.splice(prevIndex, 1);
		else if (multiselect) newSelectedOptions.push(selectedOption);
		else newSelectedOptions[0] = selectedOption;

		try {
			const result = await onSelectChange?.(multiselect ? newSelectedOptions : newSelectedOptions?.[0]) ?? true;
			if (!multiselect) lookupInputRef.current?.focus();
			if (result) {
				setSelectedOptions(newSelectedOptions);
				setSearchTerm(multiselect ? searchTerm : '');
			}
		} catch (err) {
			console.error(err);
		}

		if (!multiselect) closeDropdown();
	};

	const clearSearch = async () => {
		try {
			await onSelectChange?.(multiselect ? [] : undefined);
			setSelectedOptions(searchTerm === '' ? [] : selectedOptions);
			setSearchTerm('');
			setDropdownOptions(mode === 'client' ? options : []);
			openDropdown();
			lookupInputRef?.current.focus();
		} catch (err) {
			console.error(err);
		}
	};

	const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
		if (readOnly || disabled) return;
		if (!dropdownVisible) openDropdown();
		onClick?.(event);
		lookupInputRef.current?.focus();
	};

	const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		if (!readOnly) {
			setFocused(true);
			onFocus?.(event);
		}
		if (!dropdownVisible) openDropdown();
	};

	const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
		if (focused) event.preventDefault();
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.code === KeyCode.Backspace && selectedOptions.length && multiselect && !searchTerm) {
			selectAction(selectedOptions[selectedOptions.length - 1]);
		} else if (event.code === KeyCode.Escape && dropdownVisible) {
			closeDropdown();
		} else if (event.code === KeyCode.ArrowDown) {
			event.preventDefault();
			if (!dropdownVisible) openDropdown();
			if (lookupDropdownRef.current) {
				const tableBody = lookupDropdownRef.current.getElementsByClassName('cs-data-table-body')?.[0];
				(tableBody?.firstElementChild?.firstElementChild?.firstElementChild as HTMLElement)?.focus();
			}
		} else if (event.code === KeyCode.ArrowUp) {
			event.preventDefault();
			if (!dropdownVisible) openDropdown();
			if (lookupDropdownRef.current) {
				const tableBody = lookupDropdownRef.current.getElementsByClassName('cs-data-table-body')?.[0];
				(tableBody?.firstElementChild?.lastElementChild?.firstElementChild as HTMLElement)?.focus();
			}
		} else if (event.code === KeyCode.Escape && dropdownVisible) {
			closeDropdown();
			lookupInputRef.current?.focus();
		} else if (event.key === KeyCode.Tab && (event.shiftKey || (!searchTerm && !selectedOptions.length))) {
			closeDropdown();
		} else if (event.code === KeyCode.Enter) {
			if (dropdownVisible) closeDropdown();
			else openDropdown();
		}
		onKeyDown?.(event);
	};

	const handleDropdownKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.code === KeyCode.Escape) {
			lookupInputRef.current?.focus();
			closeDropdown();
		} else if (event.code === KeyCode.Tab) {
			event.preventDefault();
			if (!event.shiftKey && lookupCloseButtonRef.current) lookupCloseButtonRef.current.focus();
			else lookupInputRef.current?.focus();
		} else if (event.key === KeyCode.Backspace) {
			lookupInputRef.current?.focus();
			selectAction(selectedOptions[selectedOptions.length - 1]);
		} else {
			lookupInputRef.current?.focus();
		}
	};

	const handleClearKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		if (event.key === KeyCode.Tab && (!event.shiftKey || (!searchTerm && !selectedOptions.length))) {
			closeDropdown();
		} else if (event.key === KeyCode.Enter) {
			clearSearch();
		}
	};

	const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
		const tableGroupCoordinates = (event.target as HTMLDivElement)
			?.firstElementChild
			?.lastElementChild
			?.firstElementChild
			?.getBoundingClientRect();
		const dropdownCoordinates = (lookupDropdownRef.current as HTMLDivElement)?.getBoundingClientRect();

		if (infiniteScroll && tableGroupCoordinates && dropdownCoordinates && !loading) {
			if (dropdownCoordinates.bottom - tableGroupCoordinates.bottom <= 1 && moreRecords && fetchingMode === undefined) {
				setFetchingMode('after-scroll');
				setPageNo(pageNo + 1);
			}
		}
	};

	const flipAlign = (initialAlign: string) => {
		if (initialAlign === 'left') return 'right';
		return 'left';
	};

	// Make sure that the load more row in infinite scroll
	// overflows so that it can be scrolled to and trigger a new fetch
	const getTableMaxHeight = () => {
		if (mode === 'server' && infiniteScroll && pageSize < 10) return `${30 * pageSize + 25}px`;
		return '17rem';
	};

	const initialPosition = `${position}-${flipAlign(align)}` as CSAutopositions;

	const lookupWrapperClasses = classNames(
		'cs-lookup-wrapper',
		{
			'cs-lookup-hidden': hidden,
			'cs-lookup-dropdown-open': dropdownVisible,
			[`${className}`]: className,
		},
	);

	const inputWrapperClasses = classNames(
		'cs-lookup-input-wrapper',
		'cs-input-wrapper',
		{
			'cs-input-wrapper-error': error,
			'cs-input-wrapper-disabled': disabled,
			'cs-input-wrapper-focused': focused,
			'cs-input-wrapper-read-only': readOnly,
		},
	);

	const lookupInputClasses = classNames(
		'cs-lookup-input',
		'cs-invisible-input',
		{
			'cs-dropdown-visible': dropdownVisible,
		},
	);

	const lookupDropdownClasses = classNames(
		'cs-lookup-dropdown',
		{
			'ag-custom-component-popup': gridCustomPopup,
		},
	);

	const style: CSSProperties = {
		'--cs-input-border-radius': borderRadius,
	};

	const lookupDropdownStyle: CSSProperties = {
		'--cs-lookup-dropdown-width': dropdownWidth || `${lookupInputWrapperRef.current?.getBoundingClientRect().width}px`,
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

	const renderSearchIcon = () => {
		if (readOnly) return null;

		return (
			<CSIcon
				className="cs-input-type-indicator-icon"
				name="search"
				color="var(--cs-input-icon-fill)"
			/>
		);
	};

	const renderLookupValue = (
		<div className="cs-lookup-value">
			{!searchTerm && selectedOptions?.map((option) => option?.data?.[fieldToBeDisplayed]).join(', ')}
		</div>
	);

	const renderBlinkingCursor = () => {
		if (!dropdownVisible || readOnly) return null;

		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		let width = 0;
		if (context && lookupInputRef.current) {
			context.font = getComputedStyle(lookupInputRef.current).font;
			width = context.measureText(searchTerm).width;
		}

		return <div className="cs-blinking-cursor" style={{ left: width }} />;
	};

	const renderClearButton = () => {
		if (!searchTerm && !selectedOptions.length) return null;
		if (disabled || readOnly || fetchingMode || loading) return null;

		return (
			<CSButton
				className="cs-lookup-clear-btn"
				btnType="transparent"
				btnStyle="brand"
				size="xsmall"
				iconColor="var(--cs-input-clear)"
				iconName="close"
				labelHidden
				label="clear"
				ref={lookupCloseButtonRef}
				onClick={clearSearch}
				onKeyDown={handleClearKeyDown}
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

	const renderMinLengthMessage = () => (
		<div className="cs-lookup-dropdown-msg-wrapper">
			<span className="cs-lookup-dropdown-msg-text">
				{`Please enter ${minTermLength} or more characters.`}
			</span>
		</div>
	);

	const renderLoading = () => (
		<div className="cs-lookup-dropdown-msg-wrapper">
			<CSIcon spin name="spinner" color={fetchingMode === 'after-scroll' ? 'var(--cs-lookup-dropdown-msg-inverse-c)' : 'var(--cs-lookup-dropdown-msg-c)'} />
			<span className="cs-lookup-dropdown-msg-text">Loading...</span>
		</div>
	);

	const renderOptions = () => (
		<CSDataTable
			stickyHeader
			selectable
			selectionType="row"
			columns={columns}
			rows={(mode === 'server' && moreRecords && infiniteScroll)
				? [...dropdownOptions, { key: 'cs-lookup-load-more', render: renderLoading, className: 'cs-lookup-load-more', selectable: false }]
				: dropdownOptions}
			selectedKeys={selectedOptions.map((selectedOption: CSDataTableRowInterface) => selectedOption.key)}
			onSelectChange={(event, { meta, ...row }) => selectAction(row)}
			maxHeight={dropdownHeight ?? getTableMaxHeight()}
			onScroll={handleScroll}
			onKeyDown={handleDropdownKeyDown}
		/>
	);

	const renderNotFound = () => (
		<div className="cs-lookup-dropdown-msg-wrapper">
			<CSIcon name="error" color="var(--cs-lookup-dropdown-msg-c)" />
			<span className="cs-lookup-dropdown-msg-text">No data found.</span>
		</div>
	);

	const renderDropdown = () => {
		if (minTermLength && searchTerm.length < minTermLength) return renderMinLengthMessage();
		if (loading || fetchingMode === 'after-search' || fetchingMode === 'after-dropdown-open') return renderLoading();
		if (dropdownOptions?.length) return renderOptions();
		if (!dropdownOptions?.length) return renderNotFound();
		return null;
	};

	const renderErrorMessage = () => {
		if (!error || !errorMessage || errorTooltip) return null;

		return <CSFieldErrorMsg message={errorMessage} />;
	};

	const renderErrorTooltip = () => {
		if (!error || !errorMessage || !errorTooltip) return null;

		return <CSTooltip variant="error" content={errorMessage} />;
	};

	return (
		<div className={lookupWrapperClasses} style={style}>
			{renderLabel()}
			{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
			<div
				className={inputWrapperClasses}
				onClick={handleClick}
				onMouseDown={handleMouseDown}
				ref={lookupInputWrapperRef}
			>
				{renderSearchIcon()}
				<div className="cs-lookup-value-wrapper">
					{renderLookupValue}
					{renderBlinkingCursor()}
					<input
						className={lookupInputClasses}
						autoComplete="off"
						autoFocus={autoFocus}
						type="text"
						placeholder={selectedOptions.length === 0 ? placeholder : undefined}
						disabled={disabled}
						readOnly={readOnly}
						required={required}
						value={searchTerm}
						onBlur={handleBlur}
						onFocus={handleFocus}
						onKeyDown={handleKeyDown}
						onChange={handleSearch}
						title={title}
						id={uniqueId}
						ref={lookupInputRef}
						role="listbox"
						aria-required={required}
						aria-expanded={dropdownVisible}
						aria-invalid={error}
						aria-multiselectable={multiselect}
						{...rest}
					/>
				</div>
				{renderClearButton()}
				<CSCustomData icons={icons} actions={actions} />
				{renderErrorTooltip()}
				{renderDropdownIcon()}
			</div>
			{renderErrorMessage()}
			{
				dropdownVisible && (
					<CSAutoposition
						referencePoint={lookupInputWrapperRef.current}
						positionSchema={['top-left', 'top-right', 'bottom-right', 'bottom-left']}
						initialPosition={initialPosition}
						zIndex="var(--z-index-lookup-dropdown)"
					>
						<div
							className={lookupDropdownClasses}
							style={lookupDropdownStyle}
							ref={lookupDropdownRef}
							key="dropdown-values"
						>
							{renderDropdown()}
						</div>
					</CSAutoposition>
				)
			}
		</div>
	);
};

const CSLookupWithRef = React.forwardRef<HTMLInputElement, CSLookupProps>((props: CSLookupProps, ref) => <CSLookup {...props} forwardRef={ref} />);

CSLookupWithRef.displayName = 'CSLookup';

export default CSLookupWithRef;
