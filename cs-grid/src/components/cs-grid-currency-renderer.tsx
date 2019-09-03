import { CSGridCellRendererProps } from '../models/cs-grid-base-interfaces';
import CSGridNumberRenderer from './cs-grid-number-renderer';

export default class CSGridCurrencyRenderer extends CSGridNumberRenderer<
	CSGridCellRendererProps<number>
> {
	constructor(props: CSGridCellRendererProps<number>) {
		super(props);
		this.numberFormat = new Intl.NumberFormat(this.props.userInfo.userLocale, {
			currency: this.props.userInfo.currencyCode,
			style: 'currency'
		});
	}
}
