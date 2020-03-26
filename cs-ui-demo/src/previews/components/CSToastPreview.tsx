import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSToast} from '@cloudsense/cs-ui-components';

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
							variationName: ['600px'],
							string: '',
							component:
								<CSToast
									variant="info"
									closeButton
									minWidth="600px"
									text="This is an example toast with min width 600px"
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
								<CSToast
									variant="info"
									closeButton
									text="This is an example toast with a close button"
								/>
						},
						{
							variationName: ['false'],
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
							variationName: ['n/a'],
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
							variationName: ['n/a'],
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
							string: '',
							component:
								<CSToast
									variant="info"
									closeButton
									iconVisibility
								>
									<span>This custom text includes a <a href="./CSToast" className="cs-toast-link">link</a></span>
								</CSToast>
						},
						{
							variationName: ['Bold and italic text'],
							string: '',
							component:
								<CSToast
									variant="info"
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
					propertyName: 'variant',
					description: 'Color variant of toast',
					options: [
						'info',
						'success',
						'warning',
						'error'
					]
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
					propertyName: 'iconName',
					description: 'Name of icon from icons library which overrides the default icon defined by variant',
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
					propertyName: 'text',
					description: 'Text content for main toast message',
					options: [
					]
				},
				{
					propertyName: 'detail',
					description: 'Text content for toast detail',
					options: [
					]
				},
				{
					propertyName: 'closeButton',
					description: 'Logic for close button state',
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

export default CSToastPreview;
