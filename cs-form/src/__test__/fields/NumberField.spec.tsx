import React from 'react';
import { default as Enzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactTestUtils, { act, SyntheticEventData } from 'react-dom/test-utils';
import { FieldDescriptor } from '../../types/FormDescriptor';
import { ElementWrapper } from '../..';
import { LocaleSettings } from '../../CSForm';
import { NumberField } from '../../fields/NumberField';
import ReactDOM from 'react-dom';

Enzyme.configure({ adapter: new Adapter() });

const descriptor: FieldDescriptor = {
	fieldType: 'NUMBER',
	name: 'testField',
	label: 'Test field'
};

let locale: LocaleSettings = {
	dates: {
		format: '',
		daysOfWeek: [],
		monthsOfYear: [],
		firstDayOfWeek: 0,
		daysInFirstWeek: 0
	}
};

const wrapper: ElementWrapper = ({
	injectInputProps: () => null
} as unknown) as ElementWrapper;

const jestHandleChangeMock = jest.fn();
const jestFetchPossibleValuesMock = jest.fn();

let container: HTMLDivElement;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	document.body.removeChild(container);
	jestHandleChangeMock.mockClear();
});

it('render number field with default locale (en-US) and display formatted value', () => {
	ReactDOM.render(
		<NumberField
			value="123432423434.78"
			wrapper={wrapper}
			descriptor={descriptor}
			locale={locale}
			handleFieldChange={jestHandleChangeMock}
			fetchPossibleValues={jestFetchPossibleValuesMock}
			status="enabled"
		/>,
		container
	);
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>(
		'#display-field'
	)!;

	expect(textInput.value).toEqual('123,432,423,434.78');
});

it('switch to edit mode and verify the unformatted value in edit mode', () => {
	ReactDOM.render(
		<NumberField
			value="123432423434.78"
			wrapper={wrapper}
			descriptor={descriptor}
			locale={locale}
			handleFieldChange={jestHandleChangeMock}
			fetchPossibleValues={jestFetchPossibleValuesMock}
			status="enabled"
		/>,
		container
	);
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>(
		'#display-field'
	)!;
	expect(textInput.value).toEqual('123,432,423,434.78');
	ReactTestUtils.Simulate.focus(textInput);

	const editTextInput = container.querySelector<HTMLInputElement>('#edit-field')!;
	expect(editTextInput.value).toEqual('123432423434.78');
});

it('should call handleChange method onblur with non-formatted value', done => {
	locale = {
		...locale,
		number: {
			userLocaleLang: 'ja',
			userLocaleCountry: 'JP',
			decimalSeparator: '.'
		}
	};
	descriptor.scale = 2;

	act(() => {
		ReactDOM.render(
			<NumberField
				value=""
				wrapper={wrapper}
				descriptor={descriptor}
				locale={locale}
				handleFieldChange={jestHandleChangeMock}
				fetchPossibleValues={jestFetchPossibleValuesMock}
				status="enabled"
			/>,
			container
		);
	});
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>(
		'#display-field'
	)!;
	ReactTestUtils.Simulate.focus(textInput);

	const editTextInput = container.querySelector<HTMLInputElement>('#edit-field')!;

	ReactTestUtils.Simulate.blur(editTextInput, ({
		target: { value: '123456.789' }
	} as any) as SyntheticEventData);
	expect(jestHandleChangeMock).toHaveBeenCalledWith(123456.79);
	expect(editTextInput.value).toEqual('123,456.79');
	done();
});

it('should respect precision and scale if provided.', done => {
	descriptor.precision = 4;
	descriptor.scale = 2;

	act(() => {
		ReactDOM.render(
			<NumberField
				value=""
				wrapper={wrapper}
				descriptor={descriptor}
				locale={locale}
				handleFieldChange={jestHandleChangeMock}
				fetchPossibleValues={jestFetchPossibleValuesMock}
				status="enabled"
			/>,
			container
		);
	});
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>(
		'#display-field'
	)!;
	ReactTestUtils.Simulate.focus(textInput);

	const editTextInput = container.querySelector<HTMLInputElement>('#edit-field')!;
	ReactTestUtils.Simulate.change(editTextInput, ({
		target: { value: '12' }
	} as any) as SyntheticEventData);

	ReactTestUtils.Simulate.blur(editTextInput, ({
		target: { value: '12' }
	} as any) as SyntheticEventData);

	expect(jestHandleChangeMock).toHaveBeenCalledWith('12');
	expect(textInput.value).toEqual('12.00');
	done();
});

