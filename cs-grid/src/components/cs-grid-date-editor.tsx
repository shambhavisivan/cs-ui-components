import classNames from 'classnames';
import moment from 'moment';
// tslint:disable-next-line: no-submodule-imports
import 'moment/min/locales';
import React, { ChangeEvent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CSGridCellEditorProps, DateProps } from '../interfaces/cs-grid-cell-props';

import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorState
} from '../interfaces/cs-grid-base-interfaces';
import { createLocale, dateFormat, formatLocale } from '../utils/cs-grid-date-helper';

/**
 * A cell editor that displays a date picker.
 */
export class CSGridDateEditor
	extends React.Component<
		CSGridCellEditorProps<string> & DateProps,
		CSGridCellEditorState<string> & { inputValue?: string }
	>
	implements CSGridCellEditor {
	private divRef: React.RefObject<HTMLDivElement>;

	constructor(props: CSGridCellEditorProps<string>) {
		super(props);

		this.divRef = React.createRef();

		moment.locale(this.props.userInfo.userLocale);
		this.state = {
			inputValue: this.convertToInputValue(this.props.value?.cellValue),
			value: this.props.value
		};
	}

	isCancelBeforeStart() {
		document.addEventListener('click', this.handleOutsideClick);

		return false;
	}

	isCancelAfterEnd() {
		document.removeEventListener('click', this.handleOutsideClick);

		return false;
	}

	/**
	 * Returns the current value, required by ag-grid.
	 */
	getValue() {
		return this.state.value;
	}

	isPopup = () => {
		return true;
	};

	onChange = async (date: Date): Promise<void> => {
		const formattedDate = date ? moment(date).format(dateFormat) : '';

		let value: CellData<string> = {
			cellValue: formattedDate,
			errorMessage: this.state.value?.errorMessage
		};

		this.setState({ value, inputValue: this.convertToInputValue(formattedDate) });
		if (this.props.onChange) {
			value = await this.props.onChange(
				this.props.node.id,
				this.getValue().cellValue,
				formattedDate
			);
			this.setState({ value, inputValue: this.convertToInputValue(value?.cellValue) });
		}
	};

	onCalendarClose = () => {
		this.setState({ value: this.state.value }, () => {
			this.props.stopEditing();
		});
	};

	convertToInputValue = (date?: string) => {
		if (date) {
			return moment(date, dateFormat).format(this.props.textInputFormat);
		}

		return '';
	};

	convertInputValueToMoment = (value: string) => {
		return value ? moment(value, this.props.textInputFormat, true) : null;
	};
	onTextInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		const date = this.convertInputValueToMoment(newValue);
		if (date?.isValid()) {
			this.setState({
				inputValue: newValue,
				value: {
					cellValue: date.format(dateFormat),
					errorMessage: this.state.value?.errorMessage
				}
			});
			if (this.props.onChange) {
				const value = await this.props.onChange(
					this.props.node.id,
					this.getValue().cellValue,
					date.format(dateFormat)
				);
				this.setState({ value, inputValue: this.convertToInputValue(value?.cellValue) });
			}
		} else {
			this.setState({ inputValue: newValue });
		}
	};

	render() {
		const selectedDate: Date = this.state.value?.cellValue
			? moment(this.state.value.cellValue, dateFormat).toDate()
			: null;
		const placeholderText = 'Click to select a date';

		const dateInputClasses = classNames('date-attribute-input', {
			'date-attribute-input-invalid': !this.convertInputValueToMoment(
				this.state.inputValue
			)?.isValid()
		});
		let openToDate: Date;
		if (this.props.getOpenToDate && (!this.state.value || !this.state.value.cellValue)) {
			openToDate = moment(this.props.getOpenToDate(this.props.node.id), dateFormat).toDate();
		}

		return (
			<div className='date-attribute' ref={this.divRef}>
				{this.props.textInputFormat && (
					<input
						ref={ref => {
							if (ref) {
								setTimeout(() => ref.focus(), 0);
							}
						}}
						type='text'
						value={this.state.inputValue}
						className={dateInputClasses}
						onChange={this.onTextInputChange}
					/>
				)}
				<DatePicker
					selected={selectedDate}
					onChange={this.onChange}
					isClearable={true}
					placeholderText={placeholderText}
					showMonthDropdown={true}
					showYearDropdown={true}
					inline={true}
					dropdownMode='select'
					onCalendarClose={this.onCalendarClose}
					locale={createLocale(this.props.userInfo.dateLocale)}
					openToDate={openToDate}
				/>
			</div>
		);
	}

	private handleOutsideClick = (event: MouseEvent) => {
		if (this.divRef.current && !this.divRef.current.contains(event.target as Node)) {
			this.props.stopEditing();
		}
	};
}
