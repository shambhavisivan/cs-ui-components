import React from 'react';
import { CSDataTable, CSIcon, CSChip, CSDataTableRowInterface, CSButton } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

const columns = [
	{
		key: 'name',
		header: 'Name'
	}, {
		key: 'surname',
		header: 'Surname'
	}, {
		key: 'birthday',
		header: 'Birthday'
	}, {
		key: 'location',
		header: 'Location'
	}
];

const rows = [
	{
		key: 0,
		data: {
			name: 'Nikol',
			surname: 'Badanjak',
			birthday: '8th December',
			location: 'Zagreb'
		}
	}, {
		key: 1,
		data: {
			name: 'Leon',
			surname: 'Španić',
			birthday: '15th July',
			location: 'Zagreb'
		}
	}, {
		key: 2,
		data: {
			name: 'Karlo',
			surname: 'Šeler',
			birthday: '27th October',
			location: 'Zagreb'
		}
	}, {
		key: 3,
		data: {
			name: 'Simon',
			surname: 'East',
			birthday: '20th December',
			location: 'Leeds'
		}
	}, {
		key: 4,
		data: {
			name: 'Joe',
			surname: 'Consterdine',
			birthday: '20th September',
			location: 'Leeds'
		}
	}, {
		key: 5,
		data: {
			name: 'Danijel',
			surname: 'Bošnjak',
			birthday: '20th August',
			location: 'Zagreb'
		}
	}, {
		key: 6,
		data: {
			name: 'Dario',
			surname: 'Šehović',
			birthday: '11th October',
			location: 'Zagreb'
		}
	}, {
		key: 7,
		data: {
			name: 'Dominik',
			surname: 'Kralj',
			birthday: '11th July',
			location: 'Zagreb'
		}
	}, {
		key: 8,
		data: {
			name: 'Sathya',
			surname: 'Somasundaram',
			birthday: '28th May',
			location: 'Chennai'
		}
	}
];

