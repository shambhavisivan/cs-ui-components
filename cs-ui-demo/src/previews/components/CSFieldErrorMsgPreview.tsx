import React from 'react';
import { CSFieldErrorMsg } from '@cloudsense/cs-ui-components';

import Preview from '../Preview';

class CSFieldErrorMsgPreview extends React.Component {
	getDoc = () => ({
		name: 'Field Error Message',
		usage: 'Field Error Message renders error messages on form elements.',
		accessible: 'yes',
		components: [
			{
				name: 'CSFieldErrorMsg',
				examples: [
					{
						propName: 'message',
						variations: [
							{
								primaryVariants: 'message="text"',
								quickLink: 'string',
								component: <CSFieldErrorMsg message="Error message." />,
								code: '<CSFieldErrorMsg message="Error message." />'
							}, {
								primaryVariants: 'message={[...]}',
								quickLink: 'Array<string>',
								component: <CSFieldErrorMsg
									message={[
										'Error message 1.',
										'Error message 2.',
										'Error message 3.'
									]}
								/>,
								code: `<CSFieldErrorMsg
									message={[
										'Error message 1.',
										'Error message 2.',
										'Error message 3.'
									]}
								/>`
							}
						]
					}, {
						propName: 'id | class',
						variations: [
							{
								primaryVariants: [
									'id="custom-id"',
									'className="custom-class"'
								],
								component: <CSFieldErrorMsg
									message="Error message."
									id="custom-id"
									className="custom-br-mint"
								/>,
								code: `<CSFieldErrorMsg
									message="Error message."
									id="custom-id"
									className="custom-br-mint"
								/>`
							}
						]
					}
				],
				properties: [
					{
						name: 'className',
						types: ['string'],
						description: 'Apply custom CSS classes to the error message.'
					}, {
						name: 'id',
						types: ['string'],
						description: 'Set the ID for the dropdown.'
					}, {
						name: 'message',
						required: true,
						customTypes: [{
							name: 'CSFieldErrorMsgType',
							types: ['string', 'Array<string>']
						}],
						description: 'Set the error message text'
					}, {
						name: '[key: string]',
						types: ['any'],
						description: 'Spreads the rest of the props to the field error message span tag.'
					}
				]
			}
		],
		accessibility: {
			criterionList: [
				'1.4.4'
			],
			requirements: {
				styling: [
					'Color contrast ratio > 4.5'
				]
			}
		}
	})

	render = () => <Preview {...this.getDoc()} />;
}

export default CSFieldErrorMsgPreview;
