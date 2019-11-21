import React from "react";
import CSIcon from "../../components/CSIcon";

function searchingFor(term) {
	return function (x) {
		return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
	}
}

class IconsViewer extends React.Component {
	constructor(props) {
		super(props);

		this.searchHandler = this.searchHandler.bind(this);
		this.clearSearch = this.clearSearch.bind(this);

		this.state = {
			term: ''
		}
	}

	searchHandler(event) {
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
						{this.props.icons.filter(searchingFor(this.state.term)).map((icons, i) => (
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