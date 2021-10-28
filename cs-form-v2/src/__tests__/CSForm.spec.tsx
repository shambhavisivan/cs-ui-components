import * as React from 'react';
import { mount, shallow } from 'enzyme';
import '../setupTests';
import CSForm from '../CSForm';
import { CSFormData, CSFormLocale } from '../types/cs-form-types';
import { defaultErrorLabels } from '../utils/cs-form-validator-util';

const sectionKey = 'section_1';
const sectionLabel = 'section';
const fieldName = 'test_field';
const fieldLabel = 'Example label';
const fieldValue = 'Example text';
const fieldMaxLength = 5;
const fieldReadOnly = false;
const changedValue = 'New text';
const customErrorLabel = 'Oh no! Too much chars!';
const returnValue = {
	sectionKey,
	name: fieldName,
	value: changedValue,
	errorMessage: [`${fieldName} ${defaultErrorLabels.maxLengthTextFieldErr}`],
};

const returnValueCustomErr = {
	...returnValue,
	errorMessage: [customErrorLabel],
};

const data: CSFormData = [{
	sectionKey,
	label: sectionLabel,
	fields: [{
		fieldType: 'TEXT',
		label: fieldLabel,
		name: fieldName,
		value: fieldValue,
		readOnly: fieldReadOnly,
		maxLength: fieldMaxLength,
	}],
}];

const dataWithNumberAndDate: CSFormData = [{
	sectionKey,
	label: sectionLabel,
	fields: [{
		fieldType: 'DATE',
		label: fieldLabel,
		name: `${fieldName}_1`,
		value: fieldValue,
		readOnly: fieldReadOnly,
	}, {
		fieldType: 'DATETIME',
		label: fieldLabel,
		name: `${fieldName}_2`,
		value: fieldValue,
		readOnly: fieldReadOnly,
	}, {
		fieldType: 'NUMBER',
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
		const formTextField = formField.dive().find('CSFormTextField');
		expect(formSection.prop('sectionKey')).toBe(sectionKey);
		expect(formSection.prop('label')).toBe(sectionLabel);
		expect(formTextField.prop('label')).toBe(fieldLabel);
		expect(formTextField.prop('name')).toBe(fieldName);
		expect(formTextField.prop('value')).toBe(fieldValue);
		expect(formTextField.prop('maxLength')).toBe(fieldMaxLength);
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
		const formFieldAlert = uut.find('CSAlert');
		expect(JSON.stringify(formFieldAlert.prop('text'))).toBe(JSON.stringify(formErrorMessage));
	});

	it('should override form field readOnly value', () => {
		const uut = mount(<CSForm data={data} mode="read-only" />);
		const formField = uut.find('CSFormTextField');
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
		const input = uut.find('.cs-input-text');
		input.simulate('change', { target: { value: changedValue } });
		const form = uut.find('CSForm');
		expect(form.prop('onFieldChange')).toHaveBeenCalledWith(returnValue);
	});

	it('should call onFieldBlur and return correct value', () => {
		const onFieldBlurMock = jest.fn();
		const uut = mount(<CSForm data={data} onFieldBlur={onFieldBlurMock} />);
		const input = uut.find('.cs-input-text');
		input.simulate('blur', { target: { value: changedValue } });
		const form = uut.find('CSForm');
		expect(form.prop('onFieldBlur')).toHaveBeenCalledWith(returnValue);
	});

	it('should call onFieldChange and return correct value with custom error label', () => {
		const onFieldChangeMock = jest.fn();
		const uut = mount(<CSForm data={data} onFieldChange={onFieldChangeMock} errorLabels={{ maxLengthTextFieldErr: customErrorLabel }} />);
		const input = uut.find('.cs-input-text');
		input.simulate('change', { target: { value: changedValue } });
		const form = uut.find('CSForm');
		expect(form.prop('onFieldChange')).toHaveBeenCalledWith(returnValueCustomErr);
	});
});
