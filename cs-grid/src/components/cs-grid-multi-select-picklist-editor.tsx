import CSGridPicklistEditor, { CSGridPicklistEditorProps } from './cs-grid-picklist-editor';

export class CSGridMultiSelectPicklistEditor extends CSGridPicklistEditor {
	constructor(props: CSGridPicklistEditorProps) {
		super(props);
		this.multiSelect = true;
	}
}
