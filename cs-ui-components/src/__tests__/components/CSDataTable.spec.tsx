import * as React from 'react';
import { shallow, mount } from 'enzyme';
import CSDataTable, { CSDataTableColumnAlign, CSDataTableRowWithMetaInterface } from '../../components/data-table/CSDataTable';
import CSIcon from '../../components/CSIcon';
import CSChip from '../../components/CSChip';
import CSButton from '../../components/CSButton';

const columns = [
	{
		key: 'name',
		header: 'City',
	}, {
		key: 'population',
		header: 'Population',
	}, {
		key: 'area',
		header: 'Area',
	}, {
		key: 'timezone',
		header: 'Timezone',
	}, {
		key: 'elevation',
		header: 'Elevation',
	},
];

const rows = [
	{
		key: 'zagreb',
		data: {
			name: 'Zagreb',
			population: 1153235,
			area: 641,
			timezone: 'CET/CEST',
			elevation: 158,
			country: 'Croatia',
		},
	}, {
		key: 'chennai',
		data: {
			name: 'Chennai',
			population: 8653521,
			area: 426,
			timezone: 'IST',
			elevation: 7,
			country: 'India',
		},
	}, {
		key: 'leeds',
		data: {
			name: 'Leeds',
			population: 1901934,
			area: 551,
			timezone: 'GMT/BST',
			elevation: 63,
			country: 'United Kingdom',
		},
	},
];

