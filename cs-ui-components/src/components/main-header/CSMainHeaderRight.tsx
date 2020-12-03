import React from 'react';

export interface CSMainHeaderRightProps {
	[key: string]: any;
	id?: string;
}
class CSMainHeaderRight extends React.Component<CSMainHeaderRightProps> {
	render() {
		const { children, id, ...rest } = this.props;
		return <div className="cs-main-header-right" id={id} {...rest}>
				{children}
			</div>;
	}
}

export default CSMainHeaderRight;
