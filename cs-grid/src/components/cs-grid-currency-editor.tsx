import { CSGridCellEditorProps } from '../interfaces/cs-grid-base-interfaces';
import { getIntl } from '../polyfill/cs-grid-intl';
import { CSGridNumberEditor } from './cs-grid-number-editor';

/**
 * A cell editor for editing a localised currency.
 */
export class CSGridCurrencyEditor extends CSGridNumberEditor<
	CSGridCellEditorProps<string | number>
> {
	constructor(props: CSGridCellEditorProps<string | number>) {
		super(props);

		this.numberFormatType = 'Currency';
	}

	getNumberFormat(): any {
		return getIntl(this.props.userInfo.userLocale).NumberFormat(
			this.props.userInfo.userLocale,
			{
				currency: this.props.userInfo.currencyCode,
				style: 'currency'
			}
		);
	}
}
