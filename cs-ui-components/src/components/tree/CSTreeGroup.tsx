import React from 'react';
import { CSTreeItemInterface } from './CSTree';
import CSTreeItem from './CSTreeItem';

export interface CSTreeGroupProps {
	items: Array<CSTreeItemInterface>;
	level?: number;
	extraIndent: number;
}

const CSTreeGroup = ({
	items,
	extraIndent,
	level = 0,
}: CSTreeGroupProps) => {
	const renderItems = () => items.map((item: CSTreeItemInterface) => (
		<CSTreeItem
			key={item.key}
			item={item}
			level={level}
			extraIndent={extraIndent}
		/>
	));

	if (!level) {
		return (
			<>
				{renderItems()}
			</>
		);
	}

	return (
		<ul className="cs-tree-group" role="group">
			{renderItems()}
		</ul>
	);
};

export default CSTreeGroup;
