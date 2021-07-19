import React, { ReactElement, useEffect, useState } from 'react';
import CSTreeNode, { CSTreeNodeCommonProps } from './CSTreeNode';

export interface CSTreeDataType extends CSTreeNodeCommonProps {
	children?: Array<CSTreeDataType>;
}

export interface CSTreeProps {
	// draggable?: boolean;
	// onDrop?: () => any;
	checkable?: boolean;
	checkedKeys?: Array<string>;
	defaultExpandedKeys?: Array<string>;
	nonCheckableKeys?: Array<string>;
	onExpand?: (key: string) => any;
	onSelect?: (key: string) => any;
	selectedKey?: string;
	treeData: Array<CSTreeDataType>;
}

const CSTree = ({
	// draggable,
	// onDrop,
	checkable,
	checkedKeys,
	defaultExpandedKeys,
	nonCheckableKeys,
	onExpand,
	onSelect,
	selectedKey,
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
			const commonProps = {
				actions: item.actions,
				actionsDisplay: item.actionsDisplay,
				checkable: checkable ? (!nonCheckableKeys?.includes(item.nodeKey) ?? checkable) : false,
				checked: (checkable && checkedKeys?.includes(item.nodeKey)),
				key: item.nodeKey,
				label: item.label,
				nodeKey: item.nodeKey,
				onSelect: (e: any) => handleNodeSelection(item.nodeKey, e),
				render: item.render,
				selected: selectedKey === item.nodeKey && !checkable,
				treeNodeIcon: item.treeNodeIcon,
				// isTreeDraggable: draggable
			};
			if (item.children) {
				currentLevel += 1;
				newData.push(
					<CSTreeNode
						actions={item.actions}
						actionsDisplay={item.actionsDisplay}
						ariaLevel={currentLevel - 1}
						key={item.nodeKey}
						label={item.label}
						nodeKey={item.nodeKey}
						onExpand={onExpand}
						onSelect={(e) => handleNodeSelection(item.nodeKey, e)}
						selected={selected === item.nodeKey}
						style={{ '--cs-tree-node-level-padding': `${convertRemToPixels(currentLevel - 1)}px` }}
						treeNodeIcon={item.treeNodeIcon}
						defaultExpanded={defaultExpandedKeys?.includes(item.nodeKey)}
						{...commonProps}
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
						{...commonProps}
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
