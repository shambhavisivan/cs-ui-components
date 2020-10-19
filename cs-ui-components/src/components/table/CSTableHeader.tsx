import React from 'react';

export interface CSTableHeaderProps {
	id?: string;
}

class CSTableHeader extends React.Component<CSTableHeaderProps> {
	render() {

		const childrenWithProp =  React.Children.map(this.props.children, child => {
			if (child) {
				return (
					React.cloneElement(
						child as any,
						{ role: 'columnheader' }
					)
				);
			}
		});

		return (
			<div className="cs-table-header" role="row" id={this.props.id}>
				{childrenWithProp}
			</div>
		);
	}
}

export default CSTableHeader;
