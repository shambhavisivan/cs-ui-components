import React from 'react';
import { CSFieldErrorMsg, CSLabel } from '@cloudsense/cs-ui-components';
import { CSFormCustomFieldProps } from '../types/cs-form-field-types';

const CSFormCustomField = ({
	error,
	errorMessage,
	label,
	render,
	required,
	type,
	...rest
}: CSFormCustomFieldProps) => (
	<div className="csf-custom-field">
		{label && <CSLabel label={label} required={required} />}
		<div className="csf-custom-field-content">{React.cloneElement(render, rest)}</div>
		{error && errorMessage && <CSFieldErrorMsg message={errorMessage} />}
	</div>
);

export default CSFormCustomField;
