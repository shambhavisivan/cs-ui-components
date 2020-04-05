import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewBacklogList from '../PreviewBacklogList';
import PreviewLinks from '../PreviewLinks';

import {CSButton} from '@cloudsense/cs-ui-components';

class CSButtonPreview extends React.Component {
	getDoc() {
		const clickHandler = () => alert('Button is clicked!');

		const json = {
			name: 'Button',
			usage: 'Button provides a base UI for button actions',
			examples: [
				{
					propName: 'btnType and btnStyle',
					customText: '',
					variations: [
						{
							variationName: ['default', 'initial'],
							string: '',
							component: <CSButton iconName="activity" label="default initial"/>
						},
						{
							variationName: ['default', 'brand'],
							string: '',
							component: <CSButton btnStyle="brand" iconName="activity" label="default brand"/>
						},
						{
							variationName: ['default', 'outline'],
							string: '',
							component: <CSButton btnStyle="outline" iconName="activity" label="default outline"/>
						},
						{
							variationName: ['transparent', 'initial'],
							string: '',
							customClass: 'inverse-background',
							component: <div className="blue-background">
								<CSButton btnType="transparent" iconName="activity" label="transparent initial"/>
							</div>
						},
						{
							variationName: ['transparent', 'brand'],
							string: '',
							component: <CSButton btnType="transparent" btnStyle="brand" iconName="activity" label="transparent brand"/>
						},
						{
							variationName: ['transparent', 'outline'],
							string: '',
							customClass: 'inverse-background',
							component: <div className="blue-background">
								<CSButton btnType="transparent" btnStyle="outline" iconName="activity" label="transparent outline"/>
							</div>
						},
						{
							variationName: ['error', 'initial'],
							string: '',
							component: <CSButton btnType="error" iconName="activity" label="error initial"/>
						},
						{
							variationName: ['error', 'brand'],
							string: '',
							component: <CSButton btnType="error" btnStyle="brand" iconName="activity" label="error brand"/>
						},
						{
							variationName: ['error', 'outline'],
							string: '',
							component: <CSButton btnType="error" btnStyle="outline" iconName="activity" label="error outline"/>
						},
						{
							variationName: ['success', 'initial'],
							string: '',
							component: <CSButton btnType="success" iconName="activity" label="success initial"/>
						},
						{
							variationName: ['success', 'brand'],
							string: '',
							component: <CSButton btnType="success" btnStyle="brand" iconName="activity" label="success brand"/>
						},
						{
							variationName: ['success', 'outline'],
							string: '',
							component: <CSButton btnType="success" btnStyle="outline" iconName="activity" label="success outline"/>
						}
					]
				},
				{
					propName: 'size',
					customText: '',
					variations: [
						{
							variationName: ['large'],
							string: '',
							component: <CSButton size="large" iconName="activity" label="default large"/>
						},
						{
							variationName: ['small'],
							string: '',
							component: <CSButton size="small" iconName="activity" label="default small"/>
						},
						{
							variationName: ['xsmall'],
							string: '',
							component: <CSButton size="xsmall" iconName="activity" label="default xsmall"/>
						}
					]
				},
				{
					propName: 'btnRound',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component: <CSButton btnRound iconName="activity" label="default round"/>
						}
					]
				},
				{
					propName: 'onClick',
					customText: 'onClick prop for onClick event - verify the click by opening browser console',
					variations: [
						{

							string: '',
							component: <CSButton onClick={clickHandler} iconName="activity" label="default round"/>
						}
					]
				},
				{
					propName: 'iconDisplay',
					customText: '',
					variations: [
						{
							variationName: ['icon-only'],
							string: '',
							component: <CSButton iconName="activity" iconDisplay="icon-only"/>
						},
						{
							variationName: ['icon-only', 'large'],
							string: '',
							component: <CSButton iconName="activity" iconDisplay="icon-only" size="large"/>
						},
						{
							variationName: ['icon-only', 'small'],
							string: '',
							component: <CSButton iconName="activity" iconDisplay="icon-only" size="small"/>
						},
						{
							variationName: ['icon-only', 'xsmall'],
							string: '',
							component: <CSButton iconName="activity" iconDisplay="icon-only" size="xsmall"/>
						}
					]
				},
				{
					propName: 'iconPosition',
					customText: '',
					variations: [
						{
							variationName: ['default', 'left'],
							string: '',
							component: <CSButton iconName="activity" iconPosition="left" label="Icon Left"/>
						},
						{
							variationName: ['default', 'right'],
							string: '',
							component: <CSButton iconName="activity" iconPosition="right" label="Icon Right"/>
						}
					]
				},
				{
					propName: 'iconOrigin',
					customText: '',
					variations: [
						{
							variationName: ['default', 'icon-only'],
							string: '',
							component: <CSButton iconOrigin="slds" iconName="activity" iconDisplay="icon-only" label="default icon-only round"/>
						},
						{
							variationName: ['default', 'icon-only'],
							string: '',
							component: <CSButton iconOrigin="cs" iconName="tag" iconDisplay="icon-only" label="default icon-only round"/>
						}
					]
				},
				{
					propName: 'loading',
					customText: '',
					variations: [
						{
							variationName: ['true', 'no icon'],
							string: '',
							component: <CSButton loading label="Spinner"/>
						},
						{
							variationName: ['true', 'icon-only'],
							string: '',
							component: <CSButton iconOrigin="cs" iconName="tag" iconDisplay="icon-only" loading label="Spinner"/>
						},
						{
							variationName: ['true', 'with icon'],
							string: '',
							component: <CSButton iconOrigin="cs" iconName="tag" loading label="Spinner"/>
						},
						{
							variationName: ['true', 'brand'],
							string: '',
							component: <CSButton btnStyle="brand" loading label="Spinner"/>
						}
					]
				},
				{
					propName: 'iconRotate',
					customText: '',
					variations: [
						{
							variationName: ['90'],
							string: '',
							component: <CSButton iconName="activity" iconRotate="90" label="Icon rotated 90 degrees"/>
						},
						{
							variationName: ['180'],
							string: '',
							component: <CSButton iconName="activity" iconRotate="180" label="Icon rotated 180 degrees"/>
						},
						{
							variationName: ['270'],
							string: '',
							component: <CSButton iconName="activity" iconRotate="270" label="Icon rotated 270 degrees"/>
						}
					]
				},
				{
					propName: 'width',
					customText: '',
					variations: [
						{
							variationName: ['max'],
							string: '',
							component: <CSButton iconName="activity" label="default max" width="max"/>
						}
					]
				},
				{
					propName: 'disabled',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component: <CSButton iconName="activity" label="default disabled" disabled/>
						}
					]
				},
				{
					propName: 'link',
					customText: '',
					variations: [
						{
							string: '',
							component: <CSButton iconName="activity" label="default" link="www.google.com"/>
						}
					]
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							string: '',
							component: <CSButton  iconName="activity" label="default initial" className="custom-class"/>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'btnType',
					description: 'Button type',
					options: [
						'default',
						'error',
						'success',
						'transparent'
					]
				},
				{
					propertyName: 'btnStyle',
					description: 'Button style',
					options: [
						'initial',
						'brand',
						'outline'
					]
				},
				{
					propertyName: 'iconName',
					description: 'Name of icon from icons library',
					options: []
				},
				{
					propertyName: 'iconOrigin',
					description: 'SLDS, CloudSense icons or spinner',
					options: [
						'slds',
						'cs',
						'spinner'
					]
				},
				{
					propertyName: 'iconDisplay',
					description: 'Icon-only',
					options: [
						'icon-only',
						'no-icon'
					]
				},
				{
					propertyName: 'iconPosition',
					description: 'Icon position on left or right edge of button',
					options: [
						'left',
						'right'
					]
				},
				{
					propertyName: 'iconRotate',
					description: 'Degree value for clockwise icon rotation',
					options: ['90', '180', '270']
				},
				{
					propertyName: 'size',
					description: 'Button size',
					options: [
						'normal',
						'small',
						'xsmall',
						'large'
					]
				},
				{
					propertyName: 'btnRound',
					description: 'Logic for round button styling',
					options: [
						'false',
						'round'
					]
				},
				{
					propertyName: 'onClick',
					description: 'Logic for onClick event',
					options: []
				},
				{
					propertyName: 'width',
					description: 'Button width',
					options: [
						'auto',
						'max'
					]
				},
				{
					propertyName: 'colorOverride',
					description: 'Icon and label color (not supported yet)',
					options: ['hex value']
				},
				{
					propertyName: 'label',
					description: 'Button label to display',
					options: [
						'<label>'
					]
				},
				{
					propertyName: 'loading',
					description: 'Change icon to spinner and add spin animation. To be used while process is in progress',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'link',
					description: 'Link path (not supported yet)',
					options: ['url']
				},
				{
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					options: ['condition']
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: []
				}
			],
			backlog: [
				{
					backlogName: 'Add link prop',
					description: 'Allow adding href url',
					obstacles: 'Accessibility issue on using Link component as a child of button, there are 2 focuses. Alternative - add click routing logic (check frame agreement)'

				},
				{
					backlogName: 'Add colorOverride prop',
					description: 'Allows to pass custom hex colour.',
					obstacles: 'Button state colors need to depend on the main hex colour and use darken and lighten mixins'
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
					<PreviewTable name={component.name} properties={component.properties} />
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

export default CSButtonPreview;
