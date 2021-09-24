import React from 'react';
import { CSCheckbox } from '@cloudsense/cs-ui-components';
import { CSFormCheckboxFieldProps } from '../types/cs-form-field-types';

const CSFormCheckboxField = ({
	fieldType,
	onBlur,
	onChange,
	name,
	styleClass,
	...props
}: CSFormCheckboxFieldProps) => (
	<CSCheckbox
		className={styleClass}
		onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(name, e.target.checked)}
		onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(name, e.target.checked)}
		{...props}
	/>
);

export default CSFormCheckboxField;
