import React from 'react';

export interface CSTabProps {
	title: string;
}

class CSTab extends React.Component<CSTabProps, {active: boolean}> {
	constructor(props: any) {
		super(props);

		this.state = {
			active: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => {
			return { active: !prevState.active };
		});
	}

	render() {
		const activeClass = (this.state.active ? 'cs-tab-active' : '');

		return (
			<div className={`cs-tab ${activeClass}`} onClick={this.handleClick}>
				{this.props.title}
			</div>
		);
	}
}

export default CSTab;