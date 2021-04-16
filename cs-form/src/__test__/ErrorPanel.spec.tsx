import React, { ReactElement } from 'react';

import { shallow, default as Enzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ElementWrapper } from '../..';
import { FieldType } from '..';
import { ComponentStatus } from '../types/ComponentStatus';
import { ErrorPanel } from '../ErrorPanel';

Enzyme.configure({ adapter: new Adapter() });

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

	wrapErrorPanel: (key: string, contents: ReactElement) => <h1>{contents}</h1>,

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

it('renders errors using wrapper.wrapErrorPanel', () => {
	const uut = shallow(<ErrorPanel wrapper={wrapper} errors={['Form error 1', 'Form error 2']} />);

	expect(uut.find('h1')).toHaveLength(1);
	expect(uut.find('h1').text()).toBe('Form error 1Form error 2');
});

it('does not render anything when no errors present', () => {
	const uut = shallow(<ErrorPanel wrapper={wrapper} errors={[]} />);

	expect(uut.find('h1')).toHaveLength(0);
	expect(uut.getElements()).toEqual([null]);
	expect(uut.text()).toBe('');
});
