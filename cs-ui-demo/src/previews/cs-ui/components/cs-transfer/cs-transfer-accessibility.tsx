export default {
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
			'`<CSButton>` - move selection buttons'
		],
		attributes: [
			'`aria-describedby` - list is associated with belonging label',
			'`aria-selected`',
			'`role="listbox"`',
			'`role="option"`'
		],
		keyboardOperability: [
			'Proper focus management and keyboard operability ensured by structure and `<CSButton>`',
			'`Left` - move left to selection buttons or source list',
			'`Right` - move right to the selection buttons or target list',
			'`Up` - move up through the list or selection buttons',
			'`Down` - move down through the list or selection buttons'
		]
	}
};
