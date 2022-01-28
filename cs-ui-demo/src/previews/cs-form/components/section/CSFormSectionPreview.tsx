import React, { useState } from 'react';
import { CSForm, CSFormChangedFieldData, defineFormData } from '@cloudsense/cs-form-v2';
import * as CSD from '../../../../demo-components';
import CSFormSectionAttributes from './cs-form-section-attributes';
import {
	fields,
	headerAndCollapsibilitySectionData,
	initialSectionData,
	styleClassSectionData
} from './cs-form-section-preview-data';

const CSFormSectionPreview = () => {
	const [errData, setErrData] = useState<any>([{
		sectionKey: 'error-section',
		label: 'Error Section',
		collapsible: true,
		error: true,
		errorMessage: 'number-1 is required.',
		fields
	}]);

	const handleFieldChange = (field: CSFormChangedFieldData) => {
		const newField = [{ [field.name]: field.value }];
		let newErrData = [{ ...errData[0] }];
		if (field.name === 'number-1') {
			newErrData = [{
				...newErrData[0],
				error: !!field.errorMessage,
				errorMessage: field.errorMessage
			}];
		}
		const newData = defineFormData(newErrData, newField);
		setErrData(newData);
	};
	return (
		<CSD.Page
			title="Section"
			tables={[CSFormSectionAttributes]}
			routePrefix="cs-form"
		>
			<CSD.Section>
				<CSD.Heading level={2}>Intro</CSD.Heading>
				<CSD.Text>In CSForm, fields are grouped into sections. Form can have multiple groups of fields.</CSD.Text>
				<CSD.Text>Each section is defined within CSForm's data prop as an object with properties which control the look and behaviour of the section.</CSD.Text>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Key, Label and Fields</CSD.Heading>
				<CSD.Text>`label`, `sectionKey` and `fields` are mandatory object properties of the section object.</CSD.Text>
				<CSD.Text>`label` represents explanatory name for the group of fields and it is shown in the section header.</CSD.Text>
				<CSD.Text>
					`sectionKey` is defined as a unique identifier for the section and it will be returned through
					onFieldBlur or onFieldChange handlers when section field triggers one of the events (change or blur).
				</CSD.Text>
				<CSD.Text>Section fields are defined within `fields` property.</CSD.Text>
				<CSD.Text>It is a property which takes array of objects where each object represents one field in the section.</CSD.Text>
				<CSD.Text>Field object properties can vary depending on the type of the field. More about form fields can be found <CSD.Link path="./standard-form-fields">here</CSD.Link>.</CSD.Text>
				<CSD.Preview
					table={CSFormSectionAttributes}
					related={['sectionKey', 'label', 'fields']}
					code={`
						<CSForm
							data={[{
								sectionKey: 'standard-fields-section',
								label: 'Standard Fields Section',
								fields: [{
									fieldType: 'NUMBER',
									name: 'number-1',
									label: 'Number field',
									required: true,
									min: 1,
									max: 5
								}, {
									fieldType: 'TEXT',
									name: 'text-1',
									label: 'Text field',
									maxLength: 10
								}, {
									fieldType: 'TOGGLE',
									label: 'Toggle field',
									name: 'toggle-1'
								}, {
									fieldType: 'SELECT',
									label: 'Select field',
									name: 'select-1',
									selectOptions: [{
										key: 'red',
										value: 'Red'
									}, {
										key: 'blue',
										value: 'Blue'
									}, {
										key: 'yellow',
										value: 'Yellow'
									}]
								}, {
									fieldType: 'CHECKBOX',
									label: 'Checkbox',
									name: 'checkbox-1'
								}, {
									fieldType: 'TEXTAREA',
									label: 'Textarea field',
									name: 'textarea-1'
								}]
							}]}
						/>
					`}
				>
					<CSForm data={initialSectionData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Header and Collapsibility</CSD.Heading>
				<CSD.Text>Each form section contains a header that holds section label and an indicator which shows the collapsibility of the section.</CSD.Text>
				<CSD.Text>Collapsibility of the form section can be achieved by setting the `collapsible` property.</CSD.Text>
				<CSD.Text>If the section is collapsible it will be expanded by default which can be changed by setting `defaultClosed` property to `true`.</CSD.Text>
				<CSD.Text>
					In certain scenarios form might not need multiple sections in which case section header might not be needed.
					Form fields will still need to be inside a form section, but section can be hidden from UI by setting `hideSectionHeader` property to true.
					By doing this, functionalities like `error`, `errorMessage`, `collapsible` and `defaultClosed` will become unavailable!
				</CSD.Text>
				<CSD.Preview
					table={CSFormSectionAttributes}
					related={['sectionKey', 'label', 'fields', 'collapsible', 'defaultClosed', 'hideSectionHeader']}
					orientation="vertical"
					code={`
						<CSForm
							data={[{
								sectionKey: 'no-header-section',
								label: 'No Header Section',
								hideSectionHeader: true,
								fields: [...]
							}, {
								sectionKey: 'collapsible-section',
								label: 'Collapsible Section',
								collapsible: true,
								fields: [...]
							}, {
								sectionKey: 'collapsible-section',
								label: 'Collapsible Section',
								collapsible: true,
								fields: [...]
							}]}
						/>
					`}
				>
					<CSForm data={headerAndCollapsibilitySectionData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Error Handling and Display</CSD.Heading>
				<CSD.Text>Section allows displaying error messages which are relevant to the corresponding section fields.</CSD.Text>
				<CSD.Text>Error message(s) can be defined in `errorMessage` property which accepts one message or an array of messages.</CSD.Text>
				<CSD.Text>`errorMessage` should be used together with `error` prop which will display error styles on the section header.</CSD.Text>
				<CSD.Preview
					table={CSFormSectionAttributes}
					related={['sectionKey', 'label', 'fields', 'collapsible', 'error', 'errorMessage']}
					code={`
						<CSForm
							data={[{
								sectionKey: 'error-section',
								label: 'Error Section',
								collapsible: true,
								error: !!fieldErrorMessage,
								errorMessage: fieldErrorMessage,
								fields: [...]
							}]}
							onFieldChange={(newData) => setData(newData)}
						/>
					`}
				>
					<CSForm
						data={errData}
						onFieldChange={handleFieldChange}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Custom Styles</CSD.Heading>
				<CSD.Text>We can add custom styles to a form section by adding a custom CSS class to it.</CSD.Text>
				<CSD.Text>This is achieved by passing string value to `styleClass` atrribute.</CSD.Text>
				<CSD.Preview
					table={CSFormSectionAttributes}
					related={['sectionKey', 'label', 'fields', 'collapsible', 'styleClass']}
					code={`
						<CSForm
							data={[{
								sectionKey: 'error-section',
								label: 'Error Section',
								collapsible: true,
								styleClass: 'csd-custom-br-mint',
								fields: [...]
							}]}
						/>
					`}
				>
					<CSForm data={styleClassSectionData} />
				</CSD.Preview>
			</CSD.Section>
		</CSD.Page >
	);
};

export default CSFormSectionPreview;
