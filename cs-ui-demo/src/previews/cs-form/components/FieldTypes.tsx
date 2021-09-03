import React from 'react';
import { CSAlert } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class FieldTypes extends React.Component {
	handleClose = () => alert('Alert has been closed.');

	getDoc = () => ({
		name: 'Field Types',
		usage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		fieldTypes: [
			{
				name: 'Boolean',
				example: [
					{
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						previews: [
							{
								field: <CSAlert
									variant="info"
									text="This is an example info alert"
								/>,
								code: `<CSAlert
									variant="info"
									text="This is an example info alert"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'variant',
						required: true,
						customTypes: {
							name: 'CSAlertVariant',
							types: [
								`'info'`,
								`'warning'`,
								`'error'`,
								`'base'`
							]
						},
						description: 'Set the color and icon variant of the alert.'
					}, {
						name: 'closeButton',
						types: 'boolean',
						default: 'false',
						description: 'Show the close button.'
					}
				]
			},
			{
				name: 'Date',
				example: [
					{
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						previews: [
							{
								field: <CSAlert
									variant="info"
									text="This is an example info alert"
								/>,
								code: `<CSAlert
									variant="info"
									text="This is an example info alert"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'variant',
						required: true,
						customTypes: {
							name: 'CSAlertVariant',
							types: [
								`'info'`,
								`'warning'`,
								`'error'`,
								`'base'`
							]
						},
						description: 'Set the color and icon variant of the alert.'
					}, {
						name: 'closeButton',
						types: 'boolean',
						default: 'false',
						description: 'Show the close button.'
					}
				]
			},
			{
				name: 'Date Time',
				example: [
					{
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						previews: [
							{
								field: <CSAlert
									variant="info"
									text="This is an example info alert"
								/>,
								code: `<CSAlert
									variant="info"
									text="This is an example info alert"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'variant',
						required: true,
						customTypes: {
							name: 'CSAlertVariant',
							types: [
								`'info'`,
								`'warning'`,
								`'error'`,
								`'base'`
							]
						},
						description: 'Set the color and icon variant of the alert.'
					}, {
						name: 'closeButton',
						types: 'boolean',
						default: 'false',
						description: 'Show the close button.'
					}
				]
			},
			{
				name: 'Form',
				example: [
					{
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						previews: [
							{
								field: <CSAlert
									variant="info"
									text="This is an example info alert"
								/>,
								code: `<CSAlert
									variant="info"
									text="This is an example info alert"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'variant',
						required: true,
						customTypes: {
							name: 'CSAlertVariant',
							types: [
								`'info'`,
								`'warning'`,
								`'error'`,
								`'base'`
							]
						},
						description: 'Set the color and icon variant of the alert.'
					}, {
						name: 'closeButton',
						types: 'boolean',
						default: 'false',
						description: 'Show the close button.'
					}
				]
			},
			{
				name: 'Number',
				example: [
					{
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						previews: [
							{
								field: <CSAlert
									variant="info"
									text="This is an example info alert"
								/>,
								code: `<CSAlert
									variant="info"
									text="This is an example info alert"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'variant',
						required: true,
						customTypes: {
							name: 'CSAlertVariant',
							types: [
								`'info'`,
								`'warning'`,
								`'error'`,
								`'base'`
							]
						},
						description: 'Set the color and icon variant of the alert.'
					}, {
						name: 'closeButton',
						types: 'boolean',
						default: 'false',
						description: 'Show the close button.'
					}
				]
			},
			{
				name: 'Reference',
				example: [
					{
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						previews: [
							{
								field: <CSAlert
									variant="info"
									text="This is an example info alert"
								/>,
								code: `<CSAlert
									variant="info"
									text="This is an example info alert"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'variant',
						required: true,
						customTypes: {
							name: 'CSAlertVariant',
							types: [
								`'info'`,
								`'warning'`,
								`'error'`,
								`'base'`
							]
						},
						description: 'Set the color and icon variant of the alert.'
					}, {
						name: 'closeButton',
						types: 'boolean',
						default: 'false',
						description: 'Show the close button.'
					}
				]
			},
			{
				name: 'Select',
				example: [
					{
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						previews: [
							{
								field: <CSAlert
									variant="info"
									text="This is an example info alert"
								/>,
								code: `<CSAlert
									variant="info"
									text="This is an example info alert"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'variant',
						required: true,
						customTypes: {
							name: 'CSAlertVariant',
							types: [
								`'info'`,
								`'warning'`,
								`'error'`,
								`'base'`
							]
						},
						description: 'Set the color and icon variant of the alert.'
					}, {
						name: 'closeButton',
						types: 'boolean',
						default: 'false',
						description: 'Show the close button.'
					}
				]
			},
			{
				name: 'Select Container',
				example: [
					{
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						previews: [
							{
								field: <CSAlert
									variant="info"
									text="This is an example info alert"
								/>,
								code: `<CSAlert
									variant="info"
									text="This is an example info alert"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'variant',
						required: true,
						customTypes: {
							name: 'CSAlertVariant',
							types: [
								`'info'`,
								`'warning'`,
								`'error'`,
								`'base'`
							]
						},
						description: 'Set the color and icon variant of the alert.'
					}, {
						name: 'closeButton',
						types: 'boolean',
						default: 'false',
						description: 'Show the close button.'
					}
				]
			},
			{
				name: 'Simple',
				example: [
					{
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						previews: [
							{
								field: <CSAlert
									variant="info"
									text="This is an example info alert"
								/>,
								code: `<CSAlert
									variant="info"
									text="This is an example info alert"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'variant',
						required: true,
						customTypes: {
							name: 'CSAlertVariant',
							types: [
								`'info'`,
								`'warning'`,
								`'error'`,
								`'base'`
							]
						},
						description: 'Set the color and icon variant of the alert.'
					}, {
						name: 'closeButton',
						types: 'boolean',
						default: 'false',
						description: 'Show the close button.'
					}
				]
			}
		]
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default FieldTypes;
