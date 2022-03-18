import * as React from 'react';
import { shallow, mount } from 'enzyme';
import CSDataTable, { CSDataTableColumnAlign, CSDataTableRowWithMetaInterface } from '../../components/data-table/CSDataTable';
import { CSCheckboxLabelPosition, CSCheckboxVariant } from '../../components/CSCheckbox';
import { CSAutopositions } from '../../helpers/autoposition/cs-autoposition-types';
import { actions, icons } from '../common/custom-data';

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

// This is meant to be used
// as a generic object for testing
// row specific attributes and
// can be used well with the
// spread syntax to reduce repetition
const additionalRow = {
	key: 'london',
	data: {
		name: 'London',
		population: 9950000,
		area: 1738,
		timezone: 'GMT/BST',
		elevation: 11,
	},
};

// Generate a subset of rows
// that can be used to test props
// that should only apply to some rows
const rowsSubset = rows.slice(0, -1);
// Generate an array f keys from the objects above
const rowKeysSubset = rowsSubset.map((rowSubset) => rowSubset.key);

const sectionRender = (row: CSDataTableRowWithMetaInterface) => row.data!.country;

describe('<CSDataTable />', () => {
	it('should render default CSDataTable', () => {
		const uut = mount(<CSDataTable columns={columns} rows={rows} />);
		const dataTableFirstHeaderCell = uut.find('CSDataTableHeader .cs-data-table-cell').first();
		const dataTableRows = uut.find('.cs-data-table-body CSDataTableRow');

		// Make sure table header is shown
		expect(uut.find('CSDataTableHeader')).toHaveLength(1);
		// Make sure table group is shown
		expect(uut.find('CSDataTableGroup')).toHaveLength(1);
		// Make sure borders are visible
		expect(uut.find('.cs-data-table-borderless')).toHaveLength(0);
		// Make sure rows aren't striped
		expect(uut.find('.cs-data-table-striped')).toHaveLength(0);
		// Make sure the header is sticky
		expect(uut.find('.cs-data-table-sticky-header')).toHaveLength(1);
		// Make sure hover styles are set
		expect(uut.find('.cs-data-table-disable-hover')).toHaveLength(0);
		// Make sure the content is aligned left
		expect(dataTableFirstHeaderCell.hasClass('cs-data-table-align-center')).toBeFalsy();
		expect(dataTableFirstHeaderCell.hasClass('cs-data-table-align-right')).toBeFalsy();
		dataTableRows.forEach((row) => {
			expect(row.find('.cs-data-table-cell').first().hasClass('cs-data-table-align-center')).toBeFalsy();
			expect(row.find('.cs-data-table-cell').first().hasClass('cs-data-table-align-right')).toBeFalsy();
		});
		// Make sure wrapping is disabled
		expect(dataTableFirstHeaderCell.find('.cs-data-table-column-wrap')).toHaveLength(0);
		dataTableRows.forEach((row) => {
			expect(row.find('.cs-data-table-cell.cs-data-table-column-wrap')).toHaveLength(0);
		});
	});

	it('displays empty data table when no data is given', () => {
		const uut = mount(<CSDataTable columns={[]} rows={[]} />);
		const dataTableHeader = uut.find('CSDataTableHeader');
		const dataTableGroup = uut.find('CSDataTableGroup');

		expect(dataTableHeader.find('.cs-data-table-cell')).toHaveLength(0);
		expect(dataTableGroup.find('.cs-data-table-row')).toHaveLength(0);
	});

	it('should hide horizontal borders', () => {
		const uut = shallow(<CSDataTable columns={columns} rows={rows} borderless />);
		expect(uut.find('.cs-data-table.cs-data-table-borderless')).toHaveLength(1);
	});

	it('should show column dividers', () => {
		const uut = shallow(<CSDataTable columns={columns} rows={rows} columnDividers />);
		expect(uut.find('.cs-data-table.cs-data-table-column-dividers')).toHaveLength(1);
	});

	it('should render table with compact density', () => {
		const uut = shallow(<CSDataTable columns={columns} rows={rows} />);
		expect(uut.find('.cs-data-table.cs-data-table-density-comfortable')).toHaveLength(0);
		expect(uut.find('.cs-data-table.cs-data-table-density-spacious')).toHaveLength(0);
	});

	it('should render table with comfortable density', () => {
		const uut = shallow(<CSDataTable columns={columns} rows={rows} density="comfortable" />);
		expect(uut.find('.cs-data-table.cs-data-table-density-comfortable')).toHaveLength(1);
	});

	it('should render table with spacious density', () => {
		const uut = shallow(<CSDataTable columns={columns} rows={rows} density="spacious" />);
		expect(uut.find('.cs-data-table.cs-data-table-density-spacious')).toHaveLength(1);
	});

	it('should disable hover', () => {
		const uut = shallow(<CSDataTable columns={columns} rows={rows} disableHover />);
		expect(uut.find('.cs-data-table.cs-data-table-disable-hover')).toHaveLength(1);
	});

	it('should render the table without a header', () => {
		const uut = shallow(<CSDataTable columns={columns} rows={rows} headless />);
		expect(uut.find('.cs-data-table.cs-data-table-headless')).toHaveLength(1);
		expect(uut.find('CSDataTableHeader')).toHaveLength(0);
	});

	it('should render the table with max height', () => {
		const maxHeight = '120px';
		const uut = shallow(<CSDataTable columns={columns} rows={rows} maxHeight={maxHeight} />);

		const dataTableStyle = uut.find('.cs-data-table-wrapper').get(0).props.style;
		expect(dataTableStyle).toHaveProperty('--cs-data-table-max-height', maxHeight);
	});

	it('should set the row height', () => {
		const rowHeight = '3rem';
		const uut = shallow(<CSDataTable columns={columns} rows={rows} rowHeight={rowHeight} />);

		const dataTableStyle = uut.find('.cs-data-table-wrapper').get(0).props.style;
		expect(dataTableStyle).toHaveProperty('--cs-data-table-row-height', rowHeight);
	});

	it('should render the table without a sticky header', () => {
		const uut = shallow(<CSDataTable columns={columns} rows={rows} stickyHeader={false} />);
		expect(uut.find('.cs-data-table.cs-data-table-sticky-header')).toHaveLength(0);
	});

	it('should render the table with striped rows', () => {
		const uut = shallow(<CSDataTable columns={columns} rows={rows} striped />);
		expect(uut.find('.cs-data-table.cs-data-table-striped')).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSDataTable columns={columns} rows={rows} id={customId} />);
		const dataTable = uut.find(`.cs-data-table#${customId}`);

		expect(dataTable).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(<CSDataTable columns={columns} rows={rows} className={customClass} />);
		const dataTable = uut.find(`.cs-data-table.${customClass}`);

		expect(dataTable).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const testId = 'test-id';
		const uut = shallow(<CSDataTable columns={columns} rows={rows} data-testid={testId} />);
		const dataTable = uut.find({ 'data-testid': testId });
		expect(dataTable).toHaveLength(1);
	});
});

