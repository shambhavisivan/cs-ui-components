import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSAlert, CSButton } from '@cloudsense/cs-ui-components';

class CSAlertPreview extends React.Component {
	handleClose = () => alert('Alert has been closed.');
	getAlertDoc = () => ({
		name: 'Alert',
		usage: 'Alert banners communicate a state that affects the entire system, not just a feature or page. They persist over a session and appear without the user initiating an action.',
		accessible: 'yes',
		previews: [
			{
				name: 'CSAlert',
				examples: [
					{
						propName: 'variant',
						variations: [
							{
								primaryVariants: 'variant="info"',
								quickLink: 'info',
								component: <CSAlert
									variant="info"
									text="This is an example info alert"
								/>,
								code: `<CSAlert
									variant="info"
									text="This is an example info alert"
								/>`
							}, {
								primaryVariants: 'variant="warning"',
								quickLink: 'warning',
								component: <CSAlert
									variant="warning"
									text="This is an example warning alert"
								/>,
								code: `<CSAlert
									variant="warning"
									text="This is an example warning alert"
								/>`
							}, {
								primaryVariants: 'variant="error"',
								quickLink: 'error',
								component: <CSAlert
									variant="error"
									text="This is an example error alert"
								/>,
								code: `<CSAlert
									variant="error"
									text="This is an example error alert"
								/>`
							}, {
								primaryVariants: 'variant="base"',
								quickLink: 'base',
								component: <CSAlert
									variant="base"
									text="This is an example base alert"
								/>,
								code: `<CSAlert
									variant="base"
									text="This is an example base alert"
								/>`
							}
						]
					}, {
						propName: 'closeButton',
						alert: {
							variant: 'info',
							text: 'This prop should be used together with the onClose prop.'
						},
						variations: [
							{
								primaryVariants: 'closeButton={true}',
								component: <CSAlert
									variant="info"
									closeButton
									text="This is an example alert with a close button"
								/>,
								code: `<CSAlert
									variant="info"
									closeButton
									text="This is an example alert with a close button"
								/>`
							}
						]
					}, {
						propName: 'iconHidden',
						variations: [
							{
								primaryVariants: 'iconHidden={true}',
								quickLink: 'true',
								component: <CSAlert
									variant="info"
									text="This is an example alert with an icon"
								/>,
								code: `<CSAlert
									variant="info"
									text="This is an example alert with an icon"
								/>`
							}, {
								primaryVariants: 'iconHidden={false}',
								quickLink: 'false',
								component: <CSAlert
									variant="info"
									text="This is an example alert without an icon"
									iconHidden
								/>,
								code: `<CSAlert
									variant="info"
									text="This is an example alert without an icon"
									iconHidden
								/>`
							}
						]
					}, {
						propName: 'iconName | iconOrigin',
						variations: [
							{
								primaryVariants: [
									'iconName="quote"',
									'iconOrigin="slds"'
								],
								quickLink: 'slds',
								component: <CSAlert
									variant="info"
									iconName="quote"
									text="This is an example alert with an icon with origin 'slds'"
								/>,
								code: `<CSAlert
									variant="info"
									iconName="quote"
									text="This is an example alert with an icon with origin 'slds'"
								/>`
							}, {
								primaryVariants: [
									'iconName="big_shot"',
									'iconOrigin="cs"'
								],
								quickLink: 'cs',
								component: <CSAlert
									variant="info"
									iconName="big_shot"
									iconOrigin="cs"
									text="This is an example alert with an icon with origin 'cs'"
								/>,
								code: `<CSAlert
									variant="info"
									iconName="big_shot"
									iconOrigin="cs"
									text="This is an example alert with an icon with origin 'cs'"
								/>`
							}
						]
					}, {
						propName: 'onClose',
						variations: [
							{
								secondaryVariants: 'closeButton={true}',
								component: <CSAlert
									variant="info"
									closeButton
									onClose={this.handleClose}
									text="This is an example alert with a close button"
								/>,
								code: `<CSAlert
									variant="info"
									closeButton
									onClose={this.handleClose}
									text="This is an example alert with a close button"
								/>`
							}
						]
					}, {
						propName: 'styleFormat',
						variations: [
							{
								primaryVariants: 'styleFormat="default"',
								quickLink: 'default',
								component: <CSAlert
									variant="info"
									text="This is an example of default alert"
								/>,
								code: `<CSAlert
									variant="info"
									text="This is an example of default alert"
								/>`
							}, {
								primaryVariants: 'styleFormat="scoped"',
								quickLink: 'scoped',
								component: <CSAlert
									variant="info"
									styleFormat="scoped"
									text="This is an example of scoped alert"
								/>,
								code: `<CSAlert
									variant="info"
									styleFormat="scoped"
									text="This is an example of scoped alert"
								/>`
							}
						]
					}, {
						propName: 'styleType',
						variations: [
							{
								primaryVariants: 'styleType="light"',
								secondaryVariants: 'variant="info"',
								quickLink: 'light info',
								component: <CSAlert
									variant="info"
									styleType="light"
									text="This is an example light info alert"
								/>,
								code: `<CSAlert
									variant="info"
									styleType="light"
									text="This is an example light info alert"
								/>`
							}, {
								primaryVariants: 'styleType="light"',
								secondaryVariants: 'variant="error"',
								quickLink: 'light error',
								component: <CSAlert
									variant="error"
									styleType="light"
									text="This is an example light error alert"
								/>,
								code: `<CSAlert
									variant="error"
									styleType="light"
									text="This is an example light error alert"
								/>`
							}, {
								primaryVariants: 'styleType="light"',
								secondaryVariants: 'variant="warning"',
								quickLink: 'light warning',
								component: <CSAlert
									variant="warning"
									styleType="light"
									text="This is an example light warning alert"
								/>,
								code: `<CSAlert
									variant="warning"
									styleType="light"
									text="This is an example light warning alert"
								/>`
							}, {
								primaryVariants: 'styleType="light"',
								secondaryVariants: 'variant="base"',
								quickLink: 'light base',
								component: <CSAlert
									variant="base"
									styleType="light"
									text="This is an example light base alert"
								/>,
								code: `<CSAlert
									variant="base"
									styleType="light"
									text="This is an example light base alert"
								/>`
							}
						]
					}, {
						propName: 'text',
						variations: [
							{
								primaryVariants: 'text="string"',
								quickLink: 'string',
								component: <CSAlert
									variant="info"
									text="This is an example alert with a single line of text"
								/>,
								code: `<CSAlert
									variant="info"
									text="This is an example alert with a single line of text"
								/>`
							}, {
								primaryVariants: 'text={[...]}',
								quickLink: 'array',
								component: <CSAlert
									variant="info"
									text={[
										'This is alert message no. 1',
										'This is alert message no. 2',
										'This is alert message no. 3'
									]}
								/>,
								code: `<CSAlert
									variant="info"
									text={[
										'This is alert message no. 1',
										'This is alert message no. 2',
										'This is alert message no. 3'
									]}
								/>`
							}
						]
					}, {
						propName: 'textAlign',
						variations: [
							{
								primaryVariants: 'textAlign="left"',
								quickLink: 'left',
								component: <CSAlert
									variant="info"
									text="This is an example alert with text aligned left"
								/>,
								code: `<CSAlert
									variant="info"
									text="This is an example alert with text aligned left"
								/>`
							}, {
								primaryVariants: 'textAlign="left"',
								secondaryVariants: 'text={[...]}',
								quickLink: 'left with array',
								component: <CSAlert
									variant="info"
									text={[
										'This is an example alert with text aligned left',
										'One more alert',
										'Another alert to display'
									]}
								/>,
								code: `<CSAlert
									variant="info"
									text={[
										'This is an example alert with text aligned left',
										'One more alert',
										'Another alert to display'
									]}
								/>`
							}, {
								primaryVariants: 'textAlign="center"',
								quickLink: 'center',
								component: <CSAlert
									variant="info"
									textAlign="center"
									text="This is an example alert with text aligned center"
								/>,
								code: `<CSAlert
									variant="info"
									textAlign="center"
									text="This is an example alert with text aligned center"
								/>`
							}, {
								primaryVariants: 'textAlign="center"',
								secondaryVariants: 'text={[...]}',
								quickLink: 'center with array',
								component: <CSAlert
									variant="info"
									textAlign="center"
									text={[
										'This is an example alert with text aligned center',
										'One more alert',
										'Another alert to display'
									]}
								/>,
								code: `<CSAlert
									variant="info"
									textAlign="center"
									text={[
										'This is an example alert with text aligned center',
										'One more alert',
										'Another alert to display'
									]}
								/>`
							}
						]
					}, {
						propName: 'id | class',
						variations: [
							{
								primaryVariants: [
									'id="custom-id"',
									'className="custom-class"'
								],
								component: <CSAlert
									variant="info"
									id="custom-id"
									className="custom-class"
									text="This is an example alert with a custom CSS class and a custom ID"
								/>,
								code: `<CSAlert
									variant="info"
									id="custom-id"
									className="custom-class"
									text="This is an example alert with a custom CSS class and a custom ID"
								/>`
							}
						]
					}, {
						propName: 'children',
						description: 'CSAlert supports custom content provided as children',
						variations: [
							{
								primaryVariants: 'custom link',
								quickLink: 'custom link',
								component: <CSAlert variant="info">
									<span>This custom text includes a <a href="./CSAlert" className="cs-alert-link">link</a></span>
								</CSAlert>,
								code: `<CSAlert variant="info">
									<span>This custom text includes a <a href="./CSAlert" className="cs-alert-link">link</a></span>
								</CSAlert>`
							}, {
								primaryVariants: 'custom text',
								quickLink: 'custom text',
								component: <CSAlert variant="info">
									<span>This custom text includes <b>bold</b> and <i>italic</i> text</span>
								</CSAlert>,
								code: `<CSAlert variant="info">
									<span>This custom text includes <b>bold</b> and <i>italic</i> text</span>
								</CSAlert>`
							}, {
								primaryVariants: 'custom component',
								quickLink: 'custom component',
								component: <CSAlert variant="info">
									<CSButton
										btnType="transparent"
										btnStyle="outline"
										label="Custom Button"
									/>
								</CSAlert>,
								code: `<CSAlert variant="info">
									<CSButton
										btnType="transparent"
										btnStyle="outline"
										label="Custom Button"
									/>
								</CSAlert>`
							}
						]
					}
				]
			}
		],
		properties: [
			{
				name: 'children',
				types: ['any'],
				description: 'This component supports custom content passed as children.'
			}, {
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the alert.'
			}, {
				name: 'closeButton',
				types: ['boolean'],
				default: 'false',
				description: 'Show the close button.'
			}, {
				name: 'iconName',
				types: ['string'],
				description: 'Override the default icon defined by the variant.'
			}, {
				name: 'iconOrigin',
				customTypes: [{
					name: 'CSAlertIconOrigin',
					types: ['\'slds\'', '\'cs\'']
				}],
				default: '\'slds\'',
				description: 'Select whether the Salesforce or the CloudSense icon set should be used.'
			}, {
				name: 'iconHidden',
				types: ['boolean'],
				default: 'false',
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
				description: 'Set the color and icon variant of the alert.'
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
							'`<h4>` - allows screen reader heading search'
						],
						properties: [
							'`role="alert/status"` - depending on alert variant'
						],
						styling: [
							'Color contrast ratio > 4.5'
						],
						keyboardOperability: [
							'Close button is a child `<button>` - allows keyboard focus'
						]
					}
				]
			}
		]
	})

	render() {
		const component = this.getAlertDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties {...component} />
					<PreviewTable components={[component]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSAlertPreview;
