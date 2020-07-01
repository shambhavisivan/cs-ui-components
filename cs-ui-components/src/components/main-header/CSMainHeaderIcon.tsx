import React from 'react';

export interface CSMainHeaderIconProps {
	id?: string;
}

class CSMainHeaderIcon extends React.Component<CSMainHeaderIconProps> {
	render() {
		return <div className="cs-main-header-icon" id={this.props.id}>
				{this.props.children}
			</div>;
	}
}

export default CSMainHeaderIcon;
