import moment from 'moment';
import React from 'react';

import {
	CSGridCellRenderer,
	CSGridCellRendererProps,
	CSGridCellRendererState
} from '../models/cs-grid-base-interfaces';
import CSGridCellError from './cs-grid-cell-error';

export default class CSGridDateRenderer
	extends React.Component<CSGridCellRendererProps<string>, CSGridCellRendererState<string>>
	implements CSGridCellRenderer {
	private dateValueFormat: string = 'YYYY-MM-DD';

	constructor(props: CSGridCellRendererProps<string>) {
		super(props);
		moment.locale(this.props.userInfo.userLocale);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	refresh = (params: CSGridCellRendererProps<string>): boolean => {
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
