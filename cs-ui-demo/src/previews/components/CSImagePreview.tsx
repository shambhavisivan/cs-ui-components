import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSImage } from '@cloudsense/cs-ui-components';

class CSImagePreview extends React.Component {
	getDoc() {
		const json = {
			name: 'Image',
			usage: 'Image is used for rendering logos and logomarks',
			accessible: 'yes',
			examples: [
				{
					propName: 'type',
					variations: [
						{
							variationName: ['logo'],
							quickLink: 'logo',
							component:
								<CSImage type="logo" />
						},
						{
							variationName: ['logomark'],
							quickLink: 'logomark',
							component:
								<CSImage type="logomark" />
						}
					]
				},
				{
					propName: 'color',
					variations: [
						{
							variationName: ['white'],
							variationText: ['type="logo"', 'longDescription="white cloudsense logo on black background"'],
							quickLink: 'white logo',
							component:
								<div className="black-background">
									<CSImage
										type="logo"
										color="white"
										variant="initial"
										longDescription="white cloudsense logo on black background"
									/>
								</div>
						},
						{
							variationName: ['purple'],
							variationText: 'type="logo"',
							quickLink: 'purple logo',
							component:
								<CSImage
									type="logo"
									color="purple"
									variant="initial"
								/>
						},
						{
							variationName: ['white'],
							variationText: 'type="logomark"',
							quickLink: 'white logomark',
							component:
								<div className="black-background">
									<CSImage
										type="logomark"
										color="white"
										variant="initial"
									/>
								</div>
						},
						{
							variationName: ['black'],
							variationText: 'type="logomark"',
							quickLink: 'black logomark',
							component:
								<CSImage
									type="logomark"
									color="black"
									variant="initial"
								/>
						},
						{
							variationName: ['purple'],
							variationText: 'type="logomark"',
							quickLink: 'purple logomark',
							component:
								<CSImage
									type="logomark"
									color="purple"
									variant="initial"
								/>
						}
					]
				},
				{
					propName: 'variant',
					variations: [
						{
							variationName: ['initial'],
							variationText: ['type="logo"', 'color="white"'],
							quickLink: 'initial white logo',
							component:
								<div className="black-background">
									<CSImage
										type="logo"
										color="white"
										variant="initial"
									/>
								</div>
						},
						{
							variationName: ['initial'],
							variationText: ['type="logo"', 'color="purple"'],
							quickLink: 'initial purple logo',
							component:
								<CSImage
									type="logo"
									color="purple"
									variant="initial"
								/>
						},
						{
							variationName: ['initial'],
							variationText: ['type="logomark"', 'color="white"'],
							quickLink: 'initial white logomark',
							component:
								<div className="black-background">
									<CSImage
										type="logomark"
										color="white"
										variant="initial"
									/>
								</div>
						},
						{
							variationName: ['reversed'],
							variationText: ['type="logomark"', 'color="black"'],
							quickLink: 'reversed black logomark',
							component:
								<CSImage
									type="logomark"
									color="black"
									variant="reversed"
								/>
						},
						{
							variationName: ['reversed'],
							variationText: ['type="logomark"', 'color="purple"'],
							quickLink: 'reversed purple logomark',
							component:
								<CSImage
									type="logomark"
									color="purple"
									variant="reversed"
								/>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSImage
									type="logomark"
									color="purple"
									variant="initial"
									id="id"
								/>
						}
					]
				},
				{
					propName: 'width',
					variations: [
						{
							variationName: ['30rem'],
							component:
								<CSImage
									type="logomark"
									color="purple"
									variant="initial"
									width="30rem"
								/>
						}
					]
				},
				{
					propName: 'height',
					variations: [
						{
							variationName: ['15px'],
							component:
								<CSImage
									type="logomark"
									color="black"
									variant="initial"
									height="15px"
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
							component:
								<CSImage
									type="logomark"
									color="black"
									variant="initial"
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
					description: 'Apply custom CSS classes to the image.'
				}, {
					name: 'color',
					customTypes: [{
						name: 'CSImageColor',
						types: ['\'white\'', '\'black\'', '\'purple\'']
					}],
					default: '\'purple\'',
					description: 'Set the image color.'
				}, {
					name: 'height',
					types: ['string'],
					description: 'Set the image height. (eg. 200px, 20rem, 50%, etc.)'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the image.'
				}, {
					name: 'type',
					required: true,
					customTypes: [{
						name: 'CSImageType',
						types: ['\'logo\'', '\'logomark\'']
					}],
					description: 'Set the image type.'
				}, {
					name: 'variant',
					customTypes: [{
						name: 'CSImageVariant',
						types: ['\'initial\'', '\'reversed\'']
					}],
					default: '\'initial\'',
					description: 'Set the image variant.'
				}, {
					name: 'width',
					types: ['string'],
					description: 'Set the image width. (eg. 200px, 20rem, 50%, etc.)'
				}, {
					name: 'longDescription',
					types: ['string'],
					description: 'Set the expanded description of the image.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the image tag.'
				}
			],
			accessibility: [
				{
					criterionList: [
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'HTML `<img>`'
							],
							properties: [
								'`alt`'
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

export default CSImagePreview;
