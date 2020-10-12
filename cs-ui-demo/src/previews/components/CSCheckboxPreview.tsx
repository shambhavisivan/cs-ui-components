import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import {CSCheckbox} from '@cloudsense/cs-ui-components';

class CSCheckboxPreview extends React.Component {
	getDoc() {

		const onChangeHandler = () => alert('Checkbox changed!');
		const onClickHandler = () => alert('Checkbox was clicked!');

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
							string: '',
							component:
								<CSCheckbox
									borderType="square"
									label="This is a label"
								/>
						},
						{
							variationName: ['round'],
							quickLink: 'round',
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
							component:
								<CSCheckbox
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
							component:
								<CSCheckbox
									label="This is a label"
									labelTitle
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
							string: '',
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
							string: '',
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
							string: '',
							component:
								<CSCheckbox
									label="This is a label"
									onChange={onChangeHandler}
								/>
						}
					]
				},
				{
					propName: 'onClick',
					variations: [
						{
							string: '',
							component:
								<CSCheckbox
									label="This is a label"
									onClick={onClickHandler}
								/>
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							string: '',
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
					propertyName: 'borderType',
					description: 'Checkbox style',
					options: [
						'square',
						'round'
					]
				},
				{
					propertyName: 'checked',
					description: 'Logic for checked state',
					options: [
						'false',
						'true'
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
					description: 'Logic for error state',
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
					description: 'Checkbox help text for tooltip display'
				},
				{
					propertyName: 'id',
					description: 'Checkbox id value'
				},
				{
					propertyName: 'label',
					description: 'Checkbox label to display'
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
					description: 'Checkbox name value'
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event'
				},
				{
					propertyName: 'onClick',
					description: 'Logic for onClick event'
				},
				{
					propertyName: 'required',
					description: 'Logic for required state',
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
					description: 'Checkbox tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				},
				{
					propertyName: 'variant',
					description: 'Checkbox variant',
					options: [
						'neutral',
						'brand'
					]
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
								'HTML <input type="checkbox"> - hidden',
								'<span> imitating checkbox with custom style',
								'<input> and <span> wrapped in <label>'
							],
							properties: [
								'aria-required',
								'aria-invalid',
								'aria-labelledby - associate checkbox with label'
							],
							styling: [
								'Focus state styles'
							],
							keyboardOperability: [
								'HTML <input> with type="checkbox" ensured focus and implicit role="checkbox"'
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
