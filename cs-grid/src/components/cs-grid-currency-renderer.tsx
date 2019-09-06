import { CSGridCellRendererProps } from '../interfaces/cs-grid-base-interfaces';
import { CSGridNumberRenderer } from './cs-grid-number-renderer';

/**
 * A cell renderer for displaying a localised currency.
 */
export class CSGridCurrencyRenderer extends CSGridNumberRenderer<CSGridCellRendererProps<number>> {
	constructor(props: CSGridCellRendererProps<number>) {
		super(props);
		this.numberFormat = new Intl.NumberFormat(this.props.userInfo.userLocale, {
			currency: this.props.userInfo.currencyCode,
			style: 'currency'
		});
	}
}
