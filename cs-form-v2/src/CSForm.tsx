import React from 'react';
import { CSFormProvider } from './CSFormContext';
import CSFormSection from './CSFormSection';
import { CSFormProps } from './types/cs-form-types';

const CSForm = ({
	columnNumber = 4,
	data,
	mode,
}: CSFormProps) => {
	const renderSections = () => data.map((section) => (
		<CSFormSection key={section.key} {...section} />
	));

	return (
		<CSFormProvider
			columnNumber={columnNumber}
			mode={mode}
		>
			<div className="cs-form">
				{renderSections()}
			</div>
		</CSFormProvider>
	);
};

export default CSForm;
