import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSRadio, CSRadioOption } from '@cloudsense/cs-ui-components';

class CSRadioPreview extends React.Component {
	handleChange = () => alert('Selection has changed.');

	getRadioDoc = () => ({
		name: 'Radio',
		usage: 'A checkable input that communicates if an option is true, false or indeterminate.',
		accessible: 'yes',
		previews: [
			{
				name: 'Radio',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for a radio. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								component: <CSRadio label="This is a label">
									<CSRadioOption label="high" name="label" />
									<CSRadioOption label="low" name="label" />
								</CSRadio>,
								code: `<CSRadio label="This is a label">
									<CSRadioOption label="high" name="label" />
									<CSRadioOption label="low" name="label" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSRadio label="This is a label" disabled>
									<CSRadioOption label="Cola" name="disabled" />
									<CSRadioOption label="Pepsi" name="disabled" />
								</CSRadio>,
								code: `<CSRadio label="This is a label" disabled>
									<CSRadioOption label="Cola" name="disabled" />
									<CSRadioOption label="Pepsi" name="disabled" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'error',
						alert: {
							variant: 'info',
							text: 'Component in error state should always contain associated error message to satisfy accessibility best practices!'
						},
						variations: [
							{
								primaryVariants: 'error={true}',
								component: <CSRadio label="This is a label" error>
									<CSRadioOption label="male" name="error" />
									<CSRadioOption label="female" name="error" />
								</CSRadio>,
								code: `<CSRadio label="This is a label" error>
									<CSRadioOption label="male" name="error" />
									<CSRadioOption label="female" name="error" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariants: 'error={true}',
								component: <CSRadio
									label="This is a label"
									error
									errorMessage="Error message!"
								>
									<CSRadioOption label="male" name="error-message" />
									<CSRadioOption label="female" name="error-message" />
								</CSRadio>,
								code: `<CSRadio
									label="This is a label"
									error
									errorMessage="Error message!"
								>
									<CSRadioOption label="male" name="error-message" />
									<CSRadioOption label="female" name="error-message" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'helpText',
						variations: [
							{
								component: <CSRadio
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="bottom-right"
								>
									<CSRadioOption label="red" name="help-text" />
									<CSRadioOption label="blue" name="help-text" />
								</CSRadio>,
								code: `<CSRadio
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="bottom-right"
								>
									<CSRadioOption label="red" name="help-text" />
									<CSRadioOption label="blue" name="help-text" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSRadio label="This is a label" labelHidden>
									<CSRadioOption label="high" name="label-hidden" />
									<CSRadioOption name="label-hidden" />
								</CSRadio>,
								code: `<CSRadio label="This is a label" labelHidden>
									<CSRadioOption label="high" name="label-hidden" />
									<CSRadioOption name="label-hidden" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle={true}',
								component: <CSRadio label="This is a label" labelTitle>
									<CSRadioOption label="high" name="label-title" />
									<CSRadioOption name="label-title" />
								</CSRadio>,
								code: `<CSRadio label="This is a label" labelTitle>
									<CSRadioOption label="high" name="label-title" />
									<CSRadioOption name="label-title" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'required',
						variations: [
							{
								primaryVariants: 'required={true}',
								component: <CSRadio label="This is a label" required>
									<CSRadioOption label="England" name="required" />
									<CSRadioOption label="Croatia" name="required" />
								</CSRadio>,
								code: `<CSRadio label="This is a label" required>
									<CSRadioOption label="England" name="required" />
									<CSRadioOption label="Croatia" name="required" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'tooltipPosition',
						alert: {
							variant: 'info',
							text: 'This prop can only be used when helpText is set.'
						},
						variations: [
							{
								primaryVariants: 'tooltipPosition="top-left"',
								component: <CSRadio
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="top-left"
								>
									<CSRadioOption label="left" name="tooltip-position" />
									<CSRadioOption label="right" name="tooltip-position" />
								</CSRadio>,
								code: `<CSRadio
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="top-left"
								>
									<CSRadioOption label="left" name="tooltip-position" />
									<CSRadioOption label="right" name="tooltip-position" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'variant',
						variations: [
							{
								primaryVariants: 'variant="brand"',
								component: <CSRadio label="This is a label" variant="brand">
									<CSRadioOption label="Africa" name="variant" />
									<CSRadioOption label="America" name="variant" />
								</CSRadio>,
								code: `<CSRadio label="This is a label" variant="brand">
									<CSRadioOption label="Africa" name="variant" />
									<CSRadioOption label="America" name="variant" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'id | class',
						variations: [
							{
								primaryVariants: [
									'id="custom-id"',
									'className="custom-class"'
								],
								component: <CSRadio
									label="This is a label"
									id="custom-id"
									className="custom-class"
								>
									<CSRadioOption label="2020" name="id-class" />
									<CSRadioOption label="2021" name="id-class" />
								</CSRadio>,
								code: `<CSRadio
									label="This is a label"
									id="custom-id"
									className="custom-class"
								>
									<CSRadioOption label="2020" name="id-class" />
									<CSRadioOption label="2021" name="id-class" />
								</CSRadio>`
							}
						]
					}
				]
			}, {
				name: 'Radio Option',
				examples: [
					{
						propName: 'checked',
						variations: [
							{
								primaryVariants: 'checked={true}',
								component: <CSRadio label="This is a label" required>
									<CSRadioOption
										label="England"
										name="checked"
										checked
									/>
									<CSRadioOption name="checked" label="Croatia" />
								</CSRadio>,
								code: `<CSRadio label="This is a label" required>
									<CSRadioOption
										label="England"
										name="checked"
										checked
									/>
									<CSRadioOption name="checked" label="Croatia" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSRadio label="This is a label">
									<CSRadioOption label="Cola" name="option-disabled" />
									<CSRadioOption
										label="Pepsi"
										name="option-disabled"
										disabled
									/>
									<CSRadioOption label="Fanta" name="option-disabled" />
								</CSRadio>,
								code: `<CSRadio label="This is a label">
									<CSRadioOption label="Cola" name="option-disabled" />
									<CSRadioOption
										label="Pepsi"
										name="option-disabled"
										disabled
									/>
									<CSRadioOption label="Fanta" name="option-disabled" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'label',
						variations: [
							{
								component: <CSRadio label="This is a label">
									<CSRadioOption label="Radio option label" name="option-label" />
									<CSRadioOption label="Radio option label" name="option-label" />
								</CSRadio>,
								code: `<CSRadio label="This is a label">
									<CSRadioOption label="Radio option label" name="option-label" />
									<CSRadioOption label="Radio option label" name="option-label" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'onChange',
						variations: [
							{
								component: <CSRadio label="This is a label">
									<CSRadioOption
										label="2020"
										name="on-change"
										onChange={this.handleChange}
									/>
									<CSRadioOption
										label="2021"
										name="on-change"
										onChange={this.handleChange}
									/>
								</CSRadio>,
								code: `<CSRadio label="This is a label">
									<CSRadioOption
										label="2020"
										name="on-change"
										onChange={this.handleChange}
									/>
									<CSRadioOption
										label="2021"
										name="on-change"
										onChange={this.handleChange}
									/>
								</CSRadio>`
							}
						]
					}, {
						propName: 'readOnly',
						variations: [
							{
								primaryVariants: 'readOnly={true}',
								component: <CSRadio label="This is a label">
									<CSRadioOption
										label="summer"
										name="read-only"
										readOnly
										checked
									/>
									<CSRadioOption
										label="winter"
										name="read-only"
										readOnly
									/>
								</CSRadio>,
								code: `<CSRadio label="This is a label">
									<CSRadioOption
										label="summer"
										name="read-only"
										readOnly
										checked
									/>
									<CSRadioOption
										label="winter"
										name="read-only"
										readOnly
									/>
								</CSRadio>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSRadio label="This is a label">
									<CSRadioOption
										label="2020"
										name="title"
										title="This is a title"
									/>
									<CSRadioOption
										label="2021"
										name="title"
										title="This is a different title"
									/>
								</CSRadio>,
								code: `<CSRadio label="This is a label">
									<CSRadioOption
										label="2020"
										name="title"
										title="This is a title"
									/>
									<CSRadioOption
										label="2021"
										name="title"
										title="This is a different title"
									/>
								</CSRadio>`
							}
						]
					}
				]
			}
		],
		properties: [
			{
				name: 'children',
				customTypes: [{
					name: 'CSRadioOptionChildren',
					types: ['<CSRadioOption />', 'any']
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
				default: 'false',
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
				default: '\'top-right\'',
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
							'`<input type="radio">` - visually hidden',
							'`<span>` imitates radio with custom style',
							'`<input>` and `<span>` wrapped in `<label>` - allowing click on span to change input'
						],
						properties: [
							'`aria-label` - description of radio group when label is hidden',
							'`aria-required` - true when selecting an option is required',
							'`aria-invalid` - true when there is an error',
							'`id` - needed to connect label with form element. If there is no id, autogenerated unique id is set',
							'`role="radio"` - implicit with input `<type="radio">`'
						],
						styling: [
							'Focus state styles'
						],
						keyboardOperability: [
							'`<input type="radio">` OOTB focusable and supports `Space`'
						]
					}
				]
			}
		]
	})

	getRadioOptionDoc = () => ({
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
	})

	render() {
		const component = this.getRadioDoc();
		const component2 = this.getRadioOptionDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties {...component} />
					<PreviewTable components={[component, component2]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSRadioPreview;
