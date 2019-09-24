import { CSGridCellRendererProps } from '../interfaces/cs-grid-base-interfaces';
import { getIntl } from '../polyfill/cs-grid-intl';
import { CSGridNumberRenderer } from './cs-grid-number-renderer';

/**
 * A cell renderer for displaying a localised integer.
 */
export class CSGridIntegerRenderer extends CSGridNumberRenderer<CSGridCellRendererProps<number>> {
	constructor(props: CSGridCellRendererProps<number>) {
		super(props);
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
