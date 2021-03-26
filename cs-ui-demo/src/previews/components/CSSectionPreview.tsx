import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSButton, CSSection } from '@cloudsense/cs-ui-components';

class CSSectionPreview extends React.Component {
	getSectionDoc = () => ({
		name: 'Section',
		usage: 'This is used as a toggle visibility of section content.',
		accessible: 'yes',
		previews: [
			{
				name: 'Section',
				examples: [
					{
						propName: 'title',
						variations: [
							{
								component: <CSSection title="Section Title">
									<ul>
										<li>Item 1</li>
										<li>Item 2</li>
										<li>Item 3</li>
									</ul>
								</CSSection>,
								code: `<CSSection title="Section Title">
									<ul>
										<li>Item 1</li>
										<li>Item 2</li>
										<li>Item 3</li>
									</ul>
								</CSSection>`
							}
						]
					}, {
						propName: 'collapsible',
						variations: [
							{
								primaryVariants: 'collapsible={true}',
								component: <CSSection title="Section Title" collapsible>
									<ul>
										<li>Item 1</li>
										<li>Item 2</li>
										<li>Item 3</li>
									</ul>
								</CSSection>,
								code: `<CSSection title="Section Title" collapsible>
									<ul>
										<li>Item 1</li>
										<li>Item 2</li>
										<li>Item 3</li>
									</ul>
								</CSSection>`
							}
						]
					}, {
						propName: 'defaultClosed',
						alert: {
							variant: 'info',
							text: 'This prop should only be used when the collapsible prop is set to true.'
						},
						variations: [
							{
								primaryVariants: 'defaultClosed={true}',
								secondaryVariants: 'collapsible={true}',
								component: <CSSection
									title="Section Title"
									defaultClosed
									collapsible
								>
									<ul>
										<li>Item 1</li>
										<li>Item 2</li>
										<li>Item 3</li>
									</ul>
								</CSSection>,
								code: `<CSSection
									title="Section Title"
									defaultClosed
									collapsible
								>
									<ul>
										<li>Item 1</li>
										<li>Item 2</li>
										<li>Item 3</li>
									</ul>
								</CSSection>`
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
								component: <CSSection
									title="Section Title"
									id="custom-id"
									className="custom-class"
								>
									<ul>
										<li>Item 1</li>
										<li>Item 2</li>
										<li>Item 3</li>
									</ul>
								</CSSection>,
								code: `<CSSection
									title="Section Title"
									id="custom-id"
									className="custom-class"
								>
									<ul>
										<li>Item 1</li>
										<li>Item 2</li>
										<li>Item 3</li>
									</ul>
								</CSSection>`
							}
						]
					}, {
						propName: 'children',
						description: 'CSSection supports custom content provided as a child.',
						variations: [
							{
								primaryVariants: 'custom component',
								component: <CSSection title="Section Title">
									<CSButton label="Custom Child Button" />
								</CSSection>,
								code: `<CSSection title="Section Title">
									<CSButton label="Custom Child Button" />
								</CSSection>`
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
				description: 'Apply custom CSS classes to the section.'
			}, {
				name: 'collapsible',
				types: ['boolean'],
				default: 'false',
				description: 'Control whether the section should be collapsible.'
			}, {
				name: 'defaultClosed',
				types: ['boolean'],
				default: 'false',
				description: 'Control whether the section is closed by default. It is designed to be used with collapsible prop.'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the section.'
			}, {
				name: 'title',
				required: true,
				types: ['string'],
				description: 'Set a title for the section.'
			}, {
				name: '[key: string]',
				types: ['any'],
				description: 'Spreads the rest of the props to the section tag.'
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
							'`<section>` is top wrapper',
							'Heading is `<h3>` - allows screen reader heading search',
							'Child is `<button>`'
						],
						properties: [
							'`aria-expanded` - reads out whether section is expanded or collapsed, if expandable',
							'`role="region"` - implicit by `<section>`'
						],
						styling: [
							'Focus state styles'
						],
						keyboardOperability: [
							'Child is `<button>` - allows focus and supports clicks with `Enter` and `Space` keys'
						]
					}
				]
			}
		]
	})

	render() {
		const component = this.getSectionDoc();

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

export default CSSectionPreview;
