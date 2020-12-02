import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSLookupField, CSAlert } from '@cloudsense/cs-ui-components';

class CSLookupFieldPreview extends React.Component {

	getDoc() {

		const testArray = () => {
			return ([
				{ Id: 1, Account: 'Acme', Industry: 'Manufacturing' },
				{ Id: 2, Account: 'Global Media', Industry: 'Media' },
				{ Id: 3, Account: 'Salesforce', Industry: 'Technology' },
				{ Id: 4, Account: 'Elisa', Industry: 'Telecommunications' }
			]);
		};

		const json = {
			name: 'Lookup Field',
			usage: 'Lookup is an autocomplete combobox that will search against a database object',
			accessible: 'no',
			examples: [
				{
					propName: 'id',
					customText: '',
					variations: [
						{
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
					propName: 'labelHidden',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSLookupField
									label="Account"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
									labelHidden
								/>
						}
					]
				},
				{
					propName: 'labelTitle',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSLookupField
									label="Account"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
									labelTitle
								/>
						}
					]
				},
				{
					propName: 'loading',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSLookupField
									label="Account"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
									loading
								/>
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
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
					alert: {
						variant: 'info',
						text: 'Component in error state should always contain associated error message to satisfy accessibility best practices!'
					},
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
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
					propName: 'title',
					variations: [
						{
							component:
								<CSLookupField
									label="Account"
									fetchLookupOptions={testArray}
									fieldToBeDisplayed="Account"
									title="This is a title"
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
					propertyName: 'labelHidden',
					description: 'Logic for visibility of the label',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'labelTitle',
					description: 'Logic for label title attribute',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'loading',
					description: 'Renders spinner with animation instead of dropdown arrow. Used for loading fetched data.',
					options: [
						'false',
						'true'
					]
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
					propertyName: 'title',
					description: 'Title to display'
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
				},
				{
					propertyName: 'value',
					description: 'Search term value'
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.3.1',
						'1.4.1',
						'1.4.4',
						'2.1.1',
						'2.1.2',
						'2.4.7',
						'2.5.3',
						'3.2.1',
						'3.2.2',
						'3.3.1',
						'3.3.2',
						'4.1.2'
					],
					requirements: [
						{
							properties: [
								'aria-invalid',
								'aria-required',
								'aria-labelledby - associate field with label',
								'results role="grid"',
								'child role="rowgroup"'
							],
							styling: [
								'Focus state styles'
							],
							keyboardOperability: [
								'Should be or hiyaaa',
								'(missing role="cell, keyboard operable")'
							]
						}
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
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<CSAlert variant="warning" text="This component is under construction." />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component]} />
					<PreviewAccessibility components={[component]} />
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
