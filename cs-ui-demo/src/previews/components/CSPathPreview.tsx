import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';
import PreviewAccessibility from '../PreviewAccessibility';

import { CSPath, CSPathItem, CSAlert } from '@cloudsense/cs-ui-components';

class CSPathPreview extends React.Component {
	handleClick = () => alert('A Path Item has been clicked.');

	getPathDoc = () => ({
		name: 'Path',
		usage: 'A process component communicates to the user the progress of a particular process.',
		accessible: 'yes',
		previews: [
			{
				name: 'Path',
				examples: [
					{
						propName: 'id | class',
						variations: [
							{
								primaryVariants: [
									'id="custom-id"',
									'className="custom-class"'
								],
								component: <CSPath id="custom-id" className="custom-class">
									<CSPathItem title="Path Item 1" />
									<CSPathItem title="Path Item 2" />
									<CSPathItem title="Path Item 3" />
								</CSPath>,
								code: `<CSPath id="custom-id" className="custom-class">
									<CSPathItem title="Path Item 1" />
									<CSPathItem title="Path Item 2" />
									<CSPathItem title="Path Item 3" />
								</CSPath>`
							}
						]
					}
				]
			}, {
				name: 'Path Item',
				examples: [
					{
						propName: 'title',
						variations: [
							{
								component: <CSPath>
									<CSPathItem title="Path Item 1" />
									<CSPathItem title="Path Item 2" />
									<CSPathItem title="Path Item 3" />
								</CSPath>,
								code: `<CSPath>
									<CSPathItem title="Path Item 1" />
									<CSPathItem title="Path Item 2" />
									<CSPathItem title="Path Item 3" />
								</CSPath>`
							}
						]
					}, {
						propName: 'active',
						variations: [
							{
								primaryVariants: 'active={true}',
								component: <CSPath>
									<CSPathItem title="Path Item 1" active />
									<CSPathItem title="Path Item 2" />
									<CSPathItem title="Path Item 3" />
								</CSPath>,
								code: `<CSPath>
									<CSPathItem title="Path Item 1" active />
									<CSPathItem title="Path Item 2" />
									<CSPathItem title="Path Item 3" />
								</CSPath>`
							}
						]
					}, {
						propName: 'disabled',
						variations: [
							{
								primaryVariants: 'disabled={true}',
								component: <CSPath>
									<CSPathItem title="Path Item 1" disabled />
									<CSPathItem title="Path Item 2" />
									<CSPathItem title="Path Item 3" />
								</CSPath>,
								code: `<CSPath>
									<CSPathItem title="Path Item 1" disabled />
									<CSPathItem title="Path Item 2" />
									<CSPathItem title="Path Item 3" />
								</CSPath>`
							}
						]
					}, {
						propName: 'onClick',
						variations: [
							{
								component: <CSPath>
									<CSPathItem title="Path Item 1" onClick={this.handleClick} />
									<CSPathItem title="Path Item 2" onClick={this.handleClick} />
									<CSPathItem title="Path Item 3" onClick={this.handleClick} />
								</CSPath>,
								code: `<CSPath>
									<CSPathItem title="Path Item 1" onClick={this.handleClick} />
									<CSPathItem title="Path Item 2" onClick={this.handleClick} />
									<CSPathItem title="Path Item 3" onClick={this.handleClick} />
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
									<CSPathItem title="Path Item 1" status="success" />
									<CSPathItem title="Path Item 2" />
									<CSPathItem title="Path Item 3" />
								</CSPath>,
								code: `<CSPath>
									<CSPathItem title="Path Item 1" status="success" />
									<CSPathItem title="Path Item 2" />
									<CSPathItem title="Path Item 3" />
								</CSPath>`
							}, {
								primaryVariants: 'status="error"',
								quickLink: 'error',
								component: <CSPath>
									<CSPathItem title="Path Item 1" status="error" />
									<CSPathItem title="Path Item 2" />
									<CSPathItem title="Path Item 3" />
								</CSPath>,
								code: `<CSPath>
									<CSPathItem title="Path Item 1" status="error" />
									<CSPathItem title="Path Item 2" />
									<CSPathItem title="Path Item 3" />
								</CSPath>`
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
					name: 'CSPathChildren',
					types: ['<CSPathItem />', '\'any\'']
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
		],
		accessibility: [
			{
				criterionList: [
					'1.1.1',
					'2.1.1',
					'2.1.2',
					'2.4.7',
					'3.2.1',
					'3.3.1',
					'4.1.2'
				],
				requirements: [
					{
						structure: [
							'`<ol>`',
							'`<li>`',
							'`<button>`',
							'Icon as a child element with `aria-hidden`'
						],
						properties: [
							'`aria-current` - true when item is active',
							'`aria-invalid` - true when item in error'
						],
						styling: [
							'Color contrast ratio > 4.5',
							'Distinct hover, active and focus state styles'
						],
						keyboardOperability: [
							'`button` OOTB focusable and supports `button` and `space` click'
						]
					}
				]
			}
		]
	})

	getPathItemDoc = () => ({
		name: 'Path Item',
		properties: [
			{
				name: 'active',
				types: ['boolean'],
				default: 'false',
				description: 'Control the active state.'
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
				description: 'Set the colour and the icon variant depending on status.'
			}, {
				name: 'title',
				required: true,
				types: ['string'],
				description: 'Set the path item title.'
			}, {
				name: '[key: string]',
				types: ['any'],
				description: 'Spreads the rest of the props to the path item list item tag.'
			}
		]
	})

	render() {
		const component = this.getPathDoc();
		const component2 = this.getPathItemDoc();

		return (
			<>
				<div className="preview-section-wrapper">
				<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<CSAlert
						variant="warning"
						text="This component is under construction and should not be used."
						styleFormat="scoped"
					/>
					<PreviewProperties {...component} />
					<PreviewTable components={[component, component2]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSPathPreview;
