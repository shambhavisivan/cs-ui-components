import React from 'react';
import { CSDataTableRowInterface } from './CSDataTable';
import CSDataTableRow from './CSDataTableRow';

export interface CSDataTableGroupProps {
	rows: Array<CSDataTableRowInterface>;
	extraIndent: number;
	level?: number;
}

const CSDataTableGroup = ({
	rows,
	extraIndent,
	level = 0,
}: CSDataTableGroupProps) => (
	<div className="cs-data-table-group" role="rowgroup">
		{rows.map((row: CSDataTableRowInterface) => (
			<CSDataTableRow
				key={row.key}
				row={row}
				extraIndent={extraIndent}
				level={level}
			/>
		))}
	</div>
);

export default CSDataTableGroup;
