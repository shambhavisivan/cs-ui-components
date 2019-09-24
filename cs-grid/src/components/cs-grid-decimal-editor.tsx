import { CSGridCellEditorProps } from '../interfaces/cs-grid-base-interfaces';
import { getIntl } from '../polyfill/cs-grid-intl';
import { CSGridNumberEditor } from './cs-grid-number-editor';

/**
 * A cell editor for editing a localised decimal.
 */
export class CSGridDecimalEditor extends CSGridNumberEditor<
	CSGridCellEditorProps<string | number>
> {
	constructor(props: CSGridCellEditorProps<string | number>) {
		super(props);
		this.numberFormatType = 'Decimal';
	}

	async getNumberFormat(): Promise<any> {
		return (await getIntl(this.props.userInfo.userLocale)).NumberFormat(
			this.props.userInfo.userLocale,
			{
				maximumFractionDigits: 20
			}
		);
	}
}
