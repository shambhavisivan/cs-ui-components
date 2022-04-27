import React from 'react';
import { CSDataTable } from '@cloudsense/cs-ui-components';
import { CSForm } from '@cloudsense/cs-form-v2';
import * as CSD from '../../../../demo-components';
import CSFormStandardFieldsCommonAttributes from './cs-form-standard-fields-common-attributes';
import {
	CSFormChecboxFieldAttributes,
	CSFormPicklistFieldAttributes,
	CSFormPicklistOptionAttributes,
	CSFormDateFieldAttributes,
	CSFormDateTimeFieldAttributes,
	CSFormLookupFieldAttributes,
	CSFormLookupFieldClientAttributes,
	CSFormLookupFieldServerAttributes,
	CSFormNumberFieldAttributes,
	CSFormRadioFieldAttributes,
	CSFormRadioOptionAttributes,
	CSFormTextFieldAttributes,
	CSFormTextareaFieldAttributes
} from './cs-form-standard-fields-specific-attributes';
import {
	fieldTypeData,
	layoutPropsData,
	customOptionsData,
	errorAndHelpTextData,
	fieldStateVisibilityData,
	fieldStyleData,
	fieldTitleAndValueData
} from './cs-form-common-props-preview-data';
import {
	checkboxPropsData,
	picklistPropsData,
	datePropsData,
	dateTimePropsData,
	lookupPropsData,
	numberLocaleData,
	radioPropsData,
	textareaPropsData,
	textPropsData
} from './cs-form-specific-prop-preview-data';

const datePath = '../cs-ui/datepicker#CSDatepicker';
const dateTimePath = '../cs-ui/date-time-picker#CSDateTimePicker';
const lookupPath = '../cs-ui/lookup#';
const picklistPath = '../cs-ui/picklist#';
const radioPath = '../cs-ui/radio#';
const numberPath = '../cs-ui/input-number#CSInputNumber';
const textareaPath = '../cs-ui/textarea#CSTextarea';

