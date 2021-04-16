import React from 'react';
import { FormFieldProps } from './FormField';
import { debounceInterval } from '../utils/Util';
import debounce from 'lodash.debounce';
import { ReferenceOption, ReferenceOptionColumn } from '../types/ReferenceOption';

interface State {
	optionRowColumnDefs: Array<ReferenceOptionColumn>;
	dropdownValues: Array<ReferenceOption>;
	selectedOption: ReferenceOption | null;
	startedEditing: boolean;
	isQuerying: boolean;
	searchTerm: string;
}

/**
 * An autosuggest input/selectbox similar to the lookup fields in
 * salesforce.
 *
 * - Independent of SF and can be used for any autocomplete style inputs.
 * - autocomplete dropdown can be either a list(use only on optioRowColumns) or a table.
 *
 * props.descriptor.referenceOptionColumnDefs should be an array of objects.
 * (e.g): [{ key: 'name', label: 'Name' }, {key:'cspmb__One_of_charge, label:'One Of Charge}];
 *
 * props.value should be an array of objects of structure
 * (e.g):
 * [{
 *   name: 'Iphone 6',
 *   cspmb_One_off_charge: 344.99,
 *  },
 * {
 *   name: 'One Plus 7 Pro',
 *   cspmb_One_off_charge: 599.99,
 *  }]
 *
 * the 'name' is the value shown in the field when user selects some value in the select box.
 * then component using referenceField must provide atleast {name: 'something'} in its data.
 */
export class ReferenceField extends React.Component<FormFieldProps, State> {
	intervalBetweenLookups: number;
	fieldRef: React.RefObject<any>;
	constructor(props: FormFieldProps) {
		super(props);
		if (!props.fetchReferenceOptions) {
			throw new Error('ReferenceField is invoked with invalid fetchReferenceOptions');
		}
		this.fieldRef = React.createRef();
		this.intervalBetweenLookups = debounceInterval;
		let optionRowColumnDefs = props.descriptor.referenceOptionColumnDefs;
		/**
		 * Default headers for the autosuggest table. The data should
		 * at least have  { name:'val'}.
		 *
		 * TODO: think of a better way to do this.
		 */
		if (
			!optionRowColumnDefs ||
			(Array.isArray(optionRowColumnDefs) && !optionRowColumnDefs.length)
		) {
			const defaultOptionRowColumnDefs: Array<ReferenceOptionColumn> = [
				{ key: 'name', label: 'Name' }
			];
			optionRowColumnDefs = defaultOptionRowColumnDefs;
		}

		this.state = {
			optionRowColumnDefs,
			isQuerying: false,
			searchTerm: '',
			selectedOption: props.value,
			startedEditing: false,
			dropdownValues: []
		};
		this.executeSearch = debounce(this.executeSearch, this.intervalBetweenLookups);
	}

	componentDidMount() {
		const displayValue = this.props.value ? this.props.value.name : null;
		this.setState({ searchTerm: displayValue ? displayValue : '' });
		document.addEventListener('click', this.handleClickOutside, true);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, true);
	}

	selectOption(selectedValue: ReferenceOption | null) {
		this.setState(
			{
				selectedOption: selectedValue,
				startedEditing: false,
				dropdownValues: []
			},
			() => {
				this.props.handleFieldChange(selectedValue); // can be the entire option or just the Id.
			}
		);
	}

	handleSearch = (event: any) => {
		this.setState({ searchTerm: event.target.value }, () => {
			this.executeSearch(this.state.searchTerm);
		});
	}

	handleClickOutside = (event: any) => {
		if (this.fieldRef && !this.fieldRef.current.contains(event.target)) {
			// clear dropDown and come out of edit mode if user has clicked outside reference field while editing it.
			if (this.state.startedEditing) {
				if (this.props.value && this.state.searchTerm === '') {
					// user has cleared entire value
					this.selectOption(null);
				} else {
					this.setState({ startedEditing: false, dropdownValues: [] });
				}
			}
		}
	}

	executeSearch = (searchTerm: string) => {
		this.setState({ isQuerying: true, dropdownValues: [] }, () => {
			this.props.fetchReferenceOptions!(this.props.descriptor, searchTerm).then(results => {
				this.setState({ isQuerying: false, dropdownValues: results });
			});
		});
	}

	startEdit() {
		const displayValue = this.props.value ? this.props.value.name : null;
		this.setState({ startedEditing: true, searchTerm: displayValue ? displayValue : '' });
	}

	clearSearch() {
		if (this.state.searchTerm === '') {
			return;
		}

		this.setState({ searchTerm: '', dropdownValues: [] });
	}

	render() {
		return (
			<div ref={this.fieldRef} className="lookup-wrapper">
				{/* SEARCH INPUT OR SELECTED OPTION ON START */}
				{this.state.startedEditing ? (
					<div className="input-wrapper">
						<input
							className="input-edit-mode"
							type="text"
							value={this.state.searchTerm}
							onChange={e => this.handleSearch(e)}
						/>
						<span className="icon-search" aria-hidden="true" />
						{this.state.searchTerm.length ? (
							<button
								className="cs-btn cs-btn-transparent cs-btn-icon-only btn-clear"
								onClick={event => {
									this.clearSearch();
								}}
							>
								<span className="cs-btn-icon icon-close" />
							</button>
						) : null}
					</div>
				) : (
					<div
						className="input-wrapper"
						id="startEditButton"
						onClick={event => {
							event.preventDefault();
							this.startEdit();
						}}
					>
						<input
							id="search-input"
							type="text"
							value={this.props.value ? this.props.value.name : ''}
							onChange={e => this.handleSearch(e)}
						/>
						<span className="icon-search" aria-hidden="true" />
					</div>
				)}
				{/* Reference options results */}
				{this.state.dropdownValues.length ? (
					<div className="lookup-results">
						<header>
							{this.state.optionRowColumnDefs.map((col, i) => (
								<div className="column" key={i}>
									<span>{col.label}</span>
								</div>
							))}
						</header>
						<div className="lookup-results-body">
							{this.state.dropdownValues.map((ddValue, i) => (
								<div
									className="item"
									onClick={event => {
										event.preventDefault();
										this.selectOption(ddValue);
									}}
									key={i}
								>
									{this.state.optionRowColumnDefs.map((col, j) => (
										<div className="column" key={j}>
											<span>{ddValue[col.key]}</span>
										</div>
									))}
								</div>
							))}
						</div>
					</div>
				) : null}
				{/* SEARCHING */}
				{this.state.isQuerying ? <div className="querying">Fetching values...</div> : null}
			</div>
		);
	}
}
