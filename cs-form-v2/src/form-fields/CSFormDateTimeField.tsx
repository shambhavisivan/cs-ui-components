import React from 'react';
import { CSDateTimePicker } from '@cloudsense/cs-ui-components';
import { CSFormDateTimeFieldProps } from '../types/cs-form-field-types';

const CSFormDateTimeField = ({
	type,
	onBlur,
	onChange,
	onFocus,
	styleClass,
	value,
	...props
}: CSFormDateTimeFieldProps) => (
	<CSDateTimePicker
		className={styleClass}
		onChange={(date: Date) => onChange(date)}
		onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(e.target.value)}
		onFocus={(e: React.FocusEvent<HTMLInputElement>) => onFocus(e.target.value)}
		selected={value}
		{...props}
	/>
);

export default CSFormDateTimeField;
