import React, { ReactElement } from 'react';

import { mount, shallow, default as Enzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FormField } from '../..//fields/FormField';
import { BooleanField } from '../..//fields/BooleanField';
import { FieldDescriptor } from '../../types/FormDescriptor';
import { ElementWrapper } from '../..';
import { ComponentStatus } from '../../types/ComponentStatus';
import { LocaleSettings } from '../../CSForm';
import { CSTooltip } from '@cloudsense/cs-ui-components';

Enzyme.configure({ adapter: new Adapter() });

const descriptor: FieldDescriptor = {
	fieldType: 'BOOLEAN',
	name: 'testField',
	label: 'Test field'
};

const locale: LocaleSettings = ({} as unknown) as LocaleSettings;

const wrapper: ElementWrapper = ({
	wrapField: (
		name: string,
		status: ComponentStatus,
		label: ReactElement,
		field: ReactElement,
		error: ReactElement
	) => (
		<>
			{name}
			{label}
			{field}
			{error}
		</>
	),
	injectInputProps: () => null
} as unknown) as ElementWrapper;

function nop(): any {
	// dummy function
}

const helpText = 'Help text example';
const descriptorWithHelpText = { ...descriptor, helpText };

it('renders nothing if hidden', () => {
	const uut = shallow(
		<FormField
			descriptor={descriptor}
			wrapper={wrapper}
			locale={locale}
			value
			handleFieldChange={nop}
			handleFieldBlur={nop}
			fetchPossibleValues={nop}
			status="hidden"
		/>
	);
	expect(uut.html()).toBeNull();
});

it('renders a checkbox for type BOOLEAN', () => {
	const uut = shallow(
		<FormField
			descriptor={descriptor}
			wrapper={wrapper}
			locale={locale}
			value
			handleFieldChange={nop}
			handleFieldBlur={nop}
			fetchPossibleValues={nop}
			status="enabled"
		/>
	);
	expect(uut.find(BooleanField)).toHaveLength(1);
});

it('renders error message if provided', () => {
	const uut = shallow(
		<FormField
			errorMessages={['Field Error 1', 'Field Error 2']}
			descriptor={descriptor}
			wrapper={wrapper}
			locale={locale}
			value
			handleFieldChange={nop}
			handleFieldBlur={nop}
			fetchPossibleValues={nop}
			status="enabled"
		/>
	);
	expect(uut.text()).toContain('Field Error 1Field Error 2');
});

it('calls onChange() on change', done => {
	const onChange = (value: any) => {
		expect(value).toBe(true);
		done();
	};
	const uut = mount(
		<FormField
			descriptor={descriptor}
			wrapper={wrapper}
			locale={locale}
			value
			handleFieldChange={nop}
			handleFieldBlur={onChange}
			fetchPossibleValues={nop}
			status="enabled"
		/>
	);
	uut.find(BooleanField)
		.find('input')
		.simulate('change', { target: { checked: true } });
});

it('renders tooltip with helpText', () => {
	const uut = shallow(
		<FormField
			descriptor={descriptorWithHelpText}
			wrapper={wrapper}
			locale={locale}
			value
			handleFieldChange={nop}
			handleFieldBlur={nop}
			fetchPossibleValues={nop}
			status="enabled"
		/>
	);

	expect(uut.find(CSTooltip).prop('content')).toBe(helpText);
});
