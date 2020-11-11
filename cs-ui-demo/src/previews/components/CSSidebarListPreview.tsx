import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSSidebarList, CSSidebarListItem, CSAlert} from '@cloudsense/cs-ui-components';

class CSSidebarListPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Sidebar List',
			usage: 'Sidebar list provides a unlimited list of items with the option to toggle between open and closed',
			examples: [
				{
					propName: 'className',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							string: '',
							component:
								<CSSidebarList className="custom-class">
									<CSSidebarListItem className="custom-class" text="Product A"/>
									<CSSidebarListItem className="custom-class" text="Product B"/>
									<CSSidebarListItem className="custom-class" text="Product C"/>
								</CSSidebarList>
						}
					]
				},
				{
					propName: 'closed',
					variations: [
						{
							string: '',
							component:
								<CSSidebarList closed>
									<CSSidebarListItem text="Product A"/>
									<CSSidebarListItem text="Product B"/>
									<CSSidebarListItem text="Product C"/>
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
							string: '',
							component:
								<CSSidebarList height="100vh">
									<CSSidebarListItem text="Product A"/>
									<CSSidebarListItem text="Product B"/>
									<CSSidebarListItem text="Product C"/>
								</CSSidebarList>
						},
						{
							variationName: ['50%'],
							quickLink: '50%',
							string: '',
							component:
								<CSSidebarList height="50%">
									<CSSidebarListItem text="Product A"/>
									<CSSidebarListItem text="Product B"/>
									<CSSidebarListItem text="Product C"/>
								</CSSidebarList>
						},
						{
							variationName: ['20rem'],
							quickLink: '20rem',
							string: '',
							component:
								<CSSidebarList height="20rem">
									<CSSidebarListItem text="Product A"/>
									<CSSidebarListItem text="Product B"/>
									<CSSidebarListItem text="Product C"/>
								</CSSidebarList>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							string: '',
							component:
								<CSSidebarList id="products">
									<CSSidebarListItem id="products" text="Product A"/>
									<CSSidebarListItem text="Product B"/>
									<CSSidebarListItem text="Product C"/>
								</CSSidebarList>
						}
					]
				},
				{
					propName: 'onClick',
					variations: [
						{
							string: '',
							component:
								<CSSidebarList>
									<CSSidebarListItem text="Product A"/>
									<CSSidebarListItem text="Product B" onClick={() => alert('clicked!')}/>
									<CSSidebarListItem text="Product C"/>
								</CSSidebarList>
						}
					]
				},
				{
					propName: 'static',
					variations: [
						{
							string: '',
							component:
								<CSSidebarList static>
									<CSSidebarListItem text="Product A"/>
									<CSSidebarListItem text="Product B"/>
									<CSSidebarListItem text="Product C"/>
								</CSSidebarList>
						}
					]
				},
				{
					propName: 'text',
					variations: [
						{
							string: '',
							component:
								<CSSidebarList>
									<CSSidebarListItem text="Text A"/>
									<CSSidebarListItem text="Text B"/>
									<CSSidebarListItem text="Text C"/>
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
							string: '',
							component:
								<CSSidebarList width="20rem">
									<CSSidebarListItem text="Product A"/>
									<CSSidebarListItem text="Product B"/>
									<CSSidebarListItem text="Product C"/>
								</CSSidebarList>
						},
						{
							variationName: ['30rem'],
							quickLink: '30rem',
							string: '',
							component:
								<CSSidebarList width="30rem">
									<CSSidebarListItem text="Product A"/>
									<CSSidebarListItem text="Product B"/>
									<CSSidebarListItem text="Product C"/>
								</CSSidebarList>
						},
						{
							variationName: ['100%'],
							quickLink: '100%',
							string: '',
							component:
								<CSSidebarList width="100%">
									<CSSidebarListItem text="Product A"/>
									<CSSidebarListItem text="Product B"/>
									<CSSidebarListItem text="Product C"/>
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
					<CSAlert variant="warning" text="This component is under construction." />
					<PreviewProperties name={component.name} examples={component.examples}/>
					<PreviewTable components={[component]} />
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
