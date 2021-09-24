import React from 'react';
import { CSSection } from '@cloudsense/cs-ui-components';
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
}: CSFormSectionProps) => {
	const {
		handleOnBlur,
		handleOnChange,
	} = useCSForm();

	return (
		<CSSection
			className="csf-section"
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
					onChange={(value: any) => handleOnChange(sectionKey, field.name, value)}
					onBlur={(value) => handleOnBlur(sectionKey, field.name, value)}
				/>
			))}
		</CSSection>
	);
};

export default CSFormSection;
