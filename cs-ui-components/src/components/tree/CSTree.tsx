import React, { CSSProperties, useEffect } from 'react';
import classNames from 'classnames';
import CSTreeGroup from './CSTreeGroup';
import { CSButtonProps } from '../CSButton';
import { CSTreeProvider } from './CSTreeContext';

export type CSTreeElementType = React.ReactElement | React.ReactText;
export type CSTreeRenderType = CSTreeElementType | ((item: CSTreeItemInterface) => CSTreeElementType);
export type CSTreeActionType = Omit<CSButtonProps, 'onKeyDown' | 'onMouseDown'>;

export interface CSTreeItemMetaInterface {
	level: number;
	active: boolean;
	activeKey: React.ReactText;
	setActive: (active: boolean, key?: string) => void;
	toggleActive: (key?: string) => void;
	checked: boolean;
	checkedKeys: Array<string>;
	setChecked: (checked: boolean, key?: string) => void;
	toggleChecked: (key?: string) => void;
	indeterminate: boolean;
	indeterminateKeys: Array<string>;
	setIndeterminate: (indeterminate: boolean, key?: string) => void;
	toggleIndeterminate: () => void;
	readOnly: boolean;
	readOnlyKeys: Array<string>;
	setReadOnly: (readOnly: boolean, key?: string) => void;
	toggleReadOnly: (key?: string) => void;
	expanded: boolean;
	setExpanded: (expanded: boolean, key?: string) => void;
	toggleExpanded: () => void;
}

export interface CSTreeItemInterface {
	key: React.ReactText;
	actions?: Array<CSTreeActionType>;
	children?: Array<CSTreeItemInterface>;
	className?: string;
	collapsible?: boolean;
	defaultCollapsed?: boolean;
	displayActionsOnHover?: boolean;
	meta?: CSTreeItemMetaInterface;
	render?: CSTreeRenderType;
	selectable?: boolean;
}

export interface CSTreeProps {
	items: Array<CSTreeItemInterface>;
	className?: string;
	collapsible?: boolean;
	defaultCollapsed?: boolean;
	displayActionsOnHover?: boolean;
	id?: string;
	itemHeight?: string;
	onItemClick?: (item: CSTreeItemInterface) => void;
	onSelectChange?: (item: CSTreeItemInterface) => void;
	selectable?: boolean;
	[key: string]: any;
}

const CSTree = ({
	items,
	className,
	collapsible = true,
	defaultCollapsed = true,
	displayActionsOnHover = false,
	id,
	itemHeight,
	onItemClick,
	onSelectChange,
	selectable,
	...rest
}: CSTreeProps) => {
	useEffect(() => {
		// eslint-disable-next-line no-console
		console.warn('CSTree is under construction and should not be used.');
	}, []);

	const treeClasses = classNames(
		'cs-tree',
		{
			'cs-tree-selectable': selectable,
			[className]: className,
		},
	);

	const treeStyles: CSSProperties = {
		'--cs-tree-item-height': itemHeight,
	};

	// Determine whether the first level should have
	// extra indentation to make space for the toggle button
	const extraIndent = collapsible && items.some((item: CSTreeItemInterface) => (
		item.children?.length && item.collapsible !== false
	));

	return (
		<CSTreeProvider
			onItemClick={onItemClick}
			onSelectChange={onSelectChange}
			treeCollapsible={collapsible}
			treeDefaultCollapsed={defaultCollapsed}
			treeDisplayActionsOnHover={displayActionsOnHover}
			treeSelectable={selectable}
		>
			<ul
				id={id}
				className={treeClasses}
				style={treeStyles}
				role="tree"
				{...rest}
			>
				<CSTreeGroup
					items={items}
					extraIndent={extraIndent ? 2.25 : 0}
				/>
			</ul>
		</CSTreeProvider>
	);
};

export default CSTree;
