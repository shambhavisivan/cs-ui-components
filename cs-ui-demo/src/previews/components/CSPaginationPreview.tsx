import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import { CSPaginationWrapper, CSSelect, CSAlert } from '@cloudsense/cs-ui-components';

class CSPaginationPreview extends React.Component {
	getDoc() {
		const json = {
			name: 'Pagination',
			usage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			examples: [
				{
					propName: 'Default View',
					customText: '',
					variations: [
						{
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
					name: 'n/a',
					types: ['n/a'],
					description: 'n/a'
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
					<CSAlert variant="warning" text="This component is under construction and should not be used." />
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

export default CSPaginationPreview;
