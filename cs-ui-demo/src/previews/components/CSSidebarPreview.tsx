import React from 'react';
import {
	CSSidebar,
	CSSidebarTab,
	CSList,
	CSListItem
} from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSSidebarPreview extends React.Component {
	getDoc = () => ({
		name: 'Sidebar',
		usage: 'Sidebar provides a generic box for related items which can be collapsed and grouped amongst tabs.',
		accessible: 'yes',
		components: [
			{
				name: 'CSSidebar',
				examples: [
					{
						propName: 'collapsible',
						variations: [
							{
								primaryVariants: 'collapsible={false}',
								component: <CSSidebar collapsible={false}>
									<CSSidebarTab title="Tab Title">
										<span>This is example of non collapsible sidebar. It does not have close button.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar collapsible={false}>
									<CSSidebarTab title="Tab Title">
										<span>This is example of non collapsible sidebar. It does not have close button.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'defaultClosed',
						variations: [
							{
								primaryVariants: 'defaultClosed={true}',
								component: <CSSidebar defaultClosed>
									<CSSidebarTab title="Closed on first load">
										<span>Sidebar has to be collapsible to be closed on first load</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar defaultClosed>
									<CSSidebarTab title="Closed on first load">
										<span>Sidebar has to be collapsible to be closed on first load</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'height',
						variations: [
							{
								primaryVariants: 'height="50vh"',
								quickLink: '50vh',
								component: <CSSidebar height="50vh">
									<CSSidebarTab title="Tab Title">
										<span>This sidebar takes half of the page height.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar height="50vh">
									<CSSidebarTab title="Tab Title">
										<span>This sidebar takes half of the page height.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: 'height="50%"',
								quickLink: '50%',
								component: <CSSidebar height="50%">
									<CSSidebarTab title="Tab Title">
										<span>This sidebar takes half of its parent height.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar height="50%">
									<CSSidebarTab title="Tab Title">
										<span>This sidebar takes half of its parent height.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: 'height="20rem"',
								quickLink: '20rem',
								component: <CSSidebar height="20rem">
									<CSSidebarTab title="Tab Title">
										<span>This sidebar height is 20rem.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar height="20rem">
									<CSSidebarTab title="Tab Title">
										<span>This sidebar height is 20rem.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'multipleTabs',
						variations: [
							{
								primaryVariants: 'multipleTabs={true}',
								component: <CSSidebar multipleTabs>
									<CSSidebarTab title="Tab 1 Title">
										<span>This is content of tab one.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2 Title">
										<span>This is content of tab two.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 3 Title">
										<span>This is content of tab three.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar multipleTabs>
									<CSSidebarTab title="Tab 1 Title">
										<span>This is content of tab one.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2 Title">
										<span>This is content of tab two.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 3 Title">
										<span>This is content of tab three.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'opensTo',
						variations: [
							{
								primaryVariants: 'opensTo="right"',
								secondaryVariants: 'multipleTabs',
								quickLink: 'right, multipleTabs',
								component: <CSSidebar multipleTabs>
									<CSSidebarTab title="Tab 1 Title">
										<span>This sidebar will open to the right which is the default.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2 Title">
										<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar multipleTabs>
									<CSSidebarTab title="Tab 1 Title">
										<span>This sidebar will open to the right which is the default.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2 Title">
										<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: 'opensTo="left"',
								secondaryVariants: 'multipleTabs',
								quickLink: 'left, multipleTabs',
								component: <CSSidebar
									opensTo="left"
									className="sidebar-far-right"
									multipleTabs
								>
									<CSSidebarTab title="Tab 1 Title">
										<span>Lorem ipsum.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2 Title">
										<span>Ipsum lorem.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									opensTo="left"
									className="sidebar-far-right"
									multipleTabs
								>
									<CSSidebarTab title="Tab 1 Title">
										<span>Lorem ipsum.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2 Title">
										<span>Ipsum lorem.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: 'opensTo="right"',
								secondaryVariants: 'multipleTabs={false}',
								quickLink: 'right',
								component: <CSSidebar>
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar>
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: 'opensTo="left"',
								secondaryVariants: 'multipleTabs={false}',
								quickLink: 'left',
								component: <CSSidebar opensTo="left" className="sidebar-far-right">
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar opensTo="left" className="sidebar-far-right">
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'tabsPadding',
						variations: [
							{
								primaryVariants: 'tabsPadding="1.25rem"',
								quickLink: '1.25rem',
								component: <CSSidebar tabsPadding="1.25rem">
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar tabsPadding="1.25rem">
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: 'tabsPadding="1rem 0.5rem"',
								secondaryVariants: 'multipleTabs={true}',
								quickLink: '1rem 0.5rem',
								component: <CSSidebar tabsPadding="1rem 0.5rem" multipleTabs>
									<CSSidebarTab title="Tab 1 Title">
										<span>Ipsum lorem, lorem ipsum.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2 Title">
										<span>Lorem ipsum, ipsum lorem.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar tabsPadding="1rem 0.5rem" multipleTabs>
									<CSSidebarTab title="Tab 1 Title">
										<span>Ipsum lorem, lorem ipsum.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2 Title">
										<span>Lorem ipsum, ipsum lorem.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'tabsWidth',
						variations: [
							{
								primaryVariants: 'tabsWidth="20rem"',
								quickLink: '20rem',
								component: <CSSidebar tabsWidth="20rem">
									<CSSidebarTab title="20rem">
										<span>Lorem ipsum.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar tabsWidth="20rem">
									<CSSidebarTab title="20rem">
										<span>Lorem ipsum.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: 'tabsWidth="200px"',
								secondaryVariants: 'multipleTabs',
								quickLink: '200px',
								component: <CSSidebar tabsWidth="200px" multipleTabs>
									<CSSidebarTab title="Tab 1 Title">
										<span>Lorem ipsum.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2 Title">
										<span>Lorem ipsum, ipsum lorem.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar tabsWidth="200px" multipleTabs>
									<CSSidebarTab title="Tab 1 Title">
										<span>Lorem ipsum.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2 Title">
										<span>Lorem ipsum, ipsum lorem.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: 'tabsWidth="100%"',
								quickLink: '100%',
								component: <CSSidebar tabsWidth="100%">
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar tabsWidth="100%">
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'wholeSidebarClickable',
						variations: [
							{
								primaryVariants: 'wholeSidebarClickable={false}',
								secondaryVariants: 'defaultClosed={true}',
								component: <CSSidebar wholeSidebarClickable={false} defaultClosed>
									<CSSidebarTab title="Click on icon">
										<span>This sidebar is not clickable anywhere to expand when it is collapsed, but only on the icon.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar wholeSidebarClickable={false} defaultClosed>
									<CSSidebarTab title="Click on icon">
										<span>This sidebar is not clickable anywhere to expand when it is collapsed, but only on the icon.</span>
									</CSSidebarTab>
								</CSSidebar>`
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
								component: <CSSidebar className="custom-br-mint" id="custom-sidebar-id">
									<CSSidebarTab title="Tab Title" className="custom-br-purple">
										<span>This sidebar has custom class and custom id added, which can serve to apply custom styles.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar className="custom-br-mint" id="custom-sidebar-id">
									<CSSidebarTab title="Tab Title" className="custom-br-purple">
										<span>This sidebar has custom class and custom id added, which can serve to apply custom styles.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}
				],
				properties: [
					{
						name: 'collapsible',
						types: 'boolean',
						default: 'true',
						description: 'Control whether the sidebar should be collapsible.'
					}, {
						name: 'defaultClosed',
						types: 'boolean',
						default: 'false',
						description: 'Sets the initial display state of sidebar.'
					}, {
						name: 'height',
						types: 'string',
						description: 'Set the sidebar height (eg. 200px, 20rem, 100vw, etc.).'
					}, {
						name: 'multipleTabs',
						types: 'boolean',
						default: 'false',
						description: 'Set if sidebar will have tabs track.'
					}, {
						name: 'opensTo',
						customTypes: {
							name: 'CSSidebarOpensTo',
							types: [`'right'`, `'left'`]
						},
						default: `'right'`,
						description: 'Places tabs on left or right side of the sidebar, inversely from the side to which sidebar should open.'
					}, {
						name: 'tabsPadding',
						types: 'string',
						default: `'0 0.75rem'`,
						description: 'Override default padding of all tabs, if that padding is not specified on tab itself.'
					}, {
						name: 'tabsWidth',
						types: 'string',
						default: `'17rem'`,
						description: 'Override width of all tabs, if that width is not specified on tab itself (eg. 20%, 20rem, 400px, etc.).'
					}, {
						name: 'wholeSidebarClickable',
						types: 'boolean',
						default: 'true',
						description: 'Control whether the whole sidebar is clickable to expand or just the toggle button.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the sidebar.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the sidebar.'
					}, {
						name: 'children',
						customTypes: {
							name: 'CSSidebarChildren',
							types: ['<CSSidebarTab />', 'any']
						},
						description: 'This component is designed to support CSSidebarTab as a child.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the sidebar.'
					}
				]
			}, {
				name: 'CSSidebarTab',
				examples: [
					{
						propName: 'title',
						variations: [
							{
								primaryVariants: 'title="text"',
								component: <CSSidebar>
									<CSSidebarTab title="Tab Title">
										<span>This sidebar tab has a title only, which is mandatory.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar>
									<CSSidebarTab title="Tab Title">
										<span>This sidebar tab has a title only, which is mandatory.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'iconName | iconOrigin',
						variations: [
							{
								primaryVariants: ['iconName="standard_objects"', 'iconOrigin="slds"'],
								secondaryVariants: 'defaultClosed={true}',
								quickLink: 'slds',
								component: <CSSidebar defaultClosed>
									<CSSidebarTab title="Tab Title" iconName="standard_objects">
										<span>This sidebar tab has a specific icon, which is from the default slds origin.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar defaultClosed>
									<CSSidebarTab title="Tab Title" iconName="standard_objects">
										<span>This sidebar tab has a specific icon, which is from the default slds origin.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: ['iconName="action"', 'iconOrigin="cs"'],
								secondaryVariants: 'defaultClosed={true}',
								quickLink: 'cs',
								component: <CSSidebar defaultClosed>
									<CSSidebarTab
										title="Tab Title"
										iconName="action"
										iconOrigin="cs"
									>
										<span>This sidebar tab has a specific cloudsense origin icon.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar defaultClosed>
									<CSSidebarTab
										title="Tab Title"
										iconName="action"
										iconOrigin="cs"
									>
										<span>This sidebar tab has a specific cloudsense origin icon.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'noTabHeader',
						variations: [
							{
								primaryVariants: 'noTabHeader={true}',
								secondaryVariants: 'multipleTabs={false}',
								quickLink: 'single tab',
								component: <CSSidebar>
									<CSSidebarTab
										title="This is not displayed"
										noTabHeader
										tabPadding="0"
									>
										<span>No tab header.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar>
									<CSSidebarTab
										title="This is not displayed"
										noTabHeader
										tabPadding="0"
									>
										<span>No tab header.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: 'noTabHeader={true}',
								secondaryVariants: 'multipleTabs={true}',
								quickLink: 'multiple tabs',
								component: <CSSidebar multipleTabs>
									<CSSidebarTab title="Tab title 1" noTabHeader>
										<span>This tab has noTabHeader option.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab title 2">
										<span>This tab has a header.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar multipleTabs>
									<CSSidebarTab title="Tab title 1" noTabHeader>
										<span>This tab has noTabHeader option.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab title 2">
										<span>This tab has a header.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'tabPadding',
						variations: [
							{
								primaryVariants: ['tabPadding="3rem"', 'tabPadding="3rem 0"'],
								secondaryVariants: 'tabsPadding="0"',
								component: <CSSidebar tabsPadding="0" multipleTabs>
									<CSSidebarTab title="Custom '3rem' padding" tabPadding="3rem">
										<span>tabPadding overrides tabsPadding.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Custom '3rem 0' padding" tabPadding="3rem 0">
										<span>tabPadding overrides tabsPadding.</span>
									</CSSidebarTab>
									<CSSidebarTab title="TabsPadding padding">
										<span>No tabPadding override so tabsPadding is inherited.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar tabsPadding="0" multipleTabs>
									<CSSidebarTab title="Custom '3rem' padding" tabPadding="3rem">
										<span>tabPadding overrides tabsPadding.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Custom '3rem 0' padding" tabPadding="3rem 0">
										<span>tabPadding overrides tabsPadding.</span>
									</CSSidebarTab>
									<CSSidebarTab title="TabsPadding padding">
										<span>No tabPadding override so tabsPadding is inherited.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'tabWidth',
						variations: [
							{
								primaryVariants: ['tabWidth="16rem"', 'tabWidth="10rem"'],
								component: <CSSidebar multipleTabs>
									<CSSidebarTab title="Tab 1 Title" tabWidth="16rem">
										<span>Tab can have any content.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2 Title" tabWidth="10rem">
										<span>Tab can have any content.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar multipleTabs>
									<CSSidebarTab title="Tab 1 Title" tabWidth="16rem">
										<span>Tab can have any content.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2 Title" tabWidth="10rem">
										<span>Tab can have any content.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'subtitle',
						variations: [
							{
								primaryVariants: 'subtitle="text"',
								component: <CSSidebar>
									<CSSidebarTab title="Tab Title" subtitle="a custom subtitle">
										<span>This sidebar tab has a subtitle.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar>
									<CSSidebarTab title="Tab Title" subtitle="a custom subtitle">
										<span>This sidebar tab has a subtitle.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'children',
						description: 'CSSidebarTab supports custom content provided as a child',
						variations: [
							{
								component: <CSSidebar>
									<CSSidebarTab title="Sidebar with CSList" tabPadding="0">
										<CSList>
											<CSListItem text="Product A" />
											<CSListItem text="Product B" />
											<CSListItem text="Product C" />
										</CSList>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar>
									<CSSidebarTab title="Sidebar with CSList" tabPadding="0">
										<CSList>
											<CSListItem text="Product A" />
											<CSListItem text="Product B" />
											<CSListItem text="Product C" />
										</CSList>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}
				],
				properties: [
					{
						name: 'title',
						required: true,
						types: 'string',
						description: 'Title of the tab.'
					}, {
						name: 'iconName',
						types: 'string',
						default: `'assignment'`,
						description: 'Set the icon displayed for tab.'
					}, {
						name: 'iconOrigin',
						customTypes: {
							name: 'CSSidebarTabIconOrigin',
							types: [`'slds'`, `'cs'`]
						},
						default: `'slds'`,
						description: 'Set the icon origin.'
					}, {
						name: 'noTabHeader',
						types: 'boolean',
						default: 'false',
						description: 'Control whether sidebar tab header is displayed.'
					}, {
						name: 'subtitle',
						types: 'string',
						description: 'Subtitle of the tab.'
					}, {
						name: 'tabPadding',
						types: 'string',
						default: `'0 0.75rem'`,
						description: 'Override default tab body padding. This will also override tabsPadding if set.'
					}, {
						name: 'tabWidth',
						types: 'string',
						description: 'Override default tab body width. This will also override tabsWidth if set.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the tab.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the tab.'
					}, {
						name: 'children',
						types: 'any',
						description: 'This component supports custom content passed as children.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the sidebar tab div.'
					}, {
						name: 'isActiveTab',
						required: 'CSSidebar',
						types: 'boolean',
						description: 'Displays tab if it is the active one.'
					}
				]
			}
		],
		accessibility: {
			criterionList: [
				'2.1.1',
				'2.1.2',
				'3.2.1',
				'2.4.7',
				'4.1.2'
			],
			requirements: {
				structure: [
					'`<aside>` as the top element',
					'Toggle and tab buttons are `<CSButton>`'
				],
				attributes: [
					'`aria-expanded` - true when sidebar is expanded',
					'`role="complementary"` - implicit by `<aside>`, marks tangentially related content to main content of the page'
				],
				styling: [
					'Distinct hover, active and focus state styles'
				],
				keyboardOperability: [
					'Proper focus management and keyboard operability ensured by structure and `<CSButton>`'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSSidebarPreview;
