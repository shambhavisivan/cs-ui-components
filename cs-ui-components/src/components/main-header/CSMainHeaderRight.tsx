import React from 'react';

export interface CSMainHeaderRightProps {
	id?: string;
}
class CSMainHeaderRight extends React.Component<CSMainHeaderRightProps> {
	render() {
		return <div className="cs-main-header-right" id={this.props.id}>
				{this.props.children}
			</div>;
	}
}

export default CSMainHeaderRight;
