import React from 'react';
import classNames from 'classnames';

interface CSDContentProps {
	children: React.ReactNode;
	hidden?: boolean;
}

const CSDContent = ({ children, hidden = false }: CSDContentProps) => {
	const contentClassNames = classNames(
		'csd-content',
		{
			'csd-content-hidden': hidden
		}
	);

	return (
		<div className={contentClassNames}>
			{children}
		</div>
	);
};

export default CSDContent;
