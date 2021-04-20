import React from 'react';

import { shallow, default as Enzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BooleanField } from '../../fields/BooleanField';
import { FieldDescriptor } from '../../types/FormDescriptor';
import { ElementWrapper } from '../..';
import { LocaleSettings } from '../../CSForm';
import { CSCheckbox } from '@cloudsense/cs-ui-components';

Enzyme.configure({ adapter: new Adapter() });

const descriptor: FieldDescriptor = {
	fieldType: 'BOOLEAN',
	name: 'testField',
	label: 'Test field'
};

const locale: LocaleSettings = ({} as unknown) as LocaleSettings;

const wrapper: ElementWrapper = ({
	injectInputProps: () => null
} as unknown) as ElementWrapper;

function nop(): any {
	// dummy function
}

it('renders a checkbox', () => {
	const uut = shallow(
		<BooleanField
			value
			locale={locale}
			wrapper={wrapper}
			descriptor={descriptor}
			handleFieldChange={nop}
			handleFieldBlur={nop}
			fetchPossibleValues={nop}
			status="enabled"
		/>
	);
	expect(uut.find(CSCheckbox)).toHaveLength(1);
	expect(uut.find(CSCheckbox).prop('checked')).toBeTruthy();
	expect(uut.find(CSCheckbox).prop('name')).toBe('testField');
});

it('sets readonly', () => {
	const uut = shallow(
		<BooleanField
			value
			locale={locale}
			wrapper={wrapper}
			descriptor={descriptor}
			handleFieldChange={nop}
			handleFieldBlur={nop}
			fetchPossibleValues={nop}
			status="visible"
		/>
	);
	expect(uut.find(CSCheckbox).prop('disabled')).toBe(true);
});

it('sets readonly even when mandatory', () => {
	descriptor.enabled = 'false';

	const uut = shallow(
		<BooleanField
			value
			locale={locale}
			wrapper={wrapper}
			descriptor={descriptor}
			handleFieldChange={nop}
			handleFieldBlur={nop}
			fetchPossibleValues={nop}
			status="mandatory"
		/>
	);
	expect(uut.find(CSCheckbox).prop('disabled')).toBe(true);
});

it('calls handleFieldChange() on change', done => {
	const onChange = (value: any) => {
		expect(value).toBe(true);
		done();
	};
	const uut = shallow(
		<BooleanField
			value={false}
			locale={locale}
			wrapper={wrapper}
			descriptor={descriptor}
			handleFieldChange={nop}
			handleFieldBlur={onChange}
			fetchPossibleValues={nop}
			status="enabled"
		/>
	);
	uut.find(CSCheckbox).simulate('change', { target: { checked: true } });
});
