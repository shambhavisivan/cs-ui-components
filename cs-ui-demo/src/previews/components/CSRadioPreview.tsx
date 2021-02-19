import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSRadio, CSRadioOption } from '@cloudsense/cs-ui-components';

class CSRadioPreview extends React.Component {
	handleChange = () => alert('Selection has changed.');

	getCSRadioDoc() {
		const json = {
			name: 'Radio',
			usage: 'A checkable input that communicates if an option is true, false or indeterminate.',
			accessible: 'yes',
			examples: [
				{
					propName: 'label',
					variations: [
						{
							component:
								<CSRadio
									label="This is a label"
								>
									<CSRadioOption name="value" label="high" />
									<CSRadioOption name="value" label="low" />
								</ CSRadio>
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
								<CSRadio
									label="This is a label"
									labelHidden
								>
									<CSRadioOption name="value" label="high" />
									<CSRadioOption name="value" label="low" />
								</ CSRadio>
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
								<CSRadio
									label="This is a label"
									labelTitle
								>
									<CSRadioOption name="value" label="high" />
									<CSRadioOption name="value" label="low" />
								</ CSRadio>
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
								<CSRadio
									error
									label="This is a label"
								>
									<CSRadioOption name="gender" label="male" />
									<CSRadioOption name="gender" label="female" />
								</ CSRadio>
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							component:
								<CSRadio
									error
									errorMessage="Error message!"
									label="This is a label"
								>
									<CSRadioOption name="gender" label="male" />
									<CSRadioOption name="gender" label="female" />
								</ CSRadio>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSRadio
									id="id"
									label="This is a label"
								>
									<CSRadioOption name="country" label="England" id="id" />
									<CSRadioOption name="country" label="Croatia" id="id" />
								</CSRadio>
						}
					]
				},
				{
					propName: 'checked',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSRadio
									required
									label="This is a label"
								>
									<CSRadioOption name="country" label="England" checked />
									<CSRadioOption name="country" label="Croatia" />
								</CSRadio>
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
								<CSRadio
									required
									label="This is a label"
								>
									<CSRadioOption name="country" label="England" />
									<CSRadioOption name="country" label="Croatia" />
								</CSRadio>
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
								<CSRadio
									disabled
									label="This is a label"
								>
									<CSRadioOption name="drink" label="Cola" disabled />
									<CSRadioOption name="drink" label="Pepsi" disabled />
								</CSRadio>
						}
					]
				},
				{
					propName: 'readOnly',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSRadio label="This is a label">
									<CSRadioOption name="drink" label="Cola" readOnly checked />
									<CSRadioOption name="drink" label="Pepsi" readOnly />
								</CSRadio>
						}
					]
				},
				{
					propName: 'variant',
					variations: [
						{
							variationName: ['brand'],
							quickLink: 'brand',
							component:
								<CSRadio
									variant="brand"
									label="This is a label"
								>
									<CSRadioOption name="continent" label="Africa" />
									<CSRadioOption name="continent" label="America" />
								</CSRadio>
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							component:
								<CSRadio label="This is a label" helpText="Help text example" tooltipPosition="bottom-right">
									<CSRadioOption name="colour" label="red" />
									<CSRadioOption name="colour" label="blue" />
								</CSRadio>
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
								<CSRadio label="This is a label" helpText="Help text example" tooltipPosition="top-right">
									<CSRadioOption name="direction" label="left" />
									<CSRadioOption name="direction" label="right" />
								</CSRadio>
						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							component:
								<CSRadio label="This is a label">
									<CSRadioOption name="year" label="2020" onChange={this.handleChange} />
									<CSRadioOption name="year" label="2021" onChange={this.handleChange} />
								</CSRadio>
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component:
								<CSRadio label="This is a label">
									<CSRadioOption name="year" label="2020" title="This is a title" />
									<CSRadioOption name="year" label="2021" title="This is a different title" />
								</CSRadio>
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
								<CSRadio label="This is a label" className="custom-class">
									<CSRadioOption name="year" label="2020" />
									<CSRadioOption name="year" label="2021" />
								</CSRadio>
						}
					]
				}
			],
			properties: [
				{
					name: 'children',
					customTypes: [{
						name: 'CSRadioOptionChildren',
						types: ['<CSRadioOption />', '\'any\'']
					}],
					description: 'This component is designed to support CSRadioOption as a child.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the radio.'
				}, {
					name: 'disabled',
					types: ['boolean'],
					default: 'false',
					description: 'Disable the radio.'
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
					description: 'Set the error message or messages for the radio.'
				}, {
					name: 'helpText',
					types: ['string'],
					description: 'Set the text to be displayed in the tooltip.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the radio.'
				}, {
					name: 'label',
					required: true,
					types: ['string'],
					description: 'Set the radio label.'
				}, {
					name: 'labelHidden',
					types: ['boolean'],
					default: 'false',
					description: 'Hide the radio label.'
				}, {
					name: 'labelTitle',
					types: ['boolean'],
					description: 'Control whether to set the title attribute.'
				}, {
					name: 'required',
					types: ['boolean'],
					default: 'false',
					description: 'Set the radio to required.'
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
					description: 'Set the tooltip position for the radio.'
				}, {
					name: 'variant',
					customTypes: [{
						name: 'CSRadioVariant',
						types: ['\'neutral\'', '\'brand\'']
					}],
					default: '\'neutral\'',
					description: 'Set the radio variant.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the radio wrapper div.'
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
								'HTML `<input type="radio">` - visually hidden',
								'`<span>` imitates radio with custom style',
								'`<input>` and `<span>` wrapped in `<label>` - allowing click on span to change input'
							],
							properties: [
								'`aria-required`',
								'`aria-invalid`',
								'`aria-labelledby` - associate radio with label',
								'`role="radio"` - implicit with input type'
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

	getCSRadioOptionDoc() {
		const json = {
			name: 'Radio Option',
			usage: 'Individual radio options.',
			properties: [
				{
					name: 'checked',
					types: ['boolean'],
					description: 'Control the checked state of the radio option.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the radio option.'
				}, {
					name: 'disabled',
					types: ['boolean'],
					default: 'false',
					description: 'Disable the radio option.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the radio option.'
				}, {
					name: 'label',
					types: ['string'],
					description: 'Set the radio option label.'
				}, {
					name: 'name',
					types: ['string'],
					description: 'Set the radio option name attribute.'
				}, {
					name: 'onChange',
					types: ['(event) => any'],
					description: 'Handler method for the change event.'
				}, {
					name: 'readOnly',
					types: ['boolean'],
					default: 'false',
					description: 'Control whether to apply the readonly attribute.'
				}, {
					name: 'title',
					types: ['string'],
					description: 'Set the radio option title.'
				}, {
					name: 'ariaInvalid',
					required: 'CSRadio',
					types: ['boolean'],
					default: 'false',
					description: 'Indicate whether an element has an error.'
				}, {
					name: 'ariaRequired',
					required: 'CSRadio',
					types: ['boolean'],
					default: 'false',
					description: 'Indicate whether an element is required.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the radio wrapper div.'
				}
			]
		};

		return json;
	}

	render() {
		const component = this.getCSRadioDoc();
		const component2 = this.getCSRadioOptionDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component, component2]} />
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

export default CSRadioPreview;
