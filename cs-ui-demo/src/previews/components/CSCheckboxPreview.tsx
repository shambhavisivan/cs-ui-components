import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSCheckbox} from '@cloudsense/cs-ui-components';

class CSCheckboxPreview extends React.Component {
	getDoc() {

		const onChangeHandler = () => alert('Checbox changed!');
		const onClickHandler = () => alert('Checkbox was clicked!');

		const json = {
			name: 'Checkbox',
			usage: 'A checkable input that communicates if an option is true, false or indeterminate.',
			examples: [
				{
					propName: 'borderType',
					customText: '',
					variations: [
						{
							variationName: ['square'],
							string: '',
							component:
								<CSCheckbox
									borderType="square"
									label="This is a label"
								/>
						},
						{
							variationName: ['round'],
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
					propName: 'disabled',
					variations: [
						{
							variationName: ['true'],
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
					variations: [
						{
							variationName: ['true'],
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
					propName: 'className',
					variations: [
						{
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
				}
			],

			properties: [
				{
					propertyName: 'label',
					description: 'Checkbox label to display',
					options: []
				},
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
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					options: [
						'false',
						'true'
					]
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
					propertyName: 'variant',
					description: 'Checkbox variant',
					options: [
						'neutral',
						'brand'
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
					description: 'Error message text',
					options: []
				},
				{
					propertyName: 'helpText',
					description: 'Checkbox help text for tooltip display',
					options: []
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
					propertyName: 'labelHidden',
					description: 'Logic for visibility of the label',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: []
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event',
					options: []
				},
				{
					propertyName: 'onClick',
					description: 'Logic for onClick event',
					options: []
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
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable name={component.name} properties={component.properties} />
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
