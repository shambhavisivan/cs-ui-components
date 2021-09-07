import React from 'react';
import { CSInputText } from '@cloudsense/cs-ui-components';
import { CSFormTextFieldProps } from '../types/cs-form-field-types';

const CSFormTextField = ({
	fieldType,
	styleClass,
	...props
}: CSFormTextFieldProps) => (
	<CSInputText
		className={styleClass}
		{...props}
	/>
);

export default CSFormTextField;
