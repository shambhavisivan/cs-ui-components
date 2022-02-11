import React from 'react';
import { CSSection } from '@cloudsense/cs-ui-components';
import classNames from 'classnames';
import CSFormField from './CSFormField';
import { CSFormSectionProps } from './types/cs-form-section-types';
import { useCSForm } from './CSFormContext';

const CSFormSection = ({
	sectionKey,
	collapsible,
	defaultClosed,
	error,
	errorMessage,
	fields,
	hideSectionHeader,
	label,
	styleClass,
}: CSFormSectionProps) => {
	const {
		handleFieldBlur,
		handleFieldChange,
		handleFieldClick,
		handleFieldKeyDown,
	} = useCSForm();

	const sectionFieldClasses = classNames(
		'csf-section',
		{
			[`${styleClass}`]: styleClass,
		},
	);

	const renderedFields = fields.map((field, index) => {
		const key = field.fieldType !== 'CUSTOM-MODAL' && field.fieldType !== 'CUSTOM'
			? field.name
			: `csf-custom-${index}`;

		const events = field.fieldType !== 'CUSTOM-MODAL' && field.fieldType !== 'CUSTOM' ? {
			onChange: (value: any) => handleFieldChange(sectionKey, field, value),
			onBlur: (value: any) => handleFieldBlur(sectionKey, field, value),
			onClick: () => handleFieldClick(field),
			onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => handleFieldKeyDown(field, event),
		} : undefined;

		return (
			<CSFormField
				key={key}
				{...field}
				{...events}
			/>
		);
	});

	return (
		<CSSection
			className={sectionFieldClasses}
			collapsible={collapsible}
			defaultClosed={defaultClosed}
			error={error}
			errorMessage={errorMessage}
			hideSectionHeader={hideSectionHeader}
			title={label}
		>
			{renderedFields}
		</CSSection>
	);
};

export default CSFormSection;
