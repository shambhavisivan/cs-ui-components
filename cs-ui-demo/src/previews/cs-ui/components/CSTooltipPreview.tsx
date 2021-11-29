import React from 'react';
import { CSTooltip, CSChip } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSTooltipPreview extends React.Component {
	getDoc = () => ({
		name: 'Tooltip',
		usage: 'A Tooltip is a small piece of contextual information about an element on the screen, which is displayed when a user hovers or focuses on the element it is describing. It is not focusable and cannot contain focusable content.',
		accessible: 'yes',
		components: [
			{
				name: 'CSTooltip',
				examples: [
					{
						propName: 'content',
						variations: [
							{
								primaryVariants: 'content="text"',
								quickLink: 'string',
								component: <CSTooltip content="Help text" />,
								code: '<CSTooltip content="Help text" />'
							}, {
								primaryVariants: 'content={[...]}',
								quickLink: 'array',
								component: <CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
								/>,
								code: `<CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
								/>`
							}, {
								primaryVariants: 'content={Element}',
								quickLink: 'element',
								component: <CSTooltip content={<CSChip text="custom content" />} />,
								code: '<CSTooltip content={<CSChip text="custom content" />} />'
							}, {
								primaryVariants: 'content={() => Promise<CSTooltipContent>}',
								quickLink: 'promise',
								component: <CSTooltip
									content={() => (
										new Promise(resolve => {
											setTimeout(() => {
												resolve(<CSChip text="resolved" variant="brand" />);
											}, 2000);
										})
									)}
								/>,
								code: `<CSTooltip
									content={() => (
										new Promise(resolve => {
											setTimeout(() => {
												resolve(<CSChip text="resolved" variant="brand" />);
											}, 2000);
										})
									)}
								/>`
							}
						]
					}, {
						propName: 'delayTooltip',
						variations: [
							{
								primaryVariants: 'delayTooltip={500}',
								component: <CSTooltip content="Help text" delayTooltip={500} />,
								code: '<CSTooltip content="Help text" delayTooltip={500} />'
							}
						]
					}, {
						propName: 'focusable',
						variations: [
							{
								primaryVariants: 'focusable={false}',
								component: <CSTooltip content="Help text" focusable={false} />,
								code: '<CSTooltip content="Help text" focusable={false} />'
							}
						]
					}, {
						propName: 'height',
						variations: [
							{
								primaryVariants: 'height="100px"',
								quickLink: '100px',
								component: <CSTooltip
									content="Some very long help text that is supposed to span over more than one line"
									height="100px"
								/>,
								code: `<CSTooltip
									content="Some very long help text that is supposed to span over more than one line"
									height="100px"
								/>`
							}, {
								primaryVariants: 'height="auto"',
								quickLink: 'auto',
								component: <CSTooltip
									content="Some very long help text that is supposed to span over more than one line"
									height="auto"
								/>,
								code: `<CSTooltip
									content="Some very long help text that is supposed to span over more than one line"
									height="auto"
								/>`
							}
						]
					}, {
						propName: 'iconColor',
						variations: [
							{
								primaryVariants: 'iconColor="rgb(74, 38, 171)"',
								quickLink: 'rgb',
								component: <CSTooltip content="Help text" iconColor="rgb(74, 38, 171)" />,
								code: '<CSTooltip content="Help text" iconColor="rgb(74, 38, 171)" />'
							}, {
								primaryVariants: 'iconColor="#3cdbc0"',
								quickLink: 'hex',
								component: <CSTooltip content="Help text" iconColor="#3cdbc0" />,
								code: '<CSTooltip content="Help text" iconColor="#3cdbc0" />'
							}
						]
					}, {
						propName: 'iconName | iconOrigin',
						variations: [
							{
								primaryVariants: [
									'iconName="quote"',
									'iconOrigin="slds"'
								],
								quickLink: 'slds',
								component: <CSTooltip content="Help text" iconName="quote" />,
								code: '<CSTooltip content="Help text" iconName="quote" />'
							}, {
								primaryVariants: [
									'iconName="big_shot"',
									'iconOrigin="cs"'
								],
								quickLink: 'cs',
								component: <CSTooltip
									content="Help text"
									iconOrigin="cs"
									iconName="big_shot"
								/>,
								code: `<CSTooltip
									content="Help text"
									iconOrigin="cs"
									iconName="big_shot"
								/>`
							}
						]
					}, {
						propName: 'iconSize',
						description: 'Size of the tooltip icon',
						variations: [
							{
								primaryVariants: 'iconSize="small"',
								quickLink: 'small',
								component: <CSTooltip content="Help text example" />,
								code: '<CSTooltip content="Help text example" />'
							}, {
								primaryVariants: 'iconSize="medium"',
								quickLink: 'medium',
								component: <CSTooltip content="Help text example" iconSize="medium" />,
								code: '<CSTooltip content="Help text example" iconSize="medium" />'
							}
						]
					}, {
						propName: 'maxHeight',
						variations: [
							{
								primaryVariants: 'maxHeight="100px"',
								quickLink: '100px',
								secondaryVariants: 'maxWidth="100px"',
								component: <CSTooltip
									content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat porttitor enim ornare porta. Duis nibh orci, imperdiet in lectus consequat, tincidunt fringilla ante. Nullam varius eleifend sodales. Morbi at rhoncus mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat porttitor enim ornare porta. Duis nibh orci, imperdiet in lectus consequat, tincidunt fringilla ante. Nullam varius eleifend sodales. Morbi at rhoncus mi."
									maxHeight="100px"
									maxWidth="100px"
									stickyOnClick
								/>,
								code: `<CSTooltip
									content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat porttitor enim ornare porta. Duis nibh orci, imperdiet in lectus consequat, tincidunt fringilla ante. Nullam varius eleifend sodales. Morbi at rhoncus mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat porttitor enim ornare porta. Duis nibh orci, imperdiet in lectus consequat, tincidunt fringilla ante. Nullam varius eleifend sodales. Morbi at rhoncus mi."
									maxHeight="100px"
									maxWidth="100px"
								/>`
							}, {
								primaryVariants: 'maxHeight="4rem"',
								quickLink: '4rem',
								secondaryVariants: 'maxWidth="100px"',
								component: <CSTooltip
									content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat porttitor enim ornare porta. Duis nibh orci, imperdiet in lectus consequat, tincidunt fringilla ante. Nullam varius eleifend sodales. Morbi at rhoncus mi."
									maxHeight="4rem"
									maxWidth="100px"
								/>,
								code: `<CSTooltip
									content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat porttitor enim ornare porta. Duis nibh orci, imperdiet in lectus consequat, tincidunt fringilla ante. Nullam varius eleifend sodales. Morbi at rhoncus mi."
									maxHeight="4rem"
									maxWidth="100px"
								/>`
							}
						]
					}, {
						propName: 'maxWidth',
						variations: [
							{
								primaryVariants: 'maxWidth="300px"',
								quickLink: '300px',
								component: <CSTooltip
									content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
									maxWidth="300px"
								/>,
								code: `<CSTooltip
									content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
									maxWidth="300px"
								/>`
							}, {
								primaryVariants: 'maxWidth="10rem"',
								quickLink: '10rem',
								component: <CSTooltip
									maxWidth="10rem"
									content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat porttitor enim ornare porta. Duis nibh orci, imperdiet in lectus consequat, tincidunt fringilla ante. Nullam varius eleifend sodales. Morbi at rhoncus mi."
								/>,
								code: `<CSTooltip
									maxWidth="10rem"
									content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat porttitor enim ornare porta. Duis nibh orci, imperdiet in lectus consequat, tincidunt fringilla ante. Nullam varius eleifend sodales. Morbi at rhoncus mi."
								/>`
							}
						]
					}, {
						propName: 'padding',
						variations: [
							{
								primaryVariants: 'padding="0"',
								component: <CSTooltip content="Help text" padding="0" />,
								code: '<CSTooltip content="Help text" padding="0" />'
							}
						]
					}, {
						propName: 'position',
						alert: {
							variant: 'info',
							text: 'The provided position will be overridden if the tooltip is outside of viewport. This auto-position functionality is only working with stylePosition fixed for now.'
						},
						variations: [
							{
								primaryVariants: 'position="top-right"',
								quickLink: 'top-right',
								component: <CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
								/>,
								code: `<CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
								/>`
							}, {
								primaryVariants: 'position="top-left"',
								quickLink: 'top-left',
								component: <CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="top-left"
								/>,
								code: `<CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="top-left"
								/>`
							}, {
								primaryVariants: 'position="top-center"',
								quickLink: 'top-center',
								component: <CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="top-center"
								/>,
								code: `<CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="top-center"
								/>`
							}, {
								primaryVariants: 'position="bottom-right"',
								quickLink: 'bottom-right',
								component: <CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="bottom-right"
								/>,
								code: `<CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="bottom-right"
								/>`
							}, {
								primaryVariants: 'position="bottom-left"',
								quickLink: 'bottom-left',
								component: <CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="bottom-left"
								/>,
								code: `<CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="bottom-left"
								/>`
							}, {
								primaryVariants: 'position="bottom-center"',
								quickLink: 'bottom-center',
								component: <CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="bottom-center"
								/>,
								code: `<CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="bottom-center"
								/>`
							}, {
								primaryVariants: 'position="right-top"',
								quickLink: 'right-top',
								component: <CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="right-top"
								/>,
								code: `<CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="right-top"
								/>`
							}, {
								primaryVariants: 'position="right-bottom"',
								quickLink: 'right-bottom',
								component: <CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="right-bottom"
								/>,
								code: `<CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="right-bottom"
								/>`
							}, {
								primaryVariants: 'position="right-center"',
								quickLink: 'right-center',
								component: <CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="right-center"
								/>,
								code: `<CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="right-center"
								/>`
							}, {
								primaryVariants: 'position="left-top"',
								quickLink: 'left-top',
								component: <CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="left-top"
								/>,
								code: `<CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="left-top"
								/>`
							}, {
								primaryVariants: 'position="left-bottom"',
								quickLink: 'left-bottom',
								component: <CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="left-bottom"
								/>,
								code: `<CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="left-bottom"
								/>`
							}, {
								primaryVariants: 'position="left-center"',
								quickLink: 'left-center',
								component: <CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="left-center"
								/>,
								code: `<CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									position="left-center"
								/>`
							}
						]
					}, {
						propName: 'stickyOnClick',
						variations: [
							{
								primaryVariants: 'stickyOnClick={true}',
								component: <CSTooltip content="Help text" stickyOnClick />,
								code: '<CSTooltip content="Help text" stickyOnClick />'
							}
						]
					}, {
						propName: 'stylePosition',
						description: 'Choose the CSS position value of the tooltip.',
						variations: [
							{
								primaryVariants: 'stylePosition="fixed"',
								quickLink: 'fixed',
								component: <CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
								/>,
								code: `<CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
								/>`
							}, {
								primaryVariants: 'stylePosition="absolute"',
								quickLink: 'absolute',
								component: <CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									stylePosition="absolute"
								/>,
								code: `<CSTooltip
									content={[
										'Help text no. 1',
										'Help text no. 2',
										'Help text no. 3'
									]}
									stylePosition="absolute"
								/>`
							}
						]
					}, {
						propName: 'tooltipHeader',
						description: 'This is used for defining tooltip header. Its color will be defined by the variant prop.',
						variations: [
							{
								secondaryVariants: 'variant="info"',
								quickLink: 'info',
								component: <CSTooltip content="Help text" tooltipHeader="Info" />,
								code: '<CSTooltip content="Help text" tooltipHeader="Info" />'
							}, {
								secondaryVariants: 'variant="warning"',
								quickLink: 'warning',
								component: <CSTooltip
									content="Help text"
									tooltipHeader="Warning"
									variant="warning"
								/>,
								code: `<CSTooltip
									content="Help text"
									tooltipHeader="Warning"
									variant="warning"
								/>`
							}, {
								secondaryVariants: 'variant="error"',
								quickLink: 'error',
								component: <CSTooltip
									content="Help text"
									tooltipHeader="Error"
									variant="error"
								/>,
								code: `<CSTooltip
									content="Help text"
									tooltipHeader="Error"
									variant="error"
								/>`
							}, {
								secondaryVariants: 'variant="success"',
								quickLink: 'success',
								component: <CSTooltip
									content="Help text"
									tooltipHeader="Success"
									variant="success"
								/>,
								code: `<CSTooltip
									content="Help text"
									tooltipHeader="Success"
									variant="success"
								/>`
							}, {
								secondaryVariants: 'variant="basic"',
								quickLink: 'basic',
								component: <CSTooltip
									content="Help text"
									tooltipHeader="Basic"
									variant="basic"
								/>,
								code: `<CSTooltip
									content="Help text"
									tooltipHeader="Basic"
									variant="basic"
								/>`
							}
						]
					}, {
						propName: 'variant',
						variations: [
							{
								primaryVariants: 'variant="info"',
								quickLink: 'info',
								component: <CSTooltip content="Help text" />,
								code: '<CSTooltip content="Help text" />'
							}, {
								primaryVariants: 'variant="warning"',
								quickLink: 'warning',
								component: <CSTooltip content="Help text" variant="warning" />,
								code: '<CSTooltip content="Help text" variant="warning" />'
							}, {
								primaryVariants: 'variant="error"',
								quickLink: 'error',
								component: <CSTooltip content="Help text" variant="error" />,
								code: '<CSTooltip content="Help text" variant="error" />'
							}, {
								primaryVariants: 'variant="success"',
								quickLink: 'success',
								component: <CSTooltip content="Help text" variant="success" />,
								code: '<CSTooltip content="Help text" variant="success" />'
							}, {
								primaryVariants: 'variant="basic"',
								quickLink: 'basic',
								component: <CSTooltip content="Help text" variant="basic" />,
								code: '<CSTooltip content="Help text" variant="basic" />'
							}
						]
					}, {
						propName: 'width',
						variations: [
							{
								primaryVariants: 'width="5rem"',
								quickLink: '5rem',
								component: <CSTooltip
									content="Some very long help text that is supposed to span over more than one line"
									width="5rem"
								/>,
								code: `<CSTooltip
									content="Some very long help text that is supposed to span over more than one line"
									width="5rem"
								/>`
							}, {
								primaryVariants: 'width="auto"',
								quickLink: 'auto',
								component: <CSTooltip
									content="Some very long help text that is supposed to span over more than one line, but does not because of auto width"
									width="auto"
								/>,
								code: `<CSTooltip
									content="Some very long help text that is supposed to span over more than one line, but does not because of auto width"
									width="auto"
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
								component: <CSTooltip
									content="Help text"
									id="custom-id"
									className="custom-br-mint"
								/>,
								code: `<CSTooltip
									content="Help text"
									id="custom-id"
									className="custom-br-mint"
								/>`
							}
						]
					}, {
						propName: 'children',
						description: 'CSTooltip supports custom content provided as children. Children of CSTooltip override the default icon styling and the tooltip is applied directly to the child on hover.',
						variations: [
							{
								component: <CSTooltip content="Help text">
									<CSChip text="custom child" />
								</CSTooltip>,
								code: `<CSTooltip content="Help text">
									<CSChip text="custom child" />
								</CSTooltip>`
							}
						]
					}
				],
				properties: [
					{
						name: 'content',
						required: true,
						customTypes: {
							name: 'CSTooltipContent',
							types: [
								'string',
								'Array<string>',
								'Element'
							]
						},
						types: '() => Promise<CSTooltipContent>',
						description: 'Set the content of the tooltip.'
					}, {
						name: 'delayTooltip',
						types: 'number',
						description: 'Delay the tooltip becoming visible in ms.'
					}, {
						name: 'focusable',
						types: 'boolean',
						default: 'true',
						description: 'Determines whether the tooltip is keyboard focusable.'
					}, {
						name: 'height',
						types: 'string',
						description: 'Set the tooltip height. (eg. 100px, 10rem, etc.)'
					}, {
						name: 'iconColor',
						types: 'string',
						description: 'Set a custom color for the tooltip icon. (eg. pink, #ff0000, rgba(0, 0, 0, 0.2), etc.)'
					}, {
						name: 'iconName',
						types: 'string',
						description: 'Override the default icon defined by the variant.'
					}, {
						name: 'iconOrigin',
						customTypes: {
							name: 'CSTooltipIconOrigin',
							types: [`'slds'`, `'cs'`]
						},
						default: `'slds'`,
						description: 'Select whether the Salesforce or the CloudSense icon set should be used.'
					}, {
						name: 'iconSize',
						customTypes: {
							name: 'CSTooltipIconSize',
							types: [`'small'`, `'medium'`]
						},
						default: `'small'`,
						description: 'Set a size of the tooltip icon.'
					}, {
						name: 'maxHeight',
						types: 'string',
						description: 'Set the tooltip maximum height. (eg. 200px, 20rem, 50%, etc.)'
					}, {
						name: 'maxWidth',
						types: 'string',
						default: `'20rem'`,
						description: 'Set the tooltip maximum width. (eg. 200px, 20rem, 50%, etc.)'
					}, {
						name: 'padding',
						types: 'string',
						description: 'Set custom padding for the tooltip.'
					}, {
						name: 'position',
						customTypes: {
							name: 'CSTooltipPosition',
							types: [
								`'top-right'`,
								`'top-center'`,
								`'top-left'`,
								`'bottom-right'`,
								`'bottom-center'`,
								`'bottom-left'`,
								`'right-top'`,
								`'right-center'`,
								`'right-bottom'`,
								`'left-top'`,
								`'left-center'`,
								`'left-bottom'`
							]
						},
						default: `'top-right'`,
						description: 'Set the tooltip position.'
					}, {
						name: 'stickyOnClick',
						types: 'boolean',
						default: 'false',
						description: 'Set whether the tooltip stays open on click.'
					}, {
						name: 'stylePosition',
						customTypes: {
							name: 'CSTooltipStylePosition',
							types: [`'fixed'`, `'absolute'`]
						},
						default: `'fixed'`,
						description: 'Choose the CSS position value for the tooltip.'
					}, {
						name: 'tooltipHeader',
						types: 'string',
						description: 'Set the text content of the tooltip header.'
					}, {
						name: 'variant',
						customTypes: {
							name: 'CSTooltipVariant',
							types: [
								`'info'`,
								`'warning'`,
								`'error'`,
								`'success'`,
								`'basic'`
							]
						},
						default: `'info'`,
						description: 'Set the tooltip color variant.'
					}, {
						name: 'width',
						types: 'string',
						description: 'Set the tooltip width. (eg. 200px, 20rem, 50%, etc.)'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set the ID for the tooltip.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the tooltip.'
					}, {
						name: 'children',
						types: 'any',
						description: 'This component supports custom content passed as children.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the tooltip div wrapper.'
					}
				]
			}
		],
		accessibility: {
			criterionList: [
				'1.4.4',
				'1.4.13',
				'2.1.1',
				'2.1.2',
				'2.1.4',
				'2.4.7',
				'2.5.3',
				'3.2.1',
				'3.3.1',
				'4.1.2'
			],
			requirements: {
				structure: [
					'Icon as a child element with `aria-hidden`'
				],
				attributes: [
					'`aria-labelledby` - contains id pointing to tooltip body to associate tooltip icon with tooltip body',
					'`role="tooltip"`'
				],
				styling: [
					'Focus state styles',
					'Text color contrast ratio > 4.5'
				],
				keyboardOperability: [
					'Logic for tooltip to open on icon focus',
					'Logic for tooltip to to stay opened when hovered over',
					'Logic for tooltip to stay stickied and opened until clicked outside',
					'`Esc` - close tooltip'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSTooltipPreview;
