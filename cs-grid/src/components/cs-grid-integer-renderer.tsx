import { CSGridCellRendererProps } from '../models/cs-grid-base-interfaces';
import CSGridNumberRenderer from './cs-grid-number-renderer';

/**
 * A cell renderer for displaying a localised integer.
 */
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
