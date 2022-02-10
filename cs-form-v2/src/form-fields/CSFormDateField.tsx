import React from 'react';
import { CSDatepicker } from '@cloudsense/cs-ui-components';
import { CSFormDateFieldProps } from '../types/cs-form-field-types';

const CSFormDateField = ({
	fieldType,
	onBlur,
	onChange,
	styleClass,
	value,
	...props
}: CSFormDateFieldProps) => (
	<CSDatepicker
		className={styleClass}
		onChange={(date: Date) => onChange(date)}
		onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(e.target.value)}
		selected={value}
		{...props}
	/>
);

export default CSFormDateField;
