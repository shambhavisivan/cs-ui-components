import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSSlider} from '@cloudsense/cs-ui-components';

class CSSliderPreview extends React.Component {

	getDoc() {
		const handleOnChange = () => alert('Value changed');
		const json = {
			name: 'Slider',
			usage: 'A range slider lets the user specify a numeric value which must be between two specified values.',
			examples: [
				{
					propName: 'value',
					variations: [
						{
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									helpText="Help text example"
									tooltipPosition="top-right"
								/>
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							string: '',
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									helpText="Help text example"
									tooltipPosition="top-left"
								/>
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							string: '',
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									helpText="Help text example"
									tooltipPosition="bottom-right"
								/>
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							string: '',
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									helpText="Help text example"
									tooltipPosition="bottom-left"
								/>
						}
					]
				},
				{
					propName: 'min',
					variations: [
						{
							string: '',
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
							string: '',
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
							string: '',
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									step="25"
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
							string: '',
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
							string: '',
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
							string: '',
							component:
								<CSSlider
									label="Select value"
									min="0"
									max="100"
									onChange={handleOnChange}
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
					propName: 'className',
					variations: [
						{
							variationName: ['custom-class'],
							quickLink: 'custom-class',
							string: '',
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
					description: 'Slider help text for tooltip display'
				},
				{
					propertyName: 'id',
					description: 'Slider id value'
				},
				{
					propertyName: 'label',
					description: 'Slider label text to display'
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
					description: 'Slider range max value'
				},
				{
					propertyName: 'min',
					description: 'Slider range max value'
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
					propertyName: 'size',
					description: 'Slider size',
					options: [
						'default',
						'large',
						'medium',
						'small',
						'xsmall'
					]
				},
				{
					propertyName: 'step',
					description: 'Slader range granularity'
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Slider tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				},
				{
					propertyName: 'value',
					description: 'Slider initial value'
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
					<PreviewProperties name={component.name} examples={component.examples}/>
					<PreviewTable components={[component]} />
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
