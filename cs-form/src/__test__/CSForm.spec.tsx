import React, { ReactElement } from 'react';

import { shallow, default as Enzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CSForm, LocaleSettings } from '../CSForm';
import { ElementWrapper, FormDescriptor } from '../..';
import { FormLabels, FieldType } from '..';
import { ComponentStatus } from '../types/ComponentStatus';

Enzyme.configure({ adapter: new Adapter() });

const locale: LocaleSettings = {} as unknown as LocaleSettings;

export const testFormDescriptor: FormDescriptor = {
	type: 'FORM',
	panels: [
		{
			title: 'General',
			fields: [
				{
					name: 'Id'
				}
			],
			isOpenByDefault: true
		}
	]
};

const wrapper: ElementWrapper = {
	injectSaveButtonProps: (): Record<string, any> => ({ className: 'horizontal-form-save-button' }),
	injectInputProps: (name: string, type: FieldType, status: ComponentStatus): Record<string, any> => ({}),

	wrapForm: (errorPanel: ReactElement, contents: ReactElement, saveButton: ReactElement) => <div>
		<div className="details-wrapper">
			{errorPanel}
			{contents}
			{saveButton}
		</div>
	</div>,

	wrapPanel: (key: string, title: ReactElement, contents: ReactElement) => <div>{contents}</div>,

	wrapErrorPanel: (key: string, contents: ReactElement) => <div>{contents}</div>,

	wrapField: (name: string, status: ComponentStatus, label: ReactElement, input: ReactElement, errorMessage?: ReactElement) => <div key={name} className="details-row">
		<div>
			<label><span >{label}</span>{input}</label>
		</div>
		<div>{errorMessage}</div>
	</div>
} as any as ElementWrapper;

function nop(): any {
	// dummy function
}

const uut = shallow(<CSForm
	descriptor={testFormDescriptor}
	data={{ Id: '123' }}
	update={nop}
	save={() => Promise.resolve({})}
	fetchPossibleValues={field => Promise.resolve([])}
	labels={{ button_save: 'SAVE' } as unknown as FormLabels}
	locale={locale}
	formSettings={{}}
	wrapper={wrapper}
/>);

it('renders save button', () => {
	expect(uut.find('Button')).toHaveLength(1);
	expect(uut.find('Button').prop('label')).toBe('SAVE');
	expect(uut.find('Button').prop('additionalProps')).toEqual(wrapper.injectSaveButtonProps());
	expect(uut.find('Button').prop('enabled')).toBeTruthy();
});

it('renders error panel', () => {
	expect(uut.find('ErrorPanel')).toHaveLength(1);
});
