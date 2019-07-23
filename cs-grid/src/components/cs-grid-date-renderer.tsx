import moment from 'moment';
import React from 'react';
import {
	CellData,
	CSGridCellRenderer,
	CSGridCellRendererProps
} from '../models/cs-grid-base-interfaces';
import CSGridCellError from './cs-grid-cell-error';

export interface CSGridDateRendererProps extends CSGridCellRendererProps<string> {}

interface CSGridDateRendererState {
	value: CellData<string>;
}

export default class CSGridDateRenderer
	extends React.Component<CSGridDateRendererProps, CSGridDateRendererState>
	implements CSGridCellRenderer {
	private dateValueFormat: string = 'YYYY-MM-DD';

	constructor(props: CSGridDateRendererProps) {
		super(props);
		moment.locale(this.props.userInfo.userLocale);

		this.state = {
			value: props.value
		};
	}

	refresh(params: CSGridDateRendererProps): boolean {
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

	formattedDate = (): string => {
		let date: Date = null;
		if (this.state.value && this.state.value.cellValue) {
			date = moment(this.state.value.cellValue, this.dateValueFormat).toDate();
		}

		return date ? moment(date).format(moment.localeData().longDateFormat('L')) : '';
	};

	render() {
		return (
			<span>
				{this.formattedDate()}
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</span>
		);
	}
}
