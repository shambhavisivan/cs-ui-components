import React from 'react';
import { FieldDescriptor } from '../types/FormDescriptor';
import { SimpleField } from './SimpleField';
import { SelectField } from './SelectField';
import { DateField } from './DateField';
import { BooleanField } from './BooleanField';
import { ComponentStatus } from '../types/ComponentStatus';
import { SelectOption } from '../types/SelectOption';
import { ElementWrapper, LocaleSettings } from '../CSForm';

export interface FormFieldProps {
	value: any;
	status: ComponentStatus;
	descriptor: FieldDescriptor;
	locale: LocaleSettings;
	wrapper: ElementWrapper;
	errorMessage?: string;
	fetchPossibleValues(): Promise<Array<SelectOption>>;
	handleFieldChange(newValue: any): void;
}

/**
 * Wrapper and dispatcher for every possible type of form field.
 */
export class FormField extends React.Component<FormFieldProps, {}> {

	renderField() {
		switch (this.props.descriptor.fieldType) {
			case 'REFERENCE': return <SelectField {...this.props} />;
			case 'PICKLIST': return <SelectField {...this.props} />;
			case 'DATE': return <DateField {...this.props} />;
			case 'BOOLEAN': return <BooleanField {...this.props} />;
			default: return <SimpleField {...this.props} />;
		}
	}

	render() {
		if (this.props.status !== 'hidden') {
			return this.props.wrapper.wrapField(
				this.props.descriptor.name,
				this.props.status,
				<>{this.props.descriptor.label}</>,
				<>{this.renderField()}</>,
				typeof this.props.errorMessage !== 'undefined' ? <>{this.props.errorMessage}</> : undefined
			);
		} else {
			return null;
		}
	}
}
