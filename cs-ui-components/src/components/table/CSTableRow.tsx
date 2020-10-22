import React from 'react';
import classNames from 'classnames';
import { CSTableContext } from './CSTable';

export interface CSTableRowProps {
	[key: string]: any;
	className?: string;
	id?: string;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

class CSTableRow extends React.Component<CSTableRowProps> {
	private keyArrowDown = 'ArrowDown';
	private keyArrowUp = 'ArrowUp';

	handleClick: React.MouseEventHandler<HTMLDivElement> = e => {
		const { onClick } = this.props;
		if (onClick) {
			onClick(e);
		}
	}

	handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, context: any) => {
		if (context.selectableRows) {
			const currentActive = document.activeElement;

			if (event.key === this.keyArrowDown) {
				event.preventDefault();
				(currentActive.nextElementSibling as HTMLElement)?.focus();
			}

			if (event.key === this.keyArrowUp) {
				event.preventDefault();
				(currentActive.previousElementSibling as HTMLElement)?.focus();
			}
		}
	}

	render() {
		const { children, className, id, onClick, ...rest } = this.props;
		const tableRowClasses = classNames(
			'cs-table-row', {
			[`${className}`]: className
		});

		return (
			<CSTableContext.Consumer>
				{context => (
					<div
						className={tableRowClasses}
						role="row"
						onClick={this.handleClick}
						id={id}
						tabIndex={0}
						onKeyDown={event => this.handleOnKeyDown(event, context)}
						{...rest}
					>
						{children}
					</div>
				)}
			</CSTableContext.Consumer>
		);
	}
}

export default CSTableRow;
