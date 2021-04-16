import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import ReactTestUtils, { act } from 'react-dom/test-utils';
import { ElementWrapper, LocaleSettings, FieldDescriptor } from '../..';
import { ReferenceField } from '../../fields/ReferenceField';
import { ReferenceOption } from '../../../dist';

/** TODO: this should happen at start of the test suite. */
configure({ adapter: new Adapter() });

const locale: LocaleSettings = ({} as unknown) as LocaleSettings;

const wrapper: ElementWrapper = ({
	injectInputProps: () => null
} as unknown) as ElementWrapper;

function nop(): any {
	// dummy function
}

const referenceOptionFetcher = (field: FieldDescriptor, searchTerm: string) => {
	if (searchTerm === 'A') {
		return Promise.resolve([
			{ Id: 'OnDemandIdA', Name: 'On Demand NameA' }
		] as Array<ReferenceOption>);
	}

	return Promise.resolve([
		{ Id: 'OnDemandIdB', Name: 'On Demand NameB' }
	] as Array<ReferenceOption>);
};

const descriptor: FieldDescriptor = {
	fieldType: 'REFERENCE',
	name: 'Account__c',
	label: 'Account'
};

let container: HTMLDivElement;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	document.body.removeChild(container);
});

it('renders name property of field value and start button on load', () => {
	act(() => {
		ReactDOM.render(
			<ReferenceField
				value={{ Id: 'InitialId', name: 'Initial name' }}
				wrapper={wrapper}
				descriptor={descriptor}
				locale={locale}
				handleFieldChange={nop}
				handleFieldBlur={nop}
				fetchReferenceOptions={referenceOptionFetcher}
				status="enabled"
				fetchPossibleValues={nop}
			/>,
			container
		);
	});

	// On initial load, just the selectoption value should be rendered
	const searchInput: HTMLInputElement | null = container.querySelector('#search-input');
	expect(searchInput != null && searchInput.value).toBe('Initial name');
	const containerButtons = container.querySelector('#startEditButton');
	expect(containerButtons !== null && containerButtons.id === 'startEditButton').toBeTruthy();
});

it('on StartEdit click, renders an input box', () => {
	act(() => {
		ReactDOM.render(
			<ReferenceField
				value={{ Id: 'InitialId', name: 'Initial name' }}
				wrapper={wrapper}
				descriptor={descriptor}
				locale={locale}
				handleFieldChange={nop}
				handleFieldBlur={nop}
				fetchReferenceOptions={referenceOptionFetcher}
				status="enabled"
				fetchPossibleValues={nop}
			/>,
			container
		);

		const startEditButton = container.querySelector('#startEditButton');
		if (startEditButton) {
			ReactTestUtils.Simulate.click(startEditButton);
		}
	});

	expect(container.textContent).toBe('');
	expect(container.querySelector('#startEditButton')).toBeNull();
	expect(container.querySelectorAll('input').length).toBe(1);
	expect(container.querySelectorAll('input')[0].value).toBe('Initial name');
});

it('on filling search input, fetches options using fetchReferenceOptions', () => {
	const mockHandleChange = jest.fn();

	const component = mount<ReferenceField>(
		<ReferenceField
			value={{ Id: 'InitialId', name: 'Initial name' }}
			wrapper={wrapper}
			descriptor={descriptor}
			locale={locale}
			handleFieldChange={mockHandleChange}
			handleFieldBlur={nop}
			fetchReferenceOptions={referenceOptionFetcher}
			status="enabled"
			fetchPossibleValues={nop}
		/>
	);

	const spyExecuteSearch = jest.spyOn(component.instance(), 'executeSearch');
	act(() => {
		const startEditButton = component.find('#startEditButton');
		if (startEditButton) {
			startEditButton.simulate('click');
		}
	});
	component.update();
	const searchbox = component.find('input');
	act(() => {
		searchbox.simulate('change', { target: { value: 'O' } });
	});
	component.update();
	expect(spyExecuteSearch).toHaveBeenCalledWith('O');

	const selected: ReferenceOption = {
		Id: 'SAAFAES',
		Name: 'Decima Technologies',
		key: 'DCMA'
	};
	act(() => {
		component.instance().selectOption(selected);
	});
	expect(component.state('selectedOption')).toBe(selected);
});

describe('on click outside editor panel when editing', () => {
	const mockHandleChange = jest.fn();

	beforeEach(() => {
		act(() => {
			ReactDOM.render(
				<ReferenceField
					value={{ Id: 'InitialId', name: 'Initial name' }}
					wrapper={wrapper}
					descriptor={descriptor}
					locale={locale}
					handleFieldChange={nop}
					handleFieldBlur={mockHandleChange}
					fetchReferenceOptions={referenceOptionFetcher}
					status="enabled"
					fetchPossibleValues={nop}
				/>,
				container
			);

			/** Enter edit mode by clicking startEdit */
			const startEditButton = container.querySelector('#startEditButton');
			if (startEditButton) {
				ReactTestUtils.Simulate.click(startEditButton);
			}
		});
	});

	it('should hide editor', () => {
		expect(container.querySelector('#startEditButton')).toBeNull();
		/** expect the input box to appear */
		expect(container.querySelectorAll('.input-edit-mode').length).toBe(1);

		/** click on container (i.e) outside the ReferenceField Component */
		act(() => {
			container.click();
		});

		/** field switches back from edit mode to display mode, hence input is removed from DOM */
		expect(container.querySelectorAll('.input-edit-mode').length).toBe(0);
	});

	it('should update selectedOption to be null when edited input is blank', () => {
		mockHandleChange.mockClear();

		act(() => {
			const startEditButton = container.querySelector('.input-edit-mode');
			if (startEditButton) {
				ReactTestUtils.Simulate.change(startEditButton, { target: { value: '' } } as any);
			}
		});

		act(() => {
			container.click();
		});

		expect(mockHandleChange).toHaveBeenCalledWith(null);
		/** field switches back from edit mode to display mode, hence input is removed from DOM */
		expect(container.querySelectorAll('.input-edit-mode').length).toBe(0);
	});
});

it('handleOutsideClick should do nothing when not in edit mode', () => {
	const mockHandleChange = jest.fn();

	act(() => {
		ReactDOM.render(
			<ReferenceField
				value={{ Id: 'InitialId', name: 'Initial name' }}
				wrapper={wrapper}
				descriptor={descriptor}
				locale={locale}
				handleFieldChange={nop}
				handleFieldBlur={mockHandleChange}
				fetchReferenceOptions={referenceOptionFetcher}
				status="enabled"
				fetchPossibleValues={nop}
			/>,
			container
		);
	});

	expect(container.querySelectorAll('#startEditButton').length).toBe(1);
	expect(container.querySelectorAll('.input-edit-mode').length).toBe(0);

	act(() => {
		container.click();
	});

	expect(container.querySelectorAll('#startEditButton').length).toBe(1);
	expect(container.querySelectorAll('.input-edit-mode').length).toBe(0);
	expect(mockHandleChange).toHaveBeenCalledTimes(0);
});
