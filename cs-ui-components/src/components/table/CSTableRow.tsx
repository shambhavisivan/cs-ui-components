import React from 'react';
import classNames from 'classnames';
import { CSTableContext } from './CSTable';
import KeyCode from '../../util/KeyCode';

export interface CSTableRowProps {
	[key: string]: any;
	className?: string;
	id?: string;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

class CSTableRow extends React.Component<CSTableRowProps> {

	handleClick: React.MouseEventHandler<HTMLDivElement> = e => {
		const { onClick } = this.props;
		if (onClick) {
			onClick(e);
		}
	}

	handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, context: any) => {
		if (context.selectableRows) {
			const currentActive = document.activeElement;

			if (event.key === KeyCode.ArrowDown) {
				event.preventDefault();
				(currentActive.nextElementSibling as HTMLElement)?.focus();
			}

			if (event.key === KeyCode.ArrowUp) {
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
