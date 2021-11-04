import React from 'react';
import { CSDateTimePicker } from '@cloudsense/cs-ui-components';
import { CSFormDateTimeFieldProps } from '../types/cs-form-field-types';

const CSFormDateTimeField = ({
	fieldType,
	onBlur,
	onChange,
	styleClass,
	...props
}: CSFormDateTimeFieldProps) => (
	<CSDateTimePicker
		className={styleClass}
		onChange={(date: Date) => onChange(date)}
		onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(e.target.value)}
		{...props}
	/>
);

export default CSFormDateTimeField;
