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
					propName: 'btnType',
					customText: '',
					variations: [
						{
							variationName: ['default'],
							quickLink: 'default initial',
							variationText: ['btnStyle="initial"'],
							string: '',
							component: <CSButton iconName="activity" label="default initial" />
						},
						{
							variationName: ['default'],
							quickLink: 'default brand',
							variationText: ['btnStyle="brand"'],
							string: '',
							component: <CSButton btnStyle="brand" iconName="activity" label="default brand"/>
						},
						{
							variationName: ['default'],
							quickLink: 'default outline',
							variationText: ['btnStyle="outline"'],
							string: '',
							component: <CSButton btnStyle="outline" iconName="activity" label="default outline"/>
						},
						{
							variationName: ['transparent'],
							quickLink: 'transparent initial',
							variationText: ['btnStyle="initial"'],
							string: '',
							customClass: 'inverse-background',
							component: <div className="blue-background">
								<CSButton btnType="transparent" iconName="activity" label="transparent initial"/>
							</div>
						},
						{
							variationName: ['transparent'],
							quickLink: 'transparent brand',
							variationText: ['btnStyle="brand"'],
							string: '',
							component: <CSButton btnType="transparent" btnStyle="brand" iconName="activity" label="transparent brand"/>
						},
						{
							variationName: ['transparent'],
							quickLink: 'transparent outline',
							variationText: ['btnStyle="outline"'],
							string: '',
							customClass: 'inverse-background',
							component: <div className="blue-background">
								<CSButton btnType="transparent" btnStyle="outline" iconName="activity" label="transparent outline"/>
							</div>
						},
						{
							variationName: ['error'],
							quickLink: 'error initial',
							variationText: ['btnStyle="initial"'],
							string: '',
							component: <CSButton btnType="error" iconName="activity" label="error initial"/>
						},
						{
							variationName: ['error'],
							quickLink: 'error brand',
							variationText: ['btnStyle="brand"'],
							string: '',
							component: <CSButton btnType="error" btnStyle="brand" iconName="activity" label="error brand"/>
						},
						{
							variationName: ['error'],
							quickLink: 'error outline',
							variationText: ['btnStyle="outline"'],
							string: '',
							component: <CSButton btnType="error" btnStyle="outline" iconName="activity" label="error outline"/>
						},
						{
							variationName: ['success'],
							quickLink: 'success initial',
							variationText: ['btnStyle="initial"'],
							string: '',
							component: <CSButton btnType="success" iconName="activity" label="success initial"/>
						},
						{
							variationName: ['success'],
							quickLink: 'success brand',
							variationText: ['btnStyle="brand"'],
							string: '',
							component: <CSButton btnType="success" btnStyle="brand" iconName="activity" label="success brand"/>
						},
						{
							variationName: ['success'],
							quickLink: 'success outline',
							variationText: ['btnStyle="outline"'],
							string: '',
							component: <CSButton btnType="success" btnStyle="outline" iconName="activity" label="success outline"/>
						}
					]
				},
				{
					propName: 'color',
					customText: '',
					variations: [
						{
							variationName: ['pink'],
							variationText: ['btnType="default"', 'btnStyle="initial"'],
							quickLink: 'default initial',
							string: '',
							component: <CSButton
											btnStyle="inital"
											color="pink"
											label="custom color button"
											iconName="activity"
										/>
						},
						{
							variationName: ['pink'],
							variationText: ['btnType="default"', 'btnStyle="brand"'],
							quickLink: 'default brand',
							string: '',
							component: <CSButton
											btnStyle="brand"
											color="pink"
											label="custom color button"
											iconName="activity"
										/>
						},
						{
							variationName: ['pink'],
							variationText: ['btnType="default"', 'btnStyle="outline"'],
							quickLink: 'default outline',
							string: '',
							component: <CSButton
											btnStyle="outline"
											color="pink"
											label="custom color button"
											iconName="activity"
										/>
						},
						{
							variationName: ['pink'],
							variationText: ['btnType="transparent"', 'btnStyle="inital"'],
							quickLink: 'transparent inital',
							string: '',
							component: <div className="blue-background">
											<CSButton
												btnType="transparent"
												btnStyle="initial"
												color="pink"
												label="custom color button"
												iconName="activity"
											/>
										</div>
						},
						{
							variationName: ['pink'],
							variationText: ['btnType="transparent"', 'btnStyle="brand"'],
							quickLink: 'transparent brand',
							string: '',
							component: <CSButton
											btnType="transparent"
											btnStyle="brand"
											color="pink"
											label="custom color button"
											iconName="activity"
										/>
						},
						{
							variationName: ['pink'],
							variationText: ['btnType="transparent"', 'btnStyle="outline"'],
							quickLink: 'transparent outline',
							string: '',
							component: <div className="blue-background">
											<CSButton
												btnType="transparent"
												btnStyle="outline"
												color="pink"
												label="custom color button"
												iconName="activity"
										/>
										</div>
						}
					]
				},
				{
					propName: 'size',
					customText: '',
					variations: [
						{
							variationName: ['large'],
							quickLink: 'large',
							string: '',
							component: <CSButton size="large" iconName="activity" label="default large"/>
						},
						{
							variationName: ['small'],
							quickLink: 'small',
							string: '',
							component: <CSButton size="small" iconName="activity" label="default small"/>
						},
						{
							variationName: ['xsmall'],
							quickLink: 'xsmall',
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
							quickLink: 'true',
							string: '',
							component: <CSButton btnRound iconName="activity" label="default round"/>
						}
					]
				},
				{
					propName: 'onClick',
					customText: '',
					variations: [
						{
							string: '',
							component: <CSButton onClick={clickHandler} iconName="activity" label="default round"/>
						}
					]
				},
				{
					propName: 'id',
					variations: [
						{
							string: '',
							component: <CSButton label="default with id" id="id"/>

						}
					]
				},
				{
					propName: 'iconDisplay',
					customText: '',
					variations: [
						{
							variationName: ['default'],
							quickLink: 'default',
							string: '',
							component: <CSButton label="activity icon button" iconName="activity" iconDisplay="default"/>
						},
						{
							variationName: ['icon-only'],
							quickLink: 'icon-only',
							string: '',
							component: <CSButton label="activity icon button" iconName="activity" iconDisplay="icon-only"/>
						},
						{
							variationName: ['icon-only'],
							quickLink: 'icon-only large',
							variationText: ['size="large"'],
							string: '',
							component: <CSButton label="activity icon button" iconName="activity" iconDisplay="icon-only" size="large"/>
						},
						{
							variationName: ['icon-only'],
							quickLink: 'icon-only small',
							variationText: ['size="small"'],
							string: '',
							component: <CSButton label="activity icon button" iconName="activity" iconDisplay="icon-only" size="small"/>
						},
						{
							variationName: ['icon-only'],
							quickLink: 'icon-only xsmall',
							variationText: ['size="xsmall"'],
							string: '',
							component: <CSButton label="activity icon button" iconName="activity" iconDisplay="icon-only" size="xsmall"/>
						},
						{
							variationName: ['no-icon'],
							quickLink: 'no-icon large',
							variationText: ['size="large"'],
							string: '',
							component: <CSButton label="no-icon button" iconName="activity" iconDisplay="no-icon" size="large"/>
						},
						{
							variationName: ['no-icon'],
							quickLink: 'no-icon small',
							variationText: ['size="small"'],
							string: '',
							component: <CSButton label="no-icon button" iconName="activity" iconDisplay="no-icon" size="small"/>
						},
						{
							variationName: ['no-icon'],
							quickLink: 'no-icon xsmall',
							variationText: ['size="xsmall"'],
							string: '',
							component: <CSButton label="no-icon button" iconName="activity" iconDisplay="no-icon" size="xsmall"/>
						}
					]
				},
				{
					propName: 'iconName',
					customText: '',
					variations: [
						{
							string: '',
							component: <CSButton iconName="activity" label="iconName activity"/>
						}
					]
				},
				{
					propName: 'iconPosition',
					customText: '',
					variations: [
						{
							variationName: ['left'],
							quickLink: 'left',
							string: '',
							component: <CSButton iconName="activity" iconPosition="left" label="Icon Left"/>
						},
						{
							variationName: ['right'],
							quickLink: 'right',
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
							variationName: ['slds'],
							quickLink: 'slds',
							string: '',
							component: <CSButton iconOrigin="slds" iconName="activity" iconDisplay="icon-only" label="default icon-only round"/>
						},
						{
							variationName: ['cs'],
							quickLink: 'cs',
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
							quickLink: '90',
							string: '',
							component: <CSButton iconName="activity" iconRotate="90" label="Icon rotated 90 degrees"/>
						},
						{
							variationName: ['180'],
							quickLink: '180',
							string: '',
							component: <CSButton iconName="activity" iconRotate="180" label="Icon rotated 180 degrees"/>
						},
						{
							variationName: ['270'],
							quickLink: '270',
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
							quickLink: 'max',
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
							quickLink: 'true',
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
							component: <CSButton iconName="activity" label="default" link="https://www.google.com"/>
						}
					]
				},
				{
					propName: 'openInNewTab',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component: <CSButton iconName="activity" label="default" openInNewTab link="https://www.google.com"/>
						}
					]
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							string: '',
							component: <CSButton  iconName="activity" label="default initial" className="custom-class"/>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'btnRound',
					description: 'Logic for round button styling',
					options: [
						'false',
						'round'
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
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'color',
					description: 'For implementing color to component',
					options: []
				},
				{
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					options: ['condition']
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
					propertyName: 'iconName',
					description: 'Name of icon from icons library'
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
					options: [
						'90',
						'180',
						'270'
					]
				},
				{
					propertyName: 'id',
					description: 'Button id value'
				},
				{
					propertyName: 'label',
					description: 'Button label to display',
					options: ['<label>']
				},
				{
					propertyName: 'link',
					description: 'Link path',
					options: ['url']
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
					propertyName: 'onClick',
					description: 'Logic for onClick event'
				},
				{
					propertyName: 'openInNewTab',
					description: 'Logic for opening link in new tab',
					options: [
						'true',
						'false'
					]
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
					propertyName: 'width',
					description: 'Button width',
					options: [
						'auto',
						'max'
					]
				}
			],
			backlog: [
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
					<div className="cs-btn-type-preview-wrapper">
						<div className="cs-btn-type-preview">
							<span className="cs-btnStyle-header">btnStyle</span>
							<span className="cs-btnType-header">btnType</span>
							<span className="cs-btnStyle-initial">initial</span>
							<span className="cs-btnStyle-brand">brand</span>
							<span className="cs-btnStyle-outline">outline</span>
							<span className="cs-btnType-default">default</span>
							<span className="cs-btnType-error">error</span>
							<span className="cs-btnType-success">success</span>
							<span className="cs-btnType-transparent">transparent</span>
							<span className="cs-default-initial">
								<CSButton iconName="activity" label="default initial"/>
							</span>
							<span className="cs-default-brand">
								<CSButton iconName="activity" btnStyle="brand" label="default brand"/>
							</span>
							<span className="cs-default-outline">
								<CSButton iconName="activity" btnStyle="outline" label="default outline"/>
							</span>
							<span className="cs-error-initial">
								<CSButton iconName="activity" btnType="error" label="error initial"/>
							</span>
							<span className="cs-error-brand">
								<CSButton iconName="activity" btnType="error" btnStyle="brand" label="error brand"/>
							</span>
							<span className="cs-error-outline">
								<CSButton iconName="activity" btnType="error" btnStyle="outline" label="error outline"/>
							</span>
							<span className="cs-success-initial">
								<CSButton iconName="activity" btnType="success" label="success initial"/>
							</span>
							<span className="cs-success-brand">
								<CSButton iconName="activity" btnType="success" btnStyle="brand" label="success brand"/>
							</span>
							<span className="cs-success-outline">
								<CSButton iconName="activity" btnType="success" btnStyle="outline" label="success outline"/>
							</span>
							<span className="cs-transparent-initial">
								<span className="cs-transparent-bg">
									<CSButton iconName="activity" btnType="transparent" label="transparent initial"/>
								</span>
							</span>
							<span className="cs-transparent-brand">
								<CSButton iconName="activity" btnType="transparent" btnStyle="brand" label="transparent brand"/>
							</span>
							<span className="cs-transparent-outline">
								<span className="cs-transparent-bg">
									<CSButton iconName="activity" btnType="transparent" btnStyle="outline" label="transparent outline"/>
								</span>
							</span>
						</div>
					</div>
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

export default CSButtonPreview;
