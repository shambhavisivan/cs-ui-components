import React from 'react';

export interface CSMainHeaderIconProps {
	[key: string]: any;
	id?: string;
}

class CSMainHeaderIcon extends React.Component<CSMainHeaderIconProps> {
	render() {
		const { children, id, ...rest } = this.props;
		return <div className="cs-main-header-icon" id={id} {...rest}>
				{children}
			</div>;
	}
}

export default CSMainHeaderIcon;
