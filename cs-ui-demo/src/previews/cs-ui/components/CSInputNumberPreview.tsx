import React from 'react';
import { CSInputNumber } from '@cloudsense/cs-ui-components';
import { actions, actionsCode } from '../helpers/actions';
import { icons, iconsCode } from '../helpers/icons';

import Preview from '../Preview';

interface CSInputNumberPreviewState {
	focused: boolean;
	label?: string;
	actions?: string;
	borderRadius?: string;
	error?: string;
	errorMessage?: string;
	errorTooltip?: string;
	fractionDigits?: string;
	helpText?: string;
	hideSpinner?: string;
	icons?: string;
	labelHidden?: string;
	labelTitle?: string;
	locale?: string;
	max?: string;
	maxLength?: string;
	min?: string;
	name?: string;
	onBlur?: string;
	onChange?: string;
	onClick?: string;
	onFocus?: string;
	onKeyDown?: string;
	onPaste?: string;
	placeholder?: string;
	readOnly?: string;
	required?: string;
	stepInteger?: string;
	stepDecimal?: string;
	stepAny?: string;
	title?: string;
	tooltipPosition?: string;
	typeNumber?: string;
	typeText?: string;
	value?: string;
	id?: string;
}

class CSInputNumberPreview extends React.Component<{}, CSInputNumberPreviewState> {
	state: CSInputNumberPreviewState = {
		focused: false,
		value: '1',
		locale: '1211.3',
		stepDecimal: '12.456'
	};

	handleClick = () => alert('Input has been clicked.');
	handleBlur = () => alert('Input has lost focus.');
	handleKeyDown = (event: any) => alert(`Key ${event.key} has been pressed.`);
	handlePaste = () => alert('Value has been pasted.');
	handleFocus = () => {
		this.setState(prevState => {
			if (!prevState.focused) {
				alert('Input has gained focus.');
			}
			return { focused: !prevState.focused };
		});
	}
	handleChange = (event: React.ChangeEvent<HTMLInputElement>, stateName: string) => {
		this.setState((prevState: CSInputNumberPreviewState) => ({
			...prevState,
			[stateName]: Number(event.target.value)
		}));
	}

