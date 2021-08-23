import React from 'react';

import { CSTooltip } from '@cloudsense/cs-ui-components';
import { CSGridCellRendererProps } from '../interfaces/cs-grid-cell-props';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSCustomDataHelper } from './cs-grid-custom-data-helper';

export class CSGridTextRenderer extends CSGridBaseRenderer<string> {
	constructor(props: CSGridCellRendererProps<string>) {
		super(props);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	render() {
		if (!this.state.value) {
			return null;
		}

		const value = this.state.value.cellValue || '';
		const errorMessage = this.state.value.errorMessage;

		const contents = (
			<CSCustomDataHelper
				getIcons={this.props.getIcons}
				getActions={this.props.getActions}
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
				onClick={tooltip ? this.startEditingCell : undefined}
				className={`cs-grid_cell-content cs-grid_cell-content-text ${
					this.isReadOnly() ? 'read-only-cell' : ''
				}`}
			>
				{tooltip && !this.state.editing ? (
					<CSTooltip
						className='cs-grid_cell-tooltip'
						variant={
							tooltip.variant
								? tooltip.variant
								: this.state.value.errorMessage
								? 'error'
								: 'info'
						}
						content={tooltip.content}
						delayTooltip={tooltip.delay}
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
}
