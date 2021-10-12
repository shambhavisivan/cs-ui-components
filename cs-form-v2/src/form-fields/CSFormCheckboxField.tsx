import React from 'react';
import { CSCheckbox } from '@cloudsense/cs-ui-components';
import { CSFormCheckboxFieldProps } from '../types/cs-form-field-types';

const CSFormCheckboxField = ({
	fieldType,
	onBlur,
	onChange,
	styleClass,
	value,
	...props
}: CSFormCheckboxFieldProps) => (
	<CSCheckbox
		className={styleClass}
		onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
		onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(e.target.checked)}
		checked={value}
		{...props}
	/>
);

export default CSFormCheckboxField;
