import React from 'react';
import { CSDateTimePicker } from '@cloudsense/cs-ui-components';
import { CSFormDateTimeFieldProps } from '../types/cs-form-field-types';

const CSFormDateTimeField = ({
	fieldType,
	onBlur,
	onChange,
	name,
	styleClass,
	...props
}: CSFormDateTimeFieldProps) => (
	<CSDateTimePicker
		className={styleClass}
		onChange={(date: Date) => onChange(name, date)}
		onBlur={(date: Date) => onBlur(name, date)}
		{...props}
	/>
);

export default CSFormDateTimeField;
