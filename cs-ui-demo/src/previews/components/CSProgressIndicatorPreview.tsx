import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';
import PreviewAccessibility from '../PreviewAccessibility';

import { CSProgressIndicator, CSProgressIndicatorItem } from '@cloudsense/cs-ui-components';

class CSProgressIndicatorPreview extends React.Component {

	getDoc() {
		const json = {
			name: 'Progress Indicator',
			usage: 'Progress Indicator is a component that communicates to the user the progress of a particular process.',
			accessible: 'yes',
			examples: [
				{
					propName: 'status',
					customText: '',
					variations: [
						{
							variationName: ['incomplete'],
							quickLink: 'incomplete',
							component:
								<CSProgressIndicator>
									<CSProgressIndicatorItem text="Item 1" status="incomplete" />
									<CSProgressIndicatorItem text="Item 2" status="incomplete" />
									<CSProgressIndicatorItem text="Item 3" status="incomplete" />
								</CSProgressIndicator>
						},
						{
							variationName: ['active'],
							quickLink: 'active',
							component:
								<CSProgressIndicator>
									<CSProgressIndicatorItem text="Item 1" status="active" />
									<CSProgressIndicatorItem text="Item 2" status="active" />
									<CSProgressIndicatorItem text="Item 3" status="active" />
								</CSProgressIndicator>
						},
						{
							variationName: ['complete'],
							quickLink: 'complete',
							component:
								<CSProgressIndicator>
									<CSProgressIndicatorItem text="Item 1" status="complete" />
									<CSProgressIndicatorItem text="Item 2" status="complete" />
									<CSProgressIndicatorItem text="Item 3" status="complete" />
								</CSProgressIndicator>
						},
						{
							variationName: ['error'],
							quickLink: 'error',
							component:
								<CSProgressIndicator>
									<CSProgressIndicatorItem text="Item 1" status="error" />
									<CSProgressIndicatorItem text="Item 2" status="error" />
									<CSProgressIndicatorItem text="Item 3" status="error" />
								</CSProgressIndicator>
						},
						{
							variationName: ['loading'],
							quickLink: 'loading',
							component:
								<CSProgressIndicator>
									<CSProgressIndicatorItem text="Item 1" status="loading" />
									<CSProgressIndicatorItem text="Item 2" status="loading" />
									<CSProgressIndicatorItem text="Item 3" status="loading" />
								</CSProgressIndicator>
						}
					]
				},
				{
					propName: 'text',
					customText: '',
					variations: [
						{
							component:
								<CSProgressIndicator>
									<CSProgressIndicatorItem text="Item 1" status="complete" />
									<CSProgressIndicatorItem text="Item 2" status="error" />
									<CSProgressIndicatorItem text="Item 3" status="active" />
									<CSProgressIndicatorItem text="Item 4" status="incomplete" />
								</CSProgressIndicator>
						}
					]
				},
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							component:
								<CSProgressIndicator id="id">
									<CSProgressIndicatorItem text="Item 1" status="complete" />
									<CSProgressIndicatorItem text="Item 2" status="error" />
									<CSProgressIndicatorItem text="Item 3" status="complete" />
									<CSProgressIndicatorItem text="Item 4" status="active" />
									<CSProgressIndicatorItem text="Item 5" status="incomplete" />
									<CSProgressIndicatorItem text="Item 6" status="incomplete" />
								</CSProgressIndicator>
						}
					]
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							component:
								<CSProgressIndicator className="custom-class">
									<CSProgressIndicatorItem text="Item 1" status="complete" />
									<CSProgressIndicatorItem text="Item 2" status="error" />
									<CSProgressIndicatorItem text="Item 3" status="complete" />
									<CSProgressIndicatorItem text="Item 4" status="active" />
									<CSProgressIndicatorItem text="Item 5" status="incomplete" />
									<CSProgressIndicatorItem text="Item 6" status="incomplete" />
								</CSProgressIndicator>
						}
					]
				}
			],

			properties: [
				{
					name: 'children',
					customTypes: [{
						name: 'CSProgressIndicatorChildren',
						types: ['<CSProgressIndicatorItem />', '\'any\'']
					}],
					description: 'This component is designed to support CSProgressIndicatorItem as a child.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the progress indicator.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the progress indicator.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the progress indicator ordered list tag.'
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.3.1',
						'1.3.2',
						'1.4.1',
						'1.4.3',
						'2.1.1',
						'2.1.2',
						'2.4.3',
						'3.3.1',
						'4.1.1',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'HTML `<ol>`',
								'HTML `<li>`',
								'HTML `<button>`',
								'Icon as a child of button with attribute `aria-hidden`'
							],
							properties: [
								'`aria-label`',
								'`title` with status'
							],
							styling: [
								'Color contrast ratio > 4.5',
								'Distinct hover, active and focus state styles'
							],
							keyboardOperability: [
								'OOTB focusable and supports clicks with enter and space keys'
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

	getCSProgressIndicatorItemDoc() {
		const json = {
			name: 'Progress Indicator Item',
			properties: [
				{
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the progress indicator item.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the progress indicator item.'
				}, {
					name: 'status',
					customTypes: [{
						name: 'CSProgressIndicatorItemStatus',
						types: [
							'\'incomplete\'',
							'\'complete\'',
							'\'active\'',
							'\'error\'',
							'\'loading\''
						]
					}],
					default: '\'incomplete\'',
					description: 'Style the progress indicator item based on the status.'
				}, {
					name: 'text',
					required: true,
					types: ['string'],
					description: 'Set the text inside of the progress indicator item.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the progress indicator item list item tag.'
				}
			]
		};

		return json;
	}

	render() {
		const component = this.getDoc();
		const component2 = this.getCSProgressIndicatorItemDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component, component2]} />
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

export default CSProgressIndicatorPreview;
