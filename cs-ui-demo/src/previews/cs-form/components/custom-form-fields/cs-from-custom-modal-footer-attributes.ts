export default {
	name: 'CSFormCustomModalFooter',
	type: 'attributes',
	data: [
		{
			name: 'footerContent',
			types: 'ReactElement',
			description: 'Set custom content to modal footer.'
		}, {
			name: 'bodyFactory',
			types: '(data: CSFormData, closeModal: () => any) => Promise<React.ReactElement>',
			description: `Set async custom content to modal footer.
				Handler will fire when modal opens and return a promise with custom React element which can
				consume CSForm data and has ability to close modal in desired manner by calling closeModal() method.`
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
