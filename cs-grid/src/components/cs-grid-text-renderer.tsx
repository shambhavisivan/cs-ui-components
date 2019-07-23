import React from 'react';
import {
	CellData,
	CSGridCellRenderer,
	CSGridCellRendererProps
} from '../models/cs-grid-base-interfaces';
import CSGridCellError from './cs-grid-cell-error';

export interface CSGridTextRendererProps extends CSGridCellRendererProps<string> {}

interface CSGridTextRendererState {
	value: CellData<string>;
}

export default class CSGridTextRenderer
	extends React.Component<CSGridTextRendererProps, CSGridTextRendererState>
	implements CSGridCellRenderer {
	constructor(props: CSGridTextRendererProps) {
		super(props);

		this.state = {
			value: props.value
		};
	}

	refresh(params: CSGridTextRendererProps): boolean {
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

	render() {
		return (
			<span>
				<span>{this.state.value.cellValue}</span>
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</span>
		);
	}
}
