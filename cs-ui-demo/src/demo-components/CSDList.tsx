import React, { CSSProperties } from 'react';
import * as CSDH from '../demo-helpers';

export type CSDListType = 'ul' | 'ol';

export interface CSDListProps {
	items: Array<string>;
	styleType?: string;
	type?: CSDListType;
}

const CSDList = ({
	items,
	styleType = 'disc',
	type = 'ul'
}: CSDListProps) => {

	const style: CSSProperties = {
		'--csd-list-style-type': styleType
	} as unknown as CSSProperties;

	const props = {
		className: 'csd-list',
		style
	};

	const listMap = () => {
		return (
			items.map(item => (
				<li key={item}>{CSDH.parseCode(item)}</li>
			))
		);
	};

	return React.createElement(type, props, listMap());
};

export default CSDList;
