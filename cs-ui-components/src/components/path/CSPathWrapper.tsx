import React from 'react';

export interface CSPathWrapperProps {
	id?: string;
}

class CSPathWrapper extends React.Component<CSPathWrapperProps> {
	render() {
		const children = this.props.children;
		return (
			<div className="cs-path-wrapper" role="listbox" id={this.props.id}>
				{children}
			</div>
		);
	}
}

export default CSPathWrapper;
