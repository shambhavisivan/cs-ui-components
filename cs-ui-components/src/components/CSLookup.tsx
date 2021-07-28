import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { debounce, find, remove } from 'lodash';
import CSButton from './CSButton';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import CSIcon from './CSIcon';
import CSTable from './table/CSTable';
import CSTableHeader from './table/CSTableHeader';
import CSTableBody from './table/CSTableBody';
import CSTableRow from './table/CSTableRow';
import CSTableCell from './table/CSTableCell';
import { CSTooltipPosition } from './CSTooltip';
import KeyCode from '../util/KeyCode';
import CSAutoposition from '../helpers/autoposition/CSAutoposition';
import { CSAutopositions } from '../helpers/autoposition/cs-autoposition-types';

export interface CSLookupTableColumnType {
	key: string;
	label: string;
}

export type CSLookupDropdownAlign = 'left' | 'right';
export type CSLookupDropdownPosition = 'top' | 'bottom';

interface CSLookupCommmonProps {
	[key: string]: any;
	align?: CSLookupDropdownAlign;
	autoFocus?: boolean;
	borderRadius?: string;
	className?: string;
	disabled?: boolean;
	dropdownHeight?: string;
	dropdownWidth?: string;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	fieldToBeDisplayed: string;
	gridCustomPopup?: boolean;
	helpText?: string;
	hidden?: boolean;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	lookupColumns: Array<CSLookupTableColumnType>;
	multiselect?: boolean;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => any;
	onLookupDropdownClose?: () => void;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => any;
	onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => any;
	onSelectChange?: (value?: any) => any;
	placeholder?: string;
	position?: CSLookupDropdownPosition;
	readOnly?: boolean;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: Record<string, any> | Array<Record<string, any>> | null;
}

interface CSLookupFetchResult {
	records: Array<Record<string, any>>;
	moreRecords: boolean;
}

interface CSLookupServerProps {
	fetchLookupOptions: (searchTerm: string, pageSize: number, pageNo: number) => Promise<CSLookupFetchResult>;
	infiniteScroll?: boolean;
	minTermLength?: number;
	mode: 'server';
	pageSize: number;
}

interface CSLookupClientProps {
	loading?: boolean;
	lookupOptions: Array<Record<string, any>>;
	mode: 'client';
	searchBy?: Array<string>;
}

export type CSLookupProps = CSLookupCommmonProps & (CSLookupClientProps | CSLookupServerProps);

type CSLookupFetchingMode = 'after-search' | 'after-scroll' | undefined;

export interface CSLookupState {
	activeRowIndex: number;
	dropdownOpen: boolean;
	dropdownValues: Array<Record<string, any>>;
	fetchingMode?: CSLookupFetchingMode;
	lookupInputWidth?: number;
	moreRecords?: boolean;
	pageNo?: number;
	searchTerm?: string;
	selectedOption?: Record<string, any> | null;
	selectedOptions?: Array<Record<string, any>>;
}

class CSLookup extends React.Component<CSLookupProps, CSLookupState> {
	public static defaultProps = {
		align: 'left',
		position: 'bottom',
		mode: 'client',
		minTermLength: 0,
	};

	public lookupInputRef: React.RefObject<HTMLInputElement>;

	public lookupWrapperRef: React.RefObject<HTMLInputElement>;

	private lookupTable = 'cs-lookup-table';

	private lookupTableHeader = 'cs-lookup-table-header';

	private lookupTableRowId = 'cs-lookup-table-row';

	private timeoutRef: NodeJS.Timeout;

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	private executeServerSearchDebounced: any;

	constructor(props: CSLookupProps) {
		super(props);
		this.lookupInputRef = React.createRef();
		this.lookupWrapperRef = React.createRef();

		this.state = {
			activeRowIndex: null,
			dropdownOpen: false,
			dropdownValues: [],
			pageNo: 0,
			moreRecords: true,
			searchTerm: '',
			selectedOption: undefined,
			selectedOptions: [],
		};

		this.executeServerSearchDebounced = debounce(this.executeServerSearch, 500);
	}

