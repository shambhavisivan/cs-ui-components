import React from 'react';
import { shallow, default as Enzyme, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DatePicker from 'react-datepicker';
import { ElementWrapper } from '../..';
import { FieldDescriptor } from '../../types/FormDescriptor';
import { LocaleSettings } from '../../CSForm';
import { DateTimeField } from '../../fields/DateTimeField';
import { CSCustomDataIconProps } from '@cloudsense/cs-ui-components';

Enzyme.configure({ adapter: new Adapter() });

const locale: LocaleSettings = {
	dates: {
		daysOfWeek: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'],
		monthsOfYear: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12'],
		firstDayOfWeek: 1,
		daysInFirstWeek: 4,
		format: 'yyyy-MM-dd',
		timeCaption: 'ttttt',
		timeFormat: 'HH:mm',
		timeInterval: 1
	}
};

const wrapper: ElementWrapper = ({
	injectInputProps: () => null
} as unknown) as ElementWrapper;

const descriptor: FieldDescriptor = {
	fieldType: 'DATETIME',
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

function nop(): any {
	// dummy function
}

it('renders a date time picker', () => {
	const dateTime = Date.UTC(1970, 1, 2, 11, 22);
	const uut = shallow(
		<DateTimeField
			locale={locale}
			wrapper={wrapper}
			descriptor={descriptor}
			value={dateTime}
			handleFieldChange={nop}
			handleFieldBlur={nop}
			fetchPossibleValues={nop}
			status="enabled"
		/>
	);
	expect(uut.find(DatePicker)).toHaveLength(1);
	expect(uut.find(DatePicker).prop('selected')).toStrictEqual(new Date(dateTime));
	expect(uut.find(DatePicker).prop('name')).toBe('testField');
});

it('sets readonly', () => {
	const uut = shallow(
		<DateTimeField
			locale={locale}
			wrapper={wrapper}
			descriptor={descriptor}
			value={Date.UTC(1970, 1, 2, 11, 22)}
			handleFieldChange={nop}
			handleFieldBlur={nop}
			fetchPossibleValues={nop}
			status="visible"
		/>
	);
	expect(uut.find(DatePicker).prop('readOnly')).toBe(true);
});

it('sets readonly even when mandatory', () => {
	descriptor.enabled = 'false';

	const uut = shallow(
		<DateTimeField
			locale={locale}
			wrapper={wrapper}
			descriptor={descriptor}
			value={Date.UTC(1970, 1, 2, 11, 22)}
			handleFieldChange={nop}
			handleFieldBlur={nop}
			fetchPossibleValues={nop}
			status="mandatory"
		/>
	);
	expect(uut.find(DatePicker).prop('readOnly')).toBe(true);
});

it('calls onChange() on change', done => {
	const dateTime = Date.UTC(2010, 1, 1, 13, 33);

	const onChange = (value: any) => {
		expect(value).toStrictEqual(dateTime);
		done();
	};
	const uut = shallow(
		<DateTimeField
			locale={locale}
			wrapper={wrapper}
			descriptor={descriptor}
			value={Date.UTC(1970, 1, 2)}
			handleFieldChange={onChange}
			handleFieldBlur={onChange}
			fetchPossibleValues={nop}
			status="enabled"
		/>
	);
	uut.find(DatePicker).simulate('change', new Date(dateTime));
});

it('renders icons wrapper with icons and getTooltip', () => {
	const uut = mount(
		<DateTimeField
			locale={locale}
			wrapper={wrapper}
			descriptor={descriptorWithIcons}
			value={Date.UTC(1970, 1, 2)}
			handleFieldChange={nop}
			handleFieldBlur={nop}
			fetchPossibleValues={nop}
			status="enabled"
		/>
	);
	expect(uut.find('.cs-form-icons-wrapper')).toHaveLength(1);
	expect(uut.find('.cs-icon')).toHaveLength(2);
});
