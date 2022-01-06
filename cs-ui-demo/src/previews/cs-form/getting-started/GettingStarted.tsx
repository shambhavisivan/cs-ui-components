import React from 'react';
import * as CSD from '../../../demo-components';

const differences = [
	'Combination of form definition and data',
	'Grouping fileds into sections',
	'Defining fields width and position in the layout',
	'`formSettings` prop deprecation',
	'`Save` button support deprecation'
];

const transition = [
	'in form definition each form field attribute has to be defined in it\'s corresponding field type object (in old CSForm `fetchPossibleValues` and `fetchReferenceOptions` are defined as part of CSForm component props)',
	'use `defineFormData()` method in order to combine actual data and form definition (old CSForms descriptor)',
	'define errors at separate levels - form errors are defined in new CSForm `formErrorMessage` prop, while section and field errors are defined through `data` prop in `errorMessage` object property',
	'to validate whole form use `validateForm()` method (this would replace old CSForms `Save` button)',
	'use CSForm `onFieldChange` prop as a substitute for old CSForm `update` prop',
	'use CSForm `onFieldBlur` prop as a substitute for old CSForm `onBlur` prop',
	'for defining custom error labels displayed in form validation use `errorLabels` prop'
];

const GettingStarted = () => (
	<CSD.Page title="Getting started" routePrefix="cs-form">
		<CSD.Section>
			<CSD.Heading level={2}>About</CSD.Heading>
			<CSD.Text>
				CSForm library allows generation of various form fields which are used to collect user input and display data.
				Whole library is build with `cs-ui-components`.
			</CSD.Text>
			<CSD.Text>
				CSForm fields are grouped into two types: standard from fields and custom form fields.
				Standard from fields represent basic form fields used for collecting input or displaying data ( input fields, textarea, picklist etc.).
				Custom form fields allow user to display any custom content as an inline form field or within custom modal.
			</CSD.Text>
			<CSD.Text>
				CSForm is completely stateless, it doesn't maintain any data,
				which provides better flexibiliy for various use cases across our products.
				It displays error messages based on user interaction which can be a part of form field, form section or whole form component.
				It also performs standard validations for some form field attributes.
			</CSD.Text>
			<CSD.Text>Detailed explanation of each part of this library is explained in this documentation.</CSD.Text>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>Differences</CSD.Heading>
			<CSD.Text>Some of the key differences between the new CSForm (`cs-form-v2`) and the old CSForm (`cs-form`) are listed below:</CSD.Text>
			<CSD.List items={differences}/>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>Transition</CSD.Heading>
			<CSD.Text>To ensure smooth transition from old CSForm to the new CSForm some key points need to be taken into consideration:</CSD.Text>
			<CSD.List items={transition}/>
		</CSD.Section>
	</CSD.Page>
);

export default GettingStarted;
