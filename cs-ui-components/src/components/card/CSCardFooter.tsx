import React from 'react';

export interface CSCardFooterProps {
	[key: string]: any;
	id?: string;
}

class CSCardFooter extends React.Component<CSCardFooterProps> {

	render() {
		const { children, id, ...rest } = this.props;
		return (
			<footer
				className="cs-card-footer"
				id={id}
				{...rest}
			>
				{children}
			</footer>
		);
	}
}

export default CSCardFooter;
