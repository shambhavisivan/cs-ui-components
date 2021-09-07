import React from 'react';
import { CSFormFieldProps } from './types/cs-form-field-types';
import CSFormCheckboxField from './form-fields/CSFormCheckboxField';
import CSFormDateField from './form-fields/CSFormDateField';
import CSFormDateTimeField from './form-fields/CSFormDateTimeField';
import CSFormLookupField from './form-fields/CSFormLookupField';
import CSFormNumberField from './form-fields/CSFormNumberField';
import CSFormSelectField from './form-fields/CSFormSelectField';
import CSFormTextField from './form-fields/CSFormTextField';

const CSFormField = ({
	grow,
	showInNewLine,
	...rest
}: CSFormFieldProps) => {
	const renderFormField = () => {
		switch (rest.fieldType) {
		case 'CHECKBOX':
			return <CSFormCheckboxField {...rest} />;
		case 'DATE':
			return <CSFormDateField {...rest} />;
		case 'DATETIME':
			return <CSFormDateTimeField {...rest} />;
		case 'LOOKUP':
			return <CSFormLookupField {...rest} />;
		case 'NUMBER':
			return <CSFormNumberField {...rest} />;
		case 'SELECT':
			return <CSFormSelectField {...rest} />;
		case 'TEXT':
		default:
			return <CSFormTextField {...rest} />;
		}
	};

	return (
		<div className="cs-form-field-wrapper">
			{renderFormField()}
		</div>
	);
};

export default CSFormField;
