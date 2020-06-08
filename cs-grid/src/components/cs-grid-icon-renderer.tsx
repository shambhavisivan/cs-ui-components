import { CSIcon } from '@cloudsense/cs-ui-components';
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

		return (
			<span
				className={
					(this.state.isLastColumn ? 'is-last-column' : '') +
					(this.isReadOnly() ? ' read-only-cell' : '')
				}
			>
				{iconComponents.map((icon, index) => (
					<span key={index}>{icon}</span>
				))}
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</span>
		);
	}
}
