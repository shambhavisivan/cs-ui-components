import React from 'react';
import { CSButton, CSIcon } from '@cloudsense/cs-ui-components';

interface Color {
	colorName: string;
	colorValue: string;
}

interface ColorsProps {
	colors: Array<Color>;
}

interface ColorsState {
	term: string;
}

class CSColorsPreview extends React.Component<ColorsProps, ColorsState> {
	constructor(props: ColorsProps) {
		super(props);

		this.searchHandler = this.searchHandler.bind(this);
		this.clearSearch = this.clearSearch.bind(this);

		this.state = {
			term: ''
		};
	}

	searchHandler(event: any) {
		this.setState({
			term: event.target.value
		});
	}

	clearSearch() {
		this.setState({
			term: ''
		});
	}

	render() {
		return (
			<>
				<div className="search-wrapper">
					<div className="search-inner-wrapper">
						<CSIcon name="search"/>
						<input className="search" placeholder="Search..." onChange={this.searchHandler} value={this.state.term} />
						{this.state.term &&
							<CSButton
								label="clear"
								labelHidden
								btnType="transparent"
								iconColor="var(--csd-icon-fill)"
								iconName="close"
								onClick={this.clearSearch}
							/>
						}
					</div>
				</div>
				<div className="cs-colors-wrapper">
					<div className="cs-colors">
						{this.props.colors.filter(color => {
							const term = this.state.term.toLowerCase();
							return color.colorName.toLowerCase().includes(term) || !term;
						}).map((colors, i) => (
							<div
								key={i}
								className="cs-color"
								style={{ backgroundColor: colors.colorValue }}
								tabIndex={0}
							>
								<div className="cs-color-body">
									<h4 className="cs-color-name">{colors.colorName}</h4>
									<span>{colors.colorValue}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</>
		);
	}
}

export default CSColorsPreview;
