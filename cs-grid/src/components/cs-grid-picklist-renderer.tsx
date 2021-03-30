import React from 'react';

import { CSTooltip } from '@cloudsense/cs-ui-components';
import { CSGridCellRendererProps, PicklistOption } from '../interfaces/cs-grid-cell-props';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSGridCellError } from './cs-grid-cell-error';

type PicklistCellValueType = string | PicklistOption | Array<string | PicklistOption>;

export class CSGridPicklistRenderer extends CSGridBaseRenderer<PicklistCellValueType> {
	constructor(props: CSGridCellRendererProps<PicklistCellValueType>) {
		super(props);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	render() {
		if (!this.state.value) {
			return null;
		}

		const value = this.format(this.state.value.cellValue);
		const contents = <span title={value}>{value}</span>;
		let tooltip;
		if (this.props.getTooltip) {
			tooltip = this.props.getTooltip(this.props.node.id);
		}

		return (
			<span
				className={`cs-grid_cell-content cs-grid_cell-content-picklist select-wrapper ${
					this.isReadOnly() ? 'read-only-cell' : ''
				}`}
			>
				{tooltip ? (
					<CSTooltip
						className='cs-grid_cell-tooltip'
						content={tooltip.content}
						delayTooltip={tooltip.delay}
						variant={
							tooltip.variant
								? tooltip.variant
								: this.state.value.errorMessage
								? 'error'
								: 'info'
						}
						position={tooltip.position}
						height={tooltip.height}
						width={tooltip.width}
						padding={tooltip.padding}
						maxHeight={tooltip.maxHeight}
						maxWidth={tooltip.maxWidth}
						stickyOnClick={tooltip.stickyOnClick}
					>
						{contents}
					</CSTooltip>
				) : (
					contents
				)}
				<CSGridCellError
					errorMessage={this.state.value.errorMessage}
					position={this.state.isLastColumn ? 'top-left' : 'top-right'}
				/>
			</span>
		);
	}

	private format = (value: PicklistCellValueType): string => {
		if (Array.isArray(value)) {
			if (value.length > 0) {
				return value.reduce((result: string, option: string | PicklistOption) => {
					const label: string = typeof option === 'string' ? option : option.label;

					if (!result) {
						return `${label}`;
					}

					return `${result}, ${label}`;
				}, '') as string;
			} else {
				return '';
			}
		}

		return typeof value === 'string' ? value : value.label;
	};
}
