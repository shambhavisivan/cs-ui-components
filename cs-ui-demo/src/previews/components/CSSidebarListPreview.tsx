import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSSidebarList, CSSidebarListItem, CSAlert } from '@cloudsense/cs-ui-components';

class CSSidebarListPreview extends React.Component {
	getSidebarListDoc() {

		const json = {
			name: 'Sidebar List',
			usage: 'Sidebar list provides a unlimited list of items with the option to toggle between open and closed',
			accessible: 'yes',
			examples: [
				{
					propName: 'className',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							component:
								<CSSidebarList className="custom-class">
									<CSSidebarListItem className="custom-class" text="Product A" />
									<CSSidebarListItem className="custom-class" text="Product B" />
									<CSSidebarListItem className="custom-class" text="Product C" />
								</CSSidebarList>
						}
					]
				},
				{
					propName: 'closed',
					variations: [
						{
							component:
								<CSSidebarList closed>
									<CSSidebarListItem text="Product A" />
									<CSSidebarListItem text="Product B" />
									<CSSidebarListItem text="Product C" />
								</CSSidebarList>
						}
					]
				},
				{
					propName: 'height',
					variations: [
						{
							variationName: ['100vh'],
							quickLink: '100vh',
							component:
								<CSSidebarList height="100vh">
									<CSSidebarListItem text="Product A" />
									<CSSidebarListItem text="Product B" />
									<CSSidebarListItem text="Product C" />
								</CSSidebarList>
						},
						{
							variationName: ['50%'],
							quickLink: '50%',
							component:
								<CSSidebarList height="50%">
									<CSSidebarListItem text="Product A" />
									<CSSidebarListItem text="Product B" />
									<CSSidebarListItem text="Product C" />
								</CSSidebarList>
						},
						{
							variationName: ['20rem'],
							quickLink: '20rem',
							component:
								<CSSidebarList height="20rem">
									<CSSidebarListItem text="Product A" />
									<CSSidebarListItem text="Product B" />
									<CSSidebarListItem text="Product C" />
								</CSSidebarList>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSSidebarList id="products">
									<CSSidebarListItem id="products" text="Product A" />
									<CSSidebarListItem text="Product B" />
									<CSSidebarListItem text="Product C" />
								</CSSidebarList>
						}
					]
				},
				{
					propName: 'onClick',
					variations: [
						{
							component:
								<CSSidebarList>
									<CSSidebarListItem text="Product A" />
									<CSSidebarListItem text="Product B" onClick={() => alert('clicked!')} />
									<CSSidebarListItem text="Product C" />
								</CSSidebarList>
						}
					]
				},
				{
					propName: 'static',
					variations: [
						{
							component:
								<CSSidebarList static>
									<CSSidebarListItem text="Product A" />
									<CSSidebarListItem text="Product B" />
									<CSSidebarListItem text="Product C" />
								</CSSidebarList>
						}
					]
				},
				{
					propName: 'text',
					variations: [
						{
							component:
								<CSSidebarList>
									<CSSidebarListItem text="Text A" />
									<CSSidebarListItem text="Text B" />
									<CSSidebarListItem text="Text C" />
								</CSSidebarList>
						}
					]
				},
				{
					propName: 'width',
					variations: [
						{
							variationName: ['20rem'],
							quickLink: '20rem',
							component:
								<CSSidebarList width="20rem">
									<CSSidebarListItem text="Product A" />
									<CSSidebarListItem text="Product B" />
									<CSSidebarListItem text="Product C" />
								</CSSidebarList>
						},
						{
							variationName: ['30rem'],
							quickLink: '30rem',
							component:
								<CSSidebarList width="30rem">
									<CSSidebarListItem text="Product A" />
									<CSSidebarListItem text="Product B" />
									<CSSidebarListItem text="Product C" />
								</CSSidebarList>
						},
						{
							variationName: ['100%'],
							quickLink: '100%',
							component:
								<CSSidebarList width="100%">
									<CSSidebarListItem text="Product A" />
									<CSSidebarListItem text="Product B" />
									<CSSidebarListItem text="Product C" />
								</CSSidebarList>
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
					propertyName: 'closed',
					description: 'Enable sidebar to be closed by default'
				},
				{
					propertyName: 'height',
					description: 'Sidebar list height'
				},
				{
					propertyName: 'onClick',
					description: 'Logic for onClick event'
				},
				{
					propertyName: 'static',
					description: 'Show sidebar by default without option to close'
				},
				{
					propertyName: 'text',
					description: 'Sidebar item text'
				},
				{
					propertyName: 'width',
					description: 'Sidebar list width'
				}
			],
			accessibility: [
				{
					criterionList: [
						'2.1.1',
						'2.1.2',
						'3.2.1',
						'3.3.1',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'Sidebar is HTML <ul> element - allows screen reader list navigation and counts <li> items',
								'Buttons wrapped in HTML <li> - allows screen reader list navigation while preserving keyboard operability',
								'<button> used'
							],
							properties: [
								'aria-expanded',
								'aria-selected',
								'<ul> wrapper role="menu"',
								'button role="menuitemradio"'
							],
							styling: [
								'Distinct hover, active and focus state styles'
							],
							keyboardOperability: [
								'Proper focus management and keyboard operability ensured by structure and <button>'
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

	getSidebarListItemDoc() {
		const json = {
			name: 'Sidebar List Item',
			properties: [
				{
					propertyName: 'active',
					description: 'Active state'
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'id',
					description: 'Sidebar list item id value'
				},
				{
					propertyName: 'onClick',
					description: 'Logic for onClick event'
				},
				{
					propertyName: 'text',
					description: 'Text content for main toast message'
				},
				{
					propertyName: 'toggleActive',
					description: 'Toggle active state',
					helperPropInComponents: [
						'SidebarList'
					]
				}
			]
		};

		return json;
	}

	render() {
		const component = this.getSidebarListDoc();
		const component2 = this.getSidebarListItemDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<CSAlert variant="warning" text="This component is under construction." />
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

export default CSSidebarListPreview;
