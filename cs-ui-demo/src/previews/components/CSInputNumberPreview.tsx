import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSInputNumber } from '@cloudsense/cs-ui-components';

interface CSInputNumberPreviewState {
	focused: boolean;
}

class CSInputNumberPreview extends React.Component<{}, CSInputNumberPreviewState> {
	state = { focused: false };

	handleChange = () => alert('Value has changed.');
	handleBlur = () => alert('Input has lost focus.');
	handleKeyDown = (event: any) => alert(`Key ${event.key} has been pressed.`);
	handlePaste = () => alert('Value has been pasted.');
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
			name: 'Input Number',
			usage: 'Number inputs are used for number entry.',
			accessible: 'yes',
			examples: [
				{
					propName: 'type',
					customText: '',
					variations: [
						{
							variationName: ['number'],
							component:
								<CSInputNumber label="Enter value:" type="number" />
						},
						{
							variationName: ['text'],
							component:
								<CSInputNumber label="Enter value:" type="text" />
						}
					]
				},
				{
					propName: 'value',
					customText: '',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" value="1" />
						}
					]
				},
				{
					propName: 'placeholder',
					customText: '',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" placeholder="Placeholder text" />
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" id="quantity" />
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" />
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
								<CSInputNumber label="Enter value:" labelHidden />
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
								<CSInputNumber label="Enter value:" labelTitle />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" helpText="Help text example" />
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
								<CSInputNumber label="Enter value:" helpText="Help text example" tooltipPosition="top-right" />
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							component:
								<CSInputNumber label="Enter value:" helpText="Help text example" tooltipPosition="top-left" />
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							component:
								<CSInputNumber label="Enter value:" helpText="Help text example" tooltipPosition="bottom-right" />
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							component:
								<CSInputNumber label="Enter value:" helpText="Help text example" tooltipPosition="bottom-left" />
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
								<CSInputNumber label="Enter value:" disabled />
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
								<CSInputNumber label="Enter value:" hidden />
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
								<CSInputNumber label="Enter value:" readOnly value={12345} />
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
								<CSInputNumber required label="Enter value:" />
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
								<CSInputNumber label="Enter value:" error />
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							component:
								<CSInputNumber label="Enter value:" error errorMessage="Error message!" />
						}
					]
				},
				{
					propName: 'min',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" min="1" />
						}
					]
				},
				{
					propName: 'max',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" max="5" />
						}
					]
				},
				{
					propName: 'maxLength',
					variations: [
						{
							variationText: ['type="text"'],
							component:
								<CSInputNumber label="Enter value:" type="text" maxLength={10} />
						}
					]
				},
				{
					propName: 'step',
					quickLink: 'step',
					variations: [
						{
							variationName: ['1'],
							component:
								<CSInputNumber label="Enter value:" type="number" step="1" />
						},
						{
							variationName: ['0.01'],
							component:
								<CSInputNumber label="Enter value:" type="number" step="0.01" />
						},
						{
							variationName: ['0.001'],
							component:
								<CSInputNumber label="Enter value:" type="number" step="0.001" />
						},
						{
							variationName: ['any'],
							component:
								<CSInputNumber label="Enter value:" type="number" step="any" />
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
								<CSInputNumber label="Enter value:" borderType="square" />
						}
					]
				},
				{
					propName: 'hideSpinner',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSInputNumber label="Enter value:" hideSpinner />
						}
					]
				},
				{
					propName: 'onBlur',
					customText: '',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" onBlur={this.handleBlur} />
						}
					]
				},
				{
					propName: 'onChange',
					customText: '',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" onChange={this.handleChange} />
						}
					]
				},
				{
					propName: 'onFocus',
					customText: '',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" onFocus={this.handleFocus} />
						}
					]
				},
				{
					propName: 'onKeyDown',
					customText: '',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" onKeyDown={this.handleKeyDown} />
						}
					]
				},
				{
					propName: 'onPaste',
					customText: '',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" onPaste={this.handlePaste} />
						}
					]
				},
				{
					propName: 'name',
					customText: '',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" name="Input number" />
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" title="This is a title" />
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
								<CSInputNumber label="Enter value:" className="custom-class" />
						}
					]
				}
			],
			properties: [
				{
					name: 'borderType',
					customTypes: [{
						name: 'CSInputNumberBorderType',
						types: ['\'round\'', '\'square\'']
					}],
					default: '\'round\'',
					description: 'Set a border style for the number input.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the number input.'
				}, {
					name: 'disabled',
					types: ['boolean'],
					default: 'false',
					description: 'Disable the number input.'
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
					description: 'Set the error message or messages for the number input.'
				}, {
					name: 'hidden',
					types: ['boolean'],
					default: 'false',
					description: 'Control the hidden attribute.'
				}, {
					name: 'helpText',
					types: ['string'],
					description: 'Set the text to be displayed in the tooltip.'
				}, {
					name: 'hideSpinner',
					types: ['boolean'],
					default: 'false',
					description: 'Determine whether the spinner should appear.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the number input.'
				}, {
					name: 'label',
					required: true,
					types: ['string'],
					description: 'Set the file input label.'
				}, {
					name: 'labelHidden',
					types: ['boolean'],
					default: 'false',
					description: 'Hide the file input label.'
				}, {
					name: 'labelTitle',
					types: ['boolean'],
					description: 'Control whether to set the title attribute.'
				}, {
					name: 'max',
					types: ['any'],
					description: 'Set a max value for the number input.'
				}, {
					name: 'maxLength',
					types: ['number'],
					description: 'Set the maximum length of the value (can be used only with type="text").'
				}, {
					name: 'step',
					types: ['string'],
					description: 'Set which interval to use when using up and down arrows to adjust the value.'
				}, {
					name: 'min',
					types: ['any'],
					description: 'Set a min value for the number input.'
				}, {
					name: 'name',
					types: ['string'],
					description: 'Set the number input name attribute.'
				}, {
					name: 'onBlur',
					types: ['(event) => void'],
					description: 'Handler method for the blur event.'
				}, {
					name: 'onChange',
					types: ['(value) => any'],
					description: 'Handler method for the change event.'
				}, {
					name: 'onFocus',
					types: ['(event) => any'],
					description: 'Handler method for the focus event.'
				}, {
					name: 'onKeyDown',
					types: ['(event) => void'],
					description: 'Handler method for the keydown event.'
				}, {
					name: 'onPaste',
					types: ['(event) => void'],
					description: 'Handler method for the paste event.'
				}, {
					name: 'placeholder',
					types: ['string'],
					description: 'Set a number input placeholder.'
				}, {
					name: 'readOnly',
					types: ['boolean'],
					default: 'false',
					description: 'Control whether to apply the readonly attribute.'
				}, {
					name: 'required',
					types: ['boolean'],
					default: 'false',
					description: 'Make the number input required.'
				}, {
					name: 'title',
					types: ['string'],
					description: 'Set the number input title.'
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
					description: 'Set the tooltip position for the number input.'
				}, {
					name: 'type',
					types: ['string'],
					default: '\'number\'',
					description: 'Set the number input field type.'
				}, {
					name: 'value',
					types: ['any'],
					description: 'Set the number input default value.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the number input.'
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
						'3.3.2'
					],
					requirements: [
						{
							structure: [
								'HTML <input type="number">'
							],
							properties: [
								'aria-invalid',
								'aria-required',
								'aria-labelledby - associate field with label',
								'aria-valuemin',
								'aria-valuemax',
								'aria-valuenow',
								'role="spintbutton" - implicit by input'
							],
							styling: [
								'Focus state styles'
							],
							keyboardOperability: [
								'OOTB focusable and arrows up or down increase or decrease the number'
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

export default CSInputNumberPreview;
