import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSSkipLink, CSAlert} from '@cloudsense/cs-ui-components';

class CSSkipLinkPreview extends React.Component {

	getDoc() {

		const json = {
			name: 'Skip Link',
			usage: 'Creates link to specific part of the page',
			examples: [
				{
					propName: 'jumpDestination',
					customText: '',
					variations: [
						{
							string: '',
							component:
								<CSSkipLink jumpDestination="href"  href="#Skip Link-href" />
						}
					]
				},
				{
					propName: 'href',
					customText: '',
					variations: [
						{
							string: '',
							component:
								<CSSkipLink jumpDestination="color"  href="#Skip Link-color" />
						}
					]
				},
				{
					propName: 'color',
					customText: '',
					variations: [
						{
							variationName: ['#50c878'],
							quickLink: '#50c878',
							string: '',
							component:
								<CSSkipLink jumpDestination="properties"  href="#properties-table-Skip Link" color="#50c878"/>
						},
						{
							variationName: ['red'],
							quickLink: 'red',
							string: '',
							component:
								<CSSkipLink jumpDestination="properties"  href="#properties-table-Skip Link" color="red"/>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'color',
					description: 'Skip link color override'
				},
				{
					propertyName: 'href',
					description: 'Skip link path'
				},
				{
					propertyName: 'jumpDestination',
					description: 'Skip link destination text'
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
					<CSAlert variant="info" text="Skip Link is accessible only by focusing it via keyboard!" />
					<PreviewProperties name={component.name} examples={component.examples} />
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

export default CSSkipLinkPreview;