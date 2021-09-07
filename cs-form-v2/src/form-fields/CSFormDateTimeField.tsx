import React from 'react';
import { CSDateTimePicker } from '@cloudsense/cs-ui-components';
import { CSFormDateTimeFieldProps } from '../types/cs-form-field-types';

const CSFormDateTimeField = ({
	fieldType,
	styleClass,
	...props
}: CSFormDateTimeFieldProps) => (
	<CSDateTimePicker
		className={styleClass}
		onChange={() => { }}
		{...props}
	/>
);

export default CSFormDateTimeField;
