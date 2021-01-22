import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSProgressBar, CSButton } from '@cloudsense/cs-ui-components';

export interface CSProgressBarPreviewState {
	progress: number;
}

class CSProgressBarPreview extends React.Component<{}, CSProgressBarPreviewState> {
	state = {
		progress: 0
	};

	restartProgress = () => this.setState({ progress: 0 });
	renderProgressFull = () => this.setState({ progress: 100 });
	renderProgressDelayed = () => {
		const interval = setInterval(() => {
			this.setState(prevState => {
				if (prevState.progress === 90) {
					clearInterval(interval);
				}
				return { progress: prevState.progress + 10 };
			});
		}, 500);
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
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the progress bar.'
				}, {
					name: 'color',
					types: ['string'],
					description: 'Set a custom colour for the progress bar path. (eg. pink, #ff0000, rgba(0, 0, 0, 0.2), etc.)'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the progress bar.'
				}, {
					name: 'label',
					required: true,
					types: ['string'],
					description: 'Set the progress bar label.'
				}, {
					name: 'labelHidden',
					types: ['boolean'],
					default: 'false',
					description: 'Hide the progress bar label.'
				}, {
					name: 'labelTitle',
					types: ['boolean'],
					description: 'Control whether to set the title attribute.'
				}, {
					name: 'progress',
					required: true,
					types: ['string'],
					description: 'Set the percentage value of the progress. (eg. 0%, 50%, 100%, etc.)'
				}, {
					name: 'progressIndicator',
					types: ['boolean'],
					default: 'false',
					description: 'Show a textual progress indicator.'
				}, {
					name: 'thickness',
					customTypes: [{
						name: 'CSProgressBarThickness',
						types: [
							'\'xsmall\'',
							'\'small\'',
							'\'medium\'',
							'\'large\''
						]
					}],
					description: 'Set the thickness of the progress bar.'
				}, {
					name: 'title',
					types: ['string'],
					description: 'Set the title attribute.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the progress bar wrapper div.'
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
						<CSButton onClick={this.renderProgressFull} label="Start full progress" className="simulate-btn" />
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
