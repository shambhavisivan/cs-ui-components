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
import debounce from 'lodash.debounce';

export interface CSLookupTableColumnType {
	key: string;
	label: string;
}

export type CSLookupDropdownAlign = 'left' | 'right';
export type CSLookupDropdownPosition = 'top' | 'bottom';

interface CSLookupCommmonProps {
	[key: string]: any;
	align?: CSLookupDropdownAlign;
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
	loading?: boolean;
	lookupColumns: Array<CSLookupTableColumnType>;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => any;
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => any;
	onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => any;
	onSelectChange?: (value?: any) => any;
	placeholder?: string;
	position?: CSLookupDropdownPosition;
	preventUpdate?: boolean;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: Record<string, any> | null;
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
	selectedOption?: object | null;
}

export function fixControlledValue<T>(value: T) {
	if (typeof value === 'undefined' || value === null) {
		return '';
	}
	return value;
}

class CSLookup extends React.Component<CSLookupProps, CSLookupState> {

	public static defaultProps = {
		align: 'left',
		position: 'bottom',
		mode: 'client',
		minTermLength: 0
	};

	private lookupInputRef: React.RefObject<HTMLInputElement>;
	private lookupDropdownId = 'cs-lookup-dropdown-root';
	private lookupTable = 'cs-lookup-table';
	private lookupTableHeader = 'cs-lookup-table-header';
	private lookupTableRowId = 'cs-lookup-table-row';

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	private executeServerSearchDebounced: any;

	constructor(props: CSLookupProps) {
		super(props);
		this.lookupInputRef = React.createRef();

		this.state = {
			activeRowIndex: null,
			computedPosition: [props.position, props.align],
			dropdownOpen: false,
			dropdownValues: [],
			pageNo: 0,
			moreRecords: true,
			searchTerm: '',
			selectedOption: props.value
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
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, true);
	}

	componentDidUpdate(prevProps: CSLookupProps) {
		if (prevProps.value !== this.props.value && !this.props.preventUpdate) {
			this.setState({
				selectedOption: this.props.value
			});
		}
		if (prevProps.lookupOptions !== this.props.lookupOptions) {
			this.setState({
				dropdownValues: this.props.lookupOptions
			});
		}
	}

