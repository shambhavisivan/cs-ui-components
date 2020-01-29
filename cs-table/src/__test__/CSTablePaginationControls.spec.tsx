import React from 'react';
import { shallow } from 'enzyme';

import { CSTablePaginationControls } from '../CSTablePaginationControls';

describe('CSTablePaginationControls', () => {
	it('displays pagination links and current page', () => {

		const uut = shallow(<CSTablePaginationControls lastPage={5} currentPage={2} changePage={null as any} />);
		expect(uut.find('a')).toHaveLength(9);
		expect(uut.find('a.active').text()).toBe('3');
	});
	it('resets current page to 0', () => {
		const changePage = jest.fn();

		const uut = shallow(<CSTablePaginationControls lastPage={5} currentPage={2} changePage={changePage} />);
		uut.find('.cs-table-page-start').simulate('click');
		expect(changePage).toBeCalledWith(0);
	});
	it('decrements page', () => {
		const changePage = jest.fn();

		const uut = shallow(<CSTablePaginationControls lastPage={5} currentPage={2} changePage={changePage} />);
		uut.find('.cs-table-page-dec').simulate('click');
		expect(changePage).toBeCalledWith(1);
	});
	it('increments page', () => {
		const changePage = jest.fn();

		const uut = shallow(<CSTablePaginationControls lastPage={5} currentPage={2} changePage={changePage} />);
		uut.find('.cs-table-page-inc').simulate('click');
		expect(changePage).toBeCalledWith(3);
	});
	it('resets page to max', () => {
		const changePage = jest.fn();

		const uut = shallow(<CSTablePaginationControls lastPage={5} currentPage={2} changePage={changePage} />);
		uut.find('.cs-table-page-end').simulate('click');
		expect(changePage).toBeCalledWith(5);
	});
	it('doesn\'t decrement below 0', () => {
		const changePage = jest.fn();

		const uut = shallow(<CSTablePaginationControls lastPage={5} currentPage={0} changePage={changePage} />);
		uut.find('.cs-table-page-dec').simulate('click');
		expect(changePage).toBeCalledWith(0);
	});
	it('doesn\'t increment beyond max', () => {
		const changePage = jest.fn();

		const uut = shallow(<CSTablePaginationControls lastPage={5} currentPage={5} changePage={changePage} />);
		uut.find('.cs-table-page-inc').simulate('click');
		expect(changePage).toBeCalledWith(5);
	});
	it('displays +-2 page numbers when possible', () => {
		const uut = shallow(<CSTablePaginationControls lastPage={5} currentPage={2} changePage={null as any} />);
		expect(uut.find('.cs-table-page-num').map(n => n.text())).toEqual(['1', '2', '3', '4', '5']);
		expect(uut.find('.cs-table-page-num.active').text()).toBe('3');
	});
	it('displays +4 page numbers when current page is 0', () => {
		const uut = shallow(<CSTablePaginationControls lastPage={5} currentPage={0} changePage={null as any} />);
		expect(uut.find('.cs-table-page-num').map(n => n.text())).toEqual(['1', '2', '3', '4', '5']);
		expect(uut.find('.cs-table-page-num.active').text()).toBe('1');
	});
	it('displays -1/+3 page numbers when current page is 1', () => {
		const uut = shallow(<CSTablePaginationControls lastPage={5} currentPage={1} changePage={null as any} />);
		expect(uut.find('.cs-table-page-num').map(n => n.text())).toEqual(['1', '2', '3', '4', '5']);
		expect(uut.find('.cs-table-page-num.active').text()).toBe('2');
	});
	it('displays -3/+1 page numbers when current page is penultimate page', () => {
		const uut = shallow(<CSTablePaginationControls lastPage={5} currentPage={4} changePage={null as any} />);
		expect(uut.find('.cs-table-page-num').map(n => n.text())).toEqual(['2', '3', '4', '5', '6']);
		expect(uut.find('.cs-table-page-num.active').text()).toBe('5');
	});
	it('displays -4 page numbers when current page is last page', () => {
		const uut = shallow(<CSTablePaginationControls lastPage={5} currentPage={5} changePage={null as any} />);
		expect(uut.find('.cs-table-page-num').map(n => n.text())).toEqual(['2', '3', '4', '5', '6']);
		expect(uut.find('.cs-table-page-num.active').text()).toBe('6');
	});
	it('displays all page numbers when fewer than 5 pages in total', () => {
		const uut = shallow(<CSTablePaginationControls lastPage={3} currentPage={2} changePage={null as any} />);
		expect(uut.find('.cs-table-page-num').map(n => n.text())).toEqual(['1', '2', '3', '4']);
		expect(uut.find('.cs-table-page-num.active').text()).toBe('3');
	});
	it('displays 1 page number when just 1 page exists', () => {
		const uut = shallow(<CSTablePaginationControls lastPage={0} currentPage={0} changePage={null as any} />);
		expect(uut.find('.cs-table-page-num').map(n => n.text())).toEqual(['1']);
		expect(uut.find('.cs-table-page-num.active').text()).toBe('1');
	});

});
