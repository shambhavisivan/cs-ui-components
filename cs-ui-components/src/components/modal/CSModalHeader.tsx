import React from 'react';

export interface CSModalHeaderProps {
	title?: string;
	subtitle?: string;
}

class CSModalHeader extends React.Component<CSModalHeaderProps> {

	render() {
		return (
			<header className="cs-modal-header">
				{this.props.title &&
					<h3 className="header-title">{this.props.title}</h3>
				}
				{this.props.subtitle &&
					<h4 className="header-subtitle">{this.props.subtitle}</h4>
				}
				{this.props.children}
			</header>
		);
	}
}

export default CSModalHeader;
