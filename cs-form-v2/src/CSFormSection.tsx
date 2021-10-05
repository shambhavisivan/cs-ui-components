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
		handleOnBlur,
		handleOnChange,
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
			{fields.map((field) => (
				<CSFormField
					{...field}
					key={field.name}
					onChange={(value) => handleOnChange(sectionKey, field, value)}
					onBlur={(value) => handleOnBlur(sectionKey, field, value)}
				/>
			))}
		</CSSection>
	);
};

export default CSFormSection;
