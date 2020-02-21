import React from 'react';
import jsxToString from 'jsx-to-string';
import classNames from 'classnames';

import SldsIconSvg from '../icons/slds-icons.svg';
import CsIconSvg from '../icons/cs-icons.svg';

export interface CSIconProps {
	name: string;
	origin?: string;
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
							variationName: ['name'],
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
									name="tag"
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
				[`${this.props.className}`] : this.props.className

			}
		);

		let origin = SldsIconSvg;
		let prefix = 'cssfi-';
		if (this.props.origin === 'cs') {
			origin = CsIconSvg;
			prefix = 'csi-';
		}
		return (
			<svg className={styleClass}>
				<use xlinkHref={`${origin}#${prefix}${this.props.name}`}/>
			</svg>
		);
	}
}

export default CSIcon;
