import * as React from 'react';
import { mount, shallow } from 'enzyme';
import '../setupTests';
import { CSAlert } from '@cloudsense/cs-ui-components';
import CSForm from '../CSForm';
import { CSFormData, CSFormLocale } from '../types/cs-form-types';
import { defaultErrorLabels } from '../utils/cs-form-validator-util';

const sectionKey = 'section_1';
const sectionLabel = 'section';
const fieldName = 'test_field';
const fieldLabel = 'Example label';
const fieldValue = 3;
const fieldMax = 5;
const fieldReadOnly = false;
const changedValue = 7;
const customErrorLabel = 'Oh no! Value is too high!';
const returnValue = {
	sectionKey,
	name: fieldName,
	value: changedValue,
	errorMessage: [`${fieldName} ${defaultErrorLabels.maxNumberFieldErrLabel}`],
};

const returnValueCustomErr = {
	...returnValue,
	errorMessage: [customErrorLabel],
};

const data: CSFormData = [{
	sectionKey,
	label: sectionLabel,
	fields: [{
		type: 'NUMBER',
		label: fieldLabel,
		name: fieldName,
		value: fieldValue,
		readOnly: fieldReadOnly,
		max: 5,
	}],
}];

const dataWithNumberAndDate: CSFormData = [{
	sectionKey,
	label: sectionLabel,
	fields: [{
		type: 'DATE',
		label: fieldLabel,
		name: `${fieldName}_1`,
		value: new Date(),
		readOnly: fieldReadOnly,
	}, {
		type: 'DATETIME',
		label: fieldLabel,
		name: `${fieldName}_2`,
		value: new Date(),
		readOnly: fieldReadOnly,
	}, {
		type: 'NUMBER',
		label: fieldLabel,
		name: `${fieldName}_3`,
		value: fieldValue,
		readOnly: fieldReadOnly,
		useLocale: true,
	}],
}];

describe('<CSForm />', () => {
	it('should render form based on provided form definition and data', () => {
		const uut = shallow(<CSForm data={data} />);
		const formSection = uut.dive().find('CSFormSection').at(0);
		const formField = formSection.dive().find('CSFormField');
		const formTextField = formField.dive().find('CSFormNumberField');
		expect(formSection.prop('sectionKey')).toBe(sectionKey);
		expect(formSection.prop('label')).toBe(sectionLabel);
		expect(formTextField.prop('label')).toBe(fieldLabel);
		expect(formTextField.prop('name')).toBe(fieldName);
		expect(formTextField.prop('value')).toBe(fieldValue);
		expect(formTextField.prop('max')).toBe(fieldMax);
		expect(formTextField.prop('readOnly')).toBe(fieldReadOnly);
	});

	it('should set correct form field width based on columnNumber value', () => {
		const uut = mount(<CSForm data={data} columnNumber={5} />);
		const formFieldStyle = uut.find('.csf-field-wrapper').get(0).props.style;
		expect(formFieldStyle).toHaveProperty('--csf-field-width', '20%');
	});

	it('should render alert with form error message', () => {
		const formErrorMessage = ['Error message 1', 'Error message 2'];
		const uut = shallow(<CSForm data={data} formErrorMessage={formErrorMessage} />);
		const formFieldAlert = uut.find(CSAlert);
		expect(JSON.stringify(formFieldAlert.prop('text'))).toBe(JSON.stringify(formErrorMessage));
	});

	it('should override form field readOnly value', () => {
		const uut = mount(<CSForm data={data} mode="read-only" />);
		const formField = uut.find('CSFormNumberField');
		expect(formField.prop('readOnly')).toBe(true);
	});

	it('should pass correct locale values to date, datetime and number fields', () => {
		const locale: CSFormLocale = {
			dateLocale: 'en-GB',
			numberLocale: {
				numLocale: 'en-GB',
				options: {
					style: 'percent',
				},
			},
		};
		const uut = mount(<CSForm data={dataWithNumberAndDate} locale={locale} />);
		const numberField = uut.find('CSFormNumberField');
		const dateField = uut.find('CSFormDateField');
		const dateTimeField = uut.find('CSFormDateTimeField');
		expect(JSON.stringify(numberField.prop('locale'))).toBe(JSON.stringify(locale.numberLocale));
		expect(dateField.prop('locale')).toBe(locale.dateLocale);
		expect(dateTimeField.prop('locale')).toBe(locale.dateLocale);
	});

	it('should call onFieldChange and return correct value', () => {
		const onFieldChangeMock = jest.fn();
		const uut = mount(<CSForm data={data} onFieldChange={onFieldChangeMock} />);
		const input = uut.find('.cs-input-number');
		input.simulate('change', { target: { value: changedValue } });
		const form = uut.find('CSForm');
		expect(form.prop('onFieldChange')).toHaveBeenCalledWith(returnValue);
		expect(onFieldChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should call onFieldBlur and return correct value', () => {
		const onFieldBlurMock = jest.fn();
		const uut = mount(<CSForm data={data} onFieldBlur={onFieldBlurMock} />);
		const input = uut.find('.cs-input-number');
		input.simulate('blur', { target: { value: changedValue } });
		const form = uut.find('CSForm');
		expect(form.prop('onFieldBlur')).toHaveBeenCalledWith(returnValue);
		expect(onFieldBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should call onFieldClick', () => {
		const onFieldClickMock = jest.fn();
		const uut = mount(<CSForm data={data} onFieldClick={onFieldClickMock} />);
		const input = uut.find('.cs-input-number');
		input.simulate('click');
		expect(onFieldClickMock).toHaveBeenCalledTimes(1);
	});

	it('should call onFieldFocus and return correct value', () => {
		const onFieldFocusMock = jest.fn();
		const uut = mount(<CSForm data={data} onFieldFocus={onFieldFocusMock} />);
		const input = uut.find('.cs-input-number');
		input.simulate('focus', { target: { value: changedValue } });
		const form = uut.find('CSForm');
		expect(form.prop('onFieldFocus')).toHaveBeenCalledWith(returnValue);
		expect(onFieldFocusMock).toHaveBeenCalledTimes(1);
	});

	it('should call onFieldKeyDown', () => {
		const onFieldKeyDownMock = jest.fn();
		const uut = mount(<CSForm data={data} onFieldKeyDown={onFieldKeyDownMock} />);
		const input = uut.find('.cs-input-number');
		input.simulate('keydown', {} as any);
		expect(onFieldKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should call onFieldChange and return correct value with custom error label', () => {
		const onFieldChangeMock = jest.fn();
		const uut = mount(<CSForm data={data} onFieldChange={onFieldChangeMock} errorLabels={{ maxNumberFieldErrLabel: customErrorLabel }} />);
		const input = uut.find('.cs-input-number');
		input.simulate('change', { target: { value: changedValue } });
		const form = uut.find('CSForm');
		expect(form.prop('onFieldChange')).toHaveBeenCalledWith(returnValueCustomErr);
	});
});
