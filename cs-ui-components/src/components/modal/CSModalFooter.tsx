import React from 'react';

export interface CSModalFooterProps {
	align?: string;
	id?: string;
}

class CSModalFooter extends React.Component<CSModalFooterProps> {
	public static defaultProps = {
		align: 'right'
	};

	render() {
		return (
			<footer
				className={`cs-modal-footer cs-modal-footer-${this.props.align}`}
				id={this.props.id}
			>
				{this.props.children}
			</footer>
		);
	}
}

export default CSModalFooter;
