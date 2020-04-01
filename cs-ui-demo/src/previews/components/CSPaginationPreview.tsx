import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSPaginationWrapper, CSSelect} from '@cloudsense/cs-ui-components';

class CSPaginationPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Pagination',
			usage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			examples: [
				{
					propName: '',
					customText: '',
					variations: [
						{
							string: '',
							component:
							<CSPaginationWrapper>
								<CSSelect label="hidden label" labelHidden>
									<option>10</option>
									<option>20</option>
									<option>50</option>
								</CSSelect>
							</CSPaginationWrapper>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'n/a',
					description: 'n/a',
					options: ['test']
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
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable name={component.name} properties={component.properties} />
				</div>
				<div className="prop-sidebar">
					<h3>Quick Links</h3>
					<PreviewLinks component={component} />
				</div>
			</>
		);
	}
}

export default CSPaginationPreview;
