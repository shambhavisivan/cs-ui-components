import React from 'react';
import jsxToString from 'jsx-to-string';
import classNames from 'classnames';

export interface CSSpinnerProps {
	color?: string;
	size?: string;
	inline?: boolean;
	label?: string;
	className?: string;
}

class CSSpinner extends React.Component<CSSpinnerProps> {

	public static defaultProps = {
		color: 'brand',
		size: 'xlarge'
	};
	static getDoc() {

		const json = {
			name: 'Spinner',
			usage: 'Spinners are CSS loading indicators that should be shown when retrieving data or performing slow computations. In some cases, the first time a parent component loads, a stencil is preferred to indicate network activity.',
			examples: [
				{
					propName: 'Size',
					customText: '',
					variations: [
						{
							variationName: ['xsmall'],
							string: '',
							component:
								<CSSpinner
									size="xsmall"
									color="neutral"
								/>
						},
						{
							variationName: ['small'],
							string: '',
							component:
								<CSSpinner
									size="small"
									color="neutral"
								/>
						},
						{
							variationName: ['medium'],
							string: '',
							component:
								<CSSpinner
									size="medium"
									color="neutral"
								/>
						},
						{
							variationName: ['large'],
							string: '',
							component:
								<CSSpinner
									size="large"
									color="neutral"
								/>
						},
						{
							variationName: ['xlarge'],
							string: '',
							component:
								<CSSpinner
									size="xlarge"
									color="neutral"
								/>
						}
					]
				},
				{
					propName: 'Color',
					variations: [
						{
							variationName: ['neutral'],
							string: '',
							component:
								<CSSpinner
									size="large"
									color="neutral"
								/>
						},
						{
							variationName: ['brand'],
							string: '',
							component:
								<CSSpinner
									size="large"
									color="brand"
								/>
						}
					]
				},
				{
					propName: 'Inline',
					variations: [
						{
							variationName: ['false'],
							string: '',
							component:
								<CSSpinner
									size="large"
									color="neutral"
									inline={false}
								/>
						},
						{
							variationName: ['true'],
							string: '',
							component:
								<CSSpinner
									size="large"
									color="neutral"
									inline
									className="custom-class"
								/>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['className'],
							string: '',
							component:
								<CSSpinner
									size="large"
									color="neutral"
									className="custom-class"
								/>
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							variationName: ['label'],
							string: '',
							component:
								<CSSpinner
									size="xlarge"
									color="neutral"
									label="This is some label"
								/>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'size',
					description: 'Size of spinner icon',
					options: [
						'large',
						'xsmall',
						'small',
						'medium',
						'xlarge'
					]
				},
				{
					propertyName: 'color',
					description: 'Color of spinner icon',
					options: [
						'neutral',
						'brand'
					]
				},
				{
					propertyName: 'inline',
					description: 'Logic for display property',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: []
				},
				{
					propertyName: 'label',
					description: 'Spinner label',
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
		const spinnerClasses = classNames(
			'cs-spinner-wrapper',
			{
				[`${this.props.className}`]: this.props.className,
				'cs-spinner-inline': this.props.inline
			}
		);
		return (
			<>
				<div className={spinnerClasses}>
					<div className="cs-spinner-wrapper-label">
						<div className={'cs-spinner cs-spinner-' + this.props.size + ' cs-spinner-' + this.props.color}>
							<div className="cs-spinner-dot-a"/>
							<div className="cs-spinner-dot-b"/>
						</div>
						{
						 !this.props.inline &&
							<div className="cs-spinner-label">
								<span>{this.props.label}</span>
							</div>
						}
					</div>
				</div>

			</>
		);
	}
}

export default CSSpinner;
