import React from 'react';
import { CSFormProvider } from './CSFormContext';
import CSFormSection from './CSFormSection';
import { CSFormProps } from './types/cs-form-types';

const CSForm = ({
	columnNumber = 4,
	data,
	errorLabels,
	locale,
	mode,
	onBlur,
	onChange,
}: CSFormProps) => {
	const renderSections = () => data.map((section) => (
		<CSFormSection key={section.sectionKey} {...section} />
	));

	return (
		<CSFormProvider
			columnNumber={columnNumber}
			data={data}
			mode={mode}
			locale={locale}
			onBlur={onBlur}
			onChange={onChange}
			errorLabels={errorLabels}
		>
			<div className="cs-form">
				{renderSections()}
			</div>
		</CSFormProvider>
	);
};

export default CSForm;
