import React from 'react';

class CSMainHeaderIcon extends React.Component {
	render() {
		return <div className="cs-main-header-icon">
				{this.props.children}
			</div>;
	}
}

export default CSMainHeaderIcon;
