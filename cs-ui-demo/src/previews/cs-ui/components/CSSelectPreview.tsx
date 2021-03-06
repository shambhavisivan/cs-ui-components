import React from 'react';
import { CSSelect } from '@cloudsense/cs-ui-components';
import { actions, actionsCode } from '../helpers/actions';
import { icons, iconsCode } from '../helpers/icons';

import Preview from '../Preview';

interface CSSelectPreviewState {
	value: string;
}

class CSSelectPreview extends React.Component<{}, CSSelectPreviewState> {
	state = { value: '30' };

	handleChange = () => alert('Selection has changed.');
	handleBlur = () => alert('Select has lost focus.');
	handleClick = () => alert('Select has been clicked.');
	handleKeyDown = (event: any) => alert(`Key ${event.key} has been pressed.`);

	getDoc = () => ({
		name: 'Select',
		usage: 'Select element presents a menu of options.',
		accessible: 'yes',
		alerts: {
			variant: 'error',
			text: 'CSSelect is deprecated and should not be used. Use CSPicklist instead.'
		},
		components: [
			{
				name: 'CSSelect',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for select. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								component: <CSSelect label="Choose color">
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>,
								code: `<CSSelect label="Choose color">
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'actions',
						variations: [
							{
								primaryVariants: [
									'actions={actions}'
								],
								component: <CSSelect
									label="Enter value"
									actions={actions}
								>
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>,
								code: `<CSSelect
									label="Enter value"
									actions={${actionsCode}}
								>
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'borderRadius',
						variations: [
							{
								primaryVariants: 'borderRadius="0"',
								component: <CSSelect label="Choose" borderRadius="0">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>,
								code: `<CSSelect label="Choose" borderRadius="0">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSSelect label="Choose number" disabled>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>,
								code: `<CSSelect label="Choose number" disabled>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>`
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
								component: <CSSelect label="Choose amount" error>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect label="Choose amount" error>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariants: 'error={true}',
								component: <CSSelect
									label="Choose amount"
									error
									errorMessage="Error message."
								>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect
									label="Choose amount"
									error
									errorMessage="Error message."
								>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'errorTooltip',
						variations: [
							{
								primaryVariants: 'errorTooltip={true}',
								secondaryVariants: 'error={true}',
								component: <CSSelect
									label="Choose amount"
									error
									errorMessage="Error message."
									errorTooltip
								>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect
									label="Choose amount"
									error
									errorMessage="Error message."
									errorTooltip
								>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'helpText',
						variations: [
							{
								component: <CSSelect label="Choose number" helpText="Help text example">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>,
								code: `<CSSelect label="Choose number" helpText="Help text example">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'hidden',
						variations: [
							{
								primaryVariants: 'hidden={true}',
								component: <CSSelect label="Choose number" hidden>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>,
								code: `<CSSelect label="Choose number" hidden>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'icons',
						variations: [
							{
								primaryVariants: [
									'icons={icons}'
								],
								component: <CSSelect
									label="Enter value"
									icons={icons}
								>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>,
								code: `<CSSelect
									label="Enter value"
									icons={${iconsCode}}
								>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSSelect label="Choose color" labelHidden>
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>,
								code: `<CSSelect label="Choose color" labelHidden>
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle=[true]',
								component: <CSSelect label="Choose color" labelTitle>
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>,
								code: `<CSSelect label="Choose color" labelTitle>
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'name',
						variations: [
							{
								component: <CSSelect label="Choose amount" name="Select field">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect label="Choose amount" name="Select field">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'onBlur',
						variations: [
							{
								component: <CSSelect label="Choose amount" onBlur={this.handleBlur}>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect label="Choose amount" onBlur={this.handleBlur}>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'onChange',
						variations: [
							{
								component: <CSSelect label="Choose amount" onChange={this.handleChange}>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect label="Choose amount" onChange={this.handleChange}>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'onClick',
						variations: [
							{
								component: <CSSelect label="Choose amount" onClick={this.handleClick}>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect label="Choose amount" onClick={this.handleClick}>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'onKeyDown',
						variations: [
							{
								component: <CSSelect label="Choose amount" onKeyDown={this.handleKeyDown}>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect label="Choose amount" onKeyDown={this.handleKeyDown}>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'readOnly',
						variations: [
							{
								primaryVariants: 'readOnly={true}',
								component: <CSSelect label="Choose amount" readOnly>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect label="Choose amount" readOnly>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'required',
						variations: [
							{
								primaryVariants: 'required={true}',
								component: <CSSelect label="Choose amount" required>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect label="Choose amount" required>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSSelect label="Choose amount" title="This is a title">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect label="Choose amount" title="This is a title">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
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
								component: <CSSelect
									label="Choose number"
									helpText="Help text example"
									tooltipPosition="top-left"
								>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>,
								code: `<CSSelect
									label="Choose number"
									helpText="Help text example"
									tooltipPosition="top-left"
								>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>`
							}
						]
					}, {
						propName: 'value',
						variations: [
							{
								secondaryVariants: ' onChange={() => void}',
								component: <CSSelect
									label="Choose amount"
									value={this.state.value}
									onChange={(value: any) => this.setState({ value })}>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect
									label="Choose amount"
									value={this.state.value}
									onChange={(value: any) => this.setState({ value })}
								>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
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
								component: <CSSelect
									label="Choose amount"
									id="custom-id"
									className="custom-br-mint"
								>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>,
								code: `<CSSelect
									label="Choose amount"
									id="custom-id"
									className="custom-br-mint"
								>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>`
							}
						]
					}
				],
				properties: [
					{
						name: 'label',
						required: true,
						types: 'string',
						description: 'Set the select label.'
					}, {
						name: 'actions',
						customTypes: {
							name: 'CSSelectActionsProps',
							types: 'Array<CSSelectActionProps>'
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
						description: 'Disable the select.'
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
						description: 'Set the error message or messages for the select.'
					}, {
						name: 'errorTooltip',
						types: 'boolean',
						description: 'Show an error tooltip for the select.'
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
							name: 'CSSelectIconProps',
							types: 'Array<CSSelectIconProps>'
						},
						description: 'An array of objects which accepts valid CSIcon props or a getTooltip function to show an icon with a tooltip.'
					}, {
						name: 'labelHidden',
						types: 'boolean',
						default: 'false',
						description: 'Hide the select label.'
					}, {
						name: 'labelTitle',
						types: 'boolean',
						description: 'Control whether to set the title attribute.'
					}, {
						name: 'name',
						types: 'string',
						description: 'Set the checkbox name attribute.'
					}, {
						name: 'onBlur',
						types: '(event) => void',
						description: 'Handler method for the blur event.'
					}, {
						name: 'onChange',
						types: '(event) => void',
						description: 'Handler method for the change event.'
					}, {
						name: 'onClick',
						types: '(event) => void',
						description: 'Handler method for the click event.'
					}, {
						name: 'onKeyDown',
						types: '(event) => void',
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
						description: 'Make the select required.'
					}, {
						name: 'title',
						types: 'string',
						description: 'Set the select title.'
					}, {
						name: 'tooltipPosition',
						customTypes: {
							name: 'CSTooltipPosition',
							types: [
								`'bottom-right'`,
								`'bottom-left'`,
								`'top-right'`,
								`'top-left'`,
								`'top-center'`,
								`'bottom-center'`,
								`'right-top'`,
								`'right-center'`,
								`'right-bottom'`,
								`'left-top'`,
								`'left-center'`,
								`'left-bottom'`
							]
						},
						default: `'top-right'`,
						description: 'Set the tooltip position for the select.'
					}, {
						name: 'value',
						types: 'any',
						description: 'Pass a value to the select.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the select.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the select.'
					}, {
						name: 'children',
						customTypes: {
							name: 'CSSelectChildren',
							types: ['<option>', 'any']
						},
						description: 'This component is designed to support <option> tags as children.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the select tag.'
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
					'`<select>`',
					'Icon as a child element of wrapper with `aria-hidden`'
				],
				attributes: [
					'`aria-invalid` - true when there is an error',
					'`aria-required` - true when selecting an option is required',
					'`aria-label` - description when label is hidden',
					'`id` - needed to connect label with form element. If there is no id, autogenerated unique id is set',
					'`role="combobox"` - implicit with `<select>`'
				],
				keyboardOperability: [
					'`<select>` OOTB focusable and dropdown operable with arrows `Up` and  `Down`'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSSelectPreview;
