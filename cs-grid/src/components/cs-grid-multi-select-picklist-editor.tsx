import { CSGridCellEditorProps, PicklistProps } from '../interfaces/cs-grid-cell-props';
import { CSGridPicklistEditor } from './cs-grid-picklist-editor';

/**
 * A cell editor that displays a list of selectable options.
 * Multiple rows can be selected.
 */
export class CSGridMultiSelectPicklistEditor extends CSGridPicklistEditor {
	constructor(props: CSGridCellEditorProps<string | Array<string>> & PicklistProps) {
		super(props);
		this.multiSelect = true;
	}
}
