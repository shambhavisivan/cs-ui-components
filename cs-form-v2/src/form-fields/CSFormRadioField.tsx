import React from 'react';
import { CSRadio } from '@cloudsense/cs-ui-components';
import { CSFormRadioFieldProps } from '../types/cs-form-field-types';

const CSFormRadioField = ({
	type,
	onBlur,
	onChange,
	onFocus,
	styleClass,
	value,
	...props
}: CSFormRadioFieldProps) => (
	<CSRadio
		className={styleClass}
		selectedKey={value}
		onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(e.target.value)}
		onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
		onFocus={(e: React.FocusEvent<HTMLInputElement>) => onFocus(e.target.value)}
		{...props}
	/>
);

export default CSFormRadioField;
