import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { CSSelect } from '@cloudsense/cs-ui-components';
import CSFormSelectField from '../../form-fields/CSFormSelectField';

const label = 'label';
const fieldType = 'SELECT';
const name = 'select';
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
const selectOptions = [
	{ key: 1, value: 'First' },
	{ key: 2, value: 'Second' },
	{ key: 3, value: 'Third' },
	{ key: 4, value: 'Fourth' },
];

describe('CSFormSelectField', () => {
	it('should render passed options as children of CSSelect', () => {
		const uut = shallow(
			<CSFormSelectField
				selectOptions={selectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const options = uut.find(CSSelect).children();
		expect(options).toHaveLength(4);
	});

	it('should pass correct label to CSSelect', () => {
		const uut = shallow(
			<CSFormSelectField
				selectOptions={selectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const select = uut.find(CSSelect);
		expect(select.prop('label')).toBe(label);
	});

	it('should pass correct name to CSSelect', () => {
		const uut = shallow(
			<CSFormSelectField
				selectOptions={selectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
			/>,
		);
		const select = uut.find(CSSelect);
		expect(select.prop('name')).toBe(name);
	});

	it('should pass correct actions list to CSSelect', () => {
		const uut = shallow(
			<CSFormSelectField
				selectOptions={selectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				actions={actions}
			/>,
		);
		const select = uut.find(CSSelect);
		expect(JSON.stringify(select.prop('actions'))).toBe(JSON.stringify(actions));
	});

	it('should pass correct disabled value to CSSelect', () => {
		const uut = shallow(
			<CSFormSelectField
				selectOptions={selectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				disabled
			/>,
		);
		const select = uut.find(CSSelect);
		expect(select.prop('disabled')).toBeTruthy();
	});

	it('should pass correct error value to CSSelect', () => {
		const uut = shallow(
			<CSFormSelectField
				selectOptions={selectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				error
			/>,
		);
		const select = uut.find(CSSelect);
		expect(select.prop('error')).toBeTruthy();
	});

	it('should pass correct error message to CSSelect', () => {
		const errorMessage = 'Error message.';
		const uut = shallow(
			<CSFormSelectField
				selectOptions={selectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				error
				errorMessage={errorMessage}
			/>,
		);
		const select = uut.find(CSSelect);
		expect(select.prop('errorMessage')).toBe(errorMessage);
	});

	it('should pass correct help text to CSSelect', () => {
		const helpText = 'Help text.';
		const uut = shallow(
			<CSFormSelectField
				selectOptions={selectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				helpText={helpText}
			/>,
		);
		const select = uut.find(CSSelect);
		expect(select.prop('helpText')).toBe(helpText);
	});

	it('should pass correct icons value to CSSelect', () => {
		const uut = shallow(
			<CSFormSelectField
				selectOptions={selectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				icons={icons}
			/>,
		);
		const select = uut.find(CSSelect);
		expect(JSON.stringify(select.prop('icons'))).toBe(JSON.stringify(icons));
	});

	it('should call onBlur event', () => {
		const handleOnBlurMock = jest.fn();
		const uut = shallow(
			<CSFormSelectField
				selectOptions={selectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				onBlur={handleOnBlurMock}
			/>,
		);
		const select = uut.find(CSSelect);
		select.simulate('blur', { target: { value: 'First' } });
		expect(handleOnBlurMock).toHaveBeenCalled();
	});

	it('should call onChange event', () => {
		const handleOnChangeMock = jest.fn();
		const uut = shallow(
			<CSFormSelectField
				selectOptions={selectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				onChange={handleOnChangeMock}
			/>,
		);
		const select = uut.find(CSSelect);
		select.simulate('change', { target: { value: 'First' } });
		expect(handleOnChangeMock).toHaveBeenCalled();
	});

	it('should pass correct readOnly value to CSSelect', () => {
		const uut = shallow(
			<CSFormSelectField
				selectOptions={selectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				readOnly
			/>,
		);
		const select = uut.find(CSSelect);
		expect(select.prop('readOnly')).toBeTruthy();
	});

	it('should pass correct required value to CSSelect', () => {
		const uut = shallow(
			<CSFormSelectField
				selectOptions={selectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				required
			/>,
		);
		const select = uut.find(CSSelect);
		expect(select.prop('required')).toBeTruthy();
	});

	it('should pass correct styleClass to CSSelect', () => {
		const styleClass = 'custom-class';
		const uut = shallow(
			<CSFormSelectField
				selectOptions={selectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				styleClass={styleClass}
			/>,
		);
		const select = uut.find(CSSelect);
		expect(select.prop('className')).toBe(styleClass);
	});

	it('should pass correct title to CSSelect', () => {
		const title = 'title';
		const uut = shallow(
			<CSFormSelectField
				selectOptions={selectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				title={title}
			/>,
		);
		const select = uut.find(CSSelect);
		expect(select.prop('title')).toBe(title);
	});

	it('should pass correct value to CSSelect', () => {
		const value = 'Third';
		const uut = shallow(
			<CSFormSelectField
				selectOptions={selectOptions}
				fieldType={fieldType}
				label={label}
				name={name}
				value={value}
			/>,
		);
		const select = uut.find(CSSelect);
		expect(select.prop('value')).toBe(value);
	});
});
