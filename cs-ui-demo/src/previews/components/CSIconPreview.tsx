import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSIcon } from '@cloudsense/cs-ui-components';

class CSIconPreview extends React.Component {
	getDoc() {
		const json = {
			name: 'Icon',
			usage: 'Support for both Lightening and CloudSense Icons',
			accessible: 'yes',
			examples: [
				{
					propName: 'name',
					variations: [
						{
							variationName: ['video'],
							quickLink: 'video',
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
							quickLink: 'slds',
							variationText: ['name="video"'],
							component:
								<CSIcon
									name="video"
									origin="slds"
								/>
						},
						{
							variationName: ['cs'],
							quickLink: 'cs',
							variationText: ['name="table"'],
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
							quickLink: '90',
							variationText: ['name="breadcrumbs"'],
							component:
								<CSIcon
									name="breadcrumbs"
									rotate="90"
								/>
						},
						{
							variationName: ['180'],
							quickLink: '180',
							variationText: ['name="breadcrumbs"'],
							component:
								<CSIcon
									name="breadcrumbs"
									rotate="180"
								/>
						},
						{
							variationName: ['270'],
							quickLink: '270',
							variationText: ['name="breadcrumbs"'],
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
							quickLink: 'pink',
							variationText: ['name="breadcrumbs"'],
							component:
								<CSIcon
									name="breadcrumbs"
									color="pink"
								/>
						},
						{
							variationName: ['#ff0000'],
							quickLink: '#ff0000',
							variationText: ['name="breadcrumbs"'],
							component:
								<CSIcon
									name="breadcrumbs"
									color="#ff0000"
								/>
						},
						{
							variationName: ['rgba(100,100,255)'],
							quickLink: 'rgba(100,100,255)',
							variationText: ['name="breadcrumbs"'],
							component:
								<CSIcon
									name="breadcrumbs"
									color="rgba(100,100,255,1.00)"
								/>
						}
					]
				},
				{
					propName: 'size',
					variations: [
						{
							variationName: ['2rem'],
							quickLink: '2rem',
							variationText: ['origin="cs"', 'name="tag"'],
							component:
								<CSIcon
									origin="cs"
									name="tag"
									size="2rem"
								/>
						}
					]
				},
				{
					propName: 'frame',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							variationText: ['origin="cs"', 'name="video"', 'color="pink"'],
							component:
								<CSIcon
									name="lead"
									origin="cs"
									frame
									size="2rem"
								/>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSIcon
									name="lead"
									origin="cs"
									id="id"
									size="2rem"
								/>
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component:
								<CSIcon
									name="gift"
									origin="cs"
									title="gift"
								/>
						}
					]
				},
				{
					propName: 'spin',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSIcon
									name="spinner"
									origin="slds"
									spin
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
							variationText: ['origin="cs"', 'name="tag"'],
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
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the icon.'
				}, {
					name: 'color',
					types: ['string'],
					description: 'Set a custom colour value for the icon. (eg. pink, #ff0000, rgba(0, 0, 0, 0.2), etc.)'
				}, {
					name: 'frame',
					types: ['boolean'],
					default: 'false',
					description: 'Show a frame behind the icon.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the icon.'
				}, {
					name: 'name',
					required: true,
					types: ['string'],
					description: 'Select which icon to display (see the icons tab).'
				}, {
					name: 'origin',
					customTypes: [{
						name: 'CSIconOrigin',
						types: ['\'slds\'', '\'cs\'']
					}],
					default: '\'slds\'',
					description: 'Select whether a SalesForce or a CloudSense icon should be used.'
				}, {
					name: 'rotate',
					types: ['string'],
					default: '\'0\'',
					description: 'Set by how many degrees the icon should be rotated clockwise. (eg. 90, 180, etc.)'
				}, {
					name: 'size',
					types: ['string'],
					description: 'Set the icon size. (eg. 12px, 1.5rem, etc.)'
				}, {
					name: 'spin',
					types: ['boolean'],
					default: 'false',
					description: 'Add a spinning animation to the icon.'
				}, {
					name: 'title',
					types: ['string'],
					description: 'Set the icon title.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the icon frame div if it exists.'
				}
			],
			accessibility: [
				{
					criterionList: [
						'4.1.2'
					],
					requirements: [
						{
							properties: [
								'aria-hidden'
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

export default CSIconPreview;