it('does not allow data outside precision and scale to be entered in field', done => {
	descriptor.precision = 2;
	descriptor.scale = 2;

	act(() => {
		ReactDOM.render(
			<NumberField
				value=""
				wrapper={wrapper}
				descriptor={descriptor}
				locale={locale}
				handleFieldChange={jestHandleChangeMock}
				fetchPossibleValues={jestFetchPossibleValuesMock}
				status="enabled"
			/>,
			container
		);
	});
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>(
		'#display-field'
	)!;
	ReactTestUtils.Simulate.focus(textInput);

	ReactTestUtils.Simulate.change(textInput, ({
		target: { value: '1234123456789' }
	} as any) as SyntheticEventData);
	const editTextInput = container.querySelector<HTMLInputElement>('#edit-field')!;

	expect(jestHandleChangeMock).not.toHaveBeenCalled();
	expect(editTextInput.value).toEqual('');
	done();
});

it('should allow negative numbers', done => {
	act(() => {
		ReactDOM.render(
			<NumberField
				value=""
				wrapper={wrapper}
				descriptor={descriptor}
				locale={locale}
				handleFieldChange={jestHandleChangeMock}
				fetchPossibleValues={jestFetchPossibleValuesMock}
				status="enabled"
			/>,
			container
		);
	});
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>(
		'#display-field'
	)!;
	ReactTestUtils.Simulate.focus(textInput);

	const editTextInput = container.querySelector<HTMLInputElement>('#edit-field')!;
	ReactTestUtils.Simulate.blur(editTextInput, ({
		target: { value: '-12' }
	} as any) as SyntheticEventData);
	expect(jestHandleChangeMock).toHaveBeenCalledWith(-12);
	done();
});

it('should ignore + and display positive number', done => {
	act(() => {
		ReactDOM.render(
			<NumberField
				value=""
				wrapper={wrapper}
				descriptor={descriptor}
				locale={locale}
				handleFieldChange={jestHandleChangeMock}
				fetchPossibleValues={jestFetchPossibleValuesMock}
				status="enabled"
			/>,
			container
		);
	});
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>(
		'#display-field'
	)!;
	ReactTestUtils.Simulate.focus(textInput);

	const editTextInput = container.querySelector<HTMLInputElement>('#edit-field')!;
	ReactTestUtils.Simulate.blur(editTextInput, ({
		target: { value: '+12' }
	} as any) as SyntheticEventData);
	expect(jestHandleChangeMock).toHaveBeenCalledWith(12);
	done();
});

it('should render values for {fi-Fi} locale', done => {
	locale = {
		...locale,
		number: {
			userLocaleLang: 'fi',
			userLocaleCountry: 'FI',
			decimalSeparator: ','
		}
	};

	act(() => {
		ReactDOM.render(
			<NumberField
				value=""
				wrapper={wrapper}
				descriptor={descriptor}
				locale={locale}
				handleFieldChange={jestHandleChangeMock}
				fetchPossibleValues={jestFetchPossibleValuesMock}
				status="enabled"
			/>,
			container
		);
	});
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>(
		'#display-field'
	)!;
	ReactTestUtils.Simulate.focus(textInput);

	const editTextInput = container.querySelector<HTMLInputElement>('#edit-field')!;
	ReactTestUtils.Simulate.change(editTextInput, ({
		target: { value: '123456,89' }
	} as any) as SyntheticEventData);

	ReactTestUtils.Simulate.blur(editTextInput, ({
		target: { value: '123456,89' }
	} as any) as SyntheticEventData);

	expect(jestHandleChangeMock).toHaveBeenCalledWith(123456.89);
	/**
	 * Intl.NumberFormat does not use space (ASCII 32) but non-breaking space (ASCII 160)
	 * jest uses (ASCII 32) spaces so it is converted to (ASCII 160) for comparision.
	 */
	expect(editTextInput.value.replace(/\s/, ' ')).toEqual('123 456,89');
	done();
});

