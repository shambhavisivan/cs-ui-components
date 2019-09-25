import { CSGridCellRendererProps } from '../interfaces/cs-grid-base-interfaces';
import { getIntl } from '../polyfill/cs-grid-intl';
import { CSGridNumberRenderer } from './cs-grid-number-renderer';

/**
 * noOfDecimalDigits - used to format the value shown in the cell to the given number of decimal places.
 */
export interface CSGridDecimalRendererProps extends CSGridCellRendererProps<number> {
	noOfDecimalDigits: number;
}

/**
 * A cell renderer for displaying a localised decimal number.
 */
export class CSGridDecimalRenderer extends CSGridNumberRenderer<CSGridDecimalRendererProps> {
	constructor(props: CSGridDecimalRendererProps) {
		super(props);
	}

	getNumberFormat(): any {
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
