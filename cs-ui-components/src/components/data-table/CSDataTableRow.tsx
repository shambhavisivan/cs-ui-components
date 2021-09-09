import React, { useState, useMemo, useRef } from 'react';
import classNames from 'classnames';
import { CSDataTableColumnInterface, CSDataTableRowInterface, CSDataTableRowMetaInterface } from './CSDataTable';
import CSDataTableGroup from './CSDataTableGroup';
import CSButton from '../CSButton';
import CSDataTableCell from './CSDataTableCell';
import { useCSDataTable } from './CSDataTableContext';
import CSCheckbox from '../CSCheckbox';
import KeyCode from '../../util/KeyCode';

export interface CSDataTableRowProps {
	row: CSDataTableRowInterface;
	extraIndent: number;
	level?: number;
}

const CSDataTableRow = ({
	row,
	extraIndent,
	level = 0,
}: CSDataTableRowProps) => {
	const checkboxRef = useRef(null);
	const rowRef = useRef(null);
	const rowWrapperRef = useRef(null);

	const {
		columns,
		onSelectChange,
		indeterminateKeys,
		readOnlyKeys,
		selectedKeys,
		dataTableCollapsible,
		dataTableDefaultCollapsed,
		dataTableSelectable,
		dataTableSelectionType,
	} = useCSDataTable();

	const {
		children,
		className,
		collapsible,
		defaultCollapsed,
		height,
		render,
		selectable,
	} = row;

	const defaultCollapsible = defaultCollapsed === undefined ? dataTableDefaultCollapsed : defaultCollapsed;
	const [expanded, setExpanded] = useState<boolean>(!defaultCollapsible);

	// Define row meta data for render functions
	const rowMeta = {
		level,
		selected: selectedKeys.has(row.key),
		indeterminate: indeterminateKeys.has(row.key),
		readOnly: readOnlyKeys.has(row.key),
		expanded,
		setExpanded,
		toggleExpanded: () => setExpanded((prevExpanded: boolean) => !prevExpanded),
	} as CSDataTableRowMetaInterface;

	const isCollapsible = useMemo(() => {
		// Hide if no children
		// Hide if the row is explicitly not collapsible
		// Cannot be !collapsible because of undefined being falsy
		if (!children || collapsible === false) return false;
		// Hide if the table isn't collapsible
		// And the row does not have an explicit setting
		return !(collapsible === undefined && !dataTableCollapsible);
	}, [dataTableCollapsible, collapsible]);

	const renderCheckbox = () => {
		if (!dataTableSelectable) return null;

		const checkboxWrapperClasses = classNames(
			'cs-data-table-cell',
			'cs-data-table-cell-checkbox', {
				'cs-data-table-cell-checkbox-hidden': dataTableSelectionType !== 'checkbox',
			},
		);

		return (
			<div className={checkboxWrapperClasses}>
				{selectable !== false && (
					<CSCheckbox
						ref={checkboxRef}
						label={`${rowMeta.selected ? 'Deselect' : 'Select'} row`}
						labelHidden
						hidden={dataTableSelectionType !== 'checkbox'}
						checked={rowMeta.selected}
						indeterminate={rowMeta.indeterminate}
						readOnly={rowMeta.readOnly}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => onSelectChange?.(event, { ...row, meta: rowMeta })}
					/>
				)}
			</div>
		);
	};

	const renderExpandButton = () => {
		if (!isCollapsible) return null;

		return (
			<CSButton
				label={`${rowMeta.expanded ? 'Collapse' : 'Expand'} row`}
				labelHidden
				btnType="transparent"
				btnStyle="brand"
				size="xsmall"
				iconName="chevrondown"
				iconColor="#706e6b"
				iconRotate={expanded ? 0 : -90}
				onClick={rowMeta.toggleExpanded}
				className="cs-data-table-collapse-button"
			/>
		);
	};

	// Determines whether or not a hierarchical sub-level exists
	// Recursively renders new table groups to display children
	const renderChildGroup = () => {
		// Don't render if there are no children
		// Hide when not expanded
		if (!expanded || !children) {
			return null;
		}

		return (
			<CSDataTableGroup
				rows={children}
				extraIndent={extraIndent}
				level={level + 1}
			/>
		);
	};

	const renderRow = () => {
		// Determine whether a custom
		// render function should be used
		if (render) {
			return (
				<div className="cs-data-table-cell">
					{renderExpandButton()}
					<div className="cs-data-table-render">{render({ ...row, meta: rowMeta })}</div>
				</div>
			);
		}

		// Iterate over predefined columns
		return columns.map((column: CSDataTableColumnInterface, columnIndex: number) => (
			<CSDataTableCell
				// eslint-disable-next-line react/no-array-index-key
				key={columnIndex}
				column={column}
				columnIndex={columnIndex}
				expandButton={renderExpandButton}
				row={row}
				rowMeta={rowMeta}
			/>
		));
	};

	const styles: React.CSSProperties = {
		'--cs-data-table-row-height': height,
		'--cs-data-table-column-offset': (level + extraIndent) && `${level + extraIndent}rem`,
	};

	const rowWrapperClassNames = classNames(
		'cs-data-table-row-wrapper', {
			[className]: className,
		},
	);

	const rowClassNames = classNames(
		'cs-data-table-row', {
			'cs-data-table-row-selected': rowMeta.selected,
		},
	);

	const handleRowClick = (event: React.MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();

		if (dataTableSelectionType === 'row') {
			// Clicking the row triggers an invisible checkbox to trigger an onChange event
			checkboxRef.current?.checkboxInnerRef.current?.click();
		}
	};

	const handleRowKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		event.stopPropagation();

		if (dataTableSelectionType === 'row' && (event.code === KeyCode.Enter || event.code === KeyCode.Space)) {
			// Make sure Enter triggers the default mouse click behaviour
			event.preventDefault();
			checkboxRef.current?.checkboxInnerRef.current?.click();
		} else if (event.code === KeyCode.ArrowRight && isCollapsible) {
			// If the row can be expanded, Arrow Right should expand it
			event.preventDefault();
			setExpanded(true);
		} else if (event.code === KeyCode.ArrowLeft && isCollapsible) {
			// If the row can be expanded, Arrow Left should collapse it
			event.preventDefault();
			setExpanded(false);
		} else if (event.code === KeyCode.ArrowDown) {
			event.preventDefault();
			const childGroup = rowWrapperRef.current.lastElementChild;
			const nextItem = rowWrapperRef.current.nextElementSibling;
			if (childGroup?.classList.contains('cs-data-table-group')) {
				// When a child item exists,
				// it should be the next focusable element
				childGroup.firstElementChild.firstElementChild.focus();
			} else if (nextItem) {
				// When there are no child items,
				// and when a sibling item exists,
				// it should be the next focusable element
				nextItem.firstElementChild.focus();
			} else {
				let parentItem = null;
				for (let i = Number(rowRef.current.ariaLevel); i >= 2; i--) {
					// If inside a hierarchy, traverse up
					// until the next row is found
					parentItem = parentItem || rowWrapperRef.current;
					parentItem = parentItem.parentElement.parentElement;
					if (parentItem.classList.contains('cs-data-table-row-wrapper') && parentItem.nextElementSibling) break;
				}
				// If not inside a hierarchy, loop to the first table row
				if (!parentItem) rowWrapperRef.current.parentElement.firstElementChild.firstElementChild.focus();
					// If inside a hierarchy, but no next row is found,
				// also loop to the first tree element
				else if (!parentItem.nextElementSibling) parentItem.parentElement.firstElementChild.firstElementChild.focus();
				// Focus the next focusable element otherwise
				else parentItem.nextElementSibling.firstElementChild.focus();
			}
		} else if (event.code === KeyCode.ArrowUp) {
			event.preventDefault();
			const parentGroup = rowWrapperRef.current.parentElement.parentElement;
			const previousRow = rowWrapperRef.current.previousElementSibling;
			if (!previousRow) {
				if (parentGroup.classList.contains('cs-data-table-row-wrapper')) {
					// If there is no previous sibling item,
					// and a parent item exists,
					// focus the parent item
					parentGroup.firstElementChild.focus();
				} else {
					// If there is no previous sibling item,
					// and a parent item does not exist,
					// find the last root item and traverse down
					// its children to find the last focusable item
					let lastItem = parentGroup;
					while (lastItem.lastElementChild?.lastElementChild?.classList.contains('cs-data-table-row-wrapper')) {
						lastItem = lastItem.lastElementChild.lastElementChild;
					}
					lastItem.firstElementChild.focus();
				}
			} else {
				// If there is a previous sibling item,
				// traverse down to find its last focusable item
				let previousChildGroup = previousRow;
				while (previousChildGroup.lastElementChild?.classList.contains('cs-data-table-group')) {
					previousChildGroup = previousChildGroup.lastElementChild.lastElementChild;
				}
				// Focus the previous focusable item otherwise
				previousChildGroup.lastElementChild.focus();
			}
		}
	};

	return (
		<div ref={rowWrapperRef} className={rowWrapperClassNames}>
			<div
				ref={rowRef}
				role="row"
				aria-level={level + 1}
				aria-selected={dataTableSelectable ? rowMeta.selected : undefined}
				tabIndex={0}
				onClick={handleRowClick}
				onKeyDown={handleRowKeyDown}
				className={rowClassNames}
				style={styles}
			>
				{renderCheckbox()}
				{renderRow()}
			</div>
			{renderChildGroup()}
		</div>
	);
};

export default CSDataTableRow;
