import React from 'react';
import * as CSD from '../../../../demo-components';

export default {
	customContent: (
		<CSD.Section>
			<CSD.Text>
				CSRadio is accessible, where accessibility conformance is settled with a component structure,
				aria attributes and keyboard support.
			</CSD.Text>
			<CSD.Text>
				<b>Keyboard support</b> is present with a variety of functions added to belonging buttons to ensure good user experience and smooth behaviour.
			</CSD.Text>
			<CSD.Text>
				`ArrowDown` and `ArrowUp` will move through radio options. If the selection is on the last item, `ArrowDown` will move it to the first item,
				and vice versa for `ArrowUp` if the selection is on first item.
			</CSD.Text>
			<CSD.Text>
				With pressing `Space` on an already focused radio button the button will be selected.
			</CSD.Text>
		</CSD.Section>
	),
	criterionList: [
		'1.3.1',
		'1.4.1',
		'1.4.4',
		'2.1.1',
		'2.1.2',
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
			'`<input type="radio">` - visually hidden',
			'`<span>` imitates radio with custom style',
			'`<input>` and `<span>` wrapped in `<label>` - allowing click on span to change input'
		],
		attributes: [
			'`aria-label` - description of radio group when label is hidden',
			'`aria-required` - true when selecting an option is required',
			'`aria-invalid` - true when there is an error',
			'`id` - needed to connect label with form element. If there is no id, autogenerated unique id is set',
			'`role="radio"` - implicit with input `<type="radio">`'
		],
		keyboardOperability: [
			'`<input type="radio">` OOTB focusable and supports `Space`'
		]
	}
};
