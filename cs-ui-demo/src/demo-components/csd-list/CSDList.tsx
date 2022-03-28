import React from 'react';
import classNames from 'classnames';

export type CSDListType = 'ul' | 'ol' | 'props';

export interface CSDListProps {
	children: any;
	type?: CSDListType;
}

const CSDList = ({
	children,
	type = 'ul'
}: CSDListProps) => {

	const CSDListClasses = classNames(
		'csd-list',
		{
			'csd-list-props': type === 'props'
		}
	);

	const renderType = type === 'props' ? 'ul' : type;

	return React.createElement(renderType, { className: CSDListClasses }, children);
};

export default CSDList;
