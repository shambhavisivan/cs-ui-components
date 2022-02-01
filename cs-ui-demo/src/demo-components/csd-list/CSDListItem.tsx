import React from 'react';
import * as CSDH from '../../demo-helpers';

export interface CSDListItemProps {
	children: any;
}

const CSDListItem = ({
	children
}: CSDListItemProps) => (
	<li>
		{typeof children === 'string'
			? CSDH.parseCode(children)
			: children
		}
	</li>
);

export default CSDListItem;
