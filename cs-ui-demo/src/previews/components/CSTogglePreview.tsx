import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSToggle } from '@cloudsense/cs-ui-components';

class CSTogglePreview extends React.Component {
	handleChange = () => alert('Value has been toggled.');

	getToggleDoc = () => ({
		name: 'Toggle',
		usage: 'A checkable input that communicates if an option is true, false or indeterminate.',
		accessible: 'yes',
		previews: [
			{
				name: 'Toggle',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for a text input. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								component: <CSToggle label="This is a label" />,
								code: '<CSToggle label="This is a label" />'
							}
						]
					}, {
						propName: 'checked',
						variations: [
							{
								primaryVariants: 'checked={true}',
								component: <CSToggle label="This is a label" checked />,
								code: '<CSToggle label="This is a label" checked />'
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSToggle label="This is a label" disabled />,
								code: '<CSToggle label="This is a label" disabled />'
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
								component: <CSToggle label="This is a label" error />,
								code: '<CSToggle label="This is a label" error />'
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariants: 'error={true}',
								component: <CSToggle
									label="This is a label"
									error
									errorMessage="Error message!"
								/>,
								code: `<CSToggle
									label="This is a label"
									error
									errorMessage="Error message!"
								/>`
							}
						]
					}, {
						propName: 'helpText',
						variations: [
							{
								component: <CSToggle label="This is a label" helpText="Help text example" />,
								code: '<CSToggle label="This is a label" helpText="Help text example" />'
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSToggle label="This is a label" labelHidden />,
								code: '<CSToggle label="This is a label" labelHidden />'
							}
						]
					}, {
						propName: 'labelPosition',
						description: 'For now we are supporting only default and left variants. We will add more when there will be need',
						variations: [
							{
								primaryVariants: 'labelPosition="left"',
								component: <CSToggle label="This label is on the left" labelPosition="left" />,
								code: '<CSToggle label="This label is on the left" labelPosition="left" />'
							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle={true}',
								component: <CSToggle label="This is a label" labelTitle />,
								code: '<CSToggle label="This is a label" labelTitle />'
							}
						]
					}, {
						propName: 'onChange',
						variations: [
							{
								component: <CSToggle label="This is a label" onChange={this.handleChange} />,
								code: '<CSToggle label="This is a label" onChange={this.handleChange} />'
							}
						]
					}, {
						propName: 'required',
						variations: [
							{
								primaryVariants: 'required={true}',
								component: <CSToggle label="This is a label" required />,
								code: '<CSToggle label="This is a label" required />'
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSToggle label="This is a label" title="This is a title" />,
								code: '<CSToggle label="This is a label" title="This is a title" />'
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
								component: <CSToggle
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>,
								code: `<CSToggle
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>`
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
								component: <CSToggle
									label="This is a label"
									id="custom-id"
									className="custom-class"
								/>,
								code: `<CSToggle
									label="This is a label"
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
				name: 'checked',
				types: ['boolean'],
				description: 'Control the checked state of the toggle.'
			}, {
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the toggle.'
			}, {
				name: 'disabled',
				types: ['boolean'],
				default: 'false',
				description: 'Disable the toggle.'
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
				description: 'Set the error message or messages for the toggle.'
			}, {
				name: 'helpText',
				types: ['string'],
				description: 'Set the text to be displayed in the tooltip.'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the toggle.'
			}, {
				name: 'label',
				required: true,
				types: ['string'],
				description: 'Set the toggle label.'
			}, {
				name: 'labelHidden',
				types: ['boolean'],
				default: 'false',
				description: 'Hide the toggle label.'
			}, {
				name: 'labelPosition',
				customTypes: [{
					name: 'CSToggleLabelPosition',
					types: ['\'default\'', '\'left\'']
				}],
				default: '\'default\'',
				description: 'Set the label position.'
			}, {
				name: 'labelTitle',
				types: ['boolean'],
				description: 'Control whether to set the title attribute.'
			}, {
				name: 'onChange',
				types: ['(event) => any'],
				description: 'Handler method for the change event.'
			}, {
				name: 'required',
				types: ['boolean'],
				default: 'false',
				description: 'Set the toggle to required.'
			}, {
				name: 'title',
				types: ['string'],
				description: 'Set the toggle title.'
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
				description: 'Set the tooltip position for the toggle.'
			}, {
				name: '[key: string]',
				types: ['any'],
				description: 'Spreads the rest of the props to the toggle input.'
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
							'`<span>` imitates checkbox with custom style',
							'`<input>` and `<span>` wrapped in `<label>`'
						],
						properties: [
							'`aria-labelledby` - associate field with label',
							'`role="textbox"` - implicit with input'
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
		const component = this.getToggleDoc();

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

export default CSTogglePreview;
