import React, { CSSProperties } from 'react';
import classNames from 'classnames';

export interface CSTableCellProps {
	[key: string]: any;
	className?: string;
	grow?: number;
	id?: string;
	maxWidth?: string;
	role?: string;
	text?: string;
}

class CSTableCell extends React.Component<CSTableCellProps> {
	render() {
		const {
			children,
			className,
			grow,
			id,
			maxWidth,
			text,
			role,
			...rest
		} = this.props;

		const style: CSSProperties = {
			flexGrow: grow,
			maxWidth,
		};

		const tableCellClasses = classNames(
			'cs-table-cell',
			{
				[`${className}`]: className,
			},
		);

		return (
			<div
				className={tableCellClasses}
				style={style}
				id={id}
				role={role || 'cell'}
				{...rest}
			>
				{text
					&& (
						<span
							className="cs-table-cell-text"
							title={text}
						>
							{text}
						</span>
					)}
				{children}
			</div>
		);
	}
}

export default CSTableCell;
