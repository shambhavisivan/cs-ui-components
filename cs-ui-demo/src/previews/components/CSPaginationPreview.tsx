import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';
import PreviewAccessibility from '../PreviewAccessibility';

import { CSPaginationWrapper, CSSelect, CSAlert } from '@cloudsense/cs-ui-components';

class CSPaginationPreview extends React.Component {
	getPaginationDoc = () => ({
		name: 'Pagination',
		accessible: 'partially',
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
		],
		accessibility: [
			{
				criterionList: [
					'1.3.1',
					'1.4.1',
					'2.1.1',
					'2.1.2',
					'2.4.7',
					'2.5.3',
					'3.2.1',
					'3.2.2',
					'4.1.2'
				],
				requirements: [
					{
						structure: [
							'`<nav>`',
							'`ul` - allows screen reader list navigation and counts `<li>` items',
							'`li` - allows screen reader list navigation',
							'`a` inside `li`'
						],
						properties: [
							'`aria-label="pagination"` on top wrapper to announce pagination component',
							'`aria-current` - true when page button is active (TODO)',
							'`role="navigation"` - implicit by `nav`'
						],
						styling: [
							'Focus state styles'
						],
						keyboardOperability: [
							'`a` OOTB focusable and supports `space` click'
						]
					}
				]
			}
		]
	})

	render() {
		const component = this.getPaginationDoc();

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
					<PreviewTable components={[component]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSPaginationPreview;
