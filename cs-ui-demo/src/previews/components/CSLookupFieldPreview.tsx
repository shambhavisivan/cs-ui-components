import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSLookupField} from '@cloudsense/cs-ui-components';

class CSLookupFieldPreview extends React.Component {

	getDoc() {

		const testArray = () => {
			return ([
				{Id: 1, Account: 'Acme', Industry: 'Manufacturing'},
				{Id: 2, Account: 'Global Media', Industry: 'Media'},
				{Id: 3, Account: 'Salesforce', Industry: 'Technology'},
				{Id: 4, Account: 'Elisa', Industry: 'Telecommunications'}
			]);
		};

		const json = {
			name: 'Lookup Field',
			usage: 'Lookup is an autocomplete combobox that will search against a database object',
			examples: [
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							string: '',
							component:
							<CSLookupField
								label="Account"
								id="Accounts"
								fetchLookupOptions={testArray}
								fieldToBeDisplayed="Account"
							/>
						}
					]
				},
				{
					propName: 'placeholder',
					customText: '',
					variations: [
						{
							string: '',
							component:
							<CSLookupField
								label="Account"
								fetchLookupOptions={testArray}
								fieldToBeDisplayed="Account"
								placeholder="Search..."
							/>
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							string: '',
							component:
								<CSLookupField
									label="Account"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
								/>
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							string: '',
							component:
								<CSLookupField
									label="Account"
									helpText="Help text example"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
								/>
						}
					]
				},
				{
					propName: 'tooltipPosition',
					variations: [
						{
							variationName: ['top-right'],
							quickLink: 'top-right',
							string: '',
							component:
								<CSLookupField
									label="Account"
									helpText="Help text example"
									tooltipPosition="top-right"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
								/>
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							string: '',
							component:
								<CSLookupField
									label="Account"
									helpText="Help text example"
									tooltipPosition="top-left"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
								/>
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							string: '',
							component:
								<CSLookupField
									label="Account"
									helpText="Help text example"
									tooltipPosition="bottom-right"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
								/>
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							string: '',
							component:
								<CSLookupField
									label="Account"
									helpText="Help text example"
									tooltipPosition="bottom-left"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
								/>
						}
					]
				},
				{
					propName: 'disabled',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSLookupField
									label="Account"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
									disabled
								/>
						}
					]
				},
				{
					propName: 'hidden',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSLookupField
									label="Account"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
									hidden
								/>
						}
					]
				},
				{
					propName: 'required',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSLookupField
									required
									label="Account"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
								/>
						}
					]
				},
				{
					propName: 'fetchLookupOptions',
					variations: [
						{
							string: '',
							component:
								<CSLookupField
									label="Account"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
								/>
						}
					]
				},
				{
					propName: 'fieldToBeDisplayed',
					variations: [
						{
							variationName: ['Account'],
							quickLink: 'Account',
							string: '',
							component:
								<CSLookupField
									label="Account"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
								/>
						},
						{
							variationName: ['Industry'],
							quickLink: 'Industry',
							string: '',
							component:
								<CSLookupField
									label="Industry"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Industry"
								/>
						},
						{
							variationName: ['Id'],
							quickLink: 'Id',
							string: '',
							component:
								<CSLookupField
									label="Id"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Id"
								/>
						}
					]
				},
				{
					propName: 'error',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSLookupField
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
									label="Account"
									error
								/>
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							string: '',
							component:
								<CSLookupField
									label="Account"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
									error
									errorMessage="Error message!"
								/>
						}
					]
				},
				{
					propName: 'borderType',
					variations: [
						{
							variationName: ['square'],
							quickLink: 'square',
							string: '',
							component:
								<CSLookupField
									label="Account"
									borderType="square"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
								/>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							string: '',
							component:
								<CSLookupField
									label="Account"
									className="custom-class"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
								/>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'borderType',
					description: 'Lookup field border type',
					options: [
						'round',
						'square'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'error',
					description: 'Error state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'errorMessage',
					description: 'Error message text'
				},
				{
					propertyName: 'fetchLookupOptions',
					description: 'Array of objects which will be shown in dropdown'
				},
				{
					propertyName: 'fieldToBeDisplayed',
					description: 'Object value of the defined field(key) which will be displayed when the option is selected'
				},
				{
					propertyName: 'helpText',
					description: 'Lookup field help text for tooltip display'
				},
				{
					propertyName: 'hidden',
					description: 'Hidden state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'id',
					description: 'Lookup field id value'
				},
				{
					propertyName: 'label',
					description: 'Lookup field  text to display'
				},
				{
					propertyName: 'placeholder',
					description: 'Lookup field  placeholder to display'
				},
				{
					propertyName: 'required',
					description: 'Required state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Lookup field tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				}
			]
		};

		for (const example of json.examples) {
			for (const variation of example.variations) {
				(variation as any).string = jsxToString(variation.component);
			}
		}

		return json;
	}

	render() {
		const component = this.getDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component]} />
				</div>
				<div className="prop-sidebar">
					<h3>Quick Links</h3>
					<PreviewLinks component={component} />
				</div>
			</>
		);
	}
}

export default CSLookupFieldPreview;