import React from 'react';

export interface CSModalHeaderProps {
	title: string;
	subtitle?: string;
}

class CSModalHeader extends React.Component<CSModalHeaderProps> {

	render() {
		return (
			<header className="modal-header">
				<h3 className="header-title">{this.props.title}</h3>
				<h4 className="header-subtitle">{this.props.subtitle}</h4>
			</header>
		);
	}
}

export default CSModalHeader;
