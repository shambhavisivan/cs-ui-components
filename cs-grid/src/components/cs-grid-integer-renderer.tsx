import { CSGridCellRendererProps } from '../models/cs-grid-base-interfaces';
import CSGridNumberRenderer from './cs-grid-number-renderer';

export default class CSGridIntegerRenderer extends CSGridNumberRenderer<
	CSGridCellRendererProps<number>
> {
	constructor(props: CSGridCellRendererProps<number>) {
		super(props);
		this.numberFormat = new Intl.NumberFormat(this.props.userInfo.userLocale, {
			maximumFractionDigits: 0,
			minimumFractionDigits: 0
		});
	}
}
