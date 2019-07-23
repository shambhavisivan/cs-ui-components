// This type is needed to correctly call the editable function.
// tslint:disable-next-line: no-submodule-imports
import { IsColumnFuncParams } from 'ag-grid-community/dist/lib/entities/colDef';
import React from 'react';

import {
	CellData,
	CSGridCellRenderer,
	CSGridCellRendererProps
} from '../models/cs-grid-base-interfaces';
import CSGridCellError from './cs-grid-cell-error';

export interface CSGridBooleanRendererProps extends CSGridCellRendererProps<boolean> {}

interface CSGridBooleanRendererState {
	value: CellData<boolean>;
	readOnly: boolean;
}

export default class CSGridBooleanRenderer
	extends React.Component<CSGridBooleanRendererProps, CSGridBooleanRendererState>
	implements CSGridCellRenderer {
	constructor(props: CSGridBooleanRendererProps) {
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
			readOnly,
			value: props.value
		};
	}

	refresh(params: CSGridBooleanRendererProps): boolean {
		if (
			params.value.cellValue !== this.props.value.cellValue ||
			params.value.errorMessage !== this.props.value.errorMessage
		) {
			this.setState({
				value: params.value
			});
		}

		return true;
	}

	onClick = async () => {
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

	render() {
		return (
			<>
				<label
					className={
						'toggle-checkbox-wrapper' + (this.state.readOnly ? ' read-only' : '')
					}
				>
					<input
						className='default-checkbox'
						type='checkbox'
						onClick={!this.state.readOnly ? this.onClick : undefined}
						defaultChecked={this.state.value.cellValue}
						readOnly={this.state.readOnly}
					/>
					<span className='toggle-checkbox' />
				</label>

				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</>
		);
	}
}
