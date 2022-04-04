import React from 'react';
import * as CSD from '../../../../demo-components';

export default {
	customContent: (
		<CSD.Section>
			<CSD.Text>
				CSTree is accessible, where accessibility conformance is settled with a component structure,
				aria attributes and keyboard support.
			</CSD.Text>
			<CSD.Text>
				<b>Keyboard support</b> is present with a variety of functions added to belonging buttons to ensure good user experience and smooth behaviour.
			</CSD.Text>
			<CSD.Text>
				`ArrowDown` and `ArrowUp` will move through tree items. If the selection is on the last item, `ArrowDown` will move it to the first item,
				and vice versa for `ArrowUp` if the selection is on first item.
				If an item is collapsible, `ArrowLeft` will collapse it, whilst `ArrowRight` will expand it.
			</CSD.Text>
		</CSD.Section>
	),
	criterionList: [
		'1.3.1',
		'1.4.1',
		'2.1.1',
		'2.1.2',
		'2.4.3',
		'2.4.7',
		'2.5.3',
		'3.2.1',
		'3.2.2',
		'3.3.1',
		'3.3.2',
		'4.1.2'
	],
	requirements: {
		structure: [
			'`<ul>` - tree root element, allows screen reader tree navigation and count of `<li>` items',
			'`<li>` - tree item element, allows screen reader tree navigation'
		],
		attributes: [
			'`aria-checked` - true when tree item is selected',
			'`aria-expanded` - true on item group when group is expanded and on toggle button',
			'`aria-level` - Defines the hierarchical level of an element within a structure. Levels increase with depth.',
			'`role="tree"` - set on root element',
			'`role="group"` - set on group `ul` - enables enumeration of group items',
			'`role="treeitem"` - set on `<li>`'
		],
		keyboardOperability: [
			'Tree items focus enabled by `tabindex="0"`',
			'`Enter` - select item if item is selectable',
			'`Up` - move up through the tree',
			'`Down` - move down through the tree',
			'`Right` - expand group',
			'`Left` - collapse group'
		]
	}
};
