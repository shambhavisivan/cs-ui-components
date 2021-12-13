import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { CSFormFieldProps } from './types/cs-form-field-types';
import CSFormCheckboxField from './form-fields/CSFormCheckboxField';
import CSFormCustomField from './form-fields/CSFormCustomField';
import CSFormCustomModalField from './form-fields/CSFormCustomModalField';
import CSFormCustomSelectField from './form-fields/CSFormCustomSelectField';
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

	const fieldSettings = rest.fieldType !== 'CUSTOM-MODAL' ? {
		readOnly: mode === 'read-only' || rest.readOnly,
	} : undefined;
	const renderFormField = () => {
		switch (rest.fieldType) {
		case 'CUSTOM':
			return <CSFormCustomField {...rest} />;
		case 'CUSTOM-MODAL':
			return <CSFormCustomModalField {...rest} />;
		case 'CUSTOM-SELECT':
			return <CSFormCustomSelectField {...rest} {...fieldSettings} />;
		case 'CHECKBOX':
			return <CSFormCheckboxField {...rest} {...fieldSettings} />;
		case 'DATE':
			return <CSFormDateField locale={locale?.dateLocale} {...rest} {...fieldSettings} />;
		case 'DATETIME':
			return <CSFormDateTimeField locale={locale?.dateLocale} {...rest} {...fieldSettings} />;
		case 'LOOKUP':
			return <CSFormLookupField {...rest} {...fieldSettings} />;
		case 'NUMBER':
			return <CSFormNumberField locale={rest.useLocale && locale?.numberLocale} {...rest} {...fieldSettings} />;
		case 'RADIO':
			return <CSFormRadioField {...rest} />;
		case 'SELECT':
			return <CSFormSelectField {...rest} {...fieldSettings} />;
		case 'TEXTAREA':
			return <CSFormTextareaField {...rest} {...fieldSettings} />;
		case 'TOGGLE':
			return <CSFormToggleField {...rest} {...fieldSettings} />;
		case 'TEXT':
		default:
			return <CSFormTextField {...rest} {...fieldSettings} />;
		}
	};

	const formFieldStyle = {
		'--csf-field-width': grow ? `${formFieldGrow}%` : `${formFieldWidth}%`,
	};

	const formFieldClasses = classNames(
		'csf-field-wrapper',
		{
			'csf-field-wrapper-custom': rest.fieldType === 'CUSTOM' || rest.fieldType === 'CUSTOM-MODAL',
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
