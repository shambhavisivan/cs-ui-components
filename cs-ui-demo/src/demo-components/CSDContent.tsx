import React from 'react';

interface CSDContentProps {
	children: React.ReactNode;
}

const CSDContent = ({ children }: CSDContentProps) => {
	return (
		<div className="csd-content">{children}</div>
	);
};

export default CSDContent;
