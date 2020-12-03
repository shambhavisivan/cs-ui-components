import React from 'react';

export type CSModalFooterAlign = 'right' | 'left' | 'center';

export interface CSModalFooterProps {
	[key: string]: any;
	align?: CSModalFooterAlign;
	id?: string;
}

class CSModalFooter extends React.Component<CSModalFooterProps> {
	public static defaultProps = {
		align: 'right'
	};

	render() {
		const { align, children, id, ...rest } = this.props;
		return (
			<footer
				className={`cs-modal-footer cs-modal-footer-${align}`}
				id={id}
				{...rest}
			>
				{children}
			</footer>
		);
	}
}

export default CSModalFooter;
