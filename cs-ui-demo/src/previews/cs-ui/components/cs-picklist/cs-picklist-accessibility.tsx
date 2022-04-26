import React from 'react';
import * as CSD from '../../../../demo-components';

export default {
	customContent: (
		<CSD.Section>
			<CSD.Text>
				CSPicklist is fully accessible, where accessibility conformance is settled with a number of things
				like component structure, aria attributes and keyboard support.
			</CSD.Text>
			<CSD.Text>
				The component is built with elements wrapped around a native HTML input element, which is the first focusable part of the component.
				This means once the field is focused, screen readers will read semantic information present in native HTML and belonging aria attributes.
				Focus styles are visible both on the field and the selected dropdown option.
			</CSD.Text>
			<CSD.Text>
				The input field is defined as a `type="text"` to not trigger display of native select dropdown menu as we have a custom one,
				however the role is overridden to the select one with `role="listbox"`.
			</CSD.Text>
			<CSD.Text>
				`aria-expanded` provides information whether the dropdown is expanded or collapsed.
				`aria-required` and `aria-invalid` give semantic information when the field is required and invalid respectively.
				`aria-multiselectable` is applied in a multiselect variant and gives semantic information that multi selection is possible.
				If the field is readonly, `aria-readonly` will be set.
				`for` attribute associates label with the input field.
			</CSD.Text>
			<CSD.Text>
				<b>Keyboard support</b> is present with a variety of functions added to belonging buttons to ensure good user experience and smooth behaviour.
			</CSD.Text>
			<CSD.Text>
				`Enter` will toggle display of the dropdown if the field is focused. `Escape` closes it in any situation.
				If the dropdown is open and any of the options is selected, `Enter` will select the current highlighted option.
				For the dropdown option selection you can use `ArrowUp` and `ArrowDown` buttons to move the current selection up or down.
				If the current option is last and `ArrowDown` is clicked, the selection will cycle to the first option in dropdown and vice versa.
				If the dropdown is collapsed, `ArrowDown` will open the dropdown as well.
				Using `Tab` or `Shift` + `Tab` to move away from the CSPicklist will close the dropdown if its opened.
				If there is a selected option, clear button is displayed and next focus after the field will go to the clear button.
			</CSD.Text>
		</CSD.Section>
	),
	criteria: [
		'1.3.1',
		'1.4.1',
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
			'`<input type="text">`'
		],
		attributes: [
			'`aria-expanded` - true when dropdown is expanded',
			'`aria-invalid` - true when there is an error',
			'`aria-required` - true when selecting an option is required',
			'`aria-multiselectable` - true if multi selection is possible',
			'`aria-readonly` - true when field is readonly',
			'`role="listbox` - override the input textbox role'
		],
		styling: [
			'Focus state styles'
		],
		keyboardOperability: [
			'`Enter` opens dropdown',
			'`Escape` closes dropdown',
			'`Enter` selects highlighted option if options in the dropdown are browsed',
			'`ArrowUp` moves dropdown selection up',
			'`ArrowDown` moves dropdown selection down'
		]
	}
};
