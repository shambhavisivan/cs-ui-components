import NumberFormat from '../models/number-format.enum';
import CSGridNumberEditor, { CSGridNumberEditorProps } from './cs-grid-number-editor';

export interface CSGridDecimalEditorProps extends CSGridNumberEditorProps {}

export default class CSGridDecimalEditor extends CSGridNumberEditor<CSGridDecimalEditorProps> {
	constructor(props: CSGridDecimalEditorProps) {
		super(props);

		this.numberFormat = new Intl.NumberFormat(this.props.userInfo.userLocale, {
			maximumFractionDigits: 20
		});
		this.numberFormatType = NumberFormat.Decimal;
	}
}
