import { CSGridCellEditorProps, DecimalProps } from '../interfaces/cs-grid-cell-props';
import { getIntl } from '../polyfill/cs-grid-intl';
import { CSGridNumberEditor } from './cs-grid-number-editor';

/**
 * A cell editor for editing a localised decimal.
 */
export class CSGridDecimalEditor extends CSGridNumberEditor<
	CSGridCellEditorProps<string | number> & DecimalProps
> {
	constructor(props: CSGridCellEditorProps<string | number> & DecimalProps) {
		super(props);
		this.numberFormatType = 'Decimal';
	}

	getNumberFormat() {
		return getIntl(this.props.userInfo.userLocale).NumberFormat(
			this.props.userInfo.userLocale,
			{
				maximumFractionDigits: 20
			}
		);
	}
}
