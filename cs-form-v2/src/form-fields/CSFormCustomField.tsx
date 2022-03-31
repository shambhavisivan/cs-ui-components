import React from 'react';
import { CSFormCustomFieldProps } from '../types/cs-form-field-types';

const CSFormCustomField = ({
	type,
	render,
	...rest
}: CSFormCustomFieldProps) => (
	<>{React.cloneElement(render, rest)}</>
);

export default CSFormCustomField;
