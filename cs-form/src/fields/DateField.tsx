import React from 'react';
import { FormFieldProps } from './FormField';
import { format } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { FieldType } from '..';
import { createLocale, numberToDate, dateToNumber } from '../utils/DateUtil';

export interface DateFieldLocale {
	format: string;
	timeFormat?: string;
	daysOfWeek: Array<string>;
	monthsOfYear: Array<string>;
	firstDayOfWeek: number;
	daysInFirstWeek: number;
	timeCaption?: string;
	timeInterval?: number;
}

export class DateField extends React.Component<FormFieldProps, {}> {
	render() {
		const locale = createLocale(this.props.locale.dates);
		const date = numberToDate(this.props.value);
		const title = date ? format(date, 'PP', {locale}) : '';

		return (
			<DatePicker
				{...this.props.wrapper.injectInputProps(
					this.props.descriptor.name,
					this.props.descriptor.fieldType as FieldType,
					this.props.status
				)}
				name={this.props.descriptor.name}
				dateFormat={this.props.locale.dates.format}
				locale={locale}
				selected={date}
				onChange={value => this.props.handleFieldChange(dateToNumber(value))}
				required={this.props.status === 'mandatory'}
				readOnly={this.props.status === 'visible'}
				title={title}
			/>
		);
	}
}
