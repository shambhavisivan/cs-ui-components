import React, { ReactElement } from 'react';

import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { FormField } from '../..//fields/FormField';
import { BooleanField } from '../..//fields/BooleanField';
import { FieldDescriptor } from '../../types/FormDescriptor';
import { ElementWrapper } from '../..';
import { ComponentStatus } from '../../types/ComponentStatus';
import { LocaleSettings } from '../../SFObjectForm';

Enzyme.configure({ adapter: new Adapter() });

const descriptor: FieldDescriptor = {
	fieldType: 'BOOLEAN',
	name: 'testField',
	label: 'Test field'
};

const locale: LocaleSettings = {} as unknown as LocaleSettings;

const wrapper: ElementWrapper = {
	wrapField: (name: string, status: ComponentStatus, label: ReactElement, field: ReactElement, error: ReactElement) => <>{name}{label}{field}{error}</>,
	injectInputProps: () => null
} as unknown as ElementWrapper;

function nop(): any { }

it('renders nothing if hidden', () => {
	const uut = shallow(<FormField descriptor={descriptor} wrapper={wrapper} locale={locale} value handleFieldChange={nop} fetchPossibleValues={nop} status="hidden" />);
	expect(uut.html()).toBeNull();

});

it('renders a checkbox for type BOOLEAN', () => {
	const uut = shallow(<FormField descriptor={descriptor} wrapper={wrapper} locale={locale} value handleFieldChange={nop} fetchPossibleValues={nop} status="enabled" />);
	expect(uut.find(BooleanField)).toHaveLength(1);
});

it('renders error message if provided', () => {
	const uut = shallow(<FormField errorMessage="TEST ERROR" descriptor={descriptor} wrapper={wrapper} locale={locale} value handleFieldChange={nop} fetchPossibleValues={nop} status="enabled" />);
	expect(uut.text()).toContain('TEST ERROR');
});

it('calls onChange() on change', done => {
	const onChange = (value: any) => {
		expect(value).toBe(true);
		done();
	};
	const uut = shallow(<FormField descriptor={descriptor} wrapper={wrapper} locale={locale} value handleFieldChange={onChange} fetchPossibleValues={nop} status="enabled" />);
	uut.find(BooleanField).dive().find('input').simulate('change', { target: { checked: true } });
});
