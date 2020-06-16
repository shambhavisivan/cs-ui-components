import createDynamicLocale from '@cloudsense/react-datepicker-dynamiclocale';
import moment from 'moment';
// tslint:disable-next-line: no-submodule-imports
import 'moment/min/locales';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CSGridCellEditorProps } from '../interfaces/cs-grid-cell-props';

import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorState
} from '../interfaces/cs-grid-base-interfaces';
import { DateLocale } from '../interfaces/user-info';

/**
 * A cell editor that displays a date picker.
 */
export class CSGridDateEditor
	extends React.Component<CSGridCellEditorProps<string>, CSGridCellEditorState<string>>
	implements CSGridCellEditor {
	private dateValueFormat: string = 'YYYY-MM-DD';
	private defaultDateLocale: DateLocale = {
		daysInFirstWeek: 7,
		daysOfWeek: ['Sun', 'Mon', 'Tue', ' Wed', 'Thu', 'Fri', 'Sat'],
		firstDayOfWeek: 0,
		monthsOfYear: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		]
	};

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

	onChange = async (date: Date): Promise<void> => {
		const formattedDate = date ? moment(date).format(this.dateValueFormat) : '';

		let value: CellData<string> = {
			cellValue: formattedDate,
			errorMessage: this.state.value.errorMessage
		};

		this.setState({ value });
		if (this.props.onChange) {
			value = await this.props.onChange(
				this.props.node.id,
				this.getValue().cellValue,
				formattedDate
			);
		}

		this.setState({ value }, () => {
			this.props.stopEditing();
		});
	};

	/**
	 * Formats a Date object into a localised date string.
	 */
	format = (value: Date): string => {
		return value ? moment(value).format(moment.localeData().longDateFormat('L')) : '';
	};

	render() {
		let date: Date = null;
		if (this.state.value.cellValue) {
			date = moment(this.state.value.cellValue, this.dateValueFormat).toDate();
		}
		const formattedDate = this.format(date);
		const placeholderText = 'Click to select a date';

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
					locale={this.createLocale()}
				/>
			</div>
		);
	}

	private createLocale(): any {
		const dates = this.props.userInfo.dateLocale || this.defaultDateLocale;

		return createDynamicLocale(
			{
				short: dates.daysOfWeek
			},
			{
				wide: dates.monthsOfYear
			},
			dates.firstDayOfWeek,
			dates.daysInFirstWeek
		);
	}
}
