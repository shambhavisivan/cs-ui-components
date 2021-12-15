export default {
	criterionList: [
		'1.4.4',
		'2.1.1',
		'2.1.2',
		'4.1.2'
	],
	requirements: {
		structure: [
			'`<table>` - root element',
			'`<thead>` - header wrapper element',
			'`<th>` - header cell element',
			'`<tbody>` - body/content wrapper element',
			'`<tr>` - row wrapper element',
			'`<td>` - body/content cell element'
		],
		attributes: [
			'`scope="col"` - applied to all table header cells',
			'`scope="row"` - applied to first cell of a row without a control, dropdown or checkbox'
		],
		styling: [
			'Color contrast ratio > 4.5'
		]
	}
};
