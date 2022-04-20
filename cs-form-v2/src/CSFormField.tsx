import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { CSFormFieldCommonProps, CSFormFieldProps, CSFormStandardFields } from './types/cs-form-field-types';
import CSFormCheckboxField from './form-fields/CSFormCheckboxField';
import CSFormCustomField from './form-fields/CSFormCustomField';
import CSFormCustomModalField from './form-fields/CSFormCustomModalField';
import CSFormCustomSelectField from './form-fields/CSFormCustomSelectField';
import CSFormDateField from './form-fields/CSFormDateField';
import CSFormDateTimeField from './form-fields/CSFormDateTimeField';
import CSFormLookupField from './form-fields/CSFormLookupField';
import CSFormNumberField from './form-fields/CSFormNumberField';
import CSFormRadioField from './form-fields/CSFormRadioField';
import CSFormTextField from './form-fields/CSFormTextField';
import CSFormTextareaField from './form-fields/CSFormTextareaField';
import CSFormToggleField from './form-fields/CSFormToggleField';
import { useCSForm } from './CSFormContext';

const CSFormField = ({
	hidden,
	grow,
	showInNewLine,
	...rest
}: CSFormFieldProps) => {
	const {
		columnNumber,
		locale,
		mode,
	} = useCSForm();

	const formFieldWidth = 100 / columnNumber;
	const formFieldGrow = grow * formFieldWidth;

	const fieldReadOnly = { readOnly: mode === 'read-only' || (rest as CSFormFieldCommonProps).readOnly };
	const fieldValue = { value: (rest as CSFormStandardFields).value ?? '' };

	const renderFormField = () => {
		switch (rest.type) {
		case 'CUSTOM':
			return <CSFormCustomField {...rest} />;
		case 'CUSTOM-MODAL':
			return <CSFormCustomModalField {...rest} />;
		case 'CUSTOM-SELECT':
			return <CSFormCustomSelectField {...rest} {...fieldReadOnly} />;
		case 'CHECKBOX':
			return <CSFormCheckboxField {...rest} {...fieldReadOnly} />;
		case 'DATE':
			return <CSFormDateField locale={locale?.dateLocale} {...rest} {...fieldReadOnly} />;
		case 'DATETIME':
			return <CSFormDateTimeField locale={locale?.dateLocale} {...rest} {...fieldReadOnly} />;
		case 'LOOKUP':
			return <CSFormLookupField {...rest} {...fieldReadOnly} />;
		case 'NUMBER':
			return <CSFormNumberField locale={rest.useLocale && locale?.numberLocale} {...rest} {...fieldReadOnly} {...fieldValue} />;
		case 'RADIO':
			return <CSFormRadioField {...rest} />;
		case 'TEXTAREA':
			return <CSFormTextareaField {...rest} {...fieldReadOnly} {...fieldValue} />;
		case 'TOGGLE':
			return <CSFormToggleField {...rest} {...fieldReadOnly} />;
		case 'BUFFER':
			return null;
		case 'TEXT':
		default:
			return <CSFormTextField {...rest} {...fieldReadOnly} {...fieldValue} />;
		}
	};

	const formFieldStyle = {
		'--csf-field-width': grow ? `${formFieldGrow}%` : `${formFieldWidth}%`,
	};

	const formFieldClasses = classNames(
		'csf-field-wrapper',
		{
			'csf-field-wrapper-custom': rest.type === 'CUSTOM' || rest.type === 'CUSTOM-MODAL',
			'csf-field-wrapper-buffer': rest.type === 'BUFFER',
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
			{!hidden && (
				showInNewLine
					? (
						<div className="csf-field-new-line">
							{formFieldWrapper}
						</div>
					)
					: formFieldWrapper
			)}
		</>
	);
};

export default CSFormField;
