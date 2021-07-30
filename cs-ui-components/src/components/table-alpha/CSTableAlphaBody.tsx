import React from 'react';
import classNames from 'classnames';
import { CSTableAlphaColumn, CSTableAlphaRow } from './CSTableAlpha';

export interface CSTableAlphaBodyProps {
	columns: Array<CSTableAlphaColumn>;
	rows: Array<CSTableAlphaRow>;
}

const CSTableAlphaBody: React.FC<CSTableAlphaBodyProps> = ({ columns, rows }: CSTableAlphaBodyProps) => (
	<tbody>
		{rows.map((row: CSTableAlphaRow) => {
			const {
				key: rowKey,
				data,
				className,
				children,
				id,
				height,
				...rest
			} = row;

			const tableRowStyles: React.CSSProperties = {
				'--cs-table-alpha-row-height': height,
			};

			return (
				<tr
					key={rowKey}
					className={className}
					id={id}
					style={tableRowStyles}
					{...rest}
				>
					{columns.map((column: CSTableAlphaColumn, columnIndex: number) => {
						const {
							key: columnKey,
							align,
							cellClassName,
							columnClassName,
							grow,
							render,
							width,
							wrap,
						} = column;

						const getCellClassName = (() => {
							if (!cellClassName || typeof cellClassName === 'string') {
								return cellClassName;
							}
							return cellClassName(row);
						})() as string;

						const tableColumnClasses = classNames({
							'cs-table-alpha-column-wrap': wrap,
							[`cs-table-alpha-align-${align}`]: align,
							[columnClassName]: columnClassName,
							[getCellClassName]: cellClassName,
						});

						const tableColumnStyles: React.CSSProperties = {
							'--cs-table-alpha-column-flex': width ? 0 : grow,
							'--cs-table-alpha-column-width': width,
						};

						return (
							<td
								// eslint-disable-next-line react/no-array-index-key
								key={columnIndex}
								className={tableColumnClasses}
								style={tableColumnStyles}
							>
								<div className="cs-table-alpha-truncate">
									{render ? render(row) : data?.[columnKey]}
								</div>
							</td>
						);
					})}
				</tr>
			);
		})}
	</tbody>
);

export default CSTableAlphaBody;
