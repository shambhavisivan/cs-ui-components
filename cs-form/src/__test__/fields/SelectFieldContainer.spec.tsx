import React from 'react';
import { shallow, default as Enzyme, ShallowWrapper, mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';
import { SelectField } from '../../fields/SelectField';
import { ElementWrapper, LocaleSettings, FieldDescriptor, SelectOption } from '../..';
import { SelectFieldContainer } from '../../fields/SelectFieldContainer';
import { CSCustomDataIconProps } from '@cloudsense/cs-ui-components';

Enzyme.configure({ adapter: new Adapter() });

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

const optionFetcher = (): Promise<Array<SelectOption>> => Promise.resolve(selectOptions);

const descriptor: FieldDescriptor = {
	fieldType: 'PICKLIST',
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

it('renders SelectField with all props including options from fetchPossibleValues()', async () => {
	let uut: ShallowWrapper = (null as any) as ShallowWrapper;
	await act(async () => {
		uut = shallow(
			<SelectFieldContainer
				value="option1"
				wrapper={wrapper}
				descriptor={descriptor}
				locale={locale}
				handleFieldChange={nop}
				handleFieldBlur={nop}
				fetchPossibleValues={optionFetcher}
				status="enabled"
			/>
		);
	});

	const renderedSelect = uut.find(SelectField);
	expect(renderedSelect).toHaveLength(1);
	expect(renderedSelect.prop('selectOptions')).toEqual(selectOptions);
	expect(renderedSelect.prop('value')).toBe('option1');
	expect(renderedSelect.prop('status')).toBe('enabled');
	expect(renderedSelect.prop('wrapper')).toBe(wrapper);
	expect(renderedSelect.prop('handleFieldChange')).toBe(nop);
	expect(renderedSelect.prop('handleFieldBlur')).toBe(nop);
	expect(renderedSelect.prop('locale')).toBe(locale);
});

it('renders icons wrapper with icons and getTooltip', () => {
	const icons: Array<CSCustomDataIconProps> = [{
		iconName: 'activity'
	}, {
		iconName: 'info',
		getTooltip: {
			content: 'test test'
		}
	}];
	const uut = mount(
		<SelectFieldContainer
			value="option1"
			wrapper={wrapper}
			descriptor={descriptor}
			locale={locale}
			handleFieldChange={nop}
			handleFieldBlur={nop}
			fetchPossibleValues={optionFetcher}
			status="enabled"
			icons={icons}
		/>
	);
	expect(uut.find('.cs-select-icons')).toHaveLength(1);
	expect(uut.find('.cs-icon')).toHaveLength(3);
});
