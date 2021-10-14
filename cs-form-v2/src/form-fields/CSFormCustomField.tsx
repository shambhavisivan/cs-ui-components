import React from 'react';
import { CSFormCustomFieldProps } from '../types/cs-form-field-types';

const CSFormCustomField = ({
	fieldType,
	render,
	...rest
}: CSFormCustomFieldProps) => (
	<>{React.cloneElement(render, { ...rest })}</>
);

export default CSFormCustomField;
