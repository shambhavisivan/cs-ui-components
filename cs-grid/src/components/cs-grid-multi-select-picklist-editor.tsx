import {
	CSGridCellEditorProps,
	PicklistOption,
	PicklistProps
} from '../interfaces/cs-grid-cell-props';
import { CSGridPicklistEditor } from './cs-grid-picklist-editor';
type PicklistCellValueType = PicklistOption | Array<PicklistOption>;

/**
 * A cell editor that displays a list of selectable options.
 * Multiple rows can be selected.
 */
export class CSGridMultiSelectPicklistEditor extends CSGridPicklistEditor {
	constructor(props: CSGridCellEditorProps<PicklistCellValueType> & PicklistProps) {
		super(props);
		this.multiSelect = true;
	}
}
