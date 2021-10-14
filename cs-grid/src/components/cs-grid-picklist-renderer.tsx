import React from 'react';

import { CSTooltip } from '@cloudsense/cs-ui-components';
import { CSGridCellRendererProps, PicklistOption } from '../interfaces/cs-grid-cell-props';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSCustomDataHelper } from './cs-grid-custom-data-helper';

export type PicklistCellValueType = PicklistOption | Array<PicklistOption>;

export class CSGridPicklistRenderer extends CSGridBaseRenderer<PicklistCellValueType> {
	constructor(props: CSGridCellRendererProps<PicklistCellValueType>) {
		super(props);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	render() {
		if (!this.state.value) {
			return null;
		}

		const errorMessage = this.state.value.errorMessage;

		const value = this.format(this.state.value.cellValue);

		const contents = (
			<CSCustomDataHelper
				getIcons={this.props.getIcons}
				getActions={this.props.getActions}
				menuIcon='dropdown'
				nodeId={this.props.node.id}
				api={this.props.api}
				value={value}
				statusMessage={errorMessage}
			/>
		);

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
			</span>
		);
	}

	private format = (values: PicklistCellValueType): string => {
		if (Array.isArray(values)) {
			return values.map((value: PicklistOption) => value.label).join(', ');
		}

		return values.label;
	};
}
