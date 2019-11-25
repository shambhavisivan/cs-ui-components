import { CSGridCellRendererProps, DecimalProps } from '../interfaces/cs-grid-cell-props';
import { getIntl } from '../polyfill/cs-grid-intl';
import { CSGridNumberRenderer } from './cs-grid-number-renderer';

/**
 * A cell renderer for displaying a localised decimal number.
 */
export class CSGridDecimalRenderer extends CSGridNumberRenderer<
	CSGridCellRendererProps<number> & DecimalProps
> {
	constructor(props: CSGridCellRendererProps<number> & DecimalProps) {
		super(props);
	}

	getNumberFormat() {
		const noOfDecimalDigits =
			this.props.noOfDecimalDigits !== undefined ? this.props.noOfDecimalDigits : 5;

		return getIntl(this.props.userInfo.userLocale).NumberFormat(
			this.props.userInfo.userLocale,
			{
				maximumFractionDigits: noOfDecimalDigits,
				minimumFractionDigits: noOfDecimalDigits
			}
		);
	}
}
