import React from 'react';
import { CSButtonSize, CSCheckbox, CSTooltipPosition, CSIconOrigin } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

interface CSCheckboxPreviewState {
	checked: boolean;
}

class CSCheckboxPreview extends React.Component<{}, CSCheckboxPreviewState> {
	state = {
		checked: true,
		icons: [
			{ iconName: 'cart'},
			{
				iconName: 'tag',
				iconOrigin: 'cs' as CSIconOrigin,
				getTooltip: {
					content: ['icons tooltip'],
					delay: 300,
					maxWidth: '20rem',
					padding: '0.5rem',
					position: 'bottom-left' as CSTooltipPosition,
					stickyOnClick: true
				}
			}
		],
		actions: [
			{
				action: () => alert('Delete option called'),
				labelHidden: true,
				icon: { iconName: 'delete' },
				size: 'small' as CSButtonSize,
				name: 'Delete'
			},
			{
				action: () => alert('Add option called'),
				icon: { iconName: 'add' },
				labelHidden: true,
				size: 'small' as CSButtonSize,
				name: 'Add',
				getTooltip: {
					content: ['actions tooltip'],
					delay: 300,
					padding: '0.5rem',
					position: 'bottom-left' as CSTooltipPosition,
					stickyOnClick: true
				}
			}
		]
	};

	handleChange = () => alert('Checkbox has been toggled.');
	handleClick = () => alert('Checkbox has been clicked.');
	handleKeyDown = () => alert('Key has been pressed.');

