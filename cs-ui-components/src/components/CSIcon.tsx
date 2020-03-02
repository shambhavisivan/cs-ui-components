import React from 'react';
import classNames from 'classnames';

import SldsIconSvg from '../icons/slds-icons.svg';
import CsIconSvg from '../icons/cs-icons.svg';

// export interface CSIconProps {
// 	name: string;

// }

class CSIcon extends React.Component<any> {

	render() {

		const styleClass = classNames(
			'cs-icon',
			{
				[`${this.props.cssClass}`] : this.props.cssClass

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
