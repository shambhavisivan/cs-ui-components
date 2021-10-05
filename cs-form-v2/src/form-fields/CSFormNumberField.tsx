import React from 'react';
import { CSInputNumber } from '@cloudsense/cs-ui-components';
import { CSFormNumberFieldProps } from '../types/cs-form-field-types';

const CSFormNumberField = ({
	fieldType,
	onBlur,
	onChange,
	styleClass,
	...props
}: CSFormNumberFieldProps) => (
	<CSInputNumber
		className={styleClass}
		onChange={(value: any) => onChange(value)}
		onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(e.target.value)}
		{...props}
	/>
);

export default CSFormNumberField;
