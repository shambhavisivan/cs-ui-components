import React from 'react';
import { CSCheckbox } from '@cloudsense/cs-ui-components';
import { CSFormCheckboxFieldProps } from '../types/cs-form-field-types';

const CSFormCheckboxField = ({
	fieldType,
	onChange,
	styleClass,
	...props
}: CSFormCheckboxFieldProps) => (
	<CSCheckbox
		className={styleClass}
		onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
		{...props}
	/>
);

export default CSFormCheckboxField;
