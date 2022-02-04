import React from 'react';
import * as CSD from '../../demo-components';

const GettingStarted = () => (
	<CSD.Page title="Getting started" routePrefix="cs-form">
		<CSD.Heading>About</CSD.Heading>
		<CSD.Section>
			<CSD.Text>
				The CSForm library allows for generation of various form fields which are used to collect user input and display data.
				The entire library is built with the `cs-ui-components` library.
			</CSD.Text>
			<CSD.Text>
				CSForm is completely stateless. It doesn't maintain any data,
				which provides better flexibility for various use cases across our products.
				It displays error messages based on user interaction, which can be a part of the form field, form section or entire form component.
				It also performs out-of-the-box validations for some form field attributes.
			</CSD.Text>
			<CSD.Text>
				CSForm fields are grouped into two types: standard form fields and custom form fields.
				Standard form fields represent the basic form fields used for collecting input or displaying data (input fields, textarea, picklist etc.).
				Custom form fields allow the user to display any custom content as an inline form field or within a custom modal.
			</CSD.Text>
			<CSD.Text>In this documentation you will find detailed explainations for each part of this library.</CSD.Text>
		</CSD.Section>
		<CSD.Heading>Differences</CSD.Heading>
		<CSD.Section>
			<CSD.Text>Some of the key differences between the new CSForm (`cs-form-v2`) and the old CSForm (`cs-form`) are listed below:</CSD.Text>
			<CSD.List>
				<CSD.ListItem>Grouping fields into sections</CSD.ListItem>
				<CSD.ListItem>Defining field's width and position in the layout</CSD.ListItem>
				<CSD.ListItem>Form, section and field level error display</CSD.ListItem>
				<CSD.ListItem>`formSettings` prop deprecation</CSD.ListItem>
				<CSD.ListItem>`Save` button support deprecation</CSD.ListItem>
			</CSD.List>
		</CSD.Section>
		<CSD.Heading>Transition</CSD.Heading>
		<CSD.Section>
			<CSD.Text>To ensure a smooth transition from the old CSForm to the new CSForm, some key points need to be taken into consideration:</CSD.Text>
			<CSD.List>
				<CSD.ListItem>in the form definition, each form field attribute has to be defined in its corresponding field type object (in the old CSForm,
					`fetchPossibleValues` and `fetchReferenceOptions` are defined as part of the CSForm component props)</CSD.ListItem>
				<CSD.ListItem>use the `defineFormData()` method in order to combine actual data and the form definition (old CSForm's descriptor)</CSD.ListItem>
				<CSD.ListItem>define errors at separate levels - form errors are defined in the new CSForm `formErrorMessage` prop, while section and field
					errors are defined through the `data` prop in the `errorMessage` object property</CSD.ListItem>
				<CSD.ListItem>to validate the whole form, use the `validateForm()` method (this would replace the old CSForm's `Save` button)</CSD.ListItem>
				<CSD.ListItem>use the CSForm `onFieldChange` prop as a substitute for the old CSForm `update` prop</CSD.ListItem>
				<CSD.ListItem>use the CSForm `onFieldBlur` prop as a substitute for the old CSForm `onBlur` prop</CSD.ListItem>
				<CSD.ListItem>for defining the custom error labels displayed in form validation, use the `errorLabels` prop</CSD.ListItem>
			</CSD.List>
		</CSD.Section>
	</CSD.Page>
);

export default GettingStarted;
