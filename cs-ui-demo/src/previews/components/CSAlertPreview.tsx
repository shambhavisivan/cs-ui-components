import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSAlert } from '@cloudsense/cs-ui-components';

class CSAlertPreview extends React.Component {
	handleClose = () => alert('Alert has been closed.');

	getDoc() {
		const json = {
			name: 'Alert',
			usage: 'Alert banners communicate a state that affects the entire system, not just a feature or page. They persist over a session and appear without the user initiating an action.',
			accessible: 'yes',
			examples: [
				{
					propName: 'variant',
					variations: [
						{
							variationName: ['info'],
							quickLink: 'info',
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
							component:
								<CSAlert
									variant="error"
									closeButton
									text={['This is an example error alert', 'Second alert', 'Third alert']}
								/>
						},
						{
							variationName: ['base'],
							quickLink: 'base',
							component:
								<CSAlert
									variant="base"
									closeButton
									text="This is an example base alert"
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
							component:
								<CSAlert
									variant="warning"
									styleType="light"
									closeButton
									text="This is an example light warning alert"
								/>
						},
						{
							variationName: ['light'],
							quickLink: 'light base',
							variationText: ['variant="base"'],
							component:
								<CSAlert
									variant="base"
									styleType="light"
									closeButton
									text="This is an example light base alert"
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
							component:
								<CSAlert
									variant="info"
									textAlign="center"
									closeButton
									text="This is an example alert with text aligned center"
								/>
						},
						{
							variationName: ['center'],
							quickLink: 'center with array',
							variationText: ['array'],
							component:
								<CSAlert
									variant="info"
									textAlign="center"
									closeButton
									text={['This is an example alert with text aligned left', 'One more alert', 'Another alert to display']}
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
					propName: 'styleFormat',
					variations: [
						{
							variationName: ['default'],
							quickLink: 'default',
							component:
								<CSAlert
									variant="info"
									text="This is an example of default alert"
									closeButton
								/>
						},
						{
							variationName: ['scoped'],
							quickLink: 'scoped',
							component:
								<CSAlert
									variant="info"
									styleFormat="scoped"
									closeButton
									text="This is an example of scoped alert"
								/>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSAlert
									variant="info"
									id="id"
									iconName="quote"
									closeButton
									text="This is an example alert for overriding the icon with iconName prop"
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
							component:
								<CSAlert
									variant="info"
									text="This is an example alert without a close button"
								/>
						}
					]
				},
				{
					propName: 'onClose',
					variations: [
						{
							component:
								<CSAlert
									variant="info"
									closeButton
									onClose={this.handleClose}
									text="This is an example alert with a close button"
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
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the alert.'
				}, {
					name: 'closeButton',
					types: ['boolean'],
					description: 'Show the close button.'
				}, {
					name: 'iconName',
					types: ['string'],
					description: 'Override the default icon defined by the variant.'
				}, {
					name: 'iconVisibility',
					types: ['boolean'],
					default: 'true',
					description: 'Show or hide the icon.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the alert.'
				}, {
					name: 'onClose',
					types: ['(event) => void'],
					description: 'Handler method for closing the alert.'
				}, {
					name: 'styleFormat',
					customTypes: [{
						name: 'CSAlertStyleFormat',
						types: ['\'default\'', '\'scoped\'']
					}],
					default: '\'default\'',
					description: 'Determine size of alert and icons.'
				}, {
					name: 'styleType',
					customTypes: [{
						name: 'CSAlertStyleType',
						types: ['\'default\'', '\'light\'']
					}],
					default: '\'default\'',
					description: 'Determine style of text and background.'
				}, {
					name: 'text',
					types: ['string', 'Array<string>'],
					description: 'Set textual content of the alert.'
				}, {
					name: 'textAlign',
					customTypes: [{
						name: 'CSAlertTextAlign',
						types: ['\'center\'', '\'left\'']
					}],
					default: '\'left\'',
					description: 'Align text inside the alert.'
				}, {
					name: 'variant',
					required: true,
					customTypes: [{
						name: 'CSAlertVariant',
						types: ['\'info\'', '\'warning\'', '\'error\'', '\'base\'']
					}],
					description: 'Set the colour and icon variant of the alert.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the alert div.'
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.4.4',
						'2.1.1',
						'2.1.2',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'<h4> - allows screen reader navigation by heading search'
							],
							properties: [
								'role="alert/status" - depending on alert variant'
							],
							styling: [
								'Color contrast ratio > 4.5'
							],
							keyboardOperability: [
								'Close button is <button> and a child - allows keyboard focus'
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

export default CSAlertPreview;
