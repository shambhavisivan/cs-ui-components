import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

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
							quickLink: 'info',
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
							quickLink: 'warning',
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
							quickLink: 'error',
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
							quickLink: 'offline',
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
							variationName: ['light'],
							quickLink: 'light info',
							variationText: ['variant="info"'],
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
							variationName: ['light'],
							quickLink: 'light error',
							variationText: ['variant="error"'],
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
							variationName: ['light'],
							quickLink: 'light warning',
							variationText: ['variant="warning"'],
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
							quickLink: 'left',
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
							variationName: ['left'],
							quickLink: 'left with array',
							variationText: ['array'],
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
							quickLink: 'center',
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
							quickLink: 'quote',
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
							quickLink: 'true',
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
							quickLink: 'false',
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
							quickLink: 'true',
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
							quickLink: 'false',
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
							quickLink: 'custom class',
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
							variationName: ['custom link'],
							quickLink: 'custom link',
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
							variationName: ['custom text'],
							quickLink: 'custom text',
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

export default CSAlertPreview;
