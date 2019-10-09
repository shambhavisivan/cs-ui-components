import React from 'react';

import {
	CSGridCellRenderer,
	CSGridCellRendererProps,
	CSGridCellRendererState,
	IsColumnFunc,
	IsColumnFuncParams
} from '../interfaces/cs-grid-base-interfaces';

/**
 * A base class for all cell renderers.
 */
export abstract class CSGridBaseRenderer<
	T,
	P extends CSGridCellRendererProps<T> = CSGridCellRendererProps<T>,
	S extends CSGridCellRendererState<T> = CSGridCellRendererState<T>
> extends React.Component<P, S> implements CSGridCellRenderer {
	constructor(props: P) {
		super(props);

		this.props.eGridCell.className += this.isReadOnly() ? ' read-only-cell-wrapper' : '';
	}

	/**
	 * Used by ag-grid to tell the cell when to refresh.
	 */
	refresh = (params: P): boolean => {
		const isLastColumn = this.isLastColumn();
		if (
			params.value &&
			(params.value.cellValue !== this.state.value.cellValue ||
				params.value.errorMessage !== this.state.value.errorMessage ||
				isLastColumn !== this.state.isLastColumn)
		) {
			this.setState({
				isLastColumn,
				value: params.value
			});
		}

		return true;
	};

	isReadOnly = (): boolean => {
		const readonly: boolean | IsColumnFunc = this.props.readonly;
		if (typeof readonly === 'function') {
			const params: IsColumnFuncParams = {
				api: this.props.api,
				colDef: this.props.colDef,
				column: this.props.column,
				columnApi: this.props.columnApi,
				context: this.props.context,
				data: this.props.data,
				node: this.props.node
			};

			return readonly(params);
		} else {
			return readonly !== undefined && readonly;
		}
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
}
