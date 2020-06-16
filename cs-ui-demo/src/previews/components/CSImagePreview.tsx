import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSImage} from '@cloudsense/cs-ui-components';

class CSImagePreview extends React.Component {

	getDoc() {
		const json = {
			name: 'Image',
			usage: 'Image is used for rendering logos and logomarks',
			examples: [
				{
					propName: 'type',
					variations: [
						{
							variationName: ['logo'],
							quickLink: 'logo',
							string: '',
							component:
								<CSImage
									type="logo"
									color="purple"
									variant="initial"
								/>
						},
						{
							variationName: ['logomark'],
							quickLink: 'logomark',
							string: '',
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
					propName: 'color',
					variations: [
						{
							variationName: ['white'],
							variationText: 'type="logo"',
							quickLink: 'white logo',
							string: '',
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
							variationName: ['purple'],
							variationText: 'type="logo"',
							quickLink: 'purple logo',
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
					propName: 'width',
					variations: [
						{
							variationName: ['30rem'],
							string: '',
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
							string: '',
							component:
								<CSImage
									type="logomark"
									color="black"
									variant="initial"
									height="15px"
								/>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'type',
					description: 'Type of the image',
					options: [
						'logo',
						'logomark'
					]
				},
				{
					propertyName: 'color',
					description: 'Image color',
					options: [
						'white',
						'black',
						'purple'
					]
				},
				{
					propertyName: 'variant',
					description: 'Image variant',
					options: [
						'initial',
						'reversed'
					]
				},
				{
					propertyName: 'width',
					description: 'Image width',
					options: [
						'e.g.',
						'20rem',
						'15px',
						'50%'
					]
				},
				{
					propertyName: 'height',
					description: 'Image height',
					options: [
						'e.g.',
						'20rem',
						'15px',
						'50%'
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
					<PreviewHeading name={component.name} usage={component.usage} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component]}/>
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
