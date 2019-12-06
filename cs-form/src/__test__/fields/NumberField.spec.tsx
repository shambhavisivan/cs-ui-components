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

let locale: LocaleSettings = {};

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

it('render number field with default locale (en-US)', () => {
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
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>('input')!;

	expect(textInput.value).toEqual('123,432,423,434.78');
});

it('render number field with default locale (en-US) on input', () => {
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
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>('input')!;

	ReactTestUtils.Simulate.change(textInput, ({
		target: { value: '123456.789' }
	} as any) as SyntheticEventData);

	ReactTestUtils.Simulate.blur(textInput, ({
		target: { value: '123456.789' }
	} as any) as SyntheticEventData);

	expect(jestHandleChangeMock).toHaveBeenCalledWith('123456.789');
	expect(textInput.value).toEqual('123,456.789');
});

it('should call handleChange method onblur with non-formatted value', done => {
	locale = {
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
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>('input')!;

	ReactTestUtils.Simulate.change(textInput, ({
		target: { value: '123456.789' }
	} as any) as SyntheticEventData);

	ReactTestUtils.Simulate.blur(textInput, ({
		target: { value: '123456.789' }
	} as any) as SyntheticEventData);

	expect(jestHandleChangeMock).toHaveBeenCalledWith('123456.79');
	expect(textInput.value).toEqual('123,456.79');
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
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>('input')!;

	ReactTestUtils.Simulate.change(textInput, ({
		target: { value: '12' }
	} as any) as SyntheticEventData);

	ReactTestUtils.Simulate.blur(textInput, ({
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
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>('input')!;

	ReactTestUtils.Simulate.change(textInput, ({
		target: { value: '1234123456789' }
	} as any) as SyntheticEventData);

	expect(jestHandleChangeMock).not.toHaveBeenCalled();
	expect(textInput.value).toEqual('');
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
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>('input')!;

	ReactTestUtils.Simulate.blur(textInput, ({
		target: { value: '-12' }
	} as any) as SyntheticEventData);
	expect(jestHandleChangeMock).toHaveBeenCalledWith('-12.00');
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
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>('input')!;

	ReactTestUtils.Simulate.blur(textInput, ({
		target: { value: '+12' }
	} as any) as SyntheticEventData);
	expect(jestHandleChangeMock).toHaveBeenCalledWith('12.00');
	done();
});

it('should render values for {fi-Fi} locale', done => {
	locale = {
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
	const textInput: HTMLInputElement = container.querySelector<HTMLInputElement>('input')!;

	ReactTestUtils.Simulate.change(textInput, ({
		target: { value: '123456,89' }
	} as any) as SyntheticEventData);

	ReactTestUtils.Simulate.blur(textInput, ({
		target: { value: '123456,89' }
	} as any) as SyntheticEventData);

	expect(jestHandleChangeMock).toHaveBeenCalledWith('123456.89');
	/**
	 * Intl.NumberFormat does not use space (ASCII 32) but non-breaking space (ASCII 160)
	 * jest uses (ASCII 32) spaces so it is converted to (ASCII 160) for comparision.
	 */
	expect(textInput.value.replace(/\s/, ' ')).toEqual('123 456,89');
	done();
});
