import React from 'react';

import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { BooleanField } from '../../fields/BooleanField';
import { FieldDescriptor } from '../../types/FormDescriptor';
import { ElementWrapper } from '../..';
import { LocaleSettings } from '../../SFObjectForm';

Enzyme.configure({ adapter: new Adapter() });

const descriptor: FieldDescriptor = {
	fieldType: 'BOOLEAN',
	name: 'testField',
	label: 'Test field'
};

const locale: LocaleSettings = {} as unknown as LocaleSettings;

const wrapper: ElementWrapper = {
	injectInputProps: () => null
} as unknown as ElementWrapper;

function nop(): any { }

it('renders a checkbox', () => {
	const uut = shallow(<BooleanField value locale={locale} wrapper={wrapper} descriptor={descriptor} handleFieldChange={nop} fetchPossibleValues={nop} status="enabled" />);
	expect(uut.find('input[type="checkbox"]')).toHaveLength(1);
	expect(uut.find('input[type="checkbox"]').prop('checked')).toBeTruthy();
	expect(uut.find('input[type="checkbox"]').prop('name')).toBe('testField');
});

it('sets readonly', () => {
	const uut = shallow(<BooleanField value locale={locale} wrapper={wrapper} descriptor={descriptor} handleFieldChange={nop} fetchPossibleValues={nop} status="visible" />);
	expect(uut.find('input[type="checkbox"]').prop('disabled')).toBe(true);
});

it('calls handleFieldChange() on change', done => {
	const onChange = (value: any) => {
		expect(value).toBe(true);
		done();
	};
	const uut = shallow(<BooleanField value={false} locale={locale} wrapper={wrapper} descriptor={descriptor} handleFieldChange={onChange} fetchPossibleValues={nop} status="enabled" />);
	uut.find('input[type="checkbox"]').simulate('change', { target: { checked: true } });
});
