import React from 'react';
import {
	CellData,
	CSGridCellRenderer,
	CSGridCellRendererProps
} from '../models/cs-grid-base-interfaces';
import CSGridCellError from './cs-grid-cell-error';

export interface CSGridNumberRendererProps extends CSGridCellRendererProps<number> {}

interface CSGridNumberRendererState {
	value: CellData<number>;
}

export default class CSGridNumberRenderer<P extends CSGridNumberRendererProps>
	extends React.Component<P, CSGridNumberRendererState>
	implements CSGridCellRenderer {
	numberFormat: Intl.NumberFormat;

	constructor(props: P) {
		super(props);

		this.state = {
			value: this.props.value
		};
	}

	componentDidMount() {
		this.refresh(this.props);
	}

	refresh(params: P): boolean {
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

	format = (value: number | string): string => {
		if (value === undefined || value === null) {
			return '';
		}

		let result: string = this.numberFormat.format(Number(value));

		if (result.indexOf('NaN') > -1 || value === '') {
			result = value.toString();
		}

		return result;
	};

	render() {
		return (
			<div style={{ textAlign: 'right' }}>
				{this.format(this.state.value.cellValue)}{' '}
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</div>
		);
	}
}
