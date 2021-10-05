import React from 'react';
import { CSDatepicker } from '@cloudsense/cs-ui-components';
import { CSFormDateFieldProps } from '../types/cs-form-field-types';

const CSFormDateField = ({
	fieldType,
	onBlur,
	onChange,
	styleClass,
	...props
}: CSFormDateFieldProps) => (
	<CSDatepicker
		className={styleClass}
		onChange={(date: Date) => onChange(date)}
		onBlur={(date: Date) => onBlur(date)}
		{...props}
	/>
);

export default CSFormDateField;
