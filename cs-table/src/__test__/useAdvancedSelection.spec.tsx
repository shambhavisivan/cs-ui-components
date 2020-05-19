import React from 'react';
import { shallow, mount } from 'enzyme';

import { AdvancedSelector, useAdvancedSelection } from '../useAdvancedSelection';
import { CSSelectableTable } from '../CSSelectableTable';
import { CSTableRow, CSTableColumn } from '../CSTable';

const COLS: Array<CSTableColumn> = [
	{
		name: 'test',
		label: 'test label'
	}
];

const ROWS: Array<CSTableRow> = [
	{
		id: '1',
		data: { values: {} }
	},
	{
		id: '2',
		data: { values: {} }
	},
	{
		id: '3',
		data: { values: {} }
	},
	{
		id: '4',
		data: { values: {} }
	},
	{
		id: '5',
		data: { values: {} }
	}
];

describe('useAdvancedSelection()', () => {
	it('initialises properly', () => {
		const TestComponent: React.FC<{}> = () => {
			const advancedSelectionData: AdvancedSelector = {
				All: jest.fn().mockReturnValue(true)
			};

			const { selected, setSelected, advancedSelectionChanged } = useAdvancedSelection(
				ROWS,
				advancedSelectionData
			);

			expect(selected.size).toBe(0);

			return <></>;
		};

		const uut = shallow(<TestComponent />);
	});

	it('checks all rows when filter function returns true', () => {
		const advancedSelectionData: AdvancedSelector = {
			All: (row, index) => true
		};

		const TestComponent: React.FC<{}> = () => {
			const { selected, setSelected, advancedSelectionChanged } = useAdvancedSelection(
				ROWS,
				advancedSelectionData
			);

			const advancedSelection = {
				labels: Object.keys(advancedSelectionData),
				onChange: advancedSelectionChanged
			};

			return (
				<CSSelectableTable
					rows={ROWS}
					cols={COLS}
					selectedRows={selected}
					selectionChanged={setSelected}
					advancedSelection={advancedSelection}
				/>
			);
		};

		const uut = mount(<TestComponent />);


		uut.find('.cs-checkbox-dropdown-button').simulate('click');
		uut.find('.cs-checkbox-dropdown button[value="All"]').simulate('click');

		expect(uut.find('.cs-table-select').map((n) => n.prop('checked'))).toEqual([
			true,
			true,
			true,
			true,
			true
		]);
	});

	it('calls filtering function on selection change', () => {
		const filter = jest.fn().mockReturnValue(true);

		const advancedSelectionData: AdvancedSelector = {
			All: filter
		};

		const TestComponent: React.FC<{}> = () => {
			const { selected, setSelected, advancedSelectionChanged } = useAdvancedSelection(
				ROWS,
				advancedSelectionData
			);

			const advancedSelection = {
				labels: Object.keys(advancedSelectionData),
				onChange: advancedSelectionChanged
			};

			return (
				<CSSelectableTable
					rows={ROWS}
					cols={COLS}
					selectedRows={selected}
					selectionChanged={setSelected}
					advancedSelection={advancedSelection}
				/>
			);
		};

		const uut = mount(<TestComponent />);

		uut.find('.cs-checkbox-dropdown-button').simulate('click');
		uut.find('.cs-checkbox-dropdown button[value="All"]').simulate('click');

		expect(filter).toBeCalled();
	});
});