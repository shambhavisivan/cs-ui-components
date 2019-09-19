import { CSGridCellEditorProps } from '../interfaces/cs-grid-base-interfaces';
import { getIntl } from '../polyfill/cs-grid-Intl';
import { CSGridNumberEditor } from './cs-grid-number-editor';

/**
 * stepperArrows? - an optional property to add stepper arrows to the right of the integer, false if not provided.
 */
export interface CSGridIntegerEditorProps extends CSGridCellEditorProps<string | number> {
	stepperArrows?: boolean;
}

/**
 * A cell editor for editing a localised integer.
 */
export class CSGridIntegerEditor extends CSGridNumberEditor<CSGridIntegerEditorProps> {
	constructor(props: CSGridIntegerEditorProps) {
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
	async format(value: number | string): Promise<number | string> {
		if (this.props.stepperArrows) {
			return this.formatDecimalNumber(value);
		} else {
			return super.format(value);
		}
	}

	async getNumberFormat(): Promise<any> {
		return (await getIntl(this.props.userInfo.userLocale)).NumberFormat(
			this.props.userInfo.userLocale,
			{
				maximumFractionDigits: 0,
				minimumFractionDigits: 0
			}
		);
	}
}
