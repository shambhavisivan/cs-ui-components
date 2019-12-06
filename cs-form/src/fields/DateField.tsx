import React from 'react';
import { FormFieldProps } from './FormField';

import 'react-datepicker/dist/react-datepicker.css';
import createDynamicLocale from '@cloudsense/react-datepicker-dynamiclocale';
import DatePicker from 'react-datepicker';
import { FieldType } from '..';

export interface DateFieldLocale {
	format: string;
	daysOfWeek: Array<string>;
	monthsOfYear: Array<string>;
	firstDayOfWeek: number;
	daysInFirstWeek: number;
}

export class DateField extends React.Component<FormFieldProps, {}> {

	private static dateToNumber(date: Date | null) {
		return date ? date.valueOf() : null;
	}

	private static numberToDate(input: number | null) {
		return input ? new Date(input) : null;
	}

	render() {
		return <DatePicker
			{...this.props.wrapper.injectInputProps(this.props.descriptor.name, this.props.descriptor.fieldType as FieldType, this.props.status)}
			name={this.props.descriptor.name}
			dateFormat={this.props.locale.dates.format}
			locale={this.createLocale()} // createLocale() had to be defined to return "any" because the type bindings for date picker are outdated and wrong
			selected={DateField.numberToDate(this.props.value)}
			onChange={value => this.props.handleFieldChange(DateField.dateToNumber(value))}
			required={this.props.status === 'mandatory'}
			readOnly={this.props.status === 'visible'} />;
	}

	private createLocale(): any {
		const dates = this.props.locale.dates;
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
