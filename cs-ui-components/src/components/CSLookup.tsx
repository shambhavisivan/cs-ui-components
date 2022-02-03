import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { debounce } from 'lodash';

import CSLabel from './CSLabel';
import CSButton from './CSButton';
import CSIcon from './CSIcon';
import CSCustomDataIcons from './custom-data/CSCustomDataIcons';
import CSCustomDataActions from './custom-data/CSCustomDataActions';
import CSDataTable, { CSDataTableColumnInterface, CSDataTableRowInterface } from './data-table/CSDataTable';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import { CSCustomDataIconProps, CSCustomDataActionProps } from '../util/CustomData';
import CSAutoposition from '../helpers/autoposition/CSAutoposition';
import { CSAutopositions } from '../helpers/autoposition/cs-autoposition-types';
import { CSTooltipPosition } from './CSTooltip';
import KeyCode from '../util/KeyCode';

export type CSLookupDropdownAlign = 'left' | 'right';
export type CSLookupDropdownPosition = 'top' | 'bottom';

export interface CSLookupCommonProps {
	columns: Array<CSDataTableColumnInterface>;
	actions?: Array<CSCustomDataActionProps>;
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
	icons?: Array<CSCustomDataIconProps>;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	multiselect?: boolean;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>, value?: CSDataTableRowInterface | Array<CSDataTableRowInterface>) => any;
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => any;
	onDropdownClose?: () => void;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => any;
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => any;
	onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => any;
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

export type CSLookupFetchingMode = 'after-search' | 'after-scroll' | undefined;

export interface CSLookupState {
	dropdownVisible: boolean;
	dropdownOptions: Array<CSDataTableRowInterface>;
	fetchingMode?: CSLookupFetchingMode;
	lookupInputWidth?: number;
	lookupOptionsWrapperWidth: number | null;
	moreRecords?: boolean;
	pageNo?: number;
	searchTerm?: string;
	selectedOptions?: Array<CSDataTableRowInterface>;
}

class CSLookup extends React.Component<CSLookupProps, CSLookupState> {
	public static defaultProps = {
		align: 'left',
		position: 'bottom',
		mode: 'client',
		minTermLength: 0,
	};

	private readonly executeServerSearchDebounced: any;

	private readonly uniqueAutoId: string;

	private readonly lookupOptionsWrapperRef: React.RefObject<HTMLDivElement>;

	private readonly lookupDropdownRef: React.RefObject<HTMLDivElement>;

	private readonly lookupCloseButtonRef: React.RefObject<HTMLButtonElement>;

	private mounted: boolean;

	public lookupInputRef: React.RefObject<HTMLInputElement>;

	public lookupWrapperRef: React.RefObject<HTMLInputElement>;

	constructor(props: CSLookupProps) {
		super(props);

		this.state = {
			dropdownVisible: false,
			dropdownOptions: [],
			lookupOptionsWrapperWidth: null,
			pageNo: 0,
			moreRecords: true,
			searchTerm: '',
			selectedOptions: [],
		};

		this.lookupOptionsWrapperRef = React.createRef();
		this.lookupDropdownRef = React.createRef();
		this.lookupCloseButtonRef = React.createRef();
		this.lookupInputRef = React.createRef();
		this.lookupWrapperRef = React.createRef();

		this.executeServerSearchDebounced = debounce(this.executeServerSearch, 500);
		this.uniqueAutoId = props.id ? props.id : uuidv4();
	}

	componentDidMount() {
		this.mounted = true;
		const { mode, options } = this.props;
		if (mode === 'client') this.setState({ dropdownOptions: options });

		this.setValue();

		/* Get width of parent element and set state to width + 38 for extra spacing */
		const lookupOptionsRect = this.lookupOptionsWrapperRef.current?.getBoundingClientRect();
		this.setState({
			lookupOptionsWrapperWidth: (lookupOptionsRect?.width ?? 0) + 38,
		});
	}