	handleClickOutside = (event: any) => {
		if (
			this.lookupInputRef.current &&
			!this.lookupInputRef.current.contains(event.target) &&
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
		onSearch?.(e);

		const value = e.target.value ? e.target.value : '';
		this.setState({
			searchTerm: value,
			fetchingMode: mode === 'server' ? 'after-search' : undefined,
			dropdownValues: [],
			pageNo: 0
		}, () => this.executeSearch(this.state.searchTerm));
	}

	executeSearch = (searchTerm: string) => {
		this.props.mode === 'client' ?
			this.executeClientSearch(searchTerm) :
			this.executeServerSearchDebounced();
	}

	/*
		If searchBy prop is not set items will be filtered by keys provided in lookupColumns prop.
		Otherwise they will be filtered by key provided in searchBy prop array.
	*/
	executeClientSearch = (searchTerm: string) => {
		const { lookupOptions, lookupColumns, searchBy } = this.props;
		const fetchedOptions = [...lookupOptions];
		let results: Array<any> = [];

		const includesSearchTerm = (value: any) => {
			return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
		};

		if (!!searchBy.length) {
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

	clearSearch = () => {
		if (this.props.preventUpdate) {
			return;
		}
		this.setState({
			searchTerm: '',
			selectedOption: null,
			dropdownValues: this.props.mode === 'client' ?
				this.props.lookupOptions :
				[]
		}, this.handleSelectChange);
		this.openLookupDropdown();
		setTimeout(() => {
			this.lookupInputRef.current.focus();
		}, 0);
	}

	selectAction(_selectedOption: Record<string, any>) {
		if (this.props.preventUpdate) {
			return;
		}
		this.setState(prevState => ({
			selectedOption: _selectedOption,
			searchTerm: ''
		}), this.handleSelectChange);
		this.closeLookupDropdown();
	}

	toggleLookupDropdown = () => {
		const { dropdownOpen } = this.state;

		if (!dropdownOpen) {
			this.openLookupDropdown();
		} else {
			this.closeLookupDropdown();
		}
	}

	handleSelectChange = () => {
		if (this.props.onSelectChange) {
			this.props.onSelectChange(this.state.selectedOption);
		}
	}

	// returns the value of the selected option based on key provided in fieldToBeDisplayed prop
	getValueToDisplay = (_selectedOption: Record<string, any>) => {
		if (_selectedOption) {
			return _selectedOption[this.props.fieldToBeDisplayed];
		}
	}

	setActiveTableRowIndex = (index: number) => {
		this.setState({
			activeRowIndex: index
		});
	}

	handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		if (this.props.onFocus) {
			this.props.onFocus(e);
		}
		this.openLookupDropdown();
		this.setState({ activeRowIndex: 0 });

		if (this.props.mode === 'server' && this.props.minTermLength === 0) {
			this.setState({ fetchingMode: 'after-search' }, this.fetchData);
		}
	}

	handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		if (this.props.onBlur) {
			this.props.onBlur(e);
		}
		this.closeLookupDropdown();
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

	handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
			case event.key === KeyCode.Backspace && searchTerm.length === 1 && !!selectedOption:
				this.setState({
					selectedOption: null
				}, this.handleSelectChange);
				break;
			case event.key === KeyCode.ArrowDown:
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
			case event.key === KeyCode.ArrowUp:
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
			lookupInputWidth: elementRect.width
		});
		document.addEventListener('click', this.handleClickOutside, true);
	}

	closeLookupDropdown = () => {
		this.setState({
			computedDropdownStyle: undefined,
			computedPosition: [this.props.position, this.props.align],
			dropdownOpen: false,
			pageNo: 0,
			moreRecords: true,
			activeRowIndex: null
		});
		document.removeEventListener('click', this.handleClickOutside, true);
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
			const lookupDropdownRect = element.getBoundingClientRect();
			this.autoDropdownPosition(lookupDropdownRect);
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
			onBlur,
			onFocus,
			onSearch,
			onSelectChange,
			pageSize,
			placeholder,
			position,
			preventUpdate,
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
			selectedOption
		} = this.state;

		const lookupFieldWrapperClasses = classNames(
			'cs-lookup-wrapper', {
			'cs-lookup-hidden': hidden,
			[`${className}`]: className
		});

		const lookupDropdownMsgClasses = classNames(
			'cs-lookup-dropdown-msg-wrapper',
			{
				'cs-lookup-dropdown-msg-wrapper-inverse': this.state.fetchingMode === 'after-scroll'
			});

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
				onMouseDown={e => {
					e.preventDefault();
					e.stopPropagation();
					this.selectAction(item);
				}}
				onMouseOver={() => this.setActiveTableRowIndex(i)}
				onMouseOut={() => this.setActiveTableRowIndex(null)}
				rowSelected={JSON.stringify(selectedOption) === JSON.stringify(item)}
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
				< div className="cs-lookup-input-wrapper" >
					<CSIcon
						name="search"
						className="cs-lookup-search-icon"
						color="var(--cs-input-icon-fill)"
					/>
					<input
						className="cs-lookup-input"
						autoComplete="off"
						type="text"
						placeholder={placeholder}
						disabled={disabled}
						required={required}
						value={fixControlledValue(searchTerm || this.getValueToDisplay(selectedOption))}
						onFocus={this.handleOnFocus}
						onKeyDown={this.handleOnKeyDown}
						onChange={this.handleSearch}
						onBlur={this.handleOnBlur}
						title={title}
						id={id ? id : this.uniqueAutoId}
						ref={this.lookupInputRef}
						style={style}
						aria-required={required}
						aria-invalid={error}
						{...rest}
					/>
					{(searchTerm || selectedOption && !disabled) &&
						<CSButton
							btnType="transparent"
							btnStyle="brand"
							className="cs-lookup-clear"
							iconColor="var(--cs-input-clear)"
							iconName="close"
							iconDisplay="icon-only"
							label="clear"
							onClick={this.clearSearch}
							onBlur={() => {
								if (!!searchTerm.length) {
									this.setState({ searchTerm: '' });
								}
							}}
							size="xsmall"
						/>
					}
					<CSIcon
						name="chevrondown"
						rotate={dropdownOpen ? '180' : null}
						className="cs-lookup-dropdown-icon"
						color="var(--cs-input-icon-fill)"
					/>
					{
						(error && errorMessage) &&
						<CSFieldErrorMsg message={errorMessage} />
					}
				</div >
				{dropdownOpen &&
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
								<CSTableBody maxHeight="17rem">
									{renderDropdownTableBody()}
									{this.state.fetchingMode === 'after-scroll' &&
										loadingNode
									}
								</CSTableBody>
							</CSTable>
						</div>
					</Portal>
				}
			</div >

		);
	}
}

export default CSLookup;