const CSFormStandardFormFieldsPreview = () => {
	return (
		<CSD.Page
			title="Standard Form Fields"
			tables={[
				CSFormStandardFieldsCommonAttributes,
				CSFormChecboxFieldAttributes,
				CSFormDateFieldAttributes,
				CSFormDateTimeFieldAttributes,
				CSFormLookupFieldAttributes,
				CSFormLookupFieldClientAttributes,
				CSFormLookupFieldServerAttributes,
				CSFormNumberFieldAttributes,
				CSFormPicklistFieldAttributes,
				CSFormPicklistOptionAttributes,
				CSFormRadioFieldAttributes,
				CSFormRadioOptionAttributes,
				CSFormTextFieldAttributes,
				CSFormTextareaFieldAttributes
			]}
			routePrefix="cs-form"
		>
			<CSD.Heading>Intro</CSD.Heading>
			<CSD.Section>
				<CSD.Text>Standard form fields are used for capturing user input and displaying values.</CSD.Text>
				<CSD.Text>All field components are created using the `cs-ui-components` library.</CSD.Text>
				<CSD.Text>Standard form fields are defined in CSForm's data prop as part of the section object's `fields` array.</CSD.Text>
				<CSD.Text>CSForm distinguishes several types of fields and each field is defined by the `type` property.</CSD.Text>
				<CSD.Text>The table below shows which component will be rendered for each `type` property value:</CSD.Text>
				<CSDataTable
					columns={[
						{
							key: 'type',
							header: 'Field Type Value'
						}, {
							key: 'component',
							header: 'Corresponding Component'
						}
					]}
					rows={[
						{
							key: 'checkbox',
							data: {
								type: 'CHECKBOX',
								component: 'CSFormCheckboxField'
							}
						}, {
							key: 'date',
							data: {
								type: 'DATE',
								component: 'CSFormDateField'
							}
						}, {
							key: 'datetime',
							data: {
								type: 'DATETIME',
								component: 'CSFormDateTimeField'
							}
						}, {
							key: 'lookup',
							data: {
								type: 'LOOKUP',
								component: 'CSFormLookupField'
							}
						}, {
							key: 'number',
							data: {
								type: 'NUMBER',
								component: 'CSFormNumberField'
							}
						}, {
							key: 'picklist',
							data: {
								type: 'PICKLIST',
								component: 'CSFormPicklistField'
							}
						}, {
							key: 'radio',
							data: {
								type: 'RADIO',
								component: 'CSFormRadioField'
							}
						}, {
							key: 'text',
							data: {
								type: 'TEXT',
								component: 'CSFormTextField'
							}
						}, {
							key: 'textarea',
							data: {
								type: 'TEXTAREA',
								component: 'CSFormTextareaField'
							}
						}, {
							key: 'toggle',
							data: {
								type: 'TOGGLE',
								component: 'CSFormToggleField'
							}
						}
					]}
				/>
				<CSD.Text>Each object in the `fields` array consists of certain properties.</CSD.Text>
				<CSD.Text>Standard form field properties are split into two groups: common properties and field type specific properties.</CSD.Text>
			</CSD.Section>
			<CSD.Heading>Common Properties</CSD.Heading>
			<CSD.Section>
				<CSD.Text>The form field object consists of properties which are common to all fields, regardless of the `type` property value. </CSD.Text>
				<CSD.Text>Common properites that are required for each field are `type`, `name` and `label`.</CSD.Text>
				<CSD.Text>Each of the common properties is represented in the previews below.</CSD.Text>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Required</CSD.Heading>
				<CSD.Text>Common properites that are required for each field are `type`, `name` and `label`.</CSD.Text>
				<CSD.Text>
					`type` determines what kind of form field component will be rendered.
					Defining `type` enables access to properties which are specific to the type of the specific form field component.
				</CSD.Text>
				<CSD.Text>The `name` property is used as a unique identifier for the form field. It’s also used for setting the input name attribute.</CSD.Text>
				<CSD.Text>The `label` property will display a label above the actual field.</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									type: 'NUMBER',
									label: 'Number field',
									name: 'number-1',
								}, {
									type: 'TEXT',
									label: 'Text field',
									name: 'text-1',
								}, {
									type: 'TEXTAREA',
									label: 'Textarea field',
									name: 'textarea-1',
								}, {
									type: 'TOGGLE',
									label: 'Toggle field',
									name: 'toggle-1',
								}, {
									type: 'DATE',
									label: 'Date field',
									name: 'date-2',
								}, {
									type: 'CHECKBOX',
									label: 'Checkbox',
									name: 'checkbox-1',
								}]
							}]}
						/>
					`}
				>
					<CSForm data={fieldTypeData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Layout</CSD.Heading>
				<CSD.Text>The `grow` and `showInNewLine` properties are used for changing the field's layout by defining its width or setting the field to new line.</CSD.Text>
				<CSD.Text>
					The `grow` property will determine how many columns one form field will take up in a single row.
					Defining the grow prop can sometimes cause layout shifts since it depends on a defined columnNumber prop and the number of fields in a single row.
				</CSD.Text>
				<CSD.Text>The `showInNewLine` property will disregard the natural flow of the form columns and will render that form field as the first field in a new line.</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									type: 'TEXT',
									label: 'Text field',
									name: 'text-1',
									grow: 2
								}, {
									type: 'NUMBER',
									label: 'Number field',
									name: 'number-1',
								}, {
									type: 'TEXTAREA',
									label: 'Textarea field',
									name: 'textarea-1',
									showInNewLine: true,
								}, {
									type: 'TEXT',
									label: 'Text field',
									name: 'text-1-1',
								}]}
						/>
					`}
				>
					<CSForm data={layoutPropsData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Custom Data</CSD.Heading>
				<CSD.Text>The `actions` and `icons` array properties allow the rendering of custom form field items such as icons, tooltips and buttons for invoking custom code.</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									type: 'NUMBER',
									name: 'number-1',
									label: 'Number field',
									actions: [{
											onClick: () => alert('Delete option called'),
											iconName: 'delete',
											labelHidden: true,
											size: 'small' as CSButtonSize,
											label: 'Delete'
										}, {
											onClick: () => alert('Add option called'),
											iconName: 'add',
											labelHidden: true,
											size: 'small' as CSButtonSize,
											label: 'Add',
											tooltip: {
												content: 'actions tooltip',
												delay: 300,
												padding: '0.5rem',
												position: 'bottom-left' as CSTooltipPosition,
												stickyOnClick: true
											}
										}]
									}, {
									type: 'LOOKUP',
									label: 'Lookup field',
									name: 'lookup-1',
									mode: 'client',
									columns: [
										{ key: 'Account', header: 'Account' },
										{ key: 'Industry', header: 'Industry' }
									],
									options: [
										{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } },
										{ key: 2, data: { Id: 2, Account: 'Global Media', Industry: 'Industry' } },
										{ key: 3, data: { Id: 3, Account: 'Salesforce', Industry: 'Software' } },
										{ key: 4, data: { Id: 4, Account: 'Elisa', Industry: 'Telecommunications' } }
									],
									fieldToBeDisplayed: 'Account',
									icons: [
										{ name: 'cart' },
										{
											name: 'tag',
											origin: 'cs' as CSIconOrigin,
											tooltip: {
												content: ['icons tooltip'],
												delay: 300,
												maxWidth: '20rem',
												padding: '0.5rem',
												position: 'bottom-left' as CSTooltipPosition,
												stickyOnClick: true
											}
										}
									]
								}]
							}]}
						/>
					`}
				>
					<CSForm data={customOptionsData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Error and Helptext Display</CSD.Heading>
				<CSD.Text>Displaying various field information can be achieved by setting the `errorMessage` or `helpText` properties.</CSD.Text>
				<CSD.Text>`error` and `errorMessage` enable rendering error styles and displaying error messages relevant for certain fields.</CSD.Text>
				<CSD.Text>Both properties are designed to be used together to satisfy accessibility best practices.</CSD.Text>
				<CSD.Text>The `helpText` property is used to display additional information in the form of a tooltip.</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
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
									fieldToBeDisplayed: 'Account',
									error: true,
									errorMessage: 'Account is invalid!'
								}, {
									type: 'DATETIME',
									label: 'Datetime field',
									name: 'date-time-1',
									error: true,
									errorMessage: 'Select correct date!'
								}, {
									type: 'TEXTAREA',
									label: 'Textarea field',
									name: 'textarea-1',
									helpText: 'Enter description.'
								}]
							}]}
						/>
					`}
				>
					<CSForm data={errorAndHelpTextData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Field State and Visibility</CSD.Heading>
				<CSD.Text>The `disabled`, `readOnly` and `required` properties represent the state of the field which indicates whether the field should or should not be populated.</CSD.Text>
				<CSD.Text>By defining each of the properties, the corresponding input field attribute will be set.</CSD.Text>
				<CSD.Text>To hide the field based on some condition, the `hidden` property can be defined.</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									type: 'TOGGLE',
									label: 'Toggle field',
									name: 'toggle-1',
									hidden: true
								}, {
									type: 'TEXT',
									label: 'Text field',
									name: 'text-1',
									disabled: true
								}, {
									type: 'NUMBER',
									label: 'Number field',
									name: 'number-1',
									readOnly: true,
									value: 2
								}, {
									type: 'TEXTAREA',
									label: 'Textarea field',
									name: 'textarea-1',
									required: true
								}]
							}]}
						/>
					`}
				>
					<CSForm data={fieldStateVisibilityData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Field Custom Styles</CSD.Heading>
				<CSD.Text>Applying custom CSS styles can be accomplished by setting the `styleClass` field property.</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									type: 'RADIO',
									label: 'Radio field',
									name: 'radio-1',
									styleClass: 'csd-custom-br-mint',
									options: [{
										key: 'red',
										label: 'Red'
									}, {
										key: 'blue',
										label: 'Blue'
									}]
								}]
							}]}
						/>
					`}
				>
					<CSForm data={fieldStyleData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Title and Value</CSD.Heading>
				<CSD.Text>The `title` property sets the title attribute for a form field. It represents advisory information for the field it belongs to.</CSD.Text>
				<CSD.Text>An exception exists with the `title` prop on radio fields. It can only be set on radio options, not the radio field itself.</CSD.Text>
				<CSD.Text>The `value` property specifies the value of the form field. It is type-checked for each field type and the types are described in the tables on Props tab.</CSD.Text>
				<CSD.Text>
					Considering that the entire form is stateless and isn't managing any input data, the `value` property of the desired field needs to be
					updated on every field change. This provides flexibility for the form fields and form itself, since usually some values are updated conditionally with some external logic.
				</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									type: 'TEXT',
									label: 'Text field',
									name: 'text-1',
									title: 'Text field title'
								}, {
									type: 'NUMBER',
									label: 'Number field',
									name: 'number-1',
									value: 2
								}]
							}]}
						/>
					`}
				>
					<CSForm data={fieldTitleAndValueData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Field Type Specific Properties</CSD.Heading>
			<CSD.Section>
				<CSD.Text>Each of the field objects has properties which are specific to the type of field.</CSD.Text>
				<CSD.Text>Field type specific properties are accessible by defining the desired type in the `type` property.</CSD.Text>
				<CSD.Text>Specific properties for each field type are listed below:</CSD.Text>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Checkbox</CSD.Heading>
				<CSD.Text>The checkbox field specific property is `indeterminate`.</CSD.Text>
				<CSD.Text>Details about the `indeterminate` property can be found below:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path="../cs-ui/checkbox#CSCheckbox-indeterminate">indeterminate</CSD.Link></CSD.ListItem>
				</CSD.List>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									type: 'CHECKBOX',
									label: 'Checkbox',
									name: 'checkbox-1',
									value: true
								}]
							}]}
						/>
					`}
				>
					<CSForm data={checkboxPropsData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Date</CSD.Heading>
				<CSD.Text>Date field specific properties is `dateFormat`.</CSD.Text>
				<CSD.Text>Details about the `dateFormat`property can be found below:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${datePath}-dateFormat`}>dateFormat</CSD.Link></CSD.ListItem>
				</CSD.List>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								type: 'DATE',
								label: 'Date field',
								name: 'date-2',
								value: new Date()
							}]}
						/>
					`}
				>
					<CSForm data={datePropsData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Date-time</CSD.Heading>
				<CSD.Text>Date-time field specific properties are `dateFormat`, `timeCaption`, `timeFormat` and `timeIntervals`.</CSD.Text>
				<CSD.Text>Details about each of the properties can be found below:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${dateTimePath}-dateFormat`}>dateFormat</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${dateTimePath}-timeCaption`}>timeCaption</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${dateTimePath}-timeFormat`}>timeFormat</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${dateTimePath}-timeIntervals`}>timeIntervals</CSD.Link></CSD.ListItem>
				</CSD.List>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								type: 'DATETIME',
								label: 'Date-time field',
								name: 'date-time-2',
								value: new Date()
							}]}
						/>
					`}
				>
					<CSForm data={dateTimePropsData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Lookup</CSD.Heading>
				<CSD.Text>The lookup field consists of three groups of properties: common, client-mode and server-mode.</CSD.Text>
				<CSD.Text>Each group of properties are listed below and the details of each property can be found by clicking on the desired property in the list.</CSD.Text>
				<CSD.Text>Lookup field common properties:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${lookupPath}base-usage`}>fieldToBeDisplayed</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${lookupPath}base-usage`}>columns</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${lookupPath}base-usage`}>mode</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${lookupPath}selection`}>multiselect</CSD.Link></CSD.ListItem>
				</CSD.List>
				<CSD.Text>Lookup field client-mode properties:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${lookupPath}displaying-options`}>options</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${lookupPath}loading`}>loading</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${lookupPath}search`}>searchBy</CSD.Link></CSD.ListItem>
				</CSD.List>
				<CSD.Text>Lookup field server-mode properties:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${lookupPath}fetching-options`}>fetchOptions</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${lookupPath}pagination`}>infiniteScroll</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${lookupPath}server-side-search`}>minTermLength</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${lookupPath}pagination`}>pageSize</CSD.Link></CSD.ListItem>
				</CSD.List>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [
									{
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
										fieldToBeDisplayed: 'Account',
										value: { key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } }
									}
								]
							}]}
						/>
					`}
				>
					<CSForm data={lookupPropsData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Number</CSD.Heading>
				<CSD.Text>Number field specific properties are `fractionDigits`,`max`, `min` and `useLocale`.</CSD.Text>
				<CSD.Text>Details about `fractionDigits`, `min`, `max` properties can be found below:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${numberPath}-fractionDigits`}>fractionDigits</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${numberPath}-max`}>max</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${numberPath}-min`}>min</CSD.Link></CSD.ListItem>
				</CSD.List>
				<CSD.Text>The `useLocale` property enables formatting of the field value by defining the form locale.</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									type: 'NUMBER',
									label: 'Number field',
									name: 'number-1',
									useLocale: true,
									value: 100
								}, {
									type: 'NUMBER',
									label: 'Number field',
									name: 'number-2',
									useLocale: false,
									value: 100
								}]
							}]}
							locale={{
								numberLocale: {
									numLocale: 'en-EN',
									options: {
										style: 'currency',
										currency: 'GBP'
									}
								}
							}}
						/>
					`}
				>
					<CSForm
						data={numberLocaleData}
						locale={{
							numberLocale: {
								numLocale: 'en-EN',
								options: {
									style: 'currency',
									currency: 'GBP'
								}
							}
						}}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Picklist</CSD.Heading>
				<CSD.Text>Picklist field specific properties are `multiselect`, `onClear`, `onSearch` and `options`.</CSD.Text>
				<CSD.Text>Details about each of the properties can be found below:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${picklistPath}base-usage`}>options</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${picklistPath}multiselect`}>multiselect</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${picklistPath}selection`}>onClear</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${picklistPath}search`}>onSearch</CSD.Link></CSD.ListItem>
				</CSD.List>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									type: 'PICKLIST',
									label: 'Picklist field',
									name: 'picklist-2',
									options: [
										{ key: 0, label: 'Product' },
										{ key: 1, label: 'Services' },
										{ key: 2, label: 'Sales' },
										{ key: 3, label: 'Marketing' }
									],
									value: 0
								}]
							}]}
						/>
					`}
				>
					<CSForm data={picklistPropsData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Radio</CSD.Heading>
				<CSD.Text> The radio field specific property are `options` and `disabledKeys`.</CSD.Text>
				<CSD.Text> Exception is with `title` property on radio field as it can only be set to radio options.</CSD.Text>
				<CSD.Text>Details about `options` and `disabledKeys` properties can be found below:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${radioPath}base-usage`}>options</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${radioPath}restrictions`}>disabledKeys</CSD.Link></CSD.ListItem>
				</CSD.List>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									type: 'RADIO',
									label: 'Select color:',
									name: 'radio-color',
									value: 'red',
									options: [{
										key: 'red',
										label: 'Red'
									}, {
										key: 'blue',
										label: 'Blue'
									}]
								}, {
									type: 'RADIO',
									label: 'Select fruit:',
									name: 'radio-fruit',
									disabledKeys: ['apple'],
									value: 'banana',
									options: [{
										key: 'banana',
										label: 'Banana'
									}, {
										key: 'apple',
										label: 'Apple'
									}]
								}, {
									type: 'RADIO',
									label: 'Select season:',
									name: 'radio-season',
									value: 'summer',
									options: [{
										key: 'summer',
										label: 'Summer',
										title: 'Summer season'
									}, {
										key: 'winter',
										label: 'Winter',
										title: 'Winter season'
									}]
								}]
							}]}
						/>
					`}
				>
					<CSForm data={radioPropsData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Text</CSD.Heading>
				<CSD.Text>The text field specific property is `maxLength`.</CSD.Text>
				<CSD.Text>Details about the `maxLength` property can be found below:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path="../cs-ui/input-text#input-options">maxLength</CSD.Link></CSD.ListItem>
				</CSD.List>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [
									{
										type: 'TEXT',
										label: 'Text field',
										name: 'text-1',
										value: 'Example text.'
									}
								]
							}]}
						/>
					`}
				>
					<CSForm data={textPropsData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Textarea</CSD.Heading>
				<CSD.Text>Textarea specific properties are `maxHeight` and `rows`.</CSD.Text>
				<CSD.Text>Details about each of the properties can be found below:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${textareaPath}-maxHeight`}>maxHeight</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${textareaPath}-rows`}>rows</CSD.Link></CSD.ListItem>
				</CSD.List>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [
									{
										type: 'TEXTAREA',
										label: 'Textarea field',
										name: 'textarea-1',
										value: 'Example description.'
									}
								]
							}]}
						/>
					`}
				>
					<CSForm data={textareaPropsData} />
				</CSD.Preview>
			</CSD.Section>
		</CSD.Page>
	);
};

export default CSFormStandardFormFieldsPreview;
