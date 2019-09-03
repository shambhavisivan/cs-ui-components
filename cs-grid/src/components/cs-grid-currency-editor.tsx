import { CSGridCellEditorProps } from '../models/cs-grid-base-interfaces';
import NumberFormat from '../models/number-format.enum';
import CSGridNumberEditor from './cs-grid-number-editor';

export default class CSGridCurrencyEditor extends CSGridNumberEditor<
	CSGridCellEditorProps<string | number>
> {
	constructor(props: CSGridCellEditorProps<string | number>) {
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

	private getCurrencySymbol = (locale: string, currency: string): string => {
		const formatter = new Intl.NumberFormat(locale, {
			currency,
			style: 'currency'
		});

		return formatter.formatToParts(1).find(part => part.type === 'currency').value;
	};
}
