import React from 'react';
import { CSInputText } from '@cloudsense/cs-ui-components';
import { CSFormTextFieldProps } from '../types/cs-form-field-types';

const CSFormTextField = ({
	fieldType,
	onChange,
	styleClass,
	...props
}: CSFormTextFieldProps) => (
	<CSInputText
		className={styleClass}
		onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
		{...props}
	/>
);

export default CSFormTextField;
