import React from 'react';
import { CSPath, CSPathItem } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSPathPreview extends React.Component {
	handleClick = () => alert('A Path Item has been clicked.');

	getDoc = () => ({
		name: 'Path',
		usage: 'A process component communicates to the user the progress of a particular process.',
		alerts: {
			variant: 'warning',
			text: 'This component is under construction and should not be used.'
		},
		accessible: 'yes',
		components: [
			{
				name: 'CSPath',
				examples: [
					{
						propName: 'id | class',
						variations: [
							{
								primaryVariants: [
									'id="custom-id"',
									'className="custom-class"'
								],
								component: <CSPath id="custom-id" className="custom-br-purple">
									<CSPathItem
										name="Path Item 1"
										id="custom-item-id"
										className="custom-bg-mint"
									/>
									<CSPathItem name="Path Item 2" />
									<CSPathItem name="Path Item 3" />
								</CSPath>,
								code: `<CSPath id="custom-id" className="custom-br-purple">
									<CSPathItem
										name="Path Item 1"
										id="custom-item-id"
										className="custom-bg-mint"
									/>
									<CSPathItem name="Path Item 2" />
									<CSPathItem name="Path Item 3" />
								</CSPath>`
							}
						]
					}
				],
				properties: [
					{
						name: 'children',
						customTypes: [{
							name: 'CSPathChildren',
							types: ['<CSPathItem />', 'any']
						}],
						description: 'This component is designed to support CSPathItem as a child.'
					}, {
						name: 'className',
						types: ['string'],
						description: 'Apply custom CSS classes to the path.'
					}, {
						name: 'id',
						types: ['string'],
						description: 'Set the ID for the path.'
					}, {
						name: '[key: string]',
						types: ['any'],
						description: 'Spreads the rest of the props to the path nav tag.'
					}
				]
			}, {
				name: 'CSPathItem',
				examples: [
					{
						propName: 'name',
						variations: [
							{
								component: <CSPath>
									<CSPathItem name="Path Item 1" />
									<CSPathItem name="Path Item 2" />
									<CSPathItem name="Path Item 3" />
								</CSPath>,
								code: `<CSPath>
									<CSPathItem name="Path Item 1" />
									<CSPathItem name="Path Item 2" />
									<CSPathItem name="Path Item 3" />
								</CSPath>`
							}
						]
					}, {
						propName: 'active',
						variations: [
							{
								primaryVariants: 'active={true}',
								component: <CSPath>
									<CSPathItem name="Path Item 1" active />
									<CSPathItem name="Path Item 2" />
									<CSPathItem name="Path Item 3" />
								</CSPath>,
								code: `<CSPath>
									<CSPathItem name="Path Item 1" active />
									<CSPathItem name="Path Item 2" />
									<CSPathItem name="Path Item 3" />
								</CSPath>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSPath>
									<CSPathItem name="Path Item 1" disabled />
									<CSPathItem name="Path Item 2" />
									<CSPathItem name="Path Item 3" />
								</CSPath>,
								code: `<CSPath>
									<CSPathItem name="Path Item 1" disabled />
									<CSPathItem name="Path Item 2" />
									<CSPathItem name="Path Item 3" />
								</CSPath>`
							}
						]
					}, {
						propName: 'onClick',
						variations: [
							{
								component: <CSPath>
									<CSPathItem name="Path Item 1" onClick={this.handleClick} />
									<CSPathItem name="Path Item 2" onClick={this.handleClick} />
									<CSPathItem name="Path Item 3" onClick={this.handleClick} />
								</CSPath>,
								code: `<CSPath>
									<CSPathItem name="Path Item 1" onClick={this.handleClick} />
									<CSPathItem name="Path Item 2" onClick={this.handleClick} />
									<CSPathItem name="Path Item 3" onClick={this.handleClick} />
								</CSPath>`
							}
						]
					}, {
						propName: 'status',
						variations: [
							{
								primaryVariants: 'status="success"',
								quickLink: 'success',
								component: <CSPath>
									<CSPathItem name="Path Item 1" status="success" />
									<CSPathItem name="Path Item 2" />
									<CSPathItem name="Path Item 3" />
								</CSPath>,
								code: `<CSPath>
									<CSPathItem name="Path Item 1" status="success" />
									<CSPathItem name="Path Item 2" />
									<CSPathItem name="Path Item 3" />
								</CSPath>`
							}, {
								primaryVariants: 'status="error"',
								quickLink: 'error',
								component: <CSPath>
									<CSPathItem name="Path Item 1" status="error" />
									<CSPathItem name="Path Item 2" />
									<CSPathItem name="Path Item 3" />
								</CSPath>,
								code: `<CSPath>
									<CSPathItem name="Path Item 1" status="error" />
									<CSPathItem name="Path Item 2" />
									<CSPathItem name="Path Item 3" />
								</CSPath>`
							}, {
								primaryVariants: 'status="warning"',
								quickLink: 'warning',
								component: <CSPath>
									<CSPathItem name="Path Item 1" status="warning" />
									<CSPathItem name="Path Item 2" />
									<CSPathItem name="Path Item 3" />
								</CSPath>,
								code: `<CSPath>
									<CSPathItem name="Path Item 1" status="warning" />
									<CSPathItem name="Path Item 2" />
									<CSPathItem name="Path Item 3" />
								</CSPath>`
							}
						]
					}
				],
				properties: [
					{
						name: 'active',
						types: ['boolean'],
						default: 'false',
						description: 'Control the active state.'
					}, {
						name: 'className',
						types: ['string'],
						description: 'Apply custom CSS classes to the path item.'
					}, {
						name: 'disabled',
						types: ['boolean'],
						default: 'false',
						description: 'Disable the path item.'
					}, {
						name: 'id',
						types: ['string'],
						description: 'Set the ID for the path item.'
					}, {
						name: 'onClick',
						types: ['(event) => any'],
						description: 'Handler method for the click event.'
					}, {
						name: 'status',
						customTypes: [{
							name: 'CSPathItemStatus',
							types: ['\'success\'', '\'error\'']
						}],
						description: 'Set the color and the icon variant depending on status.'
					}, {
						name: 'name',
						required: true,
						types: ['string'],
						description: 'Set the path item name.'
					}, {
						name: '[key: string]',
						types: ['any'],
						description: 'Spreads the rest of the props to the path item list item tag.'
					}
				]
			}
		],
		accessibility: {
			criterionList: [
				'1.1.1',
				'2.1.1',
				'2.1.2',
				'2.4.7',
				'3.2.1',
				'3.3.1',
				'4.1.2'
			],
			requirements: {
				structure: [
					'`<ol>`',
					'`<li>`',
					'`<button>`',
					'Icon as a child element with `aria-hidden`'
				],
				attributes: [
					'`aria-current` - true when item is active',
					'`aria-invalid` - true when item in error'
				],
				styling: [
					'Color contrast ratio > 4.5',
					'Distinct hover, active and focus state styles'
				],
				keyboardOperability: [
					'`<button>` OOTB focusable and supports `Enter` and `Space` click'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSPathPreview;
