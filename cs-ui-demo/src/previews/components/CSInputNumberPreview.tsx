import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSInputNumber } from '@cloudsense/cs-ui-components';

interface CSInputNumberPreviewState {
	focused: boolean;
}

class CSInputNumberPreview extends React.Component<{}, CSInputNumberPreviewState> {
	state = { focused: false };

	handleChange = () => alert('Value has changed.');
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

	getDoc() {
		const json = {
			name: 'Input Number',
			usage: 'Number inputs are used for number entry.',
			accessible: 'yes',
			examples: [
				{
					propName: 'type',
					customText: '',
					variations: [
						{
							variationName: ['number'],
							component:
								<CSInputNumber label="Enter value:" type="number" />
						},
						{
							variationName: ['text'],
							component:
								<CSInputNumber label="Enter value:" type="text" />
						}
					]
				},
				{
					propName: 'value',
					customText: '',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" value="1" />
						}
					]
				},
				{
					propName: 'placeholder',
					customText: '',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" placeholder="Placeholder text" />
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" id="quantity" />
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" />
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
								<CSInputNumber label="Enter value:" labelHidden />
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
								<CSInputNumber label="Enter value:" labelTitle />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" helpText="Help text example" />
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
								<CSInputNumber label="Enter value:" helpText="Help text example" tooltipPosition="top-right" />
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							component:
								<CSInputNumber label="Enter value:" helpText="Help text example" tooltipPosition="top-left" />
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							component:
								<CSInputNumber label="Enter value:" helpText="Help text example" tooltipPosition="bottom-right" />
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							component:
								<CSInputNumber label="Enter value:" helpText="Help text example" tooltipPosition="bottom-left" />
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
								<CSInputNumber label="Enter value:" disabled />
						}
					]
				},
				{
					propName: 'hidden',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSInputNumber label="Enter value:" hidden />
						}
					]
				},
				{
					propName: 'readOnly',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSInputNumber label="Enter value:" readOnly value={12345} />
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
								<CSInputNumber required label="Enter value:" />
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
								<CSInputNumber label="Enter value:" error />
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							component:
								<CSInputNumber label="Enter value:" error errorMessage="Error message!" />
						}
					]
				},
				{
					propName: 'min',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" min="1" />
						}
					]
				},
				{
					propName: 'max',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" max="5" />
						}
					]
				},
				{
					propName: 'maxLength',
					variations: [
						{
							variationText: ['type="text"'],
							component:
								<CSInputNumber label="Enter value:" type="text" maxLength={10} />
						}
					]
				},
				{
					propName: 'step',
					quickLink: 'step',
					variations: [
						{
							variationName: ['1'],
							component:
								<CSInputNumber label="Enter value:" type="number" step="1" />
						},
						{
							variationName: ['0.01'],
							component:
								<CSInputNumber label="Enter value:" type="number" step="0.01" />
						},
						{
							variationName: ['0.001'],
							component:
								<CSInputNumber label="Enter value:" type="number" step="0.001" />
						},
						{
							variationName: ['any'],
							component:
								<CSInputNumber label="Enter value:" type="number" step="any" />
						}
					]
				},
				{
					propName: 'borderType',
					variations: [
						{
							variationName: ['square'],
							quickLink: 'square',
							component:
								<CSInputNumber label="Enter value:" borderType="square" />
						}
					]
				},
				{
					propName: 'hideSpinner',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSInputNumber label="Enter value:" hideSpinner />
						}
					]
				},
				{
					propName: 'onBlur',
					customText: '',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" onBlur={this.handleBlur} />
						}
					]
				},
				{
					propName: 'onChange',
					customText: '',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" onChange={this.handleChange} />
						}
					]
				},
				{
					propName: 'onFocus',
					customText: '',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" onFocus={this.handleFocus} />
						}
					]
				},
				{
					propName: 'onKeyDown',
					customText: '',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" onKeyDown={this.handleKeyDown} />
						}
					]
				},
				{
					propName: 'onPaste',
					customText: '',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" onPaste={this.handlePaste} />
						}
					]
				},
				{
					propName: 'name',
					customText: '',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" name="Input number" />
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component:
								<CSInputNumber label="Enter value:" title="This is a title" />
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
								<CSInputNumber label="Enter value:" className="custom-class" />
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'borderType',
					description: 'Input border type',
					options: [
						'round',
						'square'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'error',
					description: 'Error state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'errorMessage',
					description: 'Error message text'
				},
				{
					propertyName: 'hidden',
					description: 'Hidden state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'helpText',
					description: 'Input help text for tooltip display'
				},
				{
					propertyName: 'hideSpinner',
					description: 'Logic for spinner visibility',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'id',
					description: 'Input number id value'
				},
				{
					propertyName: 'label',
					description: 'Input label text to display'
				},
				{
					propertyName: 'labelHidden',
					description: 'Logic for visibility of the label',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'labelTitle',
					description: 'Logic for label title attribute',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'max',
					description: 'Input number max value'
				},
				{
					propertyName: 'maxLength',
					description: 'Input max length value (can be used only with type="text")'
				},
				{
					propertyName: 'step',
					description: 'A stepping interval to use when using up and down arrows to adjust the value'
				},
				{
					propertyName: 'min',
					description: 'Input number min value'
				},
				{
					propertyName: 'name',
					description: 'Input number name value'
				},
				{
					propertyName: 'onBlur',
					description: 'Logic for onBlur event'
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event'
				},
				{
					propertyName: 'onFocus',
					description: 'Logic for onFocus event'
				},
				{
					propertyName: 'onKeyDown',
					description: 'Logic for onKeyDown event'
				},
				{
					propertyName: 'onPaste',
					description: 'Logic for onPaste event'
				},
				{
					propertyName: 'placeholder',
					description: 'Input number placeholder to display'
				},
				{
					propertyName: 'readOnly',
					description: 'Read only description',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'required',
					description: 'Required state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'title',
					description: 'Title to display'
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Input tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				},
				{
					propertyName: 'type',
					description: 'Input field type',
					options: [
						'number',
						'text'
					]
				},
				{
					propertyName: 'value',
					description: 'Default value to display'
				}
			],
			accessibility: [
				{
					criteriaList: [
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
					requirements: [
						{
							structure: [
								'HTML <input type="number">'
							],
							properties: [
								'aria-invalid',
								'aria-required',
								'aria-labelledby - associate field with label',
								'aria-valuemin',
								'aria-valuemax',
								'aria-valuenow',
								'role="spintbutton" - implicit by input'
							],
							styling: [
								'Focus state styles'
							],
							keyboardOperability: [
								'OOTB focusable and arrows up or down increase or decrease the number'
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

export default CSInputNumberPreview;
