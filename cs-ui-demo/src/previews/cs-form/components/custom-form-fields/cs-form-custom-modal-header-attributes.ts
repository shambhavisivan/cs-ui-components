export default {
	name: 'CSFormCustomModalHeader',
	type: 'attributes',
	data: [
		{
			name: 'headerContent',
			types: 'ReactElement',
			description: 'Set custom content to the modal header.'
		}, {
			name: 'headerFactory',
			types: '(data: CSFormData) => Promise<React.ReactElement>',
			description: `Set async custom content to modal header.
				Handler will fire when the modal opens and return a promise with the custom React element which can
				consume CSForm data.`
		}, {
			name: 'subtitle',
			types: 'string',
			description: 'Set a subtitle for the modal header.'
		}, {
			name: 'title',
			types: 'string',
			description: 'Set a title for the modal header.'
		}, {
			name: 'id',
			types: 'string',
			description: 'Set the ID for the modal header.'
		}, {
			name: 'className',
			types: 'string',
			description: 'Apply custom CSS classes to the modal header.'
		}, {
			name: '[key: string]',
			types: 'any',
			description: 'Spreads the rest of the props to the header tag.'
		}, {
			name: 'titleId',
			required: 'CSModal',
			types: 'string',
			description: 'Establish a relationship between the modal title and the dialog wrapper.'
		}
	]
};
