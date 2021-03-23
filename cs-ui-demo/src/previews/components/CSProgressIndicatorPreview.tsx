import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';
import PreviewAccessibility from '../PreviewAccessibility';

import { CSProgressIndicator, CSProgressIndicatorItem } from '@cloudsense/cs-ui-components';

class CSProgressIndicatorPreview extends React.Component {

	getProgressIndicatorDoc = () => ({
		name: 'Progress Indicator',
		usage: 'Progress Indicator is a component that communicates to the user the progress of a particular process.',
		accessible: 'yes',
		previews: [
			{
				name: 'Progress Indicator',
				examples: [
					{
						propName: 'id | class',
						variations: [
							{
								primaryVariants: [
									'id="custom-id"',
									'className="custom-class"'
								],
								component: <CSProgressIndicator id="custom-id" className="custom-class">
									<CSProgressIndicatorItem text="Item 1" status="complete" />
									<CSProgressIndicatorItem text="Item 2" status="error" />
									<CSProgressIndicatorItem text="Item 3" status="complete" />
									<CSProgressIndicatorItem text="Item 4" status="active" />
									<CSProgressIndicatorItem text="Item 5" />
									<CSProgressIndicatorItem text="Item 6" />
								</CSProgressIndicator>,
								code: `<CSProgressIndicator id="custom-id" className="custom-class">
									<CSProgressIndicatorItem text="Item 1" status="complete" />
									<CSProgressIndicatorItem text="Item 2" status="error" />
									<CSProgressIndicatorItem text="Item 3" status="complete" />
									<CSProgressIndicatorItem text="Item 4" status="active" />
									<CSProgressIndicatorItem text="Item 5" />
									<CSProgressIndicatorItem text="Item 6" />
								</CSProgressIndicator>`
							}
						]
					}
				]
			}, {
				name: 'Progress Indicator Item',
				examples: [
					{
						propName: 'text',
						variations: [
							{
								component: <CSProgressIndicator>
									<CSProgressIndicatorItem text="Item 1" status="complete" />
									<CSProgressIndicatorItem text="Item 2" status="error" />
									<CSProgressIndicatorItem text="Item 3" status="active" />
									<CSProgressIndicatorItem text="Item 4" />
								</CSProgressIndicator>,
								code: `<CSProgressIndicator>
									<CSProgressIndicatorItem text="Item 1" status="complete" />
									<CSProgressIndicatorItem text="Item 2" status="error" />
									<CSProgressIndicatorItem text="Item 3" status="active" />
									<CSProgressIndicatorItem text="Item 4" />
								</CSProgressIndicator>`
							}
						]
					}, {
						propName: 'status',
						variations: [
							{
								primaryVariants: 'status="incomplete"',
								quickLink: 'incomplete',
								component: <CSProgressIndicator>
									<CSProgressIndicatorItem text="Item 1" />
									<CSProgressIndicatorItem text="Item 2" />
									<CSProgressIndicatorItem text="Item 3"/>
								</CSProgressIndicator>,
								code: `<CSProgressIndicator>
									<CSProgressIndicatorItem text="Item 1" />
									<CSProgressIndicatorItem text="Item 2" />
									<CSProgressIndicatorItem text="Item 3" />
								</CSProgressIndicator>`
							}, {
								primaryVariants: 'status="active"',
								quickLink: 'active',
								component: <CSProgressIndicator>
									<CSProgressIndicatorItem text="Item 1" status="active" />
									<CSProgressIndicatorItem text="Item 2" status="active" />
									<CSProgressIndicatorItem text="Item 3" status="active" />
								</CSProgressIndicator>,
								code: `<CSProgressIndicator>
									<CSProgressIndicatorItem text="Item 1" status="active" />
									<CSProgressIndicatorItem text="Item 2" status="active" />
									<CSProgressIndicatorItem text="Item 3" status="active" />
								</CSProgressIndicator>`
							}, {
								primaryVariants: 'status="complete"',
								quickLink: 'complete',
								component: <CSProgressIndicator>
									<CSProgressIndicatorItem text="Item 1" status="complete" />
									<CSProgressIndicatorItem text="Item 2" status="complete" />
									<CSProgressIndicatorItem text="Item 3" status="complete" />
								</CSProgressIndicator>,
								code: `<CSProgressIndicator>
									<CSProgressIndicatorItem text="Item 1" status="complete" />
									<CSProgressIndicatorItem text="Item 2" status="complete" />
									<CSProgressIndicatorItem text="Item 3" status="complete" />
								</CSProgressIndicator>`
							}, {
								primaryVariants: 'status="error"',
								quickLink: 'error',
								component: <CSProgressIndicator>
									<CSProgressIndicatorItem text="Item 1" status="error" />
									<CSProgressIndicatorItem text="Item 2" status="error" />
									<CSProgressIndicatorItem text="Item 3" status="error" />
								</CSProgressIndicator>,
								code: `<CSProgressIndicator>
									<CSProgressIndicatorItem text="Item 1" status="error" />
									<CSProgressIndicatorItem text="Item 2" status="error" />
									<CSProgressIndicatorItem text="Item 3" status="error" />
								</CSProgressIndicator>`
							}, {
								primaryVariants: 'status="loading"',
								quickLink: 'loading',
								component: <CSProgressIndicator>
									<CSProgressIndicatorItem text="Item 1" status="loading" />
									<CSProgressIndicatorItem text="Item 2" status="loading" />
									<CSProgressIndicatorItem text="Item 3" status="loading" />
								</CSProgressIndicator>,
								code: `<CSProgressIndicator>
									<CSProgressIndicatorItem text="Item 1" status="loading" />
									<CSProgressIndicatorItem text="Item 2" status="loading" />
									<CSProgressIndicatorItem text="Item 3" status="loading" />
								</CSProgressIndicator>`
							}
						]
					}
				]
			}
		],
		properties: [
			{
				name: 'children',
				customTypes: [{
					name: 'CSProgressIndicatorChildren',
					types: ['<CSProgressIndicatorItem />', 'any']
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
							'`<ol>`',
							'`<li>` - allows screen readers to detect number of items in the list',
							'`<button>` - focusable and follows SLDS',
							'Icon as a child of button with attribute `aria-hidden`'
						],
						properties: [
							'`aria-label`',
							'`title` - shows status on hover, as well as reads out to screen reader along aria-label.',
							'`aria-current` - true when the step is in active status',
							'`aria-roledescription` - role set to custom "step" to describe better rather than implicit role button'
						],
						styling: [
							'Color contrast ratio > 4.5',
							'Distinct hover and focus state styles'
						],
						keyboardOperability: [
							'`<button>` OOTB focusable and supports clicks with `enter` and `space` keys'
						]
					}
				]
			}
		]
	})

	getProgressIndicatorItemDoc = () => ({
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
	})

	render() {
		const component = this.getProgressIndicatorDoc();
		const component2 = this.getProgressIndicatorItemDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties {...component} />
					<PreviewTable components={[component, component2]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSProgressIndicatorPreview;
