import { CSGridCellRendererProps } from '../interfaces/cs-grid-base-interfaces';
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

		const noOfDecimalDigits =
			props.noOfDecimalDigits !== undefined ? props.noOfDecimalDigits : 5;

		this.numberFormat = new Intl.NumberFormat(props.userInfo.userLocale, {
			maximumFractionDigits: noOfDecimalDigits,
			minimumFractionDigits: noOfDecimalDigits
		});
	}
}
