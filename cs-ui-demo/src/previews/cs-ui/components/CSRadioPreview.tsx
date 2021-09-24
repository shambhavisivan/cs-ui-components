import React from 'react';
import { CSRadio, CSRadioOption } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

interface CSRadioOptionState {
	focused: boolean;
}

class CSRadioPreview extends React.Component<{}, CSRadioOptionState> {
	state = { focused: false };
	handleChange = () => alert('Selection has changed.');
	handleBlur = () => {
		this.setState(prevState => {
			if (!prevState.focused) {
				alert('Radio option has lost focus.');
			}
			return { focused: !prevState.focused };
		});
	}

	getDoc = () => ({
		name: 'Radio',
		usage: 'A checkable input that communicates if an option is true, false or indeterminate.',
		accessible: 'yes',
		components: [
			{
				name: 'CSRadio',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for a radio. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								component: <CSRadio label="This is a label">
									<CSRadioOption label="high" name="label" />
									<CSRadioOption label="low" name="label" />
								</CSRadio>,
								code: `<CSRadio label="This is a label">
									<CSRadioOption label="high" name="label" />
									<CSRadioOption label="low" name="label" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSRadio label="This is a label" disabled>
									<CSRadioOption label="Cola" name="disabled" />
									<CSRadioOption label="Pepsi" name="disabled" />
								</CSRadio>,
								code: `<CSRadio label="This is a label" disabled>
									<CSRadioOption label="Cola" name="disabled" />
									<CSRadioOption label="Pepsi" name="disabled" />
								</CSRadio>`
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
								component: <CSRadio label="This is a label" error>
									<CSRadioOption label="male" name="error" />
									<CSRadioOption label="female" name="error" />
								</CSRadio>,
								code: `<CSRadio label="This is a label" error>
									<CSRadioOption label="male" name="error" />
									<CSRadioOption label="female" name="error" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariants: 'error={true}',
								component: <CSRadio
									label="This is a label"
									error
									errorMessage="Error message."
								>
									<CSRadioOption label="car" name="vehicle" />
									<CSRadioOption label="bus" name="vehicle" />
								</CSRadio>,
								code: `<CSRadio
									label="This is a label"
									error
									errorMessage="Error message."
								>
									<CSRadioOption label="car" name="vehicle" />
									<CSRadioOption label="bus" name="vehicle" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'helpText',
						variations: [
							{
								component: <CSRadio
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="bottom-right"
								>
									<CSRadioOption label="red" name="color" />
									<CSRadioOption label="blue" name="color" />
								</CSRadio>,
								code: `<CSRadio
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="bottom-right"
								>
									<CSRadioOption label="red" name="color" />
									<CSRadioOption label="blue" name="color" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSRadio label="This is a label" labelHidden>
									<CSRadioOption label="macOS" name="os" />
									<CSRadioOption label="Windows" name="os" />
								</CSRadio>,
								code: `<CSRadio label="This is a label" labelHidden>
									<CSRadioOption label="macOS" name="os" />
									<CSRadioOption label="Windows" name="os" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle={true}',
								component: <CSRadio label="This is a label" labelTitle>
									<CSRadioOption label="iPhone" name="phone" />
									<CSRadioOption label="Android" name="phone" />
								</CSRadio>,
								code: `<CSRadio label="This is a label" labelTitle>
									<CSRadioOption label="iPhone" name="phone" />
									<CSRadioOption label="Android" name="phone" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'required',
						variations: [
							{
								primaryVariants: 'required={true}',
								component: <CSRadio label="This is a label" required>
									<CSRadioOption label="England" name="country" />
									<CSRadioOption label="Croatia" name="country" />
								</CSRadio>,
								code: `<CSRadio label="This is a label" required>
									<CSRadioOption label="England" name="country" />
									<CSRadioOption label="Croatia" name="country" />
								</CSRadio>`
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
								component: <CSRadio
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="top-left"
								>
									<CSRadioOption label="left" name="direction" />
									<CSRadioOption label="right" name="direction" />
								</CSRadio>,
								code: `<CSRadio
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="top-left"
								>
									<CSRadioOption label="left" name="direction" />
									<CSRadioOption label="right" name="direction" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'variant',
						variations: [
							{
								primaryVariants: 'variant="neutral"',
								quickLink: 'neutral',
								component: <CSRadio label="This is a label">
									<CSRadioOption label="Atlantic" name="ocean" />
									<CSRadioOption label="Pacific" name="ocean" />
								</CSRadio>,
								code: `<CSRadio label="This is a label">
									<CSRadioOption label="Atlantic" name="ocean" />
									<CSRadioOption label="Pacific" name="ocean" />
								</CSRadio>`
							}, {
								primaryVariants: 'variant="brand"',
								quickLink: 'brand',
								component: <CSRadio label="This is a label" variant="brand">
									<CSRadioOption label="Africa" name="continent" />
									<CSRadioOption label="America" name="continent" />
								</CSRadio>,
								code: `<CSRadio label="This is a label" variant="brand">
									<CSRadioOption label="Africa" name="continent" />
									<CSRadioOption label="America" name="continent" />
								</CSRadio>`
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
								component: <CSRadio
									label="This is a label"
									id="custom-id"
									className="custom-br-mint"
								>
									<CSRadioOption
										label="2020"
										name="year"
										id="custom-option-id"
										className="custom-br-purple"
									/>
									<CSRadioOption label="2021" name="year" />
								</CSRadio>,
								code: `<CSRadio
									label="This is a label"
									id="custom-id"
									className="custom-br-mint"
								>
									<CSRadioOption
										label="2020"
										name="year"
										id="custom-option-id"
										className="custom-br-purple"
									/>
									<CSRadioOption label="2021" name="year" />
								</CSRadio>`
							}
						]
					}
				],
				properties: [
					{
						name: 'label',
						required: true,
						types: 'string',
						description: 'Set the radio label.'
					}, {
						name: 'disabled',
						types: 'boolean',
						default: 'false',
						description: 'Disable the radio.'
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
						description: 'Set the error message or messages for the radio.'
					}, {
						name: 'helpText',
						types: 'string',
						description: 'Set the text to be displayed in the tooltip.'
					}, {
						name: 'labelHidden',
						types: 'boolean',
						default: 'false',
						description: 'Hide the radio label.'
					}, {
						name: 'labelTitle',
						types: 'boolean',
						description: 'Control whether to set the title attribute.'
					}, {
						name: 'required',
						types: 'boolean',
						default: 'false',
						description: 'Set the radio to required.'
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
						description: 'Set the tooltip position for the radio.'
					}, {
						name: 'variant',
						customTypes: {
							name: 'CSRadioVariant',
							types: [`'neutral'`, `'brand'`]
						},
						default: `'neutral'`,
						description: 'Set the radio variant.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the radio.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the radio.'
					}, {
						name: 'children',
						customTypes: {
							name: 'CSRadioOptionChildren',
							types: ['<CSRadioOption />', 'any']
						},
						description: 'This component is designed to support CSRadioOption as a child.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the radio wrapper div.'
					}
				]
			}, {
				name: 'CSRadioOption',
				examples: [
					{
						propName: 'checked',
						variations: [
							{
								primaryVariants: 'checked={true}',
								component: <CSRadio label="This is a label">
									<CSRadioOption
										label="English"
										name="language"
										checked
									/>
									<CSRadioOption label="Croatian" name="language" />
								</CSRadio>,
								code: `<CSRadio label="This is a label">
									<CSRadioOption
										label="English"
										name="language"
										checked
									/>
									<CSRadioOption label="Croatian" name="language" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSRadio label="This is a label">
									<CSRadioOption label="coffee" name="beverage" />
									<CSRadioOption
										label="tea"
										name="beverage"
										disabled
									/>
									<CSRadioOption label="beer" name="beverage" />
								</CSRadio>,
								code: `<CSRadio label="This is a label">
									<CSRadioOption label="coffee" name="beverage" />
									<CSRadioOption
										label="tea"
										name="beverage"
										disabled
									/>
									<CSRadioOption label="beer" name="beverage" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'label',
						variations: [
							{
								component: <CSRadio label="This is a label">
									<CSRadioOption label="Label 1" name="label" />
									<CSRadioOption label="Label 2" name="label" />
								</CSRadio>,
								code: `<CSRadio label="This is a label">
									<CSRadioOption label="Label 1" name="label" />
									<CSRadioOption label="Label 2" name="label" />
								</CSRadio>`
							}
						]
					}, {
						propName: 'onBlur',
						variations: [
							{
								component: <CSRadio label="This is a label">
									<CSRadioOption
										label="Superior"
										name="lake"
										onBlur={this.handleBlur}
									/>
									<CSRadioOption
										label="Baikal"
										name="lake"
										onBlur={this.handleBlur}
									/>
								</CSRadio>,
								code: `<CSRadio label="This is a label">
									<CSRadioOption
										label="Superior"
										name="lake"
										onBlur={this.handleBlur}
									/>
									<CSRadioOption
										label="Baikal"
										name="lake"
										onBlur={this.handleBlur}
									/>
								</CSRadio>`
							}
						]
					}, {
						propName: 'onChange',
						variations: [
							{
								component: <CSRadio label="This is a label">
									<CSRadioOption
										label="Adriatic"
										name="sea"
										onChange={this.handleChange}
									/>
									<CSRadioOption
										label="North"
										name="sea"
										onChange={this.handleChange}
									/>
								</CSRadio>,
								code: `<CSRadio label="This is a label">
									<CSRadioOption
										label="Adriatic"
										name="sea"
										onChange={this.handleChange}
									/>
									<CSRadioOption
										label="North"
										name="sea"
										onChange={this.handleChange}
									/>
								</CSRadio>`
							}
						]
					}, {
						propName: 'readOnly',
						variations: [
							{
								primaryVariants: 'readOnly={true}',
								component: <CSRadio label="This is a label">
									<CSRadioOption
										label="Sava"
										name="river"
										readOnly
										checked
									/>
									<CSRadioOption
										label="Aire"
										name="river"
										readOnly
									/>
								</CSRadio>,
								code: `<CSRadio label="This is a label">
									<CSRadioOption
										label="Sava"
										name="river"
										readOnly
										checked
									/>
									<CSRadioOption
										label="Aire"
										name="river"
										readOnly
									/>
								</CSRadio>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSRadio label="This is a label">
									<CSRadioOption
										label="summer"
										name="season"
										title="This is a title"
									/>
									<CSRadioOption
										label="winter"
										name="season"
										title="This is a different title"
									/>
								</CSRadio>,
								code: `<CSRadio label="This is a label">
									<CSRadioOption
										label="summer"
										name="season"
										title="This is a title"
									/>
									<CSRadioOption
										label="winter"
										name="season"
										title="This is a different title"
									/>
								</CSRadio>`
							}
						]
					}, {
						propName: 'value',
						variations: [
							{
								primaryVariants: 'value={true}',
								component: <CSRadio label="This is a label">
									<CSRadioOption
										label="English"
										name="language"
										value="eng"
									/>
									<CSRadioOption
										label="Croatian"
										name="language"
										value="cro"
									/>
								</CSRadio>,
								code: `<CSRadio label="This is a label">
									<CSRadioOption
										label="English"
										name="language"
										value="eng"
									/>
									<CSRadioOption
										label="Croatian"
										name="language"
										value="cro"
									/>
								</CSRadio>`
							}
						]
					}
				],
				properties: [
					{
						name: 'checked',
						types: 'boolean',
						description: 'Control the checked state of the radio option.'
					}, {
						name: 'disabled',
						types: 'boolean',
						default: 'false',
						description: 'Disable the radio option.'
					}, {
						name: 'label',
						types: 'string',
						description: 'Set the radio option label.'
					}, {
						name: 'name',
						types: 'string',
						description: 'Set the radio option name attribute.'
					}, {
						name: 'onBlur',
						types: '(event) => any',
						description: 'Handler method for the blur event.'
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
						name: 'title',
						types: 'string',
						description: 'Set the radio option title.'
					}, {
						name: 'value',
						types: 'string',
						description: 'Set the radio option value.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the radio option.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the radio option.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the radio wrapper div.'
					}, {
						name: 'ariaInvalid',
						required: 'CSRadio',
						types: 'boolean',
						default: 'false',
						description: 'Indicate whether an element has an error.'
					}, {
						name: 'ariaRequired',
						required: 'CSRadio',
						types: 'boolean',
						default: 'false',
						description: 'Indicate whether an element is required.'
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
					'`<input type="radio">` - visually hidden',
					'`<span>` imitates radio with custom style',
					'`<input>` and `<span>` wrapped in `<label>` - allowing click on span to change input'
				],
				attributes: [
					'`aria-label` - description of radio group when label is hidden',
					'`aria-required` - true when selecting an option is required',
					'`aria-invalid` - true when there is an error',
					'`id` - needed to connect label with form element. If there is no id, autogenerated unique id is set',
					'`role="radio"` - implicit with input `<type="radio">`'
				],
				styling: [
					'Focus state styles'
				],
				keyboardOperability: [
					'`<input type="radio">` OOTB focusable and supports `Space`'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSRadioPreview;
