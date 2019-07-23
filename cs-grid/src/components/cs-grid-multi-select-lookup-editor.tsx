import CSGridLookupEditor, { CSGridLookupEditorProps } from './cs-grid-lookup-editor';

export class CSGridMultiSelectLookupEditor extends CSGridLookupEditor {
	constructor(props: CSGridLookupEditorProps) {
		super(props);
		this.multiSelect = true;
	}
}
