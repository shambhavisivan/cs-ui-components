import { CSGridCellEditorProps, LookupProps } from '../interfaces/cs-grid-cell-props';
import { CSGridLookupEditor } from './cs-grid-lookup-editor';

/**
 * A cell editor that displays lookup results in the form of an ag-grid table with selectable rows.
 * Multiple rows can be selected.
 */
export class CSGridMultiSelectLookupEditor extends CSGridLookupEditor {
	constructor(
		props: CSGridCellEditorProps<Array<Record<string, string>> | Record<string, string>> &
			LookupProps
	) {
		super(props);
		this.multiSelect = true;
	}
}
