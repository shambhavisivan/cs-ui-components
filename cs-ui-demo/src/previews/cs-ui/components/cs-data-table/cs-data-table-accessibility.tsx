import React from 'react';
import * as CSD from '../../../../demo-components';

export default {
	customContent: (
		<CSD.Section>
			<CSD.Text>
				CSDataTable is accessible, where accessibility conformance is settled with a table structure, aria attributes, roles and custom keyboard support.
			</CSD.Text>
			<CSD.Text>
				<b>Keyboard support</b> is present with a variety of functions added to belonging keyboard buttons to ensure good user experience and smooth behaviour.
			</CSD.Text>
			<CSD.Text>
				`ArrowDown` and `ArrowUp` will move through table rows. If the selection is on the last row, `ArrowDown` will move it to the first row,
				and vice versa for `ArrowUp` if the selection is on first row.
				If a row is collapsible, `ArrowLeft` will collapse it, whilst `ArrowRight` will expand it.
			</CSD.Text>
			<CSD.Text>
				If `selectionType` is `row`, highlighting the row and pressing `Enter` will select the row.
			</CSD.Text>
			<CSD.Text>
				Accessible roles throughout the component make sure screen reader navigation and position announcement work well.
				You can see the roles below in a table.
			</CSD.Text>
			<CSD.Text>
				`aria-multiselectable` is applied to root element in a multiselect variant and gives semantic information that multi selection is possible.
			</CSD.Text>
			<CSD.Text>
				`aria-level` defines the hierarchical level of a row where root rows will have value of `1`.
				Nested rows are incremented.
			</CSD.Text>
			<CSD.Text>
				`aria-colindex` is set on cells and marks a column number. All the cells in particular column will have the same value.
			</CSD.Text>
			<CSD.Text>
				`aria-selected` will mark if row is selected. This works whether it is a whole row or a checkbox selection.
			</CSD.Text>
			<CSD.Text>
				If a row is simply `selectable`, which means it renders CSCheckbox components, there are two aria attributes set.
			</CSD.Text>
			<CSD.Text>
				`aria-checked` indicates the checked state which can be `true`, `false` and `mixed`, where the last one stands for indeterminate state.
			</CSD.Text>
		</CSD.Section>
	),
	criterionList: [
		'1.4.4',
		'2.1.1',
		'2.1.2',
		'4.1.2'
	],
	requirements: {
		structure: [
			'`role="grid"` - root element',
			'`role="columnheader"` - header cell element',
			'`role="rowgroup"` - body wrapper element',
			'`role="row"` - row wrapper element',
			'`role="gridcell"` - body cell element'
		],
		attributes: [
			'`aria-multiselectable` - true on root element if multi selection is possible',
			'`aria-selected` - true in row if row is selected',
			'`aria-level` - defines the hierarchical level of a row',
			'`aria-colindex` - defines an element\'s column index',
			'`aria-checked` - set on checkbox, indicates the checked state and supports `mixed` which stands for indeterminate state',
			'`aria-readonly` - set on checkbox, indicates that the element is not editable'
		],
		keyboardOperability: [
			'`ArrowUp` - move row selection up',
			'`ArrowDown` - move row selection down',
			'`ArrowRight` - expand row if the row can be expanded',
			'`ArrowLeft` - collapse row if the row can be collapsed',
			'`Enter` - select row if the row is whole-row selectable',
			'`Space` - select checkbox if the row is selectable'
		]
	}
};
