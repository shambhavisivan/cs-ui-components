import React, { ReactElement } from 'react';

import { shallow, default as Enzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CSForm, LocaleSettings } from '../CSForm';
import { ElementWrapper, FormDescriptor } from '../..';
import { FormLabels, FieldType } from '..';
import { ComponentStatus } from '../types/ComponentStatus';
import { FormPanel } from '../FormPanel';
import { FormField } from '../fields/FormField';
import { SimpleField } from '../fields/SimpleField';

Enzyme.configure({ adapter: new Adapter() });

const locale: LocaleSettings = ({} as unknown) as LocaleSettings;

export const testFormDescriptor: FormDescriptor = {
	type: 'FORM',
	panels: [
		{
			title: 'General',
			fields: [
				{
					name: 'Id',
					mandatory: 'true'
				}
			],
			isOpenByDefault: true
		}
	]
};

const wrapper: ElementWrapper = ({
	injectSaveButtonProps: (): Record<string, any> => ({
		className: 'horizontal-form-save-button'
	}),
	injectInputProps: (
		name: string,
		type: FieldType,
		status: ComponentStatus
	): Record<string, any> => ({}),

	wrapForm: (errorPanel: ReactElement, contents: ReactElement, saveButton: ReactElement) => (
		<div>
			<div className="details-wrapper">
				{errorPanel}
				{contents}
				{saveButton}
			</div>
		</div>
	),

	wrapPanel: (key: string, title: ReactElement, contents: ReactElement) => <div>{contents}</div>,

	wrapErrorPanel: (key: string, contents: ReactElement) => <div>{contents}</div>,

	wrapField: (
		name: string,
		status: ComponentStatus,
		label: ReactElement,
		input: ReactElement,
		errorMessage?: ReactElement
	) => (
		<div key={name} className="details-row">
			<div>
				<label>
					<span>{label}</span>
					{input}
				</label>
			</div>
			<div>{errorMessage}</div>
		</div>
	)
} as any) as ElementWrapper;

function nop(): any {
	// dummy function
}

const uut = shallow(
	<CSForm
		descriptor={testFormDescriptor}
		data={{ Id: '123' }}
		update={nop}
		save={() => Promise.resolve({})}
		fetchPossibleValues={field => Promise.resolve([])}
		labels={({ button_save: 'SAVE' } as unknown) as FormLabels}
		locale={locale}
		formSettings={{}}
		wrapper={wrapper}
	/>
);

it('renders save button', () => {
	expect(uut.find('Button')).toHaveLength(1);
	expect(uut.find('Button').prop('label')).toBe('SAVE');
	expect(uut.find('Button').prop('additionalProps')).toEqual(wrapper.injectSaveButtonProps());
	expect(uut.find('Button').prop('enabled')).toBeTruthy();
});

it('renders error panel', () => {
	expect(uut.find('ErrorPanel')).toHaveLength(1);
});

it('returns form data and errors to update function', () => {
	const update = jest.fn();
	const form = shallow(
		<CSForm
			descriptor={testFormDescriptor}
			data={{ Id: '123' }}
			update={update}
			save={() => Promise.resolve({})}
			fetchPossibleValues={() => Promise.resolve([])}
			labels={
				({
					button_save: 'SAVE',
					validation_message_required: 'MISSING'
				} as unknown) as FormLabels
			}
			locale={locale}
			formSettings={{}}
			wrapper={wrapper}
		/>
	);
	const field = form.find(FormPanel).dive().find(FormField).dive().find(SimpleField);
	field.prop('handleFieldChange')('');
	expect(update).toHaveBeenCalledWith(
		{ Id: '' },
		{ formErrors: [], fieldErrors: { Id: ['MISSING'] } }
	);
});

it('returns form data and external errors to update function', () => {
	const update = jest.fn();
	const form = shallow(
		<CSForm
			descriptor={testFormDescriptor}
			data={{ Id: '123' }}
			update={update}
			save={() => Promise.resolve({})}
			fetchPossibleValues={() => Promise.resolve([])}
			labels={
				({
					button_save: 'SAVE',
					validation_message_required: 'MISSING'
				} as unknown) as FormLabels
			}
			locale={locale}
			formSettings={{}}
			externalValidationErrors={{ formErrors: [], fieldErrors: { Id: ['EXTERNAL'] } }}
			wrapper={wrapper}
		/>
	);
	const field = form.find(FormPanel).dive().find(FormField).dive().find(SimpleField);
	field.prop('handleFieldChange')('42');
	expect(update).toHaveBeenCalledWith(
		{ Id: '42' },
		{ formErrors: [], fieldErrors: { Id: ['EXTERNAL'] } }
	);
});

it('merges internal and external errors for update function', () => {
	const update = jest.fn();
	const form = shallow(
		<CSForm
			descriptor={testFormDescriptor}
			data={{ Id: '123' }}
			update={update}
			save={() => Promise.resolve({})}
			fetchPossibleValues={() => Promise.resolve([])}
			labels={
				({
					button_save: 'SAVE',
					validation_message_required: 'MISSING'
				} as unknown) as FormLabels
			}
			locale={locale}
			formSettings={{}}
			wrapper={wrapper}
			externalValidationErrors={{ formErrors: [], fieldErrors: { Id: ['EXTERNAL'] } }}
		/>
	);
	const field = form.find(FormPanel).dive().find(FormField).dive().find(SimpleField);
	field.prop('handleFieldChange')('');
	expect(update).toHaveBeenCalledWith(
		{ Id: '' },
		{ formErrors: [], fieldErrors: { Id: ['MISSING', 'EXTERNAL'] } }
	);
});

it('returns form data and external errors to update function', () => {
	const onBlur = jest.fn();
	const form = shallow<CSForm>(
		<CSForm
			descriptor={testFormDescriptor}
			data={{ Id: '123' }}
			onBlur={onBlur}
			save={() => Promise.resolve({})}
			fetchPossibleValues={() => Promise.resolve([])}
			labels={
				({
					button_save: 'SAVE',
					validation_message_required: 'MISSING'
				} as unknown) as FormLabels
			}
			locale={locale}
			formSettings={{}}
			externalValidationErrors={{ formErrors: [], fieldErrors: { Id: ['EXTERNAL'] } }}
			wrapper={wrapper}
		/>
	);

	expect(form.state().data).toBeUndefined();

	const field1 = form.find(FormPanel).dive().find(FormField).dive().find(SimpleField);
	field1.prop('handleFieldChange')('4');

	expect(form.state().data).toEqual({ Id: '4' });

	const field2 = form.find(FormPanel).dive().find(FormField).dive().find(SimpleField);
	field2.prop('handleFieldChange')('42');

	expect(form.state().data).toEqual({ Id: '42' });

	const field3 = form.find(FormPanel).dive().find(FormField).dive().find(SimpleField);
	field3.prop('handleFieldBlur')('42');

	expect(onBlur).toHaveBeenCalledWith(
		{ Id: '42' },
		{ formErrors: [], fieldErrors: { Id: ['EXTERNAL'] } }
	);

	expect(onBlur).toHaveBeenCalledTimes(1);
});
