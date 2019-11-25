import { CSGridCellEditorProps, IntegerProps } from '../interfaces/cs-grid-cell-props';
import { getIntl } from '../polyfill/cs-grid-intl';
import { CSGridNumberEditor } from './cs-grid-number-editor';

/**
 * A cell editor for editing a localised integer.
 */
export class CSGridIntegerEditor extends CSGridNumberEditor<
	CSGridCellEditorProps<string | number> & IntegerProps
> {
	constructor(props: CSGridCellEditorProps<string | number> & IntegerProps) {
		super(props);

		this.numberFormatType = 'Integer';

		if (props.stepperArrows) {
			this.inputType = 'number';
		}
	}

	/**
	 * Localizes the input if the stepperArrows are not used otherwise returns the integer.
	 * @param value - Either the underlying number or a localised string.
	 */
	format(value: number | string): number | string {
		if (this.props.stepperArrows) {
			return this.formatDecimalNumber(value);
		} else {
			return super.format(value);
		}
	}

	getNumberFormat() {
		return getIntl(this.props.userInfo.userLocale).NumberFormat(
			this.props.userInfo.userLocale,
			{
				maximumFractionDigits: 0,
				minimumFractionDigits: 0
			}
		);
	}
}
