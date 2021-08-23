import React from 'react';
import { CSCustomData, CSTooltipVariant, CSButtonSize, CSTooltipPosition, CSIconOrigin } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSCustomDataPreview extends React.Component {
	state = {
		icons: [
			{ iconName: 'cart'},
			{
				iconName: 'tag',
				iconOrigin: 'cs' as CSIconOrigin,
				getTooltip: {
					content: ['icons tooltip'],
					delay: 300,
					maxWidth: '20rem',
					padding: '0.5rem',
					position: 'bottom-left' as CSTooltipPosition,
					stickyOnClick: true
				}
			}
		],
		actions: [
			{
				action: () => alert('Delete option called'),
				icon: { iconName: 'delete' },
				labelHidden: true,
				size: 'small' as CSButtonSize,
				name: 'Delete'
			},
			{
				action: () => alert('Add option called'),
				icon: { iconName: 'add' },
				labelHidden: true,
				size: 'small' as CSButtonSize,
				name: 'Add',
				getTooltip: {
					content: ['actions tooltip'],
					delay: 300,
					padding: '0.5rem',
					position: 'bottom-left' as CSTooltipPosition,
					stickyOnClick: true
				}
			}
		],
		status: {
			iconName: 'error',
			getTooltip: {
				content: 'status tooltip',
				delay: 300,
				padding: '0.5rem',
				position: 'bottom-left' as CSTooltipPosition,
				stickyOnClick: true,
				variant: 'error' as CSTooltipVariant
			}
		},
		mockAnimation: false
	};
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
								primaryVariants: [
									'actions={this.state.actions}'
								],
								component: <CSCustomData
									value="Toyota"
									actions={this.state.actions}
								/>,
								code: `<CSCustomData
									value="Toyota"
									actions={[
										{
											action: () => alert('Delete option called'),
											icon: { iconName: 'delete' },
											size: 'small' as CSButtonSize,
											name: 'Delete'
										},
										{
											action: () => alert('Add option called'),
											icon: { iconName: 'add' },
											labelHidden: true,
											size: 'small' as CSButtonSize,
											name: 'Add',
											getTooltip: {
												content: ['actions tooltip'],
												delay: 300,
												padding: '0.5rem',
												position: 'bottom-left' as CSTooltipPosition,
												stickyOnClick: true,
											}
										}
									]}
								/>`
							}
						]
					},
					{
						propName: 'icons',
						variations: [
							{
								primaryVariants: [
									'icons={this.state.icons}'
								],
								component: <CSCustomData
									value="Toyota"
									icons={this.state.icons}
								/>,
								code: `<CSCustomData
									value="Toyota"
									icons={[
										{ iconName: 'cart'},
										{
											iconName: 'tag',
											iconOrigin: 'cs' as CSIconOrigin,
											getTooltip: {
												content: ['icons tooltip'],
												delay: 300,
												maxWidth: '20rem',
												padding: '0.5rem',
												position: 'bottom-left' as CSTooltipPosition,
												stickyOnClick: true,
											}
										}
									]}
								/>`
							}
						]
					},
					{
						propName: 'menuIcon',
						variations: [
							{
								primaryVariants: [
									'menuIcon="dropdown"'
								],
								quickLink: 'dropdown',
								component: <CSCustomData
									value="Toyota"
									menuIcon="dropdown"
								/>,
								code: `<CSCustomData
									value="Toyota"
									menuIcon="dropdown"
								/>`
							},
							{
								primaryVariants: [
									'menuIcon="datepicker"'
								],
								quickLink: 'datepicker',
								component: <CSCustomData
									value="Toyota"
									menuIcon="datepicker"
								/>,
								code: `<CSCustomData
									value="Toyota"
									menuIcon="datepicker"
								/>`
							}
						]
					},
					{
						propName: 'status',
						variations: [
							{
								primaryVariants: [
									'status={this.state.status}'
								],
								quickLink: 'static',
								component: <div className="cs-custom-data-status">
									<CSCustomData
										value="Toyota"
										status={this.state.status}
									/>
								</div>,
								code: `<CSCustomData
									value="Toyota"
									status={{
										iconName: 'error',
										getTooltip: {
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
					},
					{
						propName: 'title',
						variations: [
							{
								primaryVariants: [
									'title="Toyota title"'
								],
								component: <CSCustomData
									title="Toyota title"
									value="Toyota"
								/>,
								code: `<CSCustomData
									title="Toyota title"
									value="Toyota"
								/>`
							}
						]
					},
					{
						propName: 'value',
						variations: [
							{
								primaryVariants: [
									'value="Toyota"'
								],
								component: <CSCustomData
									value="Toyota"
								/>,
								code: `<CSCustomData
									value="Toyota"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'actions',
						customTypes: {
							name: 'CSCustomDataActionProps',
							types: 'Array<CSCustomDataActionProps>'
						},
						description: 'An array of objects which accepts valid CSIcon & CSButton props, a getTooltip function to show an icon with a tooltip & an action prop for the button action/function.'
					}, {
						name: 'icons',
						customTypes: {
							name: 'CSCustomDataIconProps',
							types: 'Array<CSCustomDataIconProps>'
						},
						description: 'An array of objects which accepts valid CSIcon props or a getTooltip function to show an icon with a tooltip.'
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
							name: 'CSCustomDataIconProps',
							types: 'Object<CSCustomDataIconProps>'
						},
						description: 'A single object which accepts valid CSIcon props or a getTooltip function to show a status icon with a tooltip.'
					}, {
						name: 'title',
						types: 'string',
						description: 'The title value'
					}, {
						name: 'value',
						types: 'string',
						description: 'The input text value'
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
