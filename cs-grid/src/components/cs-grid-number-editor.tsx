import React from 'react';

import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorState
} from '../interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps } from '../interfaces/cs-grid-cell-props';
import { NumberFormat } from '../interfaces/number-format.enum';
import { getIntl } from '../polyfill/cs-grid-intl';
import { formatDecimalNumber, getSeparator } from '../utils/cs-grid-number-formatting-helper';
import { CSGridCellError } from './cs-grid-cell-error';

/**
 * A cell editor for editing a localised number.
 */
export abstract class CSGridNumberEditor<P extends CSGridCellEditorProps<string | number>>
	extends React.Component<P, CSGridCellEditorState<string | number>>
	implements CSGridCellEditor {
	numberFormatType: NumberFormat = 'Decimal';
	currencySymbol: string = '';
	inputType = 'text';
	decimalSeparator: string;
	private inputRef: React.RefObject<HTMLInputElement>;

	constructor(props: P) {
		super(props);

		this.decimalSeparator = getSeparator(this.props.userInfo.userLocale, 'decimal');
		this.inputRef = React.createRef();

		this.state = {
			value: {
				cellValue: '',
				errorMessage: props.value?.errorMessage
			}
		};

		this.format = this.format.bind(this);
	}

	async componentDidMount() {
		if (!this.props.value) {
			this.setState({
				value: {
					cellValue: undefined,
					errorMessage: undefined
				}
			});
		}

		const cellValue = this.format(this.props.value.cellValue);
		this.setState({
			value: {
				cellValue,
				errorMessage: this.props.value.errorMessage
			}
		});
	}

	/**
	 * Focus on the cell when its opened.
	 */
	afterGuiAttached() {
		const eInput = this.inputRef.current;
		if (eInput) {
			eInput.focus();
			eInput.select();
		}
	}

	/**
	 * Returns the current value - required by ag-grid.
	 */
	getValue() {
		return this.state.value;
	}

	isCancelAfterEnd() {
		document.removeEventListener('click', this.handleOutsideClick);

		this.setState(prevState => {
			prevState.value.cellValue = this.formatValue();

			return { value: prevState.value };
		});

		return false;
	}

	isCancelBeforeStart() {
		document.addEventListener('click', this.handleOutsideClick);

		return false;
	}

	formatValue() {
		let formattedValue: string | number = formatDecimalNumber(
			this.state.value.cellValue,
			this.props.userInfo
		);

		formattedValue = Number.isNaN(formattedValue) ? this.state.value.cellValue : formattedValue;

		return formattedValue;
	}

	render() {
		return (
			<>
				<input
					type={this.inputType}
					ref={this.inputRef}
					value={this.state.value?.cellValue || ''}
					onChange={this.handleChange}
					placeholder=''
					className='cs-grid_number-inner'
				/>
				<CSGridCellError errorMessage={this.state.value?.errorMessage} />
			</>
		);
	}

	/**
	 * Localised the input value.
	 * @param value - a localised string.
	 */
	format(value: number | string): number | string {
		if (value === undefined || value === null) {
			return '';
		}

		let result: string = this.getNumberFormat().format(
			formatDecimalNumber(value, this.props.userInfo)
		);

		const currencySymbol = this.getCurrencySymbol(
			this.props.userInfo.userLocale,
			this.props.userInfo.currencyCode
		);

		result =
			result.indexOf('NaN') > -1 || value === ''
				? value.toString()
				: result.replace(new RegExp(`[${currencySymbol}]`, 'g'), '').trim();

		return result;
	}

	handleOutsideClick = (event: MouseEvent) => {
		if (this.props.eGridCell && !this.props.eGridCell.contains(event.target as Node)) {
			this.props.stopEditing();
		}
	};

	abstract getNumberFormat(): Intl.NumberFormat;

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

		if (this.numberFormatType === 'Integer' && numberOfSeparatorOccurrences >= 1) {
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

		this.setState({ value });

		if (this.props.onChange) {
			value = await this.props.onChange(
				this.props.node.id,
				this.getValue().cellValue,
				inputVal
			);
		}

		this.setState({ value });
	};

	/**
	 * Returns the localised currency symbol.
	 */
	private getCurrencySymbol = (locale: string, currency: string): string => {
		const formatter = getIntl(locale).NumberFormat(locale, {
			currency,
			style: 'currency'
		});

		return formatter.formatToParts(1).find(part => part.type === 'currency').value;
	};
}
