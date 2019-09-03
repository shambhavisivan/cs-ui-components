import moment from 'moment';
import React from 'react';

import { CellData, CSGridCellRendererProps } from '../models/cs-grid-base-interfaces';
import CSGridBaseRenderer from './cs-grid-base-renderer';
import CSGridCellError from './cs-grid-cell-error';

/**
 * A cell renderer for displaying a localised date.
 */
export default class CSGridDateRenderer extends CSGridBaseRenderer<string> {
	private dateValueFormat: string = 'YYYY-MM-DD';

	constructor(props: CSGridCellRendererProps<string>) {
		super(props);
		moment.locale(this.props.userInfo.userLocale);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	/**
	 * Localises the date held in the state.
	 */
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
				<span>{this.formattedDate()}</span>

				{this.state.value.cellValue && (
					<button className='cs-grid_clear-button' onClick={this.clearDate}>
						<svg
							className='cs-grid_clear-icon'
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							viewBox='0 0 52 52'
						>
							<path d='m31 25.4l13-13.1c0.6-0.6 0.6-1.5 0-2.1l-2-2.1c-0.6-0.6-1.5-0.6-2.1 0l-13.1 13.1c-0.4 0.4-1 0.4-1.4 0l-13.1-13.2c-0.6-0.6-1.5-0.6-2.1 0l-2.1 2.1c-0.6 0.6-0.6 1.5 0 2.1l13.1 13.1c0.4 0.4 0.4 1 0 1.4l-13.2 13.2c-0.6 0.6-0.6 1.5 0 2.1l2.1 2.1c0.6 0.6 1.5 0.6 2.1 0l13.1-13.1c0.4-0.4 1-0.4 1.4 0l13.1 13.1c0.6 0.6 1.5 0.6 2.1 0l2.1-2.1c0.6-0.6 0.6-1.5 0-2.1l-13-13.1c-0.4-0.4-0.4-1 0-1.4z' />
						</svg>
					</button>
				)}
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
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
