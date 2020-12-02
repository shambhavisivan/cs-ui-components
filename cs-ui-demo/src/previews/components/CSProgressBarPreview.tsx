import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSProgressBar, CSButton } from '@cloudsense/cs-ui-components';

export interface CSProgressBarPreviewState {
	progress: string;
}

class CSProgressBarPreview extends React.Component<CSProgressBarPreviewState> {

	state = {
		progress: 0
	};

	restartProgress = () => {
		this.setState({ progress: 0 });
	}

	renderProgressDelayed = () => {
		for (let i = 0; i <= 100; i++) {
			setTimeout(() => {
				this.setState({ progress: i });
			}, 0);
		}
	}

	renderProgressInstant = () => {
		for (let i = 0; i <= 100; i++) {
			this.setState({ progress: i });
		}
	}

	getDoc() {

		const json = {
			name: 'Progress Bar',
			usage: 'A progress bar component communicates to the user the progress of a particular process.',
			accessible: 'yes',
			examples: [
				{
					propName: 'progress',
					customText: '',
					variations: [
						{
							variationName: ['0%'],
							quickLink: '0%',
							component:
								<CSProgressBar
									label="Progress"
									progress="0%"
								/>
						},
						{
							variationName: ['50%'],
							quickLink: '50%',
							component:
								<CSProgressBar
									label="Progress"
									progress="50%"
								/>
						},
						{
							variationName: ['100%'],
							quickLink: '100%',
							component:
								<CSProgressBar
									label="Progress"
									progress="100%"
								/>
						}
					]
				},
				{
					propName: 'label',
					customText: '',
					variations: [
						{
							variationText: ['progress="50%"'],
							component:
								<CSProgressBar
									progress="50%"
									label="Progress"
								/>
						}
					]
				},
				{
					propName: 'labelHidden',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSProgressBar
									progress="50%"
									label="Progress"
									labelHidden
								/>
						}
					]
				},
				{
					propName: 'labelTitle',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component:
								<CSProgressBar
									progress="50%"
									label="Progress"
									labelTitle
								/>
						}
					]
				},
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							component:
								<CSProgressBar
									progress="50%"
									label="Progress"
									id="id"
								/>
						}
					]
				},
				{
					propName: 'progressIndicator',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							variationText: ['progress="70%"'],
							component:
								<CSProgressBar
									progress="70%"
									progressIndicator
									label="Progress"
								/>
						}
					]
				},
				{
					propName: 'color',
					customText: '',
					variations: [
						{
							variationName: ['green'],
							quickLink: 'green',
							variationText: ['progress="30%"'],
							component:
								<CSProgressBar
									progress="30%"
									color="green"
									label="Progress"
								/>
						},
						{
							variationName: ['#FFAA00'],
							quickLink: '#FFAA00',
							variationText: ['progress="50%"'],
							component:
								<CSProgressBar
									progress="50%"
									color="#FFAA00"
									label="Progress"
								/>
						},
						{
							variationName: ['rgb(100,100,255)'],
							quickLink: 'rgb(100,100,255)',
							variationText: ['progress="70%"'],
							component:
								<CSProgressBar
									progress="70%"
									color="rgb(100,100,255)"
									label="Progress"
								/>
						}
					]
				},
				{
					propName: 'thickness',
					customText: '',
					variations: [
						{
							variationName: ['xsmall'],
							quickLink: 'xsmall',
							variationText: ['progress="50%"'],
							component:
								<CSProgressBar
									progress="50%"
									thickness="xsmall"
									label="Progress"
								/>
						},
						{
							variationName: ['small'],
							quickLink: 'small',
							variationText: ['progress="50%"'],
							component:
								<CSProgressBar
									progress="50%"
									thickness="small"
									label="Progress"
								/>
						},
						{
							variationName: ['medium'],
							quickLink: 'medium',
							variationText: ['progress="50%"'],
							component:
								<CSProgressBar
									progress="50%"
									thickness="medium"
									label="Progress"
								/>
						},
						{
							variationName: ['large'],
							quickLink: 'large',
							variationText: ['progress="50%"'],
							component:
								<CSProgressBar
									progress="50%"
									thickness="large"
									label="Progress"
								/>
						}
					]
				},
				{
					propName: 'title',
					variations: [
						{
							component:
								<CSProgressBar
									progress="50%"
									label="Progress"
									title="This is a title"
								/>
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
							variationText: ['progress="50%"'],
							component:
								<CSProgressBar
									progress="50%"
									label="Progress"
									className="custom-class"
								/>
						},
						{
							variationName: ['Simulate progress'],
							quickLink: 'Simulate progress',
							component:
								<CSProgressBar
									progress={`${this.state.progress}%`}
									label="Simulate progress"
								/>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'color',
					description: 'CSS color value of the progress bar',
					options: [
						'e.g.',
						'green',
						'#FFAA00',
						'rgb(100,100,255)'
					]
				},
				{
					propertyName: 'id',
					description: 'Path id value'
				},
				{
					propertyName: 'label',
					description: 'Text content of label'
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
					propertyName: 'progress',
					description: 'Percentage value to represent progress',
					options: [
						'e.g.',
						'0%',
						'50%',
						'100%'
					]
				},
				{
					propertyName: 'progressIndicator',
					description: 'Boolean state of percentage indicator',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'thickness',
					description: 'Thickness of the progress bar',
					options: [
						'xsmall',
						'small',
						'medium',
						'large'
					]
				},
				{
					propertyName: 'title',
					description: 'Title to display'
				}
			],

			accessibility: [
				{
					criterionList: [
						'2.5.3',
						'3.3.1',
						'4.1.2'
					],
					requirements: [
						{
							properties: [
								'aria-valuenow',
								'aria-valuemin',
								'aria-valuemax',
								'role="progressbar"'
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
					<div className="simulation-action-buttons">
						<CSButton onClick={this.restartProgress} label="Reset progress" className="simulate-btn" />
						<CSButton onClick={this.renderProgressDelayed} label="Start delayed progress" className="simulate-btn" />
						<CSButton onClick={this.renderProgressInstant} label="Start instant progress" className="simulate-btn" />
					</div>
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

export default CSProgressBarPreview;
