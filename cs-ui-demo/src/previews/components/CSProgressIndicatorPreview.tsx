import React from 'react';
import { CSProgressIndicator, CSProgressIndicatorItem } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSProgressIndicatorPreview extends React.Component {
	getDoc = () => ({
		name: 'Progress Indicator',
		usage: 'Progress Indicator is a component that communicates to the user the progress of a particular process.',
		accessible: 'yes',
		components: [
			{
				name: 'CSProgressIndicator',
				examples: [
					{
						propName: 'id | class',
						variations: [
							{
								primaryVariants: [
									'id="custom-id"',
									'className="custom-class"'
								],
								component: <CSProgressIndicator id="custom-id" className="custom-br-purple">
									<CSProgressIndicatorItem
										text="Item 1"
										status="complete"
										id="custom-item-id"
										className="custom-bg-mint"
									/>
									<CSProgressIndicatorItem text="Item 2" status="error" />
									<CSProgressIndicatorItem text="Item 3" status="complete" />
									<CSProgressIndicatorItem text="Item 4" status="active" />
									<CSProgressIndicatorItem text="Item 5" />
									<CSProgressIndicatorItem text="Item 6" />
								</CSProgressIndicator>,
								code: `<CSProgressIndicator id="custom-id" className="custom-br-purple">
									<CSProgressIndicatorItem
										text="Item 1"
										status="complete"
										id="custom-item-id"
										className="custom-bg-mint"
									/>
									<CSProgressIndicatorItem text="Item 2" status="error" />
									<CSProgressIndicatorItem text="Item 3" status="complete" />
									<CSProgressIndicatorItem text="Item 4" status="active" />
									<CSProgressIndicatorItem text="Item 5" />
									<CSProgressIndicatorItem text="Item 6" />
								</CSProgressIndicator>`
							}
						]
					}
				],
				properties: [
					{
						name: 'id',
						types: 'string',
						description: 'Set the ID for the progress indicator.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the progress indicator.'
					}, {
						name: 'children',
						customTypes: {
							name: 'CSProgressIndicatorChildren',
							types: ['<CSProgressIndicatorItem />', 'any']
						},
						description: 'This component is designed to support CSProgressIndicatorItem as a child.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the progress indicator ordered list tag.'
					}
				]
			}, {
				name: 'CSProgressIndicatorItem',
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
				],
				properties: [
					{
						name: 'text',
						required: true,
						types: 'string',
						description: 'Set the text inside of the progress indicator item.'
					}, {
						name: 'status',
						customTypes: {
							name: 'CSProgressIndicatorItemStatus',
							types: [
								`'incomplete'`,
								`'complete'`,
								`'active'`,
								`'error'`,
								`'loading'`
							]
						},
						default: `'incomplete'`,
						description: 'Style the progress indicator item based on the status.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the progress indicator item.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the progress indicator item.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the progress indicator item list item tag.'
					}
				]
			}
		],
		accessibility: {
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
			requirements: {
				structure: [
					'`<ol>`',
					'`<li>` - allows screen readers to detect number of items in the list',
					'`<button>` - focusable and follows SLDS',
					'Icon as a child of button with attribute `aria-hidden`'
				],
				attributes: [
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
					'`<button>` OOTB focusable and supports clicks with `Enter` and `Space` keys'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSProgressIndicatorPreview;
