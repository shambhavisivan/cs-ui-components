import { CSGridCellEditorProps, DecimalProps } from '../interfaces/cs-grid-cell-props';
import { getIntl } from '../polyfill/cs-grid-intl';
import { CSGridNumberEditor } from './cs-grid-number-editor';

/**
 * A cell editor for editing a localised decimal.
 */
export class CSGridDecimalEditor extends CSGridNumberEditor<
	CSGridCellEditorProps<string | number> & DecimalProps
> {
	constructor(props: CSGridCellEditorProps<string | number> & DecimalProps) {
		super(props);
		this.numberFormatType = 'Decimal';
	}

	getNumberFormat() {
		return getIntl(this.props.userInfo.userLocale).NumberFormat(
			this.props.userInfo.userLocale,
			{
				maximumFractionDigits: 20
			}
		);
	}

	isCancelAfterEnd() {
		document.removeEventListener('click', this.handleOutsideClick);

		this.setState((prevState) => {
			let formattedValue = this.formatValue();

			if (
				this.props.noOfDecimalDigits !== undefined &&
				typeof formattedValue !== 'string' &&
				formattedValue !== undefined
			) {
				const factorOfTen = Math.pow(10, this.props.noOfDecimalDigits);
				formattedValue =
					Math.round((formattedValue + Number.EPSILON) * factorOfTen) / factorOfTen;
			}

			prevState.value.cellValue = formattedValue;

			return { value: prevState.value };
		});

		return false;
	}
}
