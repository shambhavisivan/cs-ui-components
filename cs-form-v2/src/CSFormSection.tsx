import React from 'react';
import { CSSection } from '@cloudsense/cs-ui-components';
import CSFormField from './CSFormField';
import { CSFormSectionProps } from './types/cs-form-section-types';

const CSFormSection = ({
	collapsible,
	defaultClosed,
	error,
	errorMessage,
	fields,
	hideSectionHeader,
	label,
}: CSFormSectionProps) => (
	<CSSection
		className="cs-form-section"
		collapsible={collapsible}
		defaultClosed={defaultClosed}
		error={error}
		errorMessage={errorMessage}
		hideSectionHeader={hideSectionHeader}
		title={label}
	>
		{fields.map((field, index) => (
			<CSFormField {...field} key={index} />
		))}
	</CSSection>
);

export default CSFormSection;
