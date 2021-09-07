import React from 'react';
import { CSDatepicker } from '@cloudsense/cs-ui-components';
import { CSFormDateFieldProps } from '../types/cs-form-field-types';

const CSFormDateField = ({
	fieldType,
	styleClass,
	...props
}: CSFormDateFieldProps) => (
	<CSDatepicker
		className={styleClass}
		onChange={() => { }}
		{...props}
	/>
);

export default CSFormDateField;
