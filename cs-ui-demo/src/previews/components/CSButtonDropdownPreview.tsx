import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSButtonDropdown, CSButton} from '@cloudsense/cs-ui-components';

class CSButtonDropdownPreview extends React.Component {
	getDoc() {
		// const clickHandler = () => alert('Button is clicked!');

		const json = {
			name: 'Button Dropdown',
			usage: 'Like a regular button, just with a dropdown',
			examples: [
				{
					propName: 'btnType',
					customText: '',
					variations: [
						{
							variationName: ['default', 'initial'],
							string: '',
							component: <CSButtonDropdown
											iconName="down"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
												disabled
											/>
											<CSButton
												iconName="world"
												label="test label large large"
												disabled
											/>
										</CSButtonDropdown>

						},
						{
							variationName: ['default', 'brand'],
							string: '',
							component: <CSButtonDropdown
											btnStyle="brand"
											iconName="down"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						},
						{
							variationName: ['default', 'outline'],
							string: '',
							component: <CSButtonDropdown
											btnStyle="outline"
											iconName="down"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						},
						{
							variationName: ['transparent', 'initial'],
							string: '',
							customClass: 'inverse-background',
							component: <div className="blue-background">
								<CSButtonDropdown
									btnType="transparent"
									iconName="down"
								>
									<CSButton
										iconName="world"
										label="test label small"
									/>
									<CSButton
										iconName="world"
										label="test label large large"
									/>
								</CSButtonDropdown>
							</div>
						},
						{
							variationName: ['transparent', 'brand'],
							string: '',
							component: <CSButtonDropdown
											btnType="transparent"
											btnStyle="brand"
											iconName="down"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						},
						{
							variationName: ['transparent', 'outline'],
							string: '',
							customClass: 'inverse-background',
							component: <div className="blue-background">
								<CSButtonDropdown
									btnType="transparent"
									btnStyle="outline"
									iconName="down"
								>
									<CSButton
										iconName="world"
										label="test label small"
									/>
									<CSButton
										iconName="world"
										label="test label large large"
									/>
								</CSButtonDropdown>
							</div>
						}
					]
				},
				{
					propName: 'size',
					customText: '',
					variations: [
						{
							variationName: ['large'],
							string: '',
							component: <CSButtonDropdown
											size="large"
											iconName="down"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						},
						{
							variationName: ['small'],
							string: '',
							component: <CSButtonDropdown
											size="small"
											iconName="down"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						},
						{
							variationName: ['xsmall'],
							string: '',
							component: <CSButtonDropdown
											size="xsmall"
											iconName="down"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						}
					]
				},
				{
					propName: 'iconName',
					customText: '',
					variations: [
						{
							variationName: ['down'],
							string: '',
							component: <CSButtonDropdown
											iconName="down"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						},
						{
							variationName: ['threedots_vertical'],
							string: '',
							component: <CSButtonDropdown
											iconName="threedots_vertical"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						}
					]
				},
				{
					propName: 'disabled',
					customText: '',
					variations: [
						{
							variationName: ['default disabled'],
							string: '',
							component: <CSButtonDropdown
											iconName="down"
											disabled
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						}
					]
				},
				{
					propName: 'align',
					customText: '',
					variations: [
						{
							variationName: ['left'],
							string: '',
							component: <CSButtonDropdown
											iconName="down"
											align="left"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						},
						{
							variationName: ['right'],
							string: '',
							component: <CSButtonDropdown
											iconName="down"
											align="right"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						}
					]
				},
				{
					propName: 'iconRotate',
					customText: '',
					variations: [
						{
							variationName: ['90'],
							string: '',
							component: <CSButtonDropdown
											iconName="down"
											iconRotate="90"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						},
						{
							variationName: ['180'],
							string: '',
							component: <CSButtonDropdown
											iconName="down"
											iconRotate="180"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						},
						{
							variationName: ['270'],
							string: '',
							component: <CSButtonDropdown
											iconName="down"
											iconRotate="270"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						}
					]
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							string: '',
							component: <CSButtonDropdown
											iconName="down"
											className="custom-class"
										>
											<CSButton
												iconName="world"
												label="test label small"
											/>
											<CSButton
												iconName="world"
												label="test label large large"
											/>
										</CSButtonDropdown>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'btnType',
					description: 'Button Group type',
					options: [
						'default',
						'error',
						'success',
						'transparent'
					]
				},
				{
					propertyName: 'btnStyle',
					description: 'Button Group style',
					options: [
						'initial',
						'brand',
						'outline'
					]
				},
				{
					propertyName: 'iconName',
					description: 'Name of icon from icons library',
					options: [
					]
				},
				{
					propertyName: 'iconOrigin',
					description: 'SLDS or CloudSense icons',
					options: [
						'icon-only',
						'no-icon'
					]
				},
				{
					propertyName: 'size',
					description: 'Button size',
					options: [
						'normal',
						'small',
						'xsmall',
						'large'
					]
				},
				{
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					options: [
						'<condition>'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: []
				},
				{
					propertyName: 'align',
					description: 'Align the dropdown either left or right',
					options: [
						'left',
						'right'
					]
				},
				{
					propertyName: 'iconRotate',
					description: 'Degree value for clockwise icon',
					options: [
						'90',
						'180',
						'270'
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

export default CSButtonDropdownPreview;
