import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';
import PreviewAccessibility from '../PreviewAccessibility';

import { CSCustomSelect, CSAlert } from '@cloudsense/cs-ui-components';

class CSCustomSelectPreview extends React.Component {
	handleSelectChange = (event: any) => alert(`Selected items: ${event}`);
	handleChange = () => alert('Value has changed.');

	getDoc() {
		const json = {
			name: 'Custom Select',
			usage: 'Select element presents a menu of options.',
			accessible: 'no',
			examples: [
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							component:
								<CSCustomSelect label="Choose letter" id="letter" optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							component:
								<CSCustomSelect label="Choose color" optionsList={['Red', 'Blue', 'Green']} />
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
								<CSCustomSelect label="Choose color" optionsList={['Red', 'Blue', 'Green']} labelHidden />
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
								<CSCustomSelect label="Choose color" optionsList={['Red', 'Blue', 'Green']} labelTitle />
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
								<CSCustomSelect label="Choose letter" borderType="square" optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							component:
								<CSCustomSelect label="Choose letter" helpText="Help text example" tooltipPosition="bottom-right" optionsList={['A', 'B', 'C']} />
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
								<CSCustomSelect label="Choose letter" helpText="Help text example" tooltipPosition="top-right" optionsList={['A', 'B', 'C']} />
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							component:
								<CSCustomSelect label="Choose letter" helpText="Help text example" tooltipPosition="top-left" optionsList={['A', 'B', 'C']} />
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							component:
								<CSCustomSelect label="Choose letter" helpText="Help text example" tooltipPosition="bottom-right" optionsList={['A', 'B', 'C']} />
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							component:
								<CSCustomSelect label="Choose letter" helpText="Help text example" tooltipPosition="bottom-left" optionsList={['A', 'B', 'C']} />
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
								<CSCustomSelect label="Choose letter" disabled optionsList={['A', 'B', 'C']} />
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
								<CSCustomSelect label="Choose letter" hidden optionsList={['A', 'B', 'C']} />
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
								<CSCustomSelect label="Choose letter" required optionsList={['A', 'B', 'C']} />
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
								<CSCustomSelect label="Choose letter" error optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							component:
								<CSCustomSelect label="Choose letter" error errorMessage="Term not found" optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component:
								<CSCustomSelect label="Choose letter" optionsList={['A', 'B', 'C']} title="This is a title" />
						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							component:
								<CSCustomSelect label="Choose letter" optionsList={['A', 'B', 'C']} onChange={this.handleChange} />
						}
					]
				},
				{
					propName: 'multiselect',
					variations: [
						{
							component:
								<CSCustomSelect label="Choose letter" optionsList={['A', 'B', 'C']} multiselect />
						}
					]
				},
				{
					propName: 'onSelectChange',
					variations: [
						{
							component:
								<CSCustomSelect label="Choose letter" optionsList={['A', 'B', 'C']} multiselect onSelectChange={this.handleSelectChange} />
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
								<CSCustomSelect label="Choose letter" className="custom-class" optionsList={['A', 'B', 'C']} />
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'borderType',
					description: 'Select border type',
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
					description: 'Error text message'
				},
				{
					propertyName: 'helpText',
					description: 'Select help text for tooltip display'
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
					description: 'Select id value'
				},
				{
					propertyName: 'label',
					description: 'Select label text to display'
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
					propertyName: 'multiselect',
					description: 'Allows multiple option selection',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'onChange',
					description: 'Logic for input field onChange event'
				},
				{
					propertyName: 'onSelectChange',
					description: 'Logic for event triggered when one of the multiple items is selected or unselected'
				},
				{
					propertyName: 'optionsList',
					description: 'Options in the select dropdown'
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
					description: 'Select tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				}
			],
			accessibility: [
				{
					criteriaList: [
						'1.3.1',
						'1.4.1',
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
							structure: [
								'HTML <input type="text">'
							],
							properties: [
								'aria-labelledby - associate field with label',
								'aria-expanded'
							],
							styling: [
								'Focus state styles'
							],
							keyboardOperability: [
								'Enter opens dropdown.',
								'Escape closes dropdown'
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
					<CSAlert variant="warning" text="This component is under construction and should not be used." />
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

export default CSCustomSelectPreview;
