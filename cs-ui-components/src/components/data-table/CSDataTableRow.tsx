import React, { useState } from 'react';
import classNames from 'classnames';
import { CSDataTableColumnInterface, CSDataTableRowInterface, CSDataTableRowMetaInterface } from './CSDataTable';
import CSDataTableGroup from './CSDataTableGroup';
import CSButton from '../CSButton';
import CSDataTableCell from './CSDataTableCell';

export interface CSDataTableRowProps {
	columns: Array<CSDataTableColumnInterface>;
	row: CSDataTableRowInterface;
	extraIndent: number;
	level?: number;
	tableCollapsible?: boolean;
	tableDefaultCollapsed?: boolean;
}

const CSDataTableRow: React.FC<CSDataTableRowProps> = ({
	columns,
	row,
	extraIndent,
	level = 0,
	tableCollapsible,
	tableDefaultCollapsed,
}: CSDataTableRowProps) => {
	const defaultCollapsible = row.defaultCollapsed === undefined ? tableDefaultCollapsed : row.defaultCollapsed;
	const [expanded, setExpanded] = useState<boolean>(!defaultCollapsible);

	const {
		children,
		className,
		collapsible,
		height,
		render,
	} = row;

	// Define row meta data for render functions
	const rowMeta = {
		level,
		expanded,
		setExpanded,
		toggleExpanded: () => setExpanded((prevExpanded: boolean) => !prevExpanded),
	} as CSDataTableRowMetaInterface;

	const renderExpandButton = () => {
		// Hide if no children
		// Hide if the row is explicitly not collapsible
		// Cannot be !collapsible because of undefined being falsy
		if (!children || collapsible === false) return null;

		// Hide if the table isn't collapsible
		// And the row does not have an explicit setting
		if (collapsible === undefined && !tableCollapsible) return null;

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
				columns={columns}
				rows={children}
				extraIndent={extraIndent}
				level={level + 1}
				tableCollapsible={tableCollapsible}
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

	return (
		<div className={rowWrapperClassNames}>
			<div className="cs-data-table-row" style={styles}>
				{renderRow()}
			</div>
			{renderChildGroup()}
		</div>
	);
};

export default CSDataTableRow;
