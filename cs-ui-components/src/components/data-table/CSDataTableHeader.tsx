import React from 'react';
import classNames from 'classnames';
import { CSDataTableColumnInterface } from './CSDataTable';

export interface CSDataTableColumnProps {
	columns: Array<CSDataTableColumnInterface>;
}

const CSDataTableHeader: React.FC<CSDataTableColumnProps> = ({ columns }: CSDataTableColumnProps) => (
	<div className="cs-data-table-header">
		<div className="cs-data-table-row">
			{columns.map((column: CSDataTableColumnInterface, columnIndex: number) => {
				const {
					align,
					className,
					columnClassName,
					grow,
					header,
					width,
					wrap,
				} = column;

				const tableColumnClasses = classNames(
					'cs-data-table-cell',
					{
						'cs-data-table-column-wrap': wrap,
						[`cs-data-table-align-${align}`]: align,
						[columnClassName]: columnClassName,
						[className]: className,
					},
				);

				const tableColumnStyles: React.CSSProperties = {
					'--cs-data-table-column-flex': width ? 0 : grow,
					'--cs-data-table-column-width': width,
				};

				return (
					<div
						// eslint-disable-next-line react/no-array-index-key
						key={columnIndex}
						className={tableColumnClasses}
						style={tableColumnStyles}
					>
						<div className="cs-data-table-truncate">
							{header}
						</div>
					</div>
				);
			})}
		</div>
	</div>
);

export default CSDataTableHeader;
