import { CSGridPicklistEditor, CSGridPicklistEditorProps } from './cs-grid-picklist-editor';

/**
 * A cell editor that displays a list of selectable options.
 * Multiple rows can be selected.
 */
export class CSGridMultiSelectPicklistEditor extends CSGridPicklistEditor {
	constructor(props: CSGridPicklistEditorProps) {
		super(props);
		this.multiSelect = true;
	}
}
