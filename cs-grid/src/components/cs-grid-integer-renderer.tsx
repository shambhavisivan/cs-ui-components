import { CSGridCellRendererProps, IntegerProps } from '../interfaces/cs-grid-cell-props';
import { getIntl } from '../polyfill/cs-grid-intl';
import { CSGridNumberRenderer } from './cs-grid-number-renderer';

/**
 * A cell renderer for displaying a localised integer.
 */
export class CSGridIntegerRenderer extends CSGridNumberRenderer<
	CSGridCellRendererProps<number> & IntegerProps
> {
	constructor(props: CSGridCellRendererProps<number> & IntegerProps) {
		super(props);
	}

	getNumberFormat() {
		return getIntl(this.props.userInfo.userLocale).NumberFormat(
			this.props.userInfo.userLocale,
			{
				maximumFractionDigits: 0,
				minimumFractionDigits: 0
			}
		);
	}
}
