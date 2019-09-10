import { CSGridCellEditorProps } from '../interfaces/cs-grid-base-interfaces';
import { CSGridNumberEditor } from './cs-grid-number-editor';

/**
 * A cell editor for editing a localised currency.
 */
export class CSGridCurrencyEditor extends CSGridNumberEditor<
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
		this.numberFormatType = 'Currency';
	}

	/**
	 * Returns the localised currency symbol.
	 */
	private getCurrencySymbol = (locale: string, currency: string): string => {
		const formatter = new Intl.NumberFormat(locale, {
			currency,
			style: 'currency'
		});

		return formatter.formatToParts(1).find(part => part.type === 'currency').value;
	};
}
