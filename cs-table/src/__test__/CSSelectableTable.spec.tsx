import React from 'react';
import { mount } from 'enzyme';

import { CSTableColumn, CSTableRow } from '../CSTable';
import { CSSelectableTable } from '../CSSelectableTable';

const COLS: Array<CSTableColumn> = [
	{
		name: 'test',
		label: 'test label'
	}
];

const ROWS: Array<CSTableRow> = [
	{
		id: '1',
		data: {
			values: {}
		}
	},
	{
		id: '2',
		data: {
			values: {}
		}
	},
	{
		id: '3',
		data: {
			values: {}
		}
	},
	{
		id: '4',
		data: {
			values: {}
		}
	}
];

describe('CSSelectableTable', () => {
	it('ticks no boxes when selection is empty', () => {
		const uut = mount(<CSSelectableTable rows={ROWS} cols={COLS} selectedRows={new Set<string>()} selectionChanged={null as any} />);
		expect(uut.find('.cs-table-select').map(n => n.prop('checked'))).toEqual([false, false, false, false]);
		expect(uut.find('.cs-table-select-all').prop('checked')).toBe(false);
	});
	it('ticks selected boxes when selection is provided', () => {
		const uut = mount(<CSSelectableTable rows={ROWS} cols={COLS} selectedRows={new Set<string>(['1', '3'])} selectionChanged={null as any} />);
		expect(uut.find('.cs-table-select').map(n => n.prop('checked'))).toEqual([true, false, true, false]);
		expect(uut.find('.cs-table-select-all').prop('checked')).toBe(false);
	});
	it('ticks all boxes when selection is full', () => {
		const uut = mount(<CSSelectableTable rows={ROWS} cols={COLS} selectedRows={new Set<string>(['1', '2', '3', '4'])} selectionChanged={null as any} />);
		expect(uut.find('.cs-table-select').map(n => n.prop('checked'))).toEqual([true, true, true, true]);
		expect(uut.find('.cs-table-select-all').prop('checked')).toBe(true);
	});
	it('calls selectionChanged() when box is ticked', () => {
		expect.assertions(1);
		const selectionChanged = (selection: Set<string>): void => {
			expect([...selection]).toEqual(['2']);
		};
		const uut = mount(<CSSelectableTable rows={ROWS} cols={COLS} selectedRows={new Set<string>()} selectionChanged={selectionChanged} />);
		uut.find('.cs-table-select').at(1).simulate('change', { target: { checked: true } });
	});
	it('calls selectionChanged() when box is unticked', () => {
		expect.assertions(1);
		const selectionChanged = (selection: Set<string>): void => {
			expect([...selection]).toEqual(['1']);
		};
		const uut = mount(<CSSelectableTable rows={ROWS} cols={COLS} selectedRows={new Set<string>(['1', '2'])} selectionChanged={selectionChanged} />);
		uut.find('.cs-table-select').at(1).simulate('change', { target: { checked: false } });
	});
	it('selects everything if select all is ticked', () => {
		expect.assertions(1);
		const selectionChanged = (selection: Set<string>): void => {
			expect([...selection].sort()).toEqual(['1', '2', '3', '4']);
		};
		const uut = mount(<CSSelectableTable rows={ROWS} cols={COLS} selectedRows={new Set<string>(['1', '3'])} selectionChanged={selectionChanged} />);
		uut.find('.cs-table-select-all').simulate('change', { target: { checked: true } });
	});
	it('deselects everything if select all is unticked', () => {
		expect.assertions(1);
		const selectionChanged = (selection: Set<string>): void => {
			expect([...selection]).toEqual([]);
		};
		const uut = mount(<CSSelectableTable rows={ROWS} cols={COLS} selectedRows={new Set<string>(['1', '3'])} selectionChanged={selectionChanged} />);
		uut.find('.cs-table-select-all').simulate('change', { target: { checked: false } });
	});
	it('handles function type rows', () => {
		const uut = mount(<CSSelectableTable rows={() => ROWS} cols={COLS} selectedRows={new Set<string>()} selectionChanged={null as any} />);
		expect(uut.find('.cs-table-select').map(n => n.prop('checked'))).toEqual([false, false, false, false]);
		expect(uut.find('.cs-table-select-all').prop('checked')).toBe(false);
	});
	it('skips full width rows', () => {
		const _rows = [...ROWS, { id: '4-fw', data: { values: {} }, fullWidth: true }];
		const uut = mount(<CSSelectableTable rows={_rows} cols={COLS} selectedRows={new Set<string>()} selectionChanged={null as any} renderFullWidth={() => <u />} />);
		expect(uut.find('.cs-table-select').map(n => n.prop('checked'))).toEqual([false, false, false, false]);
		expect(uut.find('.cs-table-select-all').prop('checked')).toBe(false);
	});

});
