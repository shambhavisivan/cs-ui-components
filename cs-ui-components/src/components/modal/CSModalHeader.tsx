import React from 'react';

export interface CSModalHeaderProps {
	[key: string]: any;
	id?: string;
	subtitle?: string;
	title?: string;
	titleId?: string;
}

class CSModalHeader extends React.Component<CSModalHeaderProps> {

	render() {
		const { children, id, subtitle, title, titleId, ...rest } = this.props;
		return (
			<header
				className="cs-modal-header"
				id={id}
				{...rest}
			>
				{title &&
					<h3 className="cs-modal-header-title" id={titleId}>{title}</h3>
				}
				{subtitle &&
					<h4 className="cs-modal-header-subtitle">{subtitle}</h4>
				}
				{children}
			</header>
		);
	}
}

export default CSModalHeader;
