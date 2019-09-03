import { CSGridCellEditorProps } from '../models/cs-grid-base-interfaces';
import NumberFormat from '../models/number-format.enum';
import CSGridNumberEditor from './cs-grid-number-editor';

/**
 * stepperArrows? - an optional property to add stepper arrows to the right of the integer, false if not provided.
 */
export interface CSGridIntegerEditorProps extends CSGridCellEditorProps<string | number> {
	stepperArrows?: boolean;
}

/**
 * A cell editor for editing a localised integer.
 */
export default class CSGridIntegerEditor extends CSGridNumberEditor<CSGridIntegerEditorProps> {
	constructor(props: CSGridIntegerEditorProps) {
		super(props);

		this.numberFormat = new Intl.NumberFormat(this.props.userInfo.userLocale, {
			maximumFractionDigits: 0,
			minimumFractionDigits: 0
		});
		this.numberFormatType = NumberFormat.Integer;

		if (props.stepperArrows) {
			this.inputType = 'number';
		}
	}

	/**
	 * Localises the input if the stepperArrows are not used otherwise returns the integer.
	 * @param value - Either the underlying number or a localised string.
	 */
	format(value: number | string): number | string {
		if (this.props.stepperArrows) {
			return this.formatDecimalNumber(value);
		} else {
			return super.format(value);
		}
	}
}
