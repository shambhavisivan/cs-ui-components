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
		title={label}
		collapsible={collapsible}
		defaultClosed={defaultClosed}
		hideSectionHeader={hideSectionHeader}
		error={error}
		errorMessage={errorMessage}
	>
		{fields.map((field) => (
			<CSFormField {...field} />
		))}
	</CSSection>
);

export default CSFormSection;
