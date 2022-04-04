import React from 'react';
import * as CSD from '../../../../demo-components';

export default {
	customContent: (
		<CSD.Section>
			<CSD.Text>
				CSTransfer is accessible, where accessibility conformance is settled with a component structure,
				aria attributes and keyboard support.
			</CSD.Text>
			<CSD.Text>
				<b>Keyboard support</b> is present with a variety of functions added to belonging buttons to
				ensure good user experience and smooth behaviour.
			</CSD.Text>
			<CSD.Text>
				After you focus CSTransfer, you will have focused the first item in the source list.
				You can use `ArrowDown` and `ArrowUp` to navigate through the list.
				After you have selected one of the items with `Enter` or `Space`, selection button gets enabled and you can
				move to it either through tab if you are at the end of the list,
				or by pressing `ArrowRight`. Pressing `ArrowRight` again will move focus to the target list.
			</CSD.Text>
			<CSD.Text>
				Same works with `ArrowLeft` if you are in the target list.
			</CSD.Text>
		</CSD.Section>
	),
	criteria: [
		'1.1.1',
		'2.1.1',
		'2.1.2',
		'2.1.4',
		'2.4.3',
		'2.4.7',
		'3.2.1',
		'3.3.1',
		'4.1.2'
	],
	requirements: {
		structure: [
			'`<ul>`',
			'`<li>`',
			'`<CSButton>` - selection buttons for moving items between lists'
		],
		attributes: [
			'`aria-describedby` - list is associated with belonging source and target labels',
			'`aria-selected` - true on items that are selected',
			'`role="listbox"` - list',
			'`role="option"` - list item'
		],
		keyboardOperability: [
			'`Left` - move left to the selection buttons or to the source list',
			'`Right` - move right to the selection buttons or to the target list',
			'`Up` - move up through the list or selection buttons',
			'`Down` - move down through the list or selection buttons'
		]
	}
};
