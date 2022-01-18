import React, { CSSProperties } from 'react';

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

	const style: CSSProperties = {
		'--csd-list-style-type': styleType
	} as unknown as CSSProperties;

	return (
		<>
			{type === 'ul' ?
				<ul className="csd-list" style={style}>
					{children}
				</ul>
			:
				<ol className="csd-list" style={style}>
					{children}
				</ol>
			}
		</>
	);
};

export default CSDList;
