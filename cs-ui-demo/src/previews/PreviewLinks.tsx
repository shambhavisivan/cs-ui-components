import React from 'react';
import { CSInputSearch } from '@cloudsense/cs-ui-components';

export interface PreviewLinksProps {
	component?: any;
}

export interface PreviewLinksState {
	term: string;
}

class PreviewLinks extends React.Component<PreviewLinksProps, PreviewLinksState> {

	constructor(props: PreviewLinksProps) {
		super(props);

		this.state = {
			term: ''
		};
	}

	handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ term: event.target.value });
	}

	searchingForProp = (term: any) => {
		return (example: any) => {
			return example.propName.toLowerCase().includes(term.toLowerCase()) ||
			example.variations.find((item: any) => item.quickLink && item.quickLink.toLowerCase().includes(term.toLowerCase()))
			|| false;
		};
	}

	render() {
		return (
			<>
				<CSInputSearch
					label="Search props"
					labelHidden
					placeholder="Search props"
					onChange={this.handleOnChange}
				/>
				<div className="prop-sidebar-wrapper">
					{this.props.component.examples.filter(this.searchingForProp(this.state.term)).map((example: any, i: number) => (
						<div className="prop-group" key={i}>
							<h4>
								<a href={`#${this.props.component.name}-${example.propName}`} key={example.propName}>
									{example.propName}
								</a>
							</h4>
							{example.variations.map((variation: any, j: any) => (
								variation.quickLink ? (
									<span key={j}>
										<a href={`#${this.props.component.name}-${example.propName}-${variation.quickLink}`}>
											{variation.quickLink}
										</a>
									</span>
								) : null
							))}
						</div>
					))}
				</div>
				<div className="prop-sidebar-bottom-group">
					<div className="prop-group">
						<h4>
							<a href={`#properties-table-${this.props.component.name}`}>
								Properties List
							</a>
						</h4>
					</div>
					{this.props.component.accessibility && (
						<div className="prop-group">
							<h4>
								<a href={`#accessibility-table-${this.props.component.name}`}>
									Accessibility
								</a>
							</h4>
						</div>
					)}
					{this.props.component.api && (
						<div className="prop-group">
							<h4>
								<a href={`#api-table-${this.props.component.name}`}>
									API
								</a>
							</h4>
						</div>
					)}
				</div>
			</>
		);
	}
}

export default PreviewLinks;
