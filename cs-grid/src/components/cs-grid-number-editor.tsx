import React from 'react';

import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorProps,
	CSGridCellEditorState
} from '../interfaces/cs-grid-base-interfaces';
import { NumberFormat } from '../interfaces/number-format.enum';
import { CSGridCellError } from './cs-grid-cell-error';

/**
 * A cell editor for editing a localised number.
 */
export class CSGridNumberEditor<P extends CSGridCellEditorProps<string | number>>
	extends React.Component<P, CSGridCellEditorState<string | number>>
	implements CSGridCellEditor {
	numberFormatType: NumberFormat = NumberFormat.Decimal;
	numberFormat: Intl.NumberFormat;
	currencySymbol: string = '';
	inputType = 'text';
	private inputRef: React.RefObject<HTMLInputElement>;
	private decimalSeparator: string;

	constructor(props: P) {
		super(props);

		this.decimalSeparator = this.getSeparator(this.props.userInfo.userLocale, 'decimal');
		this.inputRef = React.createRef();
		this.state = {
			value: props.value
		};

		this.format = this.format.bind(this);
	}

	componentDidMount() {
		this.setState({
			value: {
				cellValue: this.format(this.props.value.cellValue),
				errorMessage: this.props.value.errorMessage
			}
		});
	}

	/**
	 * Focus on the cell when its opened.
	 */
	afterGuiAttached() {
		const eInput = this.inputRef.current;
		eInput.focus();
		eInput.select();
	}

	/**
	 * Returns the current value - required by ag-grid.
	 */
	getValue() {
		return this.state.value;
	}

	isCancelBeforeStart = () => {
		return false;
	};

	isCancelAfterEnd = () => {
		return false;
	};

	render() {
		return (
			<>
				<input
					type={this.inputType}
					ref={this.inputRef}
					value={this.state.value.cellValue}
					onChange={this.handleChange}
					onBlur={this.onBlur}
					placeholder=''
					className='cs-grid_number-inner'
				/>
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</>
		);
	}

	/**
	 * Localises the input value.
	 * @param value - a localised string.
	 */
	format(value: number | string): number | string {
		if (value === undefined || value === null) {
			return '';
		}

		let result: string = this.numberFormat.format(Number(value));

		result =
			result.indexOf('NaN') > -1 || value === ''
				? value.toString()
				: result.replace(new RegExp(`[${this.currencySymbol}]`, 'g'), '').trim();

		return result;
	}

	/**
	 * Created a number from a localised string.
	 * @param num - a localised string or a number.
	 */
	formatDecimalNumber = (num: string | number): number => {
		if (num === '') {
			return undefined;
		}

		if (typeof num !== 'string') {
			return num;
		}

		let replaced: string;
		if (this.decimalSeparator === ',') {
			// remove periods;
			replaced = num.replace(/[\s.]+/g, '');
			// replace remaining comma with a period;
			replaced = replaced.replace(/\,/, '.');
		} else {
			replaced = num.replace(/[\s,]+/g, '');
		}

		return parseFloat(replaced);
	};

	private handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputVal: string = event.target.value;

		// Can only have numbers, commas, periods, spaces and start with + or -
		const onlyNumberCommasSpaces: RegExp = /^(-{0,1}?\+{0,1}?)[0-9,.\s]*$/;

		if (!onlyNumberCommasSpaces.test(inputVal)) {
			return;
		}

		// Can only have one decimal separator
		const regex: RegExp = new RegExp(`[${this.decimalSeparator}]`, 'g');
		const numberOfSeparatorOccurrences: number = (inputVal.match(regex) || []).length;

		if (numberOfSeparatorOccurrences > 1) {
			return;
		}

		if (this.numberFormatType === NumberFormat.Integer && numberOfSeparatorOccurrences >= 1) {
			return;
		}

		// Can only have numbers after decimal separator
		if (numberOfSeparatorOccurrences === 1) {
			const decimalPart = inputVal.substring(
				inputVal.indexOf(this.decimalSeparator) + 1,
				inputVal.length
			);

			if (decimalPart.length > 0 && !/[0-9]/.test(decimalPart)) {
				return;
			}
		}

		let value: CellData<string | number> = {
			cellValue: inputVal,
			errorMessage: this.state.value.errorMessage
		};

		if (this.props.onChange) {
			value = await this.props.onChange(
				this.props.node.id,
				this.getValue().cellValue,
				inputVal
			);
		}

		this.setState({ value });
	};

	private onBlur = (): void => {
		this.setState(prevState => {
			prevState.value.cellValue = this.formatDecimalNumber(this.state.value.cellValue);

			return { value: prevState.value };
		});
	};

	private getSeparator = (locale: string, separatorType: string): string => {
		const numberWithGroupAndDecimalSeparator = 1000.1;

		return Intl.NumberFormat(locale)
			.formatToParts(numberWithGroupAndDecimalSeparator)
			.find(part => part.type === separatorType).value;
	};
}
