import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSToggle } from '@cloudsense/cs-ui-components';

class CSTogglePreview extends React.Component {
	handleChange = () => alert('Value has been toggled.');

	getDoc() {
		const json = {
			name: 'Toggle',
			usage: 'A checkable input that communicates if an option is true, false or indeterminate.',
			accessible: 'yes',
			examples: [
				{
					propName: 'checked',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSToggle
									checked
									label="This is a label"
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
								<CSToggle
									disabled
									label="This is a label"
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
								<CSToggle
									required
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'error',
					alert: {
						variant: 'info',
						text: 'Component in error state should always contain associated error message to satisfy accessibility best practices!'
					},
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSToggle
									error
									label="This is a label"
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
								<CSToggle label="This is a label" error errorMessage="Error message!" />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							component:
								<CSToggle
									label="This is a label"
									helpText="Help text example"
								/>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSToggle
									label="This is a label"
									id="toggle"
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
								<CSToggle
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="top-right"
								/>
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							component:
								<CSToggle
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							component:
								<CSToggle
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="bottom-right"
								/>
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							component:
								<CSToggle
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="bottom-left"
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
								<CSToggle
									label="This is a label"
									labelHidden
								/>
						}
					]
				},
				{
					propName: 'labelPosition',
					customText: 'For now we are supporting only default and left variants. We will add more when there will be need',
					variations: [
						{
							variationName: ['left'],
							component:
								<CSToggle
									label="This label is on the left"
									labelPosition="left"
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
								<CSToggle
									label="This is a label"
									labelTitle
								/>
						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							component:
								<CSToggle
									label="This is a label"
									onChange={this.handleChange}
								/>
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component:
								<CSToggle
									label="This is a label"
									title="This is a title"
								/>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							component:
								<CSToggle
									label="This is a label"
									helpText="Help text example"
									className="custom-class"
								/>
						}
					]
				}
			],
			properties: [
				{
					name: 'checked',
					types: ['boolean'],
					description: 'Control the checked state of the toggle.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the toggle.'
				}, {
					name: 'disabled',
					types: ['boolean'],
					default: 'false',
					description: 'Disable the toggle.'
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
					description: 'Set the error message or messages for the toggle.'
				}, {
					name: 'helpText',
					types: ['string'],
					description: 'Set the text to be displayed in the tooltip.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the toggle.'
				}, {
					name: 'label',
					required: true,
					types: ['string'],
					description: 'Set the toggle label.'
				}, {
					name: 'labelHidden',
					types: ['boolean'],
					default: 'false',
					description: 'Hide the toggle label.'
				}, {
					name: 'labelPosition',
					customTypes: [{
						name: 'CSToggleLabelPosition',
						types: ['\'default\'', '\'left\'']
					}],
					default: '\'default\'',
					description: 'Set the label position.'
				}, {
					name: 'labelTitle',
					types: ['boolean'],
					description: 'Control whether to set the title attribute.'
				}, {
					name: 'onChange',
					types: ['(event) => any'],
					description: 'Handler method for the change event.'
				}, {
					name: 'required',
					types: ['boolean'],
					default: 'false',
					description: 'Set the toggle to required.'
				}, {
					name: 'title',
					types: ['string'],
					description: 'Set the toggle title.'
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
					description: 'Set the tooltip position for the toggle.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the toggle input.'
				}
			],
			accessibility: [
				{
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
					requirements: [
						{
							structure: [
								'HTML `<input type="checkbox">` - hidden',
								'`<span>` imitates checkbox with custom style',
								'`<input>` and `<span>` wrapped in `<label>`'
							],
							properties: [
								'`aria-labelledby` - associate field with label',
								'`role="textbox"` - implicit with input'
							],
							styling: [
								'Focus state styles'
							],
							keyboardOperability: [
								'OOTB focusable'
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
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
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

export default CSTogglePreview;
