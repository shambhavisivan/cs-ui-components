export default {
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
			'`<ul>` - tree, allows screen reader tree navigation and count of `<li>` items',
			'`<li>` - tree item, allows screen reader tree navigation'
		],
		attributes: [
			'`aria-checked` - true when tree item is selected',
			'`aria-expanded` - true on item group when group is expanded and on toggle button',
			'`aria-level` - Defines the hierarchical level of an element within a structure. Levels increase with depth.',
			'`role="tree"` - set on top `ul`',
			'`role="group"` - set on group `ul` - enables enumeration of group items',
			'`role="treeitem"` - set on `<li>`'
		],
		keyboardOperability: [
			'Tree items focus enabled by `tabindex="0"`',
			'`Enter` - select item',
			'`Up` - move up through the tree',
			'`Down` - move down through the tree',
			'`Right` - expand group',
			'`Left` - collapse group'
		]
	}
};
