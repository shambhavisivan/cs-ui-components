import React from 'react';
import { CSForm } from '@cloudsense/cs-form-v2';
import * as CSD from '../../../../demo-components';
import CSFormBufferFieldAttributes from './cs-form-buffer-field-attributes';

const CSFormLayoutFormFieldsPreview = () => {
	return (
		<CSD.Page
			title="Layout Form Fields"
			routePrefix="cs-form"
			tables={CSFormBufferFieldAttributes}
		>
			<CSD.Heading>Buffer</CSD.Heading>
			<CSD.Section>
				<CSD.Text>Layout form fields enable defining layout in the form section.</CSD.Text>
				<CSD.Text>Currently, form supports defining such field of type `'BUFFER'`.</CSD.Text>
				<CSD.Text>
					`'BUFFER'` field will only render a field wrapper which will act as a blank space in the form section.
					This can be useful if the user wants to separate fields in meaningful groups.
				</CSD.Text>
				<CSD.Text>It can be expanded through multiple columns by defining `grow` property, and it can also be shown as a first field in a new line if `showInNewLine` is set.</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[
								{
									sectionKey: 'section-1',
									label: 'First Section',
									collapsible: true,
									fields: [{
										type: 'NUMBER',
										label: 'Number field',
										name: 'number-1'
									}, {
										type: 'TEXT',
										label: 'Text field',
										name: 'text-1'
									}, {
										type: 'BUFFER',
										grow: 2,
										showInNewLine: true,
									}, {
										type: 'TOGGLE',
										label: 'Toggle field',
										name: 'toggle-1'
									}, {
										type: 'SELECT',
										label: 'Select field',
										name: 'select-1',
										options: [...]
									}, {
										type: 'CHECKBOX',
										label: 'Checkbox',
										name: 'checkbox-1'
									}, {
										type: 'TEXTAREA',
										label: 'Textarea field',
										name: 'textarea-1'
									}]
								},
								{
									sectionKey: 'section-2',
									label: 'Second section',
									collapsible: true,
									fields: [{
										type: 'DATE',
										label: 'Date field',
										name: 'date-2'
									}, {
										type: 'BUFFER'
									}, {
										type: 'DATETIME',
										label: 'Date-time field',
										name: 'date-time-2'
									}, {
										type: 'TEXTAREA',
										label: 'Textarea field',
										name: 'textarea-2'
									}, {
										type: 'BUFFER',
										grow: 4
									}, {
										type: 'LOOKUP',
										label: 'Lookup field',
										name: 'lookup-2',
										mode: 'client',
										columns: [...],
										options: [...],
										fieldToBeDisplayed: 'Account'
									}, {
										type: 'NUMBER',
										label: 'Number field',
										name: 'number-2-2',
									}, {
										type: 'TEXT',
										label: 'Text field',
										name: 'text-2',
									}, {
										type: 'TOGGLE',
										label: 'Toggle field',
										name: 'toggle-2'
									}]
								}
							]}
						/>
					`}
				>
					<CSForm
						data={[
							{
								sectionKey: 'section-1',
								label: 'First Section',
								collapsible: true,
								fields: [{
									type: 'NUMBER',
									label: 'Number field',
									name: 'number-1'
								}, {
									type: 'TEXT',
									label: 'Text field',
									name: 'text-1'
								}, {
									type: 'BUFFER',
									grow: 2,
									showInNewLine: true
								}, {
									type: 'TOGGLE',
									label: 'Toggle field',
									name: 'toggle-1'
								}, {
									type: 'SELECT',
									label: 'Select field',
									name: 'select-1',
									options: [{
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
									type: 'CHECKBOX',
									label: 'Checkbox',
									name: 'checkbox-1'
								}, {
									type: 'TEXTAREA',
									label: 'Textarea field',
									name: 'textarea-1'
								}]
							},
							{
								sectionKey: 'section-2',
								label: 'Second section',
								collapsible: true,
								fields: [{
									type: 'DATE',
									label: 'Date field',
									name: 'date-2'
								}, {
									type: 'BUFFER'
								}, {
									type: 'DATETIME',
									label: 'Date-time field',
									name: 'date-time-2'
								}, {
									type: 'TEXTAREA',
									label: 'Textarea field',
									name: 'textarea-2'
								}, {
									type: 'BUFFER',
									grow: 4
								}, {
									type: 'LOOKUP',
									label: 'Lookup field',
									name: 'lookup-2',
									mode: 'client',
									columns: [{ key: 'Account', header: 'Account' },
									{ key: 'Industry', header: 'Industry' }],
									options: [{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } },
									{ key: 2, data: { Id: 2, Account: 'Global Media', Industry: 'Industry' } },
									{ key: 3, data: { Id: 3, Account: 'Salesforce', Industry: 'Software' } },
									{ key: 4, data: { Id: 4, Account: 'Elisa', Industry: 'Telecommunications' } }],
									fieldToBeDisplayed: 'Account'
								}, {
									type: 'NUMBER',
									label: 'Number field',
									name: 'number-2-2'
								}, {
									type: 'TEXT',
									label: 'Text field',
									name: 'text-2'
								}, {
									type: 'TOGGLE',
									label: 'Toggle field',
									name: 'toggle-2'
								}]
							}
						]}
					/>
				</CSD.Preview>
			</CSD.Section>
		</CSD.Page>
	);
};

export default CSFormLayoutFormFieldsPreview;
