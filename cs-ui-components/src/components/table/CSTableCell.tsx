import React, { CSSProperties } from 'react';
import classNames from 'classnames';

export interface CSTableCellProps {
	className?: string;
	grow?: number;
	id?: string;
	maxWidth?: string;
	text?: string;
	role?: string;
}

class CSTableCell extends React.Component<CSTableCellProps> {
	render() {

		const style: CSSProperties = {
			flexGrow: this.props.grow,
			maxWidth: this.props.maxWidth
		};

		const tableCellClasses = classNames(
			'cs-table-cell',
			{
				[`${this.props.className}`]: this.props.className
			}
		);

		return (
			<div
				className={tableCellClasses}
				style={style}
				id={this.props.id}
				role={this.props.role ? this.props.role : 'cell'}
			>
				{this.props.text &&
					<span
						className="cs-table-cell-text"
						title={this.props.text}
					>
						{this.props.text}
					</span>
				}
				{this.props.children}
			</div>
		);
	}
}

export default CSTableCell;
