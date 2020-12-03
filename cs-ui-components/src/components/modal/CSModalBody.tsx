import React, { CSSProperties } from 'react';

export interface CSModalBodyProps {
	[key: string]: any;
	id?: string;
	padding?: string;
}

class CSModalBody extends React.Component<CSModalBodyProps> {

	render() {
		const { children, id, padding, ...rest } = this.props;

		const style: CSSProperties = {
			'--body-padding': padding
		};

		return (
			<div className="cs-modal-body" style={style} id={id} {...rest}>
				{children}
			</div>
		);
	}
}

export default CSModalBody;
