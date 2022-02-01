import React, { CSSProperties, useEffect } from 'react';
import classNames from 'classnames';
import CSTreeGroup from './CSTreeGroup';
import { CSButtonProps } from '../CSButton';
import { CSTreeProvider } from './CSTreeContext';

export type CSTreeElementType = React.ReactElement | React.ReactText;
export type CSTreeRenderType = CSTreeElementType | ((item: CSTreeItemWithMetaInterface) => CSTreeElementType);

export interface CSTreeItemMetaInterface {
	level: number;
	active: boolean;
	selected: boolean;
	indeterminate: boolean;
	readOnly: boolean;
	expanded: boolean;
	setExpanded: (expanded: boolean) => void;
	toggleExpanded: () => void;
}

export interface CSTreeItemInterface {
	key: React.ReactText;
	actions?: Array<CSButtonProps>;
	children?: Array<CSTreeItemInterface>;
	className?: string;
	collapsible?: boolean;
	defaultCollapsed?: boolean;
	displayActionsOnHover?: boolean;
	render?: CSTreeRenderType;
	selectable?: boolean;
}

export interface CSTreeItemWithMetaInterface extends CSTreeItemInterface {
	meta: CSTreeItemMetaInterface;
}

export interface CSTreeProps {
	items: Array<CSTreeItemInterface>;
	activeKey?: React.ReactText;
	className?: string;
	collapsible?: boolean;
	defaultCollapsed?: boolean;
	displayActionsOnHover?: boolean;
	id?: string;
	indeterminateKeys?: Array<React.ReactText>;
	itemHeight?: string;
	onItemClick?: (event: React.MouseEvent<HTMLLIElement>, item: CSTreeItemWithMetaInterface) => void;
	onSelectChange?: (event: React.ChangeEvent<HTMLInputElement>, item: CSTreeItemWithMetaInterface) => void;
	readOnlyKeys?: Array<React.ReactText>;
	selectable?: boolean;
	selectedKeys?: Array<React.ReactText>;
	[key: string]: any;
}

const CSTree = ({
	items,
	activeKey,
	className,
	collapsible = true,
	defaultCollapsed = true,
	displayActionsOnHover = false,
	id,
	indeterminateKeys,
	itemHeight,
	onItemClick,
	onSelectChange,
	readOnlyKeys,
	selectable,
	selectedKeys,
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
			activeKey={activeKey}
			indeterminateKeys={new Set(indeterminateKeys)}
			onItemClick={onItemClick}
			onSelectChange={onSelectChange}
			readOnlyKeys={new Set(readOnlyKeys)}
			selectedKeys={new Set(selectedKeys)}
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
					extraIndent={extraIndent ? 2.25 : 0.75}
				/>
			</ul>
		</CSTreeProvider>
	);
};

export default CSTree;
