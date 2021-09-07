import React from 'react';
import { ElementWrapper, LocaleSettings, FieldDescriptor, SelectOption } from '../..';
import { SelectField } from '../../fields/SelectField';
import { mount, shallow, default as Enzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CSSelect } from '@cloudsense/cs-ui-components';

const locale: LocaleSettings = ({} as unknown) as LocaleSettings;

Enzyme.configure({ adapter: new Adapter() });

const wrapper: ElementWrapper = ({
	injectInputProps: () => null
} as unknown) as ElementWrapper;

function nop(): any {
	// dummy function
}

const optionFetcher = () => Promise.resolve([]);

const selectOptions: Array<SelectOption> = [
	{
		label: 'First option',
		value: 'option1'
	},
	{
		label: 'Second option',
		value: 'option2'
	}
];

const descriptor: FieldDescriptor = {
	fieldType: 'PICKLIST',
	name: 'testField',
	label: 'Test field'
};

it('renders a dropdown box', () => {
	const uut = mount(
		<SelectField
			value="option1"
			wrapper={wrapper}
			descriptor={descriptor}
			locale={locale}
			handleFieldChange={nop}
			handleFieldBlur={nop}
			selectOptions={selectOptions}
			fetchPossibleValues={optionFetcher}
			status="enabled"
		/>
	);
	expect(uut.find('select')).toHaveLength(1);
	expect(uut.find('select').prop('value')).toBe('option1');
	expect(uut.find('select').prop('name')).toBe('testField');
	expect(uut.find('select').children()).toHaveLength(selectOptions.length);
});

it('sets readonly', () => {
	const uut = shallow(
		<SelectField
			value="option1"
			wrapper={wrapper}
			descriptor={descriptor}
			locale={locale}
			handleFieldChange={nop}
			handleFieldBlur={nop}
			selectOptions={selectOptions}
			fetchPossibleValues={optionFetcher}
			status="visible"
		/>
	);
	expect(uut.find(CSSelect).prop('disabled')).toBeTruthy();
});

it('sets readonly even when mandatory', () => {
	descriptor.enabled = 'false';

	const uut = shallow(
		<SelectField
			value="option1"
			wrapper={wrapper}
			descriptor={descriptor}
			locale={locale}
			handleFieldChange={nop}
			handleFieldBlur={nop}
			selectOptions={selectOptions}
			fetchPossibleValues={optionFetcher}
			status="mandatory"
		/>
	);
	expect(uut.find(CSSelect).prop('disabled')).toBeTruthy();
});

it('calls onChange() on change', done => {
	const onChange = (value: any) => {
		expect(value).toBe('option2');
		done();
	};

	const uut = shallow(
		<SelectField
			value="option1"
			wrapper={wrapper}
			descriptor={descriptor}
			locale={locale}
			handleFieldChange={nop}
			handleFieldBlur={onChange}
			selectOptions={selectOptions}
			fetchPossibleValues={optionFetcher}
			status="enabled"
		/>
	);
	uut.find(CSSelect).simulate('change', 'option2');
});
