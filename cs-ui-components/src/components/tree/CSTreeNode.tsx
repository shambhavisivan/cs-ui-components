import classNames from 'classnames';
import React, { PropsWithChildren, useState } from 'react';
import CSButton, { CSButtonProps } from '../CSButton';
import CSIcon, { CSIconProps } from '../CSIcon';
import KeyCode from '../../util/KeyCode';
import CSCheckbox from '../CSCheckbox';

export type CSTreeNodeActionDisplayType = 'visible' | 'hover';
export type CSTreeNodeActionsType = Omit<CSButtonProps, 'onKeyDown' | 'onMouseDown'>;

export interface CSTreeNodeCommonProps {
	actions?: Array<CSTreeNodeActionsType>;
	actionsDisplay?: CSTreeNodeActionDisplayType;
	label: string;
	nodeKey: string;
	treeNodeIcon?: CSIconProps;
}

export interface CSTreeNodeLegacyProps {
	ariaLevel?: number;
	checkable?: boolean;
	checked?: boolean;
	defaultExpanded?: boolean;
	isTreeDraggable?: boolean;
	onExpand?: (key: string) => any;
	onSelect?: (e: any) => any;
	selected?: boolean;
	style?: object;
}

const defaultProps: Pick<CSTreeNodeCommonProps, 'actionsDisplay'> = {
	actionsDisplay: 'visible',
};

export type CSTreeNodeProps = CSTreeNodeCommonProps & CSTreeNodeLegacyProps;

const CSTreeNode: React.FC<CSTreeNodeProps> = ({
	actions,
	actionsDisplay,
	ariaLevel,
	checkable,
	checked,
	children,
	defaultExpanded,
	// isTreeDraggable,
	label,
	nodeKey,
	onExpand,
	onSelect,
	selected,
	style,
	treeNodeIcon,
}: PropsWithChildren<CSTreeNodeProps>) => {
	const [expanded, setExpanded] = useState(defaultExpanded);
	const handleOnExpand = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setExpanded(!expanded);
		onExpand?.(nodeKey);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
		if (e.key === KeyCode.Enter) {
			onSelect?.(e);
		}
	};

	const treeNodeClasses = classNames(
		'cs-tree-node',
		{
			'cs-tree-node-single': !children || (checkable && !children),
			'cs-tree-node-selected': selected && !checkable,
			'cs-tree-node-actions-hover': actionsDisplay === 'hover',
		},
	);

	return (
		<li
			aria-expanded={expanded}
			aria-level={ariaLevel}
			className="cs-tree-node-wrapper"
			key={nodeKey}
			role="treeitem"
		// draggable={isTreeDraggable}
		>
			<div
				className={treeNodeClasses}
				onClick={!checkable ? onSelect : undefined}
				onKeyDown={handleKeyDown}
				style={style}
				tabIndex={0}
				role="button"
			>
				<div className="cs-tree-node-group">
					{children && (
						<CSButton
							btnStyle="brand"
							btnType="transparent"
							iconName="chevronright"
							iconRotate={!expanded ? 0 : 90}
							label="expand tree group"
							labelHidden
							onClick={(e) => handleOnExpand(e)}
							onKeyDown={(e) => e.stopPropagation()}
							size="xsmall"
						/>
					)}
					{checkable && (
						<CSCheckbox
							label="check tree node"
							labelHidden
							className="cs-tree-node-checkbox"
							onChange={onSelect}
							checked={checked}
						/>
					)}
					{treeNodeIcon && (
						<CSIcon
							className="cs-tree-node-icon"
							{...treeNodeIcon}
						/>
					)}
					<span className="cs-tree-node-label">
						{label}
					</span>
				</div>
				{
					actions?.length && (
						<>
							<div className="cs-tree-node-actions-indicator">
								<CSIcon
									name="threedots_vertical"
								/>
							</div>
							<div className="cs-tree-node-actions">
								{actions.map((action, index) => (
									<CSButton
										key={action.id}
										label={`action-${index}`}
										labelHidden
										btnStyle="brand"
										btnType="transparent"
										size="xsmall"
										onKeyDown={(e) => e.stopPropagation()}
										{...action}
									/>
								))}
							</div>
						</>
					)
				}
			</div>
			{(expanded && children)
				&& (
					<ul className="cs-tree-group">
						{children}
					</ul>
				)}
		</li>
	);
};

CSTreeNode.defaultProps = defaultProps;

export default CSTreeNode;
