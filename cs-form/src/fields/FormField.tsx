import React, { ReactElement } from 'react';
import { FieldDescriptor } from '../types/FormDescriptor';
import { SimpleField } from './SimpleField';
import { DateField } from './DateField';
import { BooleanField } from './BooleanField';
import { ComponentStatus } from '../types/ComponentStatus';
import { SelectOption } from '../types/SelectOption';
import { ElementWrapper, LocaleSettings } from '../CSForm';
import { SelectFieldContainer } from './SelectFieldContainer';

export interface FormFieldProps {
	value: any;
	status: ComponentStatus;
	descriptor: FieldDescriptor;
	locale: LocaleSettings;
	wrapper: ElementWrapper;
	errorMessages?: Array<string>;
	handleFieldChange(newValue: any): void;
	fetchPossibleValues(): Promise<Array<SelectOption>>;
}

/**
 * Wrapper and dispatcher for every possible type of form field.
 */
export class FormField extends React.Component<FormFieldProps, {}> {

	renderField() {
		switch (this.props.descriptor.fieldType) {
			case 'REFERENCE': return <SelectFieldContainer {...this.props} />;
			case 'PICKLIST': return <SelectFieldContainer {...this.props} />;
			case 'DATE': return <DateField {...this.props} />;
			case 'BOOLEAN': return <BooleanField {...this.props} />;
			default: return <SimpleField {...this.props} />;
		}
	}

	renderErrors(): ReactElement|null {
		if (this.props.errorMessages && this.props.errorMessages.length > 0) {
			return <>
				{this.props.errorMessages.map((error, idx) =>
					<React.Fragment key={`${this.props.descriptor.name}-error${idx}`}>{error}</React.Fragment>
				)}
			</>;
		}

		return null;
	}

	render() {
		if (this.props.status !== 'hidden') {
			return this.props.wrapper.wrapField(
				this.props.descriptor.name,
				this.props.status,
				<>{this.props.descriptor.label}</>,
				<>{this.renderField()}</>,
				this.renderErrors()
			);
		} else {
			return null;
		}
	}
}
