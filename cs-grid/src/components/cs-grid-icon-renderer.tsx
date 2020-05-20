import React from 'react';

import { CSGridCellRendererProps, IconProps } from '../interfaces/cs-grid-cell-props';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSGridCellError } from './cs-grid-cell-error';

/**
 * A cell renderer for displaying an icon.
 */
export class CSGridIconRenderer extends CSGridBaseRenderer<
	string,
	CSGridCellRendererProps<string> & IconProps
> {
	constructor(props: CSGridCellRendererProps<string> & IconProps) {
		super(props);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	render() {
		if (!this.state.value) {
			return null;
		}

		const value = this.state.value.cellValue || '';
		const icon = this.props.getIcon(this.props.node.id, this.state.value);

		return (
			<span
				className={
					(this.state.isLastColumn ? 'is-last-column' : '') +
					(this.isReadOnly() ? ' read-only-cell' : '')
				}
			>
				<span title={value}>{icon}</span>
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</span>
		);
	}
}
