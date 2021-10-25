import * as React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import { CSSection } from '@cloudsense/cs-ui-components';
import CSFormSection from '../CSFormSection';
import { CSFormFieldData } from '../types/cs-form-field-types';

const fields: Array<CSFormFieldData> = [{
	fieldType: 'NUMBER',
	label: 'label',
	max: 9,
	min: 1,
	value: 1,
	required: true,
	name: 'number',
}, {
	fieldType: 'TEXT',
	label: 'label',
	value: 'Some text',
	name: 'text',
}, {
	fieldType: 'CHECKBOX',
	label: 'label',
	value: true,
	name: 'checkbox',
}];

const label = 'section';
const sectionKey = 'section_1';

describe('<CSFormSection />', () => {
	it('should pass correct label to CSSection', () => {
		const uut = shallow(
			<CSFormSection
				sectionKey={sectionKey}
				fields={fields}
				label={label}
			/>,
		);

		const section = uut.find(CSSection);
		expect(section.prop('title')).toBe(label);
	});

	it('should pass correct collapsible value to CSSection', () => {
		const uut = shallow(
			<CSFormSection
				sectionKey={sectionKey}
				fields={fields}
				label={label}
				collapsible
			/>,
		);

		const section = uut.find(CSSection);
		expect(section.prop('collapsible')).toBeTruthy();
	});

	it('should pass correct defaultClosed value to CSSection', () => {
		const uut = shallow(
			<CSFormSection
				sectionKey={sectionKey}
				fields={fields}
				label={label}
				defaultClosed
			/>,
		);

		const section = uut.find(CSSection);
		expect(section.prop('defaultClosed')).toBeTruthy();
	});

	it('should pass correct error value to CSSection', () => {
		const uut = shallow(
			<CSFormSection
				sectionKey={sectionKey}
				fields={fields}
				label={label}
				error
			/>,
		);

		const section = uut.find(CSSection);
		expect(section.prop('error')).toBeTruthy();
	});

	it('should pass correct error value to CSSection', () => {
		const uut = shallow(
			<CSFormSection
				sectionKey={sectionKey}
				fields={fields}
				label={label}
				error
			/>,
		);

		const section = uut.find(CSSection);
		expect(section.prop('error')).toBeTruthy();
	});

	it('should pass correct errorMessage value to CSSection', () => {
		const errorMessage = 'Error message.';
		const uut = shallow(
			<CSFormSection
				sectionKey={sectionKey}
				fields={fields}
				label={label}
				error
				errorMessage={errorMessage}
			/>,
		);

		const section = uut.find(CSSection);
		expect(section.prop('errorMessage')).toBe(errorMessage);
	});

	it('should render correct number of fields in CSSection', () => {
		const uut = shallow(
			<CSFormSection
				sectionKey={sectionKey}
				fields={fields}
				label={label}
			/>,
		);
		const sectionFields = uut.find(CSSection).children();
		expect(sectionFields).toHaveLength(3);
	});

	it('should pass correct hideSectionHeader value to CSSection', () => {
		const uut = shallow(
			<CSFormSection
				sectionKey={sectionKey}
				fields={fields}
				label={label}
				hideSectionHeader
			/>,
		);
		const section = uut.find(CSSection);
		expect(section.prop('hideSectionHeader')).toBeTruthy();
	});

	it('should pass correct custom class to CSSection', () => {
		const customClass = 'custom-select';
		const uut = shallow(
			<CSFormSection
				sectionKey={sectionKey}
				fields={fields}
				label={label}
				styleClass={customClass}
			/>,
		);
		const section = uut.find(CSSection);
		expect(section.prop('className')).toBe(`csf-section ${customClass}`);
	});
});