	componentDidUpdate(prevProps: CSLookupProps) {
		const { value, options } = this.props;
		if (prevProps.value !== value) this.setValue();
		if (prevProps.options !== options) this.updateDropdownValues();
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	updateDropdownValues = () => {
		const { options } = this.props;
		this.setState({ dropdownOptions: options });
	}

	setValue = () => {
		const { multiselect, value } = this.props;
		let selectedOptions = value || [];
		if (Array.isArray(selectedOptions)) {
			if (!multiselect && selectedOptions.length > 1) selectedOptions = [selectedOptions[0]];
		} else selectedOptions = [selectedOptions];

		this.setState({ selectedOptions });
	}

	handleOutsideClick = (event: any) => {
		const clickOutsideInput = this.lookupWrapperRef.current && !this.lookupWrapperRef.current.contains(event.target);
		const clickOutsideDropdown = this.lookupDropdownRef.current && !this.lookupDropdownRef.current.contains(event.target);
		if (clickOutsideInput && clickOutsideDropdown) this.closeDropdown();
	}

	fetchData = async () => {
		const { fetchOptions, pageSize, minTermLength } = this.props;
		const { searchTerm, pageNo } = this.state;

		try {
			const fetchResults = await fetchOptions(searchTerm, pageSize, pageNo);
			if (this.mounted) {
				this.setState((prevState) => ({
					fetchingMode: undefined,
					dropdownOptions: prevState.fetchingMode === 'after-scroll'
						? [...prevState.dropdownOptions, ...fetchResults.records]
						: fetchResults.records,
					moreRecords: fetchResults.moreRecords,
				}));
			}
		} catch (error) {
			console.error(`Lookup options couldn't be fetched: ${error}`);
		} finally {
			if (minTermLength !== 0 && searchTerm.length < minTermLength) {
				this.setState({ dropdownOptions: [] });
			}
		}
	}

	handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { mode, onSearch } = this.props;
		const { dropdownVisible } = this.state;
		onSearch?.(event);

		if (!dropdownVisible) this.openDropdown();

		const value = event.target.value || '';

		this.setState({
			searchTerm: value,
			fetchingMode: mode === 'server' ? 'after-search' : undefined,
			dropdownOptions: [],
			pageNo: 0,
		}, this.executeSearch);
	}

	executeSearch = () => {
		const { mode } = this.props;
		if (mode === 'client') this.executeClientSearch();
		else this.executeServerSearchDebounced();
	}

	executeClientSearch = () => {
		const { options, columns, searchBy } = this.props;
		const { searchTerm } = this.state;

		if (!searchTerm) {
			this.setState({ dropdownOptions: options });
		} else {
			this.setState({
				dropdownOptions: options.filter((option: CSDataTableRowInterface) => {
					// Search by selected keys
					if (searchBy?.length) return searchBy.some((searchKey: string) => option?.data?.[searchKey]?.toString().toLowerCase().includes(searchTerm.toString().toLowerCase()));
					// Or search by all keys
					return columns.some((column: CSDataTableColumnInterface) => option?.data?.[column.key]?.toString().toLowerCase().includes(searchTerm.toString().toLowerCase()));
				}),
			});
		}
	}

	executeServerSearch = () => {
		const { minTermLength } = this.props;
		const { searchTerm } = this.state;
		if (minTermLength !== 0 && searchTerm.length < minTermLength) return;
		this.fetchData();
	}

	clearSearch = async () => {
		const { mode, options, onSelectChange, multiselect } = this.props;

		try {
			await onSelectChange?.(multiselect ? [] : undefined);
			this.setState({
				searchTerm: '',
				selectedOptions: [],
				dropdownOptions: mode === 'client' ? options : [],
			}, () => {
				this.openDropdown();
				this.lookupInputRef?.current.focus();
			});
		} catch (error) {
			console.error(error);
		}
	}

