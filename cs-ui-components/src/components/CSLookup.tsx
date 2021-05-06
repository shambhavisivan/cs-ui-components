import React, { CSSProperties } from 'react';
import classNames from 'classnames';
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
import { Portal } from 'react-portal';
import { v4 as uuidv4 } from 'uuid';
import KeyCode from '../util/KeyCode';
import ResizeObserver from 'resize-observer-polyfill';
import { debounce, find, remove } from 'lodash';

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
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	fieldToBeDisplayed: string;
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
	computedDropdownStyle?: CSSProperties;
	computedPosition: Array<string>;
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
		minTermLength: 0
	};

	public lookupInputRef: React.RefObject<HTMLInputElement>;
	public lookupWrapperRef: React.RefObject<HTMLInputElement>;
	private lookupDropdownId = 'cs-lookup-dropdown-root';
	private lookupTable = 'cs-lookup-table';
	private lookupTableHeader = 'cs-lookup-table-header';
	private lookupTableRowId = 'cs-lookup-table-row';

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	private executeServerSearchDebounced: any;

	constructor(props: CSLookupProps) {
		super(props);
		this.lookupInputRef = React.createRef();
		this.lookupWrapperRef = React.createRef();

		this.state = {
			activeRowIndex: null,
			computedPosition: [props.position, props.align],
			dropdownOpen: false,
			dropdownValues: [],
			pageNo: 0,
			moreRecords: true,
			searchTerm: '',
			selectedOption: undefined,
			selectedOptions: []
		};

		let lookupRoot = document.getElementById(this.lookupDropdownId);
		if (!lookupRoot) {
			lookupRoot = document.createElement('div');
			lookupRoot.className = this.lookupDropdownId;
			lookupRoot.id = this.lookupDropdownId;
			document.body.appendChild(lookupRoot);
		}

		this.executeServerSearchDebounced = debounce(this.executeServerSearch, 500);
	}

	componentDidMount() {
		if (this.props.mode === 'client') {
			this.setState({ dropdownValues: this.props.lookupOptions });
		}

		this.setValue();
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, true);
	}

	componentDidUpdate(prevProps: CSLookupProps) {
		if (prevProps.value !== this.props.value) {
			this.setValue();
		}
		if (prevProps.lookupOptions !== this.props.lookupOptions) {
			this.setState({
				dropdownValues: this.props.lookupOptions
			});
		}
	}

	setValue = () => {
		if (this.props.multiselect && Array.isArray(this.props.value)) {
			this.setState({
				selectedOptions: [...this.props.value]
			});
		} else {
			this.setState({
				selectedOption: this.props.value
			});
		}
	}

	handleClickOutside = (event: any) => {
		if (this.lookupWrapperRef.current &&
			!this.lookupWrapperRef.current.contains(event.target) &&
			!document.getElementById(this.lookupDropdownId).contains(event.target)) {
			this.closeLookupDropdown();
		}
	}

	fetchData = async () => {
		try {
			const fetchResults = await this.props.fetchLookupOptions(this.state.searchTerm, this.props.pageSize, this.state.pageNo);
			this.setState(prevState => ({
				fetchingMode: undefined,
				dropdownValues: prevState.fetchingMode === 'after-scroll' ?
					[...prevState.dropdownValues, ...fetchResults.records] :
					fetchResults.records,
				moreRecords: fetchResults.moreRecords
			}));
		} catch (error) {
			console.error(`Lookup options couldn't be fetched: ${error}`);
		} finally {
			if (
				this.props.minTermLength !== 0 &&
				this.state.searchTerm.length < this.props.minTermLength
			) {
				this.setState({ dropdownValues: [] });
			}
		}
	}

	handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { mode, onSearch } = this.props;
		const { dropdownOpen } = this.state;
		onSearch?.(e);

		if (!dropdownOpen) {
			this.openLookupDropdown();
		}
		const value = e.target.value ? e.target.value : '';
		this.setState({
			searchTerm: value,
			fetchingMode: mode === 'server' ? 'after-search' : undefined,
			dropdownValues: [],
			pageNo: 0
		}, this.executeSearch);
	}

	executeSearch = () => {
		this.props.mode === 'client' ?
			this.executeClientSearch() :
			this.executeServerSearchDebounced();
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

		const includesSearchTerm = (value: any) => {
			return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
		};

		if (searchBy && !!searchBy.length) {
			const keysToFilter = [...searchBy];
			results = fetchedOptions.filter((item: any) => {
				return Object.keys(item).some((key: any) =>
					keysToFilter.includes(key) &&
					includesSearchTerm(item[key])
				);
			});
		} else {
			const lookupColumnsToFilter = lookupColumns.map(column => column.key);
			results = fetchedOptions.filter((item: any) => {
				return Object.keys(item).some((key: any) =>
					lookupColumnsToFilter.includes(key) &&
					includesSearchTerm(item[key]));
			});
		}

		this.setState({ dropdownValues: results });
	}

	executeServerSearch = () => {
		if (
			this.props.minTermLength !== 0 &&
			this.state.searchTerm.length < this.props.minTermLength
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
				dropdownValues: this.props.mode === 'client' ? this.props.lookupOptions : []
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
					selectedOptions: newSelectedOptions
				});
			}
		} else {
			const result = await this.handleSelectChange(_selectedOption);
			if (result) {
				this.setState({
					selectedOption: _selectedOption,
					dropdownValues: this.props.mode === 'client' ? this.props.lookupOptions : [],
					searchTerm: ''
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
			this.props.multiselect &&
			!!this.state.selectedOptions.length &&
			!this.state.dropdownOpen
		) {
			const multiselectValues = this.state.selectedOptions.map(option => option[this.props.fieldToBeDisplayed]);
			return multiselectValues.join(',');
		}
	}

	setActiveTableRowIndex = (index: number) => {
		this.setState({
			activeRowIndex: index
		});
	}
	handleOnClick = () => {
		if (!this.state.dropdownOpen) {
			this.openLookupDropdown();
		}
	}

	handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		if (this.props.onFocus) {
			this.props.onFocus(e);
		}
		this.openLookupDropdown();

	}

	handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		if (this.props.onBlur) {
			this.props.onBlur(e);
		}
		if (this.props.multiselect && !!this.state.selectedOptions.length) {
			this.setState({
				searchTerm: '',
				dropdownValues: this.props.mode === 'client' ?
					this.props.lookupOptions : []
			});
		}
	}

	handleLookupWrapperBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const currentTarget = e.currentTarget;
		// Check the newly focused element in the next tick of the event loop
		setTimeout(() => {
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
		const { activeRowIndex, dropdownOpen, dropdownValues, fetchingMode, searchTerm, selectedOption } = this.state;
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
			case event.key === KeyCode.ArrowDown &&
				!!dropdownValues.length &&
				dropdownOpen:
				event.preventDefault();
				switch (true) {
					case activeRowIndex === null:
						this.setState({ activeRowIndex: 0 });
						break;
					case (activeRowIndex === lastListElement):
						break;
					default:
						_activeRowIndex = ++_activeRowIndex;
						this.checkInView(_activeRowIndex);
						this.setState({ activeRowIndex: _activeRowIndex });
						break;
				}
				break;
			case event.key === KeyCode.ArrowUp &&
				!!dropdownValues.length &&
				dropdownOpen:
				event.preventDefault();
				switch (true) {
					case activeRowIndex === firstListElement:
						break;
					default:
						_activeRowIndex = --_activeRowIndex;
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
				return;
		}
	}

	openLookupDropdown = () => {
		if (!this.lookupInputRef.current) {
			return;
		}
		const elementRect = this.lookupInputRef.current.getBoundingClientRect();
		const top = elementRect.top + elementRect.height + 1;
		const bottom = window.innerHeight - elementRect.top + 1;
		const left = elementRect.left;
		const right = window.innerWidth - elementRect.right;

		const dropdownPosition = this.state.computedPosition.join('-');

		switch (dropdownPosition) {
			case 'top-right':
				this.setState({
					computedDropdownStyle: {
						bottom,
						right
					}
				});
				break;
			case 'top-left':
				this.setState({
					computedDropdownStyle: {
						bottom,
						left
					}
				});
				break;
			case 'bottom-right':
				this.setState({
					computedDropdownStyle: {
						top,
						right
					}
				});
				break;
			case 'bottom-left':
			default:
				this.setState({
					computedDropdownStyle: {
						top,
						left
					}
				});
		}
		this.setState({
			dropdownOpen: true,
			lookupInputWidth: elementRect.width,
			activeRowIndex: 0
		});

		if (this.props.mode === 'server' && this.props.minTermLength === 0) {
			this.setState({ fetchingMode: 'after-search' }, this.fetchData);
		}
		document.addEventListener('click', this.handleClickOutside, true);
	}

	closeLookupDropdown = () => {
		this.setState({
			computedDropdownStyle: undefined,
			computedPosition: [this.props.position, this.props.align],
			dropdownOpen: false,
			pageNo: 0,
			moreRecords: true,
			activeRowIndex: null,
			dropdownValues: this.props.mode === 'client' ? this.props.lookupOptions : [],
			searchTerm: ''
		});
		document.removeEventListener('click', this.handleClickOutside, true);

		if (this.props.onLookupDropdownClose) {
			this.props.onLookupDropdownClose();
		}
	}

	autoDropdownPosition = (dropdownRect: DOMRect) => {
		const { computedPosition } = this.state;
		let [openOn, alignTo] = computedPosition;

		// check top position of dropdown
		if (dropdownRect.top <= 0 && openOn === 'top') {
			openOn = 'bottom';
		}
		// check bottom position of dropdown
		if (dropdownRect.bottom >=
			(window.innerHeight || document.documentElement.clientHeight)
			&& openOn === 'bottom') {
			openOn = 'top';
		}
		// check right position of dropdown
		if (dropdownRect.right >=
			(window.innerWidth || document.documentElement.clientWidth) &&
			alignTo === 'left') {
			alignTo = 'right';
		}
		// check left position of dropdown
		if (dropdownRect.left <= 0 && alignTo === 'right') {
			alignTo = 'left';
		}

		const position = [openOn, alignTo];
		if (JSON.stringify(position) !== JSON.stringify(computedPosition)) {
			this.setState({
				computedPosition: position
			}, this.openLookupDropdown);
		}
	}

	lookupRefCallback = (element: HTMLDivElement) => {
		if (element) {
			const resizer = new ResizeObserver(() => {
				if (this.state.dropdownOpen) {
					const lookupDropdownRect = element.getBoundingClientRect();
					this.autoDropdownPosition(lookupDropdownRect);
				}
			});
			resizer.observe(element);

			if (this.props.infiniteScroll) {
				element.firstElementChild.addEventListener('scroll', event => {
					const scrollNode = event.target as HTMLDivElement;
					const isEndOfScroll = (scrollNode.scrollHeight -
						scrollNode.scrollTop -
						scrollNode.offsetHeight <= 1);

					if (
						isEndOfScroll &&
						this.state.moreRecords &&
						this.state.fetchingMode === undefined
					) {
						this.setState({
							fetchingMode: 'after-scroll',
							pageNo: this.state.pageNo + 1
						}, this.fetchData);
					}
				});
			}
		}
	}

	loadingNodeCallback = (instance: CSTableRow) => {
		if (instance) {
			const table = document.getElementById(this.lookupTable);
			table.scrollTop = table.scrollHeight;
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
			helpText,
			hidden,
			id,
			infiniteScroll,
			label,
			labelHidden,
			labelTitle,
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
			selectedOptions
		} = this.state;

		const lookupFieldWrapperClasses = classNames(
			'cs-lookup-wrapper',
			{
				'cs-lookup-hidden': hidden,
				[`${className}`]: className
			}
		);

		const lookupInputClasses = classNames(
			'cs-lookup-input',
			{
				'cs-lookup-input-error': error
			}
		);

		const selectedLookupItemClasses = classNames(
			'cs-selected-input-option',
			{
				'cs-custom-select-dropdown-open': dropdownOpen
			}
		);

		const lookupDropdownMsgClasses = classNames(
			'cs-lookup-dropdown-msg-wrapper',
			{
				'cs-lookup-dropdown-msg-wrapper-inverse': fetchingMode === 'after-scroll'
			}
		);

		const style: CSSProperties = {
			'--cs-lookup-border-radius': borderRadius
		};

		const lookupDropdownStyle: CSSProperties = {
			...this.state.computedDropdownStyle,
			'--cs-lookup-input-width': lookupInputWidth ? lookupInputWidth + 'px' : ''
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
					color={this.state.fetchingMode === 'after-scroll' ?
						'var(--cs-lookup-dropdown-msg-inverse-c)' :
						'var(--cs-lookup-dropdown-msg-c)'
					}
					spin
				/>
				<span className="cs-lookup-dropdown-msg-text">Loading...</span>
			</CSTableRow>
		);

		const dropdownValuesNode = dropdownValues.map((item, i) => (
			<CSTableRow
				key={'lookup-table-row' + i}
				onMouseDown={(e: any) => {
					e.preventDefault();
					e.stopPropagation();
					this.selectAction(item);
				}}
				onMouseOver={() => this.setActiveTableRowIndex(i)}
				onMouseOut={() => this.setActiveTableRowIndex(null)}
				rowSelected={
					multiselect ?
						find(selectedOptions, item) :
						JSON.stringify(selectedOption) === JSON.stringify(item)
				}
				rowHighlighted={i === activeRowIndex}
				id={`${this.lookupTableRowId}-${i}`}
			>
				{!!lookupColumns.length &&
					this.props.lookupColumns.map((column, j) => (
						<CSTableCell text={item[column.key]} key={j} />
					))
				}
			</CSTableRow>
		));

		const renderDropdownTableBody = () => {
			if (minTermLength && searchTerm.length < minTermLength) {
				return minTermLengthNode;
			} else if (loading || fetchingMode === 'after-search') {
				return loadingNode;
			} else if (!!dropdownValues?.length) {
				return dropdownValuesNode;
			} else if (!dropdownValues?.length && searchTerm && fetchingMode === undefined) {
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
				this.props.mode === 'server' &&
				this.props.infiniteScroll &&
				this.props.pageSize < 9
			) {
				return (32 * (this.props.pageSize - 1)) + 'px';
			} else {
				return '17rem';
			}
		};
		return (
			<div className={lookupFieldWrapperClasses}>
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
					className="cs-lookup-input-wrapper"
					ref={this.lookupWrapperRef}
					onBlur={this.handleLookupWrapperBlur}
				>
					{!readOnly &&
						<CSIcon
							name="search"
							className="cs-lookup-search-icon"
							color="var(--cs-input-icon-fill)"
							size="1rem"
						/>
					}
					<input
						className={lookupInputClasses}
						autoComplete="off"
						autoFocus={autoFocus}
						type="text"
						placeholder={placeholder &&
							(selectedOptions.length === 0 && !selectedOption) ?
							placeholder : undefined}
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
						id={id ? id : this.uniqueAutoId}
						ref={this.lookupInputRef}
						style={style}
						aria-required={required}
						aria-expanded={dropdownOpen}
						aria-invalid={error}
						aria-multiselectable={multiselect}
						{...rest}
					/>
					{!searchTerm && (selectedOption || selectedOptions) &&
						<span className={selectedLookupItemClasses}>
							{this.getValueToDisplay(selectedOption) || this.getMultiselectValues()}
						</span>
					}
					{((searchTerm ||
						selectedOption ||
						(!!selectedOptions.length && !dropdownOpen))
						&& !disabled
						&& !readOnly) &&
						<CSButton
							btnType="transparent"
							btnStyle="brand"
							className="cs-lookup-clear"
							iconColor="var(--cs-input-clear)"
							iconName="close"
							iconDisplay="icon-only"
							label="clear"
							onClick={this.clearSearch}
							size="xsmall"
						/>
					}
					{!readOnly &&
						<CSIcon
							name="chevrondown"
							rotate={dropdownOpen ? '180' : null}
							className="cs-lookup-dropdown-icon"
							color="var(--cs-input-icon-fill)"
							size="1rem"
						/>
					}
				</div>
				{
					(error && errorMessage) &&
					<CSFieldErrorMsg message={errorMessage} />
				}
				{
					dropdownOpen &&
					<Portal node={document && document.getElementById(this.lookupDropdownId)}>
						<div
							className="cs-lookup-dropdown"
							style={lookupDropdownStyle}
							ref={this.lookupRefCallback}
							key="dropdown-values"
						>
							<CSTable id={this.lookupTable}>
								{(!!lookupColumns.length &&
									!!dropdownValues.length &&
									!loading &&
									fetchingMode !== 'after-search') &&
									<CSTableHeader headerSticky id={this.lookupTableHeader}>
										{lookupColumns.map(column => (
											<CSTableCell text={column.label} key={column.key} />
										))}
									</CSTableHeader>
								}
								<CSTableBody maxHeight={calcTableBodyMaxHeight()}>
									{renderDropdownTableBody()}
									{fetchingMode === 'after-scroll' &&
										loadingNode
									}
								</CSTableBody>
							</CSTable>
						</div>
					</Portal>
				}
			</div>

		);
	}
}

export default CSLookup;