	getDoc = () => ({
		name: 'Input Number',
		usage: 'Number inputs are used for number entry.',
		accessible: 'yes',
		components: [
			{
				name: 'CSInputNumber',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for a number input. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								component: <CSInputNumber
									label="Enter value"
									value={this.state.label}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'label')}
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
								/>`
							}
						]
					}, {
						propName: 'actions',
						variations: [
							{
								primaryVariants: [
									'actions={actions}'
								],
								component: <CSInputNumber
									label="Enter value"
									value={this.state.actions}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'actions')}
									actions={actions}
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									actions={${actionsCode}}
								/>`
							}
						]
					}, {
						propName: 'borderRadius',
						variations: [
							{
								primaryVariants: 'borderRadius="0"',
								component: <CSInputNumber
									label="Enter value"
									value={this.state.borderRadius}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'borderRadius')}
									borderRadius="0"
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									borderRadius="0"
								/>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSInputNumber
									label="Enter value"
									disabled
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									disabled
								/>`
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
								component: <CSInputNumber
									label="Enter value"
									value={this.state.error}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'error')}
									error
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									error
								/>`
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariant: 'error={true}',
								component: <CSInputNumber
									label="Enter value"
									value={this.state.errorMessage}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'errorMessage')}
									error
									errorMessage="Error message."
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
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
								component: <CSInputNumber
									label="Enter value"
									value={this.state.errorTooltip}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'errorTooltip')}
									error
									errorMessage="Error message."
									errorTooltip
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									error
									errorMessage="Error message."
									errorTooltip
								/>`
							}
						]
					}, {
						propName: 'fractionDigits',
						alert: {
							variant: 'info',
							text: 'Locale format settings will override fractionDigits value.'
						},
						variations: [
							{
								component: <CSInputNumber
									label="Enter value"
									value={this.state.fractionDigits}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'fractionDigits')}
									fractionDigits={2}
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									fractionDigits={2}
								/>`
							}
						]
					}, {
						propName: 'helpText',
						variations: [
							{
								component: <CSInputNumber
									label="Enter value"
									value={this.state.helpText}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'helpText')}
									helpText="Help text example"
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									helpText="Help text example"
								/>`
							}
						]
					}, {
						propName: 'hidden',
						variations: [
							{
								primaryVariants: 'hidden={true}',
								component: <CSInputNumber
									label="Enter value"
									value="123"
									hidden
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									hidden
								/>`
							}
						]
					}, {
						propName: 'hideSpinner',
						variations: [
							{
								primaryVariants: 'hideSpinner={true}',
								component: <CSInputNumber
									label="Enter value"
									value={this.state.hideSpinner}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'hideSpinner')}
									hideSpinner
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									hideSpinner
								/>`
							}
						]
					}, {
						propName: 'icons',
						variations: [
							{
								primaryVariants: [
									'icons={icons}'
								],
								component: <CSInputNumber
									label="Enter value"
									value={this.state.icons}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'icons')}
									icons={icons}
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									icons={${iconsCode}}
								>`
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSInputNumber
									label="Enter value"
									value={this.state.labelHidden}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'labelHidden')}
									labelHidden
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									labelHidden
								/>`
							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle={true}',
								component: <CSInputNumber
									label="Enter value"
									value={this.state.labelTitle}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'labelTitle')}
									labelTitle
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									labelTitle
								/>`
							}
						]
					}, {
						propName: 'locale',
						alert: {
							variant: 'info',
							text: 'Locale prop will override type prop if it\'s defined.'
						},
						variations: [
							{
								component: <CSInputNumber
									label="Enter value"
									value={this.state.locale}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'locale')}
									locale={{ numLocale: 'en-EN', options: { style: 'currency', currency: 'GBP' } }}
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									locale={{
										numLocale: 'en-EN',
										options: {
											style: 'currency',
											currency: 'GBP'
										}
									}}
								/>`
							}
						]
					}, {
						propName: 'max',
						variations: [
							{
								component: <CSInputNumber
									label="Enter value"
									value={this.state.max}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'max')}
									max="5"
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									max="5"
								/>`
							}
						]
					}, {
						propName: 'maxLength',
						alert: {
							variant: 'info',
							text: 'This prop is only supported when the input type is set to text.'
						},
						variations: [
							{
								secondaryVariant: 'type="text"',
								component: <CSInputNumber
									label="Enter value"
									value={this.state.maxLength}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'maxLength')}
									type="text"
									maxLength={10}
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									type="text"
									maxLength={10}
								/>`
							}
						]
					}, {
						propName: 'min',
						variations: [
							{
								component: <CSInputNumber
									label="Enter value"
									value={this.state.min}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'min')}
									min="1"
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									min="1"
								/>`
							}
						]
					}, {
						propName: 'name',
						variations: [
							{
								component: <CSInputNumber
									label="Enter value"
									value={this.state.name}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'name')}
									name="Input number"
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									name="Input number"
								/>`
							}
						]
					}, {
						propName: 'onBlur',
						variations: [
							{
								component: <CSInputNumber
									label="Enter value"
									value={this.state.onBlur}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'onBlur')}
									onBlur={this.handleBlur}
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									onBlur={handleBlur}
								/>`
							}
						]
					}, {
						propName: 'onChange',
						variations: [
							{
								component: <CSInputNumber
									label="Enter value"
									value={this.state.onChange}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
										this.handleChange(event, 'onChange');
										alert('Value has changed.');
									}}
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
								/>`
							}
						]
					}, {
						propName: 'onClick',
						variations: [
							{
								component: <CSInputNumber
									label="Enter value"
									value={this.state.onClick}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'onClick')}
									onClick={this.handleClick}
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									onClick={handleClick}
								/>`
							}
						]
					}, {
						propName: 'onFocus',
						variations: [
							{
								component: <CSInputNumber
									label="Enter value"
									value={this.state.onFocus}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'onFocus')}
									onFocus={this.handleFocus}
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									onFocus={handleFocus}
								/>`
							}
						]
					}, {
						propName: 'onKeyDown',
						variations: [
							{
								component: <CSInputNumber
									label="Enter value"
									value={this.state.onKeyDown}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'onKeyDown')}
									onKeyDown={this.handleKeyDown}
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									onKeyDown={handleKeyDown}
								/>`
							}
						]
					}, {
						propName: 'onPaste',
						variations: [
							{
								component: <CSInputNumber
									label="Enter value"
									value={this.state.onPaste}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'onPaste')}
									onPaste={this.handlePaste}
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									onPaste={handlePaste}
								/>`
							}
						]
					}, {
						propName: 'placeholder',
						variations: [
							{
								component: <CSInputNumber
									label="Enter value"
									value={this.state.placeholder}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'placeholder')}
									placeholder="Placeholder text"
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									placeholder="Placeholder text"
								/>`
							}
						]
					}, {
						propName: 'readOnly',
						variations: [
							{
								primaryVariants: 'readOnly={true}',
								component: <CSInputNumber
									label="Enter value"
									value={this.state.readOnly}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'readOnly')}
									readOnly
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									readOnly
								/>`
							}
						]
					}, {
						propName: 'required',
						variations: [
							{
								primaryVariants: 'required={true}',
								component: <CSInputNumber
									label="Enter value"
									value={this.state.required}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'required')}
									required
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									required
								/>`
							}
						]
					}, {
						propName: 'step',
						variations: [
							{
								primaryVariants: 'step="1"',
								quickLink: 'integer',
								component: <CSInputNumber
									label="Enter value"
									value={this.state.stepInteger}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'stepInteger')}
									step="1"
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									step="1"
								/>`
							}, {
								primaryVariants: 'step="0.01"',
								quickLink: 'decimal',
								component: <CSInputNumber
									label="Enter value"
									value={this.state.stepDecimal}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'stepDecimal')}
									step="0.01"
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									step="0.01"
								/>`
							}, {
								primaryVariants: 'step="any"',
								quickLink: 'any',
								component: <CSInputNumber
									label="Enter value"
									value={this.state.stepAny}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'stepAny')}
									step="any"
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									step="any"
								/>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSInputNumber
									label="Enter value"
									value={this.state.title}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'title')}
									title="This is a title"
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									title="This is a title"
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
								secondaryVariant: 'helpText="text"',
								component: <CSInputNumber
									label="Enter value"
									value={this.state.tooltipPosition}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'tooltipPosition')}
									helpText="Help text example"
									tooltipPosition="top-left"
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									helpText="Help text example"
									tooltipPosition="top-left"
								/>`
							}
						]
					}, {
						propName: 'type',
						variations: [
							{
								primaryVariants: 'type="number"',
								quickLink: 'number',
								component: <CSInputNumber
									label="Enter value"
									value={this.state.typeNumber}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'typeNumber')}
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
								/>`
							}, {
								primaryVariants: 'type="text"',
								quickLink: 'text',
								component: <CSInputNumber
									label="Enter value"
									value={this.state.typeText}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'typeText')}
									type="text"
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
									type="text"
								/>`
							}
						]
					}, {
						propName: 'value',
						variations: [
							{
								secondaryVariants: ' onChange={() => void}',
								component: <CSInputNumber
									label="Enter value"
									value={this.state.value}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'value')}
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
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
								component: <CSInputNumber
									label="Enter value"
									value={this.state.id}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'id')}
									id="custom-id"
									className="custom-br-mint"
								/>,
								code: `<CSInputNumber
									label="Enter value"
									value={value}
									onChange={handleChange}
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
						description: 'Set the file input label.'
					}, {
						name: 'actions',
						customTypes: {
							name: 'CSInputNumberActionsProps',
							types: 'Array<CSInputNumberActionProps>'
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
						description: 'Disable the number input.'
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
						types: 'boolean',
						description: 'Show an error tooltip for the number input.'
					}, {
						name: 'fractionDigits',
						types: 'number',
						description: 'The number of digits to appear after the decimal point. Locale format settings will override fractionDigits value.'
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
						name: 'hideSpinner',
						types: 'boolean',
						default: 'false',
						description: 'Determine whether the spinner should appear.'
					}, {
						name: 'icons',
						customTypes: {
							name: 'CSInputNumberIconProps',
							types: 'Array<CSInputNumberIconProps>'
						},
						description: 'An array of objects which accepts valid CSIcon props or a getTooltip function to show an icon with a tooltip.'
					}, {
						name: 'labelHidden',
						types: 'boolean',
						default: 'false',
						description: 'Hide the file input label.'
					}, {
						name: 'labelTitle',
						types: 'boolean',
						description: 'Control whether to set the title attribute.'
					}, {
						name: 'locale',
						customTypes: {
							name: 'CSInputNumberNumberLocale',
							types: `
							numLocale: string;
							options?: {
								currency?: string;
								style?: CSInputNumberLocaleStyle;
								maximumFractionDigits?: number;
								minimumFractionDigits?: number;
							}`
						},
						description: 'Set the input number locale. The prop accepts an object which consists numLocale (string) for the desired locale and options (currency, style, maximumFractionDigits, minimumFractionDigits) for customizing the formatted locale value.'
					}, {
						name: 'max',
						types: 'any',
						description: 'Set a max value for the number input.'
					}, {
						name: 'maxLength',
						types: 'number',
						description: 'Set the maximum length of the value (can be used only with type="text").'
					}, {
						name: 'min',
						types: 'any',
						description: 'Set a min value for the number input.'
					}, {
						name: 'name',
						types: 'string',
						description: 'Set the number input name attribute.'
					}, {
						name: 'onBlur',
						types: '(event) => void',
						description: 'Handler method for the blur event.'
					}, {
						name: 'onChange',
						types: '(value) => void',
						description: 'Handler method for the change event.'
					}, {
						name: 'onClick',
						types: '(event) => void',
						description: 'Handler method for the click event.'
					}, {
						name: 'onFocus',
						types: '(event) => void',
						description: 'Handler method for the focus event.'
					}, {
						name: 'onKeyDown',
						types: '(event) => void',
						description: 'Handler method for the keydown event.'
					}, {
						name: 'onPaste',
						types: '(event) => void',
						description: 'Handler method for the paste event.'
					}, {
						name: 'placeholder',
						types: 'string',
						description: 'Set a number input placeholder.'
					}, {
						name: 'readOnly',
						types: 'boolean',
						default: 'false',
						description: 'Control whether to apply the readonly attribute.'
					}, {
						name: 'required',
						types: 'boolean',
						default: 'false',
						description: 'Make the number input required.'
					}, {
						name: 'step',
						types: 'string',
						description: 'Set which interval to use when using up and down arrows to adjust the value.'
					}, {
						name: 'title',
						types: 'string',
						description: 'Set the number input title.'
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
						description: 'Set the tooltip position for the number input.'
					}, {
						name: 'type',
						types: 'string',
						default: `'number'`,
						description: 'Set the number input field type.'
					}, {
						name: 'value',
						types: 'React.ReactText',
						description: 'Set the number input default value.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the number input.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the number input.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the number input.'
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
				'3.3.2'
			],
			requirements: {
				structure: [
					'`<input type="number">`'
				],
				attributes: [
					'`aria-label` - description when label is hidden',
					'`aria-invalid` - true when entered value is not valid',
					'`aria-required` - true when entering a value is required',
					'`aria-valuemin`',
					'`aria-valuemax`',
					'`aria-valuenow`',
					'`id` - needed to connect label with form element. If there is no id, autogenerated unique id is set',
					'`role="spinbutton"` - implicit by `<input type="number">`'
				],
				keyboardOperability: [
					'`<input type="number">` OOTB focusable and supports arrows `Up` and `Down` to increase or decrease the number'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSInputNumberPreview;
