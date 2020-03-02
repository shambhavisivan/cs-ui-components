import React from 'react';

class CSMainHeaderRight extends React.Component {
	render() {
		return <div className="cs-main-header-right">
				{this.props.children}
			</div>;
	}
}

export default CSMainHeaderRight;
