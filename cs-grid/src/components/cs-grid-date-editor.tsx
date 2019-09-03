import moment from 'moment';
import React from 'react';
import DatePicker from 'react-datepicker';
import '../../node_modules/react-datepicker/dist/react-datepicker.css';

import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorProps
} from '../models/cs-grid-base-interfaces';
import CSGridCellError from './cs-grid-cell-error';

interface CSGridDateEditorState {
	value: CellData<string>;
}

export default class CSGridDateEditor
	extends React.Component<CSGridCellEditorProps<string>, CSGridDateEditorState>
	implements CSGridCellEditor {
	private dateValueFormat: string = 'YYYY-MM-DD';

	constructor(props: CSGridCellEditorProps<string>) {
		super(props);

		moment.locale(this.props.userInfo.userLocale);
		this.state = { value: this.props.value };
	}

	getValue() {
		return this.state.value;
	}

	isCancelBeforeStart = () => {
		return false;
	};

	isCancelAfterEnd = () => {
		return false;
	};

	isPopup = () => {
		return true;
	};

	onChange = async (date: Date): Promise<void> => {
		const formattedDate = date ? moment(date).format(this.dateValueFormat) : '';

		let value: CellData<string> = {
			cellValue: formattedDate,
			errorMessage: this.state.value.errorMessage
		};

		if (this.props.onChange) {
			value = await this.props.onChange(
				this.props.node.id,
				this.getValue().cellValue,
				formattedDate
			);
		}

		this.setState({ value }, () => {
			this.props.stopEditing();
		});
	};

	format = (value: Date): string => {
		return value ? moment(value).format(moment.localeData().longDateFormat('L')) : '';
	};

	render() {
		let date: Date = null;
		if (this.state.value) {
			date = moment(this.state.value.cellValue, this.dateValueFormat).toDate();
		}
		const formattedDate = this.format(date);
		const placeholderText = 'Click to select a date';

		return (
			<>
				<div className='date-attribute'>
					<DatePicker
						selected={date}
						onChange={this.onChange}
						isClearable={true}
						placeholderText={placeholderText}
						showMonthDropdown={true}
						showYearDropdown={true}
						dropdownMode='select'
						inline={true}
						value={formattedDate}
					/>
				</div>
			</>
		);
	}
}
