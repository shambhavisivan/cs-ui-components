import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSTextarea } from '@cloudsense/cs-ui-components';

class CSTextareaPreview extends React.Component {

	getDoc() {

		const onChangeHandler = () => alert('Textarea changed!');

		const json = {
			name: 'Textarea',
			usage: 'Textarea inputs are used for freeform data entry.',
			accessible: 'yes',
			examples: [
				{
					propName: 'value',
					customText: '',
					variations: [
						{
							component:
								<CSTextarea label="Enter message:" value="Message" />
						}
					]
				},
				{
					propName: 'placeholder',
					customText: '',
					variations: [
						{
							component:
								<CSTextarea label="Enter message:" placeholder="Message" />
						}
					]
				},
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							component:
								<CSTextarea label="Enter message:" id="message" />
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							component:
								<CSTextarea label="Enter message:" />
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
								<CSTextarea label="Enter message:" labelHidden />

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
								<CSTextarea label="Enter message:" labelTitle />
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
								<CSTextarea label="Enter message:" borderType="square" />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							component:
								<CSTextarea label="Enter message:" helpText="Help text example" />
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
								<CSTextarea label="Enter message:" helpText="Help text example" tooltipPosition="top-right" />
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							component:
								<CSTextarea label="Enter message:" helpText="Help text example" tooltipPosition="top-left" />
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							component:
								<CSTextarea label="Enter message:" helpText="Help text example" tooltipPosition="bottom-right" />
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							component:
								<CSTextarea label="Enter message:" helpText="Help text example" tooltipPosition="bottom-left" />
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
								<CSTextarea label="Enter message:" disabled />
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
								<CSTextarea label="Enter message:" hidden />
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
								<CSTextarea label="Enter message:" readOnly value="value" />
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
								<CSTextarea required label="Enter message:" />
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
								<CSTextarea label="Enter message:" error />
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							component:
								<CSTextarea label="Enter value:" error errorMessage="Error message!" />
						}
					]
				},
				{
					propName: 'rows',
					variations: [
						{
							variationName: ['10'],
							quickLink: '10',
							component:
								<CSTextarea label="Enter message:" rows={10} />
						}
					]
				},
				{
					propName: 'maxHeight',
					variations: [
						{
							variationName: ['160px'],
							quickLink: '160px',
							component:
								<CSTextarea label="Enter message:" maxHeight="200px" />
						},
						{
							variationName: ['5rem'],
							quickLink: '5rem',
							component:
								<CSTextarea label="Enter message:" maxHeight="5rem" />
						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							component:
								<CSTextarea label="Enter message:" onChange={onChangeHandler} />
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component:
								<CSTextarea label="Enter message:" title="This is a title" />
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
								<CSTextarea label="Enter message:" className="custom-class" />
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
					propertyName: 'helpText',
					description: 'Textarea help text for tooltip display'
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
					propertyName: 'id',
					description: 'Textarea id value'
				},
				{
					propertyName: 'label',
					description: 'Textarea label text to display'
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
					propertyName: 'maxHeight',
					description: 'Max height value for textarea',
					options: [
						'e.g.',
						'160px',
						'5rem'
					]
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event'
				},
				{
					propertyName: 'placeholder',
					description: 'Textarea placeholder to display'
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
					propertyName: 'rows',
					description: 'Textarea rows value'
				},
				{
					propertyName: 'title',
					description: 'Title to display'
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Textarea tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				},
				{
					propertyName: 'value',
					description: 'Textarea value to display'
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.3.1',
						'1.4.1',
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
								'HTML <textarea>'
							],
							properties: [
								'aria-labelledby - associate field with label',
								'aria-invalid',
								'aria-required',
								'role="textbox" - implicit with input',
								'aria-multiline="true" - implicit with input',
								'contenteditable  - implicit with input'
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

export default CSTextareaPreview;
