import React from 'react';
import classNames from 'classnames';
import { CSTableAlphaColumn } from './CSTableAlpha';

export interface CSTableAlphaColumnProps {
	columns: Array<CSTableAlphaColumn>;
}

const CSTableAlphaHeader: React.FC<CSTableAlphaColumnProps> = ({ columns }: CSTableAlphaColumnProps) => (
	<thead>
		<tr>
			{columns.map((column: CSTableAlphaColumn, columnIndex: number) => {
				const {
					key,
					align,
					cellClassName,
					className,
					columnClassName,
					grow,
					id,
					render,
					title,
					width,
					wrap,
					...rest
				} = column;

				const tableColumnClasses = classNames({
					'cs-table-alpha-column-wrap': wrap,
					[`cs-table-alpha-align-${align}`]: align,
					[columnClassName]: columnClassName,
					[className]: className,
				});

				const tableColumnStyles: React.CSSProperties = {
					'--cs-table-alpha-column-flex': width ? 0 : grow,
					'--cs-table-alpha-column-width': width,
				};

				return (
					<th
						// eslint-disable-next-line react/no-array-index-key
						key={columnIndex}
						className={tableColumnClasses}
						style={tableColumnStyles}
						scope="col"
						{...rest}
					>
						<div className="cs-table-alpha-truncate">
							{title}
						</div>
					</th>
				);
			})}
		</tr>
	</thead>
);

export default CSTableAlphaHeader;
