import moment from 'moment';
// tslint:disable-next-line: no-submodule-imports
import 'moment/min/locales';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CSGridCellEditorProps, DateTimeProps } from '../interfaces/cs-grid-cell-props';

import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorState
} from '../interfaces/cs-grid-base-interfaces';
import {
	createLocale,
	dateFormat,
	dateTimeFormat,
	formatLocale,
	timeFormat
} from '../utils/cs-grid-date-helper';

/**
 * A cell editor that displays a date time picker.
 */
export class CSGridDateTimeEditor
	extends React.Component<
		CSGridCellEditorProps<string> & DateTimeProps,
		CSGridCellEditorState<string>
	>
	implements CSGridCellEditor {
	constructor(props: CSGridCellEditorProps<string>) {
		super(props);

		moment.locale(this.props.userInfo.userLocale);
		this.state = { value: this.props.value };
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

	onChange = async (date: Date, event: React.SyntheticEvent<any, Event>): Promise<void> => {
		const formattedDateTime = date ? moment(date).format(dateTimeFormat) : '';

		let value: CellData<string> = {
			cellValue: formattedDateTime,
			errorMessage: this.state.value?.errorMessage
		};

		this.setState({ value });
		if (this.props.onChange) {
			value = await this.props.onChange(
				this.props.node.id,
				this.getValue().cellValue,
				formattedDateTime
			);
		}

		this.setState({ value }, () => {
			// The event is only present for date selection, not for time selection.
			if (!event) {
				this.props.stopEditing();
			}
		});
	};

	render() {
		let date: Date = null;
		if (this.state.value?.cellValue) {
			date = moment(this.state.value.cellValue, dateTimeFormat).toDate();
		}
		const formattedDate = formatLocale(date, 'DateTime');
		const placeholderText = 'Click to select a date';

		let openToDate: Date;
		if (this.props.getOpenToDate && (!this.state.value || !this.state.value.cellValue)) {
			openToDate = moment(this.props.getOpenToDate(this.props.node.id), dateFormat).toDate();
		}

		return (
			<div className='date-attribute'>
				<DatePicker
					selected={date}
					onChange={this.onChange}
					isClearable={true}
					placeholderText={placeholderText}
					showMonthDropdown={true}
					showYearDropdown={true}
					dropdownMode='select'
					inline={true}
					value={formattedDate}
					locale={createLocale(this.props.userInfo.dateLocale)}
					showTimeSelect={true}
					timeFormat={timeFormat}
					timeIntervals={this.props.timeInterval || 5}
					timeCaption={this.props.userInfo.dateLocale?.timeCaption ?? 'Time'}
					dateFormat={dateTimeFormat}
					openToDate={openToDate}
				/>
			</div>
		);
	}
}
