import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { CSFormFieldProps } from './types/cs-form-field-types';
import CSFormCheckboxField from './form-fields/CSFormCheckboxField';
import CSFormDateField from './form-fields/CSFormDateField';
import CSFormDateTimeField from './form-fields/CSFormDateTimeField';
import CSFormLookupField from './form-fields/CSFormLookupField';
import CSFormNumberField from './form-fields/CSFormNumberField';
import CSFormRadioField from './form-fields/CSFormRadioField';
import CSFormSelectField from './form-fields/CSFormSelectField';
import CSFormTextField from './form-fields/CSFormTextField';
import CSFormTextareaField from './form-fields/CSFormTextareaField';
import CSFormToggleField from './form-fields/CSFormToggleField';
import { useCSForm } from './CSFormContext';
import CSFormCustomField from './form-fields/CSFormCustomField';

const CSFormField = ({
	grow,
	showInNewLine,
	readOnly,
	...rest
}: CSFormFieldProps) => {
	const {
		columnNumber,
		locale,
		mode,
	} = useCSForm();

	const formFieldWidth = 100 / columnNumber;
	const formFieldGrow = grow * formFieldWidth;

	const fieldSettings = {
		readOnly: mode === 'read-only' ? true : readOnly,
	};
	const renderFormField = () => {
		switch (rest.fieldType) {
		case 'CUSTOM':
			return <CSFormCustomField {...rest} />;
		case 'CHECKBOX':
			return <CSFormCheckboxField {...fieldSettings} {...rest} />;
		case 'DATE':
			return <CSFormDateField locale={locale?.dateLocale} {...fieldSettings} {...rest} />;
		case 'DATETIME':
			return <CSFormDateTimeField locale={locale?.dateLocale} {...fieldSettings} {...rest} />;
		case 'LOOKUP':
			return <CSFormLookupField {...fieldSettings} {...rest} />;
		case 'NUMBER':
			return <CSFormNumberField locale={!rest.useLocale ? undefined : locale?.numberLocale} {...fieldSettings} {...rest} />;
		case 'RADIO':
			return <CSFormRadioField {...rest} />;
		case 'SELECT':
			return <CSFormSelectField {...fieldSettings} {...rest} />;
		case 'TEXTAREA':
			return <CSFormTextareaField {...fieldSettings} {...rest} />;
		case 'TOGGLE':
			return <CSFormToggleField {...fieldSettings} {...rest} />;
		case 'TEXT':
		default:
			return <CSFormTextField {...fieldSettings} {...rest} />;
		}
	};

	const formFieldStyle = {
		'--csf-field-width': grow ? `${formFieldGrow}%` : `${formFieldWidth}%`,
	};

	const formFieldClasses = classNames(
		'csf-field-wrapper',
		{
			'csf-field-wrapper-custom': rest.fieldType === 'CUSTOM',
		},
	);

	const formFieldWrapper = (
		<div
			className={formFieldClasses}
			style={formFieldStyle as CSSProperties}
		>
			{renderFormField()}
		</div>
	);

	return (
		<>
			{showInNewLine
				? (
					<div className="csf-field-new-line">
						{formFieldWrapper}
					</div>
				)
				: formFieldWrapper}
		</>
	);
};

export default CSFormField;
