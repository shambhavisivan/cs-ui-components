import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSSelect } from '@cloudsense/cs-ui-components';

class CSSelectPreview extends React.Component {
	getDoc() {

		const onChangeHandler = () => alert('Selection changed!');

		const json = {
			name: 'Select',
			usage: 'Select element presents a menu of options.',
			accessible: 'yes',
			examples: [
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							component:
								<CSSelect label="Choose number" id="option">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							component:
								<CSSelect label="Choose color">
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>
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
								<CSSelect label="Choose color" labelTitle>
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>
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
								<CSSelect label="Choose color" labelHidden>
									<option>Red</option>
									<option>Blue</option>
									<option>Green</option>
								</CSSelect>
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
								<CSSelect label="Choose:" borderType="square">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							component:
								<CSSelect label="Choose number" helpText="Help text example">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
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
								<CSSelect label="Choose number" helpText="Help text example" tooltipPosition="top-right">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							component:
								<CSSelect label="Choose number" helpText="Help text example" tooltipPosition="top-left">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							component:
								<CSSelect label="Choose number" helpText="Help text example" tooltipPosition="bottom-right">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							component:
								<CSSelect label="Choose number" helpText="Help text example" tooltipPosition="bottom-left">
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
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
								<CSSelect label="Choose number" disabled>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
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
								<CSSelect label="Choose number" hidden>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</CSSelect>
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
								<CSSelect label="Choose amount" required>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
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
								<CSSelect label="Choose amount" error>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							component:
								<CSSelect label="Choose value:" error errorMessage="Error message!">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							component:
								<CSSelect label="Choose value:" onChange={onChangeHandler}>
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'name',
					variations: [
						{
							component:
								<CSSelect label="Choose value:" name="Select field">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'value',
					variations: [
						{
							component:
								<CSSelect label="Choose value:" name="Select field" value="30">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component:
								<CSSelect label="Choose amount" title="This is a title">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
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
								<CSSelect label="Choose amount" className="custom-class">
									<option>10</option>
									<option>20</option>
									<option>30</option>
								</CSSelect>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'borderType',
					description: 'Select border type',
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
					description: 'Select help text for tooltip display'
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
					description: 'Select id value'
				},
				{
					propertyName: 'label',
					description: 'Select label text to display'
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
					propertyName: 'name',
					description: 'Select name value'
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event'
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
					description: 'Select title value'
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Select tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				},
				{
					propertyName: 'value',
					description: 'Display a fixed value'
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
						'3.2.2',
						'3.3.1',
						'3.3.2',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'HTML <select>',
								'Icon as a child element of wrapper with aria-hidden'
							],
							properties: [
								'aria-labelledby - associate field with label',
								'aria-invalid',
								'aria-required',
								'role="combobox" - implicit with select'
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

export default CSSelectPreview;
