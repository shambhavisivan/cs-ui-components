import {
	CSIcon,
	CSTooltip,
	CSTooltipPosition,
	CSTooltipVariant
} from '@cloudsense/cs-ui-components';
import React from 'react';

import classNames from 'classnames';
import {
	ActionProps,
	CSGridCellRendererProps,
	Icon,
	IconProps,
	isStandardIcon,
	LookupProps
} from '../interfaces/cs-grid-cell-props';
import {
	CSGridBaseActionsRenderer,
	CSGridBaseActionsRendererProps
} from './cs-grid-base-actions-renderer';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSGridCellError } from './cs-grid-cell-error';
import { CSGridLookupSearchResult } from './cs-grid-lookup-editor';

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
			noOfInlineIcons: this.props.noOfInlineIcons,
			value: this.props.value,
			isLastColumn: this.isLastColumn()
		};
	}

	render() {
		if (!this.state.value) {
			return null;
		}

		const values: boolean | Array<any> = this.state.value.cellValue || [];
		const icons = this.props.getIcons(this.props.node.id);

		const iconComponents: Array<JSX.Element> = [];
		for (const iconName of values) {
			const icon = icons[iconName];
			if (icon) {
				if (isStandardIcon(icon)) {
					if (icon.getTooltip) {
						const iconTooltip = icon.getTooltip(this.props.node.id);
						iconComponents.push(
							<CSTooltip
								iconName={icon.iconName}
								iconColor={icon.color}
								iconOrigin={icon.iconOrigin}
								content={iconTooltip.content}
								delayTooltip={iconTooltip.delay}
								variant={iconTooltip.variant}
								position={iconTooltip.position}
								height={iconTooltip.height}
								maxHeight={iconTooltip.maxHeight}
								width={iconTooltip.width}
								maxWidth={iconTooltip.maxWidth}
								padding={iconTooltip.padding}
								stickyOnClick={iconTooltip.stickyOnClick}
							/>
						);
					} else {
						iconComponents.push(
							<CSIcon
								name={icon.iconName}
								color={icon.color}
								origin={icon.iconOrigin}
							/>
						);
					}
				} else {
					iconComponents.push(icon);
				}
			}
		}
		const contents = (
			<>
				{iconComponents.map((icon, index) => (
					<React.Fragment key={index}>{icon}</React.Fragment>
				))}
				{this.state.actions ? <this.Actions /> : null}
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
