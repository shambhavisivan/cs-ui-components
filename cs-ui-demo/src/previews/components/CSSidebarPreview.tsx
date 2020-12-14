import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSSidebar, CSListItem, CSAlert } from '@cloudsense/cs-ui-components';

class CSSidebarPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Sidebar',
			usage: 'Sidebar provides a unlimited list of items with the option to toggle between open and closed',
			accessible: 'yes',
			examples: [
				{
					propName: 'className',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							component:
								<CSSidebar className="custom-class">
									<CSListItem className="custom-class" text="Product A" />
									<CSListItem className="custom-class" text="Product B" />
									<CSListItem className="custom-class" text="Product C" />
								</CSSidebar>
						}
					]
				},
				{
					propName: 'closed',
					variations: [
						{
							component:
								<CSSidebar closed>
									<CSListItem text="Product A" />
									<CSListItem text="Product B" />
									<CSListItem text="Product C" />
								</CSSidebar>
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
								<CSSidebar height="100vh">
									<CSListItem text="Product A" />
									<CSListItem text="Product B" />
									<CSListItem text="Product C" />
								</CSSidebar>
						},
						{
							variationName: ['50%'],
							quickLink: '50%',
							component:
								<CSSidebar height="50%">
									<CSListItem text="Product A" />
									<CSListItem text="Product B" />
									<CSListItem text="Product C" />
								</CSSidebar>
						},
						{
							variationName: ['20rem'],
							quickLink: '20rem',
							component:
								<CSSidebar height="20rem">
									<CSListItem text="Product A" />
									<CSListItem text="Product B" />
									<CSListItem text="Product C" />
								</CSSidebar>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							component:
								<CSSidebar id="products">
									<CSListItem id="products" text="Product A" />
									<CSListItem text="Product B" />
									<CSListItem text="Product C" />
								</CSSidebar>
						}
					]
				},
				{
					propName: 'onClick',
					variations: [
						{
							component:
								<CSSidebar>
									<CSListItem text="Product A" />
									<CSListItem text="Product B" onClick={() => alert('clicked!')} />
									<CSListItem text="Product C" />
								</CSSidebar>
						}
					]
				},
				{
					propName: 'fixed',
					variations: [
						{
							component:
								<CSSidebar static>
									<CSListItem text="Product A" />
									<CSListItem text="Product B" />
									<CSListItem text="Product C" />
								</CSSidebar>
						}
					]
				},
				{
					propName: 'text',
					variations: [
						{
							component:
								<CSSidebar>
									<CSListItem text="Text A" />
									<CSListItem text="Text B" />
									<CSListItem text="Text C" />
								</CSSidebar>
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
								<CSSidebar width="20rem">
									<CSListItem text="Product A" />
									<CSListItem text="Product B" />
									<CSListItem text="Product C" />
								</CSSidebar>
						},
						{
							variationName: ['30rem'],
							quickLink: '30rem',
							component:
								<CSSidebar width="30rem">
									<CSListItem text="Product A" />
									<CSListItem text="Product B" />
									<CSListItem text="Product C" />
								</CSSidebar>
						},
						{
							variationName: ['100%'],
							quickLink: '100%',
							component:
								<CSSidebar width="100%">
									<CSListItem text="Product A" />
									<CSListItem text="Product B" />
									<CSListItem text="Product C" />
								</CSSidebar>
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
					propertyName: 'fixed',
					description: 'Show sidebar by default without option to close'
				},
				{
					propertyName: 'height',
					description: 'Sidebar height'
				},
				{
					propertyName: 'onClick',
					description: 'Logic for onClick event'
				},
				{
					propertyName: 'text',
					description: 'Sidebar item text'
				},
				{
					propertyName: 'width',
					description: 'Sidebar width'
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

	render() {
		const component = this.getDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<CSAlert variant="warning" text="This component is under construction." />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component]} />
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

export default CSSidebarPreview;
