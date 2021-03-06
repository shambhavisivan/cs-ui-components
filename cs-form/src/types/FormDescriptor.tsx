import { ComponentStatusConfiguration } from './ComponentStatus';
import { SelectOption } from './SelectOption';
import { ReferenceOptionColumn } from './ReferenceOption';
import { CSCustomDataIconProps } from '@cloudsense/cs-ui-components';

export interface FormDescriptor {
	type: 'FORM';
	panels: Array<FormPanelDescriptor>;
}

export interface FormPanelDescriptor {
	title: string;
	fields: Array<FieldDescriptor>;
	/**
	 * Currently unused, not sure if we need it.
	 */
	isOpenByDefault: boolean;
}

export interface FieldDescriptor extends ComponentStatusConfiguration {
	/**
	 * Name of field, has to match field name in form object.
	 */
	name: string;
	/**
	 * Label of field, default value is equal to the value of `name`.
	 */
	label?: string;
	/**
	 * Type of field, default value is `'STRING'`.
	 */
	fieldType?: FieldType;
	/**
	 * Regex validation rules.
	 */
	validations?: Array<ValidationRule>;
	/**
	 * Static list of options for `'PICKLIST'` type fields. In most cases their
	 * use is discouraged, the dynamic mechanism of `CSForm.FormProps.fetchPossibleValues()`
	 * is preferred.
	 */
	fixedPicklistOptions?: Array<SelectOption>;
	/**
	 * Maximum length to be applied to field value, relevant for STRING fieldType.
	 */
	maxLength?: number;
	/**
	 * Scale to be applied to field value, relevant for NUMBER fieldType.
	 * Works in conjunction with FieldDescriptor.precision
	 */
	scale?: number;
	/**
	 * Precision to be applied to field value, relevant for NUMBER fieldType.
	 * Works in conjunction with FieldDescriptor.scale
	 */
	precision?: number;
	/**
	 * max value to be applied to field value, relevant for NUMBER fieldType.
	 */
	maxVal?: number;
	/**
	 * min value to be applied to field value, relevant for NUMBER fieldType.
	 */
	minVal?: number;
	/* Columns to be displayed in reference field options.When absent 'Name' column is displayed
	 */
	referenceOptionColumnDefs?: Array<ReferenceOptionColumn>;
	/**
	 * The time interval to be applied to time selection, relevant for DATETIME fieldType.
	 */
	timeInterval?: number;
	/**
	 * Renders inline icons or tooltips to form field
	 */
	icons?: Array<CSCustomDataIconProps>;
	/**
	 * Renders tooltip which displays provided help text
	 */
	helpText?: string;
}

/**
 * Regex validation rule. If the value of the field does **not** match `regex`, `errorMessage` will
 * be displayed. The placeholder ${name} will be replaced with the field label.
 */
export interface ValidationRule {
	regex: string;
	errorMessage: string;
}

export type FieldType =
	| 'STRING'
	| 'BOOLEAN'
	| 'REFERENCE'
	| 'NUMBER'
	| 'PICKLIST'
	| 'DATE'
	| 'DATETIME'
	| 'ID';
