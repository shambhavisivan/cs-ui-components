import React from 'react';
import { CSDataTableColumnInterface, CSDataTableRowInterface } from './CSDataTable';
import CSDataTableRow from './CSDataTableRow';

export interface CSDataTableGroupProps {
	columns: Array<CSDataTableColumnInterface>;
	rows: Array<CSDataTableRowInterface>;
	extraIndent: number;
	level?: number;
	tableCollapsible?: boolean;
	tableDefaultCollapsed?: boolean;
}

const CSDataTableGroup = ({
	columns,
	rows,
	extraIndent,
	level = 0,
	tableCollapsible,
	tableDefaultCollapsed,
}: CSDataTableGroupProps) => (
	<div className="cs-data-table-group">
		{rows.map((row: CSDataTableRowInterface) => (
			<CSDataTableRow
				key={row.key}
				columns={columns}
				row={row}
				extraIndent={extraIndent}
				level={level}
				tableCollapsible={tableCollapsible}
				tableDefaultCollapsed={tableDefaultCollapsed}
			/>
		))}
	</div>
);

export default CSDataTableGroup;
