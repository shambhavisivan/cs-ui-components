import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSSlider, CSAlert } from '@cloudsense/cs-ui-components';

class CSSliderPreview extends React.Component {
	handleOnChange = () => alert('Value had changed.');

	getDoc() {
		const json = {
			name: 'Slider',
			usage: 'A range slider lets the user specify a numeric value which must be between two specified values.',
			accessible: 'yes',
			examples: [
				{
					propName: 'value',
					variations: [
						{
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									value="20"
								/>
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							component:
								<CSSlider
									label="Slider"
									min="0"
									max="100"
								/>
						}
					]
				},
				{
					propName: 'labelHidden',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSSlider
									label="Slider"
									min="0"
									max="100"
									labelHidden
								/>
						}
					]
				},
				{
					propName: 'labelTitle',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSSlider
									label="Slider"
									min="0"
									max="100"
									labelTitle
								/>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									id="id"
								/>
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									helpText="Help text example"
								/>
						}
					]
				},
				{
					propName: 'tooltipPosition',
					variations: [
						{
							variationName: ['top-right'],
							quickLink: 'top-right',
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									helpText="Help text example"
									tooltipPosition="top-right"
								/>
						}
					]
				},
				{
					propName: 'min',
					variations: [
						{
							component:
								<CSSlider
									label="Select value"
									min="10"
									max="100"
								/>
						}
					]
				},
				{
					propName: 'max',
					variations: [
						{
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="50"
								/>
						}
					]
				},
				{
					propName: 'step',
					variations: [
						{
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									step="20"
								/>
						},
						{
							component:
								<CSSlider
									label="Select value"
									min="20"
									max="100"
									step="20"
								/>
						},
						{
							component:
								<CSSlider
									label="Select value"
									min="20"
									max="80"
									step="20"
								/>
						},
						{
							component:
								<CSSlider
									label="Select value"
									min="-60"
									max="40"
									step="20"
								/>
						}
					]
				},
				{
					propName: 'stepValues',
					variations: [
						{
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									stepValues={['max', '0', '1', '2', '3']}
								/>
						}
					]
				},
				{
					propName: 'required',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									required
								/>
						}
					]
				},
				{
					propName: 'disabled',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									disabled
								/>
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									error
									errorMessage="Error message!"
								/>
						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									onChange={this.handleOnChange}
								/>
						}
					]
				},
				{
					propName: 'size',
					variations: [
						{
							variationName: ['default'],
							quickLink: 'default',
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
								/>
						},
						{
							variationName: ['xsmall'],
							quickLink: 'xsmall',
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									size="xsmall"
								/>
						},
						{
							variationName: ['small'],
							quickLink: 'small',
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									size="small"
								/>
						},
						{
							variationName: ['medium'],
							quickLink: 'medium',
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									size="medium"
								/>
						},
						{
							variationName: ['large'],
							quickLink: 'large',
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									size="large"
								/>
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									title="This is a title"
								/>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['custom-class'],
							quickLink: 'custom-class',
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									className="custom-class"
								/>
						}
					]
				}
			],
			properties: [
				{
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the slider.'
				}, {
					name: 'disabled',
					types: ['boolean'],
					default: 'false',
					description: 'Disable the slider.'
				}, {
					name: 'error',
					types: ['boolean'],
					description: 'Toggle the error state.'
				}, {
					name: 'errorMessage',
					customTypes: [{
						name: 'CSFieldErrorMsgType',
						types: ['string', 'Array<string>']
					}],
					description: 'Set the error message or messages for the slider.'
				}, {
					name: 'helpText',
					types: ['string'],
					description: 'Set the text to be displayed in the tooltip.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the slider.'
				}, {
					name: 'label',
					required: true,
					types: ['string'],
					description: 'Set the slider label.'
				}, {
					name: 'labelHidden',
					types: ['boolean'],
					default: 'false',
					description: 'Hide the slider label.'
				}, {
					name: 'labelTitle',
					types: ['boolean'],
					description: 'Control whether to set the title attribute.'
				}, {
					name: 'max',
					types: ['string'],
					description: 'Set the slider range max value.'
				}, {
					name: 'min',
					types: ['string'],
					description: 'Set the slider range min value.'
				}, {
					name: 'onChange',
					types: ['(event) => void'],
					description: 'Handler method for the change event.'
				}, {
					name: 'required',
					types: ['boolean'],
					default: 'false',
					description: 'Make the slider required.'
				}, {
					name: 'size',
					customTypes: [{
						name: 'CSSliderSize',
						types: [
							'\'xsmall\'',
							'\'small\'',
							'\'medium\'',
							'\'large\''
						]
					}],
					description: 'Set the slider size.'
				}, {
					name: 'step',
					types: ['any'],
					description: 'Set the slider range granularity.'
				}, {
					name: 'stepValues',
					types: ['Array<number>'],
					description: 'Set a custom array for slider range granularity.'
				}, {
					name: 'title',
					types: ['string'],
					description: 'Set the slider title.'
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
					description: 'Set the tooltip position for the slider.'
				}, {
					name: 'value',
					types: ['string'],
					description: 'Set the slider default value.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the slider input.'
				}
			],
			accessibility: [
				{
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
					requirements: [
						{
							structure: [
								'HTML `<input type="range">`'
							],
							properties: [
								'`aria-invalid`',
								'`aria-required`',
								'`aria-labelledby` - associate field with label',
								'`aria-valuemin`',
								'`aria-valuemax`',
								'`aria-valuenow`',
								'`role="slider"` - implicit with input'
							],
							styling: [
								'Focus state styles'
							]
						}
					]
				}
			]
		};

		for (const example of json.examples) {
			for (const variation of example.variations) {
				(variation as any).string = jsxToString(variation.component);
			}
		}

		return json;
	}

	render() {
		const component = this.getDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} />
					<CSAlert variant="warning" text="This component is under construction and should not be used" styleFormat="scoped" />
					<CSAlert
						variant="info"
						text="Props min and max are required for all instances of CSSlider besides those that use the prop stepValues. stepValues creates it's own values for min and max based on the number of items in it's array."
						styleFormat="scoped"
					/>
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<div className="prop-sidebar">
					<h3>Quick Links</h3>
					<PreviewLinks component={component} />
				</div>
			</>
		);
	}
}

export default CSSliderPreview;
