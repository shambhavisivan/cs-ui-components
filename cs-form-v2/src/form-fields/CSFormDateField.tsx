import React from 'react';
import { CSDatepicker } from '@cloudsense/cs-ui-components';
import { CSFormDateFieldProps } from '../types/cs-form-field-types';

const CSFormDateField = ({
	fieldType,
	name,
	onBlur,
	onChange,
	styleClass,
	...props
}: CSFormDateFieldProps) => (
	<CSDatepicker
		className={styleClass}
		onChange={(date: Date) => onChange(name, date)}
		onBlur={(date: Date) => onBlur(name, date)}
		{...props}
	/>
);

export default CSFormDateField;
