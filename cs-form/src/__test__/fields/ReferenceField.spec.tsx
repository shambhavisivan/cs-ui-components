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
		return Promise.resolve([{ Id: 'OnDemandIdA', name: 'On Demand NameA' }]);
	}

	return Promise.resolve([{ Id: 'OnDemandIdB', name: 'On Demand NameB' }]);
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
				fetchReferenceOptions={referenceOptionFetcher}
				status="enabled"
			/>,
			container
		);
	});

	// On initial load, just the selectoption value should be rendered
	expect(container.querySelector('#search-input')!.value).toBe('Initial name');
	const containerButtons = container.querySelector('#startEditButton');
	expect(
		containerButtons !== null && containerButtons.id === 'startEditButton'
	).toBeTruthy();
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
				fetchReferenceOptions={referenceOptionFetcher}
				status="enabled"
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
			fetchReferenceOptions={referenceOptionFetcher}
			status="enabled"
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
		name: 'Decima Technologies',
		key: 'DCMA'
	};
	act(() => {
		component.instance().selectOption(selected);
	});
	expect(component.state('selectedOption')).toBe(selected);
});

it('on click outside the editor panel should hide editor', () => {
	act(() => {
		ReactDOM.render(
			<ReferenceField
				value={{ Id: 'InitialId', name: 'Initial name' }}
				wrapper={wrapper}
				descriptor={descriptor}
				locale={locale}
				handleFieldChange={nop}
				fetchReferenceOptions={referenceOptionFetcher}
				status="enabled"
			/>,
			container
		);

		/** Enter edit mode by clicking startEdit */
		const startEditButton = container.querySelector('#startEditButton');
		if (startEditButton) {
			ReactTestUtils.Simulate.click(startEditButton);
		}
	});

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
