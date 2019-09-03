import React from 'react';

import {
	CellData,
	CSGridCellRenderer,
	CSGridCellRendererProps,
	CSGridCellRendererState
} from '../models/cs-grid-base-interfaces';
import CSGridBaseRenderer from './cs-grid-base-renderer';
import CSGridCellError from './cs-grid-cell-error';

/**
 * A readOnly flag is needed because user changes happen in the renderer for the boolean cells not the editor.
 */
interface CSGridBooleanRendererState extends CSGridCellRendererState<boolean> {
	readOnly: boolean;
}

/**
 * A cell renderer for displaying a checkbox.
 */
export default class CSGridBooleanRenderer
	extends CSGridBaseRenderer<
		boolean,
		CSGridCellRendererProps<boolean>,
		CSGridBooleanRendererState
	>
	implements CSGridCellRenderer {
	constructor(props: CSGridCellRendererProps<boolean>) {
		super(props);

		this.state = {
			isLastColumn: this.isLastColumn(),
			readOnly: this.isCellEditable(),
			value: props.value
		};
	}

	render() {
		return (
			<span>
				<label
					className={
						'cs-grid_checkbox-wrapper' + (this.state.readOnly ? ' read-only' : '')
					}
				>
					<input
						className='cs-grid_checkbox'
						type='checkbox'
						onClick={!this.state.readOnly ? this.onClick : undefined}
						defaultChecked={this.state.value.cellValue}
						readOnly={this.state.readOnly}
					/>
					<span className='cs-grid_checkbox-faux' />
				</label>

				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</span>
		);
	}

	private onClick = async () => {
		let value: CellData<boolean> = {
			cellValue: !this.state.value.cellValue,
			errorMessage: this.state.value.errorMessage
		};

		if (this.props.onChange) {
			value = await this.props.onChange(
				this.props.node.id,
				this.state.value.cellValue,
				!this.state.value.cellValue
			);
		}

		this.props.setValue(value);
	};
}
