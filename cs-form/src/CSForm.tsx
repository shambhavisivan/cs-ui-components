import React, { ReactElement } from 'react';
import { FormDescriptor, FormPanelDescriptor, FieldDescriptor, FieldType } from './types/FormDescriptor';
import { FormPanel } from './FormPanel';
import { Button } from './Button';
import { cloneAndReplaceField } from './utils/Util';
import { SelectOption } from './types/SelectOption';
import { Validator } from './utils/Validator';
import { ComponentStatus } from './types/ComponentStatus';
import { applyDefaults } from './utils/FormDescriptorUtils';
import { ErrorPanel } from './ErrorPanel';
import { NumberFieldLocale } from './fields/NumberField';
import { DateFieldLocale } from './fields/DateField';

export interface LocaleSettings {
	dates: DateFieldLocale;
	number?: NumberFieldLocale;
}

/**
 * Arbitrary data that is not part of the form object but is used in visibile/enabled/mandatory calculations.
 * For example user profile or external visibility flags coming from JSON data. Can contain functions too.
 */
export type FormSettings = any;

/**
 * Functions to wrap the raw form components to support different layouts/formatting.
 * The basic structure of the form looks like this:
 *  - form
 *  	- panel
 * 			- title
 * 			- field
 * 				- label
 * 				- input
 * 				- error message
 * 		- save button
 */
export interface ElementWrapper {
	/**
	 * Wrap the entire form, combining the panels and the save button.
	 * @param errorPanel react element encompassing all form level errors.
	 * @param contents All the panels of the form.
	 * @param saveButton The save button of the form.
	 */
	wrapForm(errorPanel: ReactElement, contents: ReactElement, saveButton: ReactElement): ReactElement;
	/**
	 * Wrap a single panel of the form, combining the title and the fields.
	 * @param key React key to be set on wrapper component to help React with change detection
	 * @param title Title of the panel
	 * @param contents All the field components of the panel
	 */
	wrapPanel(key: string, title: ReactElement, contents: ReactElement): ReactElement;
	/**
	 * Wrap a single input field of any type
	 * @param name The internal name of the field
	 * @param status Current status of the field (note: "hidden" will never occur here as hidden fields aren't displayed at all)
	 * @param label The label component of the field
	 * @param input The input component of the field
	 * @param errorMessages The error message component of the field, is null if there are no errors
	 */
	wrapField(name: string, status: ComponentStatus, label: ReactElement, input: ReactElement, errorMessages: ReactElement|null): ReactElement;
	/**
	 * Create additional properties to be set directly on the input component (i.e. the actual <input>/<select>/etc. HTML tag)
	 * @param name Name of input field
	 * @param type Type of input field
	 * @param status Current status of the field (note: "hidden" will never occur here as hidden fields aren't displayed at all)
	 * @returns An object containing props that are to be added to the input component, e.g. { className: 'my-very-special-input'} will
	 * produce <input class="my-very-special-input"/>. It **isn't** possible to override any property already calculated by the form
	 * logic.
	 */
	injectInputProps(name: string, type: FieldType, status: ComponentStatus): Record<string, any>;
	/**
	 * Like injectInputProps(), except for the save button.
	 */
	injectSaveButtonProps(): Record<string, any>;
	/**
	 * Wrap a single panel of the form encompassing any form level errors.
	 * @param key React key to be set on wrapper component to help React with change detection
	 * @param contents All the field components of the panel
	 */
	wrapErrorPanel(key: string, contents: ReactElement): ReactElement;
}

/**
 * Labels displayed by the form.
 */
export interface FormLabels {
	/**
	 * Used when a mandatory field is empty.
	 * It is possible to use the ${name} placeholder in this string, which will be replaced with the label of the field.
	 */
	validation_message_required: string;
	/**
	 * Used when a 'NUMBER' type field contains something other than a number,
	 * It is possible to use the ${name} placeholder in this string, which will be replaced with the label of the field.
	 */
	validation_message_number_format: string;
	/**
	 * Used when a 'STRING' type field exceeds maximum length,
	 * It is possible to use the ${name} placeholder in this string, which will be replaced with the label of the field.
	 */
	validation_message_exceeds_length: string;
	/**
	 * The caption of the save button.
	 */
	button_save: string;
}

