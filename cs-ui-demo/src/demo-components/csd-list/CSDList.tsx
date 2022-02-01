import React from 'react';

export type CSDListType = 'ul' | 'ol';

export interface CSDListProps {
	children: any;
	styleType?: string;
	type?: CSDListType;
}

const CSDList = ({
	children,
	styleType = 'disc',
	type = 'ul'
}: CSDListProps) => {

	const style = {
		'--csd-list-style-type': styleType
	};

	return React.createElement(type, { style, className: 'csd-list' }, children);
};

export default CSDList;
