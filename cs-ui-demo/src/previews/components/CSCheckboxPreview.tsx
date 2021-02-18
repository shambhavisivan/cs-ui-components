import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSCheckbox } from '@cloudsense/cs-ui-components';

class CSCheckboxPreview extends React.Component {
	handleChange = () => alert('Checkbox has been toggled.');
	handleClick = () => alert('Checkbox has been clicked.');
	handleOnKeyDown = () => alert('Key has been pressed.');

	getDoc() {
		const json = {
			name: 'Checkbox',
			usage: 'A checkable input that communicates if an option is true, false or indeterminate.',
			accessible: 'yes',
			examples: [
				{
					propName: 'borderType',
					customText: '',
					variations: [
						{
							variationName: ['square'],
							quickLink: 'square',
							component:
								<CSCheckbox
									borderType="square"
									label="This is a label"
								/>
						},
						{
							variationName: ['round'],
							quickLink: 'round',
							component:
								<CSCheckbox
									borderType="round"
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'checked',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSCheckbox
									checked
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSCheckbox
									label="This is a label"
									id="1"
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
								<CSCheckbox
									disabled
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'readOnly',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSCheckbox
									readOnly
									label="This is a label"
									checked
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
								<CSCheckbox
									required
									label="This is a label"
								/>
						}
					]
				},
				{
					propName: 'variant',
					variations: [
						{
							variationName: ['brand'],
							quickLink: 'brand',
							component:
								<CSCheckbox
									label="This is a label"
									variant="brand"
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
								<CSCheckbox
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
							component:
								<CSCheckbox
									label="Enter value:"
									error
									errorMessage="Error message!"
								/>
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							component:
								<CSCheckbox
									label="This is a label"
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
								<CSCheckbox
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="top-right"
								/>
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							component:
								<CSCheckbox
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							component:
								<CSCheckbox
									label="This is a label"
									helpText="Help text example"
									tooltipPosition="bottom-right"
								/>
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							component:
								<CSCheckbox
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
								<CSCheckbox
									label="This is a label"
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
								<CSCheckbox
									label="This is a label"
									labelTitle
								/>
						}
					]
				},
				{
					propName: 'labelPosition',
					variations: [
						{
							variationName: ['left'],
							quickLink: 'left',
							component:
								<CSCheckbox
									label="This is a label"
									labelPosition="left"
								/>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['className'],
							quickLink: 'custom class',
							component:
								<CSCheckbox
									label="This is a label"
									className="custom-class"
								/>
						}
					]
				},
				{
					propName: 'name',
					variations: [
						{
							component:
								<CSCheckbox
									label="This is a label"
									name="Checkbox"
								/>
						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							component:
								<CSCheckbox
									label="This is a label"
									onChange={this.handleChange}
								/>
						}
					]
				},
				{
					propName: 'onClick',
					variations: [
						{
							component:
								<CSCheckbox
									label="This is a label"
									onClick={this.handleClick}
								/>
						}
					]
				},
				{
					propName: 'onKeyDown',
					variations: [
						{
							component:
								<CSCheckbox
									label="This is a label"
									onClick={this.handleOnKeyDown}
								/>
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component:
								<CSCheckbox
									label="This is a label"
									title="This is a title"
								/>
						}
					]
				}
			],

			properties: [
				{
					name: 'borderType',
					customTypes: [{
						name: 'CSCheckboxBorderType',
						types: ['\'square\'', '\'round\'']
					}],
					default: '\'square\'',
					description: 'Set a checkbox style.'
				}, {
					name: 'checked',
					types: ['boolean'],
					description: 'Control the checked state of the checkbox.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the checkbox.'
				}, {
					name: 'disabled',
					types: ['boolean'],
					default: 'false',
					description: 'Disable the checkbox.'
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
					description: 'Set the error message or messages for the checkbox.'
				}, {
					name: 'helpText',
					types: ['string'],
					description: 'Set the text to be displayed in the tooltip.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the checkbox.'
				}, {
					name: 'label',
					required: true,
					types: ['string'],
					description: 'Set the checkbox label.'
				}, {
					name: 'labelHidden',
					types: ['boolean'],
					default: 'false',
					description: 'Hide the checkbox label.'
				}, {
					name: 'labelPosition',
					customTypes: [{
						name: 'CSCheckboxLabelPosition',
						types: ['\'default\'', '\'left\'']
					}],
					default: '\'default\'',
					description: 'Set the label position.'
				}, {
					name: 'labelTitle',
					types: ['boolean'],
					description: 'Control whether to set the title attribute.'
				}, {
					name: 'name',
					types: ['string'],
					description: 'Set the checkbox name attribute.'
				}, {
					name: 'onChange',
					types: ['(event) => any'],
					description: 'Handler method for the change event.'
				}, {
					name: 'onClick',
					types: ['(event) => void'],
					description: 'Handler method for the click event.'
				}, {
					name: 'onKeyDown',
					types: ['(event) => any'],
					description: 'Handler method for the keydown event.'
				}, {
					name: 'readOnly',
					types: ['boolean'],
					default: 'false',
					description: 'Control whether to apply the readonly attribute.'
				}, {
					name: 'required',
					types: ['boolean'],
					default: 'false',
					description: 'Set the checkbox to required.'
				}, {
					name: 'title',
					types: ['string'],
					description: 'Set the checkbox title.'
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
					description: 'Set the tooltip position for the checkbox.'
				}, {
					name: 'variant',
					customTypes: [{
						name: 'CSCheckboxVariant',
						types: ['\'neutral\'', '\'brand\'']
					}],
					default: '\'neutral\'',
					description: 'Set the checkbox variant.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the checkbox input.'
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
						'2.5.3',
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
								'`<span>` imitating checkbox with custom style',
								'`<input>` and `<span>` wrapped in `<label>`'
							],
							properties: [
								'`aria-required`',
								'`aria-invalid`',
								'`aria-labelledby` - associate checkbox with label',
								'`role="checkbox"` - implicit by input'
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

export default CSCheckboxPreview;
