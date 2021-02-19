import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSCheckbox } from '@cloudsense/cs-ui-components';

class CSCheckboxPreview extends React.Component {
	handleChange = () => alert('Checkbox has been toggled.');
	handleClick = () => alert('Checkbox has been clicked.');
	handleOnKeyDown = () => alert('Key has been pressed.');
	getCheckboxDoc = () => ({
		name: 'Checkbox',
		usage: 'A checkable input that communicates if an option is true, false or indeterminate.',
		accessible: 'yes',
		previews: [
			{
				name: 'Checkbox',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for a checkbox. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								component: <CSCheckbox label="Select option" />,
								code: '<CSCheckbox label="Select option" />'
							}
						]
					}, {
						propName: 'borderRadius',
						variations: [
							{
								primaryVariants: 'borderRadius="0.5rem"',
								component: <CSCheckbox label="Select option" borderRadius="0.5rem" />,
								code: '<CSCheckbox label="Select option" borderRadius="0.5rem" />'
							}
						]
					}, {
						propName: 'checked',
						variations: [
							{
								primaryVariants: 'checked={true}',
								component: <CSCheckbox label="Select option" checked />,
								code: '<CSCheckbox label="Select option" checked />'
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSCheckbox label="Select option" disabled />,
								code: '<CSCheckbox label="Select option" disabled />'
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
								component: <CSCheckbox label="Select option" error />,
								code: '<CSCheckbox label="Select option" error />'
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariants: 'error={true}',
								component: <CSCheckbox
									label="Select option"
									error
									errorMessage="Error message!"
								/>,
								code: `<CSCheckbox
									label="Select option"
									error
									errorMessage="Error message!"
								/>`
							}
						]
					}, {
						propName: 'helpText',
						variations: [
							{
								component: <CSCheckbox label="Select option" helpText="Help text example" />,
								code: '<CSCheckbox label="Select option" helpText="Help text example" />'
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSCheckbox label="Select option" labelHidden />,
								code: '<CSCheckbox label="Select option" labelHidden />'
							}
						]
					}, {
						propName: 'labelPosition',
						variations: [
							{
								primaryVariants: 'labelPosition="left"',
								component: <CSCheckbox label="Select option" labelPosition="left" />,
								code: '<CSCheckbox label="Select option" labelPosition="left" />'
							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle={true}',
								component: <CSCheckbox label="Select option" labelTitle />,
								code: '<CSCheckbox label="Select option" labelTitle />'
							}
						]
					},  {
						propName: 'name',
						variations: [
							{
								component: <CSCheckbox label="Select option" name="Checkbox" />,
								code: '<CSCheckbox label="Select option" name="Checkbox" />'
							}
						]
					}, {
						propName: 'onChange',
						variations: [
							{
								component: <CSCheckbox label="Select option" onChange={this.handleChange} />,
								code: '<CSCheckbox label="Select option" onChange={this.handleChange} />'
							}
						]
					}, {
						propName: 'onClick',
						variations: [
							{
								component: <CSCheckbox label="Select option" onClick={this.handleClick} />,
								code: '<CSCheckbox label="Select option" onClick={this.handleClick} />'
							}
						]
					}, {
						propName: 'onKeyDown',
						variations: [
							{
								component: <CSCheckbox label="Select option" onKeyDown={this.handleOnKeyDown} />,
								code: '<CSCheckbox label="Select option" onKeyDown={this.handleOnKeyDown} />'
							}
						]
					}, {
						propName: 'readOnly',
						variations: [
							{
								primaryVariants: 'readOnly={true}',
								component: <CSCheckbox label="Select option" readOnly />,
								code: '<CSCheckbox label="Select option" readOnly />'
							}
						]
					}, {
						propName: 'required',
						variations: [
							{
								primaryVariants: 'required={true}',
								component: <CSCheckbox label="Select option" required />,
								code: '<CSCheckbox label="Select option" required />'
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSCheckbox label="Select option" title="This is a title" />,
								code: '<CSCheckbox label="Select option" title="This is a title" />'
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
								secondaryVariants: 'helpText="text"',
								component: <CSCheckbox
									label="Select option"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>,
								code: `<CSCheckbox
									label="Select option"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>`
							}
						]
					}, {
						propName: 'variant',
						variations: [
							{
								primaryVariants: 'variant="brand"',
								component: <CSCheckbox label="Select option" variant="brand" />,
								code: '<CSCheckbox label="Select option" variant="brand" />'
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
								component: <CSCheckbox
									label="Select option"
									id="custom-id"
									className="custom-class"
								/>,
								code: `<CSCheckbox
									label="Select option"
									id="custom-id"
									className="custom-class"
								/>`
							}
						]
					}
				]
			}
		],
		properties: [
			{
				name: 'borderRadius',
				types: ['string'],
				default: '0.125rem',
				description: 'Set a border radius style.'
			}, {
				name: 'checked',
				types: ['boolean'],
				description: 'Control the checked state of the checkbox.'
			}, {
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the checkbox.'
			}, {
				name: 'disabled',
				types: ['boolean'],
				default: 'false',
				description: 'Disable the checkbox.'
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
				description: 'Set the error message or messages for the checkbox.'
			}, {
				name: 'helpText',
				types: ['string'],
				description: 'Set the text to be displayed in the tooltip.'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the checkbox.'
			}, {
				name: 'label',
				required: true,
				types: ['string'],
				description: 'Set the checkbox label.'
			}, {
				name: 'labelHidden',
				types: ['boolean'],
				default: 'false',
				description: 'Hide the checkbox label.'
			}, {
				name: 'labelPosition',
				customTypes: [{
					name: 'CSCheckboxLabelPosition',
					types: ['\'default\'', '\'left\'']
				}],
				default: '\'default\'',
				description: 'Set the label position.'
			}, {
				name: 'labelTitle',
				types: ['boolean'],
				description: 'Control whether to set the title attribute.'
			}, {
				name: 'name',
				types: ['string'],
				description: 'Set the checkbox name attribute.'
			}, {
				name: 'onChange',
				types: ['(event) => any'],
				description: 'Handler method for the change event.'
			}, {
				name: 'onClick',
				types: ['(event) => void'],
				description: 'Handler method for the click event.'
			}, {
				name: 'onKeyDown',
				types: ['(event) => any'],
				description: 'Handler method for the keydown event.'
			}, {
				name: 'readOnly',
				types: ['boolean'],
				default: 'false',
				description: 'Control whether to apply the readonly attribute.'
			}, {
				name: 'required',
				types: ['boolean'],
				default: 'false',
				description: 'Set the checkbox to required.'
			}, {
				name: 'title',
				types: ['string'],
				description: 'Set the checkbox title.'
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
				description: 'Set the tooltip position for the checkbox.'
			}, {
				name: 'variant',
				customTypes: [{
					name: 'CSCheckboxVariant',
					types: ['\'neutral\'', '\'brand\'']
				}],
				default: '\'neutral\'',
				description: 'Set the checkbox variant.'
			}, {
				name: '[key: string]',
				types: ['any'],
				description: 'Spreads the rest of the props to the checkbox input.'
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
							'HTML `<input type="checkbox">` - hidden',
							'`<span>` imitating checkbox with custom style',
							'`<input>` and `<span>` wrapped in `<label>`'
						],
						properties: [
							'`aria-required`',
							'`aria-invalid`',
							'`aria-labelledby` - associate checkbox with label',
							'`role="checkbox"` - implicit by input'
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
	})

	render() {
		const component = this.getCheckboxDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties {...component} />
					<PreviewTable components={[component]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSCheckboxPreview;
