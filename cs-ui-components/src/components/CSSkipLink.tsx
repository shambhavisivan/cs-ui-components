import React from 'react';

export interface CSSkipLinkProps {
	color?: string;
	href: string;
	jumpDestination: string;
}

class CSSkipLink extends React.Component<CSSkipLinkProps> {
	render() {
		return (
			<a
				className="cs-skip-link"
				href={this.props.href}
				style={{'--cs-skip-link-custom-c': this.props.color}}
				target="_self"
			>
				{`Jump to ${this.props.jumpDestination}`}
			</a>
		);
	}
}

export default CSSkipLink;
