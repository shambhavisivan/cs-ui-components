import React from 'react';
import { CSInputNumber } from '@cloudsense/cs-ui-components';
import { CSFormNumberFieldProps } from '../types/cs-form-field-types';

const CSFormNumberField = ({
	type,
	onBlur,
	onChange,
	onFocus,
	styleClass,
	useLocale,
	...props
}: CSFormNumberFieldProps) => (
	<CSInputNumber
		className={styleClass}
		onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
		onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(e.target.value)}
		onFocus={(e: React.FocusEvent<HTMLInputElement>) => onFocus(e.target.value)}
		{...props}
	/>
);

export default CSFormNumberField;
