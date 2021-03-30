import React from 'react';

import { CSTooltip } from '@cloudsense/cs-ui-components';
import { CSGridCellRendererProps, LookupProps } from '../interfaces/cs-grid-cell-props';
import { formatLookupValue } from '../utils/cs-grid-lookup-formatting-helper';
import {
	CSGridBaseActionsRenderer,
	CSGridBaseActionsRendererProps
} from './cs-grid-base-actions-renderer';
import { CSGridCellError } from './cs-grid-cell-error';

/**
 * A cell renderer for displaying the currently selected lookup values.
 */
export class CSGridLookupRenderer extends CSGridBaseActionsRenderer<
	Array<Record<string, string>> | Record<string, string>,
	CSGridBaseActionsRendererProps<Array<Record<string, string>> | Record<string, string>> &
		LookupProps
> {
	constructor(
		props: CSGridCellRendererProps<Array<Record<string, string>> | Record<string, string>> &
			LookupProps
	) {
		super(props);

		const actions = this.props.getActions ? this.props.getActions(this.props.node.id) : [];

		this.state = {
			actions,
			isLastColumn: this.isLastColumn(),
			noOfInlineIcons: this.props.noOfInlineIcons,
			useDropdown: false,
			value: this.props.value
		};
	}

	render() {
		if (!this.state.value) {
			return null;
		}

		const value = formatLookupValue(this.state.value.cellValue, this.props.displayColumn);
		const contents = (
			<>
				<span ref={this.contentsRef} title={value}>
					{value}
				</span>
				<this.Actions />
			</>
		);

		let tooltip;
		if (this.props.getTooltip) {
			tooltip = this.props.getTooltip(this.props.node.id);
		}

		return (
			<span
				className={`cs-grid_cell-content cs-grid_cell-content-lookup select-wrapper ${
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
}
