import { CSGridCellEditorProps } from '../models/cs-grid-base-interfaces';
import NumberFormat from '../models/number-format.enum';
import CSGridNumberEditor from './cs-grid-number-editor';

/**
 * A cell editor for editing a localised decimal.
 */
export default class CSGridDecimalEditor extends CSGridNumberEditor<
	CSGridCellEditorProps<string | number>
> {
	constructor(props: CSGridCellEditorProps<string | number>) {
		super(props);

		this.numberFormat = new Intl.NumberFormat(this.props.userInfo.userLocale, {
			maximumFractionDigits: 20
		});
		this.numberFormatType = NumberFormat.Decimal;
	}
}
