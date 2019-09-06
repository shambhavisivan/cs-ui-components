import { CSGridLookupEditor, CSGridLookupEditorProps } from './cs-grid-lookup-editor';

/**
 * A cell editor that displays lookup results in the form of an ag-grid table with selectable rows.
 * Multiple rows can be selected.
 */
export class CSGridMultiSelectLookupEditor extends CSGridLookupEditor {
	constructor(props: CSGridLookupEditorProps) {
		super(props);
		this.multiSelect = true;
	}
}
