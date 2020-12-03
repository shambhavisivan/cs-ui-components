import React from 'react';

export interface CSPathWrapperProps {
	[key: string]: any;
	id?: string;
}

class CSPathWrapper extends React.Component<CSPathWrapperProps> {
	render() {
		const { children, id, ...rest } = this.props;
		return (
			<div className="cs-path-wrapper" role="listbox" id={id} {...rest}>
				{children}
			</div>
		);
	}
}

export default CSPathWrapper;