class CSDataTablePreview extends React.Component {
	getDoc = () => ({
		name: 'Data Table',
		usage: 'A table displays rows of data.',
		accessible: 'yes',
		alerts: {
			variant: 'warning',
			text: 'This component is under construction and should not be used.'
		},
		components: [
			{
				name: 'CSDataTable',
				examples: [
					{
						propName: 'borderless',
						variations: [
							{
								primaryVariants: 'borderless={true}',
								component: <CSDataTable
									columns={columns}
									rows={rows}
									borderless
								/>,
								code: `<CSDataTable
									columns={columns}
									rows={rows}
									borderless
								/>`
							}
						]
					}, {
						propName: 'columnDividers',
						variations: [
							{
								primaryVariants: 'columnDividers={true}',
								component: <CSDataTable
									columns={columns}
									rows={rows}
									columnDividers
								/>,
								code: `<CSDataTable
									columns={columns}
									rows={rows}
									columnDividers
								/>`
							}
						]
					}, {
						propName: 'density',
						variations: [
							{
								quickLink: 'compact',
								primaryVariants: 'density="compact"',
								component: <CSDataTable columns={columns} rows={rows} />,
								code: '<CSDataTable columns={columns} rows={rows} />'
							}, {
								quickLink: 'comfortable',
								primaryVariants: 'density="comfortable"',
								component: <CSDataTable
									columns={columns}
									rows={rows}
									density="comfortable"
								/>,
								code: `<CSDataTable
									columns={columns}
									rows={rows}
									density="comfortable"
								/>`
							}, {
								quickLink: 'spacious',
								primaryVariants: 'density="spacious"',
								component: <CSDataTable
									columns={columns}
									rows={rows}
									density="spacious"
								/>,
								code: `<CSDataTable
									columns={columns}
									rows={rows}
									density="spacious"
								/>`
							}
						]
					}, {
						propName: 'disableHover',
						variations: [
							{
								primaryVariants: 'disableHover={true}',
								component: <CSDataTable
									columns={columns}
									rows={rows}
									disableHover
								/>,
								code: `<CSDataTable
									columns={columns}
									rows={rows}
									disableHover
								/>`
							}
						]
					}, {
						propName: 'headless',
						variations: [
							{
								primaryVariants: 'headless={true}',
								component: <CSDataTable
									columns={columns}
									rows={rows}
									headless
								/>,
								code: `<CSDataTable
									columns={columns}
									rows={rows}
									headless
								/>`
							}
						]
					}, {
						propName: 'maxHeight',
						variations: [
							{
								primaryVariants: 'maxHeight="120px"',
								component: <CSDataTable
									columns={columns}
									rows={rows}
									maxHeight="120px"
								/>,
								code: `<CSDataTable
									columns={columns}
									rows={rows}
									maxHeight="120px"
								/>`
							}
						]
					}, {
						propName: 'rowHeight',
						variations: [
							{
								primaryVariants: 'rowHeight="3rem"',
								component: <CSDataTable
									columns={columns}
									rows={rows}
									rowHeight="3rem"
								/>,
								code: `<CSDataTable
									columns={columns}
									rows={rows}
									rowHeight="3rem"
								/>`
							}
						]
					}, {
						propName: 'stickyHeader',
						variations: [
							{
								primaryVariants: 'stickyHeader={true}',
								secondaryVariants: 'maxHeight="120px"',
								component: <CSDataTable
									columns={columns}
									rows={rows}
									stickyHeader
									maxHeight="120px"
								/>,
								code: `<CSDataTable
									columns={columns}
									rows={rows}
									stickyHeader
									maxHeight="120px"
								/>`
							}
						]
					}, {
						propName: 'striped',
						variations: [
							{
								primaryVariants: 'striped={true}',
								component: <CSDataTable
									columns={columns}
									rows={rows}
									striped
								/>,
								code: `<CSDataTable
									columns={columns}
									rows={rows}
									striped
								/>`
							}
						]
					}, {
						propName: 'id | class',
						variations: [
							{
								primaryVariants: [
									'id="custom-id"',
									`id: 'custom-id'`,
									'className="custom-class"',
									`className: 'custom-class'`
								],
								component: <CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name',
											id: 'custom-header-cell-id',
											className: 'custom-bg-mint'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={[
										{
											key: 0,
											data: {
												name: 'Nikol',
												surname: 'Badanjak',
												birthday: '8th December',
												location: 'Zagreb'
											}
										}, {
											key: 1,
											data: {
												name: 'Leon',
												surname: 'Španić',
												birthday: '15th July',
												location: 'Zagreb'
											}
										}, {
											key: 2,
											data: {
												name: 'Karlo',
												surname: 'Šeler',
												birthday: '27th October',
												location: 'Zagreb'
											}
										}, {
											key: 3,
											data: {
												name: 'Simon',
												surname: 'East',
												birthday: '20th December',
												location: 'Leeds'
											}
										}, {
											key: 4,
											data: {
												name: 'Joe',
												surname: 'Consterdine',
												birthday: '20th September',
												location: 'Leeds'
											}
										}, {
											key: 5,
											data: {
												name: 'Danijel',
												surname: 'Bošnjak',
												birthday: '20th August',
												location: 'Zagreb'
											}
										}, {
											key: 6,
											id: 'custom-row-id',
											className: 'custom-bg-mint',
											data: {
												name: 'Dario',
												surname: 'Šehović',
												birthday: '11th October',
												location: 'Zagreb'
											}
										}, {
											key: 7,
											data: {
												name: 'Dominik',
												surname: 'Kralj',
												birthday: '11th July',
												location: 'Zagreb'
											}
										}, {
											key: 8,
											data: {
												name: 'Sathya',
												surname: 'Somasundaram',
												birthday: '28th May',
												location: 'Chennai'
											}
										}
									]}
									id="custom-table-id"
									className="custom-br-purple"
								/>,
								code: `<CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name',
											id: 'custom-header-cell-id',
											className: 'custom-bg-mint'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={[
										{
											key: 0,
											data: {
												name: 'Nikol',
												surname: 'Badanjak',
												birthday: '8th December',
												location: 'Zagreb'
											}
										}, {
											key: 1,
											data: {
												name: 'Leon',
												surname: 'Španić',
												birthday: '15th July',
												location: 'Zagreb'
											}
										}, {
											key: 2,
											data: {
												name: 'Karlo',
												surname: 'Šeler',
												birthday: '27th October',
												location: 'Zagreb'
											}
										}, {
											key: 3,
											data: {
												name: 'Simon',
												surname: 'East',
												birthday: '20th December',
												location: 'Leeds'
											}
										}, {
											key: 4,
											data: {
												name: 'Joe',
												surname: 'Consterdine',
												birthday: '20th September',
												location: 'Leeds'
											}
										}, {
											key: 5,
											data: {
												name: 'Danijel',
												surname: 'Bošnjak',
												birthday: '20th August',
												location: 'Zagreb'
											}
										}, {
											key: 6,
											id: 'custom-row-id',
											className: 'custom-bg-mint',
											data: {
												name: 'Dario',
												surname: 'Šehović',
												birthday: '11th October',
												location: 'Zagreb'
											}
										}, {
											key: 7,
											data: {
												name: 'Dominik',
												surname: 'Kralj',
												birthday: '11th July',
												location: 'Zagreb'
											}
										}, {
											key: 8,
											data: {
												name: 'Sathya',
												surname: 'Somasundaram',
												birthday: '28th May',
												location: 'Chennai'
											}
										}
									]}
									id="custom-table-id"
									className="custom-br-purple"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'column',
						customTypes: {
							name: 'Array<CSDataTableColumn>',
							types: 'See CSDataTable Column Attributes'
						},
						description: 'Define table columns. See CSDataTable Column Attributes for details.'
					}, {
						name: 'row',
						types: 'boolean',
						description: 'Define table rows. See CSDataTable Row Attributes for details.'
					}, {
						name: 'borderless',
						types: 'boolean',
						default: 'false',
						description: 'Remove row dividers.'
					}, {
						name: 'columnDividers',
						types: 'boolean',
						default: 'false',
						description: 'Show column dividers.'
					}, {
						name: 'disableHover',
						types: 'boolean',
						default: 'false',
						description: 'Disable hover styles and transitions.'
					}, {
						name: 'density',
						customTypes: {
							name: 'CSDataTableDensity',
							types: [`'compact'`, `'comfortable'`, `'spacious'`]
						},
						default: `'compact'`,
						description: 'Set the spacing level between the data and the edges of a cell.'
					}, {
						name: 'headless',
						types: 'boolean',
						default: 'false',
						description: 'Remove the table header.'
					}, {
						name: 'maxHeight',
						types: 'string',
						description: 'Set the max-height property for the table.'
					}, {
						name: 'rowHeight',
						types: 'string',
						description: 'Set a custom row height. Individual rows are able to override this setting.'
					}, {
						name: 'striped',
						types: 'boolean',
						default: 'false',
						description: 'Alternate backgrounds between odd and even rows.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set an ID for the table.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the table.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the props to the table.'
					}
				]
			}, {
				name: 'CSDataTable Column',
				attributes: true,
				examples: [
					{
						propName: 'key',
						variations: [
							{
								primaryVariants: `key: 'location'`,
								secondaryVariants: `rows={[{ location: 'Zagreb' }]}`,
								component: <CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={rows}
								/>,
								code: `<CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={rows}
								/>`
							}
						]
					}, {
						propName: 'align',
						variations: [
							{
								quickLink: 'left',
								primaryVariants: `align: 'left'`,
								component: <CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={rows}
								/>,
								code: `<CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={rows}
								/>`
							}, {
								quickLink: 'center',
								primaryVariants: `align: 'center'`,
								component: <CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location',
											align: 'center'
										}
									]}
									rows={rows}
								/>,
								code: `<CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location',
											align: 'center'
										}
									]}
									rows={rows}
								/>`
							}, {
								quickLink: 'right',
								primaryVariants: `align: 'right'`,
								component: <CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location',
											align: 'right'
										}
									]}
									rows={rows}
								/>,
								code: `<CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location',
											align: 'right'
										}
									]}
									rows={rows}
								/>`
							}
						]
					}, {
						propName: 'cellClassName',
						variations: [
							{
								quickLink: 'string',
								primaryVariants: `cellClassName: 'custom-bg-mint'`,
								component: <CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name',
											cellClassName: 'custom-bg-mint'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={rows}
								/>,
								code: `<CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name',
											cellClassName: 'custom-bg-mint'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={rows}
								/>`
							}, {
								quickLink: 'function',
								primaryVariants: '(row) => string',
								component: <CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location',
											cellClassName: (row: CSDataTableRowInterface) => (
												row.data?.location === 'Zagreb' ? 'custom-bg-mint' : ''
											)
										}
									]}
									rows={rows}
								/>,
								code: `<CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location',
											cellClassName: (row: CSDataTableRowInterface) => (
											    row.data?.location === 'Zagreb' ? 'custom-bg-mint' : ''
											)
										}
									]}
									rows={rows}
								/>`
							}
						]
					}, {
						propName: 'columnClassName',
						variations: [
							{
								primaryVariants: `columnClassName: 'custom-bg-mint'`,
								component: <CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name',
											columnClassName: 'custom-bg-mint'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={rows}
								/>,
								code: `<CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name',
											columnClassName: 'custom-bg-mint'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={rows}
								/>`
							}
						]
					}, {
						propName: 'grow',
						variations: [
							{
								primaryVariants: 'grow: 3',
								component: <CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name',
											grow: 3
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={rows}
								/>,
								code: `<CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name',
											grow: 3
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={rows}
								/>`
							}
						]
					}, {
						propName: 'render',
						variations: [
							{
								primaryVariants: 'render: (row) => <CSChip text={row.data?.location} />',
								component: <CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location',
											render: (row: CSDataTableRowInterface) => <CSChip text={row.data?.location} />
										}
									]}
									rows={rows}
								/>,
								code: `<CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location',
											render: (row: CSDataTableRowInterface) => <CSChip text={row.data?.location} />
										}
									]}
									rows={rows}
								/>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								quickLink: 'string',
								primaryVariants: `header: 'Location'`,
								component: <CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={rows}
								/>,
								code: `<CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={rows}
								/>`
							}, {
								quickLink: 'Element',
								primaryVariants: `header: <CSIcon name="date_input" />`,
								component: <CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: <CSIcon name="date_input" />
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={rows}
								/>,
								code: `<CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: <CSIcon name="date_input" />
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={rows}
								/>`
							}
						]
					}, {
						propName: 'width',
						variations: [
							{
								primaryVariants: `width: '320px'`,
								component: <CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name',
											width: '320px'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={rows}
								/>,
								code: `<CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name',
											width: '320px'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday'
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={rows}
								/>`
							}
						]
					}, {
						propName: 'wrap',
						variations: [
							{
								primaryVariants: `wrap: true`,
								component: <CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday',
											wrap: true
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={rows}
								/>,
								code: `<CSDataTable
									columns={[
										{
											key: 'name',
											header: 'Name'
										}, {
											key: 'surname',
											header: 'Surname'
										}, {
											key: 'birthday',
											header: 'Birthday',
											wrap: true
										}, {
											key: 'location',
											header: 'Location'
										}
									]}
									rows={rows}
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'key',
						required: true,
						types: 'string',
						description: 'Define which key inside the row data object should be used to display cell data inside the column.'
					}, {
						name: 'align',
						default: `'left'`,
						customTypes: {
							name: 'CSDataTableColumnAlign',
							types: [`'left'`, `'center`, `'right'`]
						},
						description: 'Set a custom class for all the body cells inside a column or provide a function which applies classes to cells inside a column dynamically.'
					}, {
						name: 'cellClassName',
						customTypes: {
							name: 'CSDataTableCellClassName',
							types: ['string', '(row: CSDataTableRow) => string']
						},
						description: 'Set a custom class for all the body cells inside a column or provide a function which applies classes to cells inside a column dynamically.'
					}, {
						name: 'columnClassName',
						types: 'string',
						description: 'Set a custom class for all the header and body cells inside a column.'
					}, {
						name: 'grow',
						default: '1',
						types: 'number',
						description: 'Set the flex-grow attribute for a column.'
					}, {
						name: 'render',
						types: '(row: CSDataTableRow) => CSDataTableCell',
						description: 'Render custom content inside a cell.'
					}, {
						name: 'title',
						customTypes: {
							name: 'CSDataTableCell',
							types: ['React.ReactElement', 'React.ReactText']
						},
						description: 'Set the header title.'
					}, {
						name: 'width',
						types: 'string',
						description: 'Define column width. This overrides the grow attribute.'
					}, {
						name: 'wrap',
						default: 'false',
						types: 'boolean',
						description: 'Enable cell content wrapping and disable ellipses.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set an ID for the table header cell.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the table header cell.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the attributes to the table header cell.'
					}
				]
			}, {
				name: 'CSDataTable Row',
				attributes: true,
				examples: [
					{
						propName: 'data',
						variations: [
							{
								primaryVariants: `data: { location: 'Zagreb' }`,
								secondaryVariants: `columns={[{ key: 'location' }]}`,
								component: <CSDataTable columns={columns} rows={rows} />,

								code: `<CSDataTable
									columns={columns}
									rows={[
										{
											key: 0,
											data: {
												name: 'Nikol',
												surname: 'Badanjak',
												birthday: '8th December',
												location: 'Zagreb'
											}
										}, {
											key: 1,
											data: {
												name: 'Leon',
												surname: 'Španić',
												birthday: '15th July',
												location: 'Zagreb'
											}
										}, {
											key: 2,
											data: {
												name: 'Karlo',
												surname: 'Šeler',
												birthday: '27th October',
												location: 'Zagreb'
											}
										}, {
											key: 3,
											data: {
												name: 'Simon',
												surname: 'East',
												birthday: '20th December',
												location: 'Leeds'
											}
										}, {
											key: 4,
											data: {
												name: 'Joe',
												surname: 'Consterdine',
												birthday: '20th September',
												location: 'Leeds'
											}
										}, {
											key: 5,
											data: {
												name: 'Danijel',
												surname: 'Bošnjak',
												birthday: '20th August',
												location: 'Zagreb'
											}
										}, {
											key: 6,
											data: {
												name: 'Dario',
												surname: 'Šehović',
												birthday: '11th October',
												location: 'Zagreb'
											}
										}, {
											key: 7,
											data: {
												name: 'Dominik',
												surname: 'Kralj',
												birthday: '11th July',
												location: 'Zagreb'
											}
										}, {
											key: 8,
											data: {
												name: 'Sathya',
												surname: 'Somasundaram',
												birthday: '28th May',
												location: 'Chennai'
											}
										}
									]}
								/>`
							}
						]
					}, {
						propName: 'height',
						variations: [
							{
								primaryVariants: `height: '3rem'`,
								component: <CSDataTable
									columns={columns}
									rows={[
										{
											key: 0,
											collapsible: false,
											defaultCollapsed: true,
											data: {
												name: 'Nikol',
												surname: 'Badanjak',
												birthday: '8th December',
												location: 'Zagreb'
											},
											render: (row: CSDataTableRowInterface) => (
												<>
													This is actually <CSChip text={row.data?.name} /> even though we're in a custom full width row. <CSButton onClick={row.meta.toggleExpanded} label="Toggle" />
												</>
											),
											children: [{
												key: 1,
												data: {
													name: 'Leon',
													surname: 'Španić',
													birthday: '15th July',
													location: 'Zagreb'
												}
											}, {
												key: 2,
												data: {
													name: 'Karlo',
													surname: 'Šeler',
													birthday: '27th October',
													location: 'Zagreb'
												}
											}, {
												key: 3,
												data: {
													name: 'Simon',
													surname: 'East',
													birthday: '20th December',
													location: 'Leeds'
												}
											}, {
												key: 4,
												collapsible: true,
												data: {
													name: 'Joe',
													surname: 'Consterdine',
													birthday: '20th September',
													location: 'Leeds'
												},
												children: [{
													key: 5,
													data: {
														name: 'Danijel',
														surname: 'Bošnjak',
														birthday: '20th August',
														location: 'Zagreb'
													}
												}, {
													key: 8,
													data: {
														name: 'Sathya',
														surname: 'Somasundaram',
														birthday: '28th May',
														location: 'Chennai'
													}
												}, {
													key: 9,
													render: () => 'students',
													collapsible: true,
													children: [{
														key: 6,
														data: {
															name: 'Dario',
															surname: 'Šehović',
															birthday: '11th October',
															location: 'Zagreb'
														}
													}, {
														key: 7,
														data: {
															name: 'Dominik',
															surname: 'Kralj',
															birthday: '11th July',
															location: 'Zagreb'
														}
													}, {
														key: 10,
														render: () => (
															<CSChip text="this is a full width row with custom content" />
														)
													}]
												}, {
													key: 11,
													render: () => (
														<CSChip text="this is a full width row with custom content" />
													)
												}, {
													key: 12,
													render: () => (
														<CSChip text="this is a full width row with custom content" />
													)
												}]
											}]
										}
									]}
								/>,
								code: `<CSDataTable
									columns={columns}
									rows={[
										{
											key: 0,
											height: '3rem',
											data: {
												name: 'Nikol',
												surname: 'Badanjak',
												birthday: '8th December',
												location: 'Zagreb'
											}
										}, {
											key: 1,
											data: {
												name: 'Leon',
												surname: 'Španić',
												birthday: '15th July',
												location: 'Zagreb'
											}
										}, {
											key: 2,
											data: {
												name: 'Karlo',
												surname: 'Šeler',
												birthday: '27th October',
												location: 'Zagreb'
											}
										}, {
											key: 3,
											data: {
												name: 'Simon',
												surname: 'East',
												birthday: '20th December',
												location: 'Leeds'
											}
										}, {
											key: 4,
											data: {
												name: 'Joe',
												surname: 'Consterdine',
												birthday: '20th September',
												location: 'Leeds',
											}
											children: [{
												key: 5,
												data: {
													name: 'Danijel',
													surname: 'Bošnjak',
													birthday: '20th August',
													location: 'Zagreb'
												}
											}, {
												key: 6,
												data: {
													name: 'Dario',
													surname: 'Šehović',
													birthday: '11th October',
													location: 'Zagreb'
												}
											}, {
												key: 7,
												data: {
													name: 'Dominik',
													surname: 'Kralj',
													birthday: '11th July',
													location: 'Zagreb'
												}
											}, {
												key: 8,
												data: {
													name: 'Sathya',
													surname: 'Somasundaram',
													birthday: '28th May',
													location: 'Chennai'
												}
											}]
										}
									]}
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'key',
						required: true,
						types: 'React.ReactText',
						description: 'Unique row identifier.'
					}, {
						name: 'children',
						types: 'Array<CSDataTableRow>',
						description: 'Set hierarchically subordinate rows of the current row. This structure renders recursively and can be repeated indefinitely.'
					}, {
						name: 'data',
						customTypes: {
							name: 'CSDataTableRowData',
							types: '{ [key: string]: any }'
						},
						description: 'Object of cell data where the column key corresponds to the cell attribute name.'
					}, {
						name: 'height',
						types: 'string',
						description: 'Define row height. This overrides the global rowHeight property.'
					}, {
						name: 'id',
						types: 'string',
						description: 'Set an ID for the table row.'
					}, {
						name: 'className',
						types: 'string',
						description: 'Apply custom CSS classes to the table row.'
					}, {
						name: '[key: string]',
						types: 'any',
						description: 'Spreads the rest of the attributes to the table row.'
					}
				]
			}
		],
		accessibility: {
			criterionList: [
				'1.4.4',
				'2.1.1',
				'2.1.2',
				'4.1.2'
			],
			requirements: {
				structure: [
					'`<table>` - root element',
					'`<thead>` - header wrapper element',
					'`<th>` - header cell element',
					'`<tbody>` - body/content wrapper element',
					'`<tr>` - row wrapper element',
					'`<td>` - body/content cell element'
				],
				attributes: [
					'`scope="col"` - applied to all table header cells',
					'`scope="row"` - applied to first cell of a row without a control, dropdown or checkbox'
				],
				styling: [
					'Color contrast ratio > 4.5'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSDataTablePreview;