/**
 * Wrapper for errors.
 */
export interface ValidationErrors {
	/**
	 * Errors that are not specifically linked to a form field.
	 */
	formErrors: Array<string>;
	/**
	 * Errors specific to form fields, a record of field name vs related errors.
	 */
	fieldErrors: Record<string, Array<string>>;
}

/**
 * Properties required by the <CSForm> component.
 */
export interface FormProps {
	descriptor: FormDescriptor;
	/**
	 * The form object that is being edited. Has to be flat.
	 */
	data: Record<string, any>;
	/**
	 * Validation errors that have been calculated outside the form, the key is
	 * the field name, the value is the error message that will be displayed as-is.
	 */
	externalValidationErrors?: ValidationErrors;
	labels: FormLabels;
	locale: LocaleSettings;
	formSettings: FormSettings;
	wrapper: ElementWrapper;
	/**
	 * Called whenever the form object changes.
	 * @param data New form object.
	 */
	update(data: Record<string, any>): void;
	/**
	 * Called when the save button is pressed.
	 * @returns The form object after the save operation. (For example some fields might have been recalculated on save.)
	 */
	save(): Promise<Record<string, any>>;
	/**
	 * Provide selection options for 'REFERENCE or 'PICKLIST' type fields for which no fixed list of options have been
	 * specified in the form descriptor.
	 * @param field The field for which the options are required
	 * @returns The list of options, which will be displayed in the order provided.
	 */
	fetchPossibleValues(field: FieldDescriptor): Promise<Array<SelectOption>>;
}

export class CSForm extends React.Component<FormProps, {}> {

	private validator: Validator;
	constructor(props: FormProps) {
		super(props);
		this.handleFieldChange = this.handleFieldChange.bind(this);
		this.save = this.save.bind(this);
		this.createFormPanel = this.createFormPanel.bind(this);
		this.validator = new Validator(applyDefaults(props.descriptor), props.formSettings, props.labels);
	}

	handleFieldChange(name: string, newValue: any) {
		this.props.update(cloneAndReplaceField(this.props.data, name, newValue));
	}

	async save(): Promise<void> {
		const errors = this.validator.validate(this.props.data);
		if (Object.getOwnPropertyNames(errors).length === 0) {
			try {
				const newObject: Record<string, any> = await this.props.save();
				this.props.update(newObject);
			} catch (e) {
				// TODO: display error message when we've got a UI for it
				// tslint:disable-next-line: no-console
				console.error('Save failed', e);
				throw e;
			}
		} else {
			// tslint:disable-next-line: no-console
			console.warn('Object not saved, validation errors: ', errors);
		}
	}

	render() {
		return this.props.wrapper.wrapForm(
			<>
				<ErrorPanel
					wrapper={this.props.wrapper}
					errors={this.props.externalValidationErrors ? this.props.externalValidationErrors.formErrors : []}
				/>
			</>,
			<>{applyDefaults(this.props.descriptor).panels.map(this.createFormPanel)}</>,
			<>
				<Button
					enabled label={this.props.labels.button_save}
					clicked={this.save}
					additionalProps={this.props.wrapper.injectSaveButtonProps()}
				/>
			</>
		);
	}

	private createFormPanel(panel: FormPanelDescriptor) {
		return (<FormPanel
			errors={{ ...(this.getFieldErrors()), ...this.validator.validate(this.props.data) }}
			key={panel.title}
			descriptor={panel}
			data={this.props.data}
			handleFieldChange={this.handleFieldChange}
			fetchPossibleValues={this.props.fetchPossibleValues}
			wrapper={this.props.wrapper}
			formSettings={this.props.formSettings}
			locale={this.props.locale} />);
	}

	private getFieldErrors(): Record<string, Array<string>> {
		if (this.props.externalValidationErrors && this.props.externalValidationErrors.fieldErrors) {
			return this.props.externalValidationErrors.fieldErrors;
		}

		return {} as unknown as Record<string, Array<string>>;
	}
}