describe('<CSDataTable />', () => {
	it('should render default CSDataTable', () => {
		const uut = mount(<CSDataTable columns={columns} rows={rows} />);
		const dataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');
		const dataTableHeaderCols = uut.find('.cs-data-table-header .cs-data-table-cell').at(0);
		// Make sure table header is shown
		expect(uut.find('CSDataTableHeader')).toHaveLength(1);
		// Make sure table group is shown
		expect(uut.find('CSDataTableGroup')).toHaveLength(1);
		// Make sure it has borderless false
		expect(uut.find('.cs-data-table-borderless')).toHaveLength(0);
		// Make sure it has no striped row
		expect(uut.find('.cs-data-table-striped')).toHaveLength(0);
		// Make sure it has no sticky header
		expect(uut.find('.cs-data-table-sticky-header')).toHaveLength(1);
		// Make sure it has no disable hover
		expect(uut.find('.cs-data-table-disable-hover')).toHaveLength(0);
		// Make sure the content is aligned left
		expect(dataTableHeaderCols.hasClass('cs-data-table-align-center')).toBeFalsy();
		expect(dataTableHeaderCols.hasClass('cs-data-table-align-right')).toBeFalsy();
		dataTableRows.forEach((row) => {
			expect(row.find('.cs-data-table-cell').at(0).hasClass('cs-data-table-align-center')).toBeFalsy();
			expect(row.find('.cs-data-table-cell').at(0).hasClass('cs-data-table-align-right')).toBeFalsy();
		});
		// Make sure the wrap prop is false
		expect(dataTableHeaderCols.find('.cs-data-table-column-wrap')).toHaveLength(0);
		dataTableRows.forEach((row) => {
			expect(row.find('.cs-data-table-cell.cs-data-table-column-wrap')).toHaveLength(0);
		});
	});

	it('displays empty data table if no cols and rows', () => {
		const uut = mount(<CSDataTable columns={[]} rows={[]} />);
		const dataTableHeader = uut.find('CSDataTableHeader');
		const dataTableGroup = uut.find('CSDataTableGroup');

		expect(dataTableHeader.find('.cs-data-table-cell')).toHaveLength(0);
		expect(dataTableGroup.find('.cs-data-table-row')).toHaveLength(0);
	});

	it('should render table with no border', () => {
		const uut = shallow(<CSDataTable columns={columns} rows={rows} borderless />);
		expect(uut.find('.cs-data-table.cs-data-table-borderless')).toHaveLength(1);
	});

	it('should show column divider to the table', () => {
		const uut = shallow(<CSDataTable columns={columns} rows={rows} columnDividers />);
		expect(uut.find('.cs-data-table.cs-data-table-column-dividers')).toHaveLength(1);
	});

	it('should render table with density as compact', () => {
		const uut = shallow(<CSDataTable columns={columns} rows={rows} />);
		expect(uut.find('.cs-data-table.cs-data-table-density-comfortable')).toHaveLength(0);
		expect(uut.find('.cs-data-table.cs-data-table-density-spacious')).toHaveLength(0);
	});

	it('should render table with density as comfortable', () => {
		const uut = shallow(<CSDataTable columns={columns} rows={rows} density="comfortable" />);
		expect(uut.find('.cs-data-table.cs-data-table-density-comfortable')).toHaveLength(1);
	});

	it('should render table with density as spacious', () => {
		const uut = shallow(<CSDataTable columns={columns} rows={rows} density="spacious" />);
		expect(uut.find('.cs-data-table.cs-data-table-density-spacious')).toHaveLength(1);
	});

	it('should disable the hover', () => {
		const uut = shallow(<CSDataTable columns={columns} rows={rows} disableHover />);
		expect(uut.find('.cs-data-table.cs-data-table-disable-hover')).toHaveLength(1);
	});

	it('should render the table without head', () => {
		const uut = shallow(<CSDataTable columns={columns} rows={rows} headless />);
		expect(uut.find('.cs-data-table.cs-data-table-headless')).toHaveLength(1);
		expect(uut.find('CSDataTableHeader')).toHaveLength(0);
	});

	it('should render the table with max height', () => {
		const dataTableHeight = '120px';
		const uut = shallow(<CSDataTable columns={columns} rows={rows} maxHeight={dataTableHeight} />);

		const dataTableStyle = uut.find('.cs-data-table-wrapper').get(0).props.style;
		expect(dataTableStyle).toHaveProperty('--cs-data-table-max-height', dataTableHeight);
	});

	it('should set the row height', () => {
		const rowHeight = '3rem';
		const uut = shallow(<CSDataTable columns={columns} rows={rows} rowHeight={rowHeight} />);

		const dataTableStyle = uut.find('.cs-data-table-wrapper').get(0).props.style;
		expect(dataTableStyle).toHaveProperty('--cs-data-table-row-height', rowHeight);
	});

	it('should render the table without fixed head', () => {
		const uut = shallow(<CSDataTable columns={columns} rows={rows} stickyHeader={false} />);
		expect(uut.find('.cs-data-table.cs-data-table-sticky-header')).toHaveLength(0);
	});

	it('should render the table with striped row', () => {
		const uut = shallow(<CSDataTable columns={columns} rows={rows} striped />);
		expect(uut.find('.cs-data-table.cs-data-table-striped')).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSDataTable columns={columns} rows={rows} className={customClass} />);
		const dataTable = uut.find(`.cs-data-table.${customClass}`);

		expect(dataTable).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSDataTable columns={columns} rows={rows} id={customId} />);
		const dataTable = uut.find(`.cs-data-table#${customId}`);

		expect(dataTable).toHaveLength(1);
	});

	it('should have title attribute in each columns', () => {
		const columnWithTitle = [
			{
				key: 'country',
				header: 'country',
				title: true,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={columnWithTitle} rows={rows} />);
		const dataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');
		dataTableRows.forEach((row) => {
			const tableBodyCell = row.find('.cs-data-table-cell').at(0).find('.cs-data-table-truncate');
			const cellText = tableBodyCell.text();
			expect(row.find('.cs-data-table-cell').at(0).find('.cs-data-table-truncate').prop('title')).toBe(cellText);
		});
	});

	it('should have align particular column to left', () => {
		const columnAlignCenter = [
			{
				key: 'country',
				header: 'country',
				align: 'left' as CSDataTableColumnAlign,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={columnAlignCenter} rows={rows} />);
		const dataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');
		const dataTableHeaderCols = uut.find('.cs-data-table-header .cs-data-table-cell').at(0);

		expect(dataTableHeaderCols.hasClass('cs-data-table-align-left')).toBeTruthy();
		dataTableRows.forEach((row) => {
			expect(row.find('.cs-data-table-cell').at(0).hasClass('cs-data-table-align-left')).toBeTruthy();
		});
	});

	it('should have align particular column to center', () => {
		const columnAlignCenter = [
			{
				key: 'country',
				header: 'country',
				align: 'center' as CSDataTableColumnAlign,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={columnAlignCenter} rows={rows} />);
		const dataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');
		const dataTableHeaderCols = uut.find('.cs-data-table-header .cs-data-table-cell').at(0);

		expect(dataTableHeaderCols.hasClass('cs-data-table-align-center')).toBeTruthy();
		dataTableRows.forEach((row) => {
			expect(row.find('.cs-data-table-cell').at(0).hasClass('cs-data-table-align-center')).toBeTruthy();
		});
	});

	it('should have align particular column to right', () => {
		const columnAlignRight = [
			{
				key: 'country',
				header: 'country',
				align: 'right' as CSDataTableColumnAlign,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={columnAlignRight} rows={rows} />);
		const dataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');
		const dataTableHeaderCols = uut.find('.cs-data-table-header .cs-data-table-cell').at(0);

		expect(dataTableHeaderCols.hasClass('cs-data-table-align-right')).toBeTruthy();
		dataTableRows.forEach((row) => {
			expect(row.find('.cs-data-table-cell').at(0).hasClass('cs-data-table-align-right')).toBeTruthy();
		});
	});

	it('should have column class name', () => {
		const className = 'custom-class';
		const columnClassNames = [
			{
				key: 'country',
				header: 'country',
				columnClassName: className,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={columnClassNames} rows={rows} />);
		const dataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');
		const dataTableHeaderCols = uut.find('.cs-data-table-header .cs-data-table-cell').at(0);
		expect(dataTableHeaderCols.hasClass(className)).toBeTruthy();
		dataTableRows.forEach((row) => {
			expect(row.find('.cs-data-table-cell').at(0).hasClass(className)).toBeTruthy();
		});
	});

	it('should have cell class name', () => {
		const className = 'custom-class';
		const columnClassNames = [
			{
				key: 'country',
				header: 'country',
				cellClassName: className,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={columnClassNames} rows={rows} />);
		const dataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');
		dataTableRows.forEach((row) => {
			expect(row.find('.cs-data-table-cell').at(0).hasClass(className)).toBeTruthy();
		});
	});

	it('should have  class name', () => {
		const customClassName = 'custom-class';
		const columnClassNames = [
			{
				key: 'population',
				header: 'Population',
				className: customClassName,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={columnClassNames} rows={rows} />);
		const dataTableHeaderCols = uut.find('.cs-data-table-header .cs-data-table-cell').at(0);
		expect(dataTableHeaderCols.hasClass(customClassName)).toBeTruthy();
	});

	it('should set flexbox grow', () => {
		const cellGrow = 3;
		const columnClassNames = [
			{
				key: 'country',
				header: 'country',
				grow: cellGrow,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={columnClassNames} rows={rows} />);
		const dataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');
		const dataTableHeaderCols = uut.find('.cs-data-table-header .cs-data-table-cell').get(0);

		const dataTableHeaderCellStyle = dataTableHeaderCols.props.style;
		expect(dataTableHeaderCellStyle).toHaveProperty('--cs-data-table-column-flex', cellGrow);

		dataTableRows.forEach((row) => {
			const dataTableCellStyle = row.find('.cs-data-table-cell').get(0).props.style;
			expect(dataTableCellStyle).toHaveProperty('--cs-data-table-column-flex', cellGrow);
		});
	});

	it('should have header as string', () => {
		const uut = mount(<CSDataTable columns={columns} rows={rows} />);
		const dataTableHeaderCols = uut.find('.cs-data-table-header .cs-data-table-cell').at(0);
		expect(dataTableHeaderCols.find('.cs-data-table-truncate').text()).toContain(columns[0].header);
	});

	it('should have header as element', () => {
		const columnIcon = [
			{
				key: 'country',
				header: <CSIcon name="date_input" />,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={columnIcon} rows={rows} />);
		const dataTableHeaderCols = uut.find('.cs-data-table-header .cs-data-table-cell').at(0);
		expect(dataTableHeaderCols.find('CSIcon')).toHaveLength(1);
	});

	it('should have render prop in column', () => {
		const columnRender = [
			{
				key: 'country',
				header: 'country',
				render: (row: CSDataTableRowWithMetaInterface) => <CSChip text={row.data?.location} />,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={columnRender} rows={rows} />);
		const dataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');

		dataTableRows.forEach((row) => {
			const dataTableRenderChip = row.find('.cs-data-table-row .cs-data-table-cell').at(0).find('CSChip');
			expect(dataTableRenderChip).toHaveLength(1);
		});
	});

	it('should have given column width', () => {
		const collWidth = '320px';
		const columnsWidth = [
			{
				key: 'country',
				header: 'country',
				width: collWidth,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={columnsWidth} rows={rows} />);
		const dataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');
		const dataTableHeaderCols = uut.find('.cs-data-table-header .cs-data-table-cell').get(0);

		const dataTableHeaderCellStyle = dataTableHeaderCols.props.style;
		expect(dataTableHeaderCellStyle).toHaveProperty('--cs-data-table-column-width', collWidth);

		dataTableRows.forEach((row) => {
			const dataTableCellStyle = row.find('.cs-data-table-cell').get(0).props.style;
			expect(dataTableCellStyle).toHaveProperty('--cs-data-table-column-width', collWidth);
		});
	});

	it('should wrap particular column', () => {
		const columnClassNames = [
			{
				key: 'country',
				header: 'country',
				wrap: true,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={columnClassNames} rows={rows} />);
		const dataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');
		const dataTableHeaderCols = uut.find('.cs-data-table-header .cs-data-table-cell').at(0);

		const headerCol = dataTableHeaderCols.find('.cs-data-table-column-wrap');
		expect(headerCol).toHaveLength(1);

		dataTableRows.forEach((row) => {
			const wrapColumn = row.find('.cs-data-table-row .cs-data-table-cell').at(0).find('.cs-data-table-column-wrap');
			expect(wrapColumn).toHaveLength(1);
		});
	});

	it('should have basic Hierarchy', () => {
		const childrenRows = [
			{
				key: 'london',
				children: rows,
				data: {
					name: 'London',
					population: 1153235,
					area: 641,
					timezone: 'CET/CEST',
					elevation: 158,
					country: 'Croatia',
				},
			},
		];
		const uut = mount(<CSDataTable columns={columns} rows={childrenRows} />);
		const dataTableRowWrapper = uut.find('.cs-data-table-body .cs-data-table-row-wrapper').at(0);
		const dataTableRowBtn = dataTableRowWrapper.find('.cs-data-table-cell').first().find('CSButton').first();

		expect(dataTableRowBtn.prop('label')).toBe('Expand row');
		expect(dataTableRowBtn.prop('iconRotate')).toBe(-90);
		expect(dataTableRowWrapper.find('.cs-data-table-group')).toHaveLength(0);

		dataTableRowBtn.first().simulate('click');
		const hierarchyRowWrapper = uut.find('.cs-data-table-body .cs-data-table-row-wrapper').at(0);

		expect(hierarchyRowWrapper.find('.cs-data-table-cell').at(0).find('CSButton').first()
			.prop('label')).toBe('Collapse row');
		expect(hierarchyRowWrapper.find('.cs-data-table-cell').at(0).find('CSButton').first()
			.prop('iconRotate')).toBe(null);
		expect(hierarchyRowWrapper.find('.cs-data-table-group')).toHaveLength(1);
	});

	it('should have hierarchy with defaultCollapsed', () => {
		const childrenRows = [
			{
				key: 'london',
				children: rows,
				data: {
					name: 'London',
					population: 1153235,
					area: 641,
					timezone: 'CET/CEST',
					elevation: 158,
					country: 'Croatia',
				},
			},
		];

		const uut = mount(<CSDataTable columns={columns} defaultCollapsed={false} rows={childrenRows} />);
		const dataTableRowWrapper = uut.find('.cs-data-table-body .cs-data-table-row-wrapper').at(0);
		const dataTableRowBtn = dataTableRowWrapper.find('.cs-data-table-cell').first().find('CSButton').first();
		expect(uut.prop('defaultCollapsed')).toBeFalsy();
		expect(dataTableRowBtn.prop('label')).toBe('Collapse row');
		const childRows = dataTableRowWrapper.find('.cs-data-table-group');
		expect(childRows).toHaveLength(1);
	});

	it('should have custom hierarchy with collapsible false', () => {
		const childrenRows = [
			{
				key: 'london',
				children: rows,
				data: {
					name: 'London',
					population: 1153235,
					area: 641,
					timezone: 'CET/CEST',
					elevation: 158,
					country: 'Croatia',
				},
			},
		];
		const uut = mount(<CSDataTable collapsible={false} columns={columns} rows={childrenRows} />);
		const dataTableRowWrapper = uut.find('.cs-data-table-body .cs-data-table-row-wrapper').at(0);
		expect(uut.prop('collapsible')).toBeFalsy();
		const childRows = dataTableRowWrapper.find('.cs-data-table-group');
		expect(childRows).toHaveLength(0);
	});

	it('should have subsection as base', () => {
		const sectionRender = (row: CSDataTableRowWithMetaInterface) => (
			<div className="custom-classname">{row.data!.country}</div>
		);
		const uut = mount(<CSDataTable columns={columns} rows={rows} subsectionRender={sectionRender} />);
		const dataTableRowWrapper = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');

		dataTableRowWrapper.forEach((row, index) => {
			const subsectionBtn = row.find('.cs-data-table-cell').first().find('CSButton').first();
			expect(subsectionBtn).toHaveLength(1);
			expect(subsectionBtn.prop('label')).toBe('Expand row');
			expect(subsectionBtn.prop('iconRotate')).toBe(-90);
			expect(row.find('.cs-data-table-subsection')).toHaveLength(0);

			subsectionBtn.first().simulate('click');
			const subsectionIndex = uut.find('.cs-data-table-body .cs-data-table-row-wrapper').at(index);

			expect(subsectionIndex.find('.cs-data-table-cell').at(0).find('CSButton').first()
				.prop('label')).toBe('Collapse row');
			expect(subsectionIndex.find('.cs-data-table-cell').at(0).find('CSButton').first()
				.prop('iconRotate')).toBe(null);
			expect(subsectionIndex.find('.cs-data-table-subsection')).toHaveLength(1);
		});
	});

	it('should have subsection with Hierarchy', () => {
		const childrenRows = [
			{
				key: 'london',
				children: rows,
				data: {
					name: 'London',
					population: 1153235,
					area: 641,
					timezone: 'CET/CEST',
					elevation: 158,
					country: 'Croatia',
				},
			},
		];
		const handleOnClick = jest.fn();
		const sectionRender = (row: CSDataTableRowWithMetaInterface) => (
			<div className="custom-classname">{row.data!.country}</div>
		);
		const uut = mount(<CSDataTable columns={columns} rows={childrenRows} subsectionRender={sectionRender} onClick={handleOnClick} />);
		const dataTableRowWrapper = uut.find('.cs-data-table-body .cs-data-table-row-wrapper').at(0);
		const dataTableRowBtn = dataTableRowWrapper.find('.cs-data-table-cell').first().find('CSButton').first();
		dataTableRowBtn.first().simulate('click');

		const subsection = uut.find('.cs-data-table-subsection');
		expect(subsection).toHaveLength(1);
		const subsectionDataTableRows = uut.find('.cs-data-table-subsection + CSDataTableGroup').find('.cs-data-table-row-wrapper');
		subsectionDataTableRows.forEach((row, index) => {
			const subsectionBtn = row.find('.cs-data-table-cell').first().find('CSButton').first();
			expect(subsectionBtn.prop('label')).toBe('Expand row');
			expect(subsectionBtn.prop('iconRotate')).toBe(-90);
			expect(dataTableRowWrapper.at(index).find('.cs-data-table-subsection')).toHaveLength(0);

			subsectionBtn.first().simulate('click');

			const subsectionIndex = uut.find('.cs-data-table-body .cs-data-table-row-wrapper').at(index);
			expect(subsectionIndex.find('.cs-data-table-cell').first().find('CSButton').first()
				.prop('label')).toBe('Collapse row');
			expect(subsectionIndex.find('.cs-data-table-cell').first().find('CSButton').first()
				.prop('iconRotate')).toBe(null);
		});
	});

	it('should have selective subsection in a row', () => {
		const area = 500;
		const renderSubsection = (row: CSDataTableRowWithMetaInterface) => (
			row.data!.area > area ? <div className="custom-classname">{row.data!.country}</div> : null
		);
		const uut = mount(<CSDataTable columns={columns} rows={rows} subsectionRender={renderSubsection} />);
		const dataTableRowWrapper = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');

		dataTableRowWrapper.forEach((row) => {
			const tableBodyRowCell = row.find('.cs-data-table-cell').at(3);
			const subsectionBtn = tableBodyRowCell.find('CSButton').first();

			if (Number(tableBodyRowCell.find('.cs-data-table-truncate').text()) > area) {
				expect(subsectionBtn).toHaveLength(1);
				expect(subsectionBtn.prop('iconRotate')).toBe(-90);
			} else {
				expect(subsectionBtn).toHaveLength(0);
			}
		});
	});

	it('should have onCollapseClick false', () => {
		const onCollapseClick = (event: React.MouseEvent<HTMLButtonElement>, row: CSDataTableRowWithMetaInterface) => {
			row.meta.toggleExpanded();
			alert(`${row.data!.name} children are now ${!row.meta.expanded ? 'visible' : 'hidden'}.`);
		};
		const childrenRows = [
			{
				key: 'london',
				children: rows,
				data: {
					name: 'London',
					population: 1153235,
					area: 641,
					timezone: 'CET/CEST',
					elevation: 158,
					country: 'Croatia',
				},
			},
		];
		const uut = mount(<CSDataTable columns={columns} onCollapseClick={onCollapseClick} rows={childrenRows} />);
		const dataTableRowWrapper = uut.find('.cs-data-table-body .cs-data-table-row-wrapper').at(0);
		expect(uut.prop('collapsible')).toBeFalsy();
		const childRows = dataTableRowWrapper.find('.cs-data-table-group');
		expect(childRows).toHaveLength(0);
	});

	it('should have basic checkbox selection', () => {
		const uut = mount(<CSDataTable columns={columns} rows={rows} selectable />);
		const dataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');

		dataTableRows.forEach((row) => {
			const checkBoxWrapper = row.find('.cs-data-table-cell.cs-data-table-cell-checkbox').find('CSCheckbox');
			expect(checkBoxWrapper.prop('checked')).toBeFalsy();
			expect(checkBoxWrapper.prop('label')).toBe('Select row');
			expect(checkBoxWrapper).toHaveLength(1);
		});
	});

	it('should have basic checkbox selection with OnSelectChange', () => {
		const handleSelectChange = jest.fn();
		const uut = mount(<CSDataTable columns={columns} rows={rows} selectable onSelectChange={handleSelectChange} />);
		const dataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');

		dataTableRows.forEach((row) => {
			const checkBoxWrapper = row.find('.cs-data-table-cell.cs-data-table-cell-checkbox').find('CSCheckbox').first();
			expect(checkBoxWrapper.prop('checked')).toBeFalsy();
			expect(checkBoxWrapper.prop('label')).toBe('Select row');
			checkBoxWrapper.simulate('click');
		});
	});

	it('should have advance checkbox selection with wrap', () => {
		const handleSelectChange = jest.fn();
		const selectedKey = '';
		const advanceCols = [
			{
				key: 'country',
				wrap: true,
				width: '6rem',
				render: () => (
					<CSButton
						label={'Enable' && 'Disable'}
						onClick={() => {}}
					/>
				),
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={advanceCols} rows={rows} selectable multiselect selectedKeys={selectedKey} onSelectChange={handleSelectChange} />);
		const dataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');

		dataTableRows.forEach((row) => {
			const checkBoxWrapper = row.find('.cs-data-table-cell.cs-data-table-cell-checkbox').find('CSCheckbox');
			expect(checkBoxWrapper).toHaveLength(1);
			checkBoxWrapper.first().simulate('click');
			const rowColumnWrap = row.find('.cs-data-table-column-wrap');
			expect(rowColumnWrap).toHaveLength(1);
			const rowDisableBtn = rowColumnWrap.find('CSButton').first();
			expect(rowDisableBtn).toHaveLength(1);
		});
	});

	it('should select the all rows by selecting header checkbox', () => {
		const handleSelectChange = jest.fn();
		const checkboxHeader = {
			label: 'Select All',
			labelHidden: true,
			checked: true,
			onChange: () => {},
		};
		const uut = mount(<CSDataTable columns={columns} rows={rows} selectable multiselect onSelectChange={handleSelectChange} headerCheckbox={checkboxHeader} />);
		const dataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');
		const dataTableHeaderCheckbox = uut.find('.cs-data-table-header .cs-data-table-cell-checkbox').find('CSCheckbox');
		expect(uut.find('.cs-data-table.cs-data-table-checkbox-selection')).toHaveLength(1);
		expect(uut.find('CSDataTableHeader').prop('headerCheckbox')).toBe(checkboxHeader);
		expect(dataTableHeaderCheckbox).toHaveLength(1);
		expect(dataTableHeaderCheckbox.prop('label')).toBe('Select All');

		dataTableRows.forEach(async (row) => {
			const checkBoxWrapper = row.find('.cs-data-table-cell.cs-data-table-cell-checkbox').find('CSCheckbox');
			expect(checkBoxWrapper).toHaveLength(1);
		});
	});

	it('should able to select the whole row', () => {
		const uut = mount(<CSDataTable columns={columns} rows={rows} selectable selectionType="row" />);
		const dataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');

		dataTableRows.forEach((row) => {
			const dataTableRow = row.find('.cs-data-table-row');
			expect(dataTableRow.prop('aria-selected')).toBeFalsy();
		});
	});

	it('should select the whole row with onSelectChange', () => {
		const handleSelectChange = jest.fn();
		const uut = mount(<CSDataTable columns={columns} rows={rows} selectable selectionType="row" onSelectChange={handleSelectChange} />);
		const dataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');

		dataTableRows.forEach((row, index) => {
			const rowCheckbox = row.find('.cs-data-table-cell-checkbox').first();
			expect(rowCheckbox.hasClass('cs-data-table-cell-checkbox-hidden')).toBeTruthy();
			const dataTableRow = row.find('.cs-data-table-row');
			dataTableRow.first().simulate('click');
			expect(handleSelectChange).toHaveBeenCalledTimes(index + 1);
		});
	});

	it('should select all rows except restricted rows', () => {
		const handleSelectChange = jest.fn();
		const restrictedRows = [{
			key: 'country',
			selectable: false,
			data: {
				name: 'London',
				population: 9950000,
				area: 1738,
				timezone: 'GMT/BST',
				elevation: 11,
			},
		}, ...rows];
		const uut = mount(<CSDataTable columns={columns} rows={restrictedRows} selectable multiselect onSelectChange={handleSelectChange} />);
		const dataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper').at(0);
		const checkBoxWrapper = dataTableRows.find('.cs-data-table-cell-checkbox').find('.cs-checkbox-wrapper');
		expect(checkBoxWrapper).toHaveLength(0);
	});
});
