import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import { CSToast, renderCSToast, CSButton } from '@cloudsense/cs-ui-components';

class CSToastPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Toast',
			usage: 'Toast serves as a feedback & confirmation mechanism after the user takes an action.',
			examples: [
				{
					propName: 'variant',
					customText: '',
					variations: [
						{
							variationName: ['info'],
							quickLink: 'info',
							variationText: ['closeButton="true"'],
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
					propName: 'textAlign',
					variations: [
						{
							variationName: ['left'],
							quickLink: 'left',
							variationText: ['variant="info"', 'closeButton="true"'],
							string: '',
							component:
								<CSToast
									variant="info"
									textAlign="left"
									closeButton
									text="This is an example toast with text aligned left"
								/>
						},
						{
							variationName: ['center'],
							quickLink: 'center',
							variationText: ['variant="info"', 'closeButton="true"'],
							string: '',
							component:
								<CSToast
									variant="info"
									textAlign="center"
									closeButton
									text="This is an example toast with text aligned center"
								/>
						}
					]
				},
				{
					propName: 'minWidth',
					variations: [
						{
							variationName: ['100%'],
							quickLink: '100%',
							variationText: ['variant="info"', 'closeButton="true"'],
							string: '',
							component:
								<CSToast
									variant="info"
									closeButton
									minWidth="100%"
									text="This is an example toast with min width 100%"
								/>
						},
						{
							variationName: ['400px'],
							quickLink: '400px',
							variationText: ['variant="info"', 'closeButton="true"'],
							string: '',
							component:
								<CSToast
									variant="info"
									closeButton
									minWidth="400px"
									text="This is an example toast with min width 400px"
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
							string: '',
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
							string: '',
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
							string: '',
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
					propName: 'iconVisibility',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							variationText: ['variant="info"', 'closeButton="true"'],
							string: '',
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
							string: '',
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
					propName: 'detail',
					variations: [
						{
							variationText: ['variant="info"', 'closeButton="true"', 'iconVisibility="true"'],
							string: '',
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
							string: '',
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
							string: '',
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
							string: '',
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
				},
				{
					propName: 'renderCSToast()',
					customText: 'renderCSToast({...CSToastProps}, position: CSToastPosition, duration: number(in seconds))',
					variations: [
						{
							string: '',
							component:
								<div className="cs-toast-buttons-wrapper">
									<CSButton label="top-right" onClick={() => renderCSToast({variant: 'success', closeButton: true, text: 'Top right toast'}, 'top-right', 3)} />
									<CSButton label="top-left" onClick={() => renderCSToast({variant: 'warning', closeButton: true, text: 'Top left toast'}, 'top-left', 4)} />
									<CSButton label="bottom-right" onClick={() => renderCSToast({variant: 'info', closeButton: true, text: 'Bottom right toast'}, 'bottom-right', 5)} />
									<CSButton label="bottom-left" onClick={() => renderCSToast({variant: 'error', closeButton: true, text: 'Bottom left toast that won\'t close (duration = null)'}, 'bottom-left', null)} />
								</div>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'closeButton',
					description: 'Logic for close button state'
				},
				{
					propertyName: 'detail',
					description: 'Text content for toast detail'
				},
				{
					propertyName: 'iconName',
					description: 'Name of icon from icons library which overrides the default icon defined by variant'
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
					propertyName: 'minWidth',
					description: 'Minimum width of toast (default is 30rem)',
					options: [
						'e.g.',
						'100%',
						'300px',
						'20rem'
					]
				},
				{
					propertyName: 'onClose',
					description: 'Close Alert'
				},
				{
					propertyName: 'text',
					description: 'Text content for main toast message'
				},
				{
					propertyName: 'textAlign',
					description: 'Alignment of the text inside the toast',
					options: [
						'left',
						'centre'
					]
				},
				{
					propertyName: 'variant',
					description: 'Color variant of toast',
					options: [
						'info',
						'success',
						'warning',
						'error'
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

export default CSToastPreview;
