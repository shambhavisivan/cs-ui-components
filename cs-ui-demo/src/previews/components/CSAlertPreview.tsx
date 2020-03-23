import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';

import {CSAlert} from '@cloudsense/cs-ui-components';

class CSAlertPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Alert',
			usage: 'Alert banners communicate a state that affects the entire system, not just a feature or page. They persist over a session and appear without the user initiating an action.',
			examples: [
				{
					propName: 'variant',
					variations: [
						{
							variationName: ['info'],
							string: '',
							component:
								<CSAlert
									variant="info"
									closeButton
									text="This is an example info alert"
								/>
						},
						{
							variationName: ['warning'],
							string: '',
							component:
								<CSAlert
									variant="warning"
									closeButton
									text="This is an example warning alert"
								/>
						},
						{
							variationName: ['error'],
							string: '',
							component:
								<CSAlert
									variant="error"
									closeButton
									text={['This is an example error alert', 'Second alert', 'Third alert']}
								/>
						},
						{
							variationName: ['offline'],
							string: '',
							component:
								<CSAlert
									variant="offline"
									closeButton
									text="This is an example offline alert"
								/>
						}
					]
				},
				{
					propName: 'styleType',
					variations: [
						{
							variationName: ['light', 'info'],
							string: '',
							component:
								<CSAlert
									variant="info"
									styleType="light"
									closeButton
									text="This is an example light info alert"
								/>
						},
						{
							variationName: ['light', 'error'],
							string: '',
							component:
								<CSAlert
									variant="error"
									styleType="light"
									closeButton
									text="This is an example light error alert"
								/>
						},
						{
							variationName: ['light', 'warning'],
							string: '',
							component:
								<CSAlert
									variant="warning"
									styleType="light"
									closeButton
									text="This is an example light warning alert"
								/>
						}
					]
				},
				{
					propName: 'textAlign',
					variations: [
						{
							variationName: ['left'],
							string: '',
							component:
								<CSAlert
									variant="info"
									textAlign="left"
									closeButton
									text="This is an example alert with text aligned left"
								/>
						},
						{
							variationName: ['left', 'array'],
							string: '',
							component:
								<CSAlert
									variant="info"
									textAlign="left"
									closeButton
									text={['This is an example alert with text aligned left', 'One more alert', 'Another alert to display']}
								/>
						},
						{
							variationName: ['center'],
							string: '',
							component:
								<CSAlert
									variant="info"
									textAlign="center"
									closeButton
									text="This is an example alert with text aligned center"
								/>
						}
					]
				},
				{
					propName: 'iconName',
					customText: 'This is used for overriding default icon defined by variant',
					variations: [
						{
							variationName: ['quote'],
							string: '',
							component:
								<CSAlert
									variant="warning"
									iconName="quote"
									closeButton
									text="This is an example alert for overriding the icon with iconName prop"
								/>
						}
					]
				},
				{
					propName: 'iconVisibility',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSAlert
									variant="info"
									closeButton
									text="This is an example alert with an icon"
								/>
						},
						{
							variationName: ['false'],
							string: '',
							component:
								<CSAlert
									variant="info"
									iconVisibility={false}
									closeButton
									text="This is an example alert without an icon"
								/>
						}
					]
				},
				{
					propName: 'closeButton',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSAlert
									variant="info"
									closeButton
									text="This is an example alert with a close button"
								/>
						},
						{
							variationName: ['false'],
							string: '',
							component:
								<CSAlert
									variant="info"
									text="This is an example alert without a close button"
								/>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['className'],
							string: '',
							component:
								<CSAlert
									variant="info"
									className="custom-class"
									closeButton
									text="This is an example alert with a close button"
								/>
						}
					]
				},
				{
					propName: 'custom',
					customText: 'Want to add custom styling or features? Just write the code inside the component tags as shown below. If you need to add a link there is already a .cs-alert-link class to make it easy. Inspect the example below for a better look.',
					variations: [
						{
							variationName: ['Add a custom link'],
							string: '',
							component:
								<CSAlert
									variant="info"
									iconName="info"
								>
									<span>This custom text includes a <a href="./CSAlert" className="cs-alert-link">link</a></span>
								</CSAlert>
						},
						{
							variationName: ['Bold and italic text'],
							string: '',
							component:
								<CSAlert
									variant="info"
									iconName="info"
								>
									<span>This custom text includes <b>bold</b> and <i>italic</i> text</span>
								</CSAlert>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'variant',
					description: 'Color and icon variant of alert',
					options: [
						'info',
						'warning',
						'error',
						'offline'
					]
				},
				{
					propertyName: 'styleType',
					description: 'Determines styling of text and background',
					options: [
						'default',
						'light'
					]
				},
				{
					propertyName: 'textAlign',
					description: 'Alignment of the text inside the alert',
					options: [
						'centre',
						'left'
					]
				},
				{
					propertyName: 'iconName',
					description: 'Name of icon from icons library which overrides the default icon defined by variant',
					options: [
					]
				},
				{
					propertyName: 'text',
					description: 'Text content of alert',
					options: [
					]
				},
				{
					propertyName: 'closeButton',
					description: 'Show Close button',
					options: [
					]
				},
				{
					propertyName: 'onClose',
					description: 'Close Alert',
					options: [
					]
				},
				{
					propertyName: 'iconVisibility',
					description: 'Logic for icon visibility state',
					options: [
						'true',
						'false'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: [
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
										<div className="version-preview alert-preview">
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

				<div className="table-wrapper">
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

export default CSAlertPreview;
