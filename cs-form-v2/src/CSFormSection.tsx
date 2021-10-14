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
	} = useCSForm();

	const sectionFieldClasses = classNames(
		'csf-section',
		{
			[`${styleClass}`]: styleClass,
		},
	);

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
			{fields.map((field, index) => (
				<CSFormField
					{...field}
					key={field.name ?? `csf-custom-${index}`}
					onChange={(value) => handleFieldChange(sectionKey, field, value)}
					onBlur={(value) => handleFieldBlur(sectionKey, field, value)}
				/>
			))}
		</CSSection>
	);
};

export default CSFormSection;