	selectAction = async (selectedOption: CSDataTableRowInterface) => {
		const { multiselect, onSelectChange } = this.props;
		const { selectedOptions, searchTerm } = this.state;

		const prevIndex = selectedOptions.findIndex((prevSelectedOption) => prevSelectedOption.key === selectedOption.key);
		const newSelectedOptions = selectedOptions;

		if (prevIndex !== -1 && multiselect) newSelectedOptions.splice(prevIndex, 1);
		else if (multiselect) newSelectedOptions.push(selectedOption);
		else newSelectedOptions[0] = selectedOption;

		try {
			await onSelectChange?.(multiselect ? newSelectedOptions : newSelectedOptions?.[0]);
			if (!multiselect) this.lookupInputRef.current?.focus();
			this.setState({
				selectedOptions: newSelectedOptions,
				searchTerm: multiselect ? searchTerm : '',
			});
		} catch (error) {
			console.error(error);
		}

		if (!multiselect) this.closeDropdown();
	}

	handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
		const { onClick } = this.props;
		const { dropdownVisible } = this.state;
		if (!dropdownVisible) this.openDropdown();
		onClick?.(event);
	}

	handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		const { onBlur, multiselect } = this.props;
		const { selectedOptions } = this.state;
		onBlur?.(event, multiselect ? selectedOptions : selectedOptions?.[0]);
	}

	handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		const { onFocus } = this.props;
		const { dropdownVisible } = this.state;
		onFocus?.(event);
		if (!dropdownVisible) this.openDropdown();
	}

	handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const { selectedOptions, dropdownVisible, searchTerm } = this.state;
		const { onKeyDown, multiselect } = this.props;
		if (event.code === KeyCode.Backspace && selectedOptions.length && multiselect && !searchTerm) {
			this.selectAction(selectedOptions[selectedOptions.length - 1]);
		} else if (event.code === KeyCode.Escape && dropdownVisible) {
			this.closeDropdown();
		} else if (event.code === KeyCode.ArrowDown) {
			event.preventDefault();
			if (!dropdownVisible) this.openDropdown();
			if (this.lookupDropdownRef.current) {
				const tableBody = this.lookupDropdownRef.current.getElementsByClassName('cs-data-table-body')?.[0];
				(tableBody?.firstElementChild?.firstElementChild?.firstElementChild as HTMLElement)?.focus();
			}
		} else if (event.code === KeyCode.ArrowUp) {
			event.preventDefault();
			if (!dropdownVisible) this.openDropdown();
			if (this.lookupDropdownRef.current) {
				const tableBody = this.lookupDropdownRef.current.getElementsByClassName('cs-data-table-body')?.[0];
				(tableBody?.firstElementChild?.lastElementChild?.firstElementChild as HTMLElement)?.focus();
			}
		} else if (event.code === KeyCode.Escape && dropdownVisible) {
			this.closeDropdown();
			this.lookupInputRef.current?.focus();
		} else if (event.key === KeyCode.Tab && (event.shiftKey || (!searchTerm && !selectedOptions.length))) {
			this.closeDropdown();
		} else if (event.code === KeyCode.Enter) {
			if (dropdownVisible) this.closeDropdown();
			else this.openDropdown();
		}
		onKeyDown?.(event);
	}

	handleDropdownKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.code === KeyCode.Escape) {
			this.lookupInputRef.current?.focus();
			this.closeDropdown();
		} else if (event.code === KeyCode.Tab) {
			event.preventDefault();
			if (!event.shiftKey && this.lookupCloseButtonRef.current) this.lookupCloseButtonRef.current.focus();
			else this.lookupInputRef.current?.focus();
		} else {
			this.lookupInputRef.current?.focus();
		}
	}

	handleClearKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		const { searchTerm, selectedOptions } = this.state;
		if (event.key === KeyCode.Tab && (!event.shiftKey || (!searchTerm && !selectedOptions.length))) {
			this.closeDropdown();
		} else if (event.key === KeyCode.Enter) {
			this.clearSearch();
		}
	};

	openDropdown = () => {
		const { mode, minTermLength, readOnly } = this.props;

		if (readOnly || !this.lookupInputRef.current) return;

		const lookupInputRect = this.lookupInputRef.current.getBoundingClientRect();

		this.setState({
			dropdownVisible: true,
			lookupInputWidth: lookupInputRect.width,
		});

		if (mode === 'server' && minTermLength === 0) {
			this.setState({ fetchingMode: 'after-search' }, this.fetchData);
		}

		document.addEventListener('click', this.handleOutsideClick, true);
	}

	closeDropdown = () => {
		const { mode, options, onDropdownClose } = this.props;

		this.setState({
			dropdownVisible: false,
			pageNo: 0,
			moreRecords: true,
			dropdownOptions: mode === 'client' ? options : [],
			searchTerm: '',
		});

		document.removeEventListener('click', this.handleOutsideClick, true);

		onDropdownClose?.();
	}

	handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
		const { infiniteScroll, loading } = this.props;
		const { moreRecords, fetchingMode } = this.state;

		const tableCoordinates = (event.target as HTMLDivElement)?.lastElementChild?.firstElementChild?.getBoundingClientRect();
		const dropdownCoordinates = (this.lookupDropdownRef.current as HTMLDivElement)?.getBoundingClientRect();

		if (infiniteScroll && tableCoordinates && dropdownCoordinates && !loading) {
			if (dropdownCoordinates.bottom - tableCoordinates.bottom <= 1 && moreRecords && fetchingMode === undefined) {
				this.setState((prevState) => ({
					fetchingMode: 'after-scroll',
					pageNo: prevState.pageNo + 1,
				}), this.fetchData);
			}
		}
	}

	flipPosition = (position: string) => {
		if (position === 'left') return 'right';
		return 'left';
	}

	render() {
		const {
			actions,
			align,
			autoFocus,
			borderRadius,
			className,
			disabled,
			error,
			errorMessage,
			errorTooltip,
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
			minTermLength,
			mode,
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
			position,
			readOnly,
			required,
			searchBy,
			title,
			tooltipPosition,
			value,
			...rest
		} = this.props;

		const { lookupOptionsWrapperWidth } = this.state;

		const {
			dropdownVisible,
			dropdownOptions,
			fetchingMode,
			lookupInputWidth,
			moreRecords,
			searchTerm,
			selectedOptions,
		} = this.state;

		const lookupFieldWrapperClasses = classNames(
			'cs-lookup-wrapper',
			{
				'cs-lookup-hidden': hidden,
				[`${className}`]: className,
			},
		);

		const lookupInputClasses = classNames(
			'cs-lookup-input',
			{
				'cs-dropdown-visible': dropdownVisible,
				'cs-lookup-input-error': error,
				'cs-lookup-input-error-tooltip': errorTooltip,
			},
		);

		const selectedLookupItemClasses = classNames(
			'cs-selected-input-option',
			{
				'cs-custom-select-dropdown-open': dropdownVisible,
			},
		);

		const lookupDropdownClasses = classNames(
			'cs-lookup-dropdown',
			{
				'ag-custom-component-popup': gridCustomPopup,
			},
		);

		const style: CSSProperties = {
			'--cs-lookup-border-radius': borderRadius,
			'--cs-lookup-options-spacing': `${lookupOptionsWrapperWidth}px`,
		};

		const lookupClearClasses = classNames(
			'cs-lookup-clear',
			{
				'cs-lookup-clear-options': actions || icons,
			},
		);

		const lookupDropdownStyle: CSSProperties = {
			'--cs-lookup-input-width': lookupInputWidth ? `${lookupInputWidth}px` : '',
			'--cs-lookup-dropdown-width': dropdownWidth,
		};

		// Make sure that the load more row in infinite scroll
		// overflows so that it can be scrolled to and trigger a new fetch
		const getTableMaxHeight = () => {
			if (mode === 'server' && infiniteScroll && pageSize < 10) return `${30 * pageSize + 25}px`;
			return '17rem';
		};

		const initialPosition = `${position}-${this.flipPosition(align)}` as CSAutopositions;

		const renderValues = () => {
			if (searchTerm) return null;

			return (
				<span className={selectedLookupItemClasses}>
					{selectedOptions?.map((option) => option?.data?.[fieldToBeDisplayed]).join(', ')}
				</span>
			);
		};

		const renderClearButton = () => {
			if (!searchTerm && !selectedOptions.length) return null;
			if (disabled || readOnly || fetchingMode || loading) return null;

			return (
				<CSButton
					ref={this.lookupCloseButtonRef}
					btnType="transparent"
					btnStyle="brand"
					className={lookupClearClasses}
					iconColor="var(--cs-input-icon-fill)"
					iconName="close"
					labelHidden
					label="clear"
					onClick={this.clearSearch}
					onKeyDown={this.handleClearKeyDown}
					size="xsmall"
				/>
			);
		};

		const renderExpandIcon = () => {
			if (readOnly) return null;

			return (
				<CSIcon
					name="down"
					rotate={dropdownVisible ? 180 : null}
					className="cs-lookup-dropdown-icon"
				/>
			);
		};

		const renderCustomIcons = () => {
			if (!icons?.length) return null;

			return <CSCustomDataIcons icons={icons} />;
		};

		const renderCustomActions = () => {
			if (!actions?.length) return null;

			return <CSCustomDataActions actions={actions} />;
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
				onSelectChange={(event, { meta, ...row }) => this.selectAction(row)}
				maxHeight={dropdownHeight ?? getTableMaxHeight()}
				onScroll={this.handleScroll}
				onKeyDown={this.handleDropdownKeyDown}
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
			if (loading || fetchingMode === 'after-search') return renderLoading();
			if (dropdownOptions?.length) return renderOptions();
			if (!dropdownOptions?.length) return renderNotFound();
			return null;
		};

		return (
			<div className={lookupFieldWrapperClasses} style={style}>
				{label && !labelHidden && (
					<CSLabel
						htmlFor={this.uniqueAutoId}
						label={label}
						helpText={helpText}
						tooltipPosition={tooltipPosition}
						required={required}
						title={labelTitle ? label : null}
					/>
				)}
				<div className="cs-lookup-wrapper-inner">
					<div ref={this.lookupWrapperRef} className="cs-lookup-input-wrapper">
						{!readOnly && (
							<CSIcon
								name="search"
								className="cs-lookup-search-icon"
								color="var(--cs-input-icon-fill)"
								size="1rem"
							/>
						)}
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
							onBlur={this.handleBlur}
							onFocus={this.handleFocus}
							onKeyDown={this.handleKeyDown}
							onChange={this.handleSearch}
							onClick={this.handleClick}
							title={title}
							id={id || this.uniqueAutoId}
							ref={this.lookupInputRef}
							role="listbox"
							aria-required={required}
							aria-expanded={dropdownVisible}
							aria-invalid={error}
							aria-multiselectable={multiselect}
							{...rest}
						/>
						{renderValues()}
						{renderClearButton()}
						{renderExpandIcon()}
					</div>
					{(actions?.length || icons?.length)
						&& (
							<div className="cs-lookup-options" ref={this.lookupOptionsWrapperRef}>
								{renderCustomIcons()}
								{renderCustomActions()}
							</div>
						)}
				</div>
				{error && errorMessage && <CSFieldErrorMsg message={errorMessage} tooltipMessage={errorTooltip} />}
				{
					dropdownVisible && (
						<CSAutoposition
							referencePoint={this.lookupInputRef.current}
							positionSchema={['top-left', 'top-right', 'bottom-right', 'bottom-left']}
							initialPosition={initialPosition}
							zIndex="var(--z-index-lookup-dropdown)"
						>
							<div
								className={lookupDropdownClasses}
								style={lookupDropdownStyle}
								ref={this.lookupDropdownRef}
								key="dropdown-values"
							>
								{renderDropdown()}
							</div>
						</CSAutoposition>
					)
				}
			</div>
		);
	}
}

export default CSLookup;
