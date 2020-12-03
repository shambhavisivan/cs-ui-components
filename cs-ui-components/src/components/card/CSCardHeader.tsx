import React from 'react';

export interface CSCardHeaderProps {
	[key: string]: any;
	id?: string;
	title: string;
}

class CSCardHeader extends React.Component<CSCardHeaderProps> {

	render() {
		const { id, title, ...rest } = this.props;
		return (
			<header
				className="cs-card-header"
				id={id}
				{...rest}
			>
				<h2>{title}</h2>
			</header>
		);
	}
}

export default CSCardHeader;
