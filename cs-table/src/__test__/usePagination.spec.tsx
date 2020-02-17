import React from 'react';
import { shallow, mount } from 'enzyme';

import { usePagination, useArrayPagination } from '../usePagination';
import { CSTableRow } from '../CSTable';

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

describe('usePagination()', () => {
	it('returns 0 rows if there are no rows in input', () => {
		const TestComponent: React.FC<{}> = () => {
			const calculator = jest.fn().mockReturnValue([]);
			const pagination = usePagination(20, () => 0, calculator);
			expect(pagination.lastPage).toBe(0);
			expect(pagination.currentPage).toBe(0);
			expect(calculator).toBeCalledWith(0, 20);
			return <></>;
		};

		const uut = shallow(<TestComponent />);
	});

	it('returns all rows if page size is bigger than rows', () => {
		const TestComponent: React.FC<{}> = () => {
			const pagination = usePagination(20, () => ROWS.length, () => ROWS);
			expect(pagination.pageContents).toHaveLength(5);
			return <></>;
		};

		const uut = shallow(<TestComponent />);
	});

	it('returns first page by default', () => {
		const TestComponent: React.FC<{}> = () => {
			const pagination = usePagination(2, () => ROWS.length, (page, pSize) => ROWS.slice(page * pSize, (page + 1) * pSize));
			expect(pagination.pageContents).toHaveLength(2);
			expect(pagination.currentPage).toBe(0);
			expect(pagination.lastPage).toBe(2);
			return <></>;
		};

		const uut = shallow(<TestComponent />);
	});

	it('changes page', async () => {
		const TestComponent: React.FC<{}> = () => {
			const pagination = usePagination(2, () => ROWS.length, (pnum, psize) => ROWS.slice(pnum * 2));
			return <a onClick={() => pagination.setCurrentPage(2)}>{pagination.currentPage}</a>;
		};

		const uut = mount(<TestComponent />);
		uut.find('a').simulate('click');
		expect(uut.find('a').text()).toBe('2');
	});
	it('limits page number to at most lastPage', async () => {
		const TestComponent: React.FC<{}> = () => {
			const pagination = usePagination(2, () => ROWS.length, (pnum, psize) => ROWS.slice(pnum * 2));
			return <a onClick={() => pagination.setCurrentPage(8)}>{pagination.currentPage}</a>;
		};

		const uut = mount(<TestComponent />);
		uut.find('a').simulate('click');
		expect(uut.find('a').text()).toBe('2');
	});
	it('limits page number to at least 0', async () => {
		const TestComponent: React.FC<{}> = () => {
			const pagination = usePagination(2, () => ROWS.length, (pnum, psize) => ROWS.slice(pnum * 2));
			return <a onClick={() => pagination.setCurrentPage(-6)}>{pagination.currentPage}</a>;
		};

		const uut = mount(<TestComponent />);
		uut.find('a').simulate('click');
		expect(uut.find('a').text()).toBe('0');
	});
});

describe('useArrayPagination()', () => {
	it('passes array to usePagination', () => {
		const TestComponent: React.FC<{}> = () => {
			const pagination = useArrayPagination(2, ROWS);
			expect(pagination.pageContents).toHaveLength(2);
			expect(pagination.currentPage).toBe(0);
			expect(pagination.lastPage).toBe(2);
			return <></>;
		};

		const uut = shallow(<TestComponent />);

	});
});
