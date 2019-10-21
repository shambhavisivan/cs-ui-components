import React from 'react';

import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { SelectField } from '../..//fields/SelectField';
import waitUntil from 'async-wait-until';
import { FieldDescriptor } from '../../types/FormDescriptor';
import { ElementWrapper } from '../..';
import { LocaleSettings } from '../../SFObjectForm';

Enzyme.configure({ adapter: new Adapter() });

const optionFetcher = () => Promise.resolve([
	{
		label: 'First option',
		value: 'option1'
	},
	{
		label: 'Second option',
		value: 'option2'
	}
]);

const descriptor: FieldDescriptor = {
	fieldType: 'PICKLIST',
	name: 'testField',
	label: 'Test field'
};

const locale: LocaleSettings = {} as unknown as LocaleSettings;

const wrapper: ElementWrapper = {
	injectInputProps: () => null
} as unknown as ElementWrapper;

function nop(): any { }

it('renders a dropdown box', async () => {
	const uut = shallow(<SelectField value="option1" wrapper={wrapper} descriptor={descriptor} locale={locale} handleFieldChange={nop} fetchPossibleValues={optionFetcher} status="enabled" />);
	await waitUntil(() => uut.state);
	expect(uut.find('select')).toHaveLength(1);
	expect(uut.find('option')).toHaveLength(3);
	expect(uut.find('select').prop('value')).toBe('option1');
	expect(uut.find('select').prop('name')).toBe('testField');
});

it('sets readonly', async () => {
	const uut = shallow(<SelectField value="option1" wrapper={wrapper} descriptor={descriptor} locale={locale} handleFieldChange={nop} fetchPossibleValues={optionFetcher} status="visible" />);
	await waitUntil(() => uut.state);
	expect(uut.find('select').prop('disabled')).toBe(true);
});

it('calls onChange() on change', async done => {
	const onChange = (value: any) => {
		expect(value).toBe('option2');
		done();
	};
	const uut = shallow(<SelectField value="option1" wrapper={wrapper} descriptor={descriptor} locale={locale} handleFieldChange={onChange} fetchPossibleValues={optionFetcher} status="enabled" />);
	await waitUntil(() => uut.state);
	uut.simulate('change', { target: { value: 'option2' } });
});