describe('<CSDataTable /> - columns', () => {
	it('should left-align column contents', () => {
		const extendedColumns = [
			{
				key: 'country',
				header: 'country',
				align: 'left' as CSDataTableColumnAlign,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={extendedColumns} rows={rows} />);

		const dataTableHeaderCells = uut.find('CSDataTableHeader .cs-data-table-cell');
		expect(dataTableHeaderCells.at(0).hasClass('cs-data-table-align-left')).toBeTruthy();

		const dataTableRows = uut.find('.cs-data-table-body CSDataTableRow');
		dataTableRows.forEach((row) => {
			expect(row.find('.cs-data-table-cell').at(0).hasClass('cs-data-table-align-left')).toBeTruthy();
		});
	});

	it('should center-align column contents', () => {
		const extendedColumns = [
			{
				key: 'country',
				header: 'country',
				align: 'center' as CSDataTableColumnAlign,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={extendedColumns} rows={rows} />);

		const dataTableHeaderCells = uut.find('CSDataTableHeader .cs-data-table-cell');
		expect(dataTableHeaderCells.at(0).hasClass('cs-data-table-align-center')).toBeTruthy();

		const dataTableRows = uut.find('.cs-data-table-body CSDataTableRow');
		dataTableRows.forEach((row) => {
			expect(row.find('.cs-data-table-cell').at(0).hasClass('cs-data-table-align-center')).toBeTruthy();
		});
	});

	it('should right-align column contents', () => {
		const extendedColumns = [
			{
				key: 'country',
				header: 'country',
				align: 'right' as CSDataTableColumnAlign,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={extendedColumns} rows={rows} />);

		const dataTableHeaderCells = uut.find('CSDataTableHeader .cs-data-table-cell');
		expect(dataTableHeaderCells.at(0).hasClass('cs-data-table-align-right')).toBeTruthy();

		const dataTableRows = uut.find('.cs-data-table-body CSDataTableRow');
		dataTableRows.forEach((row) => {
			expect(row.find('.cs-data-table-cell').at(0).hasClass('cs-data-table-align-right')).toBeTruthy();
		});
	});

	it('should apply a custom CSS class to column body cells', () => {
		const cellClassName = 'custom-class';
		const extendedColumns = [
			{
				key: 'country',
				header: 'country',
				cellClassName,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={extendedColumns} rows={rows} />);

		const dataTableRows = uut.find('.cs-data-table-body CSDataTableRow');
		dataTableRows.forEach((row) => {
			expect(row.find('.cs-data-table-cell').at(0).hasClass(cellClassName)).toBeTruthy();
		});
	});

	it('should apply a dynamic CSS class to column body cells', () => {
		const className = 'custom-class';
		const cellClassName = (row: CSDataTableRowWithMetaInterface) => (row.data!.country === 'Croatia' ? className : '');
		const extendedColumns = [
			{
				key: 'country',
				header: 'country',
				cellClassName,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={extendedColumns} rows={rows} />);

		const dataTableRows = uut.find('.cs-data-table-body CSDataTableRow');
		dataTableRows.forEach((row, rowIndex) => {
			expect(row.find('.cs-data-table-cell').at(0).hasClass(className)).toBe(rows[rowIndex].data.country === 'Croatia');
		});
	});

	it('should apply a custom CSS class to all column cells', () => {
		const columnClassName = 'custom-class';
		const extendedColumns = [
			{
				key: 'country',
				header: 'country',
				columnClassName,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={extendedColumns} rows={rows} />);

		const dataTableHeaderCols = uut.find('CSDataTableHeader .cs-data-table-cell');
		expect(dataTableHeaderCols.at(0).hasClass(columnClassName)).toBeTruthy();

		const dataTableRows = uut.find('.cs-data-table-body CSDataTableRow');
		dataTableRows.forEach((row) => {
			expect(row.find('.cs-data-table-cell').at(0).hasClass(columnClassName)).toBeTruthy();
		});
	});

	it('should apply flexbox grow to the column', () => {
		const grow = 3;
		const extendedColumns = [
			{
				key: 'country',
				header: 'country',
				grow,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={extendedColumns} rows={rows} />);

		const dataTableHeaderCells = uut.find('CSDataTableHeader .cs-data-table-cell');
		const dataTableHeaderFirstCellStyle = dataTableHeaderCells.get(0).props.style;
		expect(dataTableHeaderFirstCellStyle).toHaveProperty('--cs-data-table-column-flex', grow);

		const dataTableRows = uut.find('.cs-data-table-body CSDataTableRow');
		dataTableRows.forEach((row) => {
			const dataTableFirstCellStyle = row.find('.cs-data-table-cell').get(0).props.style;
			expect(dataTableFirstCellStyle).toHaveProperty('--cs-data-table-column-flex', grow);
		});
	});

	it('should render custom cell content', () => {
		const render = (row: CSDataTableRowWithMetaInterface) => <div className="custom-content">{row.data!.name}</div>;
		const extendedColumns = [
			{
				key: 'country',
				header: 'country',
				render,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={extendedColumns} rows={rows} />);

		const dataTableRows = uut.find('.cs-data-table-body CSDataTableRow');
		dataTableRows.forEach((row, rowIndex) => {
			const dataTableFirstCellContent = row.find('.cs-data-table-cell').at(0).find('.custom-content');
			expect(dataTableFirstCellContent).toHaveLength(1);
			expect(dataTableFirstCellContent.text()).toBe(rows[rowIndex].data!.name);
		});
	});

	it('should render a string header', () => {
		const uut = mount(<CSDataTable columns={columns} rows={rows} />);
		const dataTableHeaderCells = uut.find('CSDataTableHeader .cs-data-table-cell');
		expect(dataTableHeaderCells.at(0).find('.cs-data-table-truncate').text()).toBe(columns[0].header);
	});

	it('should render a custom element header', () => {
		const extendedColumns = [
			{
				key: 'country',
				header: <div className="custom-header" />,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={extendedColumns} rows={rows} />);
		const dataTableHeaderCells = uut.find('CSDataTableHeader .cs-data-table-cell');
		expect(dataTableHeaderCells.at(0).find('div.custom-header')).toHaveLength(1);
	});

	it('should provide header title', () => {
		const extendedColumns = [
			{
				key: 'country',
				header: 'country',
				headerTitle: true,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={extendedColumns} rows={rows} />);

		const dataTableHeaderFirstCell = uut.find('CSDataTableHeader .cs-data-table-cell .cs-data-table-truncate').at(0);
		expect(dataTableHeaderFirstCell.props().title).toBe(extendedColumns[0].header);
	});

	it('should provide column cell titles', () => {
		const extendedColumns = [
			{
				key: 'country',
				header: 'country',
				title: true,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={extendedColumns} rows={rows} />);

		const dataTableRows = uut.find('.cs-data-table-body CSDataTableRow');
		dataTableRows.forEach((row, rowIndex) => {
			const dataTableFirstCell = row.find('.cs-data-table-cell .cs-data-table-truncate').at(0);
			expect(dataTableFirstCell.props().title).toBe(String(rows[rowIndex].data.country));
		});
	});

	it('should apply custom column width', () => {
		const width = '320px';
		const extendedColumns = [
			{
				key: 'country',
				header: 'country',
				width,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={extendedColumns} rows={rows} />);

		const dataTableHeaderCells = uut.find('CSDataTableHeader .cs-data-table-cell');
		expect(dataTableHeaderCells.get(0).props.style).toHaveProperty('--cs-data-table-column-width', width);

		const dataTableRows = uut.find('.cs-data-table-body CSDataTableRow');
		dataTableRows.forEach((row) => {
			const dataTableCellStyle = row.find('.cs-data-table-cell').get(0).props.style;
			expect(dataTableCellStyle).toHaveProperty('--cs-data-table-column-width', width);
		});
	});

	it('should apply content wrapping to a column', () => {
		const extendedColumns = [
			{
				key: 'country',
				header: 'country',
				wrap: true,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={extendedColumns} rows={rows} />);

		const dataTableHeaderCells = uut.find('CSDataTableHeader .cs-data-table-cell');
		expect(dataTableHeaderCells.at(0).hasClass('cs-data-table-column-wrap')).toBeTruthy();

		const dataTableRows = uut.find('.cs-data-table-body CSDataTableRow');
		dataTableRows.forEach((row) => {
			const dataTableFirstCell = row.find('.cs-data-table-cell').at(0);
			expect(dataTableFirstCell.hasClass('cs-data-table-column-wrap')).toBeTruthy();
		});
	});

	it('should apply a CSS class to the column header', () => {
		const className = 'custom-class';
		const extendedColumns = [
			{
				key: 'population',
				header: 'Population',
				className,
			}, ...columns,
		];
		const uut = mount(<CSDataTable columns={extendedColumns} rows={rows} />);

		const dataTableHeaderCells = uut.find('CSDataTableHeader .cs-data-table-cell');
		expect(dataTableHeaderCells.at(0).hasClass(className)).toBeTruthy();
	});
});

describe('<CSDataTable /> - rows', () => {
	it('should set a custom row height', () => {
		const height = '4rem';
		const extendedRows = [{ ...additionalRow, height }, ...rows];
		const uut = mount(<CSDataTable columns={columns} rows={extendedRows} />);

		const dataTableFirstRow = uut.find('.cs-data-table-body .cs-data-table-row').at(0);
		expect(dataTableFirstRow.get(0).props.style).toHaveProperty('--cs-data-table-row-height', height);
	});

	it('should render a custom row', () => {
		const render = (row: CSDataTableRowWithMetaInterface) => <div className="custom-row">{row.data!.name}</div>;
		const extendedRows = [{ ...additionalRow, render }, ...rows];
		const uut = mount(<CSDataTable columns={columns} rows={extendedRows} />);

		const dataTableFirstRow = uut.find('.cs-data-table-body .cs-data-table-row').at(0).find('.custom-row');
		expect(dataTableFirstRow).toHaveLength(1);
		expect(dataTableFirstRow.text()).toBe(additionalRow.data.name);
	});

	it('should have a custom class name', () => {
		const className = 'custom-class';
		const extendedRows = [{ ...additionalRow, className }, ...rows];
		const uut = mount(<CSDataTable columns={columns} rows={extendedRows} />);

		const dataTableFirstRow = uut.find('.cs-data-table-body .cs-data-table-row-wrapper').at(0);
		expect(dataTableFirstRow.hasClass(className)).toBeTruthy();
	});
});

describe('<CSDataTable /> - selectability', () => {
	it('should be selectable with checkboxes', () => {
		const uut = mount(
			<CSDataTable
				columns={columns}
				rows={rows}
				selectable
				selectionType="checkbox"
			/>,
		);
		const dataTable = uut.find('.cs-data-table.cs-data-table-checkbox-selection');
		expect(dataTable).toHaveLength(1);

		const dataTableRowCheckboxes = uut.find('CSDataTableRow .cs-data-table-cell-checkbox > CSCheckbox');
		expect(dataTableRowCheckboxes).toHaveLength(rows.length);

		const dataTableFirstRowCheckbox = dataTableRowCheckboxes.first();
		expect(dataTableFirstRowCheckbox.prop('label')).toBe('Select row');
		expect(dataTableFirstRowCheckbox.prop('hidden')).toBeFalsy();
		expect(dataTableFirstRowCheckbox.prop('labelHidden')).toBeTruthy();
	});

	it('should not be selectable when overridden by row settings', () => {
		const extendedRows = [{ ...additionalRow, selectable: false }, ...rows];
		const uut = mount(<CSDataTable columns={columns} rows={extendedRows} selectable />);
		const dataTableRowCheckbox = uut.find('CSDataTableRow').first().find('CSCheckbox');
		expect(dataTableRowCheckbox).toHaveLength(0);
	});

	it('should be selectable with entire row selection', () => {
		const uut = mount(
			<CSDataTable
				columns={columns}
				rows={rows}
				selectable
				selectionType="row"
			/>,
		);
		const dataTable = uut.find('.cs-data-table.cs-data-table-row-selection');
		expect(dataTable).toHaveLength(1);

		const dataTableRowCheckboxes = uut.find('CSDataTableRow .cs-data-table-cell-checkbox.cs-data-table-cell-checkbox-hidden > CSCheckbox');
		expect(dataTableRowCheckboxes).toHaveLength(rows.length);

		const dataTableFirstRowCheckbox = dataTableRowCheckboxes.first();
		expect(dataTableFirstRowCheckbox.prop('hidden')).toBeTruthy();
	});

	it('should render selected checkboxes', () => {
		const uut = mount(
			<CSDataTable
				columns={columns}
				rows={rows}
				selectable
				selectedKeys={rowKeysSubset}
			/>,
		);
		const dataTableRows = uut.find('CSDataTableRow');

		dataTableRows.forEach((dataTableRow) => {
			const dataTableRowCheckbox = dataTableRow.find('CSCheckbox');
			const dataTableRowElement = dataTableRow.find('.cs-data-table-row');
			if (rowKeysSubset.includes((dataTableRow.prop('row') as any).key)) {
				expect(dataTableRowElement.prop('aria-selected')).toBeTruthy();
				expect(dataTableRowCheckbox.prop('checked')).toBeTruthy();
				expect(dataTableRowCheckbox.prop('label')).toEqual('Deselect row');
			} else {
				expect(dataTableRowElement.prop('aria-selected')).toBeFalsy();
				expect(dataTableRowCheckbox.prop('checked')).toBeFalsy();
				expect(dataTableRowCheckbox.prop('label')).toEqual('Select row');
			}
		});
	});

	it('render indeterminate checkboxes', () => {
		const uut = mount(
			<CSDataTable
				columns={columns}
				rows={rows}
				selectable
				indeterminateKeys={rowKeysSubset}
			/>,
		);
		const dataTableRows = uut.find('CSDataTableRow');

		dataTableRows.forEach((dataTableRow) => {
			if (rowKeysSubset.includes((dataTableRow.prop('row') as any).key)) {
				expect(dataTableRow.find('CSCheckbox').prop('indeterminate')).toBeTruthy();
			} else {
				expect(dataTableRow.find('CSCheckbox').prop('indeterminate')).toBeFalsy();
			}
		});
	});

	it('render read-only checkboxes', () => {
		const uut = mount(
			<CSDataTable
				columns={columns}
				rows={rows}
				selectable
				readOnlyKeys={rowKeysSubset}
			/>,
		);
		const dataTableRows = uut.find('CSDataTableRow');

		dataTableRows.forEach((dataTableRow) => {
			if (rowKeysSubset.includes((dataTableRow.prop('row') as any).key)) {
				expect(dataTableRow.find('CSCheckbox').prop('readOnly')).toBeTruthy();
			} else {
				expect(dataTableRow.find('CSCheckbox').prop('readOnly')).toBeFalsy();
			}
		});
	});

	it('should render selected rows', () => {
		const uut = mount(
			<CSDataTable
				columns={columns}
				rows={rows}
				selectable
				selectionType="row"
				selectedKeys={rowKeysSubset}
			/>,
		);
		const dataTableRows = uut.find('CSDataTableRow');

		dataTableRows.forEach((dataTableRow) => {
			const dataTableRowCheckbox = dataTableRow.find('CSCheckbox');
			const dataTableRowElement = dataTableRow.find('.cs-data-table-row');
			expect(dataTableRowCheckbox.prop('hidden')).toBeTruthy();

			if (rowKeysSubset.includes((dataTableRow.prop('row') as any).key)) {
				expect(dataTableRowElement.hasClass('cs-data-table-row-selected')).toBeTruthy();
				expect(dataTableRowElement.prop('aria-selected')).toBeTruthy();
				expect(dataTableRowCheckbox.prop('checked')).toBeTruthy();
				expect(dataTableRowCheckbox.prop('label')).toEqual('Deselect row');
			} else {
				expect(dataTableRowElement.hasClass('cs-data-table-row-selected')).toBeFalsy();
				expect(dataTableRowElement.prop('aria-selected')).toBeFalsy();
				expect(dataTableRowCheckbox.prop('checked')).toBeFalsy();
				expect(dataTableRowCheckbox.prop('label')).toEqual('Select row');
			}
		});
	});

	it('should use a working onSelectChange callback with checkboxes', () => {
		const handleSelectChange = jest.fn();
		const uut = mount(
			<CSDataTable
				columns={columns}
				rows={rows}
				selectable
				selectionType="checkbox"
				onSelectChange={handleSelectChange}
			/>,
		);
		const dataTableRowCheckbox = uut.find('CSDataTableRow CSCheckbox').first();
		dataTableRowCheckbox.prop('onChange')({ stopPropagation: () => {} } as React.ChangeEvent);
		expect(handleSelectChange).toHaveBeenCalledTimes(1);
	});

	it('should use a working onSelectChange callback with row select', () => {
		const handleSelectChange = jest.fn();
		const uut = mount(
			<CSDataTable
				columns={columns}
				rows={rows}
				selectable
				selectionType="row"
				onSelectChange={handleSelectChange}
			/>,
		);
		const dataTableRowElement = uut.find('CSDataTableRow .cs-data-table-row').first();
		dataTableRowElement.simulate('click');
		expect(handleSelectChange).toHaveBeenCalledTimes(1);
	});

	it('should pass headerCheckbox to CSCheckbox', () => {
		const headerCheckbox = {
			label: 'label',
			actions,
			borderRadius: '0',
			checked: true,
			disabled: true,
			error: true,
			errorMessage: 'error message',
			errorTooltip: true,
			helpText: 'help text',
			hidden: true,
			icons,
			indeterminate: true,
			labelHidden: true,
			labelPosition: 'right' as CSCheckboxLabelPosition,
			labelTitle: true,
			name: 'name',
			onBlur: () => {},
			onChange: () => {},
			onClick: () => {},
			onKeyDown: () => {},
			readOnly: true,
			required: true,
			title: 'title',
			tooltipPosition: 'bottom-left' as CSAutopositions,
			variant: 'brand' as CSCheckboxVariant,
			id: 'checkbox-id',
			className: 'checkbox-class-name',
		};

		const uut = mount(
			<CSDataTable
				columns={columns}
				rows={rows}
				selectable
				selectionType="checkbox"
				headerCheckbox={headerCheckbox}
			/>,
		);

		const dataTableHeaderCheckbox = uut.find('CSDataTableHeader CSCheckbox');
		expect(dataTableHeaderCheckbox.length).toBe(1);
		expect(dataTableHeaderCheckbox.props()).toMatchObject(headerCheckbox);
	});

	it('should support multiselect', () => {
		const uut = shallow(
			<CSDataTable
				columns={columns}
				rows={rows}
				selectable
				multiselect
			/>,
		);
		expect(uut.find('.cs-data-table').prop('aria-multiselectable')).toBeTruthy();
	});
});

describe('<CSDataTable /> - hierarchy', () => {
	it('should render children', () => {
		const extendedRows = [{ ...additionalRow, children: rows }];
		const uut = mount(<CSDataTable columns={columns} rows={extendedRows} />);
		const dataTableParentRow = uut.find('CSDataTableRow');
		expect(dataTableParentRow).toHaveLength(1);
		expect(dataTableParentRow.prop('aria-expanded')).toBeFalsy();
		expect((dataTableParentRow.prop('row') as any).key).toEqual(additionalRow.key);
		expect(uut.find('CSDataTableGroup')).toHaveLength(1);

		const parentRowElement = dataTableParentRow.find('.cs-data-table-row');
		expect(parentRowElement.prop('aria-level')).toEqual(1);
		expect(parentRowElement.prop('style')).toHaveProperty('--cs-data-table-column-offset', '2rem');

		const dataTableExpandButton = parentRowElement.find('CSButton').first();
		expect(dataTableExpandButton.prop('label')).toEqual('Expand row');
		expect(dataTableExpandButton.prop('iconRotate')).toEqual(-90);

		const dataTableCollapsedChildren = uut.find('CSDataTableRow CSDataTableRow');
		expect(dataTableCollapsedChildren).toHaveLength(0);

		dataTableExpandButton.simulate('click');

		const dataTableCollapseButton = uut.find('CSDataTableRow CSButton').first();
		expect(dataTableCollapseButton.prop('label')).toEqual('Collapse row');
		expect(dataTableCollapseButton.prop('iconRotate')).toEqual(null);

		const dataTableExpandedChildren = uut.find('CSDataTableRow CSDataTableRow');
		expect(dataTableExpandedChildren).toHaveLength(rows.length);

		const dataTableExpandedChildrenElement = dataTableExpandedChildren.find('.cs-data-table-row');
		expect(dataTableExpandedChildrenElement.first().prop('aria-level')).toEqual(2);
		expect(dataTableExpandedChildrenElement.first().prop('style')).toHaveProperty('--cs-data-table-column-offset', '3rem');

		dataTableExpandedChildren.forEach((child, childIndex) => {
			expect((child.prop('row') as any).key).toEqual(rows[childIndex].key);
		});

		const dataTableFirstRow = uut.find('CSDataTableRow .cs-data-table-row').first();
		expect(dataTableFirstRow.prop('aria-expanded')).toBeTruthy();
		expect(uut.find('CSDataTableGroup')).toHaveLength(2);
	});

	it('should render children as expanded by default', () => {
		const extendedRows = [{ ...additionalRow, children: rows }];
		const uut = mount(<CSDataTable columns={columns} rows={extendedRows} defaultCollapsed={false} />);
		const dataTableFirstRow = uut.find('CSDataTableRow .cs-data-table-row').first();
		expect(dataTableFirstRow.prop('aria-expanded')).toBeTruthy();

		const dataTableCollapseButton = uut.find('CSDataTableRow CSButton').first();
		expect(dataTableCollapseButton.prop('label')).toEqual('Collapse row');
		expect(dataTableCollapseButton.prop('iconRotate')).toEqual(null);

		const dataTableExpandedChildren = uut.find('CSDataTableRow CSDataTableRow');
		expect(dataTableExpandedChildren).toHaveLength(rows.length);

		dataTableCollapseButton.simulate('click');

		const dataTableExpandButton = uut.find('CSDataTableRow CSButton').first();
		expect(dataTableExpandButton.prop('label')).toEqual('Expand row');
		expect(dataTableExpandButton.prop('iconRotate')).toEqual(-90);

		const dataTableCollapsedChildren = uut.find('CSDataTableRow CSDataTableRow');
		expect(dataTableCollapsedChildren).toHaveLength(0);

		const dataTableParentRow = uut.find('CSDataTableRow');
		expect(dataTableParentRow).toHaveLength(1);
		expect(dataTableParentRow.prop('aria-expanded')).toBeFalsy();
	});

	it('should render children as collapsed by default when overridden by row settings', () => {
		const extendedRows = [{ ...additionalRow, defaultCollapsed: true, children: rows }];
		const uut = mount(<CSDataTable columns={columns} rows={extendedRows} defaultCollapsed={false} />);
		expect(uut.find('CSDataTableRow CSDataTableRow')).toHaveLength(0);
	});

	it('should render children as expanded by default when overridden by row settings', () => {
		const extendedRows = [{ ...additionalRow, defaultCollapsed: false, children: rows }];
		const uut = mount(<CSDataTable columns={columns} rows={extendedRows} defaultCollapsed />);
		expect(uut.find('CSDataTableRow CSDataTableRow')).toHaveLength(rows.length);
	});

	it('should render children without toggle controls', () => {
		const extendedRows = [{ ...additionalRow, children: rows }];
		const uut = mount(
			<CSDataTable
				columns={columns}
				rows={extendedRows}
				defaultCollapsed={false}
				collapsible={false}
			/>,
		);

		expect(uut.find('CSDataTableRow CSButton')).toHaveLength(0);
		expect(uut.find('CSDataTableRow CSDataTableRow')).toHaveLength(rows.length);
		expect(uut.find('CSDataTableRow .cs-data-table-row').first().prop('style')).toHaveProperty('--cs-data-table-column-offset', 0);
		expect(uut.find('CSDataTableRow CSDataTableRow .cs-data-table-row').first().prop('style')).toHaveProperty('--cs-data-table-column-offset', '1rem');
	});

	it('should render children with toggle controls when overridden by row settings', () => {
		const extendedRows = [{ ...additionalRow, collapsible: true, children: rows }];
		const uut = mount(<CSDataTable columns={columns} rows={extendedRows} collapsible={false} />);
		expect(uut.find('CSDataTableRow CSButton').first()).toHaveLength(1);
	});

	it('should render children without toggle controls when overridden by row settings', () => {
		const extendedRows = [{ ...additionalRow, collapsible: false, children: rows }];
		const uut = mount(<CSDataTable columns={columns} rows={extendedRows} collapsible />);
		expect(uut.find('CSDataTableRow CSButton')).toHaveLength(0);
	});

	it('should use a working onCollapseClick callback', () => {
		const handleCollapseClick = jest.fn();
		const extendedRows = [{ ...additionalRow, children: rows }];
		const uut = mount(<CSDataTable columns={columns} rows={extendedRows} onCollapseClick={handleCollapseClick} />);
		const dataTableRowCollapseButton = uut.find('CSDataTableRow CSButton').first();
		dataTableRowCollapseButton.prop('onClick')({ } as React.MouseEvent);
		expect(handleCollapseClick).toHaveBeenCalledTimes(1);
	});
});

describe('<CSDataTable /> - subsections', () => {
	it('should render subsections', () => {
		const uut = mount(<CSDataTable columns={columns} rows={rows} subsectionRender={sectionRender} />);
		const dataTableCollapsedRowElement = uut.find('CSDataTableRow .cs-data-table-row').first();
		expect(dataTableCollapsedRowElement.prop('aria-expanded')).toBeFalsy();
		expect(uut.find('.cs-data-table-subsection')).toHaveLength(0);

		const dataTableExpandButton = dataTableCollapsedRowElement.find('CSButton').first();
		expect(dataTableExpandButton.prop('label')).toEqual('Expand row');
		expect(dataTableExpandButton.prop('iconRotate')).toEqual(-90);

		dataTableExpandButton.simulate('click');

		const dataTableCollapseButton = uut.find('CSDataTableRow CSButton').first();
		expect(dataTableCollapseButton.prop('label')).toEqual('Collapse row');
		expect(dataTableCollapseButton.prop('iconRotate')).toEqual(null);

		const dataTableExpandedRowElement = uut.find('CSDataTableRow .cs-data-table-row').first();
		expect(dataTableExpandedRowElement.prop('aria-expanded')).toBeTruthy();
		expect(uut.find('.cs-data-table-subsection')).toHaveLength(1);
		expect(uut.find('.cs-data-table-subsection').text()).toBe(rows[0].data.country);
	});

	it('should render subsections as expanded by default', () => {
		const uut = mount(
			<CSDataTable
				columns={columns}
				rows={rows}
				subsectionRender={sectionRender}
				defaultCollapsed={false}
			/>,
		);
		const dataTableCollapseButton = uut.find('CSDataTableRow CSButton').first();
		expect(dataTableCollapseButton.prop('label')).toEqual('Collapse row');
		expect(dataTableCollapseButton.prop('iconRotate')).toEqual(null);

		const dataTableExpandedRowElement = uut.find('CSDataTableRow .cs-data-table-row').first();
		expect(dataTableExpandedRowElement.prop('aria-expanded')).toBeTruthy();
		expect(uut.find('.cs-data-table-subsection')).toHaveLength(rows.length);

		dataTableCollapseButton.simulate('click');

		const dataTableCollapsedRowElement = uut.find('CSDataTableRow .cs-data-table-row').first();
		expect(dataTableCollapsedRowElement.prop('aria-expanded')).toBeFalsy();
		expect(uut.find('.cs-data-table-subsection')).toHaveLength(rows.length - 1);

		const dataTableExpandButton = dataTableCollapsedRowElement.find('CSButton').first();
		expect(dataTableExpandButton.prop('label')).toEqual('Expand row');
		expect(dataTableExpandButton.prop('iconRotate')).toEqual(-90);
	});

	it('should hide empty subsections', () => {
		const area = 500;
		const renderSubsection = (row: CSDataTableRowWithMetaInterface) => (
			row.data!.area > area ? row.data!.country : null
		);
		const uut = mount(<CSDataTable columns={columns} rows={rows} subsectionRender={renderSubsection} />);
		const dataTableRows = uut.find('CSDataTableRow');

		dataTableRows.forEach((dataTableRow) => {
			const dataTableTargetedCell = dataTableRow.find('.cs-data-table-truncate').at(2);
			const dataTableExpandButton = dataTableRow.find('CSButton').first();

			if (Number(dataTableTargetedCell.text()) > area) {
				expect(dataTableExpandButton).toHaveLength(1);
			} else {
				expect(dataTableExpandButton).toHaveLength(0);
			}
		});
	});
});
