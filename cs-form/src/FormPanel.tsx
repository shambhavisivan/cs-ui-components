import React from 'react';
import { FormField } from './fields/FormField';
import { FormSettings, ElementWrapper, ReferenceOption } from '.';
import { FormPanelDescriptor, FieldDescriptor } from './types/FormDescriptor';
import { calculateComponentStatus } from './utils/ComponentStatusUtil';
import { SelectOption } from './types/SelectOption';
import { LocaleSettings } from './CSForm';

export interface FormPanelProps {
	descriptor: FormPanelDescriptor;
	data: Record<string, any>;
	errors: Record<string, Array<string>>;
	locale: LocaleSettings;
	formSettings: FormSettings;
	wrapper: ElementWrapper;
	fetchPossibleValues(field: FieldDescriptor): Promise<Array<SelectOption>>;
	fetchReferenceOptions?(
		field: FieldDescriptor,
		searchTerm: string
	): Promise<Array<ReferenceOption>>;
	handleFieldChange(name: string, newValue: any): void;
}

export const FormPanel: React.FC<FormPanelProps> = props => {
	function createFormField(field: FieldDescriptor) {
		// for some reason type guards aren't working here
		const fetch: any =
			typeof field.fixedPicklistOptions !== 'undefined'
				? () => Promise.resolve(field.fixedPicklistOptions)
				: () => props.fetchPossibleValues(field);

		return (
			<FormField
				locale={props.locale}
				errorMessages={props.errors[field.name]}
				status={calculateComponentStatus(field, props.formSettings, props.data)}
				handleFieldChange={value => props.handleFieldChange(field.name, value)}
				fetchPossibleValues={fetch}
				fetchReferenceOptions={props.fetchReferenceOptions}
				key={field.name}
				descriptor={field}
				wrapper={props.wrapper}
				value={props.data[field.name]}
			/>
		);
	}

	return props.wrapper.wrapPanel(
		props.descriptor.title,
		<>{props.descriptor.title}</>,
		<>{props.descriptor.fields.map(createFormField)}</>
	);
};
