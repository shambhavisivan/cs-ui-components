import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import {CSInputSearch} from '@cloudsense/cs-ui-components';

class CSInputSearchPreview extends React.Component {
	getDoc() {
		let count = 0;

		const onChangeHandler = () => alert('Input search changed!');
		const onKeyDownHandler = () => alert('Key is pressed!');
		const onBlurHandler = () => alert('Focus changed!');
		const onFocusHandler = () => {
			if (count === 1) {
				count = 0;
				return false;
			}
			count++;
			alert('Input is focused!');
		};
		const onClearSearchHandler = () => alert('Input search cleared!');

		const json = {
			name: 'Input Search',
			usage: 'Search input is used for search value entry.',
			accessible: 'partially',
			examples: [
				{
					propName: 'value',
					customText: '',
					variations: [
						{
							string: '',
							component:
									<CSInputSearch label="Type here:" value="Value" />
						}
					]
				},
				{
					propName: 'placeholder',
					variations: [
						{
							string: '',
							component:
									<CSInputSearch label="Type here:" placeholder="Search name" />
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							string: '',
							component:
									<CSInputSearch label="Type here:" id="search" />
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							string: '',
							component:
									<CSInputSearch label="Type here:"  />
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
								<CSInputSearch label="Type here:" labelHidden />
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
								<CSInputSearch label="Type here:" labelTitle />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							string: '',
							component:
									<CSInputSearch label="Type here:" helpText="Help text example" />
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
									<CSInputSearch label="Type here:" helpText="Help text example" tooltipPosition="top-right" />
						},
						{
							variationName: ['top-left'],
							quickLink: 'top-left',
							string: '',
							component:
									<CSInputSearch label="Type here:" helpText="Help text example" tooltipPosition="top-left" />
						},
						{
							variationName: ['bottom-right'],
							quickLink: 'bottom-right',
							string: '',
							component:
									<CSInputSearch label="Type here:" helpText="Help text example" tooltipPosition="bottom-right" />
						},
						{
							variationName: ['bottom-left'],
							quickLink: 'bottom-left',
							string: '',
							component:
									<CSInputSearch label="Type here:" helpText="Help text example" tooltipPosition="bottom-left" />
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
									<CSInputSearch label="Type here:" disabled />
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
									<CSInputSearch label="Type here:" hidden />
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
									<CSInputSearch label="Type here:" required />
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
									<CSInputSearch label="Type here:" error />
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
								<CSInputSearch label="Enter value:" error errorMessage="Error message!"/>
						}
					]
				},
				{
					propName: 'iconPosition',
					variations: [
						{
							variationName: ['right'],
							quickLink: 'right',
							string: '',
							component:
								<CSInputSearch label="Type here:" iconPosition="right" />
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
									<CSInputSearch label="Type here:" borderType="square" />
						}
					]
				},
				{
					propName: 'width',
					variations: [
						{
							variationName: ['50%'],
							quickLink: '50%',
							string: '',
							component:
									<CSInputSearch label="Type here:" width="50%" />
						}
					]
				},
				{
					propName: 'onBlur',
					customText: '',
					variations: [
						{
							string: '',
							component:
								<CSInputSearch label="Type here:" onBlur={onBlurHandler} />
						}
					]
				},

				{
					propName: 'onChange',
					variations: [
						{
							string: '',
							component:
									<CSInputSearch label="Type here:" onChange={onChangeHandler} />
						}
					]
				},
				{
					propName: 'onFocus',
					customText: '',
					variations: [
						{
							string: '',
							component:
								<CSInputSearch label="Type here:" onFocus={onFocusHandler} />
						}
					]
				},
				{
					propName: 'onKeyDown',
					customText: '',
					variations: [
						{
							string: '',
							component:
								<CSInputSearch label="Type here:" onKeyDown={onKeyDownHandler} />
						}
					]
				},
				{
					propName: 'onClearSearch',
					customText: 'Provides option to call a function after search cleared to provide extra functionality',
					variations: [
						{
							string: '',
							component:
								<CSInputSearch label="Type here and clear search:" onClearSearch={onClearSearchHandler} />
						}
					]
				},
				{
					propName: 'autoFocus',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component:
									<CSInputSearch label="Type here:" autoFocus />
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							string: '',
							component:
								<CSInputSearch label="Type here:" title="This is a title" />
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
									<CSInputSearch label="Type here:" className="custom-class" />
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'autoFocus',
					description: 'Auto focus input',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'borderType',
					description: 'Input border type',
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
					description: 'Error message text'
				},
				{
					propertyName: 'helpText',
					description: 'Input help text for tooltip display'
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
					propertyName: 'iconPosition',
					description: 'Input search icon position',
					options: [
						'left',
						'right'
					]
				},
				{
					propertyName: 'id',
					description: 'Input search id value'
				},
				{
					propertyName: 'label',
					description: 'Input label text to display'
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
					propertyName: 'onBlur',
					description: 'Logic for onBlur event'
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event'
				},
				{
					propertyName: 'onFocus',
					description: 'Logic for onFocus event'
				},
				{
					propertyName: 'onKeyDown',
					description: 'Logic for onKeyDown event'
				},
				{
					propertyName: 'onClearSearch',
					description: 'Logic for onClearSearch event'
				},
				{
					propertyName: 'placeholder',
					description: 'Input search placeholder to display'
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
					description: 'Input tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				},
				{
					propertyName: 'value',
					description: 'Input search value to display'
				},
				{
					propertyName: 'width',
					description: 'Width of the input search',
					options: [
						'e.g.',
						'50%',
						'30rem',
						'25px'
					]
				}
			],
			accessibility: [
				{
					criterionList: [
						'1.3.1',
						'1.4.1',
						'1.4.4',
						'2.1.1',
						'2.1.2',
						'2.4.7',
						'2.5.3',
						'3.2.1',
						'3.2.2',
						'3.3.1',
						'3.3.2',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'HTML5 <Button> Element used',
								'Icon as a child element'
							],
							properties: [
								'aria-label',
								'aria-labelledby - associate field with label',
								'role'
							],
							styling: [
								'Focus state styles'
							],
							keyboardOperability: [
								'Should be or hiyaaa'
							]
						}
					]
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
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<div className="prop-sidebar">
					<h3>Quick Links</h3>
					<PreviewLinks component={component} />
				</div>
			</>
		);
	}
}

export default CSInputSearchPreview;
