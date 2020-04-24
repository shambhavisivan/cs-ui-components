import React from 'react';
import classNames from 'classnames';
import CSLabel from './CSLabel';
import CSIcon from './CSIcon';
import CSTable from './table/CSTable';
import CSTableHeader from './table/CSTableHeader';
import CSTableBody from './table/CSTableBody';
import CSTableRow from './table/CSTableRow';
import CSTableCell from './table/CSTableCell';

export interface CSLookupFieldProps {
	borderType?: string;
	className: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: string;
	fetchLookupOptions: () => Array<object>;
	fieldToBeDisplayed: string;
	helpText?: string;
	hidden?: boolean;
	id?: string;
	label?: string;
	onSelectOption: (selectedrecord: object) => void;
	placeholder?: string;
	required?: boolean;
	tooltipPosition?: string;
	value?: object | null;
}

export interface CSLookupFieldState {
	dropdownValues: Array<object>;
	selectedOption?: object | null;
	searchTerm?: string;
}

class CSLookupField extends React.Component<CSLookupFieldProps, CSLookupFieldState> {

	fieldRef: React.RefObject<any>;

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
			this.setState({dropdownValues: []});
		}
	}

	handleSearch = (event: any) => {
		const value = event.target.value;
		this.setState({ searchTerm: value ? value : '' }, () => {
			this.executeSearch(this.state.searchTerm);
		});
	}

	executeSearch = (searchTerm: string) => {
		this.setState({dropdownValues: [], selectedOption: null }, () => {
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

		const lookupFieldWrapperClasses = classNames(
			'cs-lookup-field-wrapper',
			{
				'cs-lookup-field-hidden': this.props.hidden
			}
		);

		const lookupFieldGroupClasses = classNames(
			'cs-lookup-field-group',
			{
				[`${this.props.className}`]: this.props.className
			}
		);

		const lookupFieldClasses = classNames(
			'cs-lookup-field',
			{
				[`cs-lookup-field-${this.props.borderType}`]: this.props.borderType,
				'cs-lookup-field-error': this.props.error
			}
		);
		return (
			<div className={lookupFieldWrapperClasses} ref={this.fieldRef}>
				{(this.props.label) &&
					<CSLabel
						for={this.props.id}
						label={this.props.label}
						helpText={this.props.helpText}
						tooltipPosition={this.props.tooltipPosition}
						required={this.props.required}
					/>
				}
				<div className={lookupFieldGroupClasses}>
					<CSIcon name="search" className="cs-lookup-field-icon"/>
					<input
						className={lookupFieldClasses}
						type="text"
						placeholder={this.props.placeholder}
						disabled={this.props.disabled}
						required={this.props.required}
						value={this.state.searchTerm}
						onChange={e => this.handleSearch(e)}
					/>
					{this.state.searchTerm &&
						<button
							className="cs-lookup-field-clear"
							onClick={this.clearSearch}
							aria-label="close"
						>
							<CSIcon name="close"/>
						</button>
					}
					{(this.props.error && this.props.errorMessage) &&
						<span className="cs-lookup-field-error-msg">{this.props.errorMessage}</span>
					}
				</div>
				{this.state.dropdownValues.length > 0 && (
					<div className="cs-lookup-field-results">
						<CSTable>
							<CSTableHeader>
								{this.state.dropdownValues.slice(0, 1).map((item, i) => (
										Object.keys(item).map((key: any, j) => (
										<CSTableCell title={key} key={'header-cell' + j} />
								))))}
							</CSTableHeader>
							<CSTableBody>
								{this.state.dropdownValues.map((item: any, i) => (
										<CSTableRow
										key={'table-row' + i}
										onClick={() => this.onRowClickHandler(item)}
									>
										{Object.keys(item).map((key: any, j: any) => (
											<CSTableCell title={item[key]} key={'row-cell' + j} />
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
