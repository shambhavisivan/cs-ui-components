import React from 'react';
import { shallow } from 'enzyme';

import { CSTable, CSTableColumn, CSTableRow } from '../CSTable';

describe('CSTable', () => {
	it('displays empty table if no cols and rows', () => {

		const uut = shallow(<CSTable rows={[]} cols={[]} />);

		expect(uut.find('table.cs-table')).toHaveLength(1);
		expect(uut.find('thead tr')).toHaveLength(1);
		expect(uut.find('td')).toHaveLength(0);
	});

	it('overrides table class name with provided', () => {

		const uut = shallow(<CSTable rows={[]} cols={[]} classNames={['class1', 'class2']} />);

		expect(uut.find('table.cs-table')).toHaveLength(0);
		expect(uut.find('table.class1')).toHaveLength(1);
		expect(uut.find('table.class1').html()).toBe(uut.find('table.class1').html());
	});

	it('displays column headers', () => {
		const cols: Array<CSTableColumn> = [
			{
				name: 'test_1',
				label: 'Test 1'
			},
			{
				name: 'test_2',
				label: 'Test 2'
			}
		];

		const uut = shallow(<CSTable rows={[]} cols={cols} />);

		expect(uut.find('thead tr th')).toHaveLength(2);
		expect(uut.find('thead tr th').at(0).text()).toBe('Test 1');
		expect(uut.find('thead tr th').at(1).text()).toBe('Test 2');
	});

	it('displays normal rows with standard renderer', () => {
		const cols: Array<CSTableColumn> = [
			{
				name: 'test_1',
				label: 'Test 1'
			}
		];
		const rows: Array<CSTableRow> = [
			{
				id: '1',
				data: { values: { test_1: 'v1.1' } }
			},
			{
				id: '2',
				data: { values: { test_1: 'v2.1' } }
			}
		];

		const uut = shallow(<CSTable rows={rows} cols={cols} />);

		expect(uut.find('tbody tr')).toHaveLength(2);
		expect(uut.find('tbody tr').at(0).find('td').text()).toBe('v1.1');
		expect(uut.find('tbody tr').at(1).find('td').text()).toBe('v2.1');

	});

	it('displays standard renderered rows with classNames property', () => {
		const cols: Array<CSTableColumn> = [
			{
				name: 'test_1',
				label: 'Test 1'
			}
		];
		const rows: Array<CSTableRow> = [
			{
				id: '1',
				data: { values: { test_1: 'v1.1' } },
				classNames: ['class1', 'class2']
			}
		];

		const uut = shallow(<CSTable rows={rows} cols={cols} />);

		expect(uut.find('tbody tr.class1')).toHaveLength(1);
		expect(uut.find('tbody tr.class2')).toHaveLength(1);
	});

	it('renders missing and object values correctly', () => {
		const cols: Array<CSTableColumn> = [
			{
				name: 'test_1',
				label: 'Test 1'
			}
		];
		const rows: Array<CSTableRow> = [
			{
				id: '1',
				data: { values: {} }
			},
			{
				id: '2',
				data: { values: { test_1: { json: 'value' } } }
			}
		];

		const uut = shallow(<CSTable rows={rows} cols={cols} />);

		expect(uut.find('tbody tr')).toHaveLength(2);
		expect(uut.find('tbody tr').at(0).find('td').text()).toBe('');
		expect(JSON.parse(uut.find('tbody tr').at(1).find('td').text())).toStrictEqual({ json: 'value' });
	});

	it('displays function rows with standard renderer', () => {
		const cols: Array<CSTableColumn> = [
			{
				name: 'test_1',
				label: 'Test 1'
			}
		];
		const rows: Array<CSTableRow> = [
			{
				id: '1',
				data: { values: { test_1: 'v1.1' } }
			},
			{
				id: '2',
				data: { values: { test_1: 'v2.1' } }
			}
		];

		const uut = shallow(<CSTable rows={() => rows} cols={cols} />);

		expect(uut.find('tbody tr')).toHaveLength(2);
		expect(uut.find('tbody tr').at(0).find('td').text()).toBe('v1.1');
		expect(uut.find('tbody tr').at(1).find('td').text()).toBe('v2.1');
	});

	it('calls custom renderer', () => {
		const cols: Array<CSTableColumn> = [
			{
				name: 'test_1',
				label: 'Test 1',
				render: jest.fn().mockReturnValue(<span>CUSTOM</span>)
			}
		];
		const rows: Array<CSTableRow> = [
			{
				id: '1',
				data: { values: { test_1: 'v1.1' } }
			}
		];

		const uut = shallow(<CSTable rows={rows} cols={cols} />);

		expect(uut.find('tbody tr').at(0).find('td').text()).toBe('CUSTOM');
		expect(cols[0].render).toBeCalledWith('v1.1', rows[0].data, 'test_1');
	});

	it('fails if full width row is present but full width renderer is not set', () => {
		const cols: Array<CSTableColumn> = [
			{
				name: 'test_1',
				label: 'Test 1'
			}
		];
		const rows: Array<CSTableRow> = [
			{
				id: '1',
				data: { values: { test_1: 'v1.1' } },
				fullWidth: true
			}
		];

		expect(() => shallow(<CSTable rows={rows} cols={cols} />)).toThrowError();
	});

	it('calls full width renderer for full width rows', () => {
		const cols: Array<CSTableColumn> = [
			{
				name: 'test_1',
				label: 'Test 1'
			}
		];
		const rows: Array<CSTableRow> = [
			{
				id: '1',
				data: { values: { test_1: 'v1.1' } },
				fullWidth: true
			}
		];
		const fullWidthRenderer = jest.fn().mockReturnValue(<span>CUSTOM</span>);

		const uut = shallow(<CSTable rows={rows} cols={cols} renderFullWidth={fullWidthRenderer} />);
		expect(uut.find('tbody tr td')).toHaveLength(1);
		expect(uut.find('tbody tr td').at(0).text()).toBe('CUSTOM');
		expect(fullWidthRenderer).toBeCalledWith(rows[0].data);
	});

});
