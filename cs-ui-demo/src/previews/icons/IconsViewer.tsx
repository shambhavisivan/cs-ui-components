import React from 'react';
import {CSIcon, CSButton} from '@cloudsense/cs-ui-components';

interface Icon {
	name: string;
	content: string;
}

interface IconsViewerProps {
	icons: Array<Icon>;
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
				<div className="icons-search-wrapper">
					<CSIcon name="search"/>
					<input className="icons-search" placeholder="Search..." onChange={this.searchHandler} value={this.state.term} />
					{this.state.term &&
						<CSButton
							label="clear"
							labelHidden
							btnType="transparent"
							iconColor="var(--cs-icon-fill)"
							iconName="close"
							onClick={this.clearSearch}
						/>
					}
				</div>
				<div className="icons-preview-wrapper">
					<div className="icons-preview">
						{this.props.icons.filter(icon => {
							const term = this.state.term.toLowerCase();
							return icon.name.toLowerCase().includes(term) || !term;
						}).map((icons, i) => (
							<div key={i}>
								<div className="svg-wrapper">
									<div dangerouslySetInnerHTML={{__html: icons.content}}/>
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
