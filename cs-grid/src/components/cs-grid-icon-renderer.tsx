import { CSTooltip } from '@cloudsense/cs-ui-components';
import classNames from 'classnames';
import React from 'react';
import { CSGridCellRendererProps, IconProps } from '../interfaces/cs-grid-cell-props';
import {
	CSGridBaseActionsRenderer,
	CSGridBaseActionsRendererProps
} from './cs-grid-base-actions-renderer';
import { CSGridCellError } from './cs-grid-cell-error';
import { CSCustomDataHelper } from './cs-grid-custom-data-helper';

/**
 * A cell renderer for displaying icons.
 */

export class CSGridIconRenderer extends CSGridBaseActionsRenderer<
	Array<string>,
	CSGridBaseActionsRendererProps<Array<string>> &
		CSGridCellRendererProps<Array<string>> &
		IconProps
> {
	constructor(
		props: CSGridBaseActionsRendererProps<Array<string>> &
			CSGridCellRendererProps<Array<string>> &
			IconProps
	) {
		super(props);

		this.state = {
			actions: this.props.getActions ? this.props.getActions(this.props.node.id) : [],
			value: this.props.value,
			isLastColumn: this.isLastColumn()
		};
	}

	render() {
		if (!this.state.value) {
			return null;
		}

		const contents = (
			<>
				<CSCustomDataHelper
					getIcons={this.props.getIcons}
					getActions={this.props.getActions}
					nodeId={this.props.node.id}
					api={this.props.api}
				/>
			</>
		);

		let tooltip;
		if (this.props.getTooltip) {
			tooltip = this.props.getTooltip(this.props.node.id);
		}

		const iconCellClassNames = classNames('cs-grid_icon-cell', {
			'cs-grid_icon-cell-tooltip': tooltip,
			'read-only-cell': this.isReadOnly()
		});

		return (
			<span className={iconCellClassNames}>
				{tooltip ? (
					<CSTooltip
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
						maxHeight={tooltip.maxHeight}
						width={tooltip.width}
						maxWidth={tooltip.maxWidth}
						padding={tooltip.padding}
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
