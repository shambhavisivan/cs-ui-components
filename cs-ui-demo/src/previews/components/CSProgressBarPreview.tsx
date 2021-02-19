import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSProgressBar, CSButton, CSButtonGroup } from '@cloudsense/cs-ui-components';

export interface CSProgressBarPreviewState {
	progress: number;
}

class CSProgressBarPreview extends React.Component<{}, CSProgressBarPreviewState> {
	state = { progress: 0 };

	restartProgress = () => this.setState({ progress: 0 });
	renderProgressFull = () => this.setState({ progress: 100 });
	renderProgressDelayed = () => {
		if (this.state.progress !== 0) {
			return;
		}
		const interval = setInterval(() => {
			this.setState(prevState => {
				if (prevState.progress >= 100) {
					clearInterval(interval);
				} else {
					return { progress: prevState.progress + 10 };
				}
			});
		}, 500);
	}

	getProgressBarDoc = () => ({
		name: 'Progress Bar',
		usage: 'A progress bar component communicates to the user the progress of a particular process.',
		accessible: 'yes',
		previews: [
			{
				name: 'Progress Bar',
				examples: [
					{
						propName: 'label',
						alert: {
							variant: 'info',
							text: 'Label is a required prop because of accessibility. You need to provide an explanatory label for a progress bar. If you want to hide the label visually, you can use the labelHidden prop.'
						},
						variations: [
							{
								secondaryVariants: 'progress="50%"',
								component: <CSProgressBar label="Progress" progress="50%" />,
								code: '<CSProgressBar label="Progress" progress="50%" />'
							}
						]
					}, {
						propName: 'progress',
						variations: [
							{
								primaryVariants: 'progress="0%"',
								quickLink: '0%',
								component: <CSProgressBar label="Progress" progress="0%" />,
								code: '<CSProgressBar label="Progress" progress="0%" />'
							}, {
								primaryVariants: 'progress="50%"',
								quickLink: '50%',
								component: <CSProgressBar label="Progress" progress="50%" />,
								code: '<CSProgressBar label="Progress" progress="50%" />'
							}, {
								primaryVariants: 'progress="100%"',
								quickLink: '100%',
								component: <CSProgressBar label="Progress" progress="100%" />,
								code: '<CSProgressBar label="Progress" progress="100%" />'
							}
						]
					}, {
						propName: 'color',
						variations: [
							{
								primaryVariants: 'color="rgb(74, 38, 171)"',
								secondaryVariants: 'progress="70%"',
								quickLink: 'rgb',
								component: <CSProgressBar
									label="Progress"
									progress="70%"
									color="rgb(74, 38, 171)"
								/>,
								code: `<CSProgressBar
										label="Progress"
										progress="70%"
										color="rgb(74, 38, 171)"
									/>`
							}, {
								primaryVariants: 'color="#3cdbc0"',
								secondaryVariants: 'progress="50%"',
								quickLink: 'hex',
								component: <CSProgressBar
									label="Progress"
									progress="50%"
									color="#3cdbc0"
								/>,
								code: `<CSProgressBar
									label="Progress"
									progress="50%"
									color="#3cdbc0"
								/>`
							}
						]
					}, {
						propName: 'labelHidden',
						variations: [
							{
								primaryVariants: 'labelHidden={true}',
								component: <CSProgressBar
									label="Progress"
									progress="50%"
									labelHidden
								/>,
								code: `<CSProgressBar
									label="Progress"
									progress="50%"
									labelHidden
								/>`
							}
						]
					}, {
						propName: 'labelTitle',
						variations: [
							{
								primaryVariants: 'labelTitle={true}',
								component: <CSProgressBar
									label="Progress"
									progress="50%"
									labelTitle
								/>,
								code: `<CSProgressBar
									label="Progress"
									progress="50%"
									labelTitle
								/>`
							}
						]
					}, {
						propName: 'progressIndicator',
						variations: [
							{
								primaryVariants: 'progressIndicator={true}',
								secondaryVariants: 'progress="70%"',
								component: <CSProgressBar
									label="Progress"
									progress="70%"
									progressIndicator
								/>,
								code: `<CSProgressBar
									label="Progress"
									progress="70%"
									progressIndicator
								/>`
							}
						]
					}, {
						propName: 'thickness',
						variations: [
							{
								primaryVariants: 'thickness="xsmall"',
								secondaryVariants: 'progress="50%"',
								quickLink: 'xsmall',
								component: <CSProgressBar
									label="Progress"
									progress="50%"
									thickness="xsmall"
								/>,
								code: `<CSProgressBar
									label="Progress"
									progress="50%"
									thickness="xsmall"
								/>`
							}, {
								primaryVariants: 'thickness="small"',
								secondaryVariants: 'progress="50%"',
								quickLink: 'small',
								component: <CSProgressBar
									label="Progress"
									progress="50%"
									thickness="small"
								/>,
								code: `<CSProgressBar
									label="Progress"
									progress="50%"
									thickness="small"
								/>`
							}, {
								primaryVariants: 'thickness="medium"',
								secondaryVariants: 'progress="50%"',
								quickLink: 'medium',
								component: <CSProgressBar label="Progress" progress="50%" />,
								code: `<CSProgressBar label="Progress" progress="50%" />`
							}, {
								primaryVariants: 'thickness="large"',
								secondaryVariants: 'progress="50%"',
								quickLink: 'large',
								component: <CSProgressBar
									label="Progress"
									progress="50%"
									thickness="large"
								/>,
								code: `<CSProgressBar
									label="Progress"
									progress="50%"
									thickness="large"
								/>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <CSProgressBar
									label="Progress"
									progress="50%"
									title="This is a title"
								/>,
								code: `<CSProgressBar
									label="Progress"
									progress="50%"
									title="This is a title"
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
								secondaryVariants: 'progress="50%"',
								component: <CSProgressBar
									label="Progress"
									progress="50%"
									id="custom-id"
									className="custom-class"
								/>,
								code: `<CSProgressBar
									label="Progress"
									progress="50%"
									id="custom-id"
									className="custom-class"
								/>`
							}
						]
					}, {
						propName: 'Progress Simulation',
						variations: [
							{
								component: <>
									<CSProgressBar label="Simulate Progress" progress={`${this.state.progress}%`} />
									<CSButtonGroup className="simulation-action-buttons">
										<CSButton label="Reset progress" onClick={this.restartProgress} />
										<CSButton label="Start delayed progress" onClick={this.renderProgressDelayed} />
										<CSButton label="Start full progress" onClick={this.renderProgressFull} />
									</CSButtonGroup>
								</>,
								code: `<CSProgressBar label="Simulate progress" progress={\`\${this.state.progress}%\`} />
								<CSButtonGroup className="simulation-action-buttons">
									<CSButton label="Reset progress" onClick={this.restartProgress} />
									<CSButton label="Start delayed progress" onClick={this.renderProgressDelayed} />
									<CSButton label="Start full progress" onClick={this.renderProgressFull} />
								</CSButtonGroup>`
							}
						]
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
				default: '\'medium\'',
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
							'`aria-valuenow`',
							'`aria-valuemin`',
							'`aria-valuemax`',
							'`role="progressbar"`'
						]
					}
				]
			}
		]
	})

	render() {
		const component = this.getProgressBarDoc();

		return (
			<>
				<div className="preview-section-wrapper">
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

export default CSProgressBarPreview;
