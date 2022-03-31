import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { CSLookup } from '@cloudsense/cs-ui-components';
import CSFormLookupField from '../../form-fields/CSFormLookupField';
import { actions, icons } from '../test-data/custom-data';

const label = 'label';
const type = 'LOOKUP';
const name = 'lookup';
const modeClient = 'client';
const modeServer = 'server';
const fieldToBeDisplayed = 'Account';
const fetchOptions: any = jest.fn();
const pageSize = 5;
const columns = [
	{ key: 'Account', header: 'Account' },
	{ key: 'Industry', header: 'Industry' },
];
const lookupOptions = [
	{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } },
	{ key: 2, data: { Id: 2, Account: 'Global Media', Industry: 'Industry' } },
	{ key: 3, data: { Id: 3, Account: 'Salesforce', Industry: 'Software' } },
];

describe('CSFormLookupField', () => {
	// Common props
	it('should pass correct mode to CSLookup', () => {
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(lookup.prop('mode')).toBe(modeClient);
	});

	it('should pass correct label to CSLookup', () => {
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(lookup.prop('label')).toBe(label);
	});

	it('should pass correct name to CSLookup', () => {
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(lookup.prop('name')).toBe(name);
	});

	it('should pass correct actions list to CSLookup', () => {
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
				actions={actions}
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(JSON.stringify(lookup.prop('actions'))).toBe(JSON.stringify(actions));
	});

	it('should pass correct disabled value to CSLookup', () => {
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
				disabled
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(lookup.prop('disabled')).toBeTruthy();
	});

	it('should pass correct error value to CSLookup', () => {
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
				error
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(lookup.prop('error')).toBeTruthy();
	});

	it('should pass correct error message to CSLookup', () => {
		const errorMessage = 'Error message.';
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
				error
				errorMessage={errorMessage}
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(lookup.prop('errorMessage')).toBe(errorMessage);
	});

	it('should pass correct help text to CSLookup', () => {
		const helpText = 'Help text.';
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
				helpText={helpText}
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(lookup.prop('helpText')).toBe(helpText);
	});

	it('should pass correct icons list to CSLookup', () => {
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
				icons={icons}
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(JSON.stringify(lookup.prop('icons'))).toBe(JSON.stringify(icons));
	});

	it('should call onBlur event', () => {
		const handleOnBlurMock = jest.fn();
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
				onBlur={handleOnBlurMock}
			/>,
		);

		const lookup = uut.find(CSLookup);
		lookup.props().onBlur({} as any);
		expect(handleOnBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should call onChange event', () => {
		const handleOnChangeMock = jest.fn();
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
				onChange={handleOnChangeMock}
			/>,
		);

		const lookup = uut.find(CSLookup);
		lookup.props().onSelectChange({} as any);
		expect(handleOnChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should call onClick event', () => {
		const handleOnClickMock = jest.fn();
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
				onClick={handleOnClickMock}
			/>,
		);
		const lookup = uut.find(CSLookup);
		lookup.props().onClick({} as any);
		expect(handleOnClickMock).toHaveBeenCalledTimes(1);
	});

	it('should call onKeyDown event', () => {
		const handleOnKeyDownMock = jest.fn();
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
				onKeyDown={handleOnKeyDownMock}
			/>,
		);
		const lookup = uut.find(CSLookup);
		lookup.props().onKeyDown({} as any);
		expect(handleOnKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should pass correct readOnly value to CSLookup', () => {
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
				readOnly
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(lookup.prop('readOnly')).toBeTruthy();
	});

	it('should pass correct required value to CSLookup', () => {
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
				required
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(lookup.prop('required')).toBeTruthy();
	});

	it('should pass correct styleClass to CSLookup', () => {
		const styleClass = 'custom-class';
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
				styleClass={styleClass}
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(lookup.prop('className')).toBe(styleClass);
	});

	it('should pass correct title to CSLookup', () => {
		const title = 'title';
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
				title={title}
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(lookup.prop('title')).toBe(title);
	});

	it('should pass correct value to CSLookup', () => {
		const value = { key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } };
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
				value={value}
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(JSON.stringify(lookup.prop('value'))).toBe(JSON.stringify(value));
	});

	// Client mode props
	it('should pass correct options to CSLookup', () => {
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(JSON.stringify(lookup.prop('options'))).toBe(JSON.stringify(lookupOptions));
	});

	it('should pass correct loading value to CSLookup', () => {
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
				loading
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(lookup.prop('loading')).toBeTruthy();
	});

	it('should pass correct searchBy value to CSLookup', () => {
		const searchBy = ['Account'];
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeClient}
				columns={columns}
				options={lookupOptions}
				searchBy={searchBy}
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(lookup.prop('searchBy')).toBe(searchBy);
	});

	// Server mode props
	it('should call fetchOptions', () => {
		const fetchOptionsMock = jest.fn();
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeServer}
				columns={columns}
				fetchOptions={fetchOptionsMock}
				pageSize={pageSize}
			/>,
		);
		const lookup = uut.find(CSLookup);
		(lookup.props() as any).fetchOptions();
		expect(fetchOptionsMock).toHaveBeenCalledTimes(1);
	});
	it('should pass correct infiniteScroll value to CSLookup', () => {
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeServer}
				columns={columns}
				fetchOptions={fetchOptions}
				pageSize={pageSize}
				infiniteScroll
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(lookup.prop('infiniteScroll')).toBeTruthy();
	});

	it('should pass correct minTermLength value to CSLookup', () => {
		const minTermLength = 3;
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeServer}
				columns={columns}
				fetchOptions={fetchOptions}
				pageSize={pageSize}
				minTermLength={minTermLength}
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(lookup.prop('minTermLength')).toBe(minTermLength);
	});

	it('should pass correct pageSize value to CSLookup', () => {
		const uut = shallow(
			<CSFormLookupField
				fieldToBeDisplayed={fieldToBeDisplayed}
				type={type}
				label={label}
				name={name}
				mode={modeServer}
				columns={columns}
				fetchOptions={fetchOptions}
				pageSize={pageSize}
			/>,
		);
		const lookup = uut.find(CSLookup);
		expect(lookup.prop('pageSize')).toBe(pageSize);
	});
});
