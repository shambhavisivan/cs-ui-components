import { CSIcon, CSTooltip } from '@cloudsense/cs-ui-components';
import React from 'react';

import {
	CSGridCellRendererProps,
	IconProps,
	isStandardIcon
} from '../interfaces/cs-grid-cell-props';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSGridCellError } from './cs-grid-cell-error';

/**
 * A cell renderer for displaying icons.
 */
export class CSGridIconRenderer extends CSGridBaseRenderer<
	Array<string>,
	CSGridCellRendererProps<Array<string>> & IconProps
> {
	constructor(props: CSGridCellRendererProps<Array<string>> & IconProps) {
		super(props);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	render() {
		if (!this.state.value) {
			return null;
		}

		const values = this.state.value.cellValue || [];
		const icons = this.props.getIcons(this.props.node.id);

		const iconComponents: Array<JSX.Element> = [];
		for (const iconName of values) {
			const icon = icons[iconName];
			if (icon) {
				if (isStandardIcon(icon)) {
					iconComponents.push(<CSIcon name={icon.iconName} color={icon.color} />);
				} else {
					iconComponents.push(icon);
				}
			}
		}

		const contents = iconComponents.map((icon, index) => <span key={index}>{icon}</span>);
		let tooltip;
		if (this.props.getTooltip) {
			tooltip = this.props.getTooltip(this.props.node.id);
		}

		return (
			<span className={this.isReadOnly() ? 'read-only-cell' : ''}>
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
						width={tooltip.width}
						padding={tooltip.padding}
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
