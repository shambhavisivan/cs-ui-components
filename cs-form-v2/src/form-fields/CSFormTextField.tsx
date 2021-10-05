import React from 'react';
import { CSInputText } from '@cloudsense/cs-ui-components';
import { CSFormTextFieldProps } from '../types/cs-form-field-types';

const CSFormTextField = ({
	fieldType,
	name,
	onBlur,
	onChange,
	styleClass,
	...props
}: CSFormTextFieldProps) => (
	<CSInputText
		className={styleClass}
		onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(e.target.value)}
		onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
		{...props}
	/>
);

export default CSFormTextField;
