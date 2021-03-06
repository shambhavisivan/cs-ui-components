export default {
	name: 'CSFormCustomModalFooter',
	type: 'attributes',
	data: [
		{
			name: 'footerContent',
			types: 'ReactElement',
			description: 'Set custom content to the modal footer.'
		}, {
			name: 'bodyFactory',
			types: '(data: CSFormData, closeModal: () => any) => Promise<React.ReactElement>',
			description: `Set async custom content to modal footer.
				Handler will fire when the modal opens and return a promise with the custom React element which can
				consume CSForm data and has the ability to close the modal in a desired manner by calling the closeModal() method.`
		}, {
			name: 'align',
			customTypes: {
				name: 'CSModalFooterAlign',
				types: [
					`'right'`,
					`'center'`,
					`'left'`
				]
			},
			default: `'right'`,
			description: 'Align the modal footer buttons.'
		}, {
			name: 'id',
			types: 'string',
			description: 'Set the ID for the modal footer.'
		}, {
			name: 'className',
			types: 'string',
			description: 'Apply custom CSS classes to the modal footer.'
		}, {
			name: '[key: string]',
			types: 'any',
			description: 'Spreads the rest of the props to the footer tag.'
		}
	]
};
