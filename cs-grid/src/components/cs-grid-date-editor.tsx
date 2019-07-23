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

export interface CSGridDateEditorProps extends CSGridCellEditorProps<string> {}

interface CSGridDateEditorState {
	value: CellData<string>;
}

export default class CSGridDateEditor
	extends React.Component<CSGridDateEditorProps, CSGridDateEditorState>
	implements CSGridCellEditor {
	private KEY_BACKSPACE = 8;
	private KEY_DELETE = 46;
	private dateValueFormat: string = 'YYYY-MM-DD';

	constructor(props: CSGridDateEditorProps) {
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

	onKeyDown = (event: KeyboardEvent) => {
		if (this.isLeftOrRight(event) || this.deleteOrBackspace(event)) {
			event.stopPropagation();

			return;
		}
	};

	isLeftOrRight = (event: KeyboardEvent) => {
		return [37, 39].indexOf(event.keyCode) > -1;
	};

	deleteOrBackspace = (event: KeyboardEvent) => {
		return [this.KEY_DELETE, this.KEY_BACKSPACE].indexOf(event.keyCode) > -1;
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
				<span>
					{formattedDate}
					<CSGridCellError errorMessage={this.state.value.errorMessage} />
				</span>
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
