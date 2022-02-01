import React from 'react';
import { CSDataTable } from '@cloudsense/cs-ui-components';
import { CSForm } from '@cloudsense/cs-form-v2';
import * as CSD from '../../../../demo-components';
import CSFormStandardFieldsCommonAttributes from './cs-form-standard-fields-common-attributes';
import {
	CSFormChecboxFieldAttributes,
	CSFormCustomSelectFieldAttributes,
	CSFormCustomSelectOptionAttributes,
	CSFormDateFieldAttributes,
	CSFormDateTimeFieldAttributes,
	CSFormLookupFieldAttributes,
	CSFormLookupFieldClientAttributes,
	CSFormLookupFieldServerAttributes,
	CSFormNumberFieldAttributes,
	CSFormRadioFieldAttributes,
	CSFormRadioOptionAttributes,
	CSFormSelectFieldAttributes,
	CSFormSelectOptionAttributes,
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
import { numberLocaleData, radioPropsData, selectPropsData } from './cs-form-specific-prop-preview-data';

const customSelectPath = '../cs-ui/custom-select#CSCustomSelect';
const datePath = '../cs-ui/datepicker#CSDatepicker';
const dateTimePath = '../cs-ui/date-time-picker#CSDateTimePicker';
const lookupPath = '../cs-ui/lookup';
const numberPath = '../cs-ui/input-number#CSInputNumber';
const textareaPath = '../cs-ui/textarea#CSTextarea';

const CSFormStandardFormFieldsPreview = () => {
	return (
		<CSD.Page
			title="Standard Form Fields"
			tables={[
				CSFormStandardFieldsCommonAttributes,
				CSFormChecboxFieldAttributes,
				CSFormCustomSelectFieldAttributes,
				CSFormCustomSelectOptionAttributes,
				CSFormDateFieldAttributes,
				CSFormDateTimeFieldAttributes,
				CSFormLookupFieldAttributes,
				CSFormLookupFieldClientAttributes,
				CSFormLookupFieldServerAttributes,
				CSFormNumberFieldAttributes,
				CSFormRadioFieldAttributes,
				CSFormRadioOptionAttributes,
				CSFormSelectFieldAttributes,
				CSFormSelectOptionAttributes,
				CSFormTextFieldAttributes,
				CSFormTextareaFieldAttributes
			]}
			routePrefix="cs-form"
		>
			<CSD.Heading>Intro</CSD.Heading>
			<CSD.Section>
				<CSD.Text>Standard form fields are used for capturing user input and displaying values.</CSD.Text>
				<CSD.Text>All field components are created using `cs-ui-components` library.</CSD.Text>
				<CSD.Text>Standard form fields are defined in CSForm's data prop as part of the section object's `fields` array.</CSD.Text>
				<CSD.Text>CSForm distinguishes several types of fields and each field is defined by `fieldType` property.</CSD.Text>
				<CSD.Text>The table below shows which component will be rendered for each `fieldType` property value:</CSD.Text>
				<CSDataTable
					columns={[
						{
							key: 'fieldType',
							header: 'fieldType Value'
						}, {
							key: 'component',
							header: 'Corresponding Component'
						}
					]}
					rows={[
						{
							key: 'checkbox',
							data: {
								fieldType: 'CHECKBOX',
								component: 'CSFormCheckboxField'
							}
						}, {
							key: 'custom-select',
							data: {
								fieldType: 'CUSTOM-SELECT',
								component: 'CSFormCustomSelectField'
							}
						}, {
							key: 'date',
							data: {
								fieldType: 'DATE',
								component: 'CSFormDateField'
							}
						}, {
							key: 'datetime',
							data: {
								fieldType: 'DATETIME',
								component: 'CSFormDateTimeField'
							}
						}, {
							key: 'lookup',
							data: {
								fieldType: 'LOOKUP',
								component: 'CSFormLookupField'
							}
						}, {
							key: 'number',
							data: {
								fieldType: 'NUMBER',
								component: 'CSFormNumberField'
							}
						}, {
							key: 'radio',
							data: {
								fieldType: 'RADIO',
								component: 'CSFormRadioField'
							}
						}, {
							key: 'select',
							data: {
								fieldType: 'SELECT',
								component: 'CSFormSelectField'
							}
						}, {
							key: 'text',
							data: {
								fieldType: 'TEXT',
								component: 'CSFormTextField'
							}
						}, {
							key: 'textarea',
							data: {
								fieldType: 'TEXTAREA',
								component: 'CSFormTextareaField'
							}
						}, {
							key: 'toggle',
							data: {
								fieldType: 'TOGGLE',
								component: 'CSFormToggleField'
							}
						}
					]}
				/>
				<CSD.Text><br />Each object in the `fields` array consists of certain properties.</CSD.Text>
				<CSD.Text>Standard form fields properties are split into two groups: common properties and field type specific properties.</CSD.Text>
			</CSD.Section>
			<CSD.Heading>Common Properties</CSD.Heading>
			<CSD.Section>
				<CSD.Text>Form field object consists of properties which are common to all fields, regardless of `fieldType` property value. </CSD.Text>
				<CSD.Text>Common properites that are required for each field are `fieldType`, `name` and `label`.</CSD.Text>
				<CSD.Text>Each of the common properties is represented in below previews.</CSD.Text>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Required Properties</CSD.Heading>
				<CSD.Text>Common properites that are required for each field are `fieldType`, `name` and `label`.</CSD.Text>
				<CSD.Text>
					`fieldType` determines what kind of form field component will be rendered.
					Defining `fieldType` enables access to properties which are specific to the type of the form field component.
				</CSD.Text>
				<CSD.Text>`name` property is used as a unique identifier for the form field. It’s also used for setting input name attribute.</CSD.Text>
				<CSD.Text>`label` property will display a label above the actual field.</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									fieldType: 'NUMBER',
									name: 'number-1',
									label: 'Number field',
								}, {
									fieldType: 'TEXT',
									name: 'text-1',
									label: 'Text field',
								}, {
									fieldType: 'TEXTAREA',
									label: 'Textarea field',
									name: 'textarea-1',
								}, {
									fieldType: 'TOGGLE',
									label: 'Toggle field',
									name: 'toggle-1',
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
									fieldType: 'DATE',
									label: 'Date field',
									name: 'date-2',
								}, {
									fieldType: 'CHECKBOX',
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
				<CSD.Heading level={2}>Layout properties</CSD.Heading>
				<CSD.Text>`grow` and `showInNewLine` properties are used for changing the field's layout by defining it's width or setting field to new line.</CSD.Text>
				<CSD.Text>
					`grow` property will determine how many columns will one form field take in a single row.
					Defining grow prop can sometimes cause layout shifts since it depends on a defined columnNumber prop and number of fields in one row.
				</CSD.Text>
				<CSD.Text>`showInNewLine` property will disregard the natural flow of form columns and will render that form field as a first field in a new line.</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									fieldType: 'TEXT',
									name: 'text-1',
									label: 'Text field',
									grow: 2
								}, {
									fieldType: 'NUMBER',
									name: 'number-1',
									label: 'Number field',
								}, {
									fieldType: 'TEXTAREA',
									label: 'Textarea field',
									name: 'textarea-1',
									showInNewLine: true,
								}, {
									fieldType: 'TEXT',
									name: 'text-1-1',
									label: 'Text field',
								}]}
						/>
					`}
				>
					<CSForm data={layoutPropsData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Custom Data Properties</CSD.Heading>
				<CSD.Text>`actions` and `icons` array properties allow renedring form field custom items such as icons, tooltips and buttons for invoking custom code.</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									fieldType: 'NUMBER',
									name: 'number-1',
									label: 'Number field',
									actions: [{
										action: () => alert('Delete option called'),
										icon: { iconName: 'delete' },
										labelHidden: true,
										size: 'small' as CSButtonSize,
										name: 'Delete'
									}, {
										action: () => alert('Add option called'),
										icon: { iconName: 'add' },
										labelHidden: true,
										size: 'small' as CSButtonSize,
										name: 'Add',
										getTooltip: {
											content: ['actions tooltip'],
											delay: 300,
											padding: '0.5rem',
											position: 'bottom-left' as CSTooltipPosition,
											stickyOnClick: true
										}
									}]
								}, {
									fieldType: 'LOOKUP',
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
									icons: [{
										iconName: 'cart'
									}, {
										iconName: 'tag',
										iconOrigin: 'cs' as CSIconOrigin,
										getTooltip: {
											content: ['icons tooltip'],
											delay: 300,
											maxWidth: '20rem',
											padding: '0.5rem',
											position: 'bottom-left' as CSTooltipPosition,
											stickyOnClick: true
										}
									}]
								}]
							}]}
						/>
					`}
				>
					<CSForm data={customOptionsData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Error and Helptext Display Properties</CSD.Heading>
				<CSD.Text>Displaying various field information can be achieved by setting `errorMessage` or `helpText` properties.</CSD.Text>
				<CSD.Text>`error` and `errorMessage` enable rendering error styles and displaying error messages relevant for certain fields.</CSD.Text>
				<CSD.Text>Both properties are designed to be used together do satisfy accessibility best practices.</CSD.Text>
				<CSD.Text>`helpText` property is used to display additional information in a form of a field tooltip.</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
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
									error: true,
									errorMessage: 'Account is invalid!'
								}, {
									fieldType: 'DATETIME',
									label: 'Datetime field',
									name: 'date-time-1',
									error: true,
									errorMessage: 'Select correct date!'
								}, {
									fieldType: 'TEXTAREA',
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
				<CSD.Text>`disabled`, `readOnly` and `required` properties represent the state of the field which indicates whether the field should be populated or not.</CSD.Text>
				<CSD.Text>By defining each of the properties, corresponding input field attribute will be set.</CSD.Text>
				<CSD.Text>To hide the field based on some condition `hidden` property can be defined.</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									fieldType: 'TOGGLE',
									name: 'toggle-1',
									label: 'Toggle field',
									hidden: true
								}, {
									fieldType: 'TEXT',
									name: 'text-1',
									label: 'Text field',
									disabled: true
								}, {
									fieldType: 'NUMBER',
									name: 'number-1',
									label: 'Number field',
									readOnly: true,
									value: 2
								}, {
									fieldType: 'TEXTAREA',
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
				<CSD.Text>Applying custom CSS styles can be accomplished by setting `styleClass` field property.</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									fieldType: 'RADIO',
									label: 'Radio field',
									name: 'radio-1',
									styleClass: 'csd-custom-br-mint',
									radioOptions: [{
										radioOptionValue: 'red',
										label: 'Red'
									}, {
										radioOptionValue: 'blue',
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
				<CSD.Text>`title` property sets the title attribute to a form field. It represents advisory information to the field it belongs to.</CSD.Text>
				<CSD.Text>Exception exists with `title` prop on radio fields - it can be set only on radio options, not radio field itself.</CSD.Text>
				<CSD.Text>`value` property specifies the value of the form field.</CSD.Text>
				<CSD.Text>
					Considering that the entire form is stateless and isn't managing any input data, `value` property of the desired field needs to be
					updated on every field change. This allows flexibility of form fields and form itself, since usually some values are updated conditionally with some external logic.
				</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									fieldType: 'TEXT',
									name: 'text-1',
									label: 'Text field',
									title: 'Text field title'
								}, {
									fieldType: 'NUMBER',
									name: 'number-1',
									label: 'Number field',
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
				<CSD.Text>Each of field objects has properties which are specific to the type of the field.</CSD.Text>
				<CSD.Text>Field type specific properties are accessible by defining desired type in `fieldType` property.</CSD.Text>
				<CSD.Text>Specific properties for each field type are listed below:</CSD.Text>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Checkbox Specific Properties</CSD.Heading>
				<CSD.Text>Checkbox field specific property is `indeterminate`.</CSD.Text>
				<CSD.Text>Details about `indeterminate` property can be found <CSD.Link path="../cs-ui/checkbox#CSCheckbox-indeterminate">here</CSD.Link>.</CSD.Text>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Custom Select Specific Properties</CSD.Heading>
				<CSD.Text>Custom select field specific properties are `multiselect`, `onClear`, `onSearch` and `options`.</CSD.Text>
				<CSD.Text>Details about each of the properties can be found here:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${customSelectPath}-selection`}>options</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${customSelectPath}-selection-multiselect`}>multiselect</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${customSelectPath}-selection`}>onClear</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${customSelectPath}-onSearch`}>onSearch</CSD.Link></CSD.ListItem>
				</CSD.List>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Date Specific Properties</CSD.Heading>
				<CSD.Text>Date field specific properties are `dateFormat` and `selected`.</CSD.Text>
				<CSD.Text>Details about each of the properties can be found here:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${datePath}-dateFormat`}>dateFormat</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${datePath}-selected`}>selected</CSD.Link></CSD.ListItem>
				</CSD.List>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Date-time Specific Properties</CSD.Heading>
				<CSD.Text>Date field specific properties are `dateFormat`, `selected`, `timeCaption`, `timeFormat` and `timeIntervals`.</CSD.Text>
				<CSD.Text>Details about each of the properties can be found here:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${dateTimePath}-dateFormat`}>dateFormat</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${dateTimePath}-selected`}>selected</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${dateTimePath}-timeCaption`}>timeCaption</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${dateTimePath}-timeFormat`}>timeFormat</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${dateTimePath}-timeIntervals`}>timeIntervals</CSD.Link></CSD.ListItem>
				</CSD.List>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Lookup Specific Properties</CSD.Heading>
				<CSD.Text>Lookup field consists of 3 groups of properties: common, client-mode and server-mode properties.</CSD.Text>
				<CSD.Text>Each group of properties are listed below and the details of each property can be found by clicking on the desired property in the list.</CSD.Text>
				<CSD.Text>Lookup field common properties:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${lookupPath}#base-usage`}>fieldToBeDisplayed</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${lookupPath}#base-usage`}>columns</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${lookupPath}#base-usage`}>mode</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${lookupPath}#selection`}>multiselect</CSD.Link></CSD.ListItem>
				</CSD.List>
				<CSD.Text>Lookup field client-mode properties:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${lookupPath}#displaying-options`}>options</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${lookupPath}#loading`}>loading</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${lookupPath}#search`}>searchBy</CSD.Link></CSD.ListItem>
				</CSD.List>
				<CSD.Text>Lookup field server-mode properties:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${lookupPath}#fetching-options`}>fetchOptions</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${lookupPath}#pagination`}>infiniteScroll</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${lookupPath}#search`}>minTermLength</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${lookupPath}#pagination`}>pageSize</CSD.Link></CSD.ListItem>
				</CSD.List>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Number Specific Properties</CSD.Heading>
				<CSD.Text>Number field specific properties are `max`, `min` and `useLocale`.</CSD.Text>
				<CSD.Text>Details about `min` and `max` properties can be found here:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${numberPath}-max`}>max</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${numberPath}-min`}>min</CSD.Link></CSD.ListItem>
				</CSD.List>
				<CSD.Text>`useLocale` property enables formatting of field value by defined form locale.</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									fieldType: 'NUMBER',
									name: 'number-1',
									label: 'Number field',
									useLocale: true,
									value: 100
								}, {
									fieldType: 'NUMBER',
									name: 'number-2',
									label: 'Number field',
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
				<CSD.Heading level={2}>Radio Specific Properties</CSD.Heading>
				<CSD.Text>Radio field specific property is `radioOptions`.</CSD.Text>
				<CSD.Text>`radioOptions` is an array prop which defines what options will be rendered as a part of grouped input radio elements</CSD.Text>
				<CSD.Text>Each option is defined by `label`, `radioOptionName` and `radioOptionValue` properties.</CSD.Text>
				<CSD.Text>Also, `readOnly`, `disabled` and `title` properties can be defined for each radio option.</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [{
									fieldType: 'RADIO',
									label: 'Select color:',
									name: 'radio-color',
									radioOptions: [{
										radioOptionValue: 'red',
										label: 'Red'
									}, {
										radioOptionValue: 'blue',
										label: 'Blue'
									}]
								}, {
									fieldType: 'RADIO',
									label: 'Select fruit:',
									name: 'radio-fruit',
									radioOptions: [{
										radioOptionValue: 'apple',
										label: 'Apple'
									}, {
										radioOptionValue: 'banana',
										label: 'Banana',
										disabled: true
									}]
								}, {
									fieldType: 'RADIO',
									label: 'Select drink:',
									name: 'radio-drink',
									radioOptions: [{
										radioOptionValue: 'cola',
										label: 'Coca-cola',
										readOnly: true
									}, {
										radioOptionValue: 'pepsi',
										label: 'Pepsi'
									}]
								}, {
									fieldType: 'RADIO',
									label: 'Select season:',
									name: 'radio-season',
									radioOptions: [{
										radioOptionValue: 'summer',
										label: 'Summer',
										title: 'Summer season'
									}, {
										radioOptionValue: 'winter',
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
				<CSD.Heading level={2}>Select Specific Properties</CSD.Heading>
				<CSD.Text>Select field specific property is `selectOptions`.</CSD.Text>
				<CSD.Text>`selectOptions` is an array prop which defines options available for selection.</CSD.Text>
				<CSD.Text>Each object in `selectOptions` array represents one option and it consists of 2 properties - `key` and `value`.</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								...
								fields: [
									{
										fieldType: 'SELECT',
										label: 'Select car',
										name: 'select-car',
										selectOptions: [{
											key: 'rimac',
											value: 'Rimac'
										}, {
											key: 'audi',
											value: 'Audi'
										}, {
											key: 'bmw',
											value: 'BMW'
										}]
									}
								]
							}]}
						/>
					`}
				>
					<CSForm data={selectPropsData} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Text Specific Properties</CSD.Heading>
				<CSD.Text>Text field specific property is `maxLength`.</CSD.Text>
				<CSD.Text>Details about `maxLength` property can be found <CSD.Link path="../cs-ui/input-text#CSInputText-maxLength">here</CSD.Link>.</CSD.Text>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Textarea Specific Properties</CSD.Heading>
				<CSD.Text>Textarea specific properties are `maxHeight` and `rows`.</CSD.Text>
				<CSD.Text>Details about each of the properties can be found here:</CSD.Text>
				<CSD.List>
					<CSD.ListItem><CSD.Link path={`${textareaPath}-maxHeight`}>maxHeight</CSD.Link></CSD.ListItem>
					<CSD.ListItem><CSD.Link path={`${textareaPath}-rows`}>rows</CSD.Link></CSD.ListItem>
				</CSD.List>
			</CSD.Section>
		</CSD.Page>
	);
};

export default CSFormStandardFormFieldsPreview;