import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSIcon} from '@cloudsense/cs-ui-components';

class CSIconPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Icon',
			usage: 'Support for both Lightening and CloudSense Icons',
			examples: [
				{
					propName: 'name',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSIcon
									name="video"
								/>
						}
					],
					customText: 'Icons require a name prop which correlates to the icon you would like to use.'
				},
				{
					propName: 'origin',
					variations: [
						{
							variationName: ['slds'],
							string: '',
							component:
								<CSIcon
									name="video"
									origin="slds"
								/>
						},
						{
							variationName: ['cs'],
							string: '',
							component:
								<CSIcon
									origin="cs"
									name="table"
								/>
						}
					]
				},
				{
					propName: 'rotate',
					variations: [
						{
							variationName: ['90'],
							string: '',
							component:
								<CSIcon
									name="breadcrumbs"
									rotate="90"
								/>
						},
						{
							variationName: ['180'],
							string: '',
							component:
								<CSIcon
									name="breadcrumbs"
									rotate="180"
								/>
						},
						{
							variationName: ['270'],
							string: '',
							component:
								<CSIcon
									name="breadcrumbs"
									rotate="270"
								/>
						}
					]
				},
				{
					propName: 'color',
					variations: [
						{
							variationName: ['pink'],
							string: '',
							component:
								<CSIcon
									name="breadcrumbs"
									color="pink"
								/>
						},
						{
							variationName: ['#ff0000'],
							string: '',
							component:
								<CSIcon
									name="breadcrumbs"
									color="#ff0000"
								/>
						},
						{
							variationName: ['rgba(100,100,255)'],
							string: '',
							component:
								<CSIcon
									name="breadcrumbs"
									color="rgba(100,100,255,1.00)"
								/>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSIcon
									origin="cs"
									name="tag"
									className="custom-class"
								/>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'name',
					description: 'Name prop of Icon',
					options: [
						'See icons tab for a full list of icons'
					]
				},
				{
					propertyName: 'origin',
					description: 'Origin prop of Icon',
					options: ['slds', 'cs']
				},
				{
					propertyName: 'rotate',
					description: 'Degree value for clockwise icon rotation',
					options: ['90', '180', '270']
				},
				{
					propertyName: 'color',
					description: 'Color value of icon',
					options: [
						'e.g.',
						'pink',
						'#ff0000',
						'rgba(100,100,255,1.00)'
					]
				},
				{
					propertyName: 'className',
					description: 'Icon class',
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

export default CSIconPreview;
