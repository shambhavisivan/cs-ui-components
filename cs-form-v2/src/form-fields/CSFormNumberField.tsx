import React from 'react';
import { CSInputNumber } from '@cloudsense/cs-ui-components';
import { CSFormNumberFieldProps } from '../types/cs-form-field-types';

const CSFormNumberField = ({
	fieldType,
	styleClass,
	...props
}: CSFormNumberFieldProps) => (
	<CSInputNumber
		className={styleClass}
		{...props}
	/>
);

export default CSFormNumberField;
