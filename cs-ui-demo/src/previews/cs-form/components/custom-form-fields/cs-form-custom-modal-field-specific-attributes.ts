export default {
	name: 'CSFormCustomModalField',
	type: 'attribute',
	data: [
		{
			name: 'modalButton',
			link: '/cs-form/custom-form-fields#custom-modal-field',
			customTypes: {
				name: 'CSFormModalButton',
				types: 'See CSFormModalButton Attributes'
			},
			description: 'Define the modal button which initiates the rendering of custom modal.'
		}, {
			name: 'modal',
			link: '/cs-form/custom-form-fields#custom-modal-field',
			customTypes: {
				name: 'CSFormCustomModalProps',
				types: 'See CSFormCustomModal Attributes'
			},
			description: 'Define the modal, its header, body and footer with various properites.'
		}
	]
};
