import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSInputText } from '@cloudsense/cs-ui-components';

interface CSInputTextPreviewState {
	focused: boolean;
}

class CSInputTextPreview extends React.Component<{}, CSInputTextPreviewState> {
	state = { focused: false };

	handleChange = () => alert('Value has changed.');
	handleBlur = () => alert('Input has lost focus.');
	handleFocus = () => {
		this.setState(prevState => {
			if (!prevState.focused) {
				alert('Input has gained focus.');
			}
			return { focused: !prevState.focused };
		});
	}

	getDoc() {
		const json = {
			name: 'Input Text',
			usage: 'Text inputs are used for freeform data entry.',
			accessible: 'yes',
			examples: [
				{
					propName: 'value',
					customText: '',
					variations: [
						{
							component:
								<CSInputText label="Type here:" value="Enter name" />
						}
					]
				},
				{
					propName: 'placeholder',
					variations: [
						{
							component:
								<CSInputText label="Type here:" placeholder="Enter name" />
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSInputText label="Type here:" id="name" />
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							component:
								<CSInputText label="Type here:" />
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
								<CSInputText label="Type here:" labelHidden />
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
								<CSInputText label="Type here:" labelTitle />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							component:
								<CSInputText label="Type here:" helpText="Help text example" />
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
								<CSInputText label="Type here:" helpText="Help text example" tooltipPosition="top-right" />
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							component:
								<CSInputText label="Type here:" helpText="Help text example" tooltipPosition="top-left" />
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							component:
								<CSInputText label="Type here:" helpText="Help text example" tooltipPosition="bottom-right" />
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							component:
								<CSInputText label="Type here:" helpText="Help text example" tooltipPosition="bottom-left" />
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
								<CSInputText label="Type here:" disabled />
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
								<CSInputText label="Type here:" hidden />
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
								<CSInputText label="Type here:" readOnly value="value" />
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
								<CSInputText required label="Enter job role" helpText="Help text example" tooltipPosition="top-left" />
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
								<CSInputText label="Type here:" error />
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							component:
								<CSInputText label="Enter value:" error errorMessage="Error message!" />
						}
					]
				},
				{
					propName: 'maxLength',
					variations: [
						{
							component:
								<CSInputText label="Enter value:" maxLength={10} />
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
								<CSInputText label="Enter value:" borderType="square" />
						}
					]
				},
				{
					propName: 'onBlur',
					customText: '',
					variations: [
						{
							component:
								<CSInputText label="Enter value:" onBlur={this.handleBlur} />
						}
					]
				},
				{
					propName: 'onChange',
					customText: '',
					variations: [
						{
							component:
								<CSInputText label="Enter value:" onChange={this.handleChange} />
						}
					]
				},
				{
					propName: 'onFocus',
					customText: '',
					variations: [
						{
							component:
								<CSInputText label="Enter value:" onFocus={this.handleFocus} />
						}
					]
				},
				{
					propName: 'name',
					customText: '',
					variations: [
						{
							component:
								<CSInputText label="Enter value:" name="Input text" />
						}
					]
				},
				{
					propName: 'title',
					customText: '',
					variations: [
						{
							component:
								<CSInputText label="Enter value:" name="Input text" title="Example title" />
						}
					]
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							component:
								<CSInputText label="Type here:" className="custom-class" />
						}
					]
				}
			],
			properties: [
				{
					name: 'borderType',
					customTypes: [{
						name: 'CSInputTextBorderType',
						types: ['\'round\'', '\'square\'']
					}],
					default: '\'round\'',
					description: 'Set a border style for the text input.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the text input.'
				}, {
					name: 'disabled',
					types: ['boolean'],
					default: 'false',
					description: 'Disable the text input.'
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
					description: 'Set the error message or messages for the text input.'
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
					description: 'Set the ID for the text input.'
				}, {
					name: 'label',
					required: true,
					types: ['string'],
					description: 'Set the text input label.'
				}, {
					name: 'labelHidden',
					types: ['boolean'],
					default: 'false',
					description: 'Hide the text input label.'
				}, {
					name: 'labelTitle',
					types: ['boolean'],
					description: 'Control whether to set the title attribute.'
				}, {
					name: 'maxLength',
					types: ['number'],
					description: 'Set the maximum length of the value.'
				}, {
					name: 'name',
					types: ['string'],
					description: 'Set the text input name attribute.'
				}, {
					name: 'onBlur',
					types: ['(event) => void'],
					description: 'Handler method for the blur event.'
				}, {
					name: 'onChange',
					types: ['(event) => any'],
					description: 'Handler method for the change event.'
				}, {
					name: 'onFocus',
					types: ['(event) => any'],
					description: 'Handler method for the focus event.'
				}, {
					name: 'placeholder',
					types: ['string'],
					description: 'Set a text input placeholder.'
				}, {
					name: 'readOnly',
					types: ['boolean'],
					default: 'false',
					description: 'Control whether to apply the readonly attribute.'
				}, {
					name: 'required',
					types: ['boolean'],
					default: 'false',
					description: 'Make the text input required.'
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
					description: 'Set the tooltip position for the text input.'
				}, {
					name: 'value',
					types: ['string'],
					description: 'Set the text input value.'
				}, {
					name: 'title',
					types: ['string'],
					description: 'Set the text input title.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the text input.'
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
							structure: [
								'HTML <input type="text">'
							],
							properties: [
								'aria-invalid',
								'aria-required',
								'aria-labelledby - associate field with label',
								'role="textbox" - implicit with input'
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

export default CSInputTextPreview;
