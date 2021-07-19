import React, { ReactElement, useState, useEffect } from 'react';
import CSTreeNode, { CSTreeNodeCommonProps } from './CSTreeNode';

export interface CSTreeDataType extends CSTreeNodeCommonProps {
	children?: Array<CSTreeDataType>;
}

export interface CSTreeProps {
	defaultExpandedNodes?: Array<string>;
	// draggable?: boolean;
	onExpand?: (key: string) => any;
	// onDrop?: () => any;
	onSelect?: (key: string) => any;
	treeData: Array<CSTreeDataType>;
}

const CSTree = ({
	defaultExpandedNodes,
	// draggable,
	// onDrop,
	onExpand,
	onSelect,
	treeData,
}: CSTreeProps) => {
	const [selected, setSelected] = useState<string>();
	useEffect(() => {
		if (selected !== undefined) {
			onSelect?.(selected);
		}
	}, [selected]);

	const handleNodeSelection = (key: string, e: any) => {
		e.stopPropagation();
		if (selected === key) {
			setSelected(null);
		} else {
			setSelected(key);
		}
	};

	const convertRemToPixels = (rem: number) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

	const renderTreeNodes = (data: Array<CSTreeDataType>, level?: number) => {
		const newData: Array<ReactElement> = [];
		let currentLevel = level ?? 1;
		data.forEach((item) => {
			if (item.children) {
				currentLevel += 1;
				newData.push(
					<CSTreeNode
						actions={item.actions}
						actionsDisplay={item.actionsDisplay}
						ariaLevel={currentLevel - 1}
						defaultExpanded={defaultExpandedNodes?.includes(item.nodeKey)}
						key={item.nodeKey}
						label={item.label}
						nodeKey={item.nodeKey}
						onExpand={onExpand}
						onSelect={(e) => handleNodeSelection(item.nodeKey, e)}
						selected={selected === item.nodeKey}
						style={{ '--cs-tree-node-level-padding': `${convertRemToPixels(currentLevel - 1)}px` }}
						treeNodeIcon={item.treeNodeIcon}
					>
						{renderTreeNodes(item.children, currentLevel)}
					</CSTreeNode>,
				);
				currentLevel -= 1;
			} else {
				newData.push(
					<CSTreeNode
						actions={item.actions}
						actionsDisplay={item.actionsDisplay}
						ariaLevel={currentLevel}
						// isTreeDraggable={draggable}
						key={item.nodeKey}
						label={item.label}
						nodeKey={item.nodeKey}
						onSelect={(e) => handleNodeSelection(item.nodeKey, e)}
						selected={selected === item.nodeKey}
						style={{ '--cs-tree-node-level-padding': `${convertRemToPixels(currentLevel)}px` }}
						treeNodeIcon={item.treeNodeIcon}
					/>,
				);
			}
			return null;
		});

		return newData;
	};

	return (
		<>
			{console.warn('CSTree is under construction and should not be used.')}
			<ul className="cs-tree" role="tree">
				{renderTreeNodes(treeData)}
			</ul>
		</>
	);
};

export default CSTree;
