import moment from 'moment';
import React from 'react';

import { CSTooltip } from '@cloudsense/cs-ui-components';
import { CSGridCellRendererProps } from '../interfaces/cs-grid-cell-props';
import { formatDate } from '../utils/cs-grid-date-helper';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSCustomDataHelper } from './cs-grid-custom-data-helper';

/**
 * A cell renderer for displaying a localised date.
 */
export class CSGridDateRenderer extends CSGridBaseRenderer<string> {
	constructor(props: CSGridCellRendererProps<string>) {
		super(props);
		moment.locale(this.props.userInfo.userLocale);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	render() {
		if (!this.state.value) {
			return null;
		}

		const errorMessage = this.state.value.errorMessage;

		const value = formatDate(
			this.state.value.cellValue,
			this.props.userInfo.userLocale,
			this.props.cellType as 'Date' | 'DateTime'
		);

		const contents = (
			<CSCustomDataHelper
				getIcons={this.props.getIcons}
				getActions={this.props.getActions}
				nodeId={this.props.node.id}
				api={this.props.api}
				title={value}
				value={value}
				statusMessage={errorMessage}
			/>
		);

		const readOnly = this.isReadOnly();

		let tooltip;
		if (this.props.getTooltip) {
			tooltip = this.props.getTooltip(this.props.node.id);
		}

		return (
			<span
				className={`cs-grid_cell-content cs-grid_cell-content-date ${
					readOnly ? 'read-only-cell' : ''
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
}
