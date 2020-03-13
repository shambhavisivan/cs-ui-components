import React from 'react';
import jsxToString from 'jsx-to-string';
import CSLabel from './CSLabel';
import classNames from 'classnames';

export interface CSProgressBarProps {
	progress: string;
	label: string;
	progressIndicator?: boolean;
	color?: string;
	thickness?: string;
	className?: string;
}

class CSProgressBar extends React.Component<CSProgressBarProps> {

	static getDoc() {

		const json = {
			name: 'Progress Bar',
			usage: 'A progress bar component communicates to the user the progress of a particular process.',
			examples: [
				{
					propName: 'progress',
					customText: '',
					variations: [
						{
							variationName: ['0%'],
							string: '',
							component:
								<CSProgressBar
									label="Progress"
									progress="0%"
								/>
						},
						{
							variationName: ['50%'],
							string: '',
							component:
								<CSProgressBar
									label="Progress"
									progress="50%"
								/>
						},
						{
							variationName: ['100%'],
							string: '',
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
							variationName: ['n/a'],
							string: '',
							component:
								<CSProgressBar
									progress="50%"
									label="Progress"
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
							string: '',
							component:
								<CSProgressBar
									progress="50%"
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
							string: '',
							component:
								<CSProgressBar
									progress="50%"
									color="green"
									label="Progress"
								/>
						},
						{
							variationName: ['#FFAA00'],
							string: '',
							component:
								<CSProgressBar
									progress="50%"
									color="#FFAA00"
									label="Progress"
								/>
						},
						{
							variationName: ['rgb(100,100,255)'],
							string: '',
							component:
								<CSProgressBar
									progress="50%"
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
							variationName: ['x-small'],
							string: '',
							component:
								<CSProgressBar
									progress="50%"
									thickness="x-small"
									label="Progress"
								/>
						},
						{
							variationName: ['small'],
							string: '',
							component:
								<CSProgressBar
									progress="50%"
									thickness="small"
									label="Progress"
								/>
						},
						{
							variationName: ['medium'],
							string: '',
							component:
								<CSProgressBar
									progress="50%"
									thickness="medium"
									label="Progress"
								/>
						},
						{
							variationName: ['large'],
							string: '',
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
					propName: 'className',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSProgressBar
									progress="50%"
									label="Progress"
									className="custom-class"
								/>
						}
					]
				}
			],

			properties: [
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
					propertyName: 'label',
					description: 'Text content of label',
					options: [
						'n/a'
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
					propertyName: 'thickness',
					description: 'Thickness of the progress bar',
					options: [
						'x-small',
						'small',
						'medium',
						'large'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: []
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

		const progressBarWrapperClasses = classNames(
			'cs-progress-bar-wrapper',
			{
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<div className={progressBarWrapperClasses}>
				<div className="cs-progress-bar-text">
					{this.props.label &&
					<CSLabel label={this.props.label}/>
					}
					{this.props.progressIndicator ? (
						<div className="cs-progress-indicator">
							{`${this.props.progress} Complete`}
						</div>
					) : ('')}
				</div>
				<div className={`cs-progress-bar ${this.props.thickness}`}>
					<div className="cs-progress-bar-value" style={{width: this.props.progress, backgroundColor: this.props.color}}/>
				</div>
			</div>
		);
	}
}

export default CSProgressBar;
