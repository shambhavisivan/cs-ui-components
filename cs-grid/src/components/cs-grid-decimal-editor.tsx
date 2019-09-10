import { CSGridCellEditorProps } from '../interfaces/cs-grid-base-interfaces';
import { CSGridNumberEditor } from './cs-grid-number-editor';

/**
 * A cell editor for editing a localised decimal.
 */
export class CSGridDecimalEditor extends CSGridNumberEditor<
	CSGridCellEditorProps<string | number>
> {
	constructor(props: CSGridCellEditorProps<string | number>) {
		super(props);

		this.numberFormat = new Intl.NumberFormat(this.props.userInfo.userLocale, {
			maximumFractionDigits: 20
		});
		this.numberFormatType = 'Decimal';
	}
}
