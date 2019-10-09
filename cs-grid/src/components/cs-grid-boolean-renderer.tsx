import React from 'react';

import {
	CellData,
	CSGridCellRenderer,
	CSGridCellRendererProps,
	IsColumnFuncParams
} from '../interfaces/cs-grid-base-interfaces';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSGridCellError } from './cs-grid-cell-error';

export class CSGridBooleanRenderer extends CSGridBaseRenderer<boolean>
	implements CSGridCellRenderer {
	constructor(props: CSGridCellRendererProps<boolean>) {
		super(props);

		this.state = {
			isLastColumn: this.isLastColumn(),
			value: props.value
		};
	}

	render() {
		if (!this.state.value) {
			return null;
		}
		const readOnly = this.isReadOnly();

		let editable: boolean;
		if (typeof this.props.colDef.editable === 'function') {
			const params: IsColumnFuncParams = {
				api: this.props.api,
				colDef: this.props.colDef,
				column: this.props.column,
				columnApi: this.props.columnApi,
				context: this.props.context,
				data: this.props.data,
				node: this.props.node
			};

			editable = this.props.colDef.editable(params);
		} else {
			editable = this.props.colDef.editable;
		}

		return (
			<span className={readOnly ? ' read-only-cell' : ''}>
				<label
					className={
						'cs-grid_checkbox-wrapper' +
						(this.state.isLastColumn ? ' is-last-column' : '')
					}
				>
					<input
						className='cs-grid_checkbox'
						type='checkbox'
						onClick={editable ? this.onClick : undefined}
						defaultChecked={this.state.value.cellValue}
						readOnly={readOnly}
						disabled={!editable}
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

		this.props.setValue(value);
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
