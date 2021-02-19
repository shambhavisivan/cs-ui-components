import React from 'react';
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
import { v4 as uuidv4 } from 'uuid';

export type CSLookupBorderType = 'round' | 'square';

export interface CSLookupFieldProps {
	[key: string]: any;
	borderType?: CSLookupBorderType;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	fetchLookupOptions: () => Array<object>;
	fieldToBeDisplayed: string;
	helpText?: string;
	hidden?: boolean;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	loading?: boolean;
	placeholder?: string;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: object | null;
}

export interface CSLookupFieldState {
	dropdownValues: Array<object>;
	selectedOption?: object | null;
	searchTerm?: string;
}

class CSLookupField extends React.Component<CSLookupFieldProps, CSLookupFieldState> {

	fieldRef: React.RefObject<any>;

	private uniqueAutoId = this.props.id ? this.props.id : uuidv4();

	constructor(props: CSLookupFieldProps) {
		super(props);
		this.fieldRef = React.createRef();

		this.state = {
			dropdownValues: [],
			searchTerm: '',
			selectedOption: props.value
		};
	}
	componentDidMount() {
		if (!this.props.fetchLookupOptions) {
			throw new Error('CSLookupField is invoked with invalid fetchLookupOptions');
		}

		if (this.props.value) {
			this.setState({ selectedOption: this.props.value });
		}

		document.addEventListener('click', this.handleClickOutside, true);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, true);
	}

	handleClickOutside = (event: MouseEvent) => {
		if (this.fieldRef && !this.fieldRef.current.contains(event.target)) {
			this.setState({ dropdownValues: [] });
		}
	}

	handleSearch = (event: any) => {
		const value = event.target.value;
		this.setState({ searchTerm: value ? value : '' }, () => {
			this.executeSearch(this.state.searchTerm);
		});
	}

	executeSearch = (searchTerm: string) => {
		this.setState({ dropdownValues: [], selectedOption: null }, () => {
			const fetchedOptions = this.props.fetchLookupOptions();
			const results = fetchedOptions.filter((item: any) => {
				return Object.keys(item).some((key: any) => item[key].toString().toLowerCase().includes(searchTerm.toString().toLowerCase()));
			});
			this.setState({ dropdownValues: results });
		});
	}

	clearSearch = () => {
		if (this.state.searchTerm.length === 0) {
			return;
		}
		this.setState({ searchTerm: '', dropdownValues: [], selectedOption: null });
	}

	selectAction(selectedValue: any) {
		this.setState(
			{
				selectedOption: selectedValue,
				dropdownValues: [],
				searchTerm: selectedValue[this.props.fieldToBeDisplayed]
			});
	}

	onRowClickHandler = (item: object) => {
		this.selectAction(item);
	}

	render() {

		const {
			borderType,
			className,
			disabled,
			error,
			errorMessage,
			fetchLookupOptions,
			fieldToBeDisplayed,
			helpText,
			hidden,
			id,
			label,
			labelHidden,
			labelTitle,
			loading,
			placeholder,
			required,
			title,
			tooltipPosition,
			value,
			...rest
		} = this.props;

		const lookupFieldWrapperClasses = classNames(
			'cs-lookup-field-wrapper',
			{
				[`${className}`]: className,
				'cs-lookup-field-hidden': hidden
			}
		);
		const lookupFieldClasses = classNames(
			'cs-lookup-field',
			{
				[`cs-lookup-field-${borderType}`]: borderType,
				'cs-lookup-field-error': error
			}
		);

		return (
			<div className={lookupFieldWrapperClasses} ref={this.fieldRef}>
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
				<div className="cs-lookup-field-group">
					<CSIcon
						name="search"
						className="cs-lookup-field-search"
						size="0.875rem"
					/>
					<input
						className={lookupFieldClasses}
						type="text"
						placeholder={placeholder}
						disabled={disabled}
						required={required}
						value={this.state.searchTerm}
						onChange={e => this.handleSearch(e)}
						title={title}
						id={this.uniqueAutoId}
						aria-required={required}
						aria-invalid={error}
						{...rest}
					/>
					{this.state.searchTerm &&
						<CSButton
							btnType="transparent"
							btnStyle="brand"
							className="cs-lookup-field-clear"
							iconColor="var(--cs-input-clear)"
							iconName="close"
							label="clear"
							labelHidden
							onClick={this.clearSearch}
							size="small"
						/>
					}
					{loading ?
						<span className="cs-lookup-field-spinner">
							<CSIcon name="spinner" size="0.875rem" spin />
						</span>
						:
						<CSIcon name="chevrondown" className="cs-lookup-field-dropdown" size="0.875rem" />
					}
					{(error && errorMessage) &&
						<CSFieldErrorMsg message={errorMessage} />
					}
				</div>
				{this.state.dropdownValues.length > 0 && (
					<div className="cs-lookup-field-results">
						<CSTable>
							<CSTableHeader>
								{this.state.dropdownValues.slice(0, 1).map((item, i) => (
									Object.keys(item).map((key: any, j) => (
										<CSTableCell text={key} key={'header-cell' + j} />
									))))}
							</CSTableHeader>
							<CSTableBody>
								{this.state.dropdownValues.map((item: any, i) => (
									<CSTableRow
										key={'table-row' + i}
										onClick={() => this.onRowClickHandler(item)}
									>
										{Object.keys(item).map((key: any, j: any) => (
											<CSTableCell text={item[key]} key={'row-cell' + j} />
										))}
									</CSTableRow>
								))}
							</CSTableBody>
						</CSTable>
					</div>)
				}
			</div>
		);
	}
}

export default CSLookupField;
