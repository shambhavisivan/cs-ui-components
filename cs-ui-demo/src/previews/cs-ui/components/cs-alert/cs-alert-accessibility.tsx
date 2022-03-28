export default {
	criteria: [
		'1.4.4',
		'2.1.1',
		'2.1.2',
		'4.1.2'
	],
	requirements: {
		structure: [
			'`<h4>` - allows screen reader heading search'
		],
		attributes: [
			'`role="alert/status"` - depending on alert variant'
		],
		keyboardOperability: [
			'Close button is a child `<button>` - allows keyboard focus'
		]
	}
};
