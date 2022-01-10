import { ICellRendererParams } from 'ag-grid-community';
import React from 'react';

import {
	CSGridCellRenderer,
	CSGridCellRendererState,
	IsColumnFunc,
	IsColumnFuncParams
} from '../interfaces/cs-grid-base-interfaces';
import { CSGridCellRendererProps } from '../interfaces/cs-grid-cell-props';

/**
 * A base class for all cell renderers.
 */
export abstract class CSGridBaseRenderer<
		T,
		P extends CSGridCellRendererProps<T> = CSGridCellRendererProps<T>,
		S extends CSGridCellRendererState<T> = CSGridCellRendererState<T>
	>
	extends React.Component<P, S>
	implements CSGridCellRenderer
{
	constructor(props: P) {
		super(props);

		this.props.eGridCell.className += this.isReadOnly() ? ' read-only-cell-wrapper' : '';
	}

	/**
	 * Used by ag-grid to tell the cell when to refresh.
	 */
	refresh(params: P | ICellRendererParams): boolean {
		const isLastColumn = this.isLastColumn();

		if (
			params &&
			params.value &&
			(!this.state ||
				!this.state.value ||
				params.value.cellValue !== this.state.value.cellValue ||
				params.value.errorMessage !== this.state.value.errorMessage ||
				isLastColumn !== this.state.isLastColumn)
		) {
			this.setState({
				isLastColumn,
				value: params.value
			});
		}

		return true;
	}

	isReadOnly = (): boolean => {
		const readonly: boolean | IsColumnFunc = this.props.readonly;
		if (typeof readonly === 'function') {
			const params: IsColumnFuncParams = {
				column: this.props.column,
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
			currentColumns &&
			currentColumns.length > 0 &&
			currentColumns[currentColumns.length - 1].getColId() === this.props.column.getColId()
		);
	};

	/**
	 * Sets an editing flag on the state and then starts editing the cell.
	 */
	startEditingCell = () => {
		this.setState({ editing: true });
		const startEditingParams = {
			colKey: this.props.column.getId(),
			rowIndex: this.props.node.rowIndex
		};
		this.props.api.startEditingCell(startEditingParams);
		setTimeout(() => {
			this.setState({ editing: false });
		}, 0);
	};
}
