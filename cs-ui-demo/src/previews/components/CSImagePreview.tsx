import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
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
							variationName: ['logo', 'white'],
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
							variationName: ['logo', 'purple'],
							string: '',
							component:
								<CSImage
									type="logo"
									color="purple"
									variant="initial"
								/>
						},
						{
							variationName: ['logomark', 'white'],
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
							variationName: ['logomark', 'black'],
							string: '',
							component:
								<CSImage
									type="logomark"
									color="black"
									variant="initial"
								/>
						},
						{
							variationName: ['logomark', 'purple'],
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
							variationName: ['logo', 'white', 'initial'],
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
							variationName: ['logo', 'purple', 'initial'],
							string: '',
							component:
								<CSImage
									type="logo"
									color="purple"
									variant="initial"
								/>
						},
						{
							variationName: ['logomark', 'white', 'initial'],
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
							variationName: ['logomark', 'black', 'reversed'],
							string: '',
							component:
								<CSImage
									type="logomark"
									color="black"
									variant="reversed"
								/>
						},
						{
							variationName: ['logomark', 'purple', 'reversed'],
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
