import React from 'react';
import { CSInputNumber } from '@cloudsense/cs-ui-components';
import { CSFormNumberFieldProps } from '../types/cs-form-field-types';

const CSFormNumberField = ({
	fieldType,
	name,
	onBlur,
	onChange,
	styleClass,
	...props
}: CSFormNumberFieldProps) => (
	<CSInputNumber
		className={styleClass}
		onChange={(value: any) => onChange(name, value)}
		onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(name, e.target.value)}
		{...props}
	/>
);

export default CSFormNumberField;
