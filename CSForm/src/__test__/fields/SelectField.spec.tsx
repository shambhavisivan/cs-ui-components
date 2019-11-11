import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils, { act, SyntheticEventData } from 'react-dom/test-utils';
import { ElementWrapper, LocaleSettings, FieldDescriptor, SelectOption } from '../..';
import { SelectField } from '../../fields/SelectField';

const locale: LocaleSettings = {} as unknown as LocaleSettings;

const wrapper: ElementWrapper = {
	injectInputProps: () => null
} as unknown as ElementWrapper;

function nop(): any {
	// dummy function
}

const optionFetcher = () => Promise.resolve([]);

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

const descriptor: FieldDescriptor = {
	fieldType: 'PICKLIST',
	name: 'testField',
	label: 'Test field'
};

let container: HTMLDivElement;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	document.body.removeChild(container);
});

it('renders a dropdown box', () => {
	act(() => {
		ReactDOM.render(
			<SelectField
				value="option1"
				wrapper={wrapper}
				descriptor={descriptor}
				locale={locale}
				handleFieldChange={nop}
				selectOptions={selectOptions}
				fetchPossibleValues={optionFetcher}
				status="enabled" />,
			container
		);
	});

	const select = container.querySelector('select');
	expect(select).not.toBeNull();
	expect(select && select.value).toBe('option1');
	expect(select && select.name).toBe('testField');
	expect(container.getElementsByTagName('option')).toHaveLength(selectOptions.length);
});

it('sets readonly', () => {
	act(() => {
		ReactDOM.render(
			<SelectField
				value="option1"
				wrapper={wrapper}
				descriptor={descriptor}
				locale={locale}
				handleFieldChange={nop}
				selectOptions={selectOptions}
				fetchPossibleValues={optionFetcher}
				status="visible" />,
			container
		);
	});

	const select = container.querySelector('select');
	expect(select && select.disabled).toBe(true);
});

it('calls onChange() on change', done => {
	const onChange = (value: any) => {
		expect(value).toBe('option2');
		done();
	};

	act(() => {
		ReactDOM.render(
			<SelectField
				value="option1"
				wrapper={wrapper}
				descriptor={descriptor}
				locale={locale}
				handleFieldChange={onChange}
				selectOptions={selectOptions}
				fetchPossibleValues={optionFetcher}
				status="enabled"
			/>,
			container
		);

		const select = container.querySelector('select');
		if (select) {
			ReactTestUtils.Simulate.change(select, { target: { value: 'option2' } } as any as SyntheticEventData);
		}
	});
});
