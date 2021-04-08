import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSInputText } from '@cloudsense/cs-ui-components';

interface CSInputTextPreviewState {
	focused: boolean;
	value: string;
}

class CSInputTextPreview extends React.Component<{}, CSInputTextPreviewState> {
	state = {
		focused: false,
		value: 'Enter name'
	};

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

	setValue = (e: any) => this.setState({ value: e.target.value });

	getInputTextDoc = () => ({
		name: 'Input Text',
		usage: 'Text inputs are used for freeform data entry.',
		accessible: 'yes',
		previews: [
			{
				name: 'Input Text',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for a text input. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								component: <CSInputText label="Enter value" />,
								code: '<CSInputText label="Enter value" />'
							}
						]
					}, {
						propName: 'borderRadius',
						variations: [
							{
								primaryVariants: 'borderRadius="0"',
								component: <CSInputText label="Enter value" borderRadius="0" />,
								code: '<CSInputText label="Enter value" borderRadius="0" />'
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSInputText label="Enter value" disabled />,
								code: '<CSInputText label="Enter value" disabled />'
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
								component: <CSInputText label="Enter value" error />,
								code: '<CSInputText label="Enter value" error />'
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariants: 'error={true}',
								component: <CSInputText
									label="Enter value"
									error
									errorMessage="Error message!"
								/>,
								code: `<CSInputText
									label="Enter value"
									error
									errorMessage="Error message!"
								/>`
							}
						]
					}, {
						propName: 'helpText',
						variations: [
							{
								component: <CSInputText label="Enter value" helpText="Help text example" />,
								code: '<CSInputText label="Enter value" helpText="Help text example" />'
							}
						]
					}, {
						propName: 'hidden',
						variations: [
							{
								primaryVariants: 'hidden={true}',
								component: <CSInputText label="Enter value" hidden />,
								code: '<CSInputText label="Enter value" hidden />'
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSInputText label="Enter value" labelHidden />,
								code: '<CSInputText label="Enter value" labelHidden />'
							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle={true}',
								component: <CSInputText label="Enter value" labelTitle />,
								code: '<CSInputText label="Enter value" labelTitle />'
							}
						]
					}, {
						propName: 'maxLength',
						variations: [
							{
								component: <CSInputText label="Enter value" maxLength={10} />,
								code: '<CSInputText label="Enter value" maxLength={10} />'
							}
						]
					}, {
						propName: 'name',
						variations: [
							{
								component: <CSInputText label="Enter value" name="Input text" />,
								code: '<CSInputText label="Enter value" name="Input text" />'
							}
						]
					}, {
						propName: 'onBlur',
						variations: [
							{
								component: <CSInputText label="Enter value" onBlur={this.handleBlur} />,
								code: '<CSInputText label="Enter value" onBlur={this.handleBlur} />'
							}
						]
					}, {
						propName: 'onChange',
						variations: [
							{
								component: <CSInputText label="Enter value" onChange={this.handleChange} />,
								code: '<CSInputText label="Enter value" onChange={this.handleChange} />'
							}
						]
					}, {
						propName: 'onFocus',
						variations: [
							{
								component: <CSInputText label="Enter value" onFocus={this.handleFocus} />,
								code: '<CSInputText label="Enter value" onFocus={this.handleFocus} />'
							}
						]
					}, {
						propName: 'placeholder',
						variations: [
							{
								component: <CSInputText label="Enter value" placeholder="Enter name" />,
								code: '<CSInputText label="Enter value" placeholder="Enter name" />'
							}
						]
					}, {
						propName: 'readOnly',
						variations: [
							{
								primaryVariants: 'readOnly={true}',
								component: <CSInputText
									label="Enter value"
									readOnly
									value="value"
								/>,
								code: `<CSInputText
									label="Enter value"
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
								component: <CSInputText label="Enter value" required />,
								code: '<CSInputText label="Enter value" required />'
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSInputText
									label="Enter value"
									name="Input text"
									title="Example title"
								/>,
								code: `<CSInputText
									label="Enter value"
									name="Input text"
									title="Example title"
								/>`
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
								component: <CSInputText
									label="Enter value"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>,
								code: `<CSInputText
									label="Enter value"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>`
							}
						]
					}, {
						propName: 'value',
						variations: [
							{
								component: <CSInputText label="Enter value" value={this.state.value} onChange={this.setValue} />,
								code: '<CSInputText label="Enter value" value="Enter name" />'
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
								component: <CSInputText
									label="Enter value"
									id="custom-id"
									className="custom-class"
								/>,
								code: `<CSInputText
									label="Enter value"
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
				default: '0.25rem',
				description: 'Set a border radius style.'
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
				default: 'false',
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
				default: '\'top-right\'',
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
							'`<input type="text">`'
						],
						properties: [
							'`aria-label` - description when label is hidden',
							'`aria-invalid` - true when entered value is not valid',
							'`aria-required` - true when entering a value is required',
							'id - needed to connect label with form element. If there is no id, autogenerated unique id is set',
							'`role="textbox"` - implicit with input type="text"'
						],
						styling: [
							'Focus state styles'
						],
						keyboardOperability: [
							'`input` OOTB focusable'
						]
					}
				]
			}
		]
	})

	render() {
		const component = this.getInputTextDoc();

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

export default CSInputTextPreview;
