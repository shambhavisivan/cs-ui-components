import React, { useState } from 'react';
import {
	CSDataTable,
	CSDataTableRowWithMetaInterface,
	CSDataTableRowInterface,
	CSIcon,
	CSChip,
	CSInputText,
	CSButton
} from '@cloudsense/cs-ui-components';
import * as CSD from '../../../../demo-components';
import CSDataTableAccessibility from './cs-data-table-accessibility';
import CSDataTableProps from './cs-data-table-props';
import CSDataTableColumnAttributes from './cs-data-table-column-attributes';
import CSDataTableRowAttributes from './cs-data-table-row-attributes';

const columns = [{
	key: 'name',
	header: 'City'
}, {
	key: 'population',
	header: 'Population'
}, {
	key: 'area',
	header: 'Area'
}, {
	key: 'timezone',
	header: 'Timezone'
}, {
	key: 'elevation',
	header: 'Elevation'
}];

const rows = [{
	key: 'zagreb',
	data: {
		name: 'Zagreb',
		population: 1153235,
		area: 641,
		timezone: 'CET/CEST',
		elevation: 158,
		country: 'Croatia'
	}
}, {
	key: 'chennai',
	data: {
		name: 'Chennai',
		population: 8653521,
		area: 426,
		timezone: 'IST',
		elevation: 7,
		country: 'India'
	}
}, {
	key: 'leeds',
	data: {
		name: 'Leeds',
		population: 1901934,
		area: 551,
		timezone: 'GMT/BST',
		elevation: 63,
		country: 'United Kingdom'
	}
}];

