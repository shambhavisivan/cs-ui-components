import { CSGridCellRendererProps } from '../interfaces/cs-grid-base-interfaces';
import { getIntl } from '../polyfill/cs-grid-intl';
import { CSGridNumberRenderer } from './cs-grid-number-renderer';

/**
 * A cell renderer for displaying a localised currency.
 */
export class CSGridCurrencyRenderer extends CSGridNumberRenderer<CSGridCellRendererProps<number>> {
	constructor(props: CSGridCellRendererProps<number>) {
		super(props);
	}

	async getNumberFormat(): Promise<any> {
		return (await getIntl(this.props.userInfo.userLocale)).NumberFormat(
			this.props.userInfo.userLocale,
			{
				currency: this.props.userInfo.currencyCode,
				style: 'currency'
			}
		);
	}
}
