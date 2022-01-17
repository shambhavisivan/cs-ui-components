export default {
	name: 'CSFormCustomModalField',
	type: 'attribute',
	data: [
		{
			name: 'modalButton',
			customTypes: {
				name: 'CSFormModalButton',
				types: 'See CSFormModalButton Attributes'
			},
			description: 'Define modal button which initiates rendering of custom modal.'
		}, {
			name: 'modal',
			customTypes: {
				name: 'CSFormCustomModalProps',
				types: 'See CSFormCustomModal Attributes'
			},
			description: 'Define modal, its header, body and footer with various properites.'
		}
	]
};
