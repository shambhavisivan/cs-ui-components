import NumberFormat from '../models/number-format.enum';
import CSGridNumberEditor, { CSGridNumberEditorProps } from './cs-grid-number-editor';

export interface CSGridCurrencyEditorProps extends CSGridNumberEditorProps {}

export class CSGridCurrencyEditor extends CSGridNumberEditor<CSGridCurrencyEditorProps> {
	constructor(props: CSGridCurrencyEditorProps) {
		super(props);

		this.numberFormat = new Intl.NumberFormat(this.props.userInfo.userLocale, {
			currency: this.props.userInfo.currencyCode,
			style: 'currency'
		});
		this.currencySymbol = this.getCurrencySymbol(
			this.props.userInfo.userLocale,
			this.props.userInfo.currencyCode
		);
		this.numberFormatType = NumberFormat.Currency;
	}
}
