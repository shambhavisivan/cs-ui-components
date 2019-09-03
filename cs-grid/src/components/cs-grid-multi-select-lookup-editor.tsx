import CSGridLookupEditor, { CSGridLookupEditorProps } from './cs-grid-lookup-editor';

export default class CSGridMultiSelectLookupEditor extends CSGridLookupEditor {
	constructor(props: CSGridLookupEditorProps) {
		super(props);
		this.multiSelect = true;
	}
}
