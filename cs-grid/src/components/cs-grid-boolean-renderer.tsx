// This type is needed to correctly call the editable function.
// tslint:disable-next-line: no-submodule-imports
import { IsColumnFuncParams } from 'ag-grid-community/dist/lib/entities/colDef';
import React from 'react';

import {
	CellData,
	CSGridCellRenderer,
	CSGridCellRendererProps,
	CSGridCellRendererState
} from '../models/cs-grid-base-interfaces';
import CSGridCellError from './cs-grid-cell-error';

interface CSGridBooleanRendererState extends CSGridCellRendererState<boolean> {
	readOnly: boolean;
}

export default class CSGridBooleanRenderer
	extends React.Component<CSGridCellRendererProps<boolean>, CSGridBooleanRendererState>
	implements CSGridCellRenderer {
	constructor(props: CSGridCellRendererProps<boolean>) {
		super(props);

		let readOnly: boolean;
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
			readOnly = !this.props.colDef.editable(params);
		} else {
			readOnly = !this.props.colDef.editable;
		}

		this.state = {
			isLastColumn: this.isLastColumn(),
			readOnly,
			value: props.value
		};
	}

	refresh = (params: CSGridCellRendererProps<boolean>): boolean => {
		const isLastColumn = this.isLastColumn();
		if (
			params.value.cellValue !== this.state.value.cellValue ||
			params.value.errorMessage !== this.state.value.errorMessage ||
			isLastColumn !== this.state.isLastColumn
		) {
			this.setState({
				isLastColumn,
				value: params.value
			});
		}

		return true;
	};

	isLastColumn = (): boolean => {
		const currentColumns = this.props.columnApi.getAllGridColumns();

		return (
			currentColumns[currentColumns.length - 1].getColId() === this.props.column.getColId()
		);
	};

	render() {
		return (
			<>
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
			</>
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
