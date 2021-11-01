import * as React from 'react';
import { mount, shallow } from 'enzyme';
import '../setupTests';
import CSFormField from '../CSFormField';
import { CSFormContext } from '../CSFormContext';

const label = 'label';
const name = 'field_name';

describe('<CSFormField />', () => {
	it('should render CSFormCustomField if fieldType is \'CUSTOM\'', () => {
		const uut = shallow(
			<CSFormField
				fieldType="CUSTOM"
				render={<span>test</span>}
			/>,
		);
		const customField = uut.find('.csf-field-wrapper CSFormCustomField');
		expect(customField).toHaveLength(1);
	});

	it('should render CSFormCheckboxField if fieldType is \'CHECKBOX\'', () => {
		const uut = shallow(
			<CSFormField
				fieldType="CHECKBOX"
				label={label}
				name={name}
			/>,
		);
		const checkboxField = uut.find('.csf-field-wrapper CSFormCheckboxField');
		expect(checkboxField).toHaveLength(1);
	});

	it('should render CSFormCustomSelectField if fieldType is \'CUSTOM-SELECT\'', () => {
		const uut = shallow(
			<CSFormField
				fieldType="CUSTOM-SELECT"
				label={label}
				name={name}
				options={[]}
			/>,
		);
		const customSelectField = uut.find('.csf-field-wrapper CSFormCustomSelectField');
		expect(customSelectField).toHaveLength(1);
	});

	it('should render CSFormDateField if fieldType is \'DATE\'', () => {
		const uut = shallow(
			<CSFormField
				fieldType="DATE"
				label={label}
				name={name}
			/>,
		);
		const dateField = uut.find('.csf-field-wrapper CSFormDateField');
		expect(dateField).toHaveLength(1);
	});

	it('should render CSFormDateTimeField if fieldType is \'DATETIME\'', () => {
		const uut = shallow(
			<CSFormField
				fieldType="DATETIME"
				label={label}
				name={name}
			/>,
		);
		const dateTimeField = uut.find('.csf-field-wrapper CSFormDateTimeField');
		expect(dateTimeField).toHaveLength(1);
	});

	it('should render CSFormLookupField if fieldType is \'LOOKUP\'', () => {
		const uut = shallow(
			<CSFormField
				fieldType="LOOKUP"
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

	it('should render CSFormNumberField if fieldType is \'NUMBER\'', () => {
		const uut = shallow(
			<CSFormField
				fieldType="NUMBER"
				label={label}
				name={name}
			/>,
		);
		const numberField = uut.find('.csf-field-wrapper CSFormNumberField');
		expect(numberField).toHaveLength(1);
	});

	it('should render CSFormRadioField if fieldType is \'RADIO\'', () => {
		const uut = shallow(
			<CSFormField
				fieldType="RADIO"
				label={label}
				name={name}
				radioOptions={[]}
			/>,
		);
		const radioField = uut.find('.csf-field-wrapper CSFormRadioField');
		expect(radioField).toHaveLength(1);
	});

	it('should render CSFormSelectField if fieldType is \'SELECT\'', () => {
		const uut = shallow(
			<CSFormField
				fieldType="SELECT"
				label={label}
				name={name}
				selectOptions={[]}
			/>,
		);
		const selectField = uut.find('.csf-field-wrapper CSFormSelectField');
		expect(selectField).toHaveLength(1);
	});

	it('should render CSFormTextField if fieldType is \'TEXT\'', () => {
		const uut = shallow(
			<CSFormField
				fieldType="TEXT"
				label={label}
				name={name}
			/>,
		);
		const textField = uut.find('.csf-field-wrapper CSFormTextField');
		expect(textField).toHaveLength(1);
	});

	it('should render CSFormTextareaField if fieldType is \'TEXTAREA\'', () => {
		const uut = shallow(
			<CSFormField
				fieldType="TEXTAREA"
				label={label}
				name={name}
			/>,
		);
		const textareaField = uut.find('.csf-field-wrapper CSFormTextareaField');
		expect(textareaField).toHaveLength(1);
	});

	it('should render CSFormToggleField if fieldType is \'TOGGLE\'', () => {
		const uut = shallow(
			<CSFormField
				fieldType="TOGGLE"
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
				fieldType="CHECKBOX"
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
				}}
			>
				<CSFormField
					fieldType="CHECKBOX"
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
				}}
			>
				<CSFormField
					fieldType="CHECKBOX"
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
				fieldType="CHECKBOX"
				label={label}
				name={name}
				showInNewLine
			/>,
		);
		const formField = uut.find('.csf-field-new-line > .csf-field-wrapper');
		expect(formField).toHaveLength(1);
	});
});
