import NumberFormat from '../models/number-format.enum';
import CSGridNumberEditor, { CSGridNumberEditorProps } from './cs-grid-number-editor';

export interface CSGridIntegerEditorProps extends CSGridNumberEditorProps {
	stepperArrows?: boolean;
}

export class CSGridIntegerEditor extends CSGridNumberEditor<CSGridIntegerEditorProps> {
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

	format(value: number | string): number | string {
		if (this.props.stepperArrows) {
			return this.formatDecimalNumber(value);
		} else {
			return super.format(value);
		}
	}
}
