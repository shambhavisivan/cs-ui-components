import React, { ReactElement } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, optionsKnob as options } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';
import { ElementWrapper, FieldType, ComponentStatus, LocaleSettings, FieldDescriptor } from '..';
import { FormField } from '../fields/FormField';
import { OptionsKnobOptions } from '@storybook/addon-knobs/dist/components/types';

const statusLabel = 'Status';
const statusValuesObj: Record<string, ComponentStatus> = {
	Enabled: 'enabled',
	Hidden: 'hidden',
	Mandatory: 'mandatory',
	Visible: 'visible'
};
const optionsObj: OptionsKnobOptions = {
	display: 'inline-radio'
};

const locale: LocaleSettings = {
	dates: {
		daysInFirstWeek: 7,
		daysOfWeek: ['Sun', 'Mon', 'Tue', ' Wed', 'Thu', 'Fri', 'Sat'],
		firstDayOfWeek: 0,
		format: 'dd/MM/yyyy',
		monthsOfYear: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		],
		timeCaption: 'time',
		timeFormat: 'HH:mm'
	},
	number: {
		decimalSeparator: '.',
		userLocaleCountry: 'GB',
		userLocaleLang: 'en'
	}
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

const formFieldStories = storiesOf('Form Field', module);
formFieldStories.addDecorator(withKnobs);

formFieldStories.add(
	'with boolean field',
	withState({ value: false })(({ store }) => {
		const descriptor: FieldDescriptor = {
			fieldType: 'BOOLEAN',
			name: 'booleanField',
			label: 'Boolean field'
		};
		return (
			<FormField
				value={store.state.value}
				descriptor={descriptor}
				status={options(statusLabel, statusValuesObj, 'mandatory', optionsObj)}
				locale={locale}
				wrapper={wrapper}
				handleFieldChange={value => {
					store.set({ value });
				}}
				fetchPossibleValues={nop}
			/>
		);
	})
);

formFieldStories.add(
	'with text field',
	withState({ value: 'init text' })(({ store }) => {
		const descriptor: FieldDescriptor = {
			fieldType: 'STRING',
			name: 'stringField',
			label: 'string field'
		};
		return (
			<FormField
				value={store.state.value}
				descriptor={descriptor}
				status={options(statusLabel, statusValuesObj, 'mandatory', optionsObj)}
				locale={locale}
				wrapper={wrapper}
				handleFieldChange={value => {
					store.set({ value });
				}}
				fetchPossibleValues={nop}
			/>
		);
	})
);

formFieldStories.add(
	'with number field',
	withState({ value: 111 })(({ store }) => {
		const descriptor: FieldDescriptor = {
			fieldType: 'NUMBER',
			name: 'numberField',
			label: 'number field'
		};
		return (
			<FormField
				value={store.state.value}
				descriptor={descriptor}
				status={options(statusLabel, statusValuesObj, 'mandatory', optionsObj)}
				locale={locale}
				wrapper={wrapper}
				handleFieldChange={value => {
					store.set({ value });
				}}
				fetchPossibleValues={nop}
			/>
		);
	})
);

formFieldStories.add(
	'with date field',
	withState({ value: '' })(({ store }) => {
		const descriptor: FieldDescriptor = {
			fieldType: 'DATE',
			name: 'dateField',
			label: 'date field'
		};
		return (
			<FormField
				value={store.state.value}
				descriptor={descriptor}
				status={options(statusLabel, statusValuesObj, 'mandatory', optionsObj)}
				locale={locale}
				wrapper={wrapper}
				handleFieldChange={value => {
					store.set({ value });
				}}
				fetchPossibleValues={nop}
			/>
		);
	})
);

formFieldStories.add(
	'with date time field',
	withState({ value: '' })(({ store }) => {
		const descriptor: FieldDescriptor = {
			fieldType: 'DATETIME',
			name: 'dateField',
			label: 'date field',
			timeInterval: 15
		};

		return (
			<FormField
				value={store.state.value}
				descriptor={descriptor}
				status={options(statusLabel, statusValuesObj, 'mandatory', optionsObj)}
				locale={locale}
				wrapper={wrapper}
				handleFieldChange={value => {
					store.set({ value });
				}}
				fetchPossibleValues={nop}
			/>
		);
	})
);

formFieldStories.add(
	'with ID field',
	withState({ value: 0 })(({ store }) => {
		const descriptor: FieldDescriptor = {
			fieldType: 'ID',
			name: 'IDField',
			label: 'ID field'
		};
		return (
			<FormField
				value={store.state.value}
				descriptor={descriptor}
				status={options(statusLabel, statusValuesObj, 'mandatory', optionsObj)}
				locale={locale}
				wrapper={wrapper}
				handleFieldChange={value => {
					store.set({ value });
				}}
				fetchPossibleValues={nop}
			/>
		);
	})
);
