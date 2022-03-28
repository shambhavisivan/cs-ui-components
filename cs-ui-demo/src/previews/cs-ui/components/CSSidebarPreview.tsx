import React from 'react';
import {
	CSSidebar,
	CSSidebarTab,
	CSList,
	CSListItem
} from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

interface CSSidebarPreviewState {
	[key: string]: boolean;
}

class CSSidebarPreview extends React.Component<{}, CSSidebarPreviewState> {
	state = {
		height1: true,
		height2: true,
		height3: true,
		multipleTabs: true,
		onToggle: true,
		opensTo1: true,
		opensTo2: true,
		tabsPadding1: true,
		tabsPadding2: true,
		tabsWidth1: true,
		tabsWidth2: true,
		tabsWidth3: true,
		wholeSidebarClickable: false,
		class: true,
		title: true,
		icons1: true,
		icons2: true,
		noTabHeader1: true,
		noTabHeader2: true,
		tabPadding: true,
		tabWidth: true,
		subtitle: true,
		children: true
	};

	toggleSidebar = (targetedSidebar: string) => {
		this.setState((prevState: CSSidebarPreviewState) => ({
			[targetedSidebar]: !prevState[targetedSidebar]
		}));
	}

	getDoc = () => ({
		name: 'Sidebar',
		usage: 'Sidebar provides a generic box for related items which can be collapsed and grouped amongst tabs.',
		accessible: 'yes',
		components: [
			{
				name: 'CSSidebar',
				examples: [
					{
						propName: 'expanded',
						variations: [
							{
								primaryVariants: 'expanded={true}',
								quickLink: 'true',
								component: <CSSidebar expanded>
									<CSSidebarTab title="Expanded Sidebar">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar expanded>
									<CSSidebarTab title="Expanded Sidebar">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: 'expanded={false}',
								quickLink: 'false',
								component: <CSSidebar>
									<CSSidebarTab title="Collapsed Sidebar">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar>
									<CSSidebarTab title="Collapsed Sidebar">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
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
								component: <CSSidebar
									height="50vh"
									expanded={this.state.height1}
									onToggle={() => this.toggleSidebar('height1')}
								>
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									height="50vh"
									expanded={this.state.expanded}
									onToggle={this.toggleSidebar}
								>
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: 'height="50%"',
								quickLink: '50%',
								component: <CSSidebar
									height="50%"
									expanded={this.state.height2}
									onToggle={() => this.toggleSidebar('height2')}
								>
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									height="50%"
									expanded={this.state.expanded}
									onToggle={this.toggleSidebar}
								>
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: 'height="20rem"',
								quickLink: '20rem',
								component: <CSSidebar
									height="20rem"
									expanded={this.state.height3}
									onToggle={() => this.toggleSidebar('height3')}
								>
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									height="20rem"
									expanded={this.state.expanded}
									onToggle={this.toggleSidebar}
								>
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'multipleTabs',
						variations: [
							{
								primaryVariants: 'multipleTabs={true}',
								component: <CSSidebar
									multipleTabs
									expanded={this.state.multipleTabs}
									onToggle={() => this.toggleSidebar('multipleTabs')}
								>
									<CSSidebarTab title="Tab 1">
										<span>This is the content of tab 1.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2">
										<span>This is the content of tab 2.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 3">
										<span>This is the content of tab 3.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									multipleTabs
									expanded={this.state.expanded}
									onToggle={this.toggleSidebar}
								>
									<CSSidebarTab title="Tab 1">
										<span>This is the content of tab 1.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2">
										<span>This is the content of tab 2.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 3">
										<span>This is the content of tab 3.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'onToggle',
						description: '`onToggle` should be used together with the `expanded` prop, which should then accept a state. If you wish to disallow expanding and collapsing, simply omit the `onToggle` function and give the `expanded` prop a static value. If you need to do so programmatically, you can set its value to `undefined`. You can preview these use cases under the `expanded` prop.',
						variations: [
							{
								primaryVariants: 'onToggle={() => void}',
								component: <CSSidebar
									expanded={this.state.onToggle}
									onToggle={() => this.toggleSidebar('onToggle')}
								>
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									expanded={this.state.expanded}
									onToggle={() => this.setState(({ expanded }) => ({ expanded: !expanded }))}
								>
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'opensTo',
						variations: [
							{
								primaryVariants: 'opensTo="right"',
								secondaryVariants: 'multipleTabs={true}',
								quickLink: 'right',
								component: <CSSidebar
									multipleTabs
									expanded={this.state.opensTo1}
									onToggle={() => this.toggleSidebar('opensTo1')}
								>
									<CSSidebarTab title="Tab 1">
										<span>This is the content of tab 1.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2">
										<span>This is the content of tab 2.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									multipleTabs
									expanded={this.state.expanded}
									onToggle={this.toggleSidebar}
								>
									<CSSidebarTab title="Tab 1">
										<span>This is the content of tab 1.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2">
										<span>This is the content of tab 2.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: 'opensTo="left"',
								secondaryVariants: 'multipleTabs={true}',
								quickLink: 'left',
								component: <CSSidebar
									opensTo="left"
									multipleTabs
									expanded={this.state.opensTo2}
									onToggle={() => this.toggleSidebar('opensTo2')}
								>
									<CSSidebarTab title="Tab 1">
										<span>This is the content of tab 1.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2">
										<span>This is the content of tab 2.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									opensTo="left"
									multipleTabs
									expanded={this.state.expanded}
									onToggle={this.toggleSidebar}
								>
									<CSSidebarTab title="Tab 1">
										<span>This is the content of tab 1.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2">
										<span>This is the content of tab 2.</span>
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
								component: <CSSidebar
									tabsPadding="1.25rem"
									expanded={this.state.tabsPadding1}
									onToggle={() => this.toggleSidebar('tabsPadding1')}
								>
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									tabsPadding="1.25rem"
									expanded={this.state.expanded}
									onToggle={this.toggleSidebar}
								>
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: 'tabsPadding="1rem 0.5rem"',
								secondaryVariants: 'multipleTabs={true}',
								quickLink: '1rem 0.5rem',
								component: <CSSidebar
									tabsPadding="1rem 0.5rem"
									multipleTabs
									expanded={this.state.tabsPadding2}
									onToggle={() => this.toggleSidebar('tabsPadding2')}
								>
									<CSSidebarTab title="Tab 1">
										<span>This is the content of tab 1.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2">
										<span>This is the content of tab 2.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									tabsPadding="1rem 0.5rem"
									multipleTabs
									expanded={this.state.expanded}
									onToggle={this.toggleSidebar}
								>
									<CSSidebarTab title="Tab 1">
										<span>This is the content of tab 1.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2">
										<span>This is the content of tab 2.</span>
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
								component: <CSSidebar
									tabsWidth="20rem"
									expanded={this.state.tabsWidth1}
									onToggle={() => this.toggleSidebar('tabsWidth1')}
								>
									<CSSidebarTab title="20rem">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									tabsWidth="20rem"
									expanded={this.state.expanded}
									onToggle={this.toggleSidebar}
								>
									<CSSidebarTab title="20rem">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: 'tabsWidth="200px"',
								secondaryVariants: 'multipleTabs',
								quickLink: '200px',
								component: <CSSidebar
									tabsWidth="200px"
									multipleTabs
									expanded={this.state.tabsWidth2}
									onToggle={() => this.toggleSidebar('tabsWidth2')}
								>
									<CSSidebarTab title="Tab 1">
										<span>This is the content of tab 1.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2">
										<span>This is the content of tab 2.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									tabsWidth="200px"
									multipleTabs
									expanded={this.state.expanded}
									onToggle={this.toggleSidebar}
								>
									<CSSidebarTab title="Tab 1">
										<span>This is the content of tab 1.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2">
										<span>This is the content of tab 2.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: 'tabsWidth="100%"',
								quickLink: '100%',
								component: <CSSidebar
									tabsWidth="100%"
									expanded={this.state.tabsWidth3}
									onToggle={() => this.toggleSidebar('tabsWidth3')}
								>
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									tabsWidth="100%"
									expanded={this.state.expanded}
									onToggle={this.toggleSidebar}
								>
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'wholeSidebarClickable',
						description: 'When set to `true`, only an icon click will expand an already collapsed sidebar.',
						variations: [
							{
								primaryVariants: 'wholeSidebarClickable={false}',
								secondaryVariants: ['expanded={state}', 'onToggle={() => void}'],
								component: <CSSidebar
									wholeSidebarClickable={false}
									expanded={this.state.wholeSidebarClickable}
									onToggle={() => this.toggleSidebar('wholeSidebarClickable')}
								>
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									wholeSidebarClickable={false}
									expanded={this.state.expanded}
									onToggle={this.toggleSidebar}
								>
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
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
								component: <CSSidebar
									className="custom-br-mint"
									id="custom-sidebar-id"
									expanded={this.state.class}
									onToggle={() => this.toggleSidebar('class')}
								>
									<CSSidebarTab
										title="Tab Title"
										id="custom-sidebar-tab-id"
										className="custom-br-purple"
									>
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									className="custom-br-mint"
									id="custom-sidebar-id"
									expanded={this.state.expanded}
									onToggle={this.toggleSidebar}
								>
									<CSSidebarTab
										title="Tab Title"
										id="custom-sidebar-id"
										className="custom-br-purple"
									>
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}
				],
				properties: [
					{
						name: 'expanded',
						default: 'false',
						types: 'boolean',
						description: 'Set whether the sidebar should be expanded or collapsed.'
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
						name: 'onToggle',
						types: '() => void',
						description: 'Callback function for opening and closing the sidebar.'
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
								component: <CSSidebar
									expanded={this.state.title}
									onToggle={() => this.toggleSidebar('title')}
								>
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar expanded={this.state.expanded} onToggle={this.toggleSidebar}>
									<CSSidebarTab title="Tab Title">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'iconName | iconOrigin',
						variations: [
							{
								primaryVariants: ['iconName="standard_objects"', 'iconOrigin="slds"'],
								secondaryVariants: 'expanded={false}',
								quickLink: 'slds',
								component: <CSSidebar
									expanded={this.state.icons1}
									onToggle={() => this.toggleSidebar('icons1')}
								>
									<CSSidebarTab title="Tab Title" iconName="standard_objects">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar expanded={this.state.expanded} onToggle={this.toggleSidebar}>
									<CSSidebarTab title="Tab Title" iconName="standard_objects">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: ['iconName="action"', 'iconOrigin="cs"'],
								secondaryVariants: 'expanded={false}',
								quickLink: 'cs',
								component: <CSSidebar
									multipleTabs
									expanded={this.state.icons2}
									onToggle={() => this.toggleSidebar('icons2')}
								>
									<CSSidebarTab
										title="Tab 1"
										iconName="action"
										iconOrigin="cs"
									>
										<span>This is the content of tab 1.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2">
										<span>This is the content of tab 2.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									multipleTabs
									expanded={this.state.expanded}
									onToggle={this.toggleSidebar}
								>
									<CSSidebarTab
										title="Tab 1"
										iconName="action"
										iconOrigin="cs"
									>
										<span>This is the content of tab 1.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2">
										<span>This is the content of tab 2.</span>
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
								component: <CSSidebar
									expanded={this.state.noTabHeader1}
									onToggle={() => this.toggleSidebar('noTabHeader1')}
								>
									<CSSidebarTab title="This is not displayed" noTabHeader>
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar expanded={this.state.expanded} onToggle={this.toggleSidebar}>
									<CSSidebarTab title="This is not displayed" noTabHeader>
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>`
							}, {
								primaryVariants: 'noTabHeader={true}',
								secondaryVariants: 'multipleTabs={true}',
								quickLink: 'multiple tabs',
								component: <CSSidebar
									multipleTabs
									expanded={this.state.noTabHeader2}
									onToggle={() => this.toggleSidebar('noTabHeader2')}
								>
									<CSSidebarTab title="Tab 1" noTabHeader>
										<span>This is the content of tab 1.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2">
										<span>This is the content of tab 2.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									multipleTabs
									expanded={this.state.expanded}
									onToggle={this.toggleSidebar}
								>
									<CSSidebarTab title="Tab title 1" noTabHeader>
										<span>This is the content of tab 1.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab title 2">
										<span>This is the content of tab 2.</span>
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
								component: <CSSidebar
									tabsPadding="0"
									multipleTabs
									expanded={this.state.tabPadding}
									onToggle={() => this.toggleSidebar('tabPadding')}
								>
									<CSSidebarTab title="Tab 1" tabPadding="3rem">
										<span>This is the content of tab 1.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2" tabPadding="3rem 0">
										<span>This is the content of tab 2.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 3">
										<span>This is the content of tab 3.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									tabsPadding="0"
									multipleTabs
									expanded={this.state.expanded}
									onToggle={this.toggleSidebar}
								>
									<CSSidebarTab title="Tab 1" tabPadding="3rem">
										<span>This is the content of tab 1.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2" tabPadding="3rem 0">
										<span>This is the content of tab 2.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 3">
										<span>This is the content of tab 3.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'tabWidth',
						variations: [
							{
								primaryVariants: ['tabWidth="16rem"', 'tabWidth="10rem"'],
								component: <CSSidebar
									multipleTabs
									expanded={this.state.tabWidth}
									onToggle={() => this.toggleSidebar('tabWidth')}
								>
									<CSSidebarTab title="Tab 1" tabWidth="16rem">
										<span>This is the content of tab 1.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2" tabWidth="10rem">
										<span>This is the content of tab 2.</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar
									multipleTabs
									expanded={this.state.expanded}
									onToggle={this.toggleSidebar}
								>
									<CSSidebarTab title="Tab 1 Title" tabWidth="16rem">
										<span>This is the content of tab 1.</span>
									</CSSidebarTab>
									<CSSidebarTab title="Tab 2 Title" tabWidth="10rem">
										<span>This is the content of tab 2.</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'subtitle',
						variations: [
							{
								primaryVariants: 'subtitle="text"',
								component: <CSSidebar
									expanded={this.state.subtitle}
									onToggle={() => this.toggleSidebar('subtitle')}
								>
									<CSSidebarTab title="Tab Title" subtitle="Tab Subtitle">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar expanded={this.state.expanded} onToggle={this.toggleSidebar}>
									<CSSidebarTab title="Tab Title" subtitle="Tab Subtitle">
										<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptate!</span>
									</CSSidebarTab>
								</CSSidebar>`
							}
						]
					}, {
						propName: 'children',
						description: '`CSSidebarTab` supports custom content provided as children.',
						variations: [
							{
								component: <CSSidebar
									expanded={this.state.children}
									onToggle={() => this.toggleSidebar('children')}
								>
									<CSSidebarTab title="Tab Title" tabPadding="0">
										<CSList>
											<CSListItem text="Product A" />
											<CSListItem text="Product B" />
											<CSListItem text="Product C" />
										</CSList>
									</CSSidebarTab>
								</CSSidebar>,
								code: `<CSSidebar expanded={this.state.expanded} onToggle={this.toggleSidebar}>
									<CSSidebarTab title="Tab Title" tabPadding="0">
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
						default: `'rows'`,
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
				keyboardOperability: [
					'Proper focus management and keyboard operability ensured by structure and `<CSButton>`'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSSidebarPreview;
