import React from 'react';
import { CSCustomData, CSTooltipVariant, CSTooltipPosition } from '@cloudsense/cs-ui-components';
import { actions, actionsCode } from '../helpers/actions';
import { icons, iconsCode } from '../helpers/icons';

import Preview from '../Preview';

const status = {
	name: 'error',
	tooltip: {
		content: 'status tooltip',
		delay: 300,
		padding: '0.5rem',
		position: 'bottom-left' as CSTooltipPosition,
		stickyOnClick: true,
		variant: 'error' as CSTooltipVariant
	}
};

class CSCustomDataPreview extends React.Component {
	getDoc = () => ({
		name: 'Custom Data',
		usage: 'Form elements to be rendered for icons, buttons, status & custom icon support',
		accessible: 'yes',
		components: [
			{
				name: 'CSCustomData',
				examples: [
					{
						propName: 'actions',
						variations: [
							{
								primaryVariants: 'actions={actions}',
								component: <CSCustomData value="Toyota" actions={actions} />,
								code: `<CSCustomData
									value="Toyota"
									actions={${actionsCode}}
								/>`
							}
						]
					}, {
						propName: 'icons',
						variations: [
							{
								primaryVariants: 'icons={icons}',
								component: <CSCustomData value="Toyota" icons={icons} />,
								code: `<CSCustomData
									value="Toyota"
									icons={${iconsCode}}
								/>`
							}
						]
					}, {
						propName: 'menuIcon',
						variations: [
							{
								primaryVariants: 'menuIcon="dropdown"',
								quickLink: 'dropdown',
								component: <CSCustomData value="Toyota" menuIcon="dropdown" />,
								code: `<CSCustomData value="Toyota" menuIcon="dropdown" />`
							}, {
								primaryVariants: 'menuIcon="datepicker"',
								quickLink: 'datepicker',
								component: <CSCustomData value="Toyota" menuIcon="datepicker" />,
								code: `<CSCustomData value="Toyota" menuIcon="datepicker" />`
							}
						]
					}, {
						propName: 'status',
						variations: [
							{
								primaryVariants: 'status={status}',
								component: <CSCustomData
									value="Toyota"
									actions={actions}
									icons={icons}
									status={status}
								/>,
								code: `<CSCustomData
									value="Toyota"
									status={{
										name: 'error',
										tooltip: {
											content: 'status tooltip',
											delay: 300,
											padding: '0.5rem',
											position: 'bottom-left' as CSTooltipPosition,
											stickyOnClick: true,
											variant: 'error' as CSTooltipVariant,
										}
									}}
								/>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								primaryVariants: 'title="Toyota title"',
								component: <CSCustomData title="Toyota title" value="Toyota" />,
								code: `<CSCustomData title="Toyota title" value="Toyota" />`
							}
						]
					}, {
						propName: 'value',
						variations: [
							{
								primaryVariants: 'value="Toyota"',
								component: <CSCustomData value="Toyota" />,
								code: `<CSCustomData value="Toyota" />`
							}
						]
					}
				],
				properties: [
					{
						name: 'actions',
						customTypes: {
							name: 'Array<CSCustomDataAction>',
							types: ['CSButtonProps', 'tooltip?: CSTooltipProps']
						},
						description: 'An array of objects which accept valid CSButton props and an optional tooltip property to wrap the button inside it.'
					}, {
						name: 'formHelper',
						types: 'boolean',
						default: 'false',
						description: 'When set to true, renders a compact version of custom data with only icons and actions.'
					}, {
						name: 'icons',
						customTypes: {
							name: 'Array<CSCustomDataIcon>',
							types: ['CSIconProps', 'tooltip?: CSTooltipProps']
						},
						description: 'An array of objects which accept valid CSIcon props and an optional tooltip property to wrap the icon inside it.'
					}, {
						name: 'menuIcon',
						customTypes: {
							name: 'CSCustomDataMenuProps',
							types: ['dropdown', 'datepicker']
						},
						description: 'Menu icon which accepts a type of either dropdown or datepicker.'
					}, {
						name: 'status',
						customTypes: {
							name: 'CSCustomDataIcon',
							types: ['CSIconProps', 'tooltip?: CSTooltipProps']
						},
						description: 'A single object which accepts valid CSIcon props and an optional tooltip property to wrap the icon inside it.'
					}, {
						name: 'title',
						types: 'string',
						description: 'The title value.'
					}, {
						name: 'value',
						types: 'string',
						description: 'The input text value.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the text display element.'
					}
				]
			}
		],
		accessibility: {}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSCustomDataPreview;
