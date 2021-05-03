import React from 'react';

import { CSCheckbox, CSTooltip } from '@cloudsense/cs-ui-components';
import { IsColumnFuncParams } from 'ag-grid-community/dist/lib/entities/colDef';
import { CellData, CSGridCellRenderer } from '../interfaces/cs-grid-base-interfaces';
import { CSGridCellRendererProps } from '../interfaces/cs-grid-cell-props';
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

	refresh(params: CSGridCellRendererProps<boolean>): boolean {
		super.refresh(params);
		this.forceUpdate();

		return true;
	}

	render() {
		if (!this.state.value) {
			return null;
		}

		const readOnly = this.isReadOnly();
		const editable = this.isEditable();

		const contents = (
			<CSCheckbox
				label='checkbox'
				labelHidden={true}
				variant='brand'
				onChange={editable ? this.onChange : undefined}
				checked={this.state.value.cellValue}
				readOnly={readOnly}
				disabled={!editable}
			/>
		);
		let tooltip;
		if (this.props.getTooltip) {
			tooltip = this.props.getTooltip(this.props.node.id);
		}

		return (
			<span className={readOnly ? 'read-only-cell' : ''}>
				{tooltip ? (
					<CSTooltip
						className='cs-grid_cell-tooltip'
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
						maxHeight={tooltip.maxHeight}
						maxWidth={tooltip.maxWidth}
						stickyOnClick={tooltip.stickyOnClick}
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

	private onChange = async () => {
		if (this.isEditable()) {
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
			this.setState({ value });
		} else {
			this.forceUpdate();
		}
	};

	private isEditable = () => {
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

			return this.props.colDef.editable(params);
		} else {
			return this.props.colDef.editable;
		}
	};
}
