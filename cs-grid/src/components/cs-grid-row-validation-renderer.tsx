import React from 'react';

import CSTooltip from '../../../src/components/CSTooltip';
import {
	CellData,
	CSGridCellRenderer,
	CSGridCellRendererProps
} from '../models/cs-grid-base-interfaces';

export interface CSGridRowValidationRendererProps
	extends CSGridCellRendererProps<ValidationStatus> {
	value: CellData<ValidationStatus>;
}

export enum ValidationStatus {
	Info = 'Info',
	Warning = 'Warning',
	Error = 'Error',
	None = 'None'
}

export default class CSGridRowValidationRenderer
	extends React.Component<CSGridRowValidationRendererProps>
	implements CSGridCellRenderer {
	constructor(props: CSGridRowValidationRendererProps) {
		super(props);
	}

	refresh = (params: CSGridRowValidationRendererProps): boolean => {
		if (
			params.value.cellValue !== this.props.value.cellValue ||
			params.value.errorMessage !== this.props.value.errorMessage
		) {
			this.setState({
				value: params.value
			});
		}

		return true;
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
