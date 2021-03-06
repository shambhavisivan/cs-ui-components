import React from 'react';
import { CSIcon } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSIconPreview extends React.Component {
	getDoc = () => ({
		name: 'Icon',
		usage: 'Support for both Lightning and CloudSense Icons.',
		accessible: 'yes',
		components: [
			{
				name: 'CSIcon',
				examples: [
					{
						propName: 'name',
						description: 'Icons require a name prop which correlates to the icon you would like to use.',
						variations: [
							{
								primaryVariants: 'name="video"',
								component: <CSIcon name="video" />,
								code: '<CSIcon name="video" />'
							}
						]
					}, {
						propName: 'color',
						variations: [
							{
								primaryVariants: 'color="rgb(74, 38, 171)"',
								secondaryVariants: 'name="breadcrumbs"',
								quickLink: 'rgb',
								component: <CSIcon name="breadcrumbs" color="rgb(74, 38, 171)" />,
								code: '<CSIcon name="breadcrumbs" color="rgb(74, 38, 171)" />'
							}, {
								primaryVariants: 'color="#3cdbc0"',
								secondaryVariants: 'name="breadcrumbs"',
								quickLink: 'hex',
								component: <CSIcon name="breadcrumbs" color="#3cdbc0" />,
								code: '<CSIcon name="breadcrumbs" color="#3cdbc0" />'
							}
						]
					}, {
						propName: 'frame',
						variations: [
							{
								primaryVariants: 'frame={true}',
								secondaryVariants: [
									'origin="cs"',
									'name="video"',
									'size="2rem"'
								],
								component: <CSIcon
									name="lead"
									origin="cs"
									frame
									size="2rem"
								/>,
								code: `<CSIcon
									name="lead"
									origin="cs"
									frame
									size="2rem"
								/>`
							}
						]
					}, {
						propName: 'origin',
						variations: [
							{
								primaryVariants: 'origin="slds"',
								secondaryVariants: 'name="video"',
								quickLink: 'slds',
								component: <CSIcon name="video" origin="slds" />,
								code: '<CSIcon name="video" origin="slds" />'
							}, {
								primaryVariants: 'origin="cs"',
								secondaryVariants: 'name="table"',
								quickLink: 'cs',
								component: <CSIcon origin="cs" name="table" />,
								code: '<CSIcon origin="cs" name="table" />'
							}
						]
					}, {
						propName: 'rotate',
						variations: [
							{
								primaryVariants: 'rotate={45}',
								secondaryVariants: 'name="chevrondown"',
								quickLink: '45',
								component: <CSIcon name="chevrondown" rotate={45} />,
								code: '<CSIcon name="chevrondown" rotate={45} />'
							}, {
								primaryVariants: 'rotate={90}',
								secondaryVariants: 'name="chevrondown"',
								quickLink: '90',
								component: <CSIcon name="chevrondown" rotate={90} />,
								code: '<CSIcon name="chevrondown" rotate={90} />'
							}, {
								primaryVariants: 'rotate={-90}',
								secondaryVariants: 'name="chevrondown"',
								quickLink: '-90',
								component: <CSIcon name="chevrondown" rotate={-90} />,
								code: '<CSIcon name="chevrondown" rotate={-90} />'
							}
						]
					}, {
						propName: 'size',
						variations: [
							{
								primaryVariants: 'size="3rem"',
								secondaryVariants: [
									'origin="cs"',
									'name="tag"'
								],
								component: <CSIcon
									origin="cs"
									name="tag"
									size="3rem"
								/>,
								code: `<CSIcon
									origin="cs"
									name="tag"
									size="3rem"
								/>`
							}
						]
					}, {
						propName: 'spin',
						variations: [
							{
								primaryVariants: 'spin={true}',
								secondaryVariants: 'name="spinner"',
								component: <CSIcon name="spinner" spin />,
								code: '<CSIcon name="spinner" spin />'
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								secondaryVariants: [
									'origin="cs"',
									'name="gift"'
								],
								component: <CSIcon
									origin="cs"
									name="gift"
									title="gift"
								/>,
								code: `<CSIcon
									origin="cs"
									name="gift"
									title="gift"
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
								secondaryVariants: 'name="connected_apps"',
								component: <CSIcon
									name="connected_apps"
									id="custom-id"
									className="custom-br-mint"
								/>,
								code: `<CSIcon
									name="connected_apps"
									id="custom-id"
									className="custom-br-mint"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'name',
						required: true,
						types: 'string',
						description: 'Select which icon to display (see the icons tab).'
					}, {
						name: 'color',
						types: 'string',
						description: 'Set a custom color value for the icon. (eg. pink, #ff0000, rgba(0, 0, 0, 0.2), etc.)'
					}, {
						name: 'frame',
						types: 'boolean',
						default: 'false',
						description: 'Show a frame behind the icon.'
					}, {
						name: 'origin',
						customTypes: {
							name: 'CSIconOrigin',
							types: [`'slds'`, `'cs'`]
						},
						default: `'slds'`,
						description: 'Select whether the Salesforce or the CloudSense icon set should be used.'
					}, {
						name: 'rotate',
						types: ['number', 'string'],
						default: '0',
						description: 'Please always use a number value. String values are deprecated and will be removed. Set by how many degrees the icon should be rotated clockwise. (eg. 90, 180, -90, etc.)'
					}, {
						name: 'size',
						types: 'string',
						description: 'Set the icon size. (eg. 12px, 1.5rem, etc.)'
					}, {
						name: 'spin',
						types: 'boolean',
						default: 'false',
						description: 'Add a spinning animation to the icon.'
					}, {
						name: 'title',
						types: 'string',
						description: 'Set the icon title.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the icon.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the icon.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the icon frame div if it exists.'
					}
				]
			}
		],
		accessibility: {
			criterionList: [
				'4.1.2'
			],
			requirements: {
				attributes: [
					'`aria-hidden` - icon is a visual presentation and is semantically hidden which avoids announcing it.'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSIconPreview;
