import React from 'react';
import { CSCheckbox } from '@cloudsense/cs-ui-components';
import { CSFormCheckboxFieldProps } from '../types/cs-form-field-types';

const CSFormCheckboxField = ({
	fieldType,
	styleClass,
	...props
}: CSFormCheckboxFieldProps) => (
	<CSCheckbox
		className={styleClass}
		{...props}
	/>
);

export default CSFormCheckboxField;
