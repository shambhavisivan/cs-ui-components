import React from 'react';
import { FormFieldProps } from './FormField';
import { format } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { FieldType } from '..';
import { createLocale, numberToDate, dateToNumber } from '../utils/DateUtil';

export class DateTimeField extends React.Component<FormFieldProps, {}> {
	render() {
		const locale = createLocale(this.props.locale.dates);
		const date = numberToDate(this.props.value);
		const title = date ? format(date, 'PP HH:mm', { locale }) : '';

		const dateTimeFormat = `${this.props.locale.dates.format} ${this.props.locale.dates.timeFormat}`;
		const timeCaption =
			this.props.locale.dates.timeCaption !== undefined
				? this.props.locale.dates.timeCaption
				: 'Time';

		return (
			<DatePicker
				{...this.props.wrapper.injectInputProps(
					this.props.descriptor.name,
					this.props.descriptor.fieldType as FieldType,
					this.props.status
				)}
				name={this.props.descriptor.name}
				dateFormat={dateTimeFormat}
				locale={locale}
				selected={date}
				onChange={value => this.props.handleFieldChange(dateToNumber(value))}
				required={this.props.status === 'mandatory'}
				readOnly={this.props.status === 'visible'}
				title={title}
				showTimeSelect
				timeFormat={this.props.locale.dates.timeFormat}
				timeIntervals={this.props.locale.dates.timeInterval || 5}
				timeCaption={timeCaption}
			/>
		);
	}
}
