import React from 'react';

export interface CSModalFooterProps {
	align?: string;
}

class CSModalFooter extends React.Component<CSModalFooterProps> {
	public static defaultProps = {
		align: 'right'
	};

	render() {
		return (
			<footer className={`modal-footer modal-footer-${this.props.align}`}>
				{this.props.children}
			</footer>
		);
	}
}

export default CSModalFooter;
