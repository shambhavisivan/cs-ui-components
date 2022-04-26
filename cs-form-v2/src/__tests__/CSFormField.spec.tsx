import * as React from 'react';
import { mount, shallow } from 'enzyme';
import '../setupTests';
import CSFormField from '../CSFormField';
import { CSFormContext } from '../CSFormContext';

const label = 'label';
const name = 'field_name';

describe('<CSFormField />', () => {
	it('should render field wrapper only if field type is \'BUFFER\'', () => {
		const uut = shallow(<CSFormField type="BUFFER" />);
		const fieldWrapper = uut.find('.csf-field-wrapper');
		expect(fieldWrapper).toHaveLength(1);
		expect(fieldWrapper.children()).toHaveLength(0);
	});

	it('should render CSFormCustomField if field type is \'CUSTOM\'', () => {
		const uut = shallow(
			<CSFormField
				label={label}
				type="CUSTOM"
				render={<span>test</span>}
			/>,
		);
		const customField = uut.find('.csf-field-wrapper CSFormCustomField');
		expect(customField).toHaveLength(1);
	});

	it('should render CSFormCustomModalField if field type is \'CUSTOM-MODAL\'', () => {
		const uut = shallow(
			<CSFormField
				label={label}
				type="CUSTOM-MODAL"
				modalButton={{ label: 'Open modal' }}
				modal={{
					header: { title: 'Modal title' },
					body: { bodyContent: <span>Example</span> },
				}}
			/>,
		);
		const customModalField = uut.find('.csf-field-wrapper CSFormCustomModalField');
		expect(customModalField).toHaveLength(1);
	});

	it('should render CSFormCheckboxField if field type is \'CHECKBOX\'', () => {
		const uut = shallow(
			<CSFormField
				type="CHECKBOX"
				label={label}
				name={name}
			/>,
		);
		const checkboxField = uut.find('.csf-field-wrapper CSFormCheckboxField');
		expect(checkboxField).toHaveLength(1);
	});

	it('should render CSFormPicklistField if field type is \'PICKLIST\'', () => {
		const uut = shallow(
			<CSFormField
				type="PICKLIST"
				label={label}
				name={name}
				options={[]}
			/>,
		);
		const picklistField = uut.find('.csf-field-wrapper CSFormPicklistField');
		expect(picklistField).toHaveLength(1);
	});

	it('should render CSFormDateField if field type is \'DATE\'', () => {
		const uut = shallow(
			<CSFormField
				type="DATE"
				label={label}
				name={name}
			/>,
		);
		const dateField = uut.find('.csf-field-wrapper CSFormDateField');
		expect(dateField).toHaveLength(1);
	});

	it('should render CSFormDateTimeField if field type is \'DATETIME\'', () => {
		const uut = shallow(
			<CSFormField
				type="DATETIME"
				label={label}
				name={name}
			/>,
		);
		const dateTimeField = uut.find('.csf-field-wrapper CSFormDateTimeField');
		expect(dateTimeField).toHaveLength(1);
	});

	it('should render CSFormLookupField if field type is \'LOOKUP\'', () => {
		const uut = shallow(
			<CSFormField
				type="LOOKUP"
				label={label}
				name={name}
				mode="client"
				columns={[]}
				fieldToBeDisplayed="Account"
				options={[]}
			/>,
		);
		const lookupField = uut.find('.csf-field-wrapper CSFormLookupField');
		expect(lookupField).toHaveLength(1);
	});

	it('should render CSFormNumberField if field type is \'NUMBER\'', () => {
		const uut = shallow(
			<CSFormField
				type="NUMBER"
				label={label}
				name={name}
			/>,
		);
		const numberField = uut.find('.csf-field-wrapper CSFormNumberField');
		expect(numberField).toHaveLength(1);
	});

	it('should render CSFormRadioField if field type is \'RADIO\'', () => {
		const uut = shallow(
			<CSFormField
				type="RADIO"
				label={label}
				name={name}
				options={[]}
			/>,
		);
		const radioField = uut.find('.csf-field-wrapper CSFormRadioField');
		expect(radioField).toHaveLength(1);
	});

	it('should render CSFormTextField if field type is \'TEXT\'', () => {
		const uut = shallow(
			<CSFormField
				type="TEXT"
				label={label}
				name={name}
			/>,
		);
		const textField = uut.find('.csf-field-wrapper CSFormTextField');
		expect(textField).toHaveLength(1);
	});

	it('should render CSFormTextareaField if field type is \'TEXTAREA\'', () => {
		const uut = shallow(
			<CSFormField
				type="TEXTAREA"
				label={label}
				name={name}
			/>,
		);
		const textareaField = uut.find('.csf-field-wrapper CSFormTextareaField');
		expect(textareaField).toHaveLength(1);
	});

	it('should render CSFormToggleField if field type is \'TOGGLE\'', () => {
		const uut = shallow(
			<CSFormField
				type="TOGGLE"
				label={label}
				name={name}
			/>,
		);
		const toggleField = uut.find('.csf-field-wrapper CSFormToggleField');
		expect(toggleField).toHaveLength(1);
	});

	it('shouldn\'t render form field if hidden is set', () => {
		const uut = shallow(
			<CSFormField
				type="CHECKBOX"
				label={label}
				name={name}
				hidden
			/>,
		);
		const formField = uut.find('.csf-field-wrapper');
		expect(formField).toHaveLength(0);
	});

	it('should set correct field width based on columnNumber value', () => {
		const uut = mount(
			<CSFormContext.Provider
				value={{
					data: [],
					columnNumber: 5,
					handleFieldBlur: () => { },
					handleFieldChange: () => { },
					handleFieldClick: () => { },
					handleFieldFocus: () => { },
					handleFieldKeyDown: () => { },
				}}
			>
				<CSFormField
					type="CHECKBOX"
					label={label}
					name={name}
				/>
			</CSFormContext.Provider>,
		);
		const formFieldStyle = uut.find('.csf-field-wrapper').get(0).props.style;
		expect(formFieldStyle).toHaveProperty('--csf-field-width', '20%');
	});

	it('should set correct field width based on columnNumber and grow value', () => {
		const uut = mount(
			<CSFormContext.Provider
				value={{
					data: [],
					columnNumber: 5,
					handleFieldBlur: () => { },
					handleFieldChange: () => { },
					handleFieldClick: () => { },
					handleFieldFocus: () => { },
					handleFieldKeyDown: () => { },
				}}
			>
				<CSFormField
					type="CHECKBOX"
					label={label}
					name={name}
					grow={2}
				/>
			</CSFormContext.Provider>,
		);
		const formFieldStyle = uut.find('.csf-field-wrapper').get(0).props.style;
		expect(formFieldStyle).toHaveProperty('--csf-field-width', '40%');
	});

	it('should render form field in a new line', () => {
		const uut = shallow(
			<CSFormField
				type="CHECKBOX"
				label={label}
				name={name}
				showInNewLine
			/>,
		);
		const formField = uut.find('.csf-field-new-line > .csf-field-wrapper');
		expect(formField).toHaveLength(1);
	});
});
