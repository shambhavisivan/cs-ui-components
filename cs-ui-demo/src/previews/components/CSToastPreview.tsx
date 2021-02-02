import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewApi from '../PreviewApi';
import PreviewApiTable from '../PreviewApiTable';

import { CSToast, CSToastApi, CSButton, CSButtonGroup } from '@cloudsense/cs-ui-components';

class CSToastPreview extends React.Component {
	getDoc() {
		const json = {
			name: 'Toast',
			usage: 'Toast serves as a feedback & confirmation mechanism after the user takes an action.',
			accessible: 'partially',
			examples: [
				{
					propName: 'variant',
					customText: '',
					variations: [
						{
							variationName: ['info'],
							quickLink: 'info',
							variationText: ['closeButton="true"'],
							component:
								<CSToast
									variant="info"
									closeButton
									text="This is an info variant toast"
								/>
						},
						{
							variationName: ['success'],
							quickLink: 'success',
							variationText: ['closeButton="true"'],
							component:
								<CSToast
									variant="success"
									closeButton
									text="This is a success variant toast"
								/>
						},
						{
							variationName: ['warning'],
							quickLink: 'warning',
							variationText: ['closeButton="true"'],
							component:
								<CSToast
									variant="warning"
									closeButton
									text="This is a warning variant toast"
								/>
						},
						{
							variationName: ['error'],
							quickLink: 'error',
							variationText: ['closeButton="true"'],
							component:
								<CSToast
									variant="error"
									closeButton
									text="This is an error variant toast"
								/>
						}
					]
				},
				{
					propName: 'width',
					variations: [
						{
							variationName: ['100%'],
							quickLink: '100%',
							variationText: ['variant="info"', 'closeButton="true"'],
							component:
								<CSToast
									variant="info"
									closeButton
									width="100%"
									text="This is an example toast with width 100%"
								/>
						},
						{
							variationName: ['800px'],
							quickLink: '800px',
							variationText: ['variant="info"', 'closeButton="true"'],
							component:
								<CSToast
									variant="info"
									closeButton
									width="800px"
									text="This is an example toast with width 800px"
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
							variationText: ['variant="info"'],
							component:
								<CSToast
									variant="info"
									closeButton
									text="This is an example toast with a close button"
								/>
						},
						{
							variationName: ['false'],
							quickLink: 'false',
							variationText: ['variant="info"'],
							component:
								<CSToast
									variant="info"
									closeButton={false}
									text="This is an example toast without a close button"
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
							variationText: ['variant="warning"', 'closeButton="true"'],
							component:
								<CSToast
									variant="warning"
									iconName="quote"
									closeButton
									text="This is an example alert for overriding the icon with iconName prop"
								/>
						}
					]
				},
				{
					propName: 'iconOrigin',
					variations: [
						{
							variationName: ['slds'],
							quickLink: 'slds',
							variationText: ['variant="info"', 'closeButton="true"'],
							component:
								<CSToast
									variant="info"
									iconName="quote"
									iconOrigin="slds"
									closeButton
									text="This is an example toast with an icon with origin 'slds'"
								/>
						},
						{
							variationName: ['cs'],
							quickLink: 'cs',
							variationText: ['variant="info"', 'closeButton="true"'],
							component:
								<CSToast
									variant="info"
									iconName="big_shot"
									iconOrigin="cs"
									closeButton
									text="This is an example toast with an icon with origin 'cs'"
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
							variationText: ['variant="info"', 'closeButton="true"'],
							component:
								<CSToast
									variant="info"
									closeButton
									text="This is an example toast with an icon"
								/>
						},
						{
							variationName: ['false'],
							quickLink: 'false',
							variationText: ['variant="success"', 'closeButton="true"'],
							component:
								<CSToast
									variant="success"
									closeButton
									iconVisibility={false}
									text="This is an example toast without an icon"
								/>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSToast
									variant="success"
									iconName="quote"
									closeButton
									text="This is an example alert for overriding the icon with iconName prop"
									id="id"
								/>
						}
					]
				},
				{
					propName: 'detail',
					variations: [
						{
							variationText: ['variant="info"', 'closeButton="true"', 'iconVisibility="true"'],
							component:
								<CSToast
									variant="info"
									closeButton
									iconVisibility
									text="This is an example toast with a detail prop"
									detail="This is the detail"
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
							variationText: ['variant="info"', 'closeButton="true"'],
							component:
								<CSToast
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
					customText: 'Want to add custom styling or features? Just write the code inside the component tags as shown below. If you need to add a link there is already a .cs-toast-link class to make it easy. Inspect the example below for a better look.',
					variations: [
						{
							variationName: ['Add a custom link'],
							quickLink: 'Add a custom link',
							variationText: ['variant="warning"', 'closeButton="true"', 'iconVisibility="true"'],
							component:
								<CSToast
									variant="warning"
									closeButton
									iconVisibility
								>
									<span>This custom text includes a <a href="./CSToast" className="cs-toast-link">link</a></span>
								</CSToast>
						},
						{
							variationName: ['Bold and italic text'],
							quickLink: 'Bold and italic text',
							variationText: ['variant="success"', 'closeButton="true"', 'iconVisibility="true"'],
							component:
								<CSToast
									variant="success"
									closeButton
									iconVisibility
								>
									<span>This custom text includes <b>bold</b> and <i>italic</i> text</span>
								</CSToast>
						}
					]
				}
			],
			properties: [
				{
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the toast.'
				}, {
					name: 'closeButton',
					types: ['boolean'],
					default: 'false',
					description: 'Show the close button.'
				}, {
					name: 'detail',
					types: ['string'],
					description: 'Set the text content for the toast detail.'
				}, {
					name: 'iconName',
					types: ['string'],
					description: 'Override the default icon defined by the variant.'
				}, {
					name: 'iconOrigin',
					customTypes: [{
						name: 'CSToastIconOrigin',
						types: ['\'slds\'', '\'cs\'']
					}],
					default: '\'slds\'',
					description: 'Select whether a SalesForce or a CloudSense icon should be used..'
				}, {
					name: 'iconVisibility',
					types: ['boolean'],
					default: 'true',
					description: 'Show or hide the icon.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the toast.'
				}, {
					name: 'onClose',
					types: ['(event) => void'],
					description: 'Handler method for closing the toast.'
				}, {
					name: 'text',
					types: ['string'],
					description: 'Set textual content for the toast.'
				}, {
					name: 'variant',
					required: true,
					customTypes: [{
						name: 'CSToastVariant',
						types: ['\'info\'', '\'success\'', '\'warning\'', '\'error\'']
					}],
					description: 'Set the colour and icon variant of the toast.'
				}, {
					name: 'width',
					types: ['string'],
					description: 'Set the toast width. (eg. 200px, 20rem, 50%, etc.)'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the toast wrapper div.'
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.4.4',
						'2.1.1',
						'2.1.2',
						'2.2.1 - check',
						'2.4.7',
						'3.2.1',
						'3.3.1',
						'4.1.2',
						'4.1.3'
					],
					requirements: [
						{
							structure: [
								'Heading is HTML <h4> - allows screen reader heading search'
							],
							properties: [
								'role="alert/status" - depending on toast variant',
								'duration - allowing setting large enough time'
							],
							visual: [
								'Color contrast ratio > 4.5'
							],
							keyboardOperability: [
								'Close button is <button> and a child - allows keyboard focus'
							]
						}
					]
				}
			],
			api:
			{
				name: 'CSToastAPI',
				methods: [
					{
						methodName: 'renderCSToast',
						definition: ' onClick={() => CSToastApi.renderCSToast({...CSToastProps}, position: CSToastPosition, duration: number)',
						preview:
							<CSButtonGroup combined>
								<CSButton
									label="top-right"
									onClick={() => CSToastApi.renderCSToast({ variant: 'success', closeButton: true, text: 'Top right toast' }, 'top-right', 3)}
								/>
								<CSButton
									label="top-left"
									onClick={() => CSToastApi.renderCSToast({ variant: 'warning', closeButton: true, text: 'Top left toast' }, 'top-left', 4)}
								/>
								<CSButton
									label="top-center"
									onClick={() => CSToastApi.renderCSToast({ variant: 'success', closeButton: true, text: 'Top center toast' }, 'top-center', 5)}
								/>
								<CSButton
									label="bottom-right"
									onClick={() => CSToastApi.renderCSToast({ variant: 'info', closeButton: true, text: 'Bottom right toast' }, 'bottom-right', 6)}
								/>
								<CSButton
									label="bottom-left"
									onClick={() => CSToastApi.renderCSToast({ variant: 'error', closeButton: true, text: 'Bottom left toast that won\'t close (duration = null)' }, 'bottom-left', null)}
								/>
							</CSButtonGroup>
					}
				]
			},
			methods: [
				{
					name: 'renderCSToast',
					description: 'For rendering CSToast component in a fixed container',
					args: [
						'props: CSToastProps',
						'position: CSToastPosition',
						'duration: number'
					],
					defaultArgsValues: [
						'position: \'top-left\'',
						'duration: 5 (seconds)'
					]
				}
			]
		};

		for (const example of json.examples) {
			for (const variation of example.variations) {
				(variation as any).string = jsxToString(variation.component);
			}
		}

		for (const method of json.api.methods) {
			(method as any).string = jsxToString(method.preview);
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
					<PreviewApi api={component.api} componentName={component.name} />
					<PreviewApiTable components={[component]} />
				</div>
				<div className="prop-sidebar">
					<h3>Quick Links</h3>
					<PreviewLinks component={component} />
				</div>
			</>
		);
	}
}

export default CSToastPreview;
