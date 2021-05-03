import React from 'react';
import { CSButton, CSSection } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSSectionPreview extends React.Component {
	getDoc = () => ({
		name: 'Section',
		usage: 'This is used as a toggle visibility of section content.',
		accessible: 'yes',
		components: [
			{
				name: 'CSSection',
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
				]
			}
		],
		accessibility: {
			criterionList: [
				'1.4.4',
				'2.1.1',
				'2.1.2',
				'4.1.2'
			],
			requirements: {
				structure: [
					'`<section>` is top wrapper',
					'Heading is `<h3>` - allows screen reader heading search',
					'Child is `<button>`'
				],
				attributes: [
					'`aria-expanded` - true if section is expanded, when expandable',
					'`role="region"` - implicit by `<section>`',
					'`aria-roledescription` - role set to custom "section" to describe better rather than implicit role region'
				],
				styling: [
					'Focus state styles'
				],
				keyboardOperability: [
					'`<button>` OOTB focusable and supports clicks with `Enter` and `Space` keys'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSSectionPreview;
