import React from 'react';

class CSPathWrapper extends React.Component {

	render() {
		const children = this.props.children;
		return (
			<div className="cs-path-wrapper" role="listbox">
				{children}
			</div>
		);
	}
}

export default CSPathWrapper;
