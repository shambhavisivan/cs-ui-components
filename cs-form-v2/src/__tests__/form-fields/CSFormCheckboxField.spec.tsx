import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { CSCheckbox } from '@cloudsense/cs-ui-components';
import CSFormCheckboxField from '../../form-fields/CSFormCheckboxField';

const label = 'label';
const fieldType = 'CHECKBOX';
const name = 'checkbox';
const actions = [
	{
		action: () => jest.fn(),
		icon: { iconName: 'check' },
		labelHidden: true,
		name: 'Check',
	},
	{
		action: () => jest.fn(),
		icon: { iconName: 'add' },
		labelHidden: true,
		name: 'Add',
		getTooltip: {
			content: ['actions tooltip'],
			delay: 300,
			stickyOnClick: true,
		},
	},
];
const icons = [{ iconName: 'activity' }];

describe('CSFormCheckboxField', () => {
	it('should pass correct label to CSCheckbox', () => {
		const uut = shallow(
			<CSFormCheckboxField
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const checkbox = uut.find(CSCheckbox);
		expect(checkbox.prop('label')).toBe(label);
	});

	it('should pass correct name to CSCheckbox', () => {
		const uut = shallow(
			<CSFormCheckboxField
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const checkbox = uut.find(CSCheckbox);
		expect(checkbox.prop('name')).toBe(name);
	});

	it('should pass correct actions list to CSCheckbox', () => {
		const uut = shallow(
			<CSFormCheckboxField
				fieldType={fieldType}
				label={label}
				name={name}
				actions={actions}
			/>,
		);
		const checkbox = uut.find(CSCheckbox);
		expect(JSON.stringify(checkbox.prop('actions'))).toBe(JSON.stringify(actions));
	});

	it('should pass correct disabled value to CSCheckbox', () => {
		const uut = shallow(
			<CSFormCheckboxField
				fieldType={fieldType}
				label={label}
				name={name}
				disabled
			/>,
		);
		const checkbox = uut.find(CSCheckbox);
		expect(checkbox.prop('disabled')).toBeTruthy();
	});

	it('should pass correct error value to CSCheckbox', () => {
		const uut = shallow(
			<CSFormCheckboxField
				fieldType={fieldType}
				label={label}
				name={name}
				error
			/>,
		);
		const checkbox = uut.find(CSCheckbox);
		expect(checkbox.prop('error')).toBeTruthy();
	});

	it('should pass correct error message to CSCheckbox', () => {
		const errorMessage = 'Error message.';
		const uut = shallow(
			<CSFormCheckboxField
				fieldType={fieldType}
				label={label}
				name={name}
				error
				errorMessage={errorMessage}
			/>,
		);
		const checkbox = uut.find(CSCheckbox);
		expect(checkbox.prop('errorMessage')).toBe(errorMessage);
	});

	it('should pass correct help text to CSCheckbox', () => {
		const helpText = 'Help text.';
		const uut = shallow(
			<CSFormCheckboxField
				fieldType={fieldType}
				label={label}
				name={name}
				helpText={helpText}
			/>,
		);
		const checkbox = uut.find(CSCheckbox);
		expect(checkbox.prop('helpText')).toBe(helpText);
	});

	it('should pass correct icons value to CSCheckbox', () => {
		const uut = shallow(
			<CSFormCheckboxField
				fieldType={fieldType}
				label={label}
				name={name}
				icons={icons}
			/>,
		);
		const checkbox = uut.find(CSCheckbox);
		expect(JSON.stringify(checkbox.prop('icons'))).toBe(JSON.stringify(icons));
	});

	it('should pass correct indeterminate value to CSCheckbox', () => {
		const uut = shallow(
			<CSFormCheckboxField
				fieldType={fieldType}
				label={label}
				name={name}
				indeterminate
			/>,
		);
		const checkbox = uut.find(CSCheckbox);
		expect(checkbox.prop('indeterminate')).toBeTruthy();
	});

	it('should call onBlur event', () => {
		const handleOnBlurMock = jest.fn();
		const uut = shallow(
			<CSFormCheckboxField
				fieldType={fieldType}
				label={label}
				name={name}
				onBlur={handleOnBlurMock}
			/>,
		);
		const checkbox = uut.find(CSCheckbox);
		checkbox.simulate('blur', { target: { checked: false } });
		expect(handleOnBlurMock).toHaveBeenCalled();
	});

	it('should call onChange event', () => {
		const handleOnChangeMock = jest.fn();
		const uut = shallow(
			<CSFormCheckboxField
				fieldType={fieldType}
				label={label}
				name={name}
				onChange={handleOnChangeMock}
			/>,
		);
		const checkbox = uut.find(CSCheckbox);
		checkbox.simulate('change', { target: { checked: false } });
		expect(handleOnChangeMock).toHaveBeenCalled();
	});

	it('should pass correct readOnly value to CSCheckbox', () => {
		const uut = shallow(
			<CSFormCheckboxField
				fieldType={fieldType}
				label={label}
				name={name}
				readOnly
			/>,
		);
		const checkbox = uut.find(CSCheckbox);
		expect(checkbox.prop('readOnly')).toBeTruthy();
	});

	it('should pass correct required value to CSCheckbox', () => {
		const uut = shallow(
			<CSFormCheckboxField
				fieldType={fieldType}
				label={label}
				name={name}
				required
			/>,
		);
		const checkbox = uut.find(CSCheckbox);
		expect(checkbox.prop('required')).toBeTruthy();
	});

	it('should pass correct styleClass to CSCheckbox', () => {
		const styleClass = 'custom-class';
		const uut = shallow(
			<CSFormCheckboxField
				fieldType={fieldType}
				label={label}
				name={name}
				styleClass={styleClass}
			/>,
		);
		const checkbox = uut.find(CSCheckbox);
		expect(checkbox.prop('className')).toBe(styleClass);
	});

	it('should pass correct title to CSCheckbox', () => {
		const title = 'title';
		const uut = shallow(
			<CSFormCheckboxField
				fieldType={fieldType}
				label={label}
				name={name}
				title={title}
			/>,
		);
		const checkbox = uut.find(CSCheckbox);
		expect(checkbox.prop('title')).toBe(title);
	});

	it('should pass correct value to CSCheckbox', () => {
		const value = true;
		const uut = shallow(
			<CSFormCheckboxField
				fieldType={fieldType}
				label={label}
				name={name}
				value={value}
			/>,
		);
		const checkbox = uut.find(CSCheckbox);
		expect(checkbox.prop('checked')).toBe(value);
	});
});
