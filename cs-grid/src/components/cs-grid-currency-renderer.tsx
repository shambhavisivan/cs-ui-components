import CSGridNumberRenderer, { CSGridNumberRendererProps } from './cs-grid-number-renderer';

export interface CSGridCurrencyRendererProps extends CSGridNumberRendererProps {}

export class CSGridCurrencyRenderer extends CSGridNumberRenderer<CSGridCurrencyRendererProps> {
	constructor(props: CSGridCurrencyRendererProps) {
		super(props);
		this.numberFormat = new Intl.NumberFormat(this.props.userInfo.userLocale, {
			currency: this.props.userInfo.currencyCode,
			style: 'currency'
		});
	}
}
