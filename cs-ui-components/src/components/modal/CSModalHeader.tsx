import React from 'react';

export interface CSModalHeaderProps {
	id?: string;
	title?: string;
	subtitle?: string;
}

class CSModalHeader extends React.Component<CSModalHeaderProps> {

	render() {
		return (
			<header
				className="cs-modal-header"
				id={this.props.id}
			>
				{this.props.title &&
					<h3 className="cs-modal-header-title">{this.props.title}</h3>
				}
				{this.props.subtitle &&
					<h4 className="cs-modal-header-subtitle">{this.props.subtitle}</h4>
				}
				{this.props.children}
			</header>
		);
	}
}

export default CSModalHeader;
