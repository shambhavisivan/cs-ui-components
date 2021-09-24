import React from 'react';
import { CSToggle } from '@cloudsense/cs-ui-components';
import { CSFormToggleFieldProps } from '../types/cs-form-field-types';

const CSFormTextField = ({
	fieldType,
	name,
	onBlur,
	onChange,
	styleClass,
	...props
}: CSFormToggleFieldProps) => (
	<CSToggle
		className={styleClass}
		onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlur(name, e.target.checked)}
		onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(name, e.target.checked)}
		{...props}
	/>
);

export default CSFormTextField;
