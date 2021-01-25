import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSTextarea } from '@cloudsense/cs-ui-components';

class CSTextareaPreview extends React.Component {
	handleChange = () => alert('Value has changed.');

	getDoc() {
		const json = {
			name: 'Textarea',
			usage: 'Textarea inputs are used for freeform data entry.',
			accessible: 'yes',
			examples: [
				{
					propName: 'value',
					customText: '',
					variations: [
						{
							component:
								<CSTextarea label="Enter message:" value="Message" />
						}
					]
				},
				{
					propName: 'placeholder',
					customText: '',
					variations: [
						{
							component:
								<CSTextarea label="Enter message:" placeholder="Message" />
						}
					]
				},
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							component:
								<CSTextarea label="Enter message:" id="message" />
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							component:
								<CSTextarea label="Enter message:" />
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
								<CSTextarea label="Enter message:" labelHidden />

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
								<CSTextarea label="Enter message:" labelTitle />
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
								<CSTextarea label="Enter message:" borderType="square" />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							component:
								<CSTextarea label="Enter message:" helpText="Help text example" />
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
								<CSTextarea label="Enter message:" helpText="Help text example" tooltipPosition="top-right" />
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							component:
								<CSTextarea label="Enter message:" helpText="Help text example" tooltipPosition="top-left" />
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							component:
								<CSTextarea label="Enter message:" helpText="Help text example" tooltipPosition="bottom-right" />
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							component:
								<CSTextarea label="Enter message:" helpText="Help text example" tooltipPosition="bottom-left" />
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
								<CSTextarea label="Enter message:" disabled />
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
								<CSTextarea label="Enter message:" hidden />
						}
					]
				},
				{
					propName: 'readOnly',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSTextarea label="Enter message:" readOnly value="value" />
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
								<CSTextarea required label="Enter message:" />
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
								<CSTextarea label="Enter message:" error />
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							component:
								<CSTextarea label="Enter value:" error errorMessage="Error message!" />
						}
					]
				},
				{
					propName: 'rows',
					variations: [
						{
							variationName: ['10'],
							quickLink: '10',
							component:
								<CSTextarea label="Enter message:" rows={10} />
						}
					]
				},
				{
					propName: 'maxHeight',
					variations: [
						{
							variationName: ['160px'],
							quickLink: '160px',
							component:
								<CSTextarea label="Enter message:" maxHeight="200px" />
						},
						{
							variationName: ['5rem'],
							quickLink: '5rem',
							component:
								<CSTextarea label="Enter message:" maxHeight="5rem" />
						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							component:
								<CSTextarea label="Enter message:" onChange={this.handleChange} />
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component:
								<CSTextarea label="Enter message:" title="This is a title" />
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
								<CSTextarea label="Enter message:" className="custom-class" />
						}
					]
				}
			],
			properties: [
				{
					name: 'borderType',
					customTypes: [{
						name: 'CSTextareaBorderType',
						types: ['\'round\'', '\'square\'']
					}],
					default: '\'round\'',
					description: 'Set a border style for the textarea.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the textarea.'
				}, {
					name: 'disabled',
					types: ['boolean'],
					default: 'false',
					description: 'Disable the textarea.'
				}, {
					name: 'error',
					types: ['boolean'],
					description: 'Toggle the error state.'
				}, {
					name: 'errorMessage',
					customTypes: [{
						name: 'CSFieldErrorMsgType',
						types: ['string', 'Array<string>']
					}],
					description: 'Set the error message or messages for the textarea.'
				}, {
					name: 'helpText',
					types: ['string'],
					description: 'Set the text to be displayed in the tooltip.'
				}, {
					name: 'hidden',
					types: ['boolean'],
					default: 'false',
					description: 'Control the hidden attribute.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the textarea.'
				}, {
					name: 'label',
					required: true,
					types: ['string'],
					description: 'Set the textarea label.'
				}, {
					name: 'labelHidden',
					types: ['boolean'],
					default: 'false',
					description: 'Hide the textarea label.'
				}, {
					name: 'labelTitle',
					types: ['boolean'],
					description: 'Control whether to set the title attribute.'
				}, {
					name: 'maxHeight',
					types: ['string'],
					description: 'Set the max-height for the textarea. (eg. 200px, 20rem, etc.)'
				}, {
					name: 'onChange',
					types: ['(event) => any'],
					description: 'Handler method for the change event.'
				}, {
					name: 'placeholder',
					types: ['string'],
					description: 'Set a textarea placeholder.'
				}, {
					name: 'readOnly',
					types: ['boolean'],
					default: 'false',
					description: 'Control whether to apply the readonly attribute.'
				}, {
					name: 'required',
					types: ['boolean'],
					default: 'false',
					description: 'Make the textarea required.'
				}, {
					name: 'rows',
					types: ['number'],
					description: 'Set how many rows the textarea defaults to.'
				}, {
					name: 'tooltipPosition',
					customTypes: [{
						name: 'CSTooltipPosition',
						types: [
							'\'bottom-right\'',
							'\'bottom-left\'',
							'\'top-right\'',
							'\'top-left\'',
							'\'top-center\'',
							'\'bottom-center\'',
							'\'right-top\'',
							'\'right-center\'',
							'\'right-bottom\'',
							'\'left-top\'',
							'\'left-center\'',
							'\'left-bottom\''
						]
					}],
					description: 'Set the tooltip position for the textarea.'
				}, {
					name: 'value',
					types: ['string'],
					description: 'Set the textarea value.'
				}, {
					name: 'title',
					types: ['string'],
					description: 'Set the textarea title.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the textarea.'
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
						'3.3.1',
						'3.3.2',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'HTML <textarea>'
							],
							properties: [
								'aria-labelledby - associate field with label',
								'aria-invalid',
								'aria-required',
								'role="textbox" - implicit with input',
								'aria-multiline="true" - implicit with input',
								'contenteditable  - implicit with input'
							],
							styling: [
								'Focus state styles'
							],
							keyboardOperability: [
								'OOTB focusable'
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

export default CSTextareaPreview;
