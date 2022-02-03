import React from 'react';
import { CSInputText } from '@cloudsense/cs-ui-components';
import { actions, actionsCode } from '../helpers/actions';
import { icons, iconsCode } from '../helpers/icons';

import Preview from '../Preview';

interface CSInputTextPreviewState {
	focused: boolean;
	value: string;
}

class CSInputTextPreview extends React.Component<{}, CSInputTextPreviewState> {
	state = {
		focused: false,
		value: 'Enter name'
	};

	handleBlur = () => alert('Input has lost focus.');
	handleChange = () => alert('Value has changed.');
	handleClick = () => alert('Input has been clicked.');
	handleKeyDown = (event: any) => alert(`Key ${event.key} has been pressed.`);
	handleFocus = () => {
		this.setState(prevState => {
			if (!prevState.focused) {
				alert('Input has gained focus.');
			}
			return { focused: !prevState.focused };
		});
	}

	getDoc = () => ({
		name: 'Input Text',
		usage: 'Text inputs are used for freeform data entry.',
		accessible: 'yes',
		components: [
			{
				name: 'CSInputText',
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
						propName: 'actions',
						variations: [
							{
								primaryVariants: [
									'actions={actions}'
								],
								component: <CSInputText
									label="Enter value"
									actions={actions}
								/>,
								code: `<CSInputText
									label="Enter value"
									actions={${actionsCode}}
								/>`
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
							text: 'Component in error state should always contain associated error message to satisfy accessibility best practices.'
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
									errorMessage="Error message."
								/>,
								code: `<CSInputText
									label="Enter value"
									error
									errorMessage="Error message."
								/>`
							}
						]
					}, {
						propName: 'errorTooltip',
						variations: [
							{
								primaryVariants: 'errorTooltip={true}',
								secondaryVariants: 'error={true}',
								component: <CSInputText
									label="Enter value"
									error
									errorMessage="Error message."
									errorTooltip
								/>,
								code: `<CSInputText
									label="Enter value"
									error
									errorMessage="Error message."
									errorTooltip
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
						propName: 'icons',
						variations: [
							{
								primaryVariants: [
									'icons={icons}'
								],
								component: <CSInputText
									label="Enter value"
									icons={icons}
								/>,
								code: `<CSInputText
									label="Enter value"
									icons={${iconsCode}}
								/>`
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
						propName: 'onClick',
						variations: [
							{
								component: <CSInputText label="Enter value" onClick={this.handleClick} />,
								code: '<CSInputText label="Enter value" onClick={this.handleClick} />'
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
						propName: 'onKeyDown',
						variations: [
							{
								component: <CSInputText label="Enter value" onKeyDown={this.handleKeyDown} />,
								code: '<CSInputText label="Enter value" onKeyDown={this.handleKeyDown} />'
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
								component: <CSInputText
									label="Enter value"
									value={this.state.value}
									onChange={(event: any) => this.setState({ value: event.target.value })}
								/>,
								code: `<CSInputText
									label="Enter value"
									value={this.state.value}
									onChange={(event: any) => this.setState({ value: event.target.value })}
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
								component: <CSInputText
									label="Enter value"
									id="custom-id"
									className="custom-br-mint"
								/>,
								code: `<CSInputText
									label="Enter value"
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
						description: 'Set the text input label.'
					}, {
						name: 'actions',
						customTypes: {
							name: 'CSInputTextActionsProps',
							types: 'Array<CSInputTextActionProps>'
						},
						description: 'An array of objects which accepts valid CSIcon & CSButton props, a getTooltip function to show an icon with a tooltip & an action prop for the button action/function.'
					}, {
						name: 'borderRadius',
						types: 'string',
						default: `'0.25rem'`,
						description: 'Set a border radius style.'
					}, {
						name: 'disabled',
						types: 'boolean',
						default: 'false',
						description: 'Disable the text input.'
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
						description: 'Set the error message or messages for the text input.'
					}, {
						name: 'errorTooltip',
						types: 'boolean',
						description: 'Show an error tooltip for the text input.'
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
						name: 'icons',
						customTypes: {
							name: 'CSInputTextIconProps',
							types: 'Array<CSInputTextIconProps>'
						},
						description: 'An array of objects which accepts valid CSIcon props or a getTooltip function to show an icon with a tooltip.'
					}, {
						name: 'labelHidden',
						types: 'boolean',
						default: 'false',
						description: 'Hide the text input label.'
					}, {
						name: 'labelTitle',
						types: 'boolean',
						description: 'Control whether to set the title attribute.'
					}, {
						name: 'maxLength',
						types: 'number',
						description: 'Set the maximum length of the value.'
					}, {
						name: 'name',
						types: 'string',
						description: 'Set the text input name attribute.'
					}, {
						name: 'onBlur',
						types: '(event) => void',
						description: 'Handler method for the blur event.'
					}, {
						name: 'onChange',
						types: '(event) => any',
						description: 'Handler method for the change event.'
					}, {
						name: 'onClick',
						types: '(event) => any',
						description: 'Handler method for the click event.'
					}, {
						name: 'onFocus',
						types: '(event) => any',
						description: 'Handler method for the focus event.'
					}, {
						name: 'onKeyDown',
						types: '(event) => any',
						description: 'Handler method for the keydown event.'
					}, {
						name: 'placeholder',
						types: 'string',
						description: 'Set a text input placeholder.'
					}, {
						name: 'readOnly',
						types: 'boolean',
						default: 'false',
						description: 'Control whether to apply the readonly attribute.'
					}, {
						name: 'required',
						types: 'boolean',
						default: 'false',
						description: 'Make the text input required.'
					}, {
						name: 'title',
						types: 'string',
						description: 'Set the text input title.'
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
						description: 'Set the tooltip position for the text input.'
					}, {
						name: 'value',
						types: 'string',
						description: 'Set the text input value.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the text input.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the text input.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the text input.'
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
				'3.2.2',
				'3.3.1',
				'3.3.2',
				'4.1.2'
			],
			requirements: {
				structure: [
					'`<input type="text">`'
				],
				attributes: [
					'`aria-label` - description when label is hidden',
					'`aria-invalid` - true when entered value is not valid',
					'`aria-required` - true when entering a value is required',
					'`id` - needed to connect label with form element. If there is no id, autogenerated unique id is set',
					'`role="textbox"` - implicit with `<input type="text">`'
				],
				styling: [
					'Focus state styles'
				],
				keyboardOperability: [
					'`<input>` OOTB focusable'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSInputTextPreview;