	getDoc = () => ({
		name: 'Checkbox',
		usage: 'A checkable input that communicates if an option is true, false or indeterminate.',
		accessible: 'yes',
		components: [
			{
				name: 'CSCheckbox',
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
						propName: 'actions',
						variations: [
							{
								primaryVariants: [
									'actions={this.state.actions}'
								],
								component: <CSCheckbox
									label="Select option"
									actions={this.state.actions}
								/>,
								code: `<CSCheckbox
									label="Select option"
									actions={[
										{
											action: () => alert('Delete option called'),
											icon: { iconName: 'delete' },
											labelHidden: true,
											size: 'small' as CSButtonSize,
											name: 'Delete'
										},
										{
											action: () => alert('Add option called'),
											icon: { iconName: 'add' },
											labelHidden: true,
											size: 'small' as CSButtonSize,
											name: 'Add',
											getTooltip: {
												content: ['actions tooltip'],
												delay: 300,
												padding: '0.5rem',
												position: 'bottom-left' as CSTooltipPosition,
												stickyOnClick: true,
											}
										}
									]}
								/>`
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
								secondaryVariants: ' onChange={() => any}',
								component: <CSCheckbox
									label="Select option"
									checked={this.state.checked}
									onChange={(event: any) => this.setState({ checked: event.target.checked })}
								/>,
								code: `<CSCheckbox
									label="Select option"
									checked={this.state.checked}
									onChange={(event: any) => this.setState({ checked: event.target.checked })}
								/>`
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
							text: 'Component in error state should always contain associated error message to satisfy accessibility best practices.'
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
									errorMessage="Error message."
								/>,
								code: `<CSCheckbox
									label="Select option"
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
								component: <CSCheckbox
									label="Select option"
									error
									errorMessage="Error message."
									errorTooltip
								/>,
								code: `<CSInputText
									label="Select option"
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
								component: <CSCheckbox label="Select option" helpText="Help text example" />,
								code: '<CSCheckbox label="Select option" helpText="Help text example" />'
							}
						]
					}, {
						propName: 'hidden',
						variations: [
							{
								primaryVariants: 'hidden={true}',
								component: <CSCheckbox label="Select option" hidden />,
								code: '<CSCheckbox label="Select option" hidden />'
							}
						]
					}, {
						propName: 'icons',
						variations: [
							{
								primaryVariants: [
									'icons={this.state.icons}'
								],
								component: <CSCheckbox
									label="Select option"
									icons={this.state.icons}
								/>,
								code: `<CSCheckbox
									label="Select option"
									icons={[
										{ iconName: 'cart'},
										{
											iconName: 'tag',
											iconOrigin: 'cs' as CSIconOrigin,
											getTooltip: {
												content: ['icons tooltip'],
												delay: 300,
												maxWidth: '20rem',
												padding: '0.5rem',
												position: 'bottom-left' as CSTooltipPosition,
												stickyOnClick: true
											}
										}
									]}
								/>`
							}
						]
					}, {
						propName: 'indeterminate',
						variations: [
							{
								primaryVariants: 'indeterminate={true}',
								component: <CSCheckbox label="Select option" indeterminate />,
								code: '<CSCheckbox label="Select option" indeterminate />'
							},
							{
								primaryVariants: 'indeterminate={true}',
								secondaryVariants: 'variant="brand"',
								component: <CSCheckbox label="Select option" variant="brand" indeterminate />,
								code: '<CSCheckbox label="Select option" variant="brand" indeterminate />'
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
							},
							{
								primaryVariants: 'labelPosition="right"',
								component: <CSCheckbox label="Select option" labelPosition="right" />,
								code: '<CSCheckbox label="Select option" labelPosition="right" />'
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
					}, {
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
						propName: 'onKeyDown',
						variations: [
							{
								component: <CSCheckbox label="Select option" onKeyDown={this.handleKeyDown} />,
								code: '<CSCheckbox label="Select option" onKeyDown={this.handleKeyDown} />'
							}
						]
					}, {
						propName: 'readOnly',
						variations: [
							{
								primaryVariants: 'readOnly={true}',
								component: <CSCheckbox
									label="Select option"
									readOnly
									checked
								/>,
								code: `<CSCheckbox
									label="Select option"
									readOnly
									checked
								/>`
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
									className="custom-br-mint"
								/>,
								code: `<CSCheckbox
									label="Select option"
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
						description: 'Set the checkbox label.'
					}, {
						name: 'actions',
						customTypes: {
							name: 'CSCheckboxActionsProps',
							types: 'Array<CSCheckboxActionProps>'
						},
						description: 'An array of objects which accepts valid CSIcon & CSButton props, a getTooltip function to show an icon with a tooltip & an action prop for the button action/function.'
					}, {
						name: 'borderRadius',
						types: 'string',
						default: `'0.125rem'`,
						description: 'Set a border radius style.'
					}, {
						name: 'checked',
						types: 'boolean',
						description: 'Control the checked state of the checkbox.'
					}, {
						name: 'disabled',
						types: 'boolean',
						default: 'false',
						description: 'Disable the checkbox.'
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
						description: 'Set the error message or messages for the checkbox.'
					}, {
						name: 'errorTooltip',
						customTypes: {
							name: 'CSFieldErrorMsgType',
							types: ['string', 'Array<string>']
						},
						description: 'Set the error tooltip messages for the checkbox.'
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
							name: 'CSCheckboxIconProps',
							types: 'Array<CSCheckboxIconProps>'
						},
						description: 'An array of objects which accepts valid CSIcon props or a getTooltip function to show an icon with a tooltip.'
					}, {
						name: 'indeterminate',
						types: ['boolean'],
						default: 'false',
						description: 'Control the indeterminate state of the checkbox.'
					}, {
						name: 'labelHidden',
						types: 'boolean',
						default: 'false',
						description: 'Hide the checkbox label.'
					}, {
						name: 'labelPosition',
						customTypes: {
							name: 'CSCheckboxLabelPosition',
							types: [`'left'`, `'right'`]
						},
						description: 'Set the label position.'
					}, {
						name: 'labelTitle',
						types: 'boolean',
						description: 'Control whether to set the title attribute.'
					}, {
						name: 'name',
						types: 'string',
						description: 'Set the checkbox name attribute.'
					}, {
						name: 'onChange',
						types: '(event) => any',
						description: 'Handler method for the change event.'
					}, {
						name: 'onKeyDown',
						types: '(event) => any',
						description: 'Handler method for the keydown event.'
					}, {
						name: 'readOnly',
						types: 'boolean',
						default: 'false',
						description: 'Control whether to apply the readonly attribute.'
					}, {
						name: 'required',
						types: 'boolean',
						default: 'false',
						description: 'Set the checkbox to required.'
					}, {
						name: 'title',
						types: 'string',
						description: 'Set the checkbox title.'
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
						description: 'Set the tooltip position for the checkbox.'
					}, {
						name: 'variant',
						customTypes: {
							name: 'CSCheckboxVariant',
							types: [`'neutral'`, `'brand'`]
						},
						default: `'neutral'`,
						description: 'Set the checkbox variant.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the checkbox.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the checkbox.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the checkbox input.'
					}
				]
			}
		],
		accessibility: {
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
			requirements: {
				structure: [
					'`<input type="checkbox">` - visually hidden',
					'`<span>` imitating checkbox with custom style',
					'`<input>` and `<span>` wrapped in `<label>` - allowing click on span to change input'
				],
				attributes: [
					'`aria-label` - description when label is hidden',
					'`aria-required` - true when selecting an option is required',
					'`aria-invalid` - true when there is an error',
					'`aria-readonly` - true when is it readonly, therefore focusable, but not operable',
					'`id` - needed to connect label with form element. If there is no id, autogenerated unique id is set',
					'`role="checkbox"` - implicit by `<input type="checkbox">`'
				],
				styling: [
					'Focus state styles'
				],
				keyboardOperability: [
					'`<input>` OOTB focusable and supports `Space` key'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSCheckboxPreview;
