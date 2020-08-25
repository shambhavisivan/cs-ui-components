import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';
import PreviewBacklogList from '../PreviewBacklogList';

import {CSCustomSelect} from '@cloudsense/cs-ui-components';

class CSCustomSelectPreview extends React.Component {
	getDoc() {

		const json = {
			name: 'Custom Select',
			usage: 'Select element presents a menu of options.',
			examples: [
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							string: '',
							component:
								<CSCustomSelect label="Choose letter" id="letter" optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							string: '',
							component:
								<CSCustomSelect label="Choose color" id="color" optionsList={['Red', 'Blue', 'Green']} />
						}
					]
				},
				{
					propName: 'labelHidden',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSCustomSelect label="Choose color" id="color" optionsList={['Red', 'Blue', 'Green']} labelHidden/>
						}
					]
				},
				{
					propName: 'labelTitle',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSCustomSelect label="Choose color" id="color" optionsList={['Red', 'Blue', 'Green']} labelTitle/>
						}
					]
				},
				{
					propName: 'borderType',
					variations: [
						{
							variationName: ['square'],
							quickLink: 'square',
							string: '',
							component:
								<CSCustomSelect label="Choose letter" borderType="square" optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							string: '',
							component:
								<CSCustomSelect label="Choose letter" helpText="Help text example" tooltipPosition="bottom-right" optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'tooltipPosition',
					variations: [
						{
							variationName: ['top-right'],
							quickLink: 'top-right',
							string: '',
							component:
								<CSCustomSelect label="Choose letter" helpText="Help text example" tooltipPosition="top-right" optionsList={['A', 'B', 'C']} />
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							string: '',
							component:
								<CSCustomSelect label="Choose letter" helpText="Help text example" tooltipPosition="top-left" optionsList={['A', 'B', 'C']} />
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							string: '',
							component:
								<CSCustomSelect label="Choose letter" helpText="Help text example" tooltipPosition="bottom-right" optionsList={['A', 'B', 'C']} />
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							string: '',
							component:
								<CSCustomSelect label="Choose letter" helpText="Help text example" tooltipPosition="bottom-left" optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'disabled',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSCustomSelect label="Choose letter" disabled optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'hidden',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSCustomSelect label="Choose letter" hidden optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'required',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSCustomSelect label="Choose letter" id="number" required optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'error',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
								<CSCustomSelect label="Choose letter" error optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationText: ['error="true"'],
							string: '',
							component:
								<CSCustomSelect label="Choose letter" error errorMessage="Term not found" optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							string: '',
							component:
								<CSCustomSelect label="Choose letter" optionsList={['A', 'B', 'C']} title="This is a title"/>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							string: '',
							component:
								<CSCustomSelect label="Choose letter" className="custom-class" optionsList={['A', 'B', 'C']} />
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'borderType',
					description: 'Select border type',
					options: [
						'round',
						'square'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'error',
					description: 'Error state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'errorMessage',
					description: 'Error text message'
				},
				{
					propertyName: 'helpText',
					description: 'Select help text for tooltip display'
				},
				{
					propertyName: 'hidden',
					description: 'Hidden state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'id',
					description: 'Select id value'
				},
				{
					propertyName: 'label',
					description: 'Select label text to display'
				},
				{
					propertyName: 'labelHidden',
					description: 'Logic for visibility of the label',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'labelTitle',
					description: 'Logic for label title attribute',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'required',
					description: 'Required state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'title',
					description: 'Title to display'
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Select tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				}
			],
			backlog: [
				{
					backlogName: 'Open dropdown on focus',
					description: 'When focus is moved to input element ul should open with first list item focused',
					obstacles: 'Tried to implement using refs and this will work but the problem is that this will happen on onClick event also. Input loses focus which prevents user from searching'

				},
				{
					backlogName: 'Close dropdown on click outside components',
					description: 'Dropdown should close if user clicks outside of the component',
					obstacles: 'For some reason using refs will not work here.'
				},
				{
					backlogName: 'Navigation through list items using arrow keys',
					description: 'All items should be accessible with up/down arrow keys',
					obstacles: 'Created the list of refs of all list items, but for some reason focus is not changing'
				},
				{
					backlogName: 'Change focus/hover on list items',
					description: 'Color setting for icons is doubled in all places with both sc and sf mixins',
					obstacles: 'This needs a new design'
				},
				{
					backlogName: 'Close dropdown on Esc keypress',
					description: 'Dropdown should close on Esc keypress',
					obstacles: ''
				}
			]
		};

		for (const example of json.examples) {
			for (const variation of example.variations) {
				(variation as any).string = jsxToString(variation.component);
			}
		}

		return json;
	}

	render() {
		const component = this.getDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component]} />
					<PreviewBacklogList backlog={component.backlog} />
				</div>
				<div className="prop-sidebar">
					<h3>Quick Links</h3>
					<PreviewLinks component={component} />
				</div>
			</>
		);
	}
}

export default CSCustomSelectPreview;