	componentDidMount() {
		if (this.props.mode === 'client') {
			this.setState({ dropdownValues: this.props.lookupOptions });
		}

		this.setValue();
	}

	componentDidUpdate(prevProps: CSLookupProps) {
		if (prevProps.value !== this.props.value) {
			this.setValue();
		}
		if (prevProps.lookupOptions !== this.props.lookupOptions) {
			this.setState({
				dropdownValues: this.props.lookupOptions,
			});
		}
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, true);
		clearTimeout(this.timeoutRef);
	}

	setValue = () => {
		if (this.props.multiselect && Array.isArray(this.props.value)) {
			this.setState({
				selectedOptions: [...this.props.value],
			});
		} else {
			this.setState({
				selectedOption: this.props.value,
			});
		}
	}

	handleClickOutside = (event: any) => {
		if (this.lookupWrapperRef.current
			&& !this.lookupWrapperRef.current.contains(event.target)
			&& !document.getElementById('cs-autoposition').contains(event.target)) {
			this.closeLookupDropdown();
		}
	}

	fetchData = async () => {
		try {
			const fetchResults = await this.props.fetchLookupOptions(this.state.searchTerm, this.props.pageSize, this.state.pageNo);
			this.setState((prevState) => ({
				fetchingMode: undefined,
				dropdownValues: prevState.fetchingMode === 'after-scroll'
					? [...prevState.dropdownValues, ...fetchResults.records]
					: fetchResults.records,
				moreRecords: fetchResults.moreRecords,
			}));
		} catch (error) {
			console.error(`Lookup options couldn't be fetched: ${error}`);
		} finally {
			if (
				this.props.minTermLength !== 0
				&& this.state.searchTerm.length < this.props.minTermLength
			) {
				this.setState({ dropdownValues: [] });
			}
		}
	}

	handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { mode, onSearch } = this.props;
		const { dropdownOpen } = this.state;
		onSearch?.(event);

		if (!dropdownOpen) {
			this.openLookupDropdown();
		}
		const value = event.target.value ? event.target.value : '';
		this.setState({
			searchTerm: value,
			fetchingMode: mode === 'server' ? 'after-search' : undefined,
			dropdownValues: [],
			pageNo: 0,
		}, this.executeSearch);
	}

	executeSearch = () => {
		if (this.props.mode === 'client') this.executeClientSearch();
		else this.executeServerSearchDebounced();
	}

	/*
		If searchBy prop is not set items will be filtered by keys provided in lookupColumns prop.
		Otherwise they will be filtered by key provided in searchBy prop array.
	*/
	executeClientSearch = () => {
		const { lookupOptions, lookupColumns, searchBy } = this.props;
		const { searchTerm } = this.state;
		const fetchedOptions = [...lookupOptions];
		let results: Array<any> = [];

		const includesSearchTerm = (value: any) => value.toString().toLowerCase().includes(searchTerm.toLowerCase());

		if (searchBy && !!searchBy.length) {
			const keysToFilter = [...searchBy];
			results = fetchedOptions.filter((item: any) => Object.keys(item).some((key: any) => keysToFilter.includes(key)
				&& includesSearchTerm(item[key])));
		} else {
			const lookupColumnsToFilter = lookupColumns.map((column) => column.key);
			results = fetchedOptions.filter((item: any) => Object.keys(item).some((key: any) => lookupColumnsToFilter.includes(key)
				&& includesSearchTerm(item[key])));
		}

		this.setState({ dropdownValues: results });
	}

	executeServerSearch = () => {
		if (
			this.props.minTermLength !== 0
			&& this.state.searchTerm.length < this.props.minTermLength
		) {
			return;
		}
		this.fetchData();
	}

	clearSearch = async () => {
		const value: any = this.props.multiselect ? [] : null;
		const result = await this.handleSelectChange(value);

		if (result) {
			this.setState({
				searchTerm: '',
				selectedOption: null,
				selectedOptions: [],
				dropdownValues: this.props.mode === 'client' ? this.props.lookupOptions : [],
			});
		}

		this.openLookupDropdown();
		setTimeout(() => {
			this.lookupInputRef?.current.focus();
		}, 0);
	}

	selectAction = async (_selectedOption: Record<string, any>) => {
		const { selectedOptions } = this.state;
		const { multiselect } = this.props;

		if (multiselect) {
			let newSelectedOptions = [];
			if (find(selectedOptions, _selectedOption)) {
				const _selectedOptions = [...selectedOptions];
				remove(_selectedOptions, _selectedOption);
				newSelectedOptions = _selectedOptions;
			} else {
				newSelectedOptions = [...selectedOptions, _selectedOption];
			}
			const result = await this.handleSelectChange(newSelectedOptions);
			if (result) {
				this.setState({
					selectedOptions: newSelectedOptions,
				});
			}
		} else {
			const result = await this.handleSelectChange(_selectedOption);
			if (result) {
				this.setState({
					selectedOption: _selectedOption,
					dropdownValues: this.props.mode === 'client' ? this.props.lookupOptions : [],
					searchTerm: '',
				});
			}
			this.closeLookupDropdown();
		}
	}

	toggleLookupDropdown = () => {
		const { dropdownOpen } = this.state;

		if (!dropdownOpen) {
			this.openLookupDropdown();
		} else {
			this.closeLookupDropdown();
		}
	}

	/*
		Returns result after onSelectChange is called.
		This enables preventing the update of inner state if returned result is false.
		Undefined or null result will be evaluated as true.
		In most cases onSelectChange will return a promise,
		therefore function that calles handleSelectChange should be async.
	*/
	handleSelectChange = (selectedOptions: any) => {
		if (this.props.onSelectChange) {
			const result = this.props.onSelectChange(selectedOptions);
			return result ?? true;
		}
		return true;
	}

	// returns the value of the selected option based on key provided in fieldToBeDisplayed prop
	getValueToDisplay = (_selectedOption: Record<string, any>) => {
		if (_selectedOption) {
			return _selectedOption[this.props.fieldToBeDisplayed];
		}
	}

	getMultiselectValues = () => {
		if (
			this.props.multiselect
			&& !!this.state.selectedOptions.length
		) {
			const multiselectValues = this.state.selectedOptions.map((option) => option[this.props.fieldToBeDisplayed]);
			return multiselectValues.join(', ');
		}
	}

	setActiveTableRowIndex = (index: number) => {
		this.setState({
			activeRowIndex: index,
		});
	}

	handleOnClick = () => {
		if (!this.state.dropdownOpen) {
			this.openLookupDropdown();
		}
	}

	handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		if (this.props.onFocus) {
			this.props.onFocus(event);
		}
		this.openLookupDropdown();
	}

	handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		if (this.props.onBlur) {
			this.props.onBlur(event);
		}
		if (this.props.multiselect && !!this.state.selectedOptions.length) {
			this.setState({
				searchTerm: '',
				dropdownValues: this.props.mode === 'client'
					? this.props.lookupOptions : [],
			});
		}
		if (this.props.mode === 'server') {
			this.setState({
				pageNo: 0,
				moreRecords: true,
			});
		}
	}

	handleLookupWrapperBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		const { currentTarget } = event;
		// Check the newly focused element in the next tick of the event loop
		this.timeoutRef = setTimeout(() => {
			// Check if the new activeElement is a child of the original container
			if (!currentTarget.contains(document.activeElement)) {
				// You can invoke a callback or add custom logic here
				this.closeLookupDropdown();
			}
		}, 0);
	}

	checkInView = (tableRowIndex: number) => {
		const table = document.getElementById(this.lookupTable);
		const tableRow = document.getElementById(`${this.lookupTableRowId}-${tableRowIndex}`);
		const tableHeader = document.getElementById(this.lookupTableHeader);
		const tableHeaderBottom = tableHeader.scrollTop + tableHeader.clientHeight;

		// Table body top and bottom
		const tableTop = table.scrollTop;
		const tableBottom = tableTop + table.clientHeight;

		// Table row top and bottom
		const tableRowTop = tableRow.offsetTop;
		const tableRowBottom = tableRowTop + tableRow.clientHeight;

		// Change table scroll top if table row is not completely visible
		if (tableRowTop < (tableTop + tableHeaderBottom)) {
			table.scrollTop -= (tableTop - tableRowTop) + tableHeader.clientHeight;
		} else if (tableRowBottom > tableBottom) {
			table.scrollTop += (tableRowBottom - tableBottom);
		}
	}

	handleOnKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
		const {
			activeRowIndex, dropdownOpen, dropdownValues, fetchingMode,
		} = this.state;
		const isLoading = this.props.loading || fetchingMode === 'after-search';

		const firstListElement = 0;
		const lastListElement = dropdownValues.length - 1;
		let _activeRowIndex = activeRowIndex;

		switch (true) {
		case isLoading:
			break;
		case event.key === KeyCode.Escape && dropdownOpen:
			this.closeLookupDropdown();
			break;
		case event.key === KeyCode.ArrowDown
				&& !!dropdownValues.length
				&& dropdownOpen:
			event.preventDefault();
			switch (true) {
			case activeRowIndex === null:
				this.setState({ activeRowIndex: 0 });
				break;
			case (activeRowIndex === lastListElement):
				break;
			default:
				_activeRowIndex += 1;
				this.checkInView(_activeRowIndex);
				this.setState({ activeRowIndex: _activeRowIndex });
				break;
			}
			break;
		case event.key === KeyCode.ArrowUp
				&& !!dropdownValues.length
				&& dropdownOpen:
			event.preventDefault();
			switch (true) {
			case activeRowIndex === firstListElement:
				break;
			default:
				_activeRowIndex -= 1;
				this.checkInView(_activeRowIndex);
				this.setState({ activeRowIndex: _activeRowIndex });
				break;
			}
			break;
		case event.key === KeyCode.Enter:
			event.preventDefault();
			switch (true) {
			case dropdownOpen && activeRowIndex !== null && !!dropdownValues.length:
				this.selectAction(dropdownValues[activeRowIndex]);
				break;
			default:
				this.toggleLookupDropdown();
				break;
			}
			break;
		default:
		}
	}

	openLookupDropdown = () => {
		if (!this.lookupInputRef.current) {
			return;
		}
		const lookupInputRect = this.lookupInputRef.current.getBoundingClientRect();

		this.setState({
			dropdownOpen: true,
			lookupInputWidth: lookupInputRect.width,
			activeRowIndex: 0,
		});

		if (this.props.mode === 'server' && this.props.minTermLength === 0) {
			this.setState({ fetchingMode: 'after-search' }, this.fetchData);
		}
		document.addEventListener('click', this.handleClickOutside, true);
	}

	closeLookupDropdown = () => {
		this.setState({
			dropdownOpen: false,
			pageNo: 0,
			moreRecords: true,
			activeRowIndex: null,
			dropdownValues: this.props.mode === 'client' ? this.props.lookupOptions : [],
			searchTerm: '',
		});
		document.removeEventListener('click', this.handleClickOutside, true);

		if (this.props.onLookupDropdownClose) {
			this.props.onLookupDropdownClose();
		}
	}

	lookupRefCallback = (element: HTMLDivElement) => {
		if (this.props.infiniteScroll) {
			element.firstElementChild.addEventListener('scroll', (event) => {
				const scrollNode = event.target as HTMLDivElement;
				const isEndOfScroll = (scrollNode.scrollHeight
					- scrollNode.scrollTop
					- scrollNode.offsetHeight <= 1);

				if (
					isEndOfScroll
					&& this.state.moreRecords
					&& this.state.fetchingMode === undefined
				) {
					this.setState((prevState) => ({
						fetchingMode: 'after-scroll',
						pageNo: prevState.pageNo + 1,
					}), this.fetchData);
				}
			});
		}
	}

	loadingNodeCallback = (instance: CSTableRow) => {
		if (instance) {
			const table = document.getElementById(this.lookupTable);
			table.scrollTop = table.scrollHeight;
		}
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
			align,
			autoFocus,
			borderRadius,
			className,
			disabled,
			error,
			errorMessage,
			lookupOptions,
			fetchLookupOptions,
			fieldToBeDisplayed,
			gridCustomPopup,
			helpText,
			hidden,
			id,
			infiniteScroll,
			label,
			labelHidden,
			labelTitle,
			dropdownHeight,
			dropdownWidth,
			loading,
			lookupColumns,
			minTermLength,
			mode,
			multiselect,
			onBlur,
			onFocus,
			onLookupDropdownClose,
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

		const {
			activeRowIndex,
			dropdownOpen,
			dropdownValues,
			fetchingMode,
			lookupInputWidth,
			searchTerm,
			selectedOption,
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
				'cs-lookup-input-error': error,
			},
		);

		const selectedLookupItemClasses = classNames(
			'cs-selected-input-option',
			{
				'cs-custom-select-dropdown-open': dropdownOpen,
			},
		);

		const lookupDropdownClasses = classNames(
			'cs-lookup-dropdown',
			{
				'ag-custom-component-popup': gridCustomPopup,
			},
		);

		const lookupDropdownMsgClasses = classNames(
			'cs-lookup-dropdown-msg-wrapper',
			{
				'cs-lookup-dropdown-msg-wrapper-inverse': fetchingMode === 'after-scroll',
			},
		);

		const style: CSSProperties = {
			'--cs-lookup-border-radius': borderRadius,
		};

		const lookupDropdownStyle: CSSProperties = {
			'--cs-lookup-input-width': lookupInputWidth ? `${lookupInputWidth}px` : '',
			'--cs-lookup-dropdown-width': dropdownWidth,
		};

		const minTermLengthNode = (
			<CSTableRow className={lookupDropdownMsgClasses}>
				<span className="cs-lookup-dropdown-msg-text">
					{`Please enter ${this.props.minTermLength} or more characters!`}
				</span>
			</CSTableRow>
		);

		const notFoundNode = (
			<CSTableRow className={lookupDropdownMsgClasses}>
				<CSIcon
					name="error"
					color="var(--cs-lookup-dropdown-msg-c)"
				/>
				<span className="cs-lookup-dropdown-msg-text">No data found</span>
			</CSTableRow>
		);

		const loadingNode = (
			<CSTableRow
				className={lookupDropdownMsgClasses}
				ref={fetchingMode === 'after-scroll' ? this.loadingNodeCallback : undefined}
			>
				<CSIcon
					name="spinner"
					color={this.state.fetchingMode === 'after-scroll'
						? 'var(--cs-lookup-dropdown-msg-inverse-c)'
						: 'var(--cs-lookup-dropdown-msg-c)'}
					spin
				/>
				<span className="cs-lookup-dropdown-msg-text">Loading...</span>
			</CSTableRow>
		);

		const dropdownValuesNode = dropdownValues.map((item, i) => (
			<CSTableRow
				key={`lookup-table-row${i}`}
				onMouseDown={(event: any) => {
					event.preventDefault();
					event.stopPropagation();
					this.selectAction(item);
				}}
				onMouseOver={() => this.setActiveTableRowIndex(i)}
				onMouseOut={() => this.setActiveTableRowIndex(null)}
				rowSelected={
					multiselect
						? find(selectedOptions, item)
						: JSON.stringify(selectedOption) === JSON.stringify(item)
				}
				rowHighlighted={i === activeRowIndex}
				id={`${this.lookupTableRowId}-${i}`}
			>
				{!!lookupColumns.length
					&& this.props.lookupColumns.map((column, j) => (
						<CSTableCell text={item[column.key]} key={j} />
					))}
			</CSTableRow>
		));

		const renderDropdownTableBody = () => {
			if (minTermLength && searchTerm.length < minTermLength) {
				return minTermLengthNode;
			} if (loading || fetchingMode === 'after-search') {
				return loadingNode;
			} if (dropdownValues?.length) {
				return dropdownValuesNode;
			} if (!dropdownValues?.length && searchTerm && fetchingMode === undefined) {
				return notFoundNode;
			}
		};

		/*
			If inifiniteScroll is set, calculated value will be returned and set to maxHeight prop on CSTableBody.
			The value is calculated from the pageSize prop reduced by one and fixed height value of each table row (32px).
			This ensures visiblity of the scroll bar if the number of returned records is smaller than 9.

			Otherwise fixed height of 17rem will be returned.
		*/
		const calcTableBodyMaxHeight = () => {
			if (
				this.props.mode === 'server'
				&& this.props.infiniteScroll
				&& this.props.pageSize < 9
			) {
				return `${32 * (this.props.pageSize - 1)}px`;
			}
			return '17rem';
		};

		const initialPosition = `${position}-${this.flipPosition(align)}` as CSAutopositions;

		return (
			<div className={lookupFieldWrapperClasses}>
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
					className="cs-lookup-input-wrapper"
					ref={this.lookupWrapperRef}
					onBlur={this.handleLookupWrapperBlur}
				>
					{!readOnly
						&& (
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
						placeholder={placeholder
							&& (selectedOptions.length === 0 && !selectedOption)
							? placeholder : undefined}
						disabled={disabled}
						readOnly={readOnly}
						required={required}
						value={searchTerm}
						onFocus={!readOnly ? this.handleOnFocus : undefined}
						onKeyDown={!readOnly ? this.handleOnKeyDown : undefined}
						onChange={this.handleSearch}
						onClick={!readOnly ? this.handleOnClick : undefined}
						onBlur={this.handleOnBlur}
						title={title}
						id={id || this.uniqueAutoId}
						ref={this.lookupInputRef}
						style={style}
						aria-required={required}
						aria-expanded={dropdownOpen}
						aria-invalid={error}
						aria-multiselectable={multiselect}
						{...rest}
					/>
					{!searchTerm && (selectedOption || selectedOptions)
						&& (
							<span className={selectedLookupItemClasses}>
								{this.getValueToDisplay(selectedOption) || this.getMultiselectValues()}
							</span>
						)}
					{((searchTerm
						|| selectedOption
						|| selectedOptions.length)
						&& !disabled
						&& !readOnly
						&& !loading
						&& !fetchingMode)
						? (
							<CSButton
								btnType="transparent"
								btnStyle="brand"
								className="cs-lookup-clear"
								iconColor="var(--cs-input-clear)"
								iconName="close"
								labelHidden
								label="clear"
								onClick={this.clearSearch}
								size="xsmall"
							/>
						) : null}
					{!readOnly
						&& (
							<CSIcon
								name="down"
								rotate={dropdownOpen ? 180 : 0}
								className="cs-lookup-dropdown-icon"
								color="var(--cs-input-icon-fill)"
								size="1rem"
							/>
						)}
				</div>
				{
					(error && errorMessage)
					&& <CSFieldErrorMsg message={errorMessage} />
				}
				{
					dropdownOpen
					&& (
						<CSAutoposition
							referencePoint={this.lookupInputRef.current}
							positionSchema={['top-left', 'top-right', 'bottom-right', 'bottom-left']}
							initialPosition={initialPosition}
							zIndex="var(--z-index-lookup-dropdown)"
						>
							<div
								className={lookupDropdownClasses}
								style={lookupDropdownStyle}
								ref={this.lookupRefCallback}
								key="dropdown-values"
							>
								<CSTable id={this.lookupTable}>
									{(!!lookupColumns.length
									&& !!dropdownValues.length
									&& !loading
									&& fetchingMode !== 'after-search')
									&& (
										<CSTableHeader
											headerSticky
											id={this.lookupTableHeader}
											onMouseDown={(event: any) => {
												event.preventDefault();
												event.stopPropagation();
											}}
										>
											{lookupColumns.map((column) => (
												<CSTableCell text={column.label} key={column.key} />
											))}
										</CSTableHeader>
									)}
									<CSTableBody maxHeight={dropdownHeight ?? calcTableBodyMaxHeight()}>
										{renderDropdownTableBody()}
										{fetchingMode === 'after-scroll'
										&& loadingNode}
									</CSTableBody>
								</CSTable>
							</div>
						</CSAutoposition>
					)
				}
			</div>
		);
	}
}

export default CSLookup;
