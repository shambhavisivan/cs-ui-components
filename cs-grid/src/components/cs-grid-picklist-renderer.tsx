import React from 'react';
import {
	CellData,
	CSGridCellRenderer,
	CSGridCellRendererProps
} from '../models/cs-grid-base-interfaces';
import CSGridCellError from './cs-grid-cell-error';

export interface CSGridPicklistRendererProps
	extends CSGridCellRendererProps<Array<string> | string> {}

interface CSGridPicklistRendererState {
	value: CellData<Array<string> | string>;
}

export default class CSGridPicklistRenderer
	extends React.Component<CSGridPicklistRendererProps, CSGridPicklistRendererState>
	implements CSGridCellRenderer {
	constructor(props: CSGridPicklistRendererProps) {
		super(props);

		this.state = {
			value: this.props.value
		};
	}

	refresh(params: CSGridPicklistRendererProps): boolean {
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

	format = (value: Array<string> | string) => {
		if (Array.isArray(value)) {
			if (value.length > 0) {
				return value.reduce((result: string, item: string) => {
					return `${result}, ${item}`;
				});
			} else {
				return '';
			}
		}

		return value;
	};

	render() {
		return (
			<div className='select-wrapper'>
				<span>{this.format(this.state.value.cellValue)}</span>
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</div>
		);
	}
}
