import React from 'react';
import { CSTableAlpha, CSIcon, CSChip, CSTableAlphaRow } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

const columns = [
	{
		key: 'name',
		title: 'Name'
	}, {
		key: 'surname',
		title: 'Surname'
	}, {
		key: 'birthday',
		title: 'Birthday'
	}, {
		key: 'location',
		title: 'Location'
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

class CSTableAlphaPreview extends React.Component {
	getDoc = () => ({
		name: 'Table Alpha',
		usage: 'A table displays rows of data.',
		accessible: 'yes',
		alerts: {
			variant: 'warning',
			text: 'This component is under construction and should not be used.'
		},
		components: [
			{
				name: 'CSTableAlpha',
				examples: [
					{
						propName: 'borderless',
						variations: [
							{
								primaryVariants: 'borderless={true}',
								component: <CSTableAlpha
									columns={columns}
									rows={rows}
									borderless
								/>,
								code: `<CSTableAlpha
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
								component: <CSTableAlpha
									columns={columns}
									rows={rows}
									columnDividers
								/>,
								code: `<CSTableAlpha
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
								component: <CSTableAlpha columns={columns} rows={rows} />,
								code: '<CSTableAlpha columns={columns} rows={rows} />'
							}, {
								quickLink: 'comfortable',
								primaryVariants: 'density="comfortable"',
								component: <CSTableAlpha
									columns={columns}
									rows={rows}
									density="comfortable"
								/>,
								code: `<CSTableAlpha
									columns={columns}
									rows={rows}
									density="comfortable"
								/>`
							}, {
								quickLink: 'spacious',
								primaryVariants: 'density="spacious"',
								component: <CSTableAlpha
									columns={columns}
									rows={rows}
									density="spacious"
								/>,
								code: `<CSTableAlpha
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
								component: <CSTableAlpha
									columns={columns}
									rows={rows}
									disableHover
								/>,
								code: `<CSTableAlpha
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
								component: <CSTableAlpha
									columns={columns}
									rows={rows}
									headless
								/>,
								code: `<CSTableAlpha
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
								component: <CSTableAlpha
									columns={columns}
									rows={rows}
									maxHeight="120px"
								/>,
								code: `<CSTableAlpha
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
								component: <CSTableAlpha
									columns={columns}
									rows={rows}
									rowHeight="3rem"
								/>,
								code: `<CSTableAlpha
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
								component: <CSTableAlpha
									columns={columns}
									rows={rows}
									stickyHeader
									maxHeight="120px"
								/>,
								code: `<CSTableAlpha
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
								component: <CSTableAlpha
									columns={columns}
									rows={rows}
									striped
								/>,
								code: `<CSTableAlpha
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
								component: <CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name',
											id: 'custom-header-cell-id',
											className: 'custom-bg-mint'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location'
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
								code: `<CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name',
											id: 'custom-header-cell-id',
											className: 'custom-bg-mint'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location'
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
							name: 'Array<CSTableAlphaColumn>',
							types: 'See CSTableAlpha Column Attributes'
						},
						description: 'Define table columns. See CSTableAlpha Column Attributes for details.'
					}, {
						name: 'row',
						types: 'boolean',
						description: 'Define table rows. See CSTableAlpha Row Attributes for details.'
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
							name: 'CSTableAlphaDensity',
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
				name: 'CSTableAlpha Column',
				attributes: true,
				examples: [
					{
						propName: 'key',
						variations: [
							{
								primaryVariants: `key: 'location'`,
								secondaryVariants: `rows={[{ location: 'Zagreb' }]}`,
								component: <CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location'
										}
									]}
									rows={rows}
								/>,
								code: `<CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location'
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
								component: <CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location'
										}
									]}
									rows={rows}
								/>,
								code: `<CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location'
										}
									]}
									rows={rows}
								/>`
							}, {
								quickLink: 'center',
								primaryVariants: `align: 'center'`,
								component: <CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location',
											align: 'center'
										}
									]}
									rows={rows}
								/>,
								code: `<CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location',
											align: 'center'
										}
									]}
									rows={rows}
								/>`
							}, {
								quickLink: 'right',
								primaryVariants: `align: 'right'`,
								component: <CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location',
											align: 'right'
										}
									]}
									rows={rows}
								/>,
								code: `<CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location',
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
								component: <CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name',
											cellClassName: 'custom-bg-mint'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location'
										}
									]}
									rows={rows}
								/>,
								code: `<CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name',
											cellClassName: 'custom-bg-mint'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location'
										}
									]}
									rows={rows}
								/>`
							}, {
								quickLink: 'function',
								primaryVariants: '(row) => string',
								component: <CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location',
											cellClassName: (row: CSTableAlphaRow) => (
												row.data?.location === 'Zagreb' ? 'custom-bg-mint' : ''
											)
										}
									]}
									rows={rows}
								/>,
								code: `<CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location',
											cellClassName: (row: CSTableAlphaRow) => (
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
								component: <CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name',
											columnClassName: 'custom-bg-mint'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location'
										}
									]}
									rows={rows}
								/>,
								code: `<CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name',
											columnClassName: 'custom-bg-mint'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location'
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
								component: <CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name',
											grow: 3
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location'
										}
									]}
									rows={rows}
								/>,
								code: `<CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name',
											grow: 3
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location'
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
								component: <CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location',
											render: (row: CSTableAlphaRow) => <CSChip text={row.data?.location} />
										}
									]}
									rows={rows}
								/>,
								code: `<CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location',
											render: (row: CSTableAlphaRow) => <CSChip text={row.data?.location} />
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
								primaryVariants: `title: 'Location'`,
								component: <CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location'
										}
									]}
									rows={rows}
								/>,
								code: `<CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location'
										}
									]}
									rows={rows}
								/>`
							}, {
								quickLink: 'Element',
								primaryVariants: `title: <CSIcon name="date_input" />`,
								component: <CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: <CSIcon name="date_input" />
										}, {
											key: 'location',
											title: 'Location'
										}
									]}
									rows={rows}
								/>,
								code: `<CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: <CSIcon name="date_input" />
										}, {
											key: 'location',
											title: 'Location'
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
								component: <CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name',
											width: '320px'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location'
										}
									]}
									rows={rows}
								/>,
								code: `<CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name',
											width: '320px'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday'
										}, {
											key: 'location',
											title: 'Location'
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
								component: <CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday',
											wrap: true
										}, {
											key: 'location',
											title: 'Location'
										}
									]}
									rows={rows}
								/>,
								code: `<CSTableAlpha
									columns={[
										{
											key: 'name',
											title: 'Name'
										}, {
											key: 'surname',
											title: 'Surname'
										}, {
											key: 'birthday',
											title: 'Birthday',
											wrap: true
										}, {
											key: 'location',
											title: 'Location'
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
							name: 'CSTableAlphaColumnAlign',
							types: [`'left'`, `'center`, `'right'`]
						},
						description: 'Set a custom class for all the body cells inside a column or provide a function which applies classes to cells inside a column dynamically.'
					}, {
						name: 'cellClassName',
						customTypes: {
							name: 'CSTableAlphaCellClassName',
							types: ['string', '(row: CSTableAlphaRow) => string']
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
						types: '(row: CSTableAlphaRow) => CSTableAlphaCell',
						description: 'Render custom content inside a cell.'
					}, {
						name: 'title',
						customTypes: {
							name: 'CSTableAlphaCell',
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
				name: 'CSTableAlpha Row',
				attributes: true,
				examples: [
					{
						propName: 'data',
						variations: [
							{
								primaryVariants: `data: { location: 'Zagreb' }`,
								secondaryVariants: `columns={[{ key: 'location' }]}`,
								component: <CSTableAlpha columns={columns} rows={rows} />,

								code: `<CSTableAlpha
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
								component: <CSTableAlpha
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
								/>,
								code: `<CSTableAlpha
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
						types: 'Array<CSTableAlphaRow>',
						description: 'Set hierarchically subordinate rows of the current row. This structure renders recursively and can be repeated indefinitely.'
					}, {
						name: 'data',
						customTypes: {
							name: 'CSTableAlphaRowData',
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

export default CSTableAlphaPreview;
