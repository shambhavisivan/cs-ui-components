import React from 'react';
import { CSPaginationWrapper, CSSelect } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSPaginationPreview extends React.Component {
	getDoc = () => ({
		name: 'Pagination',
		accessible: 'partially',
		usage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		alerts: {
			variant: 'warning',
			text: 'This component is under construction and should not be used.'
		},
		components: [
			{
				name: 'CSPaginationWrapper',
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
				],
				properties: [
					{
						name: 'n/a',
						types: ['n/a'],
						description: 'n/a'
					}
				]
			}
		],
		accessibility: {
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
			requirements: {
				structure: [
					'`<nav>`',
					'`<ul>` - allows screen reader list navigation and counts `<li>` items',
					'`<li>` - allows screen reader list navigation',
					'`<a>` inside `<li>`'
				],
				attributes: [
					'`aria-label="pagination"` on top wrapper to announce pagination component',
					'`aria-current` - true when page button is active (TODO)',
					'`role="navigation"` - implicit by `<nav>`'
				],
				styling: [
					'Focus state styles'
				],
				keyboardOperability: [
					'`<a>` OOTB focusable and supports `Space` click'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSPaginationPreview;
