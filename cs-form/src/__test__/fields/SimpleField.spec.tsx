import React from 'react';
import { SimpleField } from '../../fields/SimpleField';
import { shallow, default as Enzyme, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FieldDescriptor } from '../../types/FormDescriptor';
import { ElementWrapper } from '../..';
import { LocaleSettings } from '../../CSForm';
import { CSCustomDataIconProps, CSInputText } from '@cloudsense/cs-ui-components';

Enzyme.configure({ adapter: new Adapter() });

const descriptor: FieldDescriptor = {
	fieldType: 'STRING',
	name: 'testField',
	label: 'Test field'
};

const icons: Array<CSCustomDataIconProps> = [{
	iconName: 'activity'
}, {
	iconName: 'info',
	getTooltip: {
		content: 'test test'
	}
}];

const descriptorWithIcons: FieldDescriptor = { ...descriptor, icons };

const locale: LocaleSettings = ({} as unknown) as LocaleSettings;

const wrapper: ElementWrapper = ({
	injectInputProps: () => null
} as unknown) as ElementWrapper;

function nop(): any {
	// dummy function
}

it('renders a text input', () => {
	const uut = shallow(
		<SimpleField
			locale={locale}
			wrapper={wrapper}
			descriptor={descriptor}
			handleFieldChange={nop}
			handleFieldBlur={nop}
			fetchPossibleValues={nop}
			value="test"
			status="enabled"
		/>
	);
	expect(uut.find(CSInputText)).toHaveLength(1);
	expect(uut.find(CSInputText).prop('value')).toBe('test');
	expect(uut.find(CSInputText).prop('name')).toBe('testField');
});

it('sets readonly', () => {
	const uut = shallow(
		<SimpleField
			locale={locale}
			wrapper={wrapper}
			descriptor={descriptor}
			handleFieldChange={nop}
			handleFieldBlur={nop}
			fetchPossibleValues={nop}
			value="test"
			status="visible"
		/>
	);
	expect(uut.find(CSInputText).prop('readOnly')).toBe(true);
});

it('sets readonly even when mandatory', () => {
	descriptor.enabled = 'false';

	const uut = shallow(
		<SimpleField
			locale={locale}
			wrapper={wrapper}
			descriptor={descriptor}
			handleFieldChange={nop}
			handleFieldBlur={nop}
			fetchPossibleValues={nop}
			value="test"
			status="mandatory"
		/>
	);
	expect(uut.find(CSInputText).prop('readOnly')).toBe(true);
});

it('calls onChange() on change', done => {
	const onChange = (value: any) => {
		expect(value).toBe('new value');
		done();
	};
	const uut = shallow(
		<SimpleField
			locale={locale}
			wrapper={wrapper}
			descriptor={descriptor}
			handleFieldChange={onChange}
			handleFieldBlur={nop}
			fetchPossibleValues={nop}
			value="test"
			status="enabled"
		/>
	);
	uut.simulate('change', { target: { value: 'new value' } });
});

it('renders icons wrapper with icons and getTooltip', () => {
	const uut = mount(
		<SimpleField
			locale={locale}
			wrapper={wrapper}
			descriptor={descriptorWithIcons}
			handleFieldChange={nop}
			handleFieldBlur={nop}
			fetchPossibleValues={nop}
			value="test"
			status="enabled"
		/>
	);
	expect(uut.find('.cs-input-text-icons')).toHaveLength(1);
	expect(uut.find('.cs-icon')).toHaveLength(2);
});
