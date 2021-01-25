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
					name: 'borderType',
					customTypes: [{
						name: 'CSCustomSelectBorderType',
						types: ['\'round\'', '\'square\'']
					}],
					default: '\'round\'',
					description: 'Set the border type.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the custom select.'
				}, {
					name: 'disabled',
					types: ['boolean'],
					default: 'false',
					description: 'Disable the custom select.'
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
					description: 'Set the error message or messages for the custom select.'
				}, {
					name: 'helpText',
					types: ['string'],
					description: 'Set the text to be displayed for the tooltip.'
				}, {
					name: 'hidden',
					types: ['boolean'],
					default: 'false',
					description: 'Control the hidden attribute.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the custom select.'
				}, {
					name: 'label',
					required: true,
					types: ['string'],
					description: 'Set the custom select label.'
				}, {
					name: 'labelHidden',
					types: ['boolean'],
					default: 'false',
					description: 'Hide the custom select label.'
				}, {
					name: 'labelTitle',
					types: ['boolean'],
					description: 'Control whether to set the title attribute.'
				}, {
					name: 'multiselect',
					types: ['boolean'],
					default: 'false',
					description: 'Allow selection of multiple options.'
				}, {
					name: 'onChange',
					types: ['(event) => any'],
					description: 'Handler method for the change event.'
				}, {
					name: 'onSelectChange',
					types: ['(event) => void'],
					description: 'Handler method for when the selection is changed (works with multiselect only).'
				}, {
					name: 'optionsList',
					types: ['Array<any>'],
					description: 'Define the options in the custom select dropdown.'
				}, {
					name: 'required',
					types: ['boolean'],
					default: 'false',
					description: 'Make the custom select required.'
				}, {
					name: 'title',
					types: ['string'],
					description: 'Set the custom select title.'
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
					description: 'Set the tooltip position for the custom select.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the custom select input.'
				}
			],
			accessibility: [
				{
					criterionList: [
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
