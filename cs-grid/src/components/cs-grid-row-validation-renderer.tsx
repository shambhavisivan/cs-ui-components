import React from 'react';

import CSTooltip from '../../../src/components/CSTooltip';
import {
	CSGridCellRenderer,
	CSGridCellRendererProps,
	CSGridCellRendererState
} from '../models/cs-grid-base-interfaces';

export enum ValidationStatus {
	Info = 'Info',
	Warning = 'Warning',
	Error = 'Error',
	None = 'None'
}

export default class CSGridRowValidationRenderer
	extends React.Component<
		CSGridCellRendererProps<ValidationStatus>,
		CSGridCellRendererState<ValidationStatus>
	>
	implements CSGridCellRenderer {
	constructor(props: CSGridCellRendererProps<ValidationStatus>) {
		super(props);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	refresh = (params: CSGridCellRendererProps<ValidationStatus>): boolean => {
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
		const status = this.props.value.cellValue;
		let className: string;
		switch (status) {
			case ValidationStatus.Info:
				className = 'icon-info';
				break;
			case ValidationStatus.Warning:
				className = 'icon-warning';
				break;
			case ValidationStatus.Error:
				className = 'icon-error';
				break;
		}

		return (
			<>
				{status !== ValidationStatus.None && (
					<CSTooltip helpText={this.props.value.errorMessage}>
						<span className={className} aria-hidden='true' />
					</CSTooltip>
				)}
			</>
		);
	}
}
