import React from 'react';

import slds from '../icons/slds-icons.svg';
import cs from '../icons/cs-icons.svg';

class CSIcon extends React.Component {

	render() {
		let origin = slds;
		let prefix = 'cssfi-';
		if (this.props.origin === 'cs') {
			origin = cs;
			prefix = 'csi-';
		}
		return (
			<svg className="temporary-styles">
				<use xlinkHref={`${origin}#${prefix}${this.props.name}`}/>
			</svg>
		)
	}
}

export default CSIcon;
