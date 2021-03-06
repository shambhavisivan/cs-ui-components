import moment from 'moment';
// tslint:disable-next-line: no-submodule-imports
import 'moment/min/locales';
import React from 'react';
import { CSGridCellEditorProps, DateTimeProps } from '../interfaces/cs-grid-cell-props';

import { CSDateTimePicker } from '@cloudsense/cs-ui-components';
import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorState
} from '../interfaces/cs-grid-base-interfaces';
import { dateFormat, dateTimeFormat, timeFormat } from '../utils/cs-grid-date-helper';
import KeyCode from '../utils/cs-grid-keycode';

/**
 * A cell editor that displays a date time picker.
 */
export class CSGridDateTimeEditor
	extends React.Component<
		CSGridCellEditorProps<string> & DateTimeProps,
		CSGridCellEditorState<string>
	>
	implements CSGridCellEditor {
	private divRef: React.RefObject<HTMLDivElement>;
	private localeFormat = `${moment
		.localeData()
		.longDateFormat('L')
		.toLowerCase()
		.replace(new RegExp('m', 'g'), 'M')} ${timeFormat}`;

	constructor(props: CSGridCellEditorProps<string>) {
		super(props);

		this.divRef = React.createRef();

		moment.locale(this.props.userInfo.userLocale);
		this.state = { value: this.props.value };
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

	onKeyDown = (event: any) => {
		if (event.key === KeyCode.Enter || event.key === KeyCode.Escape) {
			setTimeout(() => {
				this.props.stopEditing();
			}, 0);
		}
	};

	render() {
		let date: Date = null;
		if (this.state.value?.cellValue) {
			date = moment(this.state.value.cellValue).toDate();
		}
		const placeholderText = 'Click to select a date';

		let openToDate: Date;
		if (this.props.getOpenToDate && (!this.state.value || !this.state.value.cellValue)) {
			openToDate = moment(this.props.getOpenToDate(this.props.node.id), dateFormat).toDate();
		}

		return (
			<div className='date-attribute' ref={this.divRef}>
				<CSDateTimePicker
					selected={date}
					onChange={this.onChange}
					clearable={true}
					placeholder={placeholderText}
					showMonthDropdown={true}
					showYearDropdown={true}
					dropdownMode='select'
					locale={this.props.userInfo.userLocale}
					timeFormat={timeFormat}
					timeIntervals={this.props.timeInterval || 5}
					timeCaption={this.props.userInfo.dateLocale?.timeCaption ?? 'Time'}
					dateFormat={this.localeFormat}
					openToDate={openToDate}
					onKeyDown={this.onKeyDown}
					ref={(ref) => {
						if (ref) {
							setTimeout(() => {
								ref.setFocus();
							}, 20);
						}
					}}
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