const CSDataTablePreview = () => {
	const [singleSelectSelectedKey, setSingleSelectSelectedKey] = useState<React.ReactText>();
	const [headerSelectSelectedKeys, setHeaderSelectSelectedKeys] = useState<Array<React.ReactText>>([]);
	const [restrictedSelectionSelectedKey, setRestrictedSelectionSelectedKey] = useState<React.ReactText>();
	const [multiselectSelectedKeys, setMultiselectSelectedKeys] = useState<Array<React.ReactText>>([]);
	const [multiselectRowSelectedKeys, setMultiselectRowSelectedKeys] = useState<Array<React.ReactText>>([]);
	const [advancedCheckboxSelectedKey, setAdvancedCheckboxSelectedKey] = useState<React.ReactText>();
	const [advancedCheckboxReadOnlyKey, setAdvancedCheckboxReadOnlyKey] = useState<React.ReactText>();
	const [advancedCheckboxIndeterminateKey, setAdvancedCheckboxIndeterminateKey] = useState<React.ReactText>();

	return (
		<CSD.Page
			title="Data Table"
			accessible="yes"
			accessibility={CSDataTableAccessibility}
			tables={[CSDataTableProps, CSDataTableColumnAttributes, CSDataTableRowAttributes]}
			routePrefix="cs-ui"
		>
			<CSD.Heading>General Props</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Base Usage</CSD.Heading>
				<CSD.Text>
					Data tables display information in a grid-like format of rows and columns.
					They organize information in a way that's easy to scan
					so that users can look for patterns and insights.
				</CSD.Text>
				<CSD.Text>
					Rows are key-value pair objects described with the `CSDataTableRowInterface` interface.
					To avoid name conflicts and make space
					for reserved keywords, column keys are mapped
					to attributes inside the `data` attribute on the row object.
				</CSD.Text>
				<CSD.Text>
					Apart from providing the data,
					it is also necessary to provide a unique `key`
					to the row object to allow delta updates and better performance.
				</CSD.Text>
				<CSD.Text>
					Comparable to rows, columns are objects defined
					with a set of attributes of the `CSDataTableColumnInterface` interface.
					They are mapped to rows through their `key` property.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows']}
					code={`
						const columns = [{
							key: 'name',
							header: 'City'
						}, {
							key: 'population',
							header: 'Population'
						}, {
							key: 'area',
							header: 'Area'
						}, {
							key: 'timezone',
							header: 'Timezone'
						}, {
							key: 'elevation',
							header: 'Elevation'
						}];

						const rows = [{
							key: 'zagreb',
							data: {
								name: 'Zagreb',
								population: 1153235,
								area: 641,
								timezone: 'CET/CEST',
								elevation: 158,
								country: 'Croatia'
							}
						}, {
							key: 'chennai',
							data: {
								name: 'Chennai',
								population: 8653521,
								area: 426,
								timezone: 'IST',
								elevation: 7,
								country: 'India'
							}
						}, {
							key: 'leeds',
							data: {
								name: 'Leeds',
								population: 1901934,
								area: 551,
								timezone: 'GMT/BST',
								elevation: 63,
								country: 'United Kingdom'
							}
						}];

						<CSDataTable columns={columns} rows={rows} />
					`}
				>
					<CSDataTable columns={columns} rows={rows} />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Density & Spacing</CSD.Heading>
				<CSD.Text>
					Data tables support three types of display density,
					controlled by the `density` prop.
					Each of the values sets cell padding to provide
					appropriate breathing space for cell content.
				</CSD.Text>
				<CSD.Text>
					The default value is `'compact'`,
					which is ideal for displaying data inside areas that are space-restricted.
					This value should always be used inside
					non-full-width modals, dialogs and popups in general.
				</CSD.Text>
				<CSD.Text>The next value up is `'comfortable'`, which is appropriate for most use cases.</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'density']}
					code={`<CSDataTable columns={columns} rows={rows} density="comfortable" />`}
				>
					<CSDataTable columns={columns} rows={rows} density="comfortable" />
				</CSD.Preview>
				<CSD.Text>
					Finally, setting the density to `'spacious'` will
					give the table the most breathing space,
					but it should be used sparingly and only when
					it makes sense in the context of the data shown.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'density']}
					code={`<CSDataTable columns={columns} rows={rows} density="spacious" />`}
				>
					<CSDataTable columns={columns} rows={rows} density="spacious" />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Borders</CSD.Heading>
				<CSD.Text>By default, data tables show horizontal dividers between rows, while vertical column dividers are hidden.</CSD.Text>
				<CSD.Text>Vertical column dividers can be added by setting the `columnDividers` prop.</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'columnDividers']}
					code="<CSDataTable columns={columns} rows={rows} columnDividers />"
				>
					<CSDataTable columns={columns} rows={rows} columnDividers />
				</CSD.Preview>
				<CSD.Text>Similarly, horizontal row dividers can be removed by setting the `borderless` prop.</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'borderless']}
					code="<CSDataTable columns={columns} rows={rows} borderless />"
				>
					<CSDataTable columns={columns} rows={rows} borderless />
				</CSD.Preview>
				<CSD.Text>They can also be combined to only display vertical column dividers.</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'borderless', 'columnDividers']}
					code="<CSDataTable columns={columns} rows={rows} borderless columnDividers />"
				>
					<CSDataTable columns={columns} rows={rows} borderless columnDividers />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Table Height</CSD.Heading>
				<CSD.Text>
					When restricting data table height, the `maxHeight` property can be used.
					It accepts a string with a valid CSS max-height value.
					If the height of the data table exceeds the maximum height,
					a y-axis scrollbar will appear to navigate to rows that overflow.
				</CSD.Text>
				<CSD.Text>
					By default, the entire table is scrollable
					and the header will remain sticky in order to
					always show column context at a glance,
					even if some of the rows aren't visible.
					This feature can be disabled by setting
					the `stickyHeader` prop to `false`, which is documented in
					the <CSD.Link path="/cs-ui/data-table#header-display">Header Display</CSD.Link> section.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'maxHeight']}
					code={`<CSDataTable columns={columns} rows={rows} maxHeight="4rem" />`}
				>
					<CSDataTable columns={columns} rows={rows} maxHeight="4rem" />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Row Distinction Styles</CSD.Heading>
				<CSD.Text>
					The data table changes row background colour on hover
					in order to make it easier to track the connected cells visually.
					If you wish to disable this feature, you can se the `disableHover` prop.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'disableHover']}
					code={`<CSDataTable columns={columns} rows={rows} disableHover />`}
				>
					<CSDataTable columns={columns} rows={rows} disableHover />
				</CSD.Preview>
				<CSD.Text>
					On the other hand, when you want to emphasise the distinction between rows
					at all times, you can set the `striped` property, which will change the
					background colour of even rows.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'striped']}
					code={`<CSDataTable columns={columns} rows={rows} striped />`}
				>
					<CSDataTable columns={columns} rows={rows} striped />
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Header Display</CSD.Heading>
				<CSD.Text>
					The header row can be hidden when the table data doesn't need to be labelled
					or when more appropriate labelling options are implemented.
					That can be done by setting the `headless` prop.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'headless']}
					code={`<CSDataTable columns={columns} rows={rows} headless />`}
				>
					<CSDataTable columns={columns} rows={rows} headless />
				</CSD.Preview>
				<CSD.Text>
					Sometimes it might be useful to expand the scrolling functionality
					to not just the table body, but the entire table
					so that the header is no longer sticky.
					That can be achieved by setting the `stickyHeader` prop to `false`.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'stickyHeader', 'maxHeight']}
					code={`
						<CSDataTable
							columns={columns}
							rows={rows}
							stickyHeader={false}
							maxHeight="4rem"
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						rows={rows}
						stickyHeader={false}
						maxHeight="4rem"
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Event Handling</CSD.Heading>
				<CSD.Text>
					CSDataTable supports native scroll event which can be handled by using `onScroll` prop.
					It allso supports `onCollapseClick` and details regarding this
					event can be found <CSD.Link path="data-table#custom-hierarchy-toggles">here</CSD.Link>.
				</CSD.Text>
				<CSD.Preview
					table={CSDataTableProps}
					related={['columns', 'rows', 'maxHeight', 'onScroll']}
					consoleAlert
					code={`
						<CSDataTable
							columns={columns}
							rows={rows}
							maxHeight="6rem"
							onScroll={console.log}
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						rows={rows}
						maxHeight="6rem"
						onScroll={console.log}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>IDs & Classes</CSD.Heading>
				<CSD.Text>
					It is possible to apply custom CSS classes to column headers,
					entire columns, all data cells inside a column or even individually targeted cells.
				</CSD.Text>
				<CSD.Text>
					The easiest way to style a column is to assign the `columnClassName` attribute to its object.
					That will apply the custom class to every cell in the column, including the header cell.
				</CSD.Text>
				<CSD.Text>
					A custom class can be added to only the header cell by setting the `className` attribute.
				</CSD.Text>
				<CSD.Text>
					Classes to body cells can be added with the `cellClassName` attribute.
					When set to a `string`, the class name will be applied to every
					body cell in a column. It can also be set to a function that returns
					a string and provides the `row` object as `CSDataTableRowWithMetaInterface`.
					This way different (if any) class names can be assigned to individual body cells
					inside a column.
				</CSD.Text>
				<CSD.Text>
					`className` and `cellClassName` are applied after `columnClassName`,
					which means their styles will override conflicting styles from `columnClassName`.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableColumnAttributes}
					related={['key', 'header', 'columnClassName', 'className', 'cellClassName']}
					code={`
						<CSDataTable
							columns={[{
								key: 'name',
								header: 'All Cells',
								columnClassName: 'csd-custom-bg-mint'
							}, {
								key: 'population',
								header: 'Header Cell',
								className: 'csd-custom-bg-mint'
							}, {
								key: 'area',
								header: 'Body Cells',
								cellClassName: 'csd-custom-bg-mint'
							}, {
								key: 'timezone',
								header: 'Targeted Body Cells',
								cellClassName: (row: CSDataTableRowWithMetaInterface) => row.data?.timezone.includes('/') ? 'csd-custom-bg-mint' : ''
							}]}
							rows={rows}
						/>
					`}
				>
					<CSDataTable
						columns={[{
							key: 'name',
							header: 'All Cells',
							columnClassName: 'csd-custom-bg-mint'
						}, {
							key: 'population',
							header: 'Header Cell',
							className: 'csd-custom-bg-mint'
						}, {
							key: 'area',
							header: 'Body Cells',
							cellClassName: 'csd-custom-bg-mint'
						}, {
							key: 'timezone',
							header: 'Targeted Body Cells',
							cellClassName: (row: CSDataTableRowWithMetaInterface) => row.data?.timezone.includes('/') ? 'csd-custom-bg-mint' : ''
						}]}
						rows={rows}
					/>
				</CSD.Preview>
				<CSD.Text>
					Classes can also be applied on entire rows by setting the `className` attribute on that row.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableRowAttributes}
					related={['key', 'data', 'className']}
					code={`
						<CSDataTable
							columns={columns}
							rows={[{
								key: 'london',
								className: 'csd-custom-bg-mint',
								data: {
									name: 'London',
									population: 9950000,
									area: 1738,
									timezone: 'GMT/BST',
									elevation: 11
								}
							}, ...rows]}
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						rows={[{
							key: 'london',
							className: 'csd-custom-br-mint',
							data: {
								name: 'London',
								population: 9950000,
								area: 1738,
								timezone: 'GMT/BST',
								elevation: 11
							}
						}, ...rows]}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Row Controls</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Row Height</CSD.Heading>
				<CSD.Text>
					Controlling row height on the level of the entire data table
					can be achieved with the `rowHeight` prop,
					which accepts the same value as the `maxHeight` prop.
				</CSD.Text>
				<CSD.Text>
					It is important to note that the `rowHeight` prop,
					be it on the data table level or on a per-row basis,
					is not a substitute for the `density` prop,
					which only affects the spacing and does not limit row height.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'rowHeight']}
					code={`<CSDataTable columns={columns} rows={rows} rowHeight="4rem" />`}
				>
					<CSDataTable columns={columns} rows={rows} rowHeight="4rem" />
				</CSD.Preview>
				<CSD.Text>
					Sometimes it is useful to control row height on a per-row basis.
					A row object can accept a `height` attribute which sets its height.
					This attribute will override the `rowHeight` prop on the data table,
					but it does not get inherited to children.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableRowAttributes}
					related={['key', 'data', 'height']}
					code={`
						<CSDataTable
							columns={columns}
							rows={[{
								key: 'london',
								height: '4rem',
								data: {
									name: 'London',
									population: 9950000,
									area: 1738,
									timezone: 'GMT/BST',
									elevation: 11
								}
							}, ...rows]}
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						rows={[{
							key: 'london',
							height: '4rem',
							data: {
								name: 'London',
								population: 9950000,
								area: 1738,
								timezone: 'GMT/BST',
								elevation: 11
							}
						}, ...rows]}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Rendering Custom Rows</CSD.Heading>
				<CSD.Text>
					It is possible to replace a row's content with custom elements.
					That can be done by setting the `render` attribute on the row object.
					It accepts a function which provides the `row` object with the `meta` attribute
					and returns a renderable React element. Since it overrides the entire row,
					it is necessary to implement own controls for subsection and children toggles.
					To see how you can do that, refer to the `meta` object documentation,
					as well as subsection and collapsibility documentation below.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableRowAttributes}
					related={['key', 'data', 'render']}
					code={`
						<CSDataTable
							columns={columns}
							rows={[{
								key: 'london',
								render: (row: CSDataTableRowWithMetaInterface) => \`This row is actually \${row.data!.name}\`,
								data: {
									name: 'London',
									population: 9950000,
									area: 1738,
									timezone: 'GMT/BST',
									elevation: 11
								}
							}, ...rows]}
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						rows={[{
							key: 'london',
							render: (row: CSDataTableRowWithMetaInterface) => `This row is actually ${row.data!.name}`,
							data: {
								name: 'London',
								population: 9950000,
								area: 1738,
								timezone: 'GMT/BST',
								elevation: 11
							}
						}, ...rows]}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Row Metadata</CSD.Heading>
				<CSD.Text>
					When defined, each row is described by its corresponding `CSDataTableRowInterface` object.
					This object is passed on to callback functions that run on every row.
					This way, referencing the keys, the data and other attributes becomes much simpler in those functions.
					Even though the raw data can be very useful, the row object gets expanded with the
					`meta` attribute before it is passed on to the callback function and it
					is typed as `CSDataTableRowWithMetaInterface`. The `meta` attribute contains precomputed
					values and control functions that can be used to read the managed state of the current row
					or even control it. These are the `meta` object attributes:
				</CSD.Text>
				<CSD.List>
					<CSD.ListItem>`level` represents the level inside a data table hierarchy. Root elements are of level `0`, while their immediate children are of level `1`.</CSD.ListItem>
					<CSD.ListItem>`expanded` is a boolean attribute that is set to `true` when the current row is expanded.</CSD.ListItem>
					<CSD.ListItem>`selected` is a boolean attribute that is set to `true` when the current row is selected.</CSD.ListItem>
					<CSD.ListItem>`indeterminate` is a boolean attribute that is set to `true` when the checkbox in the current row is set to indeterminate.</CSD.ListItem>
					<CSD.ListItem>`readOnly` is a boolean attribute that is set to `true` when the checkbox in the current row is set to read only.</CSD.ListItem>
					<CSD.ListItem>`subsectionVisible` is a boolean attribute that is set to `true` when the subsection of the current row is expanded.</CSD.ListItem>
					<CSD.ListItem>`setSubsectionVisible` is a function that controls the subsection visibility by accepting an explicit boolean parameter.</CSD.ListItem>
					<CSD.ListItem>`toggleSubsectionVisible` is a function that toggles the subsection visibility by flipping the current visibility state with React state asynchronicity in mind.</CSD.ListItem>
					<CSD.ListItem>`setExpanded` is a function that controls the children visibility by accepting an explicit boolean parameter.</CSD.ListItem>
					<CSD.ListItem>`toggleExpanded` is a function that toggles the children visibility by flipping the current visibility state with React state asynchronicity in mind.</CSD.ListItem>
				</CSD.List>
				<CSD.Code>
					{`
						interface CSDataTableRowMetaInterface {
							level: number;
							expanded: boolean;
							selected: boolean;
							indeterminate: boolean;
							readOnly: boolean;
							subsectionVisible: boolean;
							setSubsectionVisible: (subsectionVisible: boolean) => void;
							toggleSubsectionVisible: () => void;
							setExpanded: (expanded: boolean) => void;
							toggleExpanded: () => void;
						}
					`}
				</CSD.Code>
			</CSD.Section>
			<CSD.Heading>Column Controls</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Custom Header Cells</CSD.Heading>
				<CSD.Text>
					Data tables make no assumptions about what a column
					represents semantically based on the column key.
					Meaning can be attributed by setting header content
					on a column object in the `header` attribute.
					`header` accepts strings, numbers and renderable
					React elements.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableColumnAttributes}
					related={['key', 'header']}
					code={`
						<CSDataTable
							columns={[{
								key: 'name',
								header: <CSIcon name="location" />
							}, {
								key: 'population',
								header: <CSIcon name="people" />
							}, {
								key: 'area',
								header: 'Area'
							}, {
								key: 'timezone',
								header: <CSIcon name="date_time" />
							}, {
								key: 'elevation',
								header: 'Elevation'
							}]}
							rows={rows}
						/>
					`}
				>
					<CSDataTable
						columns={[{
							key: 'name',
							header: <CSIcon name="location" />
						}, {
							key: 'population',
							header: <CSIcon name="people" />
						}, {
							key: 'area',
							header: 'Area'
						}, {
							key: 'timezone',
							header: <CSIcon name="date_time" />
						}, {
							key: 'elevation',
							header: 'Elevation'
						}]}
						rows={rows}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Column Width</CSD.Heading>
				<CSD.Text>
					Column width can be controlled by explicitly setting
					the `width` attribute to a valid CSS with attribute value.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableColumnAttributes}
					related={['key', 'header', 'width']}
					code={`
						<CSDataTable
							columns={[{
								key: 'country',
								header: 'Country',
								width: '120px'
							}, ...columns]}
							rows={rows}
						/>
					`}
				>
					<CSDataTable
						columns={[{
							key: 'country',
							header: 'Country',
							width: '120px'
						}, ...columns]}
						rows={rows}
					/>
				</CSD.Preview>
				<CSD.Text>
					When the width is supposed to be relative to
					other columns, the `grow` attribute can be set to a numerical value.
					It behaves in the same way as the CSS grow property, meaning that
					a column with `grow: 3` will take up three times the width of
					other columns which have `grow: 1` by default.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableColumnAttributes}
					related={['key', 'header', 'grow']}
					code={`
						<CSDataTable
							columns={[{
								key: 'country',
								header: 'Country',
								grow: 3
							}, ...columns]}
							rows={rows}
						/>
					`}
				>
					<CSDataTable
						columns={[{
							key: 'country',
							header: 'Country',
							grow: 3
						}, ...columns]}
						rows={rows}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Cell Alignment</CSD.Heading>
				<CSD.Text>
					Cell contents can be aligned on a per-column basis
					by setting the `align` attribute to either `'left'` (default),
					`'center'` or `'right'`.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableColumnAttributes}
					related={['key', 'header', 'align']}
					code={`
						<CSDataTable
							columns={[{
								key: 'name',
								header: 'Left'
							}, {
								key: 'population',
								align: 'center',
								header: 'Center'
							}, {
								key: 'area',
								align: 'right',
								header: 'Right'
							}]}
							rows={rows}
						/>
					`}
				>
					<CSDataTable
						columns={[{
							key: 'name',
							header: 'Left'
						}, {
							key: 'population',
							align: 'center',
							header: 'Center'
						}, {
							key: 'area',
							align: 'right',
							header: 'Right'
						}]}
						rows={rows}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Content Wrapping</CSD.Heading>
				<CSD.Text>
					When the content of a cell is about to overflow,
					it will be cut off and ellipsised (where applicable).
					Sometimes it's useful to show the overflown content.
					That can be done by setting the `wrap` attribute on
					a column to `true`. Any text will wrap into new lines
					and any overflowing styles will be visible
					(e.g. `CSButton` focus shadow will not get cut off if it
					leaves cell bounds).
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableColumnAttributes}
					related={['key', 'header', 'wrap']}
					code={`
						<CSDataTable
							columns={[{
								key: 'country',
								header: 'Country',
								wrap: true
							}, ...columns]}
							rows={rows}
						/>
					`}
				>
					<CSDataTable
						columns={[{
							key: 'country',
							header: 'Country',
							wrap: true
						}, ...columns]}
						rows={rows}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Titles</CSD.Heading>
				<CSD.Text>
					Column cells sometimes truncate content by breaking off text with ellipsis.
					In order to go around that, setting the `title` attribute on the column object to `true` will attach an HTML title attribute to the cell.
					This only works with non-custom cells, where the title attribute can be added manually.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableColumnAttributes}
					related={['key', 'header', 'title']}
					code={`
						<CSDataTable
							columns={[{
								key: 'country',
								header: 'Country',
								title: true
							}, ...columns]}
							rows={rows}
						/>
					`}
				>
					<CSDataTable
						columns={[{
							key: 'country',
							header: 'Country',
							title: true
						}, ...columns]}
						rows={rows}
					/>
				</CSD.Preview>
				<CSD.Text>
					In order to add a title to the header, `headerTitle` should be set to `true`.
					Similar to cell titles, this only works for non-element headers.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableColumnAttributes}
					related={['key', 'header', 'headerTitle']}
					code={`
						<CSDataTable
							columns={[{
								key: 'country',
								header: 'Country',
								headerTitle: true
							}, ...columns]}
							rows={rows}
						/>
					`}
				>
					<CSDataTable
						columns={[{
							key: 'country',
							header: 'Country',
							headerTitle: true
						}, ...columns]}
						rows={rows}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Rendering Custom Cells</CSD.Heading>
				<CSD.Text>
					Cells display the corresponding values from the `row.data` object.
					This can be changed on a per-column basis by setting the `render`
					attribute on the column object. It takes a callback function which
					provides the `row` object as `CSDataTableWithMetaInterface` and
					returns a renderable React element, including strings.
					The function will be run for all cells inside a column independently
					and the resulting element will be shown instead of the base data value.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableColumnAttributes}
					related={['key', 'header', 'render']}
					code={`
						<CSDataTable
							columns={[{
								key: 'name',
								header: 'City',
								render: (row: CSDataTableRowWithMetaInterface) => <CSChip text={row.data!.name} />
							}, {
								key: 'population',
								header: 'Population',
								render: (row: CSDataTableRowWithMetaInterface) => new Intl.NumberFormat('en-GB').format(row.data!.population)
							}, {
								key: 'area',
								header: 'Area',
								render: (row: CSDataTableRowWithMetaInterface) => \`\${row.data!.area} km²\`
							}, {
								key: 'timezone',
								header: 'Timezone'
							}]}
							rows={rows}
						/>
					`}
				>
					<CSDataTable
						columns={[{
							key: 'name',
							header: 'City',
							render: (row: CSDataTableRowWithMetaInterface) => <CSChip text={row.data!.name} />
						}, {
							key: 'population',
							header: 'Population',
							render: (row: CSDataTableRowWithMetaInterface) => new Intl.NumberFormat('en-GB').format(row.data!.population)
						}, {
							key: 'area',
							header: 'Area',
							render: (row: CSDataTableRowWithMetaInterface) => `${row.data!.area} km²`
						}, {
							key: 'timezone',
							header: 'Timezone'
						}]}
						rows={rows}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Hierarchy</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Basic Hierarchy</CSD.Heading>
				<CSD.Text>
					The `row` object is typed as recursive with regards to the
					`children` attribute. The `children` attribute also accepts
					an array of `CSDataTableRowInterface` objects and renders them
					as child rows. Since the object is recursive,
					the data table sets no limit on how deep rows can be nested.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableRowAttributes}
					related={['key', 'data', 'children']}
					code={`
						<CSDataTable
							columns={columns}
							rows={[{
								key: 'london',
								children: rows,
								data: {
									name: 'London',
									population: 9950000,
									area: 1738,
									timezone: 'GMT/BST',
									elevation: 11,
									country: 'United Kingdom'
								}
							}]}
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						rows={[{
							key: 'london',
							children: rows,
							data: {
								name: 'London',
								population: 9950000,
								area: 1738,
								timezone: 'GMT/BST',
								elevation: 11,
								country: 'United Kingdom'
							}
						}]}
					/>
				</CSD.Preview>
				<CSD.Text>
					By default, child rows are collapsed.
					This can be overridden on a global or a per-row scale.
					Setting the `defaultCollapsed` prop to `false` will show
					children immediately.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'defaultCollapsed']}
					code={`
						<CSDataTable
							columns={columns}
							defaultCollapsed={false}
							rows={[{
								key: 'london',
								children: rows,
								data: {
									name: 'London',
									population: 9950000,
									area: 1738,
									timezone: 'GMT/BST',
									elevation: 11,
									country: 'United Kingdom'
								}
							}]}
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						defaultCollapsed={false}
						rows={[{
							key: 'london',
							children: rows,
							data: {
								name: 'London',
								population: 9950000,
								area: 1738,
								timezone: 'GMT/BST',
								elevation: 11,
								country: 'United Kingdom'
							}
						}]}
					/>
				</CSD.Preview>
				<CSD.Text>
					Adjusting default collapsibility per-row
					can be done by setting the `defaultCollapsed`
					attribute on the row object.
					This attribute will override the table prop,
					but it will not be inherited to the children
					of the current row.
				</CSD.Text>
				<CSD.Text>
					Furthermore, `defaultCollapsed` and `collapsible`
					can be combined to show a static data table with all rows visible at once.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'defaultCollapsed', 'collapsible']}
					code={`
						<CSDataTable
							columns={columns}
							collapsible={false}
							defaultCollapsed={false}
							rows={[{
								key: 'london',
								children: rows,
								data: {
									name: 'London',
									population: 9950000,
									area: 1738,
									timezone: 'GMT/BST',
									elevation: 11,
									country: 'United Kingdom'
								}
							}]}
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						collapsible={false}
						defaultCollapsed={false}
						rows={[{
							key: 'london',
							children: rows,
							data: {
								name: 'London',
								population: 9950000,
								area: 1738,
								timezone: 'GMT/BST',
								elevation: 11,
								country: 'United Kingdom'
							}
						}]}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Custom Hierarchy Toggles</CSD.Heading>
				<CSD.Text>
					Default controls can be added by setting
					the `collapsible` prop to `false` and making use of the `toggleExpanded`
					method inside the `meta` attribute of the row.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'collapsible']}
					code={`
						<CSDataTable
							collapsible={false}
							columns={[...columns, {
								key: 'toggle',
								width: '5rem',
								align: 'right',
								wrap: true,
								render: (row: CSDataTableRowWithMetaInterface) => (
									!row.children ? null : <CSButton
										iconName="chevrondown"
										iconRotate={row.meta.expanded ? 0 : 90}
										label={\`\${row.meta.expanded ? 'Hide' : 'Show'} subsection\`}
										labelHidden
										onClick={row.meta.toggleExpanded}
									/>
								)
							}]}
							rows={[{
								key: 'london',
								children: rows,
								data: {
									name: 'London',
									population: 9950000,
									area: 1738,
									timezone: 'GMT/BST',
									elevation: 11,
									country: 'United Kingdom'
								}
							}]}
						/>
					`}
				>
					<CSDataTable
						collapsible={false}
						columns={[...columns, {
							key: 'toggle',
							width: '5rem',
							align: 'right',
							wrap: true,
							render: (row: CSDataTableRowWithMetaInterface) => (
								!row.children ? null : <CSButton
									iconName="chevrondown"
									iconRotate={row.meta.expanded ? 0 : 90}
									label={`${row.meta.expanded ? 'Hide' : 'Show'} subsection`}
									labelHidden
									onClick={row.meta.toggleExpanded}
								/>
							)
						}]}
						rows={[{
							key: 'london',
							children: rows,
							data: {
								name: 'London',
								population: 9950000,
								area: 1738,
								timezone: 'GMT/BST',
								elevation: 11,
								country: 'United Kingdom'
							}
						}]}
					/>
				</CSD.Preview>
				<CSD.Text>
					The native toggle button functionality can also
					be overridden with the `onCollapseClick` prop.
					It completely overrides the default behaviour,
					which means that the toggle function will have to be called manually.
					This, however, enables subsection decoupling and further
					customisations.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					consoleAlert
					related={['columns', 'rows', 'subsectionRender', 'collapsible']}
					code={`
						<CSDataTable
							columns={columns}
							onCollapseClick={(event: React.MouseEvent<HTMLButtonElement>, row: CSDataTableRowWithMetaInterface) => {
								row.meta.toggleExpanded();
								console.log(\`\${row.data!.name} children are now \${!row.meta.expanded ? 'visible' : 'hidden'}.\`);
							}}
							rows={[{
								key: 'london',
								children: rows,
								data: {
									name: 'London',
									population: 9950000,
									area: 1738,
									timezone: 'GMT/BST',
									elevation: 11,
									country: 'United Kingdom'
								}
							}]}
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						onCollapseClick={(event: React.MouseEvent<HTMLButtonElement>, row: CSDataTableRowWithMetaInterface) => {
							row.meta.toggleExpanded();
							console.log(`${row.data!.name} children are now ${!row.meta.expanded ? 'visible' : 'hidden'}.`);
						}}
						rows={[{
							key: 'london',
							children: rows,
							data: {
								name: 'London',
								population: 9950000,
								area: 1738,
								timezone: 'GMT/BST',
								elevation: 11,
								country: 'United Kingdom'
							}
						}]}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Subsections</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Basic Subsections</CSD.Heading>
				<CSD.Text>
					When additional information, content or controls need to be shown,
					the layout can easily become cluttered.
					When it makes sense for such content to be hidden
					until it's needed, subsections can be used.
					The `subsectionRender` prop accepts a callback, which provides
					the `row` object and returns renderable React elements
					(including strings). Each row will generate a hidden section
					which can be expanded in a similar way to hierarchically
					subordinate rows.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'subsectionRender']}
					code={`
						<CSDataTable
							columns={columns}
							rows={rows}
							subsectionRender={(row: CSDataTableRowWithMetaInterface) => (
								<CSInputText label="Country" defaultValue={row.data!.country} />
							)}
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						rows={rows}
						subsectionRender={(row: CSDataTableRowWithMetaInterface) => (
							<CSInputText label="Country" defaultValue={row.data!.country} />
						)}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Similarities with Hierarchy</CSD.Heading>
				<CSD.Text>
					Under the hood, the hierarchy (collapsibility) and
					subsection toggles share the same infrastructure.
					That means that the same toggle button is wired to expand
					both the children and the subsection if they exist.
					It is possible to decouple these controls
					by using custom toggles, as demonstrated
					in the Custom Toggles section below.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'subsectionRender']}
					code={`
						<CSDataTable
							columns={columns}
							subsectionRender={(row: CSDataTableRowWithMetaInterface) => (
								<CSInputText label="Country" defaultValue={row.data!.country}/>
							)}
							rows={[{
								key: 'london',
								children: rows,
								data: {
									name: 'London',
									population: 1153235,
									area: 641,
									timezone: 'CET/CEST',
									elevation: 158,
									country: 'Croatia'
								}
							}]}
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						subsectionRender={(row: CSDataTableRowWithMetaInterface) => (
							<CSInputText label="Country" defaultValue={row.data!.country} />
						)}
						rows={[{
							key: 'london',
							children: rows,
							data: {
								name: 'London',
								population: 9950000,
								area: 1738,
								timezone: 'GMT/BST',
								elevation: 11,
								country: 'United Kingdom'
							}
						}]}
					/>
				</CSD.Preview>
				<CSD.Text>
					In line with this, all collapsibility props
					can be used to manage subsection visibility.
					You can refer to `defaultCollapsed` from the
					Basic Hierarchy section.
				</CSD.Text>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Selective Rendering</CSD.Heading>
				<CSD.Text>
					Sometimes it is desirable to show subsections
					only for some rows. To remove the subsection from a row,
					it is necessary for the `subsectionRender` function to
					return `null`. In that case, no subsection or toggle button
					will be rendered. For this example, only cities with an area
					greater than 500 have subsections.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'subsectionRender']}
					code={`
						<CSDataTable
							columns={columns}
							rows={rows}
							subsectionRender={(row: CSDataTableRowWithMetaInterface) => (
								row.data!.area > 500 ? <CSInputText label="Country" defaultValue={row.data!.country} /> : null
							)}
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						rows={rows}
						subsectionRender={(row: CSDataTableRowWithMetaInterface) => (
							row.data!.area > 500 ? <CSInputText label="Country" defaultValue={row.data!.country} /> : null
						)}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Custom Subsection Toggles</CSD.Heading>
				<CSD.Text>
					Since the subsection toggles share the toggle logic with
					collapsible rows, the default controls can be added by setting
					the `collapsible` prop to `false` and making use of the `toggleSubsectionVisible`
					method inside the `meta` attribute of the row.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'subsectionRender', 'collapsible']}
					code={`
						<CSDataTable
							columns={[...columns, {
								key: 'toggle',
								width: '5rem',
								align: 'right',
								wrap: true,
								render: (row: CSDataTableRowWithMetaInterface) => (
									<CSButton
										iconName="chevrondown"
										iconRotate={row.meta.subsectionVisible ? 0 : 90}
										label={\`\${row.meta.subsectionVisible ? 'Hide' : 'Show'} subsection\`}
										labelHidden
										onClick={row.meta.toggleSubsectionVisible}
									/>
								)
							}]}
							rows={rows}
							collapsible={false}
							subsectionRender={(row: CSDataTableRowWithMetaInterface) => (
								<CSInputText label="Country" defaultValue={row.data!.country} />
							)}
						/>
					`}
				>
					<CSDataTable
						columns={[...columns, {
							key: 'toggle',
							width: '5rem',
							align: 'right',
							wrap: true,
							render: (row: CSDataTableRowWithMetaInterface) => (
								<CSButton
									iconName="chevrondown"
									iconRotate={row.meta.subsectionVisible ? 0 : 90}
									label={`${row.meta.subsectionVisible ? 'Hide' : 'Show'} subsection`}
									labelHidden
									onClick={row.meta.toggleSubsectionVisible}
								/>
							)
						}]}
						rows={rows}
						collapsible={false}
						subsectionRender={(row: CSDataTableRowWithMetaInterface) => (
							<CSInputText label="Country" defaultValue={row.data!.country} />
						)}
					/>
				</CSD.Preview>
				<CSD.Text>
					As with collapsibility controls, the toggle
					functionality can be overridden with the `onCollapseClick` prop.
					Please refer to the Custom Collapsibility Toggles section for more details.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					consoleAlert
					related={['columns', 'rows', 'subsectionRender', 'collapsible']}
					code={`
						<CSDataTable
							columns={columns}
							rows={rows}
							subsectionRender={(row: CSDataTableRowWithMetaInterface) => (
								<CSInputText label="Country" defaultValue={row.data!.country} />
							)}
							onCollapseClick={(event: React.MouseEvent<HTMLButtonElement>, row: CSDataTableRowWithMetaInterface) => {
								row.meta.toggleSubsectionVisible();
								console.log(\`\${row.data!.name} subsection is now \${!row.meta.expanded ? 'visible' : 'hidden'}.\`);
							}}
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						rows={rows}
						subsectionRender={(row: CSDataTableRowWithMetaInterface) => (
							<CSInputText label="Country" defaultValue={row.data!.country} />
						)}
						onCollapseClick={(event: React.MouseEvent<HTMLButtonElement>, row: CSDataTableRowWithMetaInterface) => {
							row.meta.toggleSubsectionVisible();
							console.log(`${row.data!.name} subsection is now ${!row.meta.expanded ? 'visible' : 'hidden'}.`);
						}}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Heading>Selectability</CSD.Heading>
			<CSD.Section>
				<CSD.Heading level={2}>Basic Checkbox Selection</CSD.Heading>
				<CSD.Text>
					Unlike collapsibility and subsections, which manage state under the hood,
					the selectability aspect of data tables is completely stateless.
					This means that determining data table interactions and
					behaviour is left to the developer. Because of this,
					it is possible to support a wide array of possibilities for
					triggers and callbacks when selecting rows.
				</CSD.Text>
				<CSD.Text>
					The `selectable` prop enables accessibility interactions
					by adding keyboard navigation and visual indicators.
				</CSD.Text>
				<CSD.Text>
					Since data tables keep no state, it is necessary
					to manage an external state and pass an array of
					corresponding row keys in the `selectedKeys` prop.
					`selectedKeys` can also accept a single key instead
					of an array in order to make it easier to work with
					single-select use cases.
				</CSD.Text>
				<CSD.Text>
					The behaviour for selecting rows can
					be described in the `onSelectChange` prop,
					which provides access to the row object of the `CSDataTableRowWithMetaInterface` type.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'selectedKeys', 'onSelectChange', 'selectable']}
					code={`
						<CSDataTable
							columns={columns}
							rows={rows}
							selectable
							selectedKeys={selectedKey}
							onSelectChange={(event: React.ChangeEvent, row: CSDataTableRowWithMetaInterface) => {
								setSelectdKey((prevSelectedKey?: React.ReactText) => row.key !== prevSelectedKey ? row.key : undefined);
							}}
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						rows={rows}
						selectable
						selectedKeys={singleSelectSelectedKey}
						onSelectChange={(event: React.ChangeEvent, row: CSDataTableRowWithMetaInterface) => {
							setSingleSelectSelectedKey((prevSelectedKey?: React.ReactText) => row.key !== prevSelectedKey ? row.key : undefined);
						}}
					/>
				</CSD.Preview>
				<CSD.Text>
					The example above shows the single-select use case.
					Below is demonstrated how the external logic can be implemented
					to allow for multiselect selection. Please bear in mind that
					it is also important to set the `multiselect` prop to true.
					While the `multiselect` prop does not introduce any behaviour changes,
					it is used to set accessibility attributes and styles.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'selectedKeys', 'onSelectChange', 'selectable', 'multiselect']}
					code={`
						<CSDataTable
							columns={columns}
							rows={rows}
							selectable
							multiselect
							selectedKeys={selectedKeys}
							onSelectChange={(event: React.ChangeEvent, row: CSDataTableRowWithMetaInterface) => {
								setSelectedKeys((prevSelectedKeys: Array<React.ReactText>) => {
									const prevIndex = prevSelectedKeys.indexOf(row.key);
									const newSelectedKeys = [...prevSelectedKeys];
									if (prevIndex >= 0) {
										newSelectedKeys.splice(prevIndex, 1);
									} else {
										newSelectedKeys.push(row.key);
									}
									return newSelectedKeys;
								});
							}}
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						rows={rows}
						selectable
						multiselect
						selectedKeys={multiselectSelectedKeys}
						onSelectChange={(event: React.ChangeEvent, row: CSDataTableRowWithMetaInterface) => {
							setMultiselectSelectedKeys((prevSelectedKeys: Array<React.ReactText>) => {
								const prevIndex = prevSelectedKeys.indexOf(row.key);
								const newSelectedKeys = [...prevSelectedKeys];
								if (prevIndex >= 0) {
									newSelectedKeys.splice(prevIndex, 1);
								} else {
									newSelectedKeys.push(row.key);
								}
								return newSelectedKeys;
							});
						}}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Advanced Checkbox Selection</CSD.Heading>
				<CSD.Text>
					Besides setting `selectedKeys`,
					it is also possible to set `indeterminateKeys` and `readOnlyKeys`.
					Because the selection is stateless,
					it is very easy to implement custom
					behaviour and per-use-case logic.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'onSelectChange', 'selectable', 'selectedKeys', 'indeterminateKeys', 'readOnlyKeys']}
					code={`
						<CSDataTable
							columns={[{
								key: 'toggle',
								wrap: true,
								width: '6rem',
								render: (row: CSDataTableRowWithMetaInterface) => (
									<CSButton
										label={readOnlyKey === row.key ? 'Enable' : 'Disable'}
										onClick={() => {
											setReadOnlyKey((prevReadOnlyKey?: React.ReactText) => row.key !== prevReadOnlyKey ? row.key : undefined);
										}}
									/>
								)
							}, ...columns]}
							rows={rows}
							selectable
							selectedKeys={selectedKey}
							readOnlyKeys={readOnlyKey}
							indeterminateKeys={indeterminateKey}
							onSelectChange={(event: React.ChangeEvent, row: CSDataTableRowWithMetaInterface) => {
								if (row.data!.name === 'Zagreb') {
									setSelectedKey((prevSelectedKey?: React.ReactText) => row.key !== prevSelectedKey ? row.key : undefined);
								} else {
									setIndeterminateKey((prevIndeterminateKey?: React.ReactText) => row.key !== prevIndeterminateKey ? row.key : undefined);
								}
							}}
						/>
					`}
				>
					<CSDataTable
						columns={[{
							key: 'toggle',
							wrap: true,
							width: '6rem',
							render: (row: CSDataTableRowWithMetaInterface) => (
								<CSButton
									label={advancedCheckboxReadOnlyKey === row.key ? 'Enable' : 'Disable'}
									onClick={() => {
										setAdvancedCheckboxReadOnlyKey((prevReadOnlyKey?: React.ReactText) => row.key !== prevReadOnlyKey ? row.key : undefined);
									}}
								/>
							)
						}, ...columns]}
						rows={rows}
						selectable
						selectedKeys={advancedCheckboxSelectedKey}
						readOnlyKeys={advancedCheckboxReadOnlyKey}
						indeterminateKeys={advancedCheckboxIndeterminateKey}
						onSelectChange={(event: React.ChangeEvent, row: CSDataTableRowWithMetaInterface) => {
							if (row.data!.name === 'Zagreb') {
								setAdvancedCheckboxSelectedKey((prevSelectedKey?: React.ReactText) => row.key !== prevSelectedKey ? row.key : undefined);
							} else {
								setAdvancedCheckboxIndeterminateKey((prevIndeterminateKey?: React.ReactText) => row.key !== prevIndeterminateKey ? row.key : undefined);
							}
						}}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Header Checkbox</CSD.Heading>
				<CSD.Text>
					When in need of checkbox controls table-wise,
					a header checkbox can be added. The `headerCheckbox`
					prop accepts all `CSCheckbox` props as attributes
					and passes them into a checkbox in the header.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'selectedKeys', 'onSelectChange', 'selectable', 'multiselect']}
					code={`
						<CSDataTable
							columns={columns}
							rows={rows}
							multiselect
							selectable
							selectedKeys={selectedKeys}
							onSelectChange={(event: React.ChangeEvent, row: CSDataTableRowWithMetaInterface) => {
								setSelectedKeys((prevSelectedKeys: Array<React.ReactText>) => {
									const prevIndex = prevSelectedKeys.indexOf(row.key);
									const newSelectedKeys = [...prevSelectedKeys];
									if (prevIndex >= 0) {
										newSelectedKeys.splice(prevIndex, 1);
									} else {
										newSelectedKeys.push(row.key);
									}
									return newSelectedKeys;
								});
							}}
							headerCheckbox={{
								label: 'Select All',
								labelHidden: true,
								checked: selectedKeys.length === rows.length,
								indeterminate: !!selectedKeys.length && selectedKeys.length < rows.length,
								onChange: () => {
									if (selectedKeys.length === rows.length) {
										setSelectedKeys([]);
									} else {
										setSelectedKeys(rows.map((row: CSDataTableRowInterface) => row.key));
									}
								}
							}}
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						rows={rows}
						multiselect
						selectable
						selectedKeys={headerSelectSelectedKeys}
						onSelectChange={(event: React.ChangeEvent, row: CSDataTableRowWithMetaInterface) => {
							setHeaderSelectSelectedKeys((prevSelectedKeys: Array<React.ReactText>) => {
								const prevIndex = prevSelectedKeys.indexOf(row.key);
								const newSelectedKeys = [...prevSelectedKeys];
								if (prevIndex >= 0) {
									newSelectedKeys.splice(prevIndex, 1);
								} else {
									newSelectedKeys.push(row.key);
								}
								return newSelectedKeys;
							});
						}}
						headerCheckbox={{
							label: 'Select All',
							labelHidden: true,
							checked: headerSelectSelectedKeys.length === rows.length,
							indeterminate: !!headerSelectSelectedKeys.length && headerSelectSelectedKeys.length < rows.length,
							onChange: () => {
								if (headerSelectSelectedKeys.length === rows.length) {
									setHeaderSelectSelectedKeys([]);
								} else {
									setHeaderSelectSelectedKeys(rows.map((row: CSDataTableRowInterface) => row.key));
								}
							}
						}}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Whole-Row Selection</CSD.Heading>
				<CSD.Text>
					An alternative to displaying checkboxes
					is having the whole row be clickable.
					That can be done by setting the `selectionType`
					prop from its default `'checkbox'` value to `'row'`.
					Keep in mind that whole-row selection only works with
					`selectedKeys` and ignores `indeterminateKeys` and `readOnlyKeys`.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'onSelectChange', 'selectable', 'selectedKeys']}
					code={`
						<CSDataTable
							columns={columns}
							rows={rows}
							selectable
							selectionType="row"
							selectedKeys={selectedKey}
							onSelectChange={(event: React.ChangeEvent, row: CSDataTableRowWithMetaInterface) => {
								setSelectedKey((prevSelectedKey?: React.ReactText) => row.key !== prevSelectedKey ? row.key : undefined);
							}}
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						rows={rows}
						selectable
						selectionType="row"
						selectedKeys={singleSelectSelectedKey}
						onSelectChange={(event: React.ChangeEvent, row: CSDataTableRowWithMetaInterface) => {
							setSingleSelectSelectedKey((prevSelectedKey?: React.ReactText) => row.key !== prevSelectedKey ? row.key : undefined);
						}}
					/>
				</CSD.Preview>
				<CSD.Text>Similar to the example with checkboxes, rows-selection can be adjusted to be multiselectable.</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'onSelectChange', 'selectable', 'selectedKeys', 'multiselect']}
					code={`
						<CSDataTable
							columns={columns}
							rows={rows}
							selectable
							selectionType="row"
							multiselect
							selectedKeys={selectedKeys}
							onSelectChange={(event: React.ChangeEvent, row: CSDataTableRowWithMetaInterface) => {
								setSelectedKeys((prevSelectedKeys: Array<React.ReactText>) => {
									const prevIndex = prevSelectedKeys.indexOf(row.key);
									const newSelectedKeys = [...prevSelectedKeys];
									if (prevIndex >= 0) {
										newSelectedKeys.splice(prevIndex, 1);
									} else {
										newSelectedKeys.push(row.key);
									}
									return newSelectedKeys;
								});
							}}
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						rows={rows}
						selectable
						selectionType="row"
						multiselect
						selectedKeys={multiselectRowSelectedKeys}
						onSelectChange={(event: React.ChangeEvent, row: CSDataTableRowWithMetaInterface) => {
							setMultiselectRowSelectedKeys((prevSelectedKeys: Array<React.ReactText>) => {
								const prevIndex = prevSelectedKeys.indexOf(row.key);
								const newSelectedKeys = [...prevSelectedKeys];
								if (prevIndex >= 0) {
									newSelectedKeys.splice(prevIndex, 1);
								} else {
									newSelectedKeys.push(row.key);
								}
								return newSelectedKeys;
							});
						}}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Restricting Selectability</CSD.Heading>
				<CSD.Text>
					When the data table is marked as selectable,
					all the rows inherit the selectable property.
					That can be overridden on a per-row basis by setting the
					`selectable` attribute on the row object. The row value will
					only override the global value when the global value is set to `true`.
				</CSD.Text>
				<CSD.Preview
					orientation="vertical"
					table={CSDataTableProps}
					related={['columns', 'rows', 'onSelectChange', 'selectable', 'selectedKeys']}
					code={`
						<CSDataTable
							columns={columns}
							rows={[{
								key: 'london',
								selectable: false,
								data: {
									name: 'London',
									population: 9950000,
									area: 1738,
									timezone: 'GMT/BST',
									elevation: 11
								}
							}, ...rows]}
							selectable
							selectedKeys={selectedKey}
							onSelectChange={(event: React.ChangeEvent, row: CSDataTableRowWithMetaInterface) => {
								setSelectedKey((prevSelectedKey?: React.ReactText) => row.key !== prevSelectedKey ? row.key : undefined);
							}}
						/>
					`}
				>
					<CSDataTable
						columns={columns}
						rows={[{
							key: 'london',
							selectable: false,
							data: {
								name: 'London',
								population: 9950000,
								area: 1738,
								timezone: 'GMT/BST',
								elevation: 11
							}
						}, ...rows]}
						selectable
						selectedKeys={restrictedSelectionSelectedKey}
						onSelectChange={(event: React.ChangeEvent, row: CSDataTableRowWithMetaInterface) => {
							setRestrictedSelectionSelectedKey((prevSelectedKey?: React.ReactText) => row.key !== prevSelectedKey ? row.key : undefined);
						}}
					/>
				</CSD.Preview>
			</CSD.Section>
		</CSD.Page>
	);
};

export default CSDataTablePreview;
