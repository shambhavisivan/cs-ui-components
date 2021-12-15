import React, { useState, useMemo, useRef } from 'react';
import classNames from 'classnames';
import { CSTreeItemInterface, CSTreeItemMetaInterface } from './CSTree';
import CSButton, { CSButtonProps } from '../CSButton';
import CSTreeGroup from './CSTreeGroup';
import CSButtonGroup from '../CSButtonGroup';
import CSIcon from '../CSIcon';
import CSCheckbox from '../CSCheckbox';
import KeyCode from '../../util/KeyCode';
import { useCSTree } from './CSTreeContext';

export interface CSTreeItemProps {
	item: CSTreeItemInterface;
	level?: number;
	extraIndent: number;
}

const CSTreeItem = ({
	item,
	level = 0,
	extraIndent,
}: CSTreeItemProps) => {
	const {
		activeKey,
		indeterminateKeys,
		onItemClick,
		onSelectChange,
		readOnlyKeys,
		selectedKeys,
		treeCollapsible,
		treeDisplayActionsOnHover,
		treeDefaultCollapsed,
		treeSelectable,
	} = useCSTree();

	const itemRef = useRef(null);

	const defaultCollapsible = item.defaultCollapsed === undefined ? treeDefaultCollapsed : item.defaultCollapsed;

	const [expanded, setExpanded] = useState<boolean>(!defaultCollapsible);

	const {
		key,
		actions,
		children,
		className,
		collapsible,
		displayActionsOnHover,
		render,
		selectable,
	} = item;

	const meta: CSTreeItemMetaInterface = {
		level,
		active: activeKey === key,
		selected: selectedKeys.has(key),
		indeterminate: indeterminateKeys.has(key),
		readOnly: readOnlyKeys.has(key),
		expanded,
		setExpanded,
		toggleExpanded: () => setExpanded((prevExpanded: boolean) => !prevExpanded),
	};

	const shouldHideActions = useMemo(() => (
		displayActionsOnHover === undefined ? treeDisplayActionsOnHover : displayActionsOnHover
	), [treeDisplayActionsOnHover, displayActionsOnHover]);

	const shouldShowChildren = useMemo(() => {
		// Hide if no children
		// Hide if the item is explicitly not collapsible
		// Cannot be !collapsible because of undefined being falsy
		if (!children || collapsible === false) return false;
		// Hide if the tree isn't collapsible
		// and the item does not have an explicit setting
		return collapsible !== undefined || treeCollapsible;
	}, [collapsible, treeCollapsible]);

	const handleClick = (event?: React.MouseEvent<HTMLLIElement>) => {
		event?.stopPropagation();
		onItemClick?.(event, { ...item, meta });
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.stopPropagation();
		onSelectChange?.(event, { ...item, meta });
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
		event.stopPropagation();
		if (event.code === KeyCode.Enter) {
			// Make sure Enter triggers the default mouse click behaviour
			event.preventDefault();
			handleClick();
		} else if (event.code === KeyCode.ArrowRight && shouldShowChildren) {
			// If the item can be expanded, Arrow Right should expand it
			event.preventDefault();
			setExpanded(true);
		} else if (event.code === KeyCode.ArrowLeft && shouldShowChildren) {
			// If the item can be collapsed, Arrow Left should collapse it
			event.preventDefault();
			setExpanded(false);
		} else if (event.code === KeyCode.ArrowDown) {
			event.preventDefault();
			const childGroup = itemRef.current.lastElementChild;
			const nextItem = itemRef.current.nextElementSibling;
			if (childGroup?.classList.contains('cs-tree-group')) {
				// When a child item exists,
				// it should be the next focusable element
				childGroup.firstElementChild.focus();
			} else if (nextItem) {
				// When there are no child items,
				// and when a sibling item exists,
				// it should be the next focusable element
				nextItem.focus();
			} else {
				let parentItem = null;
				for (let i = Number(itemRef.current.ariaLevel); i >= 2; i--) {
					// If inside a hierarchy, traverse up
					// until the next item is found
					parentItem = parentItem || itemRef.current;
					parentItem = parentItem.parentElement.parentElement;
					if (parentItem.classList.contains('cs-tree-item-wrapper') && parentItem.nextElementSibling) break;
				}
				// If not inside a hierarchy, loop to the first tree element
				if (!parentItem) itemRef.current.parentElement.firstElementChild.focus();
				// If inside a hierarchy, but no next element is found,
				// also loop to the first tree element
				else if (!parentItem.nextElementSibling) parentItem.parentElement.firstElementChild.focus();
				// Focus the next focusable element otherwise
				else parentItem.nextElementSibling.focus();
			}
		} else if (event.code === KeyCode.ArrowUp) {
			event.preventDefault();
			const parentGroup = itemRef.current.parentElement;
			const previousItem = itemRef.current.previousElementSibling;
			if (!previousItem) {
				if (parentGroup.classList.contains('cs-tree-group')) {
					// If there is no previous sibling item,
					// and a parent item exists,
					// focus the parent item
					parentGroup.parentElement.focus();
				} else {
					// If there is no previous sibling item,
					// and a parent item does not exist,
					// find the last root item and traverse down
					// its children to find the last focusable item
					let lastItem = parentGroup.lastElementChild;
					while (lastItem.lastElementChild?.lastElementChild.classList.contains('cs-tree-item-wrapper')) {
						lastItem = lastItem.lastElementChild.lastElementChild;
					}
					lastItem.focus();
				}
			} else {
				// If there is a previous sibling item,
				// traverse down to find its last focusable item
				let previousChildGroup = previousItem;
				while (previousChildGroup.lastElementChild?.classList.contains('cs-tree-group')) {
					previousChildGroup = previousChildGroup.lastElementChild.lastElementChild;
				}
				// Focus the previous focusable item otherwise
				previousChildGroup.focus();
			}
		}
	};

	const renderExpandButton = () => {
		if (!shouldShowChildren) return null;

		return (
			<CSButton
				label="toggle"
				labelHidden
				btnType="transparent"
				btnStyle="brand"
				size="xsmall"
				iconName="chevrondown"
				iconColor="#706e6b"
				iconRotate={expanded ? 0 : -90}
				aria-expanded={expanded}
				className="cs-tree-collapse-button"
				onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
					event.stopPropagation();
					meta.toggleExpanded();
				}}
			/>
		);
	};

	const renderLabel = () => {
		if (meta.indeterminate) return 'Indeterminate';
		if (meta.selected) return 'Deselect item';
		return 'Select item';
	};

	const renderCheckbox = () => {
		if (selectable === undefined ? !treeSelectable : !selectable) return null;

		return (
			<CSCheckbox
				label={renderLabel()}
				labelHidden
				indeterminate={meta.indeterminate}
				checked={meta.selected}
				onChange={handleChange}
				readOnly={meta.readOnly}
			/>
		);
	};

	const renderContent = () => {
		if (typeof render !== 'function') return render;
		return render({ ...item, meta, render: undefined });
	};

	const renderActions = () => {
		if (!actions?.length) return null;

		return (
			<>
				{shouldHideActions && <CSIcon className="cs-tree-actions-show-more" name="threedots_vertical" />}
				<CSButtonGroup combined={false} className="cs-tree-actions">
					{actions.map((action: CSButtonProps, actionIndex: number) => (
						<CSButton
							// eslint-disable-next-line react/no-array-index-key
							key={actionIndex}
							labelHidden
							btnStyle="brand"
							btnType="transparent"
							size="xsmall"
							{...action}
							onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) => {
								event.stopPropagation();
								action.onKeyDown?.(event);
							}}
							onClick={(event) => {
								event.stopPropagation();
								action.onClick?.(event);
							}}
						/>
					))}
				</CSButtonGroup>
			</>
		);
	};

	// Determines whether or not a hierarchical sub-level exists
	// Recursively renders new tree groups to display children
	const renderChildGroup = () => {
		// Don't render if there are no children
		// Hide when not expanded
		if (!expanded || !children) {
			return null;
		}

		return (
			<CSTreeGroup
				items={children}
				level={level + 1}
				extraIndent={extraIndent}
			/>
		);
	};

	const treeItemWrapperClasses = classNames(
		'cs-tree-item-wrapper',
		{
			'cs-tree-item-active': meta.active,
			'cs-tree-item-actions-on-hover': shouldHideActions,
			'cs-tree-item-overflow': ['string', 'number'].indexOf(typeof render) === -1,
			[className]: className,
		},
	);

	const styles: React.CSSProperties = {
		'--cs-tree-item-offset': (level + extraIndent) && `${level + extraIndent}rem`,
	};

	return (
		<li
			ref={itemRef}
			aria-level={level + 1}
			aria-expanded={shouldShowChildren ? expanded : undefined}
			className={treeItemWrapperClasses}
			style={styles}
			role="treeitem"
			tabIndex={0}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
		>
			<div className="cs-tree-item">
				{renderExpandButton()}
				<div className="cs-tree-checkbox">
					{renderCheckbox()}
				</div>
				<div className="cs-tree-item-content">
					{renderContent()}
				</div>
				{renderActions()}
			</div>
			{renderChildGroup()}
		</li>
	);
};

export default CSTreeItem;
