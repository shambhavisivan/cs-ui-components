import moment from 'moment';
// tslint:disable-next-line: no-submodule-imports
import 'moment/min/locales';
import React from 'react';
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

	onChange = async (date: Date): Promise<void> => {
		const formattedDate = date ? moment(date).format(dateFormat) : '';

		let value: CellData<string> = {
			cellValue: formattedDate,
			errorMessage: this.state.value?.errorMessage
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

	render() {
		let date: Date = null;
		if (this.state.value?.cellValue) {
			date = moment(this.state.value.cellValue, dateFormat).toDate();
		}
		const formattedDate = formatLocale(date, 'Date');
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
					openToDate={openToDate}
				/>
			</div>
		);
	}
}
