import React from "react";
import CSIcon from "../../components/CSIcon";

type Icon = {
	name: string;
	svg: string;
}

interface IconsViewerProps {
	icons: Icon[];
}

interface IconsViewerState {
	term: string;
}

class IconsViewer extends React.Component<IconsViewerProps, IconsViewerState> {
	constructor(props: IconsViewerProps) {
		super(props);

		this.searchHandler = this.searchHandler.bind(this);
		this.clearSearch = this.clearSearch.bind(this);

		this.state = {
			term: ''
		}
	}

	searchHandler(event: any) {
		this.setState({
			term: event.target.value
		});
	}

	searchingFor(term: string) {
		return function (x: any) {
			return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
		}
	}

	clearSearch() {
		this.setState({
			term: ''
		});
	}
	render() {
		return (
			<>
				<div className="icons-search-wrapper">
					<CSIcon name="search" styleClass="search-icon"/>
					<input className="icons-search" placeholder="Search..." onChange={this.searchHandler} value={this.state.term} />
					{ this.state.term ?
						<button className="clear-search-btn" onClick={this.clearSearch}>
							<CSIcon name="close" styleClass="clear-icon" />
						</button>
						: null
					}
				</div>
				<div className="icons-preview-wrapper">
					<div className="icons-preview">
						{this.props.icons.filter(this.searchingFor(this.state.term)).map((icons, i) => (
							<div key={i}>
								<div className="svg-wrapper">
									<div dangerouslySetInnerHTML={{__html: icons.svg}}/>
								</div>
								<p>{icons.name}</p>
							</div>
						))}
					</div>
				</div>
			</>
		);
	}
}

export default IconsViewer;