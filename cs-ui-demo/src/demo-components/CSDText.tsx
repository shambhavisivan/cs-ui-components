import React from 'react';
import * as CSDH from '../demo-helpers';

export interface CSDTextInterface {
	children: string;
}

const CSDText = ({ children }: CSDTextInterface) => {
	return (
		<p className="csd-text">
			{CSDH.parseCode(children)}
		</p>
	);
};

export default CSDText;
