import React from 'react';
import { CSDatepicker } from '@cloudsense/cs-ui-components';
import { CSFormDateFieldProps } from '../types/cs-form-field-types';

const CSFormDateField = ({
	type,
	onBlur,
	onChange,
	onFocus,
	styleClass,
	value,
	...props
}: CSFormDateFieldProps) => (
	<CSDatepicker
		className={styleClass}
		onChange={(date: Date) => onChange(date)}
		onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(e.target.value)}
		onFocus={(e: React.FocusEvent<HTMLInputElement>) => onFocus(e.target.value)}
		selected={value}
		{...props}
	/>
);

export default CSFormDateField;
