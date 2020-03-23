import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';

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
							variationName: ['default initial'],
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
							variationName: ['default brand'],
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
							variationName: ['default outline'],
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
							variationName: ['Transparent initial'],
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
							variationName: ['Transparent brand'],
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
							variationName: ['Transparent outline'],
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
							variationName: ['extra-small'],
							string: '',
							component: <CSButtonDropdown
											size="extra-small"
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
							variationName: ['iconName="down"'],
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
							variationName: ['iconName="threedots_vertical"'],
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
							variationName: ['className'],
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
						'extra small',
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
				<div className="preview-heading">
					<h1>{component.name}</h1>
					{component.usage ? <h2>{component.usage}</h2> : null}
				</div>

				{component.examples.map((example: any) => (
					<div className={`property-section ${example.propName}`} key={example.propName}>
						<h2 className="property-name">{example.propName}</h2>
						<div key={example.customText}>
							<p className="info-text">{example.customText}</p>
							{example.variations.map((variation: any, i: any) => (
								<React.Fragment key={i}>
									{variation.variationName.map((chip: any) => (
										<div key={chip} className="chip-label">{chip}</div>
									))}
									<div className="component-version">
										<div className="version-preview button-dropdown-preview">
											{variation.component}
										</div>
										<div className="version-description">
											<SyntaxHighlighter className="code-snippet"
												language="jsx">{variation.string}</SyntaxHighlighter>
										</div>
									</div>
								</React.Fragment>
							))}
						</div>
					</div>
				))}

				<div className="table-wrapper properties-table-wrapper">
					<h2 className="property-name">Properties list</h2>
					<h3 className="component-name">{component.name}</h3>
					<div className="properties-table">
						<div className="table-header">
							<div className="table-row">
								<div className="table-cell">Property name</div>
								<div className="table-cell">Description</div>
								<div className="table-cell">Options</div>
							</div>
						</div>
						<div className="table-body">
							{component.properties.map((prop: any, i: any) => (
								<div className="table-row" key={i}>
									<div className="table-cell">{prop.propertyName}</div>
									<div className="table-cell">{prop.description}</div>
									<div className="table-cell">
										{prop.options.map((option: any) => (
											<span className="prop-option" key={option}>{option}</span>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default CSButtonDropdownPreview;
