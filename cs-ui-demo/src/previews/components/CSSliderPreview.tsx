import React from 'react';
import { CSSlider } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSSliderPreview extends React.Component {
	handleChange = () => alert('Value had changed.');

	getDoc = () => ({
		name: 'Slider',
		usage: 'A range slider lets the user specify a numeric value which must be between two specified values.',
		alerts: [
			{
				variant: 'warning',
				text: 'This component is under construction and should not be used.'
			}, {
				variant: 'info',
				text: 'Props min and max are required for all instances of CSSlider besides those that use the prop stepValues. stepValues creates its own values for min and max based on the number of items in the array.'
			}
		],
		accessible: 'partially',
		components: [
			{
				name: 'CSSlider',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for a slider. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								component: <CSSlider
									label="Slider"
									min="0"
									max="100"
								/>,
								code: `<CSSlider
									label="Slider"
									min="0"
									max="100"
								/>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSSlider
									label="Select value"
									min="0"
									max="100"
									disabled
								/>,
								code: `<CSSlider
									label="Select value"
									min="0"
									max="100"
									disabled
								/>`
							}
						]
					}, {
						propName: 'error',
						variations: [
							{
								primaryVariants: 'error={true}',
								component: <CSSlider
									label="Select value"
									min="0"
									max="100"
									error
								/>,
								code: `<CSSlider
									label="Select value"
									min="0"
									max="100"
									error
								/>`
							}
						]
					}, {
						propName: 'errorMessage',
						variations: [
							{
								secondaryVariants: 'error={true}',
								component: <CSSlider
									label="Select value"
									min="0"
									max="100"
									error
									errorMessage="Error message."
								/>,
								code: `<CSSlider
									label="Select value"
									min="0"
									max="100"
									error
									errorMessage="Error message."
								/>`
							}
						]
					}, {
						propName: 'helpText',
						variations: [
							{
								component: <CSSlider
									label="Select value"
									min="0"
									max="100"
									helpText="Help text example"
								/>,
								code: `<CSSlider
									label="Select value"
									min="0"
									max="100"
									helpText="Help text example"
								/>`
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSSlider
									label="Slider"
									min="0"
									max="100"
									labelHidden
								/>,
								code: `<CSSlider
									label="Slider"
									min="0"
									max="100"
									labelHidden
								/>`
							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle={true}',
								component: <CSSlider
									label="Slider"
									min="0"
									max="100"
									labelTitle
								/>,
								code: `<CSSlider
									label="Slider"
									min="0"
									max="100"
									labelTitle
								/>`
							}
						]
					}, {
						propName: 'max',
						variations: [
							{
								primaryVariants: 'max="50"',
								secondaryVariants: 'min="0"',
								component: <CSSlider
									label="Select value"
									min="0"
									max="50"
								/>,
								code: `<CSSlider
									label="Select value"
									min="0"
									max="50"
								/>`
							}
						]
					}, {
						propName: 'min',
						variations: [
							{
								primaryVariants: 'min="10"',
								secondaryVariants: 'max="100"',
								component: <CSSlider
									label="Select value"
									min="10"
									max="100"
								/>,
								code: `<CSSlider
									label="Select value"
									min="10"
									max="100"
								/>`
							}
						]
					}, {
						propName: 'onChange',
						variations: [
							{
								component: <CSSlider
									label="Select value"
									min="0"
									max="100"
									onChange={this.handleChange}
								/>,
								code: `<CSSlider
									label="Select value"
									min="0"
									max="100"
									onChange={this.handleChange}
								/>`
							}
						]
					}, {
						propName: 'readOnly',
						variations: [
							{
								primaryVariants: 'readOnly={true}',
								component: <CSSlider
									label="Select value"
									min="0"
									max="100"
									readOnly
								/>,
								code: `<CSSlider
									label="Select value"
									min="0"
									max="100"
									readOnly
								/>`
							}
						]
					}, {
						propName: 'required',
						variations: [
							{
								primaryVariants: 'required={true}',
								component: <CSSlider
									label="Select value"
									min="0"
									max="100"
									required
								/>,
								code: `<CSSlider
									label="Select value"
									min="0"
									max="100"
									required
								/>`
							}
						]
					}, {
						propName: 'size',
						variations: [
							{
								primaryVariants: 'size="xsmall"',
								quickLink: 'xsmall',
								component: <CSSlider
									label="Select value"
									min="0"
									max="100"
									size="xsmall"
								/>,
								code: `<CSSlider
									label="Select value"
									min="0"
									max="100"
									size="xsmall"
								/>`
							}, {
								primaryVariants: 'size="small"',
								quickLink: 'small',
								component: <CSSlider
									label="Select value"
									min="0"
									max="100"
									size="small"
								/>,
								code: `<CSSlider
									label="Select value"
									min="0"
									max="100"
									size="small"
								/>`
							}, {
								primaryVariants: 'size="medium"',
								quickLink: 'medium',
								component: <CSSlider
									label="Select value"
									min="0"
									max="100"
									size="medium"
								/>,
								code: `<CSSlider
									label="Select value"
									min="0"
									max="100"
									size="medium"
								/>`
							}, {
								primaryVariants: 'size="large"',
								quickLink: 'large',
								component: <CSSlider
									label="Select value"
									min="0"
									max="100"
									size="large"
								/>,
								code: `<CSSlider
									label="Select value"
									min="0"
									max="100"
									size="large"
								/>`
							}
						]
					}, {
						propName: 'step',
						variations: [
							{
								primaryVariants: 'step="20"',
								secondaryVariants: [
									'min="0"',
									'max="100"'
								],
								component: <CSSlider
									label="Select value"
									min="0"
									max="100"
									step="20"
								/>,
								code: `<CSSlider
									label="Select value"
									min="0"
									max="100"
									step="20"
								/>`
							}, {
								primaryVariants: 'step="20"',
								secondaryVariants: [
									'min="20"',
									'max="100"'
								],
								component: <CSSlider
									label="Select value"
									min="20"
									max="100"
									step="20"
								/>,
								code: `<CSSlider
									label="Select value"
									min="20"
									max="100"
									step="20"
								/>`
							}, {
								primaryVariants: 'step="20"',
								secondaryVariants: [
									'min="20"',
									'max="80"'
								],
								component: <CSSlider
									label="Select value"
									min="20"
									max="80"
									step="20"
								/>,
								code: `<CSSlider
									label="Select value"
									min="20"
									max="80"
									step="20"
								/>`
							}, {
								primaryVariants: 'step="20"',
								secondaryVariants: [
									'min="-60"',
									'max="40"'
								],
								component: <CSSlider
									label="Select value"
									min="-60"
									max="40"
									step="20"
								/>,
								code: `<CSSlider
									label="Select value"
									min="-60"
									max="40"
									step="20"
								/>`
							}
						]
					}, {
						propName: 'stepValues',
						variations: [
							{
								primaryVariants: 'stepValues=[...]',
								component: <CSSlider
									label="Select value"
									min="0"
									max="100"
									stepValues={['max', '0', '1', '2', '3']}
								/>,
								code: `<CSSlider
									label="Select value"
									min="0"
									max="100"
									stepValues={['max', '0', '1', '2', '3']}
								/>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSSlider
									label="Select value"
									min="0"
									max="100"
									title="This is a title"
								/>,
								code: `<CSSlider
									label="Select value"
									min="0"
									max="100"
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
								secondaryVariants: 'helpText="text"',
								component: <CSSlider
									label="Select value"
									min="0"
									max="100"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>,
								code: `<CSSlider
									label="Select value"
									min="0"
									max="100"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>`
							}
						]
					}, {
						propName: 'value',
						variations: [
							{
								component: <CSSlider
									label="Select value"
									min="0"
									max="100"
									value="20"
								/>,
								code: `<CSSlider
									label="Select value"
									min="0"
									max="100"
									value="20"
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
								component: <CSSlider
									label="Select value"
									min="0"
									max="100"
									id="custom-id"
									className="custom-br-mint"
								/>,
								code: `<CSSlider
									label="Select value"
									min="0"
									max="100"
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
						description: 'Set the slider label.'
					}, {
						name: 'disabled',
						types: 'boolean',
						default: 'false',
						description: 'Disable the slider.'
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
						description: 'Set the error message or messages for the slider.'
					}, {
						name: 'helpText',
						types: 'string',
						description: 'Set the text to be displayed in the tooltip.'
					}, {
						name: 'labelHidden',
						types: 'boolean',
						default: 'false',
						description: 'Hide the slider label.'
					}, {
						name: 'labelTitle',
						types: 'boolean',
						description: 'Control whether to set the title attribute.'
					}, {
						name: 'max',
						types: 'string',
						description: 'Set the slider range max value.'
					}, {
						name: 'min',
						types: 'string',
						description: 'Set the slider range min value.'
					}, {
						name: 'onChange',
						types: '(event) => void',
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
						description: 'Make the slider required.'
					}, {
						name: 'size',
						customTypes: {
							name: 'CSSliderSize',
							types: [
								`'xsmall'`,
								`'small'`,
								`'medium'`,
								`'large'`
							]
						},
						description: 'Set the slider size.'
					}, {
						name: 'step',
						types: 'any',
						description: 'Set the slider range granularity.'
					}, {
						name: 'stepValues',
						types: 'Array<number>',
						description: 'Set a custom array for slider range granularity.'
					}, {
						name: 'title',
						types: 'string',
						description: 'Set the slider title.'
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
						description: 'Set the tooltip position for the slider.'
					}, {
						name: 'value',
						types: 'string',
						description: 'Set the slider default value.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the slider.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the slider.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the slider input.'
					}
				]
			}
		],
		accessibility: {
			criterionList: [
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
					'`<input type="range">`'
				],
				attributes: [
					'`aria-invalid` - true when there is an error',
					'`aria-readonly` - true when is it readonly, therefore focusable, but not operable',
					'`aria-required` - true when selecting a value is required',
					'`aria-valuemin`',
					'`aria-valuemax`',
					'`aria-valuenow`',
					'`id` - needed to connect label with form element. If there is no id, autogenerated unique id is set',
					'`role="slider"` - implicit with input'
				],
				styling: [
					'Focus state styles'
				],
				keyboardOperability: [
					'`<input type="range">` OOTB focusable and slider operable with arrows `Left` and `Right`'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSSliderPreview;
