export default {
	name: 'CSFormCustomModalBody',
	type: 'attributes',
	data: [
		{
			name: 'bodyContent',
			types: 'ReactElement',
			description: 'Set custom content to the modal body.'
		}, {
			name: 'bodyFactory',
			types: '(data: CSFormData, closeModal: () => any) => Promise<React.ReactElement>',
			description: `Set async custom content to modal body.
				Handler will fire when the modal opens and return a promise with a custom React element which can
				consume CSForm data and has the ability to close the modal in a desired manner by calling the closeModal() method.`
		}, {
			name: 'minHeight',
			types: 'string',
			default: `'0'`,
			description: 'Set custom min-height for the modal body. (eg. 100px, 2rem, 50vh, etc.)'
		}, {
			name: 'padding',
			types: 'string',
			default: `'1rem'`,
			description: 'Set custom padding for the modal body. (eg. 0, 10px, 2rem, etc.)'
		}, {
			name: 'id',
			types: 'string',
			description: 'Set the ID for the modal body.'
		}, {
			name: 'className',
			types: 'string',
			description: 'Apply custom CSS classes to the modal body wrapper.'
		}, {
			name: '[key: string]',
			types: 'any',
			description: 'Spreads the rest of the props to the modal body div.'
		}
	]
};
