import React from 'react';

export interface CSButtonGroupProps {
	combined: boolean;
}

class CSButtonGroup extends React.Component<CSButtonGroupProps> {
	public static defaultProps = {
		combined: true
	};

	render() {
		return (
			<div className={`cs-button-group cs-button-group-${this.props.combined}`}>
				{this.props.children}
			</div>
		);
	}
}

export default CSButtonGroup;
