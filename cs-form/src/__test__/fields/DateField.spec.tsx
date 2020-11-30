import React from 'react';
import { shallow, default as Enzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DateField } from '../../fields/DateField';
import DatePicker from 'react-datepicker';
import { ElementWrapper } from '../..';
import { FieldDescriptor } from '../../types/FormDescriptor';
import { LocaleSettings } from '../../CSForm';

Enzyme.configure({ adapter: new Adapter() });

const locale: LocaleSettings = {
	dates: {
		daysOfWeek: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'],
		monthsOfYear: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12'],
		firstDayOfWeek: 1,
		daysInFirstWeek: 4,
		format: 'yyyy-MM-dd'
	}

};

const wrapper: ElementWrapper = {
	injectInputProps: () => null
} as unknown as ElementWrapper;

const descriptor: FieldDescriptor = {
	fieldType: 'DATE',
	name: 'testField',
	label: 'Test field'
};

function nop(): any {
	// dummy function
}

it('renders a date picker', () => {
	const uut = shallow(<DateField locale={locale} wrapper={wrapper} descriptor={descriptor} value={Date.UTC(1970, 1, 2)} handleFieldChange={nop} fetchPossibleValues={nop} status="enabled" />);
	expect(uut.find(DatePicker)).toHaveLength(1);
	expect(uut.find(DatePicker).prop('selected')).toStrictEqual(new Date(Date.UTC(1970, 1, 2)));
	expect(uut.find(DatePicker).prop('name')).toBe('testField');
});

it('sets readonly', () => {
	const uut = shallow(<DateField locale={locale} wrapper={wrapper} descriptor={descriptor} value={Date.UTC(1970, 1, 2)} handleFieldChange={nop} fetchPossibleValues={nop} status="visible" />);
	expect(uut.find(DatePicker).prop('readOnly')).toBe(true);
});

it('sets readonly even when mandatory', () => {
	descriptor.enabled = 'false';

	const uut = shallow(<DateField locale={locale} wrapper={wrapper} descriptor={descriptor} value={Date.UTC(1970, 1, 2)} handleFieldChange={nop} fetchPossibleValues={nop} status="mandatory" />);
	expect(uut.find(DatePicker).prop('readOnly')).toBe(true);
});

it('calls onChange() on change', done => {
	const onChange = (value: any) => {
		expect(value).toStrictEqual(Date.UTC(2010, 1, 1));
		done();
	};
	const uut = shallow(<DateField locale={locale} wrapper={wrapper} descriptor={descriptor} value={Date.UTC(1970, 1, 2)} handleFieldChange={onChange} fetchPossibleValues={nop} status="enabled" />);
	uut.simulate('change', new Date(Date.UTC(2010, 1, 1)));
});
