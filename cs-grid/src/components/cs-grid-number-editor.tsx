import React from 'react';

import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorProps,
	CSGridCellEditorState
} from '../models/cs-grid-base-interfaces';
import NumberFormat from '../models/number-format.enum';
import CSGridCellError from './cs-grid-cell-error';

export default class CSGridNumberEditor<P extends CSGridCellEditorProps<string | number>>
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
					style={{ width: '90%' }}
				/>
				<CSGridCellError errorMessage={this.state.value.errorMessage} />
			</>
		);
	}

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

	formatDecimalNumber = (num: string | number): number => {
		if (num === '') {
			return undefined;
		}
		const replaceHelper = (dec: string): string => {
			let replaced: string;
			if (this.decimalSeparator === ',') {
				// remove periods;
				replaced = dec.replace(/[\s.]+/g, '');
				// replace remaining comma with a period;
				replaced = replaced.replace(/\,/, '.');
			} else {
				replaced = dec.replace(/[\s,]+/g, '');
			}

			return replaced;
		};

		if (typeof num === 'string') {
			return parseFloat(replaceHelper(num));
		} else {
			return num;
		}
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
