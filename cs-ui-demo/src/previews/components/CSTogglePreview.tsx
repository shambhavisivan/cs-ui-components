import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import {CSToggle} from '@cloudsense/cs-ui-components';

class CSTogglePreview extends React.Component {
	getDoc() {

		const onChangeHandler = () => alert('Toggle changed!');

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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
							component:
								<CSToggle label="This is a label" error errorMessage="Error message!"/>
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
							component:
								<CSToggle
									label="This is a label"
									onChange={onChangeHandler}
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
							string: '',
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
					propertyName: 'checked',
					description: 'Value of checkbox',
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
					description: 'Helptext content'
				},
				{
					propertyName: 'id',
					description: 'Toggle id value'
				},
				{
					propertyName: 'label',
					description: 'Toggle label to display'
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
					propertyName: 'labelPosition',
					description: 'Label position, for now only default and left are supported',
					options: [
						'default',
						'left'
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
					propertyName: 'onChange',
					description: 'Logic for onChange event'
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
					description: 'Toggle tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
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
								'aria-labelledby - associate field with label'
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

export default CSTogglePreview;
