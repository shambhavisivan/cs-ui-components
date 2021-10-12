import React, { CSSProperties } from 'react';
import { CSFormFieldProps } from './types/cs-form-field-types';
import CSFormCheckboxField from './form-fields/CSFormCheckboxField';
import CSFormDateField from './form-fields/CSFormDateField';
import CSFormDateTimeField from './form-fields/CSFormDateTimeField';
import CSFormLookupField from './form-fields/CSFormLookupField';
import CSFormNumberField from './form-fields/CSFormNumberField';
import CSFormSelectField from './form-fields/CSFormSelectField';
import CSFormTextField from './form-fields/CSFormTextField';
import { useCSForm } from './CSFormContext';

const CSFormField = ({
	grow,
	showInNewLine,
	readOnly,
	...rest
}: CSFormFieldProps) => {
	const { columnNumber, mode } = useCSForm();

	const formFieldWidth = 100 / columnNumber;
	const formFieldGrow = grow * formFieldWidth;

	const fieldSettings = {
		readOnly: mode === 'read-only' ? true : readOnly,
	};

	const renderFormField = () => {
		switch (rest.fieldType) {
		case 'CHECKBOX':
			return <CSFormCheckboxField {...fieldSettings} {...rest} />;
		case 'DATE':
			return <CSFormDateField {...fieldSettings} {...rest} />;
		case 'DATETIME':
			return <CSFormDateTimeField {...fieldSettings} {...rest} />;
		case 'LOOKUP':
			return <CSFormLookupField {...fieldSettings} {...rest} />;
		case 'NUMBER':
			return <CSFormNumberField {...fieldSettings} {...rest} />;
		case 'SELECT':
			return <CSFormSelectField {...fieldSettings} {...rest} />;
		case 'TEXT':
		default:
			return <CSFormTextField {...fieldSettings} {...rest} />;
		}
	};

	const formFieldStyle = {
		'--cs-form-field-width': grow ? `${formFieldGrow}%` : `${formFieldWidth}%`,
	};

	const formFieldWrapper = (
		<div
			className="cs-form-field-wrapper"
			style={formFieldStyle as CSSProperties}
		>
			{renderFormField()}
		</div>
	);

	return (
		<>
			{showInNewLine
				? (
					<div className="cs-form-field-new-line">
						{formFieldWrapper}
					</div>
				)
				: formFieldWrapper}
		</>
	);
};

export default CSFormField;
