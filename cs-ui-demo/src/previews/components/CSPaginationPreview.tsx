import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import { CSPaginationWrapper, CSSelect, CSAlert } from '@cloudsense/cs-ui-components';

class CSPaginationPreview extends React.Component {
	getPaginationDoc = () => ({
		name: 'Pagination',
		usage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		previews: [
			{
				name: 'Pagination',
				examples: [
					{
						propName: 'Default View',
						variations: [
							{
								component: <CSPaginationWrapper>
									<CSSelect label="hidden label" labelHidden>
										<option>10</option>
										<option>20</option>
										<option>50</option>
									</CSSelect>
								</CSPaginationWrapper>,
								code: `<CSPaginationWrapper>
									<CSSelect label="hidden label" labelHidden>
										<option>10</option>
										<option>20</option>
										<option>50</option>
									</CSSelect>
								</CSPaginationWrapper>`
							}
						]
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
	})

	render() {
		const component = this.getPaginationDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} />
					<CSAlert
						variant="warning"
						text="This component is under construction and should not be used."
						styleFormat="scoped"
					/>
					<PreviewProperties {...component} />
					<PreviewTable components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSPaginationPreview;
