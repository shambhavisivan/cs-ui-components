import React from 'react';
import jsxToString from 'jsx-to-string';
import classNames from 'classnames';

import SldsIconSvg from '../icons/slds-icons.svg';
import CsIconSvg from '../icons/cs-icons.svg';

export interface CSIconProps {
	name: string;
	origin?: string;
	rotate?: string;
	color?: string;
	className?: string;
}

class CSIcon extends React.Component<CSIconProps> {

	static getDoc() {

		const json = {
			name: 'Icon',
			usage: 'Support for both Lightening and CloudSense Icons',
			examples: [
				{
					propName: 'name',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSIcon
									name="video"
								/>
						}
					],
					customText: 'Icons require a name prop which correlates to the icon you would like to use.'
				},
				{
					propName: 'origin',
					variations: [
						{
							variationName: ['slds'],
							string: '',
							component:
								<CSIcon
									name="video"
									origin="slds"
								/>
						},
						{
							variationName: ['cs'],
							string: '',
							component:
								<CSIcon
									origin="cs"
									name="table"
								/>
						}
					]
				},
				{
					propName: 'rotate',
					variations: [
						{
							variationName: ['90', '180', '270'],
							string: '',
							component:
								<CSIcon
									name="breadcrumbs"
									rotate="180"
								/>
						}
					]
				},
				{
					propName: 'color',
					variations: [
						{
							variationName: ['pink'],
							string: '',
							component:
								<CSIcon
									name="breadcrumbs"
									color="pink"
								/>
						},
						{
							variationName: ['#ff0000'],
							string: '',
							component:
								<CSIcon
									name="breadcrumbs"
									color="#ff0000"
								/>
						},
						{
							variationName: ['rgba(100,100,255)'],
							string: '',
							component:
								<CSIcon
									name="breadcrumbs"
									color="rgba(100,100,255,1.00)"
								/>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSIcon
									origin="cs"
									name="tag"
									className="custom-class"
								/>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'name',
					description: 'Name prop of Icon',
					options: [
						'See icons tab for a full list of icons'
					]
				},
				{
					propertyName: 'origin',
					description: 'Origin prop of Icon',
					options: ['slds', 'cs']
				},
				{
					propertyName: 'rotate',
					description: 'Degree value for clockwise icon rotation',
					options: ['90', '180', '270']
				},
				{
					propertyName: 'color',
					description: 'Color value of icon',
					options: [
						'e.g.',
						'pink',
						'#ff0000',
						'rgba(100,100,255,1.00)'
					]
				},
				{
					propertyName: 'className',
					description: 'Icon class',
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

		const styleClass = classNames(
			'cs-icon',
			{
				[`${this.props.className}`] : this.props.className,
				[`rotate-${this.props.rotate}`] : this.props.rotate
			}
		);

		let origin = SldsIconSvg;
		let prefix = 'cssfi-';
		if (this.props.origin === 'cs') {
			origin = CsIconSvg;
			prefix = 'csi-';
		}
		return (
			<svg
				className={styleClass}
				style={{'--cs-icon-c': this.props.color}}
			>
				<use href={`${origin}#${prefix}${this.props.name}`}/>
			</svg>
		);
	}
}

export default CSIcon;
