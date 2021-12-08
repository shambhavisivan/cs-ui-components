import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSCurrency from '../../components/CSCurrency';

const locale = 'en';

describe('<CSCurrency />', () => {
	it('should render the default CSCurrency', () => {
		const uut = shallow(<CSCurrency locale="en" />);
		// Should render a currency
		expect(uut.find('.cs-currency')).toHaveLength(1);
	});

	it('should render currency with title as text', () => {
		const CSCurrencyTitle = 'currency title';
		const uut = shallow(<CSCurrency locale={locale} title={CSCurrencyTitle} value={100000} />);
		const currencyElem = uut.find('.cs-currency');
		expect(currencyElem).toHaveLength(1);
		expect(currencyElem.props().title).toBe(CSCurrencyTitle);
	});

	it('should render currency with title as boolean', () => {
		const uut = shallow(<CSCurrency locale={locale} title value={100000} />);
		const currencyElem = uut.find('.cs-currency');
		const currencyText = currencyElem.text();
		expect(currencyElem.props().title).toBe(currencyText);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-br-mint';
		const uut = shallow(<CSCurrency locale={locale} className={customClass} value={1000} />);
		expect(uut.find(`.cs-currency.${customClass}`)).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(<CSCurrency locale={locale} id={customId} value={1000} />);
		expect(uut.find(`.cs-currency#${customId}`)).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSCurrency locale={locale} data-testid="rest" />);
		const currency = uut.find({ 'data-testid': 'rest' });
		expect(currency).toHaveLength(1);
	});
});
