import React from 'react';
import * as CSDH from '../demo-helpers';

export interface CSDTextInterface {
	children: any;
}

const CSDText = ({ children }: CSDTextInterface) => (
	<div className="csd-text">
		{React.Children.map(children, (child: any) => {
			if (typeof child === 'string') {
				return CSDH.parseCode(child);
			}
			return child;
		})}
	</div>
);

export default CSDText;
