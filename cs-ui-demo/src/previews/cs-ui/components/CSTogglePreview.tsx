import React from 'react';
import { CSToggle } from '@cloudsense/cs-ui-components';
import { actions } from '../helpers/actions';
import { icons, iconsCode } from '../helpers/icons';

import Preview from '../Preview';

interface CSTogglePreviewState {
	checked: boolean;
}

class CSTogglePreview extends React.Component<{}, CSTogglePreviewState> {
	state = { checked: true };

	handleChange = () => alert('Value has been toggled.');

	getDoc = () => ({
		name: 'Toggle',
		usage: 'A checkable input that communicates if an option is true, false or indeterminate.',
		accessible: 'yes',
		components: [
			{
				name: 'CSToggle',
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
						propName: 'actions',
						variations: [
							{
								primaryVariants: [
									'actions={actions}'
								],
								component: <CSToggle
									label="This is a label"
									actions={actions}
								/>,
								code: `<CSToggle
									label="This is a label"
									actions={${actions}}
								/>`
							}
						]
					}, {
						propName: 'checked',
						variations: [
							{
								primaryVariants: 'checked={true}',
								secondaryVariants: ' onChange={() => any}',
								component: <CSToggle
									label="This is a label"
									checked={this.state.checked}
									onChange={(event: any) => this.setState({ checked: event.target.checked })}
								/>,
								code: `<CSToggle
									label="This is a label"
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
								component: <CSToggle label="This is a label" disabled />,
								code: '<CSToggle label="This is a label" disabled />'
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
									errorMessage="Error message."
								/>,
								code: `<CSToggle
									label="This is a label"
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
								component: <CSToggle
									label="This is a label"
									error
									errorMessage="Error message."
									errorTooltip
								/>,
								code: `<CSToggle
									label="This is a label"
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
								component: <CSToggle label="This is a label" helpText="Help text example" />,
								code: '<CSToggle label="This is a label" helpText="Help text example" />'
							}
						]
					}, {
						propName: 'icons',
						variations: [
							{
								primaryVariants: [
									'icons={icons}'
								],
								component: <CSToggle
									label="This is a label"
									icons={icons}
								/>,
								code: `<CSToggle
									label="This is a label"
									icons={${iconsCode}}
								/>`
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
						propName: 'readOnly',
						variations: [
							{
								primaryVariants: 'readOnly={true}',
								component: <CSToggle
									label="This is a label"
									readOnly
									checked
								/>,
								code: `<CSToggle
									label="This is a label"
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
									className="custom-br-mint"
								/>,
								code: `<CSToggle
									label="This is a label"
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
						description: 'Set the toggle label.'
					}, {
						name: 'actions',
						customTypes: {
							name: 'CSToggleActionsProps',
							types: 'Array<CSToggleActionProps>'
						},
						description: 'An array of objects which accepts valid CSIcon & CSButton props, a getTooltip function to show an icon with a tooltip & an action prop for the button action/function.'
					}, {
						name: 'checked',
						types: 'boolean',
						default: 'false',
						description: 'Control the checked state of the toggle.'
					}, {
						name: 'disabled',
						types: 'boolean',
						default: 'false',
						description: 'Disable the toggle.'
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
						description: 'Set the error message or messages for the toggle.'
					}, {
						name: 'errorTooltip',
						types: 'boolean',
						description: 'Show an error tooltip for the toggle.'
					}, {
						name: 'helpText',
						types: 'string',
						description: 'Set the text to be displayed in the tooltip.'
					}, {
						name: 'icons',
						customTypes: {
							name: 'CSToggleIconProps',
							types: 'Array<CSToggleIconProps>'
						},
						description: 'An array of objects which accepts valid CSIcon props or a getTooltip function to show an icon with a tooltip.'
					}, {
						name: 'labelHidden',
						types: 'boolean',
						default: 'false',
						description: 'Hide the toggle label.'
					}, {
						name: 'labelPosition',
						customTypes: {
							name: 'CSToggleLabelPosition',
							types: [`'default'`, `'left'`]
						},
						default: `'default'`,
						description: 'Set the label position.'
					}, {
						name: 'labelTitle',
						types: 'boolean',
						description: 'Control whether to set the title attribute.'
					}, {
						name: 'onChange',
						types: '(event) => any',
						description: 'Handler method for the change event.'
					}, {
						name: 'readOnly',
						types: 'boolean',
						default: 'false',
						description: 'Control whether to apply the readonly attribute.'
					}, {
						name: 'required',
						types: 'boolean',
						default: 'false',
						description: 'Set the toggle to required.'
					}, {
						name: 'title',
						types: 'string',
						description: 'Set the toggle title.'
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
						description: 'Set the tooltip position for the toggle.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the toggle.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the toggle.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the toggle input.'
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
				'3.2.1',
				'3.2.2',
				'3.3.1',
				'3.3.2',
				'4.1.2'
			],
			requirements: {
				structure: [
					'`<input type="checkbox">` - hidden',
					'`<span>` imitates toggle with custom style',
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
					'`<input type="checkbox">` OOTB focusable and supports `Space` key'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSTogglePreview;
