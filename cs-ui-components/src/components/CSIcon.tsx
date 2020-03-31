import React from 'react';
import classNames from 'classnames';

import SldsIconSvg from '../icons/slds-icons.svg';
import CsIconSvg from '../icons/cs-icons.svg';

export interface CSIconProps {
	name: string;
	origin?: string;
	rotate?: string;
	color?: string;
	className?: string;
	size?: string;
}

class CSIcon extends React.Component<CSIconProps> {

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
				style={{
					'--cs-icon-c': this.props.color,
					'--cs-icon-size': this.props.size
				}}
				aria-hidden="true"
			>
				<use href={`${origin}#${prefix}${this.props.name}`}/>
			</svg>
		);
	}
}

export default CSIcon;
