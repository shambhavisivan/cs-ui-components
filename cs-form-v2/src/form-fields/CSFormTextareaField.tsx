import React from 'react';
import { CSTextarea } from '@cloudsense/cs-ui-components';
import { CSFormTextareaFieldProps } from '../types/cs-form-field-types';

const CSFormTextareaField = ({
	fieldType,
	name,
	onBlur,
	onChange,
	styleClass,
	...props
}: CSFormTextareaFieldProps) => (
	<CSTextarea
		className={styleClass}
		onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => onBlur(e.target.value)}
		onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
		{...props}
	/>
);

export default CSFormTextareaField;
