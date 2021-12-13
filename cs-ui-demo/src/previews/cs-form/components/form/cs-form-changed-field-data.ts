export default {
	name: 'CSFormChangedFieldData',
	type: 'attributes',
	data: [
		{
			name: 'sectionKey',
			types: 'string',
			description: 'Key of the section which contains changed form field.'
		}, {
			name: 'name',
			types: 'string',
			description: 'Unique name of the changed form field.'
		}, {
			name: 'value',
			types: 'any',
			description: 'New value returned when blur or change events are triggered.'
		}, {
			name: 'errorMessage',
			types: ['Array<string>', 'string'],
			description: 'Error message returned after validation triggered by blur or change events.'
		}
	]
};
