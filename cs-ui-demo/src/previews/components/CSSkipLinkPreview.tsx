import React from 'react';
import { CSSkipLink } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSSkipLinkPreview extends React.Component {
	getDoc = () => ({
		name: 'Skip Link',
		usage: 'Creates links to specific parts of a page.',
		accessible: 'yes',
		components: [
			{
				name: 'CSSkipLink',
				examples: [
					{
						propName: 'href',
						variations: [
							{
								component: <CSSkipLink jumpDestination="jump destination" href="#CSSkipLink-jumpDestination" />,
								code: '<CSSkipLink jumpDestination="jump destination" href="#CSSkipLink-jumpDestination" />'
							}
						]
					}, {
						propName: 'jumpDestination',
						variations: [
							{
								component: <CSSkipLink jumpDestination="color" href="#CSSkipLink-color" />,
								code: '<CSSkipLink jumpDestination="color" href="#CSSkipLink-color" />'
							}
						]
					}, {
						propName: 'color',
						variations: [
							{
								primaryVariants: 'color="rgb(74, 38, 171)"',
								quickLink: 'rgb',
								component: <CSSkipLink
									jumpDestination="properties"
									href="#component-props"
									color="rgb(74, 38, 171)"
								/>,
								code: `<CSSkipLink
									jumpDestination="properties"
									href="#component-props"
									color="rgb(74, 38, 171)"
								/>`
							}, {
								primaryVariants: 'color="#3cdbc0"',
								quickLink: 'hex',
								component: <CSSkipLink
									jumpDestination="properties"
									href="#component-props"
									color="#3cdbc0"
								/>,
								code: `<CSSkipLink
									jumpDestination="properties"
									href="#component-props"
									color="#3cdbc0"
								/>`
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
								component: <CSSkipLink
									jumpDestination="properties"
									href="#component-props"
									id="custom-id"
									className="custom-br-mint"
								/>,
								code: `<CSSkipLink
									jumpDestination="properties"
									href="#component-props"
									id="custom-id"
									className="custom-br-mint"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'href',
						required: true,
						types: 'string',
						description: 'Set a path for the skip link. (eg. #properties-table)'
					}, {
						name: 'jumpDestination',
						required: true,
						types: 'string',
						description: 'Set the skip link destination.'
					}, {
						name: 'color',
						types: 'string',
						description: 'Set a custom color for the skip link. (eg. pink, #ff0000, rgba(0, 0, 0, 0.75), etc.)'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the skip link.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the skip link.'
					}
				]
			}
		],
		accessibility: {
			criterionList: [
				'1.4.1',
				'2.4.1',
				'3.2.1',
				'4.1.1'
			],
			requirements: {
				structure: [
					'`<a>`'
				],
				attributes: [
					'`role="link"` - implicit with `<a>`'
				],
				styling: [
					'Focus state styles',
					'Hidden for non-keyboard users',
					'Text color contrast ratio > 4.5',
					'Underline to distinct it as a link'
				],
				keyboardOperability: [
					'`<a>` OOTB focusable and supports `Space` key click'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSSkipLinkPreview;
