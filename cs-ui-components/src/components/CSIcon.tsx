import React, { CSSProperties } from 'react';
import classNames from 'classnames';

import SldsIconSvg from '../icons/slds-icons.svg';
import CsIconSvg from '../icons/cs-icons.svg';

export interface CSIconProps {
	className?: string;
	color?: string;
	name: string;
	origin?: string;
	rotate?: string;
	size?: string;
}

class CSIcon extends React.Component<CSIconProps> {

	render() {

		const styleClass = classNames(
			'cs-icon',
			{
				[`${this.props.className}`] : this.props.className,
				[`cs-icon-rotate-${this.props.rotate}`] : this.props.rotate
			}
		);

		const style: CSSProperties = {
			'--cs-icon-c': this.props.color,
			'--cs-icon-size': this.props.size
		};

		let origin = SldsIconSvg;
		let prefix = 'cssfi-';
		if (this.props.origin === 'cs') {
			origin = CsIconSvg;
			prefix = 'csi-';
		}
		return (
			<svg
				className={styleClass}
				style={style}
				aria-hidden="true"
			>
				<use href={`${origin}#${prefix}${this.props.name}`}/>
			</svg>
		);
	}
}

export default CSIcon;
