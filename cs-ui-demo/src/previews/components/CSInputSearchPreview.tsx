import React from 'react';
import { CSInputSearch } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

interface CSInputSearchPreviewState {
	focused: boolean;
}

class CSInputSearchPreview extends React.Component<{}, CSInputSearchPreviewState> {
	state = { focused: false };

	handleChange = () => alert('Value has changed.');
	handleBlur = () => alert('Input has lost focus.');
	handleKeyDown = (event: any) => alert(`Key ${event.key} has been pressed.`);
	handleClearSearch = () => alert('Value has been cleared.');
	handleFocus = () => {
		this.setState(prevState => {
			if (!prevState.focused) {
				alert('Input has gained focus.');
			}
			return { focused: !prevState.focused };
		});
	}

	getDoc = () => ({
		name: 'Input Search',
		usage: 'Search input is used for search value entry.',
		accessible: 'yes',
		components: [
			{
				name: 'CSInputSearch',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for a search input. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								component: <CSInputSearch label="Type here" />,
								code: '<CSInputSearch label="Type here" />'
							}
						]
					}, {
						propName: 'autoFocus',
						variations: [
							{
								primaryVariants: 'autoFocus={true}',
								component: <CSInputSearch label="Type here" autoFocus />,
								code: '<CSInputSearch label="Type here" autoFocus />'
							}
						]
					}, {
						propName: 'borderRadius',
						variations: [
							{
								primaryVariants: 'borderRadius="0"',
								component: <CSInputSearch label="Type here" borderRadius="0" />,
								code: '<CSInputSearch label="Type here" borderRadius="0" />'
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSInputSearch label="Type here" disabled />,
								code: '<CSInputSearch label="Type here" disabled />'
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
								component: <CSInputSearch label="Type here" error />,
								code: '<CSInputSearch label="Type here" error />'
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariants: 'error={true}',
								component: <CSInputSearch
									label="Type here"
									error
									errorMessage="Error message."
								/>,
								code: `<CSInputSearch
									label="Type here"
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
								component: <CSInputSearch
									label="Enter value"
									error
									errorMessage="Error message."
									errorTooltip
								/>,
								code: `<CSInputSearch
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
								component: <CSInputSearch label="Type here" helpText="Help text example" />,
								code: '<CSInputSearch label="Type here" helpText="Help text example" />'
							}
						]
					}, {
						propName: 'hidden',
						variations: [
							{
								primaryVariants: 'hidden={true}',
								component: <CSInputSearch label="Type here" hidden />,
								code: '<CSInputSearch label="Type here" hidden />'
							}
						]
					}, {
						propName: 'iconPosition',
						variations: [
							{
								primaryVariants: 'iconPosition="right"',
								component: <CSInputSearch label="Type here" iconPosition="right" />,
								code: '<CSInputSearch label="Type here" iconPosition="right" />'
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSInputSearch label="Type here" labelHidden />,
								code: '<CSInputSearch label="Type here" labelHidden />'
							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle={true}',
								component: <CSInputSearch label="Type here" labelTitle />,
								code: '<CSInputSearch label="Type here" labelTitle />'
							}
						]
					}, {
						propName: 'onBlur',
						variations: [
							{
								component: <CSInputSearch label="Type here" onBlur={this.handleBlur} />,
								code: '<CSInputSearch label="Type here" onBlur={this.handleBlur} />'
							}
						]
					}, {
						propName: 'onChange',
						variations: [
							{
								component: <CSInputSearch label="Type here" onChange={this.handleChange} />,
								code: '<CSInputSearch label="Type here" onChange={this.handleChange} />'
							}
						]
					}, {
						propName: 'onClearSearch',
						description: 'Provides option to call a function after search cleared to provide extra functionality',
						variations: [
							{
								component: <CSInputSearch label="Type here" onClearSearch={this.handleClearSearch} />,
								code: '<CSInputSearch label="Type here" onClearSearch={this.handleClearSearch} />'
							}
						]
					}, {
						propName: 'onFocus',
						variations: [
							{
								component: <CSInputSearch label="Type here" onFocus={this.handleFocus} />,
								code: '<CSInputSearch label="Type here" onFocus={this.handleFocus} />'
							}
						]
					}, {
						propName: 'onKeyDown',
						variations: [
							{
								component: <CSInputSearch label="Type here" onKeyDown={this.handleKeyDown} />,
								code: '<CSInputSearch label="Type here" onKeyDown={this.handleKeyDown} />'
							}
						]
					}, {
						propName: 'placeholder',
						variations: [
							{
								component: <CSInputSearch label="Type here" placeholder="Search name" />,
								code: '<CSInputSearch label="Type here" placeholder="Search name" />'
							}
						]
					}, {
						propName: 'required',
						variations: [
							{
								primaryVariants: 'required={true}',
								component: <CSInputSearch label="Type here" required />,
								code: '<CSInputSearch label="Type here" required />'
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSInputSearch label="Type here" title="This is a title" />,
								code: '<CSInputSearch label="Type here" title="This is a title" />'
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
								component: <CSInputSearch
									label="Type here"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>,
								code: `<CSInputSearch
									label="Type here"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>`
							}
						]
					}, {
						propName: 'value',
						variations: [
							{
								component: <CSInputSearch label="Type here" value="Value" />,
								code: '<CSInputSearch label="Type here" value="Value" />'
							}
						]
					}, {
						propName: 'width',
						variations: [
							{
								primaryVariants: 'width="50%"',
								component: <CSInputSearch label="Type here" width="50%" />,
								code: '<CSInputSearch label="Type here" width="50%" />'
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
								component: <CSInputSearch
									label="Type here"
									id="custom-id"
									className="custom-br-mint"
								/>,
								code: `<CSInputSearch
									label="Type here"
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
						description: 'Set the search input label.'
					}, {
						name: 'autoFocus',
						types: 'boolean',
						default: 'false',
						description: 'Set whether the search input should be autofocused.'
					}, {
						name: 'borderRadius',
						types: 'string',
						default: `'0.25rem'`,
						description: 'Set a border radius style.'
					}, {
						name: 'disabled',
						types: 'boolean',
						default: 'false',
						description: 'Disable the search input.'
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
						description: 'Set the error message or messages for the number input.'
					}, {
						name: 'errorTooltip',
						customTypes: {
							name: 'CSFieldErrorMsgType',
							types: ['string', 'Array<string>']
						},
						description: 'Set the error message tooltip for the search input.'
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
						name: 'iconPosition',
						customTypes: {
							name: 'CSInputSearchIconPosition',
							types: [`'left'`, `'right'`]
						},
						default: `'left'`,
						description: 'Set where the icon should be positioned.'
					}, {
						name: 'labelHidden',
						types: 'boolean',
						default: 'false',
						description: 'Hide the search input label.'
					}, {
						name: 'labelTitle',
						types: 'boolean',
						description: 'Control whether to set the title attribute.'
					}, {
						name: 'onBlur',
						types: '(event) => void',
						description: 'Handler method for the blur event.'
					}, {
						name: 'onChange',
						types: '(event) => void',
						description: 'Handler method for the change event.'
					}, {
						name: 'onClearSearch',
						types: '() => void',
						description: 'Handler method for when the input is cleared.'
					}, {
						name: 'onFocus',
						types: '(event) => any',
						description: 'Handler method for the focus event.'
					}, {
						name: 'onKeyDown',
						types: '(event) => void',
						description: 'Handler method for the keydown event.'
					}, {
						name: 'placeholder',
						types: 'string',
						description: 'Set a search input placeholder.'
					}, {
						name: 'required',
						types: 'boolean',
						default: 'false',
						description: 'Make the search input required.'
					}, {
						name: 'title',
						types: 'string',
						description: 'Set the search input title.'
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
						description: 'Set the tooltip position for the search input.'
					}, {
						name: 'value',
						types: 'string',
						description: 'Set the search input value.'
					}, {
						name: 'width',
						types: 'string',
						description: 'Set the search input field width. (eg. 100%, 20rem, 400px, etc.)'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the search input.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the search input.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the search input.'
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
					'`<input>`',
					'Icon as a child and `<CSIcon>`',
					'Clear button is `<CSButton>`'
				],
				attributes: [
					'`aria-label` - description when label is hidden',
					'`aria-invalid` - true when entered value is not valid',
					'`aria-required` - true when entering a value is required',
					'`id` - needed to connect label with form element. If there is no id, autogenerated unique id is set'
				],
				styling: [
					'Focus state styles'
				],
				keyboardOperability: [
					'`<input>` OOTB focusable and supports click with `Enter`',
					'`<CSButton>` - focusable and supports clicks with `Enter` and `Space`'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSInputSearchPreview;
