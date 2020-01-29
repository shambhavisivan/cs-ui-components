import React from 'react';
import { shallow } from 'enzyme';

import { CSTableRow } from '../CSTable';
import { useQuickFilter } from '../useQuickFilter';

const ROWS: Array<CSTableRow> = [
	{
		id: '1',
		data: { values: { name: 'Record 000' } }
	},
	{
		id: '2',
		data: { values: { name: 'Record 001' } }
	},
	{
		id: '3',
		data: { values: { name: 'Record 010' } }
	},
	{
		id: '4',
		data: { values: { name: 'Record 011' } }
	},
	{
		id: '5',
		data: { values: { name: 'Record 100' } }
	}
];

describe('useQuickFilter()', () => {
	it('returns all rows if filter term is empty', () => {
		const TestComponent: React.FC<{}> = () => {
			const quickFilter = useQuickFilter(ROWS);
			expect(quickFilter.term).toBe('');
			expect(quickFilter.filteredRows).toStrictEqual(ROWS);
			return <></>;
		};

		const uut = shallow(<TestComponent />);
	});

	it('returns no rows if filter matches nothing', () => {
		let quickFilter: any;
		const TestComponent: React.FC<{}> = () => {
			quickFilter = useQuickFilter(ROWS);
			return <input value="" onChange={(e: any) => quickFilter.setTerm(e)} />;
		};

		const uut = shallow(<TestComponent />);
		uut.find('input').simulate('change', 'mismatch');
		expect(quickFilter.filteredRows).toHaveLength(0);
	});

	it('returns matching rows', () => {
		let quickFilter: any;
		const TestComponent: React.FC<{}> = () => {
			quickFilter = useQuickFilter(ROWS);
			return <input value="" onChange={(e: any) => quickFilter.setTerm(e)} />;
		};

		const uut = shallow(<TestComponent />);
		uut.find('input').simulate('change', 'Record 01');
		expect(quickFilter.filteredRows).toHaveLength(2);
	});

	it('calls custom filter if provided', () => {
		const filter = jest.fn().mockReturnValueOnce(true);
		let quickFilter: any;
		const TestComponent: React.FC<{}> = () => {
			quickFilter = useQuickFilter(ROWS, filter);
			return <></>;
		};

		const uut = shallow(<TestComponent />);
		expect(filter).toBeCalledTimes(5);
		expect(quickFilter.filteredRows).toHaveLength(1);
	});

});
