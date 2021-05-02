import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSFieldErrorMsg } from '@cloudsense/cs-ui-components';

class CSFieldErrorMsgPreview extends React.Component {
	getFieldErrorMessageDoc = () => ({
		name: 'Field Error Message',
		usage: 'Field Error Message renders error message on form elements.',
		accessible: 'yes',
		previews: [
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
					}
				]
			}
		],
		properties: [
			{
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
		],
		accessibility: [
			{
				criterionList: [
					'1.4.4'
				],
				requirements: [
					{
						styling: [
							'Color contrast ratio > 4.5'
						]
					}
				]
			}
		]
	})

	render() {
		const component = this.getFieldErrorMessageDoc();

		return (
			<>
				<div className="preview-section-wrapper divider-preview">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties {...component} />
					<PreviewTable components={[component]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSFieldErrorMsgPreview;
