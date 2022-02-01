import React from 'react';
import classNames from 'classnames';

export type CSDSectionVariantType = 'neutral' | 'transparent' | 'info' | 'warning' | 'danger';

export interface CSDSectionProps {
	children: React.ReactNode;
	variant?: CSDSectionVariantType;
}

const CSDSection = ({
	children,
	variant = 'transparent'
}: CSDSectionProps) => {
	const sectionClassNames = classNames(
		'csd-section',
		{
			[`csd-section-${variant}`]: variant !== 'neutral'
		}
	);

	return (
		<div className={sectionClassNames}>
			{children}
		</div>
	);
};

export default CSDSection;
