// tslint:disable:no-console
import React, { useState } from 'react';
import * as CSD from '../../../../demo-components';
import CSFormProps from './cs-form-props';
import CSFormErrorLabelsAttributes from './cs-form-error-labels-attributes';
import CSFormLocaleAttributes from './cs-form-locale-attributes';
import CSFormNumberFieldLocaleAttributes from './cs-form-number-field-locale-attributes';
import CSFormChangedFieldDataAttributes from './cs-form-changed-field-data';
import {
	eventsData,
	formErrorData,
	initialData,
	localeData,
	readOnlyData
} from './cs-form-preview-data';
import { CSForm, CSFormData, CSFormChangedFieldData, defineFormData } from '@cloudsense/cs-form-v2';

interface CSFormPreviewData {
	[key: string]: any;
}

const CSFormPreview = () => {
	const formErrMsg = 'Form has errors. Please fill all required fields.';
	const fieldErrLabels = {
		required: 'Field is required.',
		min: 'Value is lower than minimal defined value.',
		max: 'Value is higher than maximal defined value.'
	};
	const [formErr, setFormErr] = useState<string | Array<string>>(formErrMsg);
	const [fieldErr, setFieldErr] = useState<Array<Record<string, any>>>([
		{ 'texarea-1': fieldErrLabels.required },
		{ 'number-1': fieldErrLabels.max }
	]);

	const handleFieldChange = (stateName: string, field: CSFormChangedFieldData, logField?: boolean) => {
		let newErrors: Array<any> = [...fieldErr];
		if (stateName === 'formErrorData' && field.name === 'number-form-error') {
			if (field.errorMessage) { setFormErr(formErrMsg); }
			else { setFormErr(''); }
		}
		if (stateName === 'customErrLabelsData' || stateName === 'eventsData') {
			if (field.errorMessage) {
				if (newErrors?.find(err => Object.keys(err)[0] === field.name)) {
					newErrors = newErrors.map(err => Object.keys(err)[0] === field.name ?
						{ [field.name]: field.errorMessage } :
						err
					);
				}
				else { newErrors = [...newErrors, { [field.name]: field.errorMessage }]; }
			} else {
				newErrors = newErrors.filter(err => Object.keys(err)[0] !== field.name);
			}
		}
		const newField = [{ [field.name]: field.value }];
		setFieldErr(newErrors);
		const newData = defineFormData(data[stateName], newField, newErrors);
		setData(prevState => ({ ...prevState, [stateName]: newData }));
		if (logField) { console.log(field); }
	};

	const customErrLabelsData: CSFormData = [
		{
			sectionKey: 'section-1',
			label: 'First Section',
			collapsible: true,
			fields: [{
				fieldType: 'TEXTAREA',
				name: 'textarea-1',
				label: 'Textarea field',
				required: true,
				value: '',
				error: true,
				errorMessage: fieldErrLabels.required
			}, {
				fieldType: 'NUMBER',
				name: 'number-1',
				label: 'Number field',
				min: 1,
				max: 5,
				value: 6,
				error: true,
				errorMessage: fieldErrLabels.max
			}]
		}
	];

	const [data, setData] = useState<CSFormPreviewData>({
		localeData,
		eventsData,
		formErrorData,
		customErrLabelsData
	});

	return (
		<CSD.Page
			title="Form"
			tables={[
				CSFormProps,
				CSFormErrorLabelsAttributes,
				CSFormLocaleAttributes,
				CSFormNumberFieldLocaleAttributes,
				CSFormChangedFieldDataAttributes
			]}
			routePrefix="cs-form"
		>
			<CSD.Heading>Intro</CSD.Heading>
			<CSD.Section>
				<CSD.Text>The CSForm component is the master component from which the entire form is defined and rendered.</CSD.Text>
				<CSD.Text>It is the only component that a developer would need to use in order to generate the form, its sections and its fields.</CSD.Text>
				<CSD.Text>All other components are generated from the structure defined in the `data` prop.</CSD.Text>
			</CSD.Section>
			<CSD.Heading>Structure and Data</CSD.Heading>
			<CSD.Section>
				<CSD.Text>The structure and form field values are defined through the `data` prop.</CSD.Text>
				<CSD.Text>
					The `data` prop is an array of objects which represent one form section with properties relevant to the section, among which is the fields array.
					The fields array defines which type of fields will be rendered in the defined section.
				</CSD.Text>
				<CSD.Text>
					The `defineFormData()` util method can help with combining the form definition and actual data if required.
					Details regarding `defineFormData()` can be found <CSD.Link path="./utils#defining-form-data">here</CSD.Link>.
				</CSD.Text>
				<CSD.Preview
					table={CSFormProps}
					related={['data']}
					code={`
						<CSForm
							data={[{
								sectionKey: 'section-1',
								label: 'First Section',
								collapsible: true,
								fields: [{
									fieldType: 'NUMBER',
									label: 'Number field',
									name: 'number 1',
									required: true,
								}, {
									fieldType: 'TEXT',
									label: 'Text field',
									name: 'text-1',
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
							},
							{
								sectionKey: 'section-2',
								label: 'Second section',
								collapsible: true,
								fields: [{
									fieldType: 'DATE',
									label: 'Date field',
									name: 'date-2',
									disabled: true
								}, {
									fieldType: 'NUMBER',
									label: 'Number field',
									name: 'number-2'
								}, {
									fieldType: 'DATETIME',
									label: 'Date-time field',
									name: 'date-time-2'
								}, {
									fieldType: 'TEXTAREA',
									label: 'Textarea field',
									name: 'textarea-2'
								}, {
									fieldType: 'LOOKUP',
									label: 'Lookup field',
									name: 'lookup-2',
									mode: 'client',
									columns: [{ key: 'Account', header: 'Account' },
									{ key: 'Industry', header: 'Industry' }],
									options: [{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } },
									{ key: 2, data: { Id: 2, Account: 'Global Media', Industry: 'Industry' } },
									{ key: 3, data: { Id: 3, Account: 'Salesforce', Industry: 'Software' } },
									{ key: 4, data: { Id: 4, Account: 'Elisa', Industry: 'Telecommunications' } }],
									fieldToBeDisplayed: 'Account',
								}]
							}]}
						/>
					`}
				>
					<CSForm data={initialData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Layout</CSD.Heading>
			<CSD.Section>
				<CSD.Text>CSForm supports defining the number of fields/columns per row across the sections which define the layout of the whole form.</CSD.Text>
				<CSD.Text>The `columnNumber` prop defines the number of fields rendered in each row. It is consistent for every section in the form and cannot be changed for individual sections.</CSD.Text>
				<CSD.Text>The default columnNumber value is 4 columns.</CSD.Text>
				<CSD.Text>
					A defined layout can be changed via the field's `grow` and `showInNewLine` attributes.
					Details can be found <CSD.Link path="./standard-form-fields#layout-properties">here</CSD.Link>.
				</CSD.Text>
				<CSD.Preview
					table={CSFormProps}
					related={['columnNumber', 'data']}
					code={`<CSForm data={data} columnNumber={5} />`}
				>
					<CSForm data={initialData} columnNumber={5} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Error Handling and Display</CSD.Heading>
			<CSD.Section>
				<CSD.Text>To display an error message or messages relevant for the entire form, the `formErrorMessage` prop needs to be defined.</CSD.Text>
				<CSD.Text>CSForm can display one message or an array of messages in a global CSAlert component.</CSD.Text>
				<CSD.Preview
					table={CSFormProps}
					related={['data', 'formErrorMessage', 'onFieldChange']}
					code={`
						<CSForm
							data={data}
							formErrorMessage={formErrorMessage}
							onFieldChange={(newData) => setData(newData)}
						/>
					`}
				>
					<CSForm
						data={data.formErrorData}
						onFieldChange={newData => handleFieldChange('formErrorData', newData)}
						formErrorMessage={formErr}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Custom Error Labels</CSD.Heading>
			<CSD.Section>
				<CSD.Text>
					CSForm also provides custom labeling of errors for some out-of-the-box validations.
					Custom error labels can be defined in the `errorLabels` prop which consists of 3 properties for each supported validation:
				</CSD.Text>
				<CSD.List>
					<CSD.ListItem>requiredFieldErrLabel - error label for field requiredness validation</CSD.ListItem>
					<CSD.ListItem>maxNumberFieldErrLabel - error label for validation of the input number field\'s max attribute</CSD.ListItem>
					<CSD.ListItem>minNumberFieldErrLabel - error label for validation of the input number field\'s min attribute</CSD.ListItem>
				</CSD.List>
				<CSD.Preview
					table={CSFormProps}
					related={['data', 'errorLabels', 'formErrorMessage', 'onFieldChange']}
					code={`
						<CSForm
							data={data}
							errorLabels={{
								requiredFieldErrLabel: '${fieldErrLabels.required}',
								minNumberFieldErrLabel: '${fieldErrLabels.min}',
								maxNumberFieldErrLabel: '${fieldErrLabels.max}'
							}}
							onFieldChange={(newData) => setData(newData)}
						/>
					`}
				>
					<CSForm
						data={data.customErrLabelsData}
						errorLabels={{
							requiredFieldErrLabel: fieldErrLabels.required,
							minNumberFieldErrLabel: fieldErrLabels.min,
							maxNumberFieldErrLabel: fieldErrLabels.max
						}}
						onFieldChange={newData => handleFieldChange('customErrLabelsData', newData)}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Localization</CSD.Heading>
			<CSD.Section>
				<CSD.Text>Displaying the date, time and number formats is achieved through the `locale` prop.</CSD.Text>
				<CSD.Text>This prop is defined as an object with two properties - one for date/datetime, the other for number.</CSD.Text>
				<CSD.Text>
					`dateLocale` is a string property where the desired locale is defined.
					The date or datetime fields will be formatted according to the defined BCP 47 language tag.
				</CSD.Text>
				<CSD.Text>Number formatting is achieved by using the Intl.NumberFormat API.</CSD.Text>
				<CSD.Text>The `numberLocale` object property will format the number according to the BCP 47 language tag passed in the `numLocale` property and options which are listed below:</CSD.Text>
				<CSD.List>
					<CSD.ListItem>currency</CSD.ListItem>
					<CSD.ListItem>style</CSD.ListItem>
					<CSD.ListItem>maximumFractionDigits</CSD.ListItem>
					<CSD.ListItem>minimumFractionDigits</CSD.ListItem>
				</ CSD.List>
				<CSD.Preview
					table={CSFormProps}
					related={['data', 'locale', 'onFieldChange']}
					code={`
						<CSForm
							data={[
								{
									sectionKey: 'section-locale',
									label: 'First Section',
									collapsible: true,
									fields: [{
										fieldType: 'NUMBER',
										label: 'Number field',
										name: 'number-locale',
										useLocale: true,
										value: 100
									}, {
										fieldType: 'DATE',
										label: 'Date field',
										name: 'date-locale',
										selected: new Date()
									}, {
										fieldType: 'DATETIME',
										label: 'Date-time field',
										name: 'date-time-locale',
										selected: new Date()
									}]
								}
							]}
							locale={{
								dateLocale: 'es',
								numberLocale: {
									numLocale: 'es',
									options: {
										style: 'currency',
										currency: 'EUR'
									}
								}
							}}
							onFieldChange={(newData) => setData(newData)}
						/>
					`}
				>
					<CSForm
						data={data.localeData}
						locale={{
							dateLocale: 'es',
							numberLocale: {
								numLocale: 'es',
								options: {
									style: 'currency',
									currency: 'EUR'
								}
							}
						}}
						onFieldChange={newData => handleFieldChange('localeData', newData)}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Mode</CSD.Heading>
			<CSD.Section>
				<CSD.Text>The `mode` functionality controls how the entire form will be displayed.</CSD.Text>
				<CSD.Text>
					Currently only the `'read-only'` value is supported as part of the `mode` prop, which would render the entire form as read-only,
					overriding the readOnly property defined in each form field.
				</CSD.Text>
				<CSD.Preview
					table={CSFormProps}
					related={['data', 'mode']}
					code={`<CSForm data={data} mode="read-only" />`}
				>
					<CSForm data={readOnlyData} mode="read-only" />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Event Handling</CSD.Heading>
			<CSD.Section>
				<CSD.Text>CSForm handles four types of events: blur, change, click and keydown.</CSD.Text>
				<CSD.Text>
					Each time blur or change events are triggered, the form field which triggered the event will be validated and a unique field name,
					section key and value will be returned through the event handler props (onFieldBlur or onFieldChange).
				</CSD.Text>
				<CSD.Text>Also, the error message(s) will be returned if one of the form validations fails.</CSD.Text>
				<CSD.Text>Triggering click or keydown events will return object with current field data.</CSD.Text>
				<CSD.Text>Check the browser console to see the returned object when the field's blur, click or keydown event is triggered.</CSD.Text>
				<CSD.Preview
					table={CSFormProps}
					related={['data', 'onFieldBlur', 'onFieldChange', 'onFieldClick', 'onFieldKeyDown']}
					code={`
						<CSForm
							data={data}
							onFieldChange={(newData) => setData(newData)}
							onFieldBlur={console.log}
							onFieldClick={console.log}
							onFieldKeyDown={console.log}
						/>
					`}
				>
					<CSForm
						data={data.eventsData}
						onFieldChange={newData => handleFieldChange('eventsData', newData, true)}
						onFieldBlur={console.log}
						onFieldClick={console.log}
						onFieldKeyDown={console.log}
					/>
				</CSD.Preview>
			</CSD.Section>
		</CSD.Page>
	);
};

export default CSFormPreview;
