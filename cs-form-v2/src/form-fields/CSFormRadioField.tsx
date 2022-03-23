import React from 'react';
import { CSRadio } from '@cloudsense/cs-ui-components';
import { CSFormRadioFieldProps } from '../types/cs-form-field-types';

const CSFormRadioField = ({
	fieldType,
	onBlur,
	onChange,
	styleClass,
	value,
	...props
}: CSFormRadioFieldProps) => (
	<CSRadio
		className={styleClass}
		selectedKey={value}
		onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(e.target.value)}
		onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
		{...props}
	/>
);

export default CSFormRadioField;
