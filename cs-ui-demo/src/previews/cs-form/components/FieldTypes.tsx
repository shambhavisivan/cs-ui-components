import React from 'react';
import { CSAlert } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';
import { CSForm, CSFormData } from 'cs-form-v2';

interface State {
	data: CSFormData;
}

class FieldTypes extends React.Component<{}, State> {
	data: CSFormData = [
		{
			sectionKey: '1',
			label: 'section',
			collapsible: true,
			fields: [{
				fieldType: 'NUMBER',
				label: 'label',
				max: 9,
				min: 1,
				value: 1,
				required: true,
				name: 'number 1'
			}, {
				fieldType: 'NUMBER',
				label: 'label',
				max: 9,
				min: 1,
				value: 2,
				name: 'number 11'
			}, {
				fieldType: 'NUMBER',
				label: 'label',
				max: 9,
				min: 1,
				value: 2,
				name: 'number 2'
			}, {
				fieldType: 'NUMBER',
				label: 'label',
				max: 9,
				min: 1,
				value: 2,
				name: 'number 3'
			}, {
				fieldType: 'NUMBER',
				label: 'label',
				max: 9,
				min: 1,
				name: 'number 4'
			}, {
				fieldType: 'NUMBER',
				label: 'label',
				max: 9,
				name: 'number 5'
			}]
		},
		{
			sectionKey: '2',
			label: 'section',
			collapsible: true,
			fields: [{
				fieldType: 'NUMBER',
				label: 'label',
				max: 9,
				min: 1,
				name: 'number 2-1',
				required: true
			}, {
				fieldType: 'NUMBER',
				label: 'label',
				max: 9,
				min: 1,
				showInNewLine: true,
				name: 'number 2-2'
			}, {
				fieldType: 'NUMBER',
				label: 'label',
				max: 9,
				min: 1,
				name: 'number 2-3'
			}, {
				fieldType: 'NUMBER',
				label: 'label',
				max: 9,
				min: 1,
				grow: 2,
				name: 'number 2-4'
			}, {
				fieldType: 'NUMBER',
				label: 'label',
				max: 9,
				min: 1,
				grow: 3,
				name: 'number 2-5'
			}, {
				fieldType: 'LOOKUP',
				label: 'label',
				mode: 'client',
				lookupColumns: [{ key: 'Account', label: 'Account' },
				{ key: 'Industry', label: 'Industry' }],
				lookupOptions: [{ Id: 1, Account: 'Acme', Industry: 'Manufacturing' },
				{ Id: 2, Account: 'Global Media', Industry: 'Industry' },
				{ Id: 3, Account: 'Salesforce', Industry: 'Software' },
				{ Id: 4, Account: 'Elisa', Industry: 'Telecommunications' },
				{ Id: 5, Account: 'Facebook', Industry: 'Social media' },
				{ Id: 6, Account: 'Google', Industry: 'Technology' }],
				fieldToBeDisplayed: 'Account',
				name: 'lookup'

			}]
		}
	];

	state = {
		data: this.data
	};

	handleClose = () => alert('Alert has been closed.');

	getDoc = () => ({
		name: 'Field Types',
		usage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		fieldTypes: [
			{
				name: 'Test',
				example: [
					{
						description: 'test',
						previews: [
							{
								field: <CSForm data={this.state.data} />,
								code: '<CSForm data={this.data} />'
							}
						]
					}
				], properties: [
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
