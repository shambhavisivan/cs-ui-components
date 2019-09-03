import { CSGridCellRendererProps } from '../models/cs-grid-base-interfaces';
import CSGridNumberRenderer from './cs-grid-number-renderer';

export interface CSGridDecimalRendererProps extends CSGridCellRendererProps<number> {
	noOfDecimalDigits: number;
}

export default class CSGridDecimalRenderer extends CSGridNumberRenderer<
	CSGridDecimalRendererProps
> {
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
