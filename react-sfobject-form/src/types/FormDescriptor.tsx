import { ComponentStatusConfiguration } from './ComponentStatus';
import { SelectOption } from './SelectOption';

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
	validation?: Array<ValidationRule>;
	/**
	 * Static list of options for `'PICKLIST'` type fields. In most cases their
	 * use is discouraged, the dynamic mechanism of `SFObjectForm.FormProps.fetchPossibleValues()`
	 * is preferred.
	 */
	fixedPicklistOptions?: Array<SelectOption>;
}

/**
 * Regex validation rule. If the value of the field does **not** match `regex`, `errorMessage` will
 * be displayed. The placeholder ${name} will be replaced with the field label.
 */
export interface ValidationRule {

	regex: string;
	errorMessage: string;
}

export type FieldType = 'STRING' | 'BOOLEAN' | 'REFERENCE' | 'NUMBER' | 'PICKLIST' | 'DATE' | 'ID';
