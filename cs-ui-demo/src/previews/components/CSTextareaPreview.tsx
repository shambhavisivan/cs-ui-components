import React from 'react';
import { CSTextarea } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

interface CSTextareaPreviewState {
	value: string;
}

class CSTextareaPreview extends React.Component<{}, CSTextareaPreviewState> {
	state = { value: '' };

	handleChange = () => alert('Value has changed.');

	getDoc = () => ({
		name: 'Textarea',
		usage: 'Textarea inputs are used for freeform data entry.',
		accessible: 'yes',
		components: [
			{
				name: 'CSTextarea',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for a textarea. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								component: <CSTextarea label="Enter message" />,
								code: '<CSTextarea label="Enter message" />'
							}
						]
					}, {
						propName: 'borderRadius',
						variations: [
							{
								primaryVariants: 'borderRadius="0"',
								component: <CSTextarea label="Enter message" borderRadius="0" />,
								code: '<CSTextarea label="Enter message" borderRadius="0" />'
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSTextarea label="Enter message" disabled />,
								code: '<CSTextarea label="Enter message" disabled />'
							}
						]
					}, {
						propName: 'error',
						alert: {
							variant: 'info',
							text: 'Component in error state should always contain associated error message to satisfy accessibility best practices.'
						},
						variations: [
							{
								primaryVariants: 'error={true}',
								component: <CSTextarea label="Enter message" error />,
								code: '<CSTextarea label="Enter message" error />'
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariants: 'error={true}',
								component: <CSTextarea
									label="Enter message"
									error
									errorMessage="Error message."
								/>,
								code: `<CSTextarea
									label="Enter message"
									error
									errorMessage="Error message."
								/>`
							}
						]
					}, {
						propName: 'helpText',
						variations: [
							{
								component: <CSTextarea label="Enter message" helpText="Help text example" />,
								code: '<CSTextarea label="Enter message" helpText="Help text example" />'
							}
						]
					}, {
						propName: 'hidden',
						variations: [
							{
								primaryVariants: 'hidden={true}',
								component: <CSTextarea label="Enter message" hidden />,
								code: '<CSTextarea label="Enter message" hidden />'
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSTextarea label="Enter message" labelHidden />,
								code: '<CSTextarea label="Enter message" labelHidden />'

							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle={true}',
								component: <CSTextarea label="Enter message" labelTitle />,
								code: '<CSTextarea label="Enter message" labelTitle />'
							}
						]
					}, {
						propName: 'maxHeight',
						variations: [
							{
								primaryVariants: 'maxHeight="200px"',
								quickLink: '200px',
								component: <CSTextarea label="Enter message" maxHeight="200px" />,
								code: '<CSTextarea label="Enter message" maxHeight="200px" />'
							},
							{
								primaryVariants: 'maxHeight="5rem"',
								quickLink: '5rem',
								component: <CSTextarea label="Enter message" maxHeight="5rem" />,
								code: '<CSTextarea label="Enter message" maxHeight="5rem" />'
							}
						]
					}, {
						propName: 'onChange',
						variations: [
							{
								component: <CSTextarea label="Enter message" onChange={this.handleChange} />,
								code: '<CSTextarea label="Enter message" onChange={this.handleChange} />'
							}
						]
					}, {
						propName: 'placeholder',
						variations: [
							{
								component: <CSTextarea label="Enter message" placeholder="Message" />,
								code: '<CSTextarea label="Enter message" placeholder="Message" />'
							}
						]
					}, {
						propName: 'readOnly',
						variations: [
							{
								primaryVariants: 'readOnly={true}',
								component: <CSTextarea
									label="Enter message"
									readOnly
									value="value"
								/>,
								code: `<CSTextarea
									label="Enter message"
									readOnly
									value="value"
								/>`
							}
						]
					}, {
						propName: 'required',
						variations: [
							{
								primaryVariants: 'required={true}',
								component: <CSTextarea label="Enter message" required />,
								code: '<CSTextarea label="Enter message" required />'
							}
						]
					}, {
						propName: 'rows',
						variations: [
							{
								primaryVariants: 'rows={10}',
								component: <CSTextarea label="Enter message" rows={10} />,
								code: '<CSTextarea label="Enter message" rows={10} />'
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSTextarea label="Enter message" title="This is a title" />,
								code: '<CSTextarea label="Enter message" title="This is a title" />'
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
								component: <CSTextarea
									label="Enter message"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>,
								code: `<CSTextarea
									label="Enter message"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>`
							}
						]
					}, {
						propName: 'value',
						variations: [
							{
								secondaryVariants: ' onChange={() => any}',
								component: <CSTextarea
									label="Enter message"
									value={this.state.value}
									onChange={event => this.setState({ value: event.target.value })}
								/>,
								code: `<CSTextarea
									label="Enter message"
									value={this.state.value}
									onChange={event => this.setState({ value: event.target.value })}
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
								component: <CSTextarea
									label="Enter message"
									id="custom-id"
									className="custom-br-mint"
								/>,
								code: `<CSTextarea
									label="Enter message"
									id="custom-id"
									className="custom-br-mint"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'label',
						required: true,
						types: 'string',
						description: 'Set the textarea label.'
					}, {
						name: 'borderRadius',
						types: 'string',
						default: `'0.25rem'`,
						description: 'Set a border radius style.'
					}, {
						name: 'disabled',
						types: 'boolean',
						default: 'false',
						description: 'Disable the textarea.'
					}, {
						name: 'error',
						types: 'boolean',
						default: 'false',
						description: 'Toggle the error state.'
					}, {
						name: 'errorMessage',
						customTypes: {
							name: 'CSFieldErrorMsgType',
							types: ['string', 'Array<string>']
						},
						description: 'Set the error message or messages for the textarea.'
					}, {
						name: 'helpText',
						types: 'string',
						description: 'Set the text to be displayed in the tooltip.'
					}, {
						name: 'hidden',
						types: 'boolean',
						default: 'false',
						description: 'Control the hidden attribute.'
					}, {
						name: 'labelHidden',
						types: 'boolean',
						default: 'false',
						description: 'Hide the textarea label.'
					}, {
						name: 'labelTitle',
						types: 'boolean',
						description: 'Control whether to set the title attribute.'
					}, {
						name: 'maxHeight',
						types: 'string',
						description: 'Set the max-height for the textarea. (eg. 200px, 20rem, etc.)'
					}, {
						name: 'onChange',
						types: '(event) => any',
						description: 'Handler method for the change event.'
					}, {
						name: 'placeholder',
						types: 'string',
						description: 'Set a textarea placeholder.'
					}, {
						name: 'readOnly',
						types: 'boolean',
						default: 'false',
						description: 'Control whether to apply the readonly attribute.'
					}, {
						name: 'required',
						types: 'boolean',
						default: 'false',
						description: 'Make the textarea required.'
					}, {
						name: 'rows',
						types: 'number',
						default: '3',
						description: 'Set how many rows the textarea defaults to.'
					}, {
						name: 'title',
						types: 'string',
						description: 'Set the textarea title.'
					}, {
						name: 'tooltipPosition',
						customTypes: {
							name: 'CSTooltipPosition',
							types: [
								`'top-right'`,
								`'top-center'`,
								`'top-left'`,
								`'bottom-right'`,
								`'bottom-center'`,
								`'bottom-left'`,
								`'right-top'`,
								`'right-center'`,
								`'right-bottom'`,
								`'left-top'`,
								`'left-center'`,
								`'left-bottom'`
							]
						},
						default: `'top-right'`,
						description: 'Set the tooltip position for the textarea.'
					}, {
						name: 'value',
						types: 'string',
						description: 'Set the textarea value.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the textarea.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the textarea.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the textarea.'
					}
				]
			}
		],
		accessibility: {
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
			requirements: {
				structure: [
					'`<textarea>`'
				],
				attributes: [
					'`aria-label` - description when label is hidden',
					'`aria-invalid` - true when there is an error',
					'`aria-required` - true when entering value is required',
					'`role="textbox"` - implicit with `<textarea>`',
					'`id` - needed to connect label with form element. If there is no id, autogenerated unique id is set',
					'`aria-multiline="true"` - implicit with `<textarea>`',
					'`contenteditable="true"` - implicit with `<textarea>`'
				],
				styling: [
					'Focus state styles'
				],
				keyboardOperability: [
					'`<textarea>` OOTB focusable'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSTextareaPreview;