it('does not allow invalid numbers when copy pasted', done => {
	descriptor.precision = 2;
	descriptor.scale = 2;

	act(() => {
		ReactDOM.render(
			<NumberField
				value=""
				wrapper={wrapper}
				descriptor={descriptor}
				locale={locale}
				handleFieldChange={jestHandleChangeMock}
				fetchPossibleValues={jestFetchPossibleValuesMock}
				status="enabled"
			/>,
			container
		);
	});
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>(
		'#display-field'
	)!;
	ReactTestUtils.Simulate.focus(textInput);

	ReactTestUtils.Simulate.change(textInput, ({
		target: { value: '12,34,1234.5678,9' }
	} as any) as SyntheticEventData);
	const editTextInput = container.querySelector<HTMLInputElement>('#edit-field')!;

	expect(jestHandleChangeMock).not.toHaveBeenCalled();
	expect(editTextInput.value).toEqual('');
	done();
});

it('should allow zero and format it in required format', done => {
	descriptor.precision = 2;
	descriptor.scale = 2;

	act(() => {
		ReactDOM.render(
			<NumberField
				value="0"
				wrapper={wrapper}
				descriptor={descriptor}
				locale={locale}
				handleFieldChange={jestHandleChangeMock}
				fetchPossibleValues={jestFetchPossibleValuesMock}
				status="enabled"
			/>,
			container
		);
	});
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>(
		'#display-field'
	)!;
	ReactTestUtils.Simulate.focus(textInput);

	const editTextInput = container.querySelector<HTMLInputElement>('#edit-field')!;

	ReactTestUtils.Simulate.blur(editTextInput, ({
		target: { value: '0' }
	} as any) as SyntheticEventData);

	expect(jestHandleChangeMock).toHaveBeenCalledWith(0.0);
	expect(editTextInput.value).toEqual('0,00');
	done();
});

it('sets readonly', done => {
	act(() => {
		ReactDOM.render(
			<NumberField
				value="0"
				wrapper={wrapper}
				descriptor={descriptor}
				locale={locale}
				handleFieldChange={jestHandleChangeMock}
				fetchPossibleValues={jestFetchPossibleValuesMock}
				status="visible"
			/>,
			container
		);
	});

	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>(
		'#display-field'
	)!;

	expect(textInput.readOnly).toBe(true);
	done();
});

it('sets readonly even when mandatory', done => {
	descriptor.enabled = 'false';

	act(() => {
		ReactDOM.render(
			<NumberField
				value="0"
				wrapper={wrapper}
				descriptor={descriptor}
				locale={locale}
				handleFieldChange={jestHandleChangeMock}
				fetchPossibleValues={jestFetchPossibleValuesMock}
				status="mandatory"
			/>,
			container
		);
	});

	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>(
		'#display-field'
	)!;

	expect(textInput.readOnly).toBe(true);
	done();
});

test('Test NumberField goes into edit mode on focus when it is enabled.', () => {
	descriptor.enabled = 'true';

	ReactDOM.render(
		<NumberField
			value="123432423434.78"
			wrapper={wrapper}
			descriptor={descriptor}
			locale={locale}
			handleFieldChange={jestHandleChangeMock}
			fetchPossibleValues={jestFetchPossibleValuesMock}
			status="enabled"
		/>,
		container
	);
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>(
		'#display-field'
	)!;
	expect(textInput).not.toBeUndefined();
	expect(textInput).not.toBeNull();

	ReactTestUtils.Simulate.focus(textInput);

	const editTextInput = container.querySelector<HTMLInputElement>('#edit-field')!;
	expect(editTextInput).not.toBeUndefined();
	expect(editTextInput).not.toBeNull();
});

test('Test NumberField does not go into edit mode on focus when it is read only.', () => {
	descriptor.enabled = 'false';

	ReactDOM.render(
		<NumberField
			value="12"
			wrapper={wrapper}
			descriptor={descriptor}
			locale={locale}
			handleFieldChange={jestHandleChangeMock}
			fetchPossibleValues={jestFetchPossibleValuesMock}
			status="enabled"
		/>,
		container
	);
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>(
		'#display-field'
	)!;
	expect(textInput).not.toBeUndefined();
	expect(textInput).not.toBeNull();

	ReactTestUtils.Simulate.focus(textInput);

	const editTextInput = container.querySelector<HTMLInputElement>('#edit-field')!;
	expect(editTextInput).toBeNull();
});
