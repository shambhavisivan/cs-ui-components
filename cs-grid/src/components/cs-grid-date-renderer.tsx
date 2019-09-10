import moment from 'moment';
import React from 'react';

import { CellData, CSGridCellRendererProps } from '../interfaces/cs-grid-base-interfaces';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSGridCellError } from './cs-grid-cell-error';

/**
 * A cell renderer for displaying a localised date.
 */
export class CSGridDateRenderer extends CSGridBaseRenderer<string> {
	private dateValueFormat: string = 'YYYY-MM-DD';

	constructor(props: CSGridCellRendererProps<string>) {
		super(props);
		moment.locale(this.props.userInfo.userLocale);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	/**
	 * Localizes the date held in the state.
	 */
	formattedDate = (): string => {
		let date: Date = null;
		if (this.state.value && this.state.value.cellValue) {
			date = moment(this.state.value.cellValue, this.dateValueFormat).toDate();
		}

		return date ? moment(date).format(moment.localeData().longDateFormat('L')) : '';
	};

	render() {
		const readOnly = this.isReadOnly();

		return (
			<span
				className={
					(this.state.isLastColumn ? 'is-last-column' : '') +
					(readOnly ? ' read-only-cell' : '')
				}
			>
				<span className={'cs-grid_date-cell-value' + (readOnly ? '-read-only' : '')}>
					{this.formattedDate()}
				</span>
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
				{this.state.value.cellValue && !readOnly && (
					<button className='cs-grid_clear-button' onClick={this.clearDate} />
				)}
			</span>
		);
	}

	clearDate = async (): Promise<void> => {
		this.props.api.stopEditing();
		let value: CellData<string> = {
			cellValue: '',
			errorMessage: this.props.value.errorMessage
		};

		if (this.props.onChange) {
			value = await this.props.onChange(this.props.node.id, this.props.value.cellValue, '');
		}

		this.props.setValue(value);
	};
}
