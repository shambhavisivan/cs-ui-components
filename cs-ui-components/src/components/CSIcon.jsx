import React from 'react';
import classNames from 'classnames';

import slds from '../icons/slds-icons.svg';
import cs from '../icons/cs-icons.svg';

class CSIcon extends React.Component {

	render() {

		var styleClass = classNames(
			'cs-icon',
			{
				[`${this.props.styleClass}`] : this.props.styleClass
			}
		);

		let origin = slds;
		let prefix = 'cssfi-';
		if (this.props.origin === 'cs') {
			origin = cs;
			prefix = 'csi-';
		}
		return (
			<svg className={styleClass}>
				<use xlinkHref={`${origin}#${prefix}${this.props.name}`}/>
			</svg>
		)
	}
}

export default CSIcon;
