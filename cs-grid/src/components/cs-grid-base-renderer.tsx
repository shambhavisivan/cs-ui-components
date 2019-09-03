// This type is needed to correctly call the editable function.
// tslint:disable-next-line: no-submodule-imports
import { IsColumnFuncParams } from 'ag-grid-community/dist/lib/entities/colDef';
import React from 'react';

import {
	CSGridCellRenderer,
	CSGridCellRendererProps,
	CSGridCellRendererState
} from '../models/cs-grid-base-interfaces';

/**
 * A base class for all cell renderers.
 */
export default abstract class CSGridBaseRenderer<
	T,
	P extends CSGridCellRendererProps<T> = CSGridCellRendererProps<T>,
	S extends CSGridCellRendererState<T> = CSGridCellRendererState<T>
> extends React.Component<P, S> implements CSGridCellRenderer {
	constructor(props: P) {
		super(props);

		this.props.eGridCell.className += this.isCellEditable() ? ' read-only-cell' : '';
	}

	/**
	 * Used by ag-grid to tell the cell when to refresh.
	 */
	refresh = (params: P): boolean => {
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

	/**
	 * Resolves the editable setting provided in the column definition.
	 */
	isCellEditable = (): boolean => {
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

		return readOnly;
	};

	/**
	 * Is this cell within the last column on the grid.
	 */
	isLastColumn = (): boolean => {
		const currentColumns = this.props.columnApi.getAllGridColumns();

		return (
			currentColumns[currentColumns.length - 1].getColId() === this.props.column.getColId()
		);
	};

	/**
	 * Is this cell within the last row on the page.
	 */
	isLastRowOnPage = (): boolean => {
		return (this.props.rowIndex + 1) % this.props.api.paginationGetPageSize() === 0;
	};
}
